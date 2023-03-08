<template>
  <!-- 表头 -->
  <el-page-header :icon="null" title="产品管理" content="添加产品"></el-page-header>

  <!-- 表单 -->
  <el-card style="margin-top:50px;">
    <el-form ref="productFormRef" :model="productDate" status-icon :rules="productRules" label-position="right"
      :label-width="110">

      <!-- 产品名称 -->
      <el-form-item label="产品名称" prop="title">
        <el-input v-model.number="productDate.title" type="text" autocomplete="off" show-word-limit
          placeholder="请输入产品名称" />
      </el-form-item>

      <!-- 产品简要描述 -->
      <el-form-item label="产品简要描述" prop="introduction">
        <el-input v-model.number="productDate.introduction" :rows="2" type="textarea" autocomplete="off"
          placeholder="请填写产品简要描述" />
      </el-form-item>

      <!-- 产品详细描述 -->
      <el-form-item label="产品详细描述" prop="detail">
        <el-input v-model="productDate.detail" :rows="2" type="textarea" autocomplete="off" placeholder="请输入产品详细描述" />
      </el-form-item>

      <!-- 产品图片 -->
      <el-form-item label="产品图片" prop="cover">
        <uploads :avatar="productDate.cover" @upload="changeUpload"></uploads>
      </el-form-item>

      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" @click="productAdd">添加产品</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive, ref } from "vue";
import uploads from "../../components/Upload/upload.vue";
import { upload } from "../../api/publicApi";
import { useRouter } from "vue-router";

const router = useRouter();
const productFormRef = ref("");

/**
 * 表单数据
 */
const productDate = reactive({
  title: "",
  introduction: "",
  detail: "",
  cover: "",
  file: null,
});

/**
 * 上传图片变化回调
 */
const changeUpload = (file) => {
  productDate.cover = URL.createObjectURL(file);
  productDate.file = file;
};

/**
 * 表单验证
 */
const productRules = reactive({
  title: [
    { required: true, message: "请输入产品名称！", trigger: "blur" },
    { min: 5, max: 20, message: "用户名长度为5~20个字符", trigger: "change" },
  ],
  introduction: [
    { required: true, message: "请输入产品简要描述！", trigger: "blur" },
  ],
  detail: [
    { required: true, message: "请输入产品详细描述！", trigger: "blur" },
  ],
  cover: [{ required: true, message: "请上传产品图片！", trigger: "blur" }],
});

/**
 * 提交表单
 */
const productAdd = () => {
  productFormRef.value.validate(async (valid) => {
    if (valid) {
      const params = new FormData();
      for (let item in productDate) {
        params.append(item, productDate[item]);
      }
      const result = await upload("/product/add", params);

      if (result.code === 200 && result.success) {
        router.push("/product-list");
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
</style>