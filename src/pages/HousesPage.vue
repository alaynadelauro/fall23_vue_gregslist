<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex align-items-center pt-3">
                <div>
                    <h1>Welcome to the Houses Page!!!</h1>
                </div>
                <div v-if="account != null" class="ms-4">
                    <button @click="openForm()" class="btn btn-create">
                        <i class="mdi mdi-plus"></i>
                    </button>
                </div>
            </div>
            <div v-if="formbool == true" class="col-12 d-flex justify-content-center">
                <HouseForm />
            </div>
        </div>
        <div class="row justify-content-evenly">
            <div v-for="house in houses" :key="house.id" class="col-5 m-3">
                <HouseCardComponent :houseProp="house" />
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
import { logger } from '../utils/Logger';
import HouseForm from '../components/HouseForm.vue';

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
        function openForm() {

            if (AppState.formOpen == false) {
                AppState.formOpen = true
            } else {
                if (AppState.formOpen == true) {
                    AppState.formOpen = false
                }
            }
            logger.log('the form is open?', AppState.formOpen)
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses),
            account: computed(() => AppState.account),
            formbool: computed(() => AppState.formOpen),
            openForm() {
                openForm()
            }
        };
    },
    components: { HouseCardComponent, HouseForm }
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

.btn-create {
    color: mediumspringgreen;
    background-color: rgba(0, 0, 0, 0.755);
}

img {
    max-height: 30vh;
}

.creationForm {
    background-color: rgba(0, 0, 0, 0.755);
    color: mediumspringgreen;
    border: 3px solid black;
}

.submitButton {
    background-color: mediumspringgreen;
    color: black;
}
</style>