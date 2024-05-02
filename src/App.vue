<template>
  <div class="flex flex-col gap-[24px]">
    <GroupHeader :user="user" />
    <Loader v-if="loading"></Loader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Loader from "./components/Loader.vue";
import { darkMode } from "./utils/index";
import GroupHeader from "./components/GroupHeader.vue";
import { useStore } from "vuex";
darkMode();

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    Loader,
    GroupHeader,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const loading = computed(() => store.state.laodingFlag);
    return {
      user,
      loading,
    };
  },
});
</script>
