import { get, parseRequest } from '../utils/fetch';
import { locationFormatter, getApiParams } from '../utils/foursquareApiFormatter';
import config from '../config';

/**
 * @returns {Promise}
 */
export function getPlaces({ place, longitude, latitude }) {
  return get(`${config.apiBaseUrl}/venues/explore`, {
    ll: locationFormatter(longitude, latitude),
    query: place,
    ...getApiParams,
    radius: 1000,
    limit: 50
  }).then(parseRequest);
}

/**
 * @param {string} id
 * @returns {Promise}
 */
export function getVenueDetails(id) {
  return get(`${config.apiBaseUrl}/venues/${id}`, {
    ...getApiParams
  }).then(parseRequest);
}
