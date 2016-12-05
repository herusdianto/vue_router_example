<template>
    <div>
        <h1>{{message}}</h1>

        <br>

        <router-link :to="{ name: 'form' }">Form</router-link>
        <router-link :to="{ name: 'index' }">Index</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'User ID: ' + this.$route.params.id
            }
        }
    }
</script>
