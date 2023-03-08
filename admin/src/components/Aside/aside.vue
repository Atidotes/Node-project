<template>
  <el-aside :width="collapse ? '64px' : '200px'">
    <el-scrollbar>
      <el-menu active-text-color="#ffd04b" background-color="#545c64" :router="true" text-color="#fff"
        :unique-opened="true" :default-active="route.fullPath" :collapse="collapse" :collapse-transition="false">

        <el-menu-item index="/center">
          <el-icon>
            <HomeFilled />
          </el-icon>
          <span>首页</span>
        </el-menu-item>

        <el-sub-menu index="news">
          <template #title>
            <el-icon>
              <MessageBox />
            </el-icon>
            <span>新闻管理</span>
          </template>
          <el-menu-item index="/news-add">添加新闻</el-menu-item>
          <el-menu-item index="/news-list">新闻列表</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="product">
          <template #title>
            <el-icon>
              <Grid />
            </el-icon>
            <span>产品管理</span>
          </template>
          <el-menu-item index="/product-add">添加产品</el-menu-item>
          <el-menu-item index="/product-list">产品列表</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="user" v-admin>
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="/user-add">添加用户</el-menu-item>
          <el-menu-item index="/user-list">用户列表</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/home">
          <el-icon>
            <Avatar />
          </el-icon>
          <span>个人中心</span>
        </el-menu-item>

      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
import {
  HomeFilled,
  MessageBox,
  Grid,
  UserFilled,
  Avatar,
} from "@element-plus/icons-vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * 获取是否折叠
 */
const store = useStore();
const collapse = computed(() => store.state.isCollapse);

/**
 * 自定义指令
 */
const vAdmin = {
  mounted(el) {
    if (store.state.userInfo.role === 2) {
      el.parentNode.removeChild(el);
    }
  },
};
</script>

<style lang="scss" scoped>
.el-aside{
    background-color: #545c64;
}
</style>