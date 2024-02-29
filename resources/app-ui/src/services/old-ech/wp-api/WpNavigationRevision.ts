// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/navigation/${param0}/autosaves */
export async function getWpNavigationRevision_3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpNavigationRevisionParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.wpNavigationRevision>(`/wp/v2/navigation/${param0}/autosaves`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/navigation/${param0}/autosaves */
export async function createWpNavigationRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createWpNavigationRevisionParams,
  body: {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The theme file to use to display the post. */
    template?: string;
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

  return request<API.wpNavigationRevision>(`/wp/v2/navigation/${param0}/autosaves`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/navigation/${param0}/autosaves/${param1} */
export async function getWpNavigationRevision_4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpNavigationRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, id: param1, ...queryParams } = params;
  return request<API.wpNavigationRevision>(`/wp/v2/navigation/${param0}/autosaves/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/navigation/${param0}/revisions */
export async function getWpNavigationRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpNavigationRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, ...queryParams } = params;
  return request<API.wpNavigationRevision>(`/wp/v2/navigation/${param0}/revisions`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/navigation/${param0}/revisions/${param1} */
export async function getWpNavigationRevision_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpNavigationRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, id: param1, ...queryParams } = params;
  return request<API.wpNavigationRevision>(`/wp/v2/navigation/${param0}/revisions/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/navigation/${param0}/revisions/${param1} */
export async function deleteWpNavigationRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteWpNavigationRevisionParams,
  body: {
    /** Required to be true, as revisions do not support trashing. */
    force?: boolean;
  },
  options?: { [key: string]: any },
) {
  const { parent: param0, id: param1, ...queryParams } = params;
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

  return request<API.wpNavigationRevision>(`/wp/v2/navigation/${param0}/revisions/${param1}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
