<template>
  <div class="container mx-auto">
    <div v-if="!paramsId">暂无数据</div>
    <div v-else>
      <div class="w-75 mx-auto">
        <div class="mb-4 border-bottom pb-4 align-items-center" v-if="column">
          <div class="text-center">
            <img
              :src="column?.avatar?.url"
              :alt="column.title"
              class="rounded-circle border"
            />
          </div>
          <div>
            <h4>{{ column?.title }}</h4>
            <p class="text-muted">{{ column?.description }}</p>
          </div>
        </div>
      </div>
      <PostList :list="list" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PostList from "./PostList.vue";
export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    let route = useRoute();
    let paramsId = route.params.id;
    let list;
    let column;
    // column = computed(() => {
    //   return store.state.testPosts;
    // });
    let store = useStore();
    onMounted(() => {
      if (paramsId) {
        store.dispatch("getDataDetail", paramsId);
        store.dispatch("getDataDetailList", paramsId);
        // list = computed(() => {
        //   return store.getters.testPostsFormat(paramsId);
        // });
      }
    });
    column = computed(() => {
      return store.getters.getColumnById(paramsId);
    });
    list = computed(() => {
      return store.state.testDataList;
    });
    return {
      paramsId,
      list,
      column,
    };
  },
});
</script>
