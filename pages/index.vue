<template>
    <div class="flex flex-col">
        <div class="mx-auto flex flex-col">
            <UButton color="blue" :loading="buttonLoading" class="my-3"  @click="facebookAuthWithRedirect">Facebook Redirect</UButton>

            <UButton color="blue" :loading="buttonLoading" class="my-3" @click="facebookAuthWithPopup">Facebook Popup</UButton>

            <UButton :loading="buttonLoading" class="my-3" @click="googleAuthWithRedirect">Google Redirect</UButton>

            <UButton :loading="buttonLoading" class="my-3" @click="googleAuthWithPopup">Google Popup</UButton>

            <UButton color="red" :loading="buttonLoading" class="my-3" @click="logout">Logout</UButton>

        </div>
        <div class="p-5">
            <pre class="bg-red-200 p-5" v-if="errorMessage">{{ errorMessage }}</pre>
            <pre class="bg-emerald-100 p-5" v-if="user">{{ user }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider, getRedirectResult, signOut, type User } from 'firebase/auth'

const user = ref(null)
const errorMessage = ref(null)
const buttonLoading = ref(false)
const resultLogout = ref('')

const nuxtApp = useNuxtApp()

onMounted(async () => {
    try {
        console.log('onMounted')
        const authRedirectResult = await getRedirectResult(nuxtApp.$auth)
        if (authRedirectResult?.user) {
            console.log({authRedirectResult})
        }
    } catch (error) {
        console.log(error)
    }
})

const facebookAuthWithRedirect = () => {
    buttonLoading.value = true
    const provider = new FacebookAuthProvider()
    signInWithRedirect(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        })
        .catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        })
        .finally(() => {
            buttonLoading.value = false
        });
}

const facebookAuthWithPopup = () => {
    buttonLoading.value = true
    const provider = new FacebookAuthProvider()
    signInWithPopup(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        })
        .catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        })
        .finally(() => {
            buttonLoading.value = false
        });
}

const googleAuthWithRedirect = () => {
    buttonLoading.value = true
    const provider = new GoogleAuthProvider()
    signInWithRedirect(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        })
        .catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        })
        .finally(() => {
            buttonLoading.value = false
        });

}

const googleAuthWithPopup = () => {
    buttonLoading.value = true
    const provider = new GoogleAuthProvider()
    signInWithPopup(nuxtApp.$auth, provider)
        .then((result: any) => {
            console.log(result)
            user.value = result.user
        })
        .catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        })
        .finally(() => {
            buttonLoading.value = false
        });
}

const logout = () => {
    buttonLoading.value = true
    signOut(nuxtApp.$auth)
        .then(() => {
            console.log('logout success')
            user.value = null
        })
        .catch((error: any) => {
            console.log(error.code)
            errorMessage.value = error.code
        })
        .finally(() => {
            buttonLoading.value = false
        });
}
    
</script>

<style>

</style>