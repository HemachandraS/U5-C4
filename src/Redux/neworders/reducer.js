import { order } from "./action"

const init = {orders:[]}

export const ordershandlers=(store=init,{type,payload})=>{
    switch(type){
        case order :
            return {...store,orders:[...store.orders,...payload]}
        default:
            return store
    }
}