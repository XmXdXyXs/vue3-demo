<template>
  <Teleport to="body">
    <div>
      <div
        style="background: rgba(0, 0, 0, 0.7)"
        class="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-v1TextDefault"
      >
        <div class="loading"></div>
        加载中...
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "loaderView",
  setup() {
    return {};
  },
});
</script>
<style scoped>
.loading {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
