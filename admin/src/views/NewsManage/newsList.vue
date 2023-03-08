<template>
  <!-- 表头 -->
  <el-page-header :icon="null" title="新闻管理" content="新闻列表"></el-page-header>

  <!-- 表格 -->
  <el-table :data="newData.tableData" border style="width: 100%;margin-top:50px;">
    <!-- 标题 -->
    <el-table-column prop="title" label="标题" />

    <!-- 归属账号 -->
    <el-table-column v-if="userInfo.role === 1" prop="user" label="归属账号" />

    <!-- 分类 -->
    <el-table-column prop="category" label="分类">
      <template #default="scope">
        {{classify(scope.row.category)}}
      </template>
    </el-table-column>

    <!-- 更新时间 -->
    <el-table-column prop="editTime" label="更新时间">
      <template #default="scope">
        {{timeFormat(scope.row.editTime)}}
      </template>
    </el-table-column>

    <!-- 是否发布 -->
    <el-table-column prop="isPublish" label="是否发布">
      <template #default="scope">
        <el-switch v-model="scope.row.isPublish" @change="changeSwitch(scope.row)" :active-value="1"
          :inactive-value="0" />
      </template>
    </el-table-column>

    <!-- 操作 -->
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <!-- 预览 -->
        <el-button circle type="warning" :icon="Star" @click="preview(scope.row)"></el-button>

        <!-- 编辑 -->
        <el-button circle :icon="Edit" @click="handleEdit(scope.row)"></el-button>

        <!-- 删除 -->
        <el-popconfirm title="你确定要删除嘛？" confirm-button-text="确认" cancel-button-text="取消"
          @confirm="deleteNews(scope.row)">
          <template #reference>
            <el-button circle type="danger" :icon="Delete"></el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

  <!-- 对话框 -->
  <el-dialog v-model="dialogVisible" title="预览新闻" width="50%">
    <div>
      <h1 style="font-size:25px;">{{newData.previewData.title}}</h1>
      <span style="font-size:12px;">{{timeFormat(newData.previewData.editTime)}}</span>
      <el-divider />
      <div v-html="newData.previewData.content" class="htmlContent"></div>
    </div>
  </el-dialog>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { newList, newSwitch, deleteNew } from "../../api/newApi";
import { timeFormat } from "../../util/timeFormat";
import { Star, Edit, Delete } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const dialogVisible = ref(false);
const newData = reactive({
  tableData: [],
  previewData: {},
});

const userInfo = computed(() => store.state.userInfo);

onMounted(() => {
  getData();
});

/**
 * 编辑新闻
 */
const handleEdit = (record) => {
  router.push(`/news-edit/${record._id}`);
};

/**
 * 删除新闻
 */
const deleteNews = async (record) => {
  let result = await deleteNew(record._id);

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
 * 预览回调
 */
const preview = (record) => {
  newData.previewData = record;
  dialogVisible.value = true;
};

/**
 * 改变switch回调
 */
const changeSwitch = async (record) => {
  let result = await newSwitch({
    _id: record._id,
    isPublish: record.isPublish,
  });

  if (result.code === 200 && result.success) {
    getData();
    ElMessage({
      type: "success",
      message: result.message,
    });
  }
};

/**
 * 分类函数
 */
const classify = (record) => {
  const arr = ["最新动态", "典型案例", "通知公告"];
  return arr[record - 1];
};

/**
 * 获取表格数据
 */
const getData = async () => {
  let result = await newList();

  if (result.code === 200 && result.success) {
    newData.tableData = result.data;
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