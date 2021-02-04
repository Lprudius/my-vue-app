import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cards: []
    },
    actions: {
        addCard({commit}, card) {
            commit('ADD_CARD', card)
        }
    },
    mutations: {
        ADD_CARD(state, card) {
            state.cards.push(card)
        }
    },
    getters: {
        cards(state) {
            return state.cards
        }
    }
})

export default store;
