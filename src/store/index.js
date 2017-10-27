import Vuex from 'vuex'

const store = new Vuex.store({})

store.registerModule('vux', {
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        }
    }
})