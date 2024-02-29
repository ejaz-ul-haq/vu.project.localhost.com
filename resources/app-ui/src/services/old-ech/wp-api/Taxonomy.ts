// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/taxonomies */
export async function getTaxonomy(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaxonomyParams,
  options?: { [key: string]: any },
) {
  return request<API.taxonomy>('/wp/v2/taxonomies', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/taxonomies/${param0} */
export async function getTaxonomy_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTaxonomyParams,
  options?: { [key: string]: any },
) {
  const { taxonomy: param0, ...queryParams } = params;
  return request<API.taxonomy>(`/wp/v2/taxonomies/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
