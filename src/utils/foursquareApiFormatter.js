import moment from 'moment';

import config from '../config';

const date = new Date();
const formattedDate = moment(date).format('YYYYMMDD');
const { client_id, client_secret } = config;

export const locationFormatter = (longitude, latitude) => `${latitude},${longitude}`;

export const getApiParams = {
  v: formattedDate,
  client_id,
  client_secret
};
