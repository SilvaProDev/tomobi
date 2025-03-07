import { defineStore } from "pinia";
// import apiUrl from "@/config/axios";


export const useHomePageStore = defineStore("HomePage", {
  state: () => ({
    stateHomePage: [],
   
  }),

  getters: {
    GetterHomePage(state) {
      return state.stateHomePage;
    },
  },

actions: {

},
});
