import Vue from 'vue'
import Vuex from 'vuex'
import createPresistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

import common from './modules/common'

Vue.use(Vuex)

// sessionStorage和cookies兼容
let getStorageType =function(){
    if(window.sessionStorage){
        return {
            storage:window.sessionStorage
        }
    }else{
        return {
            getState:(key)=>Cookies.getJSON(key),
            setState:(key,value)=>Cookies.set(key,value),
            removeState:key=>Cookies.remove(key),
            path:['common']
        }
    }
}

export default new Vuex.Store({
    modules:{
        common
    },
    plugins:[
        createPresistedState(
            getStorageType()
        )
    ]
})