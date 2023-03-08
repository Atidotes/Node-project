<template>
  <el-header class="header">
    <div class="left">
      <el-icon class="icon" @click="openAside">
        <Menu />
      </el-icon>
      <h1>企业后台管理系统</h1>
    </div>
    <div class="right">
      <span>您好，欢迎{{userInfo.userName}}回来</span>

      <el-dropdown>
        <span>
          <el-icon color="#fff" :size="24">
            <UserFilled/>
          </el-icon>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handelCenter">个人中心</el-dropdown-item>
            <el-dropdown-item @click="handelSignOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { useStore } from "vuex";
import { Menu, UserFilled,ArrowDown } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
import { computed } from "vue";

const store = useStore()
const router = useRouter()

const userInfo = computed(()=> store.state.userInfo)

/**
 * 用户折叠侧边栏
 */
const openAside = () => {
  store.commit("changCollapse");
};

/**
 * 用户退出登录
 */
const handelCenter = () =>{
  router.push({
    path:'/home'
  })
}
const handelSignOut = () =>{
  localStorage.removeItem('token')
  store.commit('cleanUpUserInfo')
  router.push({
    path:'/login'
  })
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #545c64;
  color: #fff;
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    .icon{
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 220px;
  }
}
</style>