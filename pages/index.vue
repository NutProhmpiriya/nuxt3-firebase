<template>
    <div class="flex flex-col">
        <div class="mx-auto flex flex-col">
            <UButton class="my-3" @click="facebookAuthWithRedirect">Facebook Redirect</UButton>

            <UButton class="my-3" @click="facebookAuthWithPopup">Facebook Popup</UButton>

            <UButton class="my-3" @click="googleAuthWithRedirect">Google Redirect</UButton>

            <UButton class="my-3" @click="googleAuthWithPopup">Google Popup</UButton>

            <UButton class="my-3" @click="logout">Logout</UButton>

        </div>
        <div class="p-5">
            <pre class="bg-red-200 p-5" v-if="errorMessage">{{ errorMessage }}</pre>
            <pre class="bg-emerald-100 p-5" v-if="user">{{ user }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider, getRedirectResult, signOut } from 'firebase/auth'

const user = ref(null)
const errorMessage = ref(null)


const nuxtApp = useNuxtApp()

onMounted(async() => {
    console.log('onMounted')
    const authRedirectResult = await getRedirectResult(nuxtApp.$auth)
    console.log({ authRedirectResult })
})

const facebookAuthWithRedirect = () => {
    console.log('facebookAuthWithRedirect');
    const provider = new FacebookAuthProvider()
    signInWithRedirect(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        }).catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        });
}

const facebookAuthWithPopup = () => {
    console.log('facebookAuthWithPopup');
    const provider = new FacebookAuthProvider()
    signInWithPopup(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        }).catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        });
}

const googleAuthWithRedirect = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        }).catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error
        });

}

const googleAuthWithPopup = () => {
    console.log('googleAuthWithPopup');
    const provider = new GoogleAuthProvider()
    signInWithPopup(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        }).catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.message
        });
}

const logout = () => {
    console.log('logout');
    signOut(nuxtApp.$auth)
        .then(() => {
            console.log('logout success')
            user.value = null
        }).catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        });
}
    
</script>

<style>

</style>