import Vue from 'vue'
import VueI18n from 'vue-i18n'
import viewZH from './zh/view.json'
import viewEN from './en/view.json'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

const messages = {
    'zh':Object.assign(
        viewZH 
    ),
    'en':Object.assign(
        viewEN
    )
}
const i18n = new VueI18n({
    locale:Cookies.get('language')||'zh',
    fallbackLocale:'zh',
    messages
})

export default i18n