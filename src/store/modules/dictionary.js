
const state = {
  dictionary: {}
}

const mutations = {
  SET_DICTIONARY: (state, dictionary) => {
    state.dictionary = Object.assign(state.dictionary, dictionary)
  }
}

const actions = {
  setDictionary({ commit }, dictionary) {
    commit('SET_DICTIONARY', dictionary)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
