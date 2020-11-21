import L from 'leaflet';
import {filter} from 'lodash';

export const ORGANIC_VEGETABLE = 'ORGANIC_VEGETABLE';
export const ECO_FRIENDLY_PRODUCTS = 'ECO_FRIENDLY_PRODUCTS';
export const ORGANIC_VEGETABLE_AND_NON_VEGETARIAN = 'ORGANIC_VEGETABLE_AND_NON_VEGETARIAN';
export const SUSTAINABLE_PADS = 'SUSTAINABLE_PADS';
export const ELECTRIC_CAR = 'ELECTRIC_CAR';
export const ORGANIC_COSMETICS = 'ORGANIC_COSMETICS'
export const ORGANIC_MEAT = 'ORGANIC_MEAT'
export const GREEN_GIFT = 'GREEN_GIFT'
export const ORGANIC_ICECREAM = 'ORGANIC_ICECREAM';
export const ORGANIC_FASTFOOD = 'ORGANIC_FASTFOOD';


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
  
  export const plantMeatIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/R2S.svg',
    iconRetinaUrl: 'https://svgur.com/i/R2S.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 55],
    // shadowUrl: 'https://i.imgur.com/hwcpF3I.pngg',
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

  export const sustainableCosmeticsIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/Qei.svg',
    iconRetinaUrl: 'https://svgur.com/i/Qei.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    // shadowUrl: 'https://i.imgur.com/hwcpF3I.pngg',
    // shadowSize: [25, 55],
    // shadowAnchor: [20, 92],
  })

  export const sustainableGiftIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/R7a.svg',
    iconRetinaUrl: 'https://svgur.com/i/R7a.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    // shadowUrl: 'https://i.imgur.com/hwcpF3I.pngg',
    // shadowSize: [25, 55],
    // shadowAnchor: [20, 92],
  })
  export const organicIcecreamIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/RfN.svg',
    iconRetinaUrl: 'https://svgur.com/i/RfN.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    // shadowUrl: 'https://i.imgur.com/hwcpF3I.pngg',
    // shadowSize: [25, 55],
    // shadowAnchor: [20, 92],
  })

  export const organicFastFoodIcon = new L.Icon({
    iconUrl: 'https://svgur.com/i/Reb.svg',
    iconRetinaUrl: 'https://svgur.com/i/Reb.svg',
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
[[28.69829,77.12082],['ELECTRIC_CAR']],
[[28.45204,77.06882], ['ORGANIC_COSMETICS']],
[[28.43714,77.00579], ['ECO_FRIENDLY_PRODUCTS']],
[[28.47570,77.06202], ['ORGANIC_COSMETICS']],
[[28.43419,77.10662], ['ORGANIC_COSMETICS']],
[[28.70295,77.15584], ['ORGANIC_COSMETICS']],
[[28.71183,77.11410], ['ORGANIC_COSMETICS']],
[[28.60016,77.22744], ['ORGANIC_COSMETICS']],
[[28.64581,77.12111], ['ORGANIC_COSMETICS']],
[[28.72468,77.15184], ['ORGANIC_COSMETICS']],
[[28.49320,77.09215], ['ORGANIC_COSMETICS']],
[[28.54137,77.15474], ['ORGANIC_COSMETICS']],
[[28.57027,77.32545], ['ORGANIC_COSMETICS']],
[[28.54100,77.36698], ['ORGANIC_COSMETICS']],
[[28.64082,77.21147], ['ORGANIC_COSMETICS']],
[[28.55588,77.20198], ['ORGANIC_COSMETICS']],
[[28.71509,77.11604], ['ORGANIC_COSMETICS']],
[[28.57333,77.22995], ['ORGANIC_FOOD']],
[[28.53885,77.21589], ['ORGANIC_FOOD']],
 [[28.60045,77.22739], ['ORGANIC_FOOD']],
 [[28.50112,77.21524], ['ORGANIC_VEGETABLE']],
 [[28.52500,77.27631], ['ORGANIC_MEAT']],
 [[28.68967,77.29868], ['ORGANIC_MEAT']],
 [[28.67510,77.31228], ['GREEN_GIFT']],
 [[28.54692,77.35341], ['GREEN_GIFT']],
 [[28.53400,77.20947], ['ECO_FRIENDLY_PRODUCTS']],
 [[28.37680,76.92365], ['ECO_FRIENDLY_PRODUCTS']],
 [[28.57341,77.23563], ['GREEN_GIFT']],
 [[28.55670,77.23348], ['ECO_FRIENDLY_PRODUCTS']],
 [[28.46732,77.08169], ['ECO_FRIENDLY_PRODUCTS']],
 [[28.57994,77.32816], ['GREEN_GIFT']],
 [[12.97714,77.61727], ['ORGANIC_COSMETICS']],
 [[28.56077,77.25709], ['ORGANIC_FOOD']],
 [[23.02098,72.55470], ['ORGANIC_COSMETICS']],
 [[13.00566,77.58067], ['ORGANIC_ICECREAM']],
 [[12.93253,77.63130], ['ORGANIC_ICECREAM']],
 [[12.97825,77.64315], ['ORGANIC_ICECREAM']],
 [[19.10088,72.82784], ['ORGANIC_ICECREAM']],
 [[19.10640,72.82626], ['ORGANIC_ICECREAM']],
 [[19.14542,72.82926], ['ORGANIC_ICECREAM']],
 [[22.55266,88.35262], ['ORGANIC_ICECREAM']],
 [[18.91468,72.81812], ['ORGANIC_ICECREAM']],
 [[18.97602,72.80732], ['ORGANIC_ICECREAM']],
 [[18.94359,72.79448], ['ORGANIC_ICECREAM']],
 [[19.02643,72.85053], ['ORGANIC_ICECREAM']],
 [[19.07332,72.83010], ['ORGANIC_ICECREAM']],
 [[18.51893,73.87681], ['ORGANIC_ICECREAM']],
 [[18.47266,73.89978], ['ORGANIC_ICECREAM']],
 [[18.56850,73.90746], ['ORGANIC_ICECREAM']],
 [[23.04037,72.54495], ['ORGANIC_ICECREAM']],
 [[28.47982,77.08177], ['ORGANIC_FASTFOOD']],
 [[28.62490,77.09190], ['ORGANIC_FASTFOOD']],
 [[28.64672,77.30163], ['ORGANIC_FASTFOOD']],
 [[28.55880,77.27344], ['ORGANIC_ICECREAM']],
 [[19.00611,72.83100], ['ORGANIC_ICECREAM']],
 [[28.52306,77.27678], ['ORGANIC_FOOD']],
 [[28.57993,77.32816], ['GREEN_GIFT']],
 [[28.69608,77.15277], ['ECO_FRIENDLY_PRODUCTS']],
 [[28.6389,77.3775], ['ECO_FRIENDLY_PRODUCTS']]
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
        
        case ORGANIC_COSMETICS:
            return sustainableCosmeticsIcon;

        case ORGANIC_MEAT:
            return plantMeatIcon;
        
        case GREEN_GIFT:
          return sustainableGiftIcon;

        case ORGANIC_FASTFOOD:
          return organicFastFoodIcon;
        
        case ORGANIC_ICECREAM:
          return organicIcecreamIcon;
            
        default:
            return organicVegetableIcon;
    }

}

export const filterShopsByType = (type) => {
 return filter(sustainableShopsConstant, (shop) => {
    return shop[1][0] === type;
  })

}
