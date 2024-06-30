import Vconsole from 'vconsole';

export default defineNuxtPlugin((nuxtApp) => { 
    nuxtApp.vueApp.use(new Vconsole());
});