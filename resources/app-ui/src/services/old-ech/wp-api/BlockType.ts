// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/block-types */
export async function getBlockType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlockTypeParams,
  options?: { [key: string]: any },
) {
  return request<API.blockType>('/wp/v2/block-types', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/block-types/${param0} */
export async function getBlockType_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlockTypeParams,
  options?: { [key: string]: any },
) {
  const { namespace: param0, ...queryParams } = params;
  return request<API.blockType>(`/wp/v2/block-types/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/block-types/${param1}/${param0} */
export async function getBlockType_3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlockTypeParams,
  options?: { [key: string]: any },
) {
  const { name: param0, namespace: param1, ...queryParams } = params;
  return request<API.blockType>(`/wp/v2/block-types/${param1}/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
