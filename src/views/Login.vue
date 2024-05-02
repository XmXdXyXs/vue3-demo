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
          v-model="passwordlVike"
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
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
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
    let emailVike = ref("111@test.com");
    let passwordlVike = ref("111111");
    let router = useRouter();
    let store = useStore();
    const onformDataSubmit = (result: boolean) => {
      if (result) {
        store
          .dispatch("getToken", {
            email: emailVike.value,
            password: passwordlVike.value,
          })
          .then((data) => {
            console.log(data, "data");
            router.push("/");
          })
          .catch((e) => {
            ElMessage.error(e.error);
          });
      }
    };
    // 111@test.com
    // 111111
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
