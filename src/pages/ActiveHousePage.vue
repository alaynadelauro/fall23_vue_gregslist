<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <img :src="activeHouse.image">
            </div>
            <div class="col-6">
                <h1>{{ activeHouse.description }}</h1>
                <p>Bedrooms: {{ activeHouse.bedrooms }}</p>
                <p>Bathrooms: {{ activeHouse.bathrooms }}</p>
                <p>Built in: {{ activeHouse.year }}</p>
                <p>Levels: {{ activeHouse.levels }}</p>
                <p>Price: {{ activeHouse.price }}</p>
                <p>This house was posted by: {{ activeHouse.creator }}</p>
                <p>This post was last updated at: {{ activeHouse.updatedAt }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { useRoute, useRouter } from 'vue-router';

export default {
    startup() {
        const route = useRoute()
        const router = useRouter()
        return {
            activeHouse: computed(() => AppState.activeHouse)
        }
    }
}
</script>


<style lang="scss" scoped>
.submitButton {
    background-color: mediumspringgreen;
    color: black;
}
</style>