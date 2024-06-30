// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  // plugins: ['~/plugins/firebase.client.ts'],

  runtimeConfig: {
    firebase: {
      apiKey: "AIzaSyCG3pnR078VE1r_eqBtg9pidAwYKSygP3Q",
      authDomain: "nxut-firebase-demo.firebaseapp.com",
      projectId: "nxut-firebase-demo",
      storageBucket: "nxut-firebase-demo.appspot.com",
      messagingSenderId: "495634732218",
      appId: "1:495634732218:web:c9ee4d13e71adc66d21e83",
      measurementId: "G-D82JEH4G6V",
    }
  }
})