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
                <!-- <form @submit.prevent="submitForm()" class="creationForm p-4 pb-3">
                    <div class="d-flex">
                        <div class="me-5">
                            <label for="bedrooms" class="form-label">Bedrooms</label>
                            <input type="number" required class="form-control" placeholder="bedrooms">
                        </div>
                        <div>
                            <label for="bathrooms" class="form-label">Bathrooms</label>
                            <input type="number" required class="form-control" placeholder="bathrooms">
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="me-5">
                            <label for="levels" class="form-label">Levels</label>
                            <input type="number" required class="form-control" placeholder="how tall is your house?">
                        </div>
                        <div>
                            <label for="year" class="form-label">Year</label>
                            <input type="number" required class="form-control" placeholder="how old is your house?">
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="me-5">
                            <label for="image" class="form-label">Image</label>
                            <input type="url" required class="form-control" placeholder="put a picture of your house here">
                        </div>
                        <div>
                            <label for="price" class="form-label">Price</label>
                            <input type="number" required class="form-control" placeholder="how much is your house going for?">
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center px-4 mx-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea required class="form-control" placeholder="Say a few words about your house"></textarea>
                    </div>
                    <div class="text-center mt-4 mb-0">
                        <button type="submit" class="btn submitButton">Submit</button>
                    </div>
                </form> -->
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