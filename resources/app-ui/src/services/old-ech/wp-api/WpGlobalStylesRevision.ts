// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/global-styles/${param0}/revisions */
export async function getWpGlobalStylesRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpGlobalStylesRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, ...queryParams } = params;
  return request<API.wpGlobalStylesRevision>(`/wp/v2/global-styles/${param0}/revisions`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
