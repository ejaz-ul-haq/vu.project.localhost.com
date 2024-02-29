// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/block-renderer/${param0} */
export async function getRenderedBlock(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRenderedBlockParams,
  options?: { [key: string]: any },
) {
  const { name: param0, ...queryParams } = params;
  return request<API.renderedBlock>(`/wp/v2/block-renderer/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/block-renderer/${param0} */
export async function createRenderedBlock(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createRenderedBlockParams,
  body: {
    /** Scope under which the request is made; determines fields present in response. */
    context?: string;
    /** Attributes for the block. */
    attributes?: Record<string, any>;
    /** ID of the post context. */
    post_id?: number;
  },
  options?: { [key: string]: any },
) {
  const { name: param0, ...queryParams } = params;
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.renderedBlock>(`/wp/v2/block-renderer/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
