<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1>Welcome to the Houses Page!!!</h1>
            </div>
        </div>
        <div class="row">
            <div v-for="house in houses" :key="house.id" class="col-6">
                <h1>HOUSE!!!</h1>
            </div>
        </div>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => {
            getHouses()
        })
        return {
            houses: computed(() => AppState.houses)
        }
    }

}
</script>


<style lang="scss" scoped>
.houseCard {
    border: 2px solid black;
}
</style>