<template>
  <div class="post-list flex flex-col gap-[16px]">
    <div
      v-for="post in list"
      :key="post.id"
      class="border rounded-[8px] box-border p-[8px]"
    >
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image" :alt="post.title" class="rounded-lg w-100" />
          </div>
          <p :class="{ 'col-9': post.image }">{{ post.content }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PostProps } from "../testData";
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<PostProps[]>,
      default: () => [],
    },
  },
});
</script>
