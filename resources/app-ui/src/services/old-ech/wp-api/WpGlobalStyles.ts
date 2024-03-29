// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/global-styles/${param0} */
export async function getWpGlobalStyles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpGlobalStylesParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.wpGlobalStyles>(`/wp/v2/global-styles/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/global-styles/${param0} */
export async function putWpGlobalStyles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putWpGlobalStylesParams,
  body: {
    /** Global styles. */
    styles?: any;
    /** Global settings. */
    settings?: any;
    /** Title of the global styles variation. */
    title?: { raw?: string; rendered?: string };
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
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

  return request<API.wpGlobalStyles>(`/wp/v2/global-styles/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/global-styles/${param0} */
export async function createWpGlobalStyles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createWpGlobalStylesParams,
  body: {
    /** Global styles. */
    styles?: any;
    /** Global settings. */
    settings?: any;
    /** Title of the global styles variation. */
    title?: { raw?: string; rendered?: string };
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
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

  return request<API.wpGlobalStyles>(`/wp/v2/global-styles/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/global-styles/${param0} */
export async function patchWpGlobalStyles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchWpGlobalStylesParams,
  body: {
    /** Global styles. */
    styles?: any;
    /** Global settings. */
    settings?: any;
    /** Title of the global styles variation. */
    title?: { raw?: string; rendered?: string };
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
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

  return request<API.wpGlobalStyles>(`/wp/v2/global-styles/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
