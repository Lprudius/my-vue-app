import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cards: []
    },
    mutations: {
        ADD_CARD(state, card) {
            state.cards.push(card)
        },
        DELETE_CARD(state, id) {
            let cardIndex = state.cards.findIndex(card => card.id == id)
            state.cards.splice(cardIndex, 1)
        }
    },
    actions: {
        addCard({commit}, card) {
            commit('ADD_CARD', card)
        },
        deleteCard(context, id) {
            context.commit('DELETE_CARD', id)
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
