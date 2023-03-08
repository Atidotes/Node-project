<template>
  <el-upload class="avatar-uploader" action="" :show-file-list="false" :auto-upload="false" :on-change="changeUpload">
    <img v-if="props.avatar" :src="props.avatar" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon">
      <Plus />
    </el-icon>
  </el-upload> 
</template>

<script setup>
import { Plus } from "@element-plus/icons-vue";
import { defineEmits,defineProps } from 'vue'

const props = defineProps({
  avatar:String
})

const emit = defineEmits(['upload'])

const changeUpload = (file) => {
  emit('upload',file.raw)
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 178px;
  height: 178px;
}

::v-deep .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

::v-deep .el-upload:hover {
  border-color: var(--el-color-primary);
}

::v-deep .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>