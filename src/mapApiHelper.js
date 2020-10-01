import axios from 'axios';

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
export const getLocationDetailByGeoCodes =  async (lat, long) => {

        //open street map api for reverse coding
        let url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ lat + '&lon=' + long;
    //    return setTimeout(getLocationDetail(url), 1000);
    await sleep(1000);
    const result =  await getLocationDetail(url);
    console.log("result",result);
    return result;
}

const getLocationDetail=  (url) => {
    return axios.get(url, {
        headers: {
        'Access-Control-Allow-Origin': '*'
    }}).then((result)=>{
    return result.data;            

    }).catch((error)=>{
        return {err: error};
    })
}