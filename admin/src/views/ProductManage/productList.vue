<template>
  <!-- 表头 -->
  <el-page-header :icon="null" title="产品管理" content="产品列表"></el-page-header>

  <!-- 表格 -->
  <el-table :data="productData.tableData" border style="width: 100%;margin-top:50px;">
    <!-- 标题 -->
    <el-table-column prop="title" label="标题" />

    <!-- 归属账号 -->
    <el-table-column v-if="userInfo.role === 1" prop="user" label="归属账号" />

    <!-- 分类 -->
    <el-table-column prop="introduction" label="简要描述">
      <template #default="scope">
        {{scope.row.introduction}}
      </template>
    </el-table-column>

    <!-- 更新时间 -->
    <el-table-column prop="editTime" label="更新时间">
      <template #default="scope">
        {{timeFormat(scope.row.editTime)}}
      </template>
    </el-table-column>

    <!-- 操作 -->
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <!-- 编辑 -->
        <el-button circle :icon="Edit" @click="handleEdit(scope.row)"></el-button>

        <!-- 删除 -->
        <el-popconfirm title="你确定要删除嘛？" confirm-button-text="确认" cancel-button-text="取消"
          @confirm="deleteProductInfo(scope.row)">
          <template #reference>
            <el-button circle type="danger" :icon="Delete"></el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { productList, deleteProduct } from "../../api/productApi";
import { timeFormat } from "../../util/timeFormat";
import { Edit, Delete } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import {useStore } from 'vuex'

const router = useRouter();
const store = useStore()
const dialogVisible = ref(false);
const productData = reactive({
  tableData: [],
});
const userInfo = computed(()=> store.state.userInfo)

onMounted(() => {
  getData();
});

/**
 * 编辑新闻
 */
const handleEdit = (record) => {
  router.push(`/product-edit/${record._id}`);
};

/**
 * 删除新闻
 */
const deleteProductInfo = async (record) => {
  let result = await deleteProduct(record._id);

  if (result.code === 200 && result.success) {
    getData();
    ElMessage({
      type: "success",
      message: result.message,
    });
  } else {
    ElMessage({
      type: "error",
      message: "删除失败",
    });
  }
};

/**
 * 获取表格数据
 */
const getData = async () => {
  let result = await productList();

  if (result.code === 200 && result.success) {
    productData.tableData = result.data;
  } else {
    ElMessage({
      type: "error",
      message: "请求资源失败",
    });
  }
};
</script>

<style lang="scss" scoped>
::v-deep .htmlContent img {
  width: 100%;
}
</style>