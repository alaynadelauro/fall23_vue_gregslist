<template>
    <form @submit.prevent="createHouse()" class="creationForm p-4 pb-3">
        <div class="d-flex">
            <div class="me-5">
                <label for="bedrooms" class="form-label">Bedrooms</label>
                <input v-model="editable.bedrooms" type="number" required class="form-control" placeholder="bedrooms">
            </div>
            <div>
                <label for="bathrooms" class="form-label">Bathrooms</label>
                <input v-model="editable.bathrooms" type="number" required class="form-control" placeholder="bathrooms">
            </div>
        </div>
        <div class="d-flex">
            <div class="me-5">
                <label for="levels" class="form-label">Levels</label>
                <input v-model="editable.levels" type="number" required class="form-control" placeholder="how tall is your house?">
            </div>
            <div>
                <label for="year" class="form-label">Year</label>
                <input v-model="editable.year" type="number" required class="form-control" placeholder="how old is your house?">
            </div>
        </div>
        <div class="d-flex">
            <div class="me-5">
                <label for="image" class="form-label">Image</label>
                <input type="url" required class="form-control" placeholder="put a picture of your house here">
            </div>
            <div>
                <label for="price" class="form-label">Price</label>
                <input v-model="editable.price" type="number" required class="form-control" placeholder="how much is your house going for?">
            </div>
        </div>
        <div class="d-flex flex-column justify-content-center px-4 mx-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="editable.description" required class="form-control" placeholder="Say a few words about your house"></textarea>
        </div>
        <div class="text-center mt-4 mb-0">
            <button type="submit" class="btn submitButton">Submit</button>
        </div>
    </form>
</template>


<script>
import { ref } from 'vue';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';

export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            async createHouse() {
                try {
                    const houseData = editable.value
                    await housesService.createHouse(houseData)
                    editable.value = {}
                } catch (error) {
                    Pop.error(error)
                }
            },
        }
    }
}
</script>


<style lang="scss" scoped></style>