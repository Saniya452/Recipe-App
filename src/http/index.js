import axios from "axios"

export const getRecipesList = async (tags = null, size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list', params: {from: '0', size: size || '20',tags },
        headers: {
           'X-RapidAPI-Key': '90e140eebcmsh28c2aa983365996p14eff5jsncc778f1d0290',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
    return await axios.request(options)
};
