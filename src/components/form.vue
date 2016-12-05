<template>
    <div>
        <h1>{{message}}</h1>

        <br>

        <router-link :to="{ name: 'index' }">Index</router-link>
        <router-link :to="{ name: 'user', params: { id: 3 } }">User</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Form'
            }
        }
    }
</script>
