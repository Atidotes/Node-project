<template>
  <!-- 表头 -->
  <el-page-header :icon="null" title="企业后台管理系统" content="个人中心"></el-page-header>

  <!-- 头像 -->
  <el-row :gutter="10">
    <el-col :span="8">
      <el-card class="box-card card">
        <el-avatar :size="100" :src="circleUrl" />
        <h3 class="text-title">{{userInfo.userName}}</h3>
        <h4 class="text-title">{{ userInfo.role === 1? '管理员' : '编辑员'  }}</h4>
      </el-card>
    </el-col>

    <!-- 个人信息 -->
    <el-col :span="16">
      <el-card class="card">
        <template #header>
          <div class="card-header">
            <span>个人信息</span>
          </div>
        </template>

        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm"
          label-position="right" :label-width="85">

          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName" type="text" placeholder="请输入用户名" autocomplete="off" />
          </el-form-item>

          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model.number="ruleForm.gender">
              <el-radio :label="0">保密</el-radio>
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="个人简介" prop="introduction">
            <el-input v-model="ruleForm.introduction" :rows="2" type="textarea" placeholder="请填写个人简介"
              autocomplete="off" />
          </el-form-item>

          <el-form-item label="头像" prop="avatar">
            <uploads :avatar="ruleForm.avatar" @upload="changeUpload"></uploads>
          </el-form-item>

          <el-button type="primary" @click="btn">保存</el-button>
        </el-form>

      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { Plus } from "@element-plus/icons-vue";
import { computed, createBlock, reactive, ref } from "vue";
import { useStore } from "vuex";
import { upload } from "../../api/publicApi";
import uploads from '../../components/Upload/upload.vue'

const store = useStore();
const userInfo = computed(() => store.state.userInfo);

/**
 * 基本数据
 */
const ruleFormRef = ref("");

/**
 * 表单数据
 */
const { userName, gender, introduction, avatar } = userInfo.value;
const ruleForm = reactive({
  userName,
  gender,
  introduction,
  avatar,
  file: null,
});

/**
 * 上传图片变化回调
 */
const changeUpload = (file) => {
  ruleForm.avatar = URL.createObjectURL(file);
  ruleForm.file = file;
};

/**
 * 表单验证规则
 */
const rules = reactive({
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 2, max: 10, message: "用户名长度为2~5个字符", trigger: "blur" },
  ],
  gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
  introduction: [{ required: true, message: "请输入简介", trigger: "blur" }],
  avatar: [{ required: true, message: "请上传头像", trigger: "blur" }],
});

/**
 * 获取头像
 */
let defaultUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
const circleUrl = computed(() =>
  userInfo.value.avatar ? userInfo.value.avatar : defaultUrl
);

/**
 * 保存
 */
const btn = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const params = new FormData();
      for (let item in ruleForm) {
        params.append(item, ruleForm[item]);
      }
      const result = await upload('/user/upload',params);

      if (result.code === 200 && result.success) {
        store.commit("getUserInfo", result.data);

        ElMessage({
          message: result.message,
          type: "success",
        });
      } else {
        ElMessage({
          message: result.message,
          type: "error",
        });
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 50px;
}
.box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .text-title {
    margin-top: 8px;
  }
}
</style>