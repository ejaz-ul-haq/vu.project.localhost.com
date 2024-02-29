// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/widget-types */
export async function getWidgetType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWidgetTypeParams,
  options?: { [key: string]: any },
) {
  return request<API.widgetType>('/wp/v2/widget-types', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/widget-types/${param0} */
export async function getWidgetType_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWidgetTypeParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.widgetType>(`/wp/v2/widget-types/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
