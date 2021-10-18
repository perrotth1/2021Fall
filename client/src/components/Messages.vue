<template>
    <div class="messages">
        <div class="notificaton is-light" :class="`is-${message.type}`" v-for="(message, i) in messages" :key="i"> <!--An element can have a class and a :class attribute. :class used for binding. Javascript expression goes in this attribute-->
            <button class="delete" @click.prevent="kill(i)"></button>
            {{message.text}}
        </div>
    </div>
</template>

<script>
import session from '../services/session.js';

export default {
    data: () => ({
        messages: session.messages
    }),
    methods: {
        kill(i){
            this.messages.splice(i, 1);
            
        }
    }
}
</script>

<style>

</style>