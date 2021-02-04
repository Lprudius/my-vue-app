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
        },
        getCard: (state) => (id) => {
            return state.cards.find(card => card.id == id)
        }
    }
})

export default store;
