const state = {
  name: ""
};

const actions = {};

const mutations = {
  USER_LOGIN(state, payload) {
    state.name = payload.name;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
