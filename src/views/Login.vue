<template>
  <div class="login-page">
    <div class="container mx-auto">
      <ValidateFrom @formDataSubmit="onformDataSubmit">
        <ValidateInput
          :rules="rules"
          label="邮箱"
          v-model="emailVike"
          type="email"
          placeholder="请输入邮箱"
        />
        <ValidateInput
          :rules="rulesPassword"
          label="密码"
          v-model="emailVike"
          type="password"
          placeholder="请输入密码"
        />
        <template v-slot:submit>
          <el-button type="warning">提交</el-button>
        </template>
      </ValidateFrom>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ValidateInput, { RulesFromProps } from "../components/ValidateInput.vue";
import ValidateFrom from "../components/ValidateFrom.vue";
import { ElButton } from "element-plus";
import { useRouter } from "vue-router";

const rules: RulesFromProps[] = [
  {
    type: "required",
    message: "内容不能为空",
  },
  {
    type: "email",
    message: "邮箱格式有误",
  },
];
const rulesPassword: RulesFromProps[] = [
  {
    type: "required",
    message: "密码必填",
  },
];
export default defineComponent({
  name: "loginViews",
  components: {
    ValidateInput,
    ValidateFrom,
    ElButton,
  },
  setup() {
    let emailVike = ref("");
    let passwordlVike = ref("");
    let router = useRouter();
    const onformDataSubmit = (result: boolean) => {
      if (result) {
        router.push({ name: "column", params: { id: 1 } });
      }
    };
    return {
      rules,
      rulesPassword,
      emailVike,
      passwordlVike,
      onformDataSubmit,
    };
  },
});
</script>
