import { AppState } from "../AppState"
// import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"
import { House } from "../models/House"
import { logger } from "../utils/Logger"

class HousesService {
    async getHouses() {
        try {
            const houseData = await api.get('api/houses')
            // logger.log(houseData.data)
            const newHouses = houseData.data.map(housePOJO => new House(housePOJO))
            AppState.houses = newHouses
            // return houseData.data
        } catch (error) {
            Pop.error(error)
        }
    }
    async createHouse(houseData) {
        const res = api.post('api/houses', houseData)
        logger.log(res)
        const newHouse = new House((await res).data)
        AppState.houses.push(newHouse)
    }
}

export const housesService = new HousesService()