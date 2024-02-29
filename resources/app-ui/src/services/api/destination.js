import {request } from '@umijs/max';

/** Get Destinations List interface GET /api/destinations */
export async function getDestinations(params, options) {
  return request('/api/destinations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
