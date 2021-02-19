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
            state.cards.push(newCard);
            localStorage.setItem('cards', JSON.stringify(state.cards));
        },
        DELETE_CARD(state, id) {
            const cardIndex = state.cards.findIndex(card => card.id === id);
            state.cards.splice(cardIndex, 1);
            localStorage.setItem('cards', JSON.stringify(state.cards));
        }
    },
    actions: {
        addCard(context, payload) {
            context.commit('ADD_CARD', payload);
        },
        deleteCard(context, id) {
            context.commit('DELETE_CARD', id);
        }
    },
    getters: {
        getCard: (state) => (id) => {
            console.log(id);
            return state.cards.find(card => card.id == id);
        },
        cards(state) {
            const cards = JSON.parse(localStorage.getItem('cards'));
            if (cards && cards.length > 0) {
                state.cards = cards;
            }

            return state.cards;
        },
    }
})

export default store;
