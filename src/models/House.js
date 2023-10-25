export class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.description = data.description
        this.id = data.id
        this.image = data.imgUrl
        this.levels = data.levels
        this.price = data.price
        this.updatedAt = new Date(data.updatedAt)
        this.year = data.year
    }
}