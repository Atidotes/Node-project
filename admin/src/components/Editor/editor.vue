<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor style="height: 400px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
      @onCreated="handleCreated" />
  </div>
</template>

<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import {
  onBeforeUnmount,
  ref,
  shallowRef,
  onMounted,
  defineProps,
  defineEmits,
  watch,
  computed,
} from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

const mode = ref("default");
// const valueHtml = ref(null);

// props接受
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
});

// 自定义事件
const emit = defineEmits(["update:modelValue"]);

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 计算属性
const valueHtml = computed({
  set(value) {
    if (!editorRef.value.isEmpty()) {
      emit("update:modelValue", value);
    } else {
      emit("update:modelValue", null);
    }
  },
  get() {
    return props.modelValue;
  },
});

// 编辑器相关配置
const toolbarConfig = {};
const editorConfig = {
  MENU_CONF: {},
  placeholder: "请输入内容...",
};

// 上传图片配置
editorConfig.MENU_CONF["uploadImage"] = {
  fieldName: "file",

  // 上传地址
  server: "/admin/new/upload",

  // 单个文件的最大体积限制，默认为 2M
  maxFileSize: 5 * 1024 * 1024, // 1M

  // 最多可上传几个文件，默认为 100
  maxNumberOfFiles: 10,

  // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
  allowedFileTypes: ["image/*"],

  // 自定义增加 http  header
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },

  // 超时时间，默认为 10 秒
  timeout: 5 * 1000, // 5 秒
};

// 创建编辑器
const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
</script>

<style lang="scss" scoped>
</style>