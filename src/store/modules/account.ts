import router from "../../router";
import { Commit } from 'vuex';

interface IState{
    name: String
}

const state = () => ({
    name: '',
    isLogin: false
})

const actions = {
    login({ commit }: { commit: Commit }, data: any) {        
        commit('UPDATE_ACCOUNT', { ...data, isLogin: true })
        router.push('/')
    }
}

const mutations = {
    UPDATE_ACCOUNT(state: IState, data?: any) {
        state = Object.assign(state, data)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}