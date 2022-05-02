import { Use } from "./action";

import { USER_NAME } from "./action";

const init = {Use:false , USER_NAME:""}



export const isAuthhandler=(store=init,{type,payload})=>{
    switch(type){
        case Use :
            return {...store,Use:!payload}
        case USER_NAME:
            return {...store,username:payload}
        default:
            return store
    }
}