import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cards: []
    },
    mutations: {
        ADD_CARD(state, payload) {
            const newCard = {
                id:  (Date.now() + Math.random() * 10e10).toString(16).split('.').shift(),
                title: payload.title,
                descr: payload.descr
            }
            state.cards.push(newCard)
        },
        DELETE_CARD(state, id) {
            let cardIndex = state.cards.findIndex(card => card.id == id)
            state.cards.splice(cardIndex, 1)
        }
    },
    actions: {
        addCard(context, payload) {
            context.commit('ADD_CARD', payload)
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
