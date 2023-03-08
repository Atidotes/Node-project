<template>
  <!-- 表头 -->
  <el-page-header title="新闻管理" content="修改新闻" @back="handleBack"></el-page-header>

  <!-- 表单 -->
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="85px" class="ruleForm">
    <!-- 标题 -->
    <el-form-item label="标题" prop="title">
      <el-input v-model="ruleForm.title" type="text" placeholder="请输入标题" autocomplete="off" />
    </el-form-item>

    <!-- 内容 -->
    <el-form-item label="内容" prop="content">
      <editor v-model="ruleForm.content"></editor>
    </el-form-item>

    <!-- 类别 -->
    <el-form-item label="类别" prop="category">
      <el-select v-model="ruleForm.category" placeholder="请选择类别">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>

    <!-- 封面图片 -->
    <el-form-item label="封面图片" prop="cover">
      <uploads :avatar="ruleForm.cover" @upload="changeUpload"></uploads>
    </el-form-item>

    <!-- 发布 -->
    <el-button type="primary" @click="btn">修改新闻</el-button>
  </el-form>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import uploads from "../../components/Upload/upload.vue";
import editor from "../../components/Editor/editor.vue";
import { upload } from "../../api/publicApi";
import { useRoute, useRouter } from "vue-router";
import { newInfo } from "../../api/newApi";

const ruleFormRef = ref("");
const router = useRouter();
const route = useRoute();

onMounted(() => {
  getData();
});

/**
 * 表单数据
 */
const ruleForm = reactive({
  title: null,
  content: null,
  category: null, // 最新动态1 典型案例2 通知公告3
  cover: null,
  file: null,
  isPublish: 0, // 未发布0 已发布1
});

/**
 * 选择器数据
 */
const options = reactive([
  {
    value: 1,
    label: "最新动态",
  },
  {
    value: 2,
    label: "典型案例",
  },
  {
    value: 3,
    label: "通知公告",
  },
]);

/**
 * 表单验证规则
 */
const rules = reactive({
  title: [
    { required: true, message: "请输入标题！", trigger: "blur" },
    { min: 5, max: 20, message: "标题长度为5~20个字符", trigger: "change" },
  ],
  content: [{ required: true, message: "请输入内容！", trigger: "blur" }],
  category: [{ required: true, message: "请选择类别！", trigger: "blur" }],
  cover: [{ required: true, message: "请上传封面！", trigger: "blur" }],
});

/**
 * 获取表单数据
 */
const getData = async () => {
  let result = await newInfo(route.params.id);

  if(result.code === 200 && result.success){
    Object.assign(ruleForm,result.data)
  }else{
    ElMessage({
      type:'error',
      message:'数据加载失败'
    })
  }
};

/**
 * 返回路由
 */
const handleBack = () => {
  router.back();
};

/**
 * 上传图片变化
 */
const changeUpload = (file) => {
  ruleForm.cover = URL.createObjectURL(file);
  ruleForm.file = file;
};

/**
 * 保存数据
 */
const btn = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const params = new FormData();
      for (let item in ruleForm) {
        params.append(item, ruleForm[item]);
      }

      let result = await upload("/new/revise", params);

      if (result.code === 200 && result.success) {
        router.push("/news-list");
        ElMessage({
          type: "success",
          message: result.message,
        });
      } else {
        ElMessage({
          type: "error",
          message: "发布失败",
        });
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.ruleForm {
  margin-top: 50px;
}
</style>