import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        photo: null,
        activeFilter: null,
    },
    getters: {
        photo (state) {
            return state.photo
        },
        activeFilter (state) {
            return state.activeFilter
        },
    },

    mutations: {
        setFilter (state, filter) {
            state.activeFilter = filter
        },
        clearPhoto (state) {
            state.photo = null
        },
        setPhoto (state, photo) {
            state.photo = photo
        },
    },
})

export default store
