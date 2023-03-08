<template>
  <el-menu :default-active="router.fullPath" mode="horizontal" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/news">新闻中心</el-menu-item>
    <el-menu-item index="/product">产品与服务</el-menu-item>
    <!-- <el-menu-item @click="toLogin">登录</el-menu-item> -->
  </el-menu>
  <div class="box">企业门户网站</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const router = useRoute()

// const toLogin = () =>{
//   window.location.href = 'http://39.103.187.82:8080/#/login'
// }
</script>

<style lang="scss" scoped>
.box{
  position: absolute;
  top: 0px;
  right: 0;
  height: 59px;
  width: 130px;
  text-align: center;
  line-height: 59px;
}
</style>