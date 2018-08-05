export const geoLocation = {
  latitude: '123',
  longitude: 'abc'
};

export const venues = [
  {
    name: 'Pizza Picasso & Grill',
    address: ['Wagnerplein', '2324 Leiden', 'Netherlands'],
    icon: {
      name: 'Pizza Places',
      url: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_64.png'
    }
  },
  {
    name: 'Adyen',
    address: ['Keizersgracht', 'Amsterdam', 'Netherlands'],
    icon: {
      name: 'Work Places',
      url: 'https://ss3.4sqi.net/img/categories_v2/work/work_64.png'
    }
  }
];

export const fourSquareVenuesResult = [
  {
    id: '4dd569c0d4c05d5096b871d4',
    name: 'Pizza Picasso & Grill',
    location: {
      address: 'Wagnerplein',
      lat: 52.1412748375,
      lng: 4.471563,
      labeledLatLngs: [
        {
          label: 'display',
          lat: 52.1412748375,
          lng: 4.471563
        }
      ],
      distance: 216,
      postalCode: '2324',
      cc: 'NL',
      city: 'Leiden',
      state: 'South Holland',
      country: 'Netherlands',
      formattedAddress: ['Wagnerplein', '2324 Leiden', 'Netherlands']
    },
    categories: [
      {
        id: '4bf58dd8d48988d1ca941735',
        name: 'Pizza Place',
        pluralName: 'Pizza Places',
        shortName: 'Pizza',
        icon: {
          prefix: 'https://ss3.4sqi.net/img/categories_v2/food/pizza_',
          suffix: '.png'
        },
        primary: true
      }
    ],
    referralId: 'v-1533476727',
    hasPerk: false
  }
];
