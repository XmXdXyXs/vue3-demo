<template>
  <div class="h-[72px] bg-v1BgColor">
    <div class="container mx-auto h-full">
      <div class="flex justify-between items-center h-full">
        <div class="text-v1TextDefault text-[24px] font-bold">知者专栏</div>
        <div class="flex flex-row gap-[8px]">
          <div>
            <div v-if="user.isLogin">
              <div
                class="border box-border px-[8px] cursor-pointer min-w-[56px] text-v1TextDefault text-center h-[32px] leading-[30px] rounded-[8px]"
              >
                <Drapdown :userName="`您好 ${user.name}`" />
              </div>
            </div>
            <div v-else class="flex flex-row gap-[8px]">
              <div
                class="border box-border px-[8px] cursor-pointer min-w-[56px] text-v1TextDefault text-center h-[32px] leading-[30px] rounded-[8px]"
              >
                <router-link to="/">注册</router-link>
              </div>
              <div
                class="border box-border px-[8px] cursor-pointer min-w-[56px] text-v1TextDefault text-center h-[32px] leading-[30px] rounded-[8px]"
              >
                <router-link to="/login">登录</router-link>
              </div>
            </div>
          </div>
          <el-switch
            v-model="modeTheme"
            :active-icon="Moon"
            :inactive-icon="Sunny"
            inline-prompt
          >
          </el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { darkMode } from "../utils/index";
import Drapdown from "./Drapdown.vue";

import { ElSwitch } from "element-plus";
export interface GlobaHeaderProps {
  id?: number;
  name?: string;
  isLogin: boolean;
}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    Drapdown,
    ElSwitch,
  },
  props: {
    user: {
      type: Object as PropType<GlobaHeaderProps>,
      required: true,
    },
  },
  setup() {
    let modeTheme = ref(true);
    watch(
      modeTheme,
      (newValue) => {
        newValue
          ? localStorage.setItem("theme", "light")
          : localStorage.setItem("theme", "dark");
        darkMode();
      },
      { immediate: true }
    );
    return {
      modeTheme,
      Sunny,
      Moon,
    };
  },
});
</script>
