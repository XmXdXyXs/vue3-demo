<template>
  <div>
    <slot name="default"></slot>
    <div class="mt-[16px]">
      <span class="inline-block" @click="onSibmitFromData">
        <slot name="submit">
          <el-button type="primary">提交</el-button>
        </slot>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { ElButton } from "element-plus";
import mitt from "mitt";
type ValidateFunc = () => boolean;
type Event = {
  "form-item-created": ValidateFunc;
};

export const emitter = mitt<Event>();
export default defineComponent({
  components: {
    ElButton,
  },
  emits: ["form-data-submit"],
  setup(props, ctx) {
    let funcArr: ValidateFunc[] = [];
    const onSibmitFromData = () => {
      const result = funcArr.map((fnc) => fnc()).every((result) => result);
      ctx.emit("form-data-submit", result);
    };
    const callback = (fnc: ValidateFunc) => {
      funcArr.push(fnc);
    };
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funcArr = [];
    });
    return {
      onSibmitFromData,
    };
  },
});
</script>
