
const state = {
  dictionary: []
}

const mutations = {
  SET_DICTIONARY: (state, dictionary) => {
    state.dictionary = Object.assign(this.dictionary, dictionary)
  }
}

const actions = {
  setDictionary({ commit }, dictionary) {
    console.log(dictionary)
    commit('SET_DICTIONARY', dictionary)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
