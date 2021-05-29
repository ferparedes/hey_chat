import Vue from 'vue';
import Vuex from 'vuex';
import apolloClient from './apollo.js';
import gql from 'graphql-tag';

Vue.use(Vuex)

// let chatObserver;

const store = new Vuex.Store({
    state: {
        chat: {
            messages: []
        }
    },
    mutations: {
        SET_CHAT_MESSAGES(state, messages) {
            state.chat.messages = messages;
        }
    },
    actions: {
        getChatMessages(context) {
            apolloClient.query({
                query: gql`
                    {
                        chat {
                            _id
                            user {
                              _id
                              name
                            }
                            type
                            value
                        }
                    }
                `
            }).then(result => {
                context.commit('SET_CHAT_MESSAGES', result.data.chat);
            });
        }
    }
});

export default store;