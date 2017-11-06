<template>
    <form class="form">
        <h2>Signez le livre d'or !</h2>
        <label for="name_client">votre nom *</label>
        <input id="name_client" type="text" required placeholder="votre nom complet">
        <hr>
        <label for="name_project">le nom du projet</label>
        <input id="name_project" type="text" placeholder="description du projet">
        <hr>
        <label for="message">votre message *</label>
        <textarea id="message" required placeholder="un message sympa pour nous !"></textarea>
        <hr>
        <button
            class="btn"
            @click="submitForm($event)">valider</button>
    </form>
</template>
<script>

import { eventBus } from "../../main";

export default {
    data() {
        return {

        }
    },
    methods: {
        checkForm() {
            const fields = this.$el.querySelectorAll("[required]");
            let errors = 0;

            fields.forEach((f) => {
                if (!f.value) {
                    errors += 1;
                    f.classList.add("error");
                } else if (f.classList.contains("error")) {
                    f.classList.remove("error");
                }
            });

            return errors === 0;
        },
        submitForm(e) {

            if (!this.checkForm()) return;

            const url = "http://localhost:3333/post/testimony";
            const xhr = new XMLHttpRequest();

            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onload = function() {
                const data = JSON.parse(this.response);
                // console.log(data);
                if (!data.error) {
                    eventBus.testimonyPosted();
                }
            };

            const data = JSON.stringify({
                name_client: document.getElementById("name_client").value,
                name_project: document.getElementById("name_project").value || null,
                message: document.getElementById("message").value,
                published: false,
            })

            xhr.send(data);
            e.preventDefault();
        }
    }
}
</script>
<style scoped>
.form {
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    border: 1px solid silver;
    max-width: 320px;
    background: white;
    color: black;
    padding: 20px;
    margin: 20px auto;
}
input[type=text] {
    height: 32px;
    width: 220px;
    padding: 3px 3px 3px 20px;
    border-radius: .3rem;
    border: 1px solid;
    margin-bottom: 10px;
}
textarea {
    width: 220px;
    min-height: 200px;
    padding: 5px;
    border-radius: .3rem;
    border: 1px solid;
    margin-bottom: 10px;
    padding: 10px 10px 10px 20px;
}
input.error,
textarea.error {
    border-color: firebrick;
}

.btn {
    background: white;
    border-radius: .3rem;
    border: 1px solid;
    cursor: pointer;
    padding: 10px;
    width: 120px;
    margin-top: 10px;
    font-size: .9rem;
}
.btn:hover {
    border: 1px solid transparent;
    color: white;
    font-weight: bold;
    background: darkorange;
}

</style>
