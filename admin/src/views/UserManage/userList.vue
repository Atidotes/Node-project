<template>
  <!-- 表头 -->
  <el-page-header :icon="null" title="用户管理" content="用户列表"></el-page-header>

  <!-- 表格 -->
  <el-table :data="userData.tableData" size="small" border style="width: 100%;margin-top:50px;">
    <!-- 用户名 -->
    <el-table-column prop="userName" label="用户名" />

    <!-- 用户账号 -->
    <el-table-column prop="accountNumber" label="用户账号" />

    <!-- 用户头像 -->
    <el-table-column prop="avatar" label="用户头像">
      <template #default="scope">
        <el-avatar v-if="scope.row.avatar" :size="50" :src="scope.row.avatar" />
        <el-avatar v-else :size="50"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      </template>
    </el-table-column>

    <!-- 用户角色 -->
    <el-table-column prop="role" label="用户角色">
      <template #default="scope">
        <el-tag v-if="scope.row.role === 1" effect="dark" type="danger">管理员</el-tag>
        <el-tag v-else effect="dark" type="info">编辑员</el-tag>
      </template>
    </el-table-column>

    <!-- 操作 -->
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-button type="primary" @click="editUser(scope.row)">编辑</el-button>
        <el-popconfirm title="你确定要删除嘛？" confirm-button-text="确认" cancel-button-text="取消"
          @confirm="deleteUser(scope.row)">
          <template #reference>
            <el-button type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

  <!-- 弹窗 -->
  <el-dialog v-model="userData.dialogVisible" title="编辑" width="50%">

    <el-form ref="userFormRef" :model="user" status-icon :rules="userRules" label-position="right" :label-width="85">

      <!-- 用户名 -->
      <el-form-item label="用户名" prop="userName">
        <el-input v-model.number="user.userName" type="text" autocomplete="off" show-word-limit placeholder="请输入用户名" />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" type="password" autocomplete="off" placeholder="请输入密码" show-password
          maxlength="16" minlength="8" />
      </el-form-item>

      <!-- 角色 -->
      <el-form-item label="角色" prop="role">
        <el-select v-model="user.role" placeholder="请选择角色">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <!-- 个人简介 -->
      <el-form-item label="个人简介" prop="introduction">
        <el-input v-model="user.introduction" :rows="2" type="textarea" placeholder="请填写个人简介" autocomplete="off" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="userData.dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirm">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import {
  getUserList,
  deleteUserInfo,
  getUserInfo,
  reviseUserInfo,
} from "../../api/userApi";
import { mobilePhone, pass } from "../../util/regular";
import { useStore } from "vuex";

/**
 * 数据
 */
const store = useStore();
const userFormRef = ref("");
const userData = reactive({
  dialogVisible: false,
  tableData: [],
});
const user = reactive({
  userName: "",
  password: "",
  role: "",
  introduction: "",
});
const userInfo = computed(() => store.state.userInfo);

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
  password: [{ validator: validatePassword, trigger: "blur" }],
  introduction: [{ required: true, message: "请输入简介！", trigger: "blur" }],
  role: [{ required: true, message: "请选择角色！", trigger: "blur" }],
});

/**
 * 请求数据
 */
onMounted(() => {
  getUserData();
});

/**
 * 获取用户列表
 */
const getUserData = async () => {
  const result = await getUserList();
  if (result.code === 200 && result.success) {
    userData.tableData = result.data;
  }
};

/**
 * 编辑用户
 */
const editUser = async (record) => {
  const result = await getUserInfo(record._id);
  Object.assign(user, result.data);
  userData.dialogVisible = true;
};

/**
 * 删除用户
 */
const deleteUser = async (record) => {
  if (record.accountNumber === userInfo.value.accountNumber) {
    return ElMessage({
      type: "error",
      message: "此用户为本用户不能删除",
    });
  }

  const result = await deleteUserInfo(record._id);

  if (result.code === 200 && result.success) {
    getUserData();
    ElMessage({
      type: "success",
      message: result.message,
    });
  } else {
    ElMessage({
      type: "error",
      message: "删除失败",
    });
  }
};

/**
 * 弹窗确认按钮回调
 */
const confirm = () => {
  userFormRef.value.validate(async (valid) => {
    if (valid) {
      const result = await reviseUserInfo(user._id, user);

      if (result.code === 200 && result.success) {
        getUserData();
        ElMessage({
          type: "success",
          message: result.message,
        });
        userData.dialogVisible = false;
      } else {
        ElMessage({
          type: "error",
          message: "修改失败",
        });
      }
    }
  });
};
</script>

<style lang="scss" scoped>
</style>
