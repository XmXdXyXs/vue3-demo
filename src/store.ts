import { createStore } from "vuex";
import { PostProps, ColumnProps, ColumnPropsList } from "./testData";
import { GlobaHeaderProps } from "./components/GroupHeader.vue";
import axios from "./httpService";
interface StateData {
  testData: ColumnProps[];
  user: GlobaHeaderProps;
  testPosts: PostProps[];
  testDataList: ColumnPropsList[];
  laodingFlag: boolean;
}
// 创建一个新的 store 实例
const store = createStore<StateData>({
  state() {
    return {
      testData: [],
      user: { isLogin: false, id: 1, name: "strive" },
      testPosts: [],
      testDataList: [],
      laodingFlag: false,
    };
  },
  mutations: {
    // 创建文章
    createArticle(state, article) {
      state.testPosts.push(article);
    },
    // 设置文章列表
    setData(state, data) {
      state.testData = data;
    },
    setDataDetail(state, data) {
      state.testPosts = [data];
    },
    setDataDetailList(state, data) {
      state.testDataList = data;
    },
    setLaodingFlag(state, data) {
      state.laodingFlag = data;
    },
  },
  getters: {
    // testPostsFormat: (state) => (id: string) => {
    //   return state.testPosts.filter((list) => list._id === id);
    // },
    getColumnById: (state) => (id: string) => {
      return state.testPosts.find((c) => c._id === id);
    },
  },
  actions: {
    // 获取专栏列表
    async getData(ctx) {
      const response = await axios.get("/columns");
      if (response.status == 200) {
        ctx.commit("setData", response.data.data.list);
      }
    },
    // 获取专栏详情
    async getDataDetail(ctx, id) {
      const response = await axios.get(`/columns/${id}`);
      if (response.status == 200) {
        ctx.commit("setDataDetail", response.data.data);
      }
    },
    // 获取专栏的文章列表
    async getDataDetailList(ctx, id) {
      const response = await axios.get(`/columns/${id}/posts`);
      if (response.status == 200) {
        ctx.commit("setDataDetailList", response.data.data.list);
      }
    },
  },
});

export default store;
