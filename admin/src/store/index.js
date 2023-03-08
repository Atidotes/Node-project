import { createStore } from 'vuex'
import { createVuexPersistedState } from "vue-persistedstate";

export default createStore({
  state: {
    isGetterRouter: false,
    isCollapse: false,
    userInfo:{
      userName: "",
      accountNumber: "",
      gender: "", 
      introduction:"", 
      avatar: "", 
      role:"", 
    }
  },
  getters: {
  },
  mutations: {
    changGetterRouter(state, value) {
      state.isGetterRouter = value
    },
    changCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    getUserInfo(state,value){
      state.userInfo = {...state.userInfo,...value}
    },
    cleanUpUserInfo(state){
      state.userInfo = {
        userName: "",
        accountNumber: "",
        gender: "", 
        introduction:"",
        avatar: "", 
        role:"", 
      }
    }
  },
  actions: {
  },
  modules: {
  },

  /**
   * vuex持久化
   */
  plugins: [
    createVuexPersistedState({
      key:'vuex',
      storage:window.localStorage,
      whiteList:['isCollapse','userInfo'],
    }),
  ]
})
