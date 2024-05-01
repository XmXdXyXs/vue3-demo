<template>
  <el-dropdown class="h-full" trigger="click">
    <span
      class="text-v1TextDefault text-center h-full inline-block leading-[30px] text-[16px]"
      >{{ `${userName}` }}</span
    >
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>新建文章</el-dropdown-item>
        <el-dropdown-item>管理账户</el-dropdown-item>
        <el-dropdown-item>退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";
export type DropdownProps = {
  userName?: string;
};
export default defineComponent({
  name: "DrapdownList",
  components: {
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  },
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  //   setup() {},
});
</script>
