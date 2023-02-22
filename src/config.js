import Store from '../service/store'
import MockStore from '../service/mockStore'




export let store = import.meta.env.VITE_DATA === 'mock' ? MockStore : Store
export let whereAreWe = import.meta.env.VITE_DATA === 'mock' ? "Mock" : "Api"