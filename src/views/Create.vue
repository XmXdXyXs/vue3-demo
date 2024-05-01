<template>
  <div class="container mx-auto">
    <ValidateFrom @formDataSubmit="validateForm">
      <ValidateInput v-model="title" type="text" :rules="rules">
      </ValidateInput>
      <ValidateInput v-model="content" :rules="rules" tag="texteare" rows="10">
      </ValidateInput>
    </ValidateFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ValidateFrom from "../components/ValidateFrom.vue";
import ValidateInput from "../components/ValidateInput.vue";
const rules = [{ type: "required", message: "内容不能为空" }];
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    ValidateFrom,
    ValidateInput,
  },
  name: "createView",
  setup() {
    let title = ref("11");
    let content = ref("22");
    let store = useStore();
    let router = useRouter();
    const validateForm = (result: boolean) => {
      if (result) {
        store.commit("createArticle", {
          id: 1,
          title: "文章1",
          content: "vue3 真好用",
          createdAt: "2024年5月1号",
          columnId: 1,
        });
        router.push({ name: "column", params: { id: 1 } });
      }
    };
    return {
      title,
      content,
      rules,
      validateForm,
    };
  },
});
</script>
