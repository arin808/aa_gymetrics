import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

//Export mutations for global use
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GYM_LOCATION = "GYM_LOCATION";
export const SET_EMPLOYEE = "SET_EMPLOYEE";

//State properties
export const state = () => {
  return {
    loggedIn: false,
    employeeName: null,
    gymLocation: null,
  };
};

//Mutations to state properties
export const mutations = {
  //Change state to true
  [LOGIN](state) {
    state.loggedIn = true;
  },
  //Change state properties to null or false to prevent access to pages
  [LOGOUT](state) {
    state.loggedIn = false;
    state.employeeName = null;
    state.gymLocation = null;
  },
  //Change employee state properties to determine which landing page to display
  [GYM_LOCATION](state, location) {
    state.gymLocation = location;
  },
  //Change employeeName state to display in dropdown
  [SET_EMPLOYEE](state, name) {
    state.employeeName = name;
  },
};
//Store object to export
const store = createStore({
  state,
  mutations,
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== "production",
});

export default store;
