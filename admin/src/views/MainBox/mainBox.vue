<template>
  <el-container class="box">
    <asides></asides>
    <el-container direction="vertical">
      <headers></headers>
      <el-main>
        <el-scrollbar view-style="padding-right:25px;">
          <router-view></router-view>
        </el-scrollbar>
      </el-main>  
    </el-container>
  </el-container>
</template>

<script setup>
import asides from "../../components/Aside/aside.vue";
import headers from "../../components/Header/header.vue";
</script>

<style lang="scss" scoped>
::v-deep .el-container {
  height: 100vh;
}
.el-main {
  padding-right: 0;
}

.el-scrollbar{
  --el-scrollbar-bg-color:#000;
}
</style>