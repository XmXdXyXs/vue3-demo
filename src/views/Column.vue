<template>
  <div>
    <ColumnDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import ColumnDetail from "@/components/ColumnDetail.vue";
export default defineComponent({
  name: "columnViews",
  components: {
    ColumnDetail,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>
