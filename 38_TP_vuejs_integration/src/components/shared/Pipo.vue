<template lang="html">
  <div class="pipo" @click="sendDataToMainJS">
    <h1>widget {{ title }}</h1>
    <p v-if="content" >
        {{ content }}
    </p>
    <p v-else>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
  </div>
</template>
<script>

import { eventBus } from "../../main";

export default {
    data() {
        return {
            title: "Pipo"
        }
    },
    props: ["content", "img"], // props représente les propriétés que l'on peut "injecter" dans les balises <pipo>
    methods: {
        // cette fonction est exécutée au click
        sendDataToMainJS() {
            // on utilise eventBus pour envoyer un message vers main.js
            eventBus.dispatchData("hello world !");
        }
    }
};
</script>

<style lang="scss" scoped>
.pipo {
    padding: 20px;
    max-width: 540px;
    border: 1px dashed silver;
    margin: 0 auto 20px;
}

</style>
