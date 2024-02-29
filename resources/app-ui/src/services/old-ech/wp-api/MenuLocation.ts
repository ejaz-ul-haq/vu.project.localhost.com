// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/menu-locations */
export async function getMenuLocation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMenuLocationParams,
  options?: { [key: string]: any },
) {
  return request<API.menuLocation>('/wp/v2/menu-locations', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/menu-locations/${param0} */
export async function getMenuLocation_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMenuLocationParams,
  options?: { [key: string]: any },
) {
  const { location: param0, ...queryParams } = params;
  return request<API.menuLocation>(`/wp/v2/menu-locations/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
