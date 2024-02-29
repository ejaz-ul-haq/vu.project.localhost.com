// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/sidebars */
export async function getSidebar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSidebarParams,
  options?: { [key: string]: any },
) {
  return request<API.sidebar>('/wp/v2/sidebars', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/sidebars/${param0} */
export async function getSidebar_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSidebarParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.sidebar>(`/wp/v2/sidebars/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/sidebars/${param0} */
export async function putSidebar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putSidebarParams,
  body: {
    /** Nested widgets. */
    widgets?: any[];
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

  return request<API.sidebar>(`/wp/v2/sidebars/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/sidebars/${param0} */
export async function createSidebar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createSidebarParams,
  body: {
    /** Nested widgets. */
    widgets?: any[];
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

  return request<API.sidebar>(`/wp/v2/sidebars/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/sidebars/${param0} */
export async function patchSidebar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchSidebarParams,
  body: {
    /** Nested widgets. */
    widgets?: any[];
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

  return request<API.sidebar>(`/wp/v2/sidebars/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
