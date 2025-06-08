import axios from "axios";
import { MOIVE_API_KEY } from "../config";


async function movieAPI () {
    const movie_data = await axios.get('https://dummyjson.com/products')
    return movie_data;
}

export default movieAPI;