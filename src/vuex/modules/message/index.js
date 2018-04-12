import getters from './getters';

const mutations = {
  newMessage: (state, newMessage) => {
    state.messages = [...state.messages, newMessage];
  },
  typing: (state, newTyping) => {
    state.typing = {
      ...state.typing,
      ...newTyping,
    };
  },
};

const actions = {
  sendMessage({ commit }, newMessage) {
    commit('newMessage', newMessage);
  },
  typing({ commit }, { author }) {
    commit('typing', {
      status: 'writting',
      author,
    });
  },
  stopTyping({ commit }, { interval, author }) {
    commit('typing', {
      status: 'idle',
      interval,
      author,
    });
  },
};

// https://stackoverflow.com/questions/43843180/eslint-state-already-declared-vuex#answer-46079044

const state = {
  messages: [],
  typing: {
    status: 'idle',
    interval: null,
    from: null,
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
