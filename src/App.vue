<template>
  <div class="flex flex-col gap-[24px]">
    <GroupHeader :user="user" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { darkMode } from "./utils/index";
import GroupHeader from "./components/GroupHeader.vue";
import { useStore } from "vuex";
darkMode();

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GroupHeader,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    return {
      user,
    };
  },
});
</script>
