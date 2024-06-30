import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCG3pnR078VE1r_eqBtg9pidAwYKSygP3Q",
    authDomain: "nxut-firebase-demo.firebaseapp.com",
    projectId: "nxut-firebase-demo",
    storageBucket: "nxut-firebase-demo.appspot.com",
    messagingSenderId: "495634732218",
    appId: "1:495634732218:web:c9ee4d13e71adc66d21e83",
    measurementId: "G-D82JEH4G6V",
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return {
    provide: {
      auth,
      firestore,
    }
  }
});
