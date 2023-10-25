<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1>Welcome to the Houses Page!!!</h1>
            </div>
        </div>
        <div class="row justify-content-evenly">
            <div v-for="house in houses" :key="house.id" class="col-5 m-3">
                <HouseCardComponent :houseProp="house" />
                <!-- <div class="houseCard">
                    <img class="image-fluid" :src="house.image">
                    <div class="m-2 w-50">
                        <p class="fw-bold mb-0">{{ house.description }}</p>
                        <div>
                            <p class="mb-0">Built in {{ house.year }}, this house has {{ house.levels }} floors. It has {{ house.bedrooms }} bedrooms and {{ house.bathrooms }} bathrooms</p>
                            <p v-if="account.id == house.creatorId">This is Your House!</p>
                            <div class="justify-content-end d-flex mt-3">
                                <button>View Details</button>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState';
import HouseCardComponent from '../components/HouseCardComponent.vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses),
            account: computed(() => AppState.account)
        };
    },
    components: { HouseCardComponent }
}
</script>


<style lang="scss" scoped>
.houseCard {
    border: 2px solid black;
    display: flex;
    width: 100%;
    height: 30vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

img {
    max-height: 30vh;
}
</style>