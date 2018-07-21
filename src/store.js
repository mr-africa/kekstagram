import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        photo: null,
        filter: '',
    },
    getters: {
        photo (state) {
            return state.photo
        },
        filter (state) {
            return state.filter
        },
    },

    mutations: {
        setFilter (state, filter) {
            state.filter = filter
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
