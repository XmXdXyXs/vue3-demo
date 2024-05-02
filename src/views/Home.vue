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
import { defineComponent, computed, onMounted } from "vue";
import ColumnList from "../components/ColumnList.vue";
import { ElButton } from "element-plus";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    ColumnList,
    ElButton,
  },
  name: "homeViews",
  setup() {
    let store = useStore();
    const testData = computed(() => {
      return store.state.testData;
    });
    onMounted(() => {
      store.dispatch("getData");
    });
    return {
      testData,
    };
  },
});
</script>
