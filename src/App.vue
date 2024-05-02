<template>
  <div class="flex flex-col gap-[24px]">
    <GroupHeader :user="user" />
    <Loader v-if="loading"></Loader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import Loader from "./components/Loader.vue";
import { darkMode } from "./utils/index";
import GroupHeader from "./components/GroupHeader.vue";
import { useStore } from "vuex";
import axios from "./httpService";
darkMode();

export default defineComponent({
  name: "App",
  components: {
    Loader,
    GroupHeader,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const loading = computed(() => store.state.laodingFlag);
    onMounted(() => {
      if (store.state.token && !store.state.user.isLogin) {
        axios.defaults.headers.common.Authorization = `Bearer ${store.state.token}`;
        store.dispatch("fetchCurrentUser").catch((e) => {
          console.log(e);
        });
      }
    });
    return {
      user,
      loading,
    };
  },
});
</script>
