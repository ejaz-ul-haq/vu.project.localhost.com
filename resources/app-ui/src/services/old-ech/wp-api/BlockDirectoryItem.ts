// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/block-directory/search */
export async function getBlockDirectoryItem(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlockDirectoryItemParams,
  options?: { [key: string]: any },
) {
  return request<API.blockDirectoryItem>('/wp/v2/block-directory/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
