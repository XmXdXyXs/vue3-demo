<template>
  <div class="home-page">
    <section class="py-5 text-center container mx-auto">
      <div class="mx-auto">
        <img
          src="../assets/callout.svg"
          alt="callout"
          class="w-[250px] mx-auto"
        />
        <p class="text-[32px] text-v1TextColor">随心写作，自由表达</p>
        <p class="mt-[8px]">
          <el-button type="primary">开始写文章</el-button>
        </p>
      </div>
    </section>
    <div class="container mx-auto mt-[72px]">
      <p
        class="font-weight-bold text-center font-bold mb-[8px] text-v1TextColor"
      >
        发现精彩
      </p>
      <ColumnList :list="testData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "../components/ColumnList.vue";
import { ElButton } from "element-plus";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1专栏",
    description: "这是test1文章， 欢迎关注",
    avatar:
      "https://wechatavator-1252524126.file.myqcloud.com/appF96umJwe7950/image/compress/3c0d8469a3d9997b9986a57f8ffaa04e_20240219_462dad.jpeg",
  },
  {
    id: 2,
    title: "test2专栏",
    description: "这是test2文章， 欢迎关注",
    avatar:
      "https://wechatavator-1252524126.file.myqcloud.com/appF96umJwe7950/image/compress/3c0d8469a3d9997b9986a57f8ffaa04e_20240219_462dad.jpeg",
  },
  {
    id: 3,
    title: "test3专栏",
    description: "这是test3文章， 欢迎关注",
    avatar:
      "https://wechatavator-1252524126.file.myqcloud.com/appF96umJwe7950/image/compress/3c0d8469a3d9997b9986a57f8ffaa04e_20240219_462dad.jpeg",
  },
];
export default defineComponent({
  components: {
    ColumnList,
    ElButton,
  },
  name: "homeViews",
  setup() {
    return {
      testData,
    };
  },
});
</script>
