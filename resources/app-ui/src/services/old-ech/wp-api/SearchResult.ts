// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/search */
export async function getSearchResult(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSearchResultParams,
  options?: { [key: string]: any },
) {
  return request<API.searchResult>('/wp/v2/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
