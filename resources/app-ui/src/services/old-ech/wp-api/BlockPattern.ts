// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/block-patterns/patterns */
export async function getBlockPattern(options?: { [key: string]: any }) {
  return request<API.blockPattern>('/wp/v2/block-patterns/patterns', {
    method: 'GET',
    ...(options || {}),
  });
}
