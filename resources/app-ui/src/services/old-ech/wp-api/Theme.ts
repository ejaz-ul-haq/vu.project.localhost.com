// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/themes */
export async function getTheme(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getThemeParams,
  options?: { [key: string]: any },
) {
  return request<API.theme>('/wp/v2/themes', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/themes/${param0} */
export async function getTheme_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getThemeParams,
  options?: { [key: string]: any },
) {
  const { stylesheet: param0, ...queryParams } = params;
  return request<API.theme>(`/wp/v2/themes/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
