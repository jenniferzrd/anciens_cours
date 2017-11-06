<template>
    <div class="display-testimonies">
        <ul class="list">
            <li class="item"
                v-for="t in testimonies">
                <p class="client">{{ t.name_client }} :</p>
                <p
                    v-if="t.name_project"
                    class="project">
                    projet : {{ t.name_project }}
                </p>
                <blockquote class="message">"{{ t.message }}"</blockquote>
            </li>
        </ul>
        <i
            v-if="!blockPrev"
            @click="moveSlide('prev')"
            class="icon prev fa fa-arrow-left fa-lg">
        </i>
        <i
            v-if="!blockNext"
            @click="moveSlide('next')" class="icon next fa fa-arrow-right fa-lg">
        </i>
    </div>
</template>

<script>

export default {
    created() {
        this.getPublishedTestimonies((res) => {
            this.testimonies = res;
            this.blockNext = this.testimonies.length === 1;
        });
    },
    mounted() {
        this.slider = this.$el.querySelector(".list");
    },
    data() {
        return {
            blockPrev: true,
            blockNext: false,
            current: 1,
            testimonies: null,
            slider: null,
            step: 0,
        }
    },
    methods: {
        getPublishedTestimonies(clbk) {
            const url = "http://localhost:3333/get/published-testimonies/";
            const xhr = new XMLHttpRequest();

            xhr.open("GET", url);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onload = function() {
                const res = JSON.parse(this.response);
                // console.log(res.data);
                if (res.error) return;
                clbk(res.data);
            };

            xhr.send();
        },
        moveSlide(dir) {

            if (dir === "next" && this.current < this.testimonies.length) {
                this.step = -(this.current * 100);
                this.current += 1;

            } else if (dir === "prev" && this.current > 1) {
                this.step += 100;
                this.current -= 1;

            } else {
                // fin de liste ou début de liste, on ne fait rien.
                return;
            }

            if (this.current === 1) {
                this.blockPrev = true;
            } else {
                this.blockPrev = false;
            }
            if (this.current >= this.testimonies.length) {
                this.blockNext = true;
            } else {
                this.blockNext = false;
            }

            this.slider.style.transform = `translateX(${this.step}%)`;

            // console.log(dir);
            // console.log("this.current after update => ");
            // console.log(this.current);
            // console.log(this.step);
        },
    }
}

</script>

<style scoped>
.display-testimonies {
    height: 220px;
    width: 60vw;
    min-width: 300px;
    max-width: 540px;
    border: 1px solid white;
    margin: 20px auto 20px;
    overflow: hidden;
    position: relative;
}

.list {
    display: flex;
    height: 100%;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
}

.item {
    height: 100%;
    flex: 0 0 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

}

.icon {
    position: absolute;
    top: calc(50% - 8px);
    z-index: 1;
    cursor: pointer;
}

.icon:hover {
    color: darkorange;
}

.icon.next {
    right: 1%;
}

.icon.prev {
    left: 1%;
}

.message {
    font-style: italic;
}

</style>
