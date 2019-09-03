import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        message: "",
        message2: "",
    },
    getters: {
        getMessage: state => () => state.message,
        getMsg2: state => () => state.message2
    },
    mutations: {
        updateMessage: (state, payload) => {
            state.message = payload;
        },
        updateMessage2: (state, payload) => {
            state.message2 = payload;
        }
    },
    actions: {
        updateAllMessage: (store, payload) => {
            store.commit('updateMessage', payload.msg1);
            store.commit('updateMessage2', payload.msg2);
        }
    }
});

export default store;
