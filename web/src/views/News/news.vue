<template>
  <!-- banner图 -->
  <div class="bg-box" :style="{backgroundImage:`url(${require('@/assets/news/01.png')})`}">
    <!-- 文字 -->
    <h1 class="title">诗和远方</h1>
    <h2 class="subtitle">生活除了诗和远方还有撸串和啤酒</h2>

    <!-- 搜索 -->
    <div class="search">
      <el-popover placement="bottom" title="检索结果" width="50%" :visible="visible">
        <template #reference>
          <!-- 输入框 -->
          <el-input v-model="searchText" placeholder="请输入搜索内容" :prefix-icon="Search" type="search" size="large"
            @input="getSearchInfo" @focus="getSearchInfo" @blur="inputBlur" />
        </template>
        <!-- 展示内容 -->
        <div class="text" v-if="searchData.length" v-for="item in searchData" :key="item._id">
          <span @click="getNewID(item._id)">{{item.title}}</span>
        </div>
        <div v-else>
          <el-empty description="数据为空" :image-size="100" size="20" />
        </div>
      </el-popover>
    </div>
  </div>

  <!-- 新闻列表 -->
  <div style="margin:20px 10px;">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in newListData" :key="item._id">
        <el-card @click="getNewID(item._id)" :body-style="{ padding: '0px' }">
          <div class="box-card" :style="{backgroundImage: `url(${item.cover})`}"></div>
          <div style="padding: 14px">
            <span>{{item.title}}</span>
            <div class="bottom">
              <time class="time">{{ timeFormat(item.editTime) }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

  <!-- 选项卡 -->
  <el-tabs class="box" v-model="activeName">
    <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.label" :name="item.name">
      <el-row :gutter="20">
        <el-col :span="18">
          <el-card @click="getNewID(it._id)" v-for="it in tabListData[item.name]" :key="it._id"
            :body-style="{ padding: '10px' }">
            <div class="tab-card" :style="{backgroundImage: `url(${it.cover})`}"></div>
            <div style="padding: 14px;float:left">
              <span>{{it.title}}</span>
              <div class="bottom">
                <time class="time">{{ timeFormat(it.editTime) }}</time>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-timeline-item @click="getNewID(activity._id)" v-for="activity in tabListData[item.name]"
            :key="activity._id" :timestamp="activity.editTime">
            {{ activity.title }}
          </el-timeline-item>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, onMounted, reactive,onBeforeUnmount} from "vue";
import { Search } from "@element-plus/icons-vue";
import { searchInfo, newList, newTabList } from "@/api/newsApi";
import { timeFormat } from "@/util/timeFormat";
import {useRouter} from 'vue-router'

const router = useRouter()
const searchText = ref(null);
const visible = ref(false);
const searchData = ref([]);
const newListData = ref([]);
const activeName = ref(1);
const tabListData = reactive({});
const trim = ref(null);

const tabList = [
  {
    label: "最新动态",
    name: 1,
  },
  {
    label: "典型案例",
    name: 2,
  },
  {
    label: "通知公告",
    name: 3,
  },
];

onMounted(() => {
  getNewList();
  getTabList();
});

onBeforeUnmount(() => {
  clearTimeout(trim.value);
});

/**
 * input搜索框失焦
 */
const inputBlur = () => {
  trim.value = setTimeout(() => {
    visible.value = false;
  }, 300);
};

/**
 * 获取新闻ID值
 */
const getNewID = (ID) => {
  router.push(`/newdetails/${ID}`)
};

/**
 * 获取tab列表数据
 */
const getTabList = async () => {
  let result = await newTabList();

  if (result.code === 200 && result.success) {
    Object.assign(tabListData, result.data);
  }
};

/**
 * 获取新闻列表数据
 */
const getNewList = async () => {
  let result = await newList();

  if (result.code === 200 && result.success) {
    newListData.value = result.data;
  }
};

/**
 * 获取搜索新闻数据
 */
const getSearchInfo = async () => {
  visible.value = true;
  let result = await searchInfo({ title: searchText.value });
  if (result.code === 200 && result.success) {
    searchData.value = result.data;
  }
};
</script>

<style lang="scss" scoped>
.bg-box {
  position: relative;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  box-sizing: border-box;
  .title {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 70px;
  }
  .subtitle {
    position: absolute;
    top: 210px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 30px;
  }
  .search {
    position: absolute;
    top: 300px;
    left: 0;
    width: 100%;
    text-align: center;
    .el-input {
      width: 50%;
    }
  }
}
.text {
  width: 100%;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    background-color: #eee9e9;
    color: #f00;
  }
}
.box-card {
  height: 200px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.time {
  color: gray;
  font-size: 12px;
}

.tab-card {
  width: 200px;
  height: 150px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  float: left;
}
.box .el-card {
  width: 60%;
  margin-bottom: 20px;
}
</style>