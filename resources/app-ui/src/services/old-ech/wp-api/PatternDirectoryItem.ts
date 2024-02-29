// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/pattern-directory/patterns */
export async function getPatternDirectoryItem(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPatternDirectoryItemParams,
  options?: { [key: string]: any },
) {
  return request<API.patternDirectoryItem>('/wp/v2/pattern-directory/patterns', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
