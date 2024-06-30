<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="mx-auto mt-10 row-span-1">
            <UButton @click="facebookAuthWithRedirect">FACEBOOK Redirect</UButton>
            <span> | </span>
            <UButton @click="facebookAuthWithPopup">FACEBOOK Popup</UButton>
            <UDivider label="OR" />
            <UButton @click="googleAuthWithRedirect">Google Redirect</UButton>
            <span> | </span>
            <UButton @click="googleAuthWithPopup">Google Popup</UButton>
            <span> | </span>
        </div>
        <div class="m-auto row-span-3">
            <pre v-if="user">{{ user }}</pre>
            <pre v-if="error">{{ error }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider, getRedirectResult } from 'firebase/auth'

const user = ref(null)
const error = ref(null)


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
            console.log(error)
            error.value = error
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
            console.log(error)
            error.value = error
        });
}

const googleAuthWithRedirect = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        }).catch((error: any) => {
            console.log(error)
            error.value = error
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
            console.log(error)
            error.value = error
        });
}

const logout = () => {
    console.log('logout');
    nuxtApp?.$auth?.signOut()
        .then(() => {
            console.log('logout success')
            user.value = null
        }).catch((error: any) => {
            console.log(error)
            error.value = error
        });
}
    
</script>

<style>

</style>