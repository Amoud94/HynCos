import Vue from 'vue'
import VueI18n from 'vue-i18n'

let arrayTrans = [ 'global', 'errors','phases'];
let dataTrans = {
    en:{},
    fr:{}
}
for (const lang in dataTrans) {
    
    for (const key in arrayTrans) {
        let data = require(`../assets/langs/${lang}/${arrayTrans[key]}.json`);
        if (arrayTrans[key] == 'global') {
            dataTrans[lang] = { ...data, ...dataTrans[lang] };
        } else {
            for (const key1 in data) {
                dataTrans[lang][arrayTrans[key] + '_' + key1] = data[key1];
            }
        }
    }
}




Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'fr', // set default locale
  messages: dataTrans
});
export default i18n;

Vue.filter('t',function(text){
  return i18n.t(text);
});