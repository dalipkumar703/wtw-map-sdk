import axios from 'axios';
export const getLocationDetailByGeoCodes = (lat, long) => {
    try {
        //open street map api for reverse coding
        const result = axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`, {headers: {
            "Access-Control-Allow-Origin": "*"
        }})
        return result;
    } catch (error) {
        console.log("error", error);
        return { err : error};
    }
    
}