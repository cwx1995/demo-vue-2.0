import Vue from 'vue'
import Cookies from 'js-cookie'

const vue =new Vue()
const common = {
    state:{
        language:Cookies.get('language')||'zh'
    },
    mutations:{
        SET_LANGUAGE:(state,language)=>{
            state.language=language
            Cookies.set('language',language)
        }
    },
    actions:{
        setLanguage({commit},language){
            commit('SET_LANGUAGE',language)
        }
    }
}
export default common