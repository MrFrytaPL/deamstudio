import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: {
                name: 'Michał'
            },
            token: '',
        }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
});

export default store;
