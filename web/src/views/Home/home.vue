<template>
  <el-carousel height="calc(100vh - 59px)">
    <el-carousel-item :key="1">
      <div :style="{backgroundImage:`url(${require('@/assets/home/01.jpg')})`}"></div>
    </el-carousel-item>
    <el-carousel-item :key="2">
      <div :style="{backgroundImage:`url(${require('@/assets/home/02.jpg')})`}"></div>
    </el-carousel-item>
    <el-carousel-item :key="3">
      <div :style="{backgroundImage:`url(${require('@/assets/home/03.jpg')})`}"></div>
    </el-carousel-item>
    <el-carousel-item :key="4">
      <div :style="{backgroundImage:`url(${require('@/assets/home/04.jpg')})`}"></div>
    </el-carousel-item>
    <el-carousel-item :key="5">
      <div :style="{backgroundImage:`url(${require('@/assets/home/05.jpg')})`}"></div>
    </el-carousel-item>
    <el-carousel-item :key="6">
      <div :style="{backgroundImage:`url(${require('@/assets/home/06.jpg')})`}"></div>
    </el-carousel-item>
  </el-carousel>

  <div class="box">艺术与生活</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.el-carousel__item div {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-size: 60px;
  color: #fff;
}
</style>