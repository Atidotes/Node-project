<template>
  <div class="login">
    <div class="box" :style="{height:flag? '420px' : '280px' }">
      <h1 class="title">企业后台管理系统</h1>

      <!-- 表单 -->
      <el-form v-if="!flag" ref="loginFormRef" :model="loginDate" status-icon :rules="loginRules" class="loginForm">

        <!-- 账号 -->
        <el-form-item label="账号" prop="accountNumber">
          <el-input v-model.number="loginDate.accountNumber" type="text" autocomplete="off" show-word-limit
            placeholder="请输入手机号" />
        </el-form-item>

        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginDate.password" type="password" autocomplete="off" placeholder="请输入密码" show-password
            maxlength="16" minlength="8" />
        </el-form-item>

        <!-- 登录 -->
        <el-button class="btn" type="primary" @click="submitForm()">登录</el-button>
      </el-form>

      <el-form v-if="flag" ref="logonRef" :model="logonDate" status-icon label-width="68" class="loginForm"
        hide-required-asterisk :rules="logonRules">
        <!-- 账号 -->
        <el-form-item label="账号" prop="accountNumber">
          <el-input v-model.number="logonDate.accountNumber" type="text" autocomplete="off" show-word-limit
            placeholder="请输入手机号" />
        </el-form-item>

        <!-- 昵称 -->
        <el-form-item label="昵称" prop="userName">
          <el-input v-model.number="logonDate.userName" type="text" autocomplete="off" show-word-limit
            placeholder="请输入昵称" />
        </el-form-item>

        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="logonDate.password" type="password" autocomplete="off" placeholder="请输入密码" show-password
            maxlength="16" minlength="8" />
        </el-form-item>

        <!-- 确认密码 -->
        <el-form-item label="确认密码" prop="password2">
          <el-input v-model="logonDate.password2" type="password" autocomplete="off" placeholder="请输入确认密码" show-password
            maxlength="16" minlength="8" />
        </el-form-item>

        <!-- 验证码 -->
        <el-row>
          <el-col :span="15">
            <el-form-item label="验证码" prop="captcha">
              <el-input v-model="logonDate.captcha" type="text" autocomplete="off" placeholder="请输入验证码" />
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <div @click="getCaptcha" class="captcha" v-html="captchaInfo"></div>
          </el-col>
        </el-row>

        <el-button class="btn" type="primary" @click="logon">注册</el-button>
      </el-form>

      <a v-if="!flag" class="logon-a" @click="handleLogon">还没有账号？去注册</a>
      <a v-if="flag" class="logon-a" @click="handleLogin">已有账号？去登录</a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, nextTick } from "vue";
import { mobilePhone, pass } from "../../util/regular";
import { useRouter } from "vue-router";
import { loginApi, captchaApi, logonApi } from "../../api/loginApi";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const loginFormRef = ref("");
const flag = ref(false);
const logonRef = ref(null);
const captchaInfo = ref(null);

const logonDate = reactive({
  accountNumber: "",
  password: "",
  password2: "",
  captcha: "",
  userName: "",
});

onMounted(() => {
  getCaptcha();
});

/**
 * 获取验证码
 */
const getCaptcha = async () => {
  let result = await captchaApi();

  if (result.code === 200 && result.success) {
    captchaInfo.value = result.data;
    await nextTick();
  }
};

/**
 * 点击去注册
 */
const handleLogon = () => {
  flag.value = true;
};

/**
 * 点击登录
 */
const handleLogin = () => {
  flag.value = false;
};

/**
 * 定义表单数据
 */
const loginDate = reactive({
  accountNumber: "",
  password: "",
});

/**
 * 校验规则
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

const validatePassword2 = (rules, value, callback) => {
  if (!value) {
    return callback(new Error("请输入确认密码！"));
  } else {
    if (!pass.test(value)) {
      return callback(new Error("密码由字母、数字、特殊符号组成8~16位组合"));
    } else if (logonDate.password !== logonDate.password2) {
      return callback(new Error("确认密码与密码不符合！请重新输入"));
    } else {
      return callback();
    }
  }
};

const loginRules = reactive({
  accountNumber: [{ validator: validateNumber, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
});

const logonRules = reactive({
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 2, max: 10, message: "用户名长度为2~5个字符", trigger: "change" },
  ],
  accountNumber: [{ validator: validateNumber, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
  password2: [{ validator: validatePassword2, trigger: "blur" }],
  captcha: [
    { required: true, message: "请输入验证码", trigger: "blur" },
    { min: 4, max: 4, message: "验证码长度为4位字符", trigger: "change" },
  ],
});

/**
 * 提交表单
 */
const submitForm = async () => {
  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      const result = await loginApi(loginDate);

      if (result.code === 200 && result.success) {
        store.commit("getUserInfo", result.data);
        store.commit("changGetterRouter", false);
        router.push({ path: "/center" });
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

const logon = () => {
  logonRef.value.validate(async (valid) => {
    if (valid) {
      let result = await logonApi(logonDate);
      getCaptcha();

      if (result.code === 200 && result.success) {
        flag.value = false;
        Object.assign(logonDate, {
          accountNumber: "",
          password: "",
          password2: "",
          captcha: "",
          userName: "",
        });
        ElMessage({
          type: "success",
          message: result.message,
        });
      } else {
        ElMessage({
          type: "error",
          message: result.message,
        });
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 450px;
    // height: 280px;
    padding: 20px 50px;
    border-radius: 10px;
    background-color: #353535;
    box-shadow: #d3d3d3 10px 30px 30px;
    box-sizing: border-box;
    .title {
      text-align: center;
      line-height: 40px;
      color: #fff;
    }
    .loginForm {
      margin: 20px auto;
    }
    .btn {
      display: block;
      width: 220px;
      height: 35px;
      margin: auto;
      font-size: 20px;
    }
  }
}

.logon-a {
  color: #fff;
  display: block;
  width: 100%;
  text-align: end;
  cursor: pointer;
}

.box-cartoon {
  transition: transform 3s;
}
.box-cartoon {
  transform: rotateY(180deg);
}

.captcha {
  cursor: pointer;
  height: 32px;
  margin-left: 10px;
  border-radius: 5px;
  overflow: hidden;
}

::v-deep .el-form-item__label {
  color: #fff;
}

::v-deep .el-form-item__error {
  color: #fff;
}
</style>