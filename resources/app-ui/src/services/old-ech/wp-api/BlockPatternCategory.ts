// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/block-patterns/categories */
export async function getBlockPatternCategory(options?: { [key: string]: any }) {
  return request<API.blockPatternCategory>('/wp/v2/block-patterns/categories', {
    method: 'GET',
    ...(options || {}),
  });
}
