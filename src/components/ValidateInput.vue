<template>
  <div class="validateInput flex flex-col gap-[8px]">
    <div class="text-v1TextColor">{{ label }}</div>
    <input
      v-if="tag == 'input'"
      :value="rulesFrom.val"
      class="h-[32px]"
      :class="{ 'error-input': !rulesFrom.rulesFlag }"
      @blur="chnageBlurValidate"
      @input="handleInput"
      v-bind="$attrs"
    />
    <textarea
      v-else
      :value="rulesFrom.val"
      :class="{ 'error-input': !rulesFrom.rulesFlag }"
      @blur="chnageBlurValidate"
      @input="handleInput"
      v-bind="$attrs"
    >
    </textarea>
    <div
      v-show="!rulesFrom.rulesFlag"
      class="text-v1TextErrorColor text-[12px]"
    >
      {{ rulesFrom.inputErrorMessage }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from "vue";
import { emitter } from "./ValidateFrom.vue";
export interface RulesFromProps {
  type: "required" | "email";
  message: string;
}
type Tag = "input" | "texteare";
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: {
      type: Array as PropType<RulesFromProps[]>,
      required: true,
    },
    modelValue: String,
    label: {
      type: String,
    },
    tag: {
      type: String as PropType<Tag>,
      default: "input",
    },
  },
  inheritAttrs: false,
  setup(props, ctx) {
    let rulesFrom = reactive({
      val: props.modelValue || "",
      inputErrorMessage: "",
      rulesFlag: true,
    });
    const chnageBlurValidate = () => {
      if (props.rules) {
        let rulesFlag = props.rules.every((rule) => {
          let flag = true;
          rulesFrom.inputErrorMessage = rule.message;
          switch (rule.type) {
            case "required":
              flag = rulesFrom.val.trim() != "";

              break;
            case "email":
              flag = emailRegex.test(rulesFrom.val);
              break;
            default:
              break;
          }

          return flag;
        });
        rulesFrom.rulesFlag = rulesFlag;
        return rulesFlag;
      }
      return true;
    };
    // 正常情况下应该是下面写法 但是我这里用了elinput input 方法默认拿到了value值 而非dom
    const handleInput = (e: Event) => {
      let val = (e.target as HTMLInputElement).value;
      rulesFrom.val = val;
      ctx.emit("update:modelValue", val);
    };
    onMounted(() => {
      emitter.emit("form-item-created", chnageBlurValidate);
    });
    return {
      rulesFrom,
      chnageBlurValidate,
      handleInput,
    };
  },
});
</script>

<style scoped>
.validateInput input,
textarea {
  background: var(--color-background);
  box-shadow: 0 0 0 1px var(--v1-border-input) inset;
  border-radius: 8px;
  outline: none;
  text-indent: 6px;
}
.validateInput input,
textarea {
  color: var(--v1-text-color);
}
.validateInput .error-input {
  box-shadow: 0 0 0 1px red inset;
}
</style>
