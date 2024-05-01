import { createStore } from "vuex";
import { testPosts, testData, PostProps, ColumnProps } from "./testData";
import { GlobaHeaderProps } from "./components/GroupHeader.vue";
interface StateData {
  testData: ColumnProps[];
  user: GlobaHeaderProps;
  testPosts: PostProps[];
}
// 创建一个新的 store 实例
const store = createStore<StateData>({
  state() {
    return {
      testData,
      user: { isLogin: false, id: 1, name: "strive" },
      testPosts,
    };
  },
  mutations: {
    createArticle(state, article) {
      state.testPosts.push(article);
    },
  },
  getters: {
    testDataFormat: (state) => (id: number) => {
      return state.testData.find((column) => column.id === id);
    },
    testPostsFormat: (state) => (id: number) => {
      return state.testPosts.filter((list) => list.columnId === id);
    },
  },
});

export default store;
