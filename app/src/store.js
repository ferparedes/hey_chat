import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            _id: '',
            name: ''
        },
        chat: {
            messages: []
        }
    },
    getters: {
        chatMessages: state => {
            return state.chat.messages;
        },
        userId: state => state.user._id,
        user: state => state.user,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setChat(state, chat) {
            state.chat.messages = chat;
        }
    }
});

export default store;