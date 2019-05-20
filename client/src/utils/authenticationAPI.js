import axios from "axios";

export default {
    login: function (userInfo) {
        return axios.post("/login", userInfo)
    }

}