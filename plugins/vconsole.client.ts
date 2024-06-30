import Vconsole from 'vconsole';

export default defineNuxtPlugin((nuxtApp) => { 
    const vConsole = new Vconsole();
    vConsole.setSwitchPosition(1000, 1000)
    nuxtApp.vueApp.use(vConsole);
});