<template>
  <div v-if="loopList.length">
    <el-carousel height="calc(100vh - 59px)" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item in loopList" :key="item._id">
        <div class="box" :style="{backgroundImage:`url(${item.cover})`}">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <h2>{{item.title}}</h2>
              </div>
            </template>
            <div>{{item.introduction}}</div>
            <div style="margin-top:15px;">{{item.detail}}</div>
          </el-card>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <el-empty v-else description="数据为空" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getList } from "@/api/productApi";

const loopList = ref([]);

onMounted(async () => {
  let result = await getList();

  if (result.code === 200 && result.success) {
    loopList.value = result.data;
  }
});
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.box-card {
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>