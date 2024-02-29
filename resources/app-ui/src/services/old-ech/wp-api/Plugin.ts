// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/plugins */
export async function getPlugin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPluginParams,
  options?: { [key: string]: any },
) {
  return request<API.plugin>('/wp/v2/plugins', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/plugins */
export async function createPlugin(
  body: {
    /** WordPress.org plugin directory slug. */
    slug: string;
    /** The plugin activation status. */
    status?: string;
  },
  options?: { [key: string]: any },
) {
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

  return request<API.plugin>('/wp/v2/plugins', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/plugins/${param0} */
export async function getPlugin_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPluginParams,
  options?: { [key: string]: any },
) {
  const { plugin: param0, ...queryParams } = params;
  return request<API.plugin>(`/wp/v2/plugins/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/plugins/${param0} */
export async function putPlugin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putPluginParams,
  body: {
    /** Scope under which the request is made; determines fields present in response. */
    context?: string;
    /** The plugin activation status. */
    status?: string;
  },
  options?: { [key: string]: any },
) {
  const { plugin: param0, ...queryParams } = params;
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

  return request<API.plugin>(`/wp/v2/plugins/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/plugins/${param0} */
export async function createPlugin_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createPluginParams,
  body: {
    /** Scope under which the request is made; determines fields present in response. */
    context?: string;
    /** The plugin activation status. */
    status?: string;
  },
  options?: { [key: string]: any },
) {
  const { plugin: param0, ...queryParams } = params;
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

  return request<API.plugin>(`/wp/v2/plugins/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/plugins/${param0} */
export async function deletePlugin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePluginParams,
  body: {
    /** Scope under which the request is made; determines fields present in response. */
    context?: string;
  },
  options?: { [key: string]: any },
) {
  const { plugin: param0, ...queryParams } = params;
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

  return request<API.plugin>(`/wp/v2/plugins/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/plugins/${param0} */
export async function patchPlugin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchPluginParams,
  body: {
    /** Scope under which the request is made; determines fields present in response. */
    context?: string;
    /** The plugin activation status. */
    status?: string;
  },
  options?: { [key: string]: any },
) {
  const { plugin: param0, ...queryParams } = params;
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

  return request<API.plugin>(`/wp/v2/plugins/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
