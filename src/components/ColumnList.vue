<template>
  <div class="grid grid-cols-3 gap-[10px]">
    <div v-for="item in list" :key="item.id">
      <div class="border rounded-[16px] box-border p-[16px] grid gap-[8px]">
        <img :src="item.avatar" alt="" class="w-[50px] h-[50px] mx-auto" />
        <p class="font-bold text-[24px] text-v1TextColor text-center">
          {{ item.title }}
        </p>
        <p class="text-[16px] text-v1TextColor text-center">
          {{ item.description }}
        </p>
        <div
          class="mt-[32px] min-w-[100px] h-[32px] rounded-[8px] flex justify-center items-center border border-v1BorderColor text-v1TextColor2"
          href="#"
        >
          <router-link :to="`/column/${item.id}`"> 进入专栏 </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
});
</script>
