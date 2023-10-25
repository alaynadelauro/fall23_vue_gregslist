<template>
    <form @submit.prevent="submitForm()" class="creationForm p-4 pb-3">
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
    </form>
</template>


<script>
export default {
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped></style>