import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';
// purpose,
// bathsMin = '0',
// minPrice = '0',
// maxPrice = '1000000',
// roomsMin = '0',
// areaMax = '35000',
// locationExternalIDs = '5002,6020',
// categoryExternalID = '4',
// rentFrequency = 'monthly',
// sort = 'city-level-score'
// export const fetchApi = async (url) => {
//   var options = {
//     method: 'GET',
//     url: 'https://bayut.p.rapidapi.com/properties/list',
//     params: {
//       locationExternalIDs: locationExternalIDs,
//       purpose: purpose,
//       hitsPerPage: '6',
//       page: '0',
//       lang: 'en',
//       sort: sort,
//       rentFrequency: rentFrequency,
//       categoryExternalID: categoryExternalID,
//       bathsMin: bathsMin,
//       priceMin: minPrice,
//       priceMax: maxPrice,
//       roomsMin: roomsMin,
//       areaMax: areaMax,
//     },
//     headers: {
//       'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//       'X-RapidAPI-Key': 'c1f5e8a1ffmsh2baee0010520200p1f6119jsn5e14b2de6940',
//     },
//   };

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'c1f5e8a1ffmsh2baee0010520200p1f6119jsn5e14b2de6940',
    },
  });

  return data;
};
