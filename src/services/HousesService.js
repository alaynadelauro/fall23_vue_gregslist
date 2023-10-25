import { AppState } from "../AppState"
// import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"
import { House } from "../models/House"

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
}

export const housesService = new HousesService()