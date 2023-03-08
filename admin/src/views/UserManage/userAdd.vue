<template>
  <!-- 表头 -->
  <el-page-header :icon="null" title="用户管理" content="添加用户"></el-page-header>

  <!-- 表单 -->
  <el-card style="margin-top:50px;">
    <el-form ref="userFormRef" :model="userDate" status-icon :rules="userRules" label-position="right"
      :label-width="85">

      <!-- 用户名 -->
      <el-form-item label="用户名" prop="userName">
        <el-input v-model.number="userDate.userName" type="text" autocomplete="off" show-word-limit
          placeholder="请输入用户名" />
      </el-form-item>

      <!-- 账号 -->
      <el-form-item label="账号" prop="accountNumber">
        <el-input v-model.number="userDate.accountNumber" type="text" autocomplete="off" show-word-limit
          placeholder="请输入账号/手机号" />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item label="密码" prop="password">
        <el-input v-model="userDate.password" type="password" autocomplete="off" placeholder="请输入密码" show-password
          maxlength="16" minlength="8" />
      </el-form-item>

      <!-- 角色 -->
      <el-form-item label="角色" prop="role">
        <el-select v-model="userDate.role" placeholder="请选择角色">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <!-- 个人简介 -->
      <el-form-item label="个人简介" prop="introduction">
        <el-input v-model="userDate.introduction" :rows="2" type="textarea" placeholder="请填写个人简介" autocomplete="off" />
      </el-form-item>

      <!-- 头像 -->
      <el-form-item label="头像" prop="avatar">
        <uploads :avatar="userDate.avatar" @upload="changeUpload"></uploads>
      </el-form-item>

      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" @click="addUser">添加用户</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive, ref } from "vue";
import { mobilePhone, pass } from "../../util/regular";
import uploads from "../../components/Upload/upload.vue";
import { upload } from "../../api/publicApi";
import { useRouter } from "vue-router";

const router = useRouter();
const userFormRef = ref("");

/**
 * 表单数据
 */
const userDate = reactive({
  userName: "",
  accountNumber: "",
  password:'',
  introduction: "",
  avatar: "",
  role: "",
  file: null,
  gender: 0,
});

/**
 * 选择框数据
 */
const options = reactive([
  {
    value: 1,
    label: "管理员",
  },
  {
    value: 2,
    label: "编辑员",
  },
]);

/**
 * 上传图片变化回调
 */
const changeUpload = (file) => {
  userDate.avatar = URL.createObjectURL(file);
  userDate.file = file;
};

/**
 * 表单验证
 */
const validateNumber = (rules, value, callback) => {
  if (!value) {
    return callback(new Error("请输入账号！"));
  } else {
    if (!mobilePhone.test(value)) {
      return callback(new Error("请正确输入账号！"));
    } else {
      return callback();
    }
  }
};

const validatePassword = (rules, value, callback) => {
  if (!value) {
    return callback(new Error("请输入密码！"));
  } else {
    if (!pass.test(value)) {
      return callback(new Error("密码由字母、数字、特殊符号组成8~16位组合"));
    } else {
      return callback();
    }
  }
};

const userRules = reactive({
  userName: [
    { required: true, message: "请输入用户名！", trigger: "blur" },
    { min: 2, max: 10, message: "用户名长度为2~5个字符", trigger: "blur" },
  ],
  accountNumber: [{ validator: validateNumber, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
  introduction: [{ required: true, message: "请输入简介！", trigger: "blur" }],
  avatar: [{ required: false, message: "请上传头像！", trigger: "blur" }],
  role: [{ required: true, message: "请选择角色！", trigger: "blur" }],
});

/**
 * 提交表单
 */
const addUser = () => {
  userFormRef.value.validate(async (valid) => {
    if (valid) {
      const params = new FormData();
      for (let item in userDate) {
        params.append(item, userDate[item]);
      }
      const result = await upload("/user/add", params);

      if (result.code === 200 && result.success) {
        router.push("/user-list");
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