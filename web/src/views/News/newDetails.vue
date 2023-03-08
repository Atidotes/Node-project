<template>
  <el-row>
    <!-- 新闻 -->
    <el-col :span="17" :offset="1">
      <h2 style="margin-top:10px;">{{detailsData.title}}</h2>
      <div class="time">{{timeFormat(detailsData.editTime)}}</div>
      <el-divider />
      <div v-html="detailsData.content"></div>
    </el-col>

    <!-- 侧边栏 -->
    <el-col :span="4" :offset="1" :pull="1">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>最新新闻</span>
          </div>
        </template>
        <div @click="toDetails(item._id)" v-for="item in lastInfo" :key="item._id" class="item">
          <div>{{item.title}}</div>
          <div class="time">{{timeFormat(item.editTime)}}</div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { newDetails, lastNewList } from "@/api/newsApi";
import { watchEffect,onBeforeUnmount, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { timeFormat } from "@/util/timeFormat";

const route = useRoute();
const router = useRouter();
const detailsData = reactive({});
const lastInfo = ref([]);

const off = watchEffect(async () => {
  const ID = route.params.id;
  if (!ID) return;
  let result = await newDetails({ id: ID });
  let res = await lastNewList();

  if (result.code === 200 && result.success) {
    Object.assign(detailsData, result.data);
  }

  if (res.code === 200 && res.success) {
    lastInfo.value = res.data;
  }
});

onBeforeUnmount(() => {
  off()
});

/**
 * 跳转路由
 */
const toDetails = (ID) => {
  router.push(`/newdetails/${ID}`);
};
</script>

<style lang="scss" scoped>
.time {
  color: gray;
  font-size: 12px;
}
.item {
  margin-bottom: 10px;
}
</style>