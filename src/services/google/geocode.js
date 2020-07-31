import axios from "axios";

const geocodeapi = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/json"
});

export default geocodeapi;
