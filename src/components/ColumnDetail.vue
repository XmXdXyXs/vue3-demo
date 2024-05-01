<template>
  <div class="container mx-auto">
    <div v-if="!paramsId">暂无数据</div>
    <div v-else>
      <div class="w-75 mx-auto">
        <div class="mb-4 border-bottom pb-4 align-items-center" v-if="column">
          <div class="text-center">
            <img
              :src="column.avatar"
              :alt="column.title"
              class="rounded-circle border"
            />
          </div>
          <div>
            <h4>{{ column.title }}</h4>
            <p class="text-muted">{{ column.description }}</p>
          </div>
        </div>
      </div>
      <PostList :list="list" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { testData, testPosts } from "../testData";
import PostList from "./PostList.vue";
export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    let route = useRoute();
    let paramsId = +route.params.id;
    let list;
    let column;
    if (paramsId) {
      list = testPosts.filter((list) => list.columnId === paramsId);
      column = testData.find((column) => column.id === paramsId);
    }
    return {
      paramsId,
      list,
      column,
    };
  },
});
</script>
