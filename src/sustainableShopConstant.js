import L from 'leaflet';

export const ORGANIC_VEGETABLE = 'ORGANIC_VEGETABLE';
export const ECO_FRIENDLY_PRODUCTS = 'ECO_FRIENDLY_PRODUCTS';
export const ORGANIC_VEGETABLE_AND_NON_VEGETARIAN = 'ORGANIC_VEGETABLE_AND_NON_VEGETARIAN';
export const SUSTAINABLE_PADS = 'SUSTAINABLE_PADS';
export const ELECTRIC_CAR = 'ELECTRIC_CAR';

export const organicVegetableIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/QJz.svg',
    iconRetinaUrl: 'https://svgur.com/i/QJz.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    // shadowUrl: 'https://i.imgur.com/PEAzuDM.png',
    // shadowSize: [25, 55],
    // shadowAnchor: [20, 92],
  })
export const organicPadsIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/QHz.svg',
    iconRetinaUrl: 'https://svgur.com/i/QHz.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 55],
    // shadowUrl: 'https://i.imgur.com/hwcpF3I.pngg',
    // shadowSize: [25, 55],
    // shadowAnchor: [20, 92],
  })
  export const ecoFriendlyProductsIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/QKk.svg',
    iconRetinaUrl: 'https://svgur.com/i/QKk.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    // shadowUrl: 'https://i.imgur.com/hwcpF3I.pngg',
    // shadowSize: [25, 55],
    // shadowAnchor: [20, 92],
  })

  export const electricCarIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/Qb4.svg',
    iconRetinaUrl: 'https://svgur.com/i/Qb4.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    // shadowUrl: 'https://i.imgur.com/hwcpF3I.pngg',
    // shadowSize: [25, 55],
    // shadowAnchor: [20, 92],
  })

 export const sustainableShopsConstant = [
    [[12.95826, 77.70677],['ECO_FRIENDLY_PRODUCTS']],
    [[28.46716, 77.08181],['ORGANIC_VEGETABLE']],
[[28.59147,77.06482], ['ORGANIC_VEGETABLE']],
[[28.62116,77.21092], ['ORGANIC_VEGETABLE']],
[[28.68944,77.17788], ['ORGANIC_VEGETABLE']],
[[28.40234,77.04588], ['ORGANIC_VEGETABLE']],
[[28.57325,77.23020], ['ORGANIC_VEGETABLE']],
[[28.65562,77.20067], ['ECO_FRIENDLY_PRODUCTS']],
[[28.53721,77.25322], ['ORGANIC_VEGETABLE_AND_NON_VEGETARIAN']],
[[28.71439,77.12970], ['ORGANIC_VEGETABLE']],
[[28.53790,77.19902], ['ORGANIC_VEGETABLE']],
[[28.57011,77.18834], ['SUSTAINABLE_PADS']],
[[28.55589, 77.20595], ['ELECTRIC_CAR']],
[[28.54273,77.43738], ['ELECTRIC_CAR']],
[[29.71930,76.98267], ['ELECTRIC_CAR']],
[[28.47348,77.05661], ['ELECTRIC_CAR']],
[[28.44488,77.30876], ['ELECTRIC_CAR']],
[[28.68147,77.37890], ['ELECTRIC_CAR']],
[[28.58811,77.31422], ['ELECTRIC_CAR']],
[[28.61007,77.06401], ['ELECTRIC_CAR']],
[[28.56401,77.18859], ['ELECTRIC_CAR']],
[[28.69829,77.12082],['ELECTRIC_CAR']]
// [28.59147,77.06482],
// [28.62116,77.21092],
// [28.68944,77.17788],
// [28.40234,77.04588],
// [28.57325,77.23020],
// [28.65562,77.20067],
// [28.53721,77.25322],
// [28.71439,77.12970],
// [28.53790,77.19902],
// [28.57011,77.18834]
];

export const getIcon= (iconName) => {
    switch (iconName){
        case ORGANIC_VEGETABLE:
            return organicVegetableIcon;

        case SUSTAINABLE_PADS:
            return organicPadsIcon;

        case ECO_FRIENDLY_PRODUCTS:
            return ecoFriendlyProductsIcon;

        case ELECTRIC_CAR: 
            return electricCarIcon;
            
        default:
            return organicVegetableIcon;
    }

}
