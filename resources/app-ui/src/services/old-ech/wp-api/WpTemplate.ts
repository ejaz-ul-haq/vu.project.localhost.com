// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/templates */
export async function getWpTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpTemplateParams,
  options?: { [key: string]: any },
) {
  return request<API.wpTemplate>('/wp/v2/templates', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/templates */
export async function createWpTemplate(
  body: {
    /** Unique slug identifying the template. */
    slug: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: string;
    /** The ID for the author of the template. */
    author?: number;
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

  return request<API.wpTemplate>('/wp/v2/templates', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/templates/${param0} */
export async function getWpTemplate_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpTemplateParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.wpTemplate>(`/wp/v2/templates/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/templates/${param0} */
export async function putWpTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putWpTemplateParams,
  body: {
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: string;
    /** The ID for the author of the template. */
    author?: number;
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

  return request<API.wpTemplate>(`/wp/v2/templates/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/templates/${param0} */
export async function createWpTemplate_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createWpTemplateParams,
  body: {
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: string;
    /** The ID for the author of the template. */
    author?: number;
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

  return request<API.wpTemplate>(`/wp/v2/templates/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/templates/${param0} */
export async function deleteWpTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteWpTemplateParams,
  body: {
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
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

  return request<API.wpTemplate>(`/wp/v2/templates/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/templates/${param0} */
export async function patchWpTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchWpTemplateParams,
  body: {
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?: string;
    /** The ID for the author of the template. */
    author?: number;
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

  return request<API.wpTemplate>(`/wp/v2/templates/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
