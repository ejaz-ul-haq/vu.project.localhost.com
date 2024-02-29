// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/navigation */
export async function getWpNavigation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpNavigationParams,
  options?: { [key: string]: any },
) {
  return request<API.wpNavigation>('/wp/v2/navigation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/navigation */
export async function createWpNavigation(
  body: {
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

  return request<API.wpNavigation>('/wp/v2/navigation', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/navigation/${param0} */
export async function getWpNavigation_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpNavigationParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.wpNavigation>(`/wp/v2/navigation/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/navigation/${param0} */
export async function putWpNavigation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putWpNavigationParams,
  body: {
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

  return request<API.wpNavigation>(`/wp/v2/navigation/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/navigation/${param0} */
export async function createWpNavigation_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createWpNavigationParams,
  body: {
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

  return request<API.wpNavigation>(`/wp/v2/navigation/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/navigation/${param0} */
export async function deleteWpNavigation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteWpNavigationParams,
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

  return request<API.wpNavigation>(`/wp/v2/navigation/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/navigation/${param0} */
export async function patchWpNavigation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchWpNavigationParams,
  body: {
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

  return request<API.wpNavigation>(`/wp/v2/navigation/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
