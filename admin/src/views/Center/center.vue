<template>
  <!-- 表头 -->
  <el-page-header :icon="null" title="企业后台管理系统" content="首页"></el-page-header>

  <!-- 欢迎语 -->
  <el-card class="card">
    <el-row align="middle">
      <el-col :span="4">
        <el-avatar :size="100" :src="circleUrl" />
      </el-col>

      <el-col :span="20">
        <div class="box-text">
          欢迎回来{{ userInfo.userName }}, 下午好
        </div>
      </el-col>
    </el-row>
  </el-card>

  <!-- 产品展示 -->
  <el-card class="card">
    <template #header>
      <span>公司产品</span>
    </template>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-if="loopList.length" v-for="item in loopList" :key="item">
        <div class="bg" :style="{
          backgroundImage: `url(${item.cover})`
        }">
          <h3 text="2xl" justify="center" style="color:#fff;">{{ item.title }}</h3>
        </div>
      </el-carousel-item>
      <el-carousel-item v-else v-for="(item,index) in 5" :key="index">
        <h3 text="2xl" justify="center" style="color:#fff;">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script setup>
import { computed, ref, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { productList } from "../../api/productApi";

const store = useStore();
const userInfo = computed(() => store.state.userInfo);
const loopList = ref([]);

onMounted(() => {
  getData();
});

/**
 * 获取表格数据
 */
const getData = async () => {
  let result = await productList();

  if (result.code === 200 && result.success) {
    loopList.value = result.data;
  } else {
    ElMessage({
      type: "error",
      message: "请求资源失败",
    });
  }
};

/**
 * 获取头像
 */
let defaultUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
const circleUrl = computed(() =>
  userInfo.value.avatar ? userInfo.value.avatar : defaultUrl
);
</script>

<style lang="scss" scoped>
.card {
  margin-top: 50px;
}
.box-text {
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.bg {
  background-size: 100%;
  background-position: center;
}
</style>