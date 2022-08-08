import { InjectionKey } from 'vue'
import { useStore as baseUseStore, Store } from 'vuex'
const allModules = import.meta.glob('./modules/*.ts', { import: 'default', eager: true })
const modules: any = {}
Object.keys(allModules).forEach(key => {
    modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = allModules[key]
})

const debug = process.env.NODE_ENV !== 'production'

export interface IState {
    [key: string]: any
}

export const key: InjectionKey<Store<IState>> = Symbol()

export const store =  createStore<IState>({
    modules: modules,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export function useStore () {
    return baseUseStore(key)
}