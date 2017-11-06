<template>
    <div>
        <h2 class="title">Gérez le livre d'or</h2>
        <table class="tabler">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom client</th>
                    <th>nom projet</th>
                    <th>message</th>
                    <th>status</th>
                    <th>supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="t in testimonies">
                    <td class="id">{{ t.id }}</td>
                    <td>{{ t.name_client }}</td>
                    <td>{{ t.name_project }}</td>
                    <td>{{ t.message }}</td>
                    <td class="published">
                        <div
                            @click="updateTestimonyStatus(t.id)"
                            :class="{'is-on': t.published === 1}">
                        </div>
                    </td>
                    <td class="delete" @click="deleteTestimony(t.id)">
                        <i class="icon fa fa-times"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { eventBus } from "../../main";

export default {
    created() {

        eventBus.$on("testimonyPosted", () => {
            this.getTestimonies((res) => {
                this.testimonies = res;
            });
        });

        this.getTestimonies((res) => {
            this.testimonies = res;
            // console.log(this.testimonies);
        });
    },
    data() {
        return {
            testimonies: null
        }
    },
    methods: {
        updateTestimonyStatus(id) {
            const url = "http://localhost:3333/put/testimony/" + id;
            const xhr = new XMLHttpRequest();
            const vue = this;

            xhr.open("PUT", url);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onload = function() {
                const res = JSON.parse(this.response);
                // console.log(res.data);
                vue.getTestimonies((res) => {
                    vue.testimonies = res;
                    // console.log(vue.testimonies);
                });
            };

            xhr.send();
        },
        deleteTestimony(id) {
            const url = "http://localhost:3333/delete/testimony/" + id;
            const xhr = new XMLHttpRequest();
            const vue = this;

            xhr.open("DELETE", url);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onload = function() {
                const res = JSON.parse(this.response);
                // console.log(res.data);

                vue.getTestimonies((res) => {
                    vue.testimonies = res;
                    // console.log(vue.testimonies);
                });
            };

            xhr.send();
        },
        getTestimonies(clbk) {
            const url = "http://localhost:3333/get/testimonies";
            const xhr = new XMLHttpRequest();

            xhr.open("GET", url);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onload = function() {
                const res = JSON.parse(this.response);
                console.log(res.data);
                clbk(res.data);
            };

            xhr.send();
        }
    }
}
</script>

<style scoped>

.tabler {
    margin:20px auto 40px;
}
table, th, td {
    border: 1px solid;
    border-collapse: collapse;
}
th, td {
    padding: 10px;
}
td.delete:hover .icon {
    color: firebrick;
}
td.delete {
    cursor: pointer;
}
td .icon {
    pointer-events: none;
}

.published div {
    cursor: pointer;
    margin: auto;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: firebrick;
}

.published div.is-on {
    background: forestgreen;
}
</style>
