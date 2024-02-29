// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/types */
export async function getType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTypeParams,
  options?: { [key: string]: any },
) {
  return request<API.type>('/wp/v2/types', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/types/${param0} */
export async function getType_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTypeParams,
  options?: { [key: string]: any },
) {
  const { type: param0, ...queryParams } = params;
  return request<API.type>(`/wp/v2/types/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
