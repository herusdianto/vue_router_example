<template>
    <div>
        <h1>{{message}}</h1>

        <br>

        <router-link :to="{ name: 'form' }">Form</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Index'
            }
        }
    }
</script>
