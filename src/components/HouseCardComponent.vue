<template>
    <div class="houseCard">
        <img class="image-fluid w-50" :src="houseProp.image">
        <div class="m-2 w-50">
            <p class="fw-bold mb-0">{{ houseProp.description }}</p>
            <div>
                <p class="mb-0">Built in {{ houseProp.year }}, this house has {{ houseProp.levels }} floors. It has {{ houseProp.bedrooms }} bedrooms and {{ houseProp.bathrooms }} bathrooms</p>
                <p v-if="account.id == houseProp.creatorId">This is Your House!</p>
                <p v-if="account.id != houseProp.creatorId">Could be yours for {{ houseProp.price }}</p>
                <div class="justify-content-end d-flex mt-3">
                    <router-link :to="{ name: 'HouseDetails', params: { HouseId: houseProp.id } }">
                        <button class="btn submitButton">View Details</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { House } from '../models/House';
import { AppState } from '../AppState';

export default {
    props: {
        houseProp: { type: House },
    },
    setup() {
        return {
            account: computed(() => AppState.account)
        }
    }
}
</script>


<style lang="scss" scoped>
.submitButton {
    background-color: mediumspringgreen;
    color: black;
    border: 2px solid black;
}
</style>