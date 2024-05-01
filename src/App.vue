<template>
  <div class="flex flex-col gap-[24px]">
    <GroupHeader :user="user" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { darkMode } from "./utils/index";
import GroupHeader, { GlobaHeaderProps } from "./components/GroupHeader.vue";
darkMode();

const user: GlobaHeaderProps = {
  isLogin: false,
  name: "strive",
};

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GroupHeader,
  },
  setup() {
    return {
      user,
    };
  },
});
</script>
