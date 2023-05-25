import axios from "axios";

export const getFood= () => {
    
    
    return axios.get("http://127.0.0.1:5000/food")
}