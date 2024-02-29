// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/media */
export async function getAttachment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAttachmentParams,
  options?: { [key: string]: any },
) {
  return request<API.attachment>('/wp/v2/media', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/media */
export async function createAttachment(
  body: {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The ID for the author of the post. */
    author?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: string;
    /** Whether or not the post can be pinged. */
    ping_status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
    /** The theme file to use to display the post. */
    template?: string;
    /** Alternative text to display when attachment is not displayed. */
    alt_text?: string;
    /** The attachment caption. */
    caption?: { raw?: string; rendered?: string };
    /** The attachment description. */
    description?: { raw?: string; rendered?: string };
    /** The ID for the associated post of the attachment. */
    post?: number;
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

  return request<API.attachment>('/wp/v2/media', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/media/${param0} */
export async function getAttachment_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAttachmentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.attachment>(`/wp/v2/media/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/media/${param0} */
export async function putAttachment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putAttachmentParams,
  body: {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The ID for the author of the post. */
    author?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: string;
    /** Whether or not the post can be pinged. */
    ping_status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
    /** The theme file to use to display the post. */
    template?: string;
    /** Alternative text to display when attachment is not displayed. */
    alt_text?: string;
    /** The attachment caption. */
    caption?: { raw?: string; rendered?: string };
    /** The attachment description. */
    description?: { raw?: string; rendered?: string };
    /** The ID for the associated post of the attachment. */
    post?: number;
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

  return request<API.attachment>(`/wp/v2/media/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/media/${param0} */
export async function createAttachment_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createAttachmentParams,
  body: {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The ID for the author of the post. */
    author?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: string;
    /** Whether or not the post can be pinged. */
    ping_status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
    /** The theme file to use to display the post. */
    template?: string;
    /** Alternative text to display when attachment is not displayed. */
    alt_text?: string;
    /** The attachment caption. */
    caption?: { raw?: string; rendered?: string };
    /** The attachment description. */
    description?: { raw?: string; rendered?: string };
    /** The ID for the associated post of the attachment. */
    post?: number;
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

  return request<API.attachment>(`/wp/v2/media/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/media/${param0} */
export async function deleteAttachment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteAttachmentParams,
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

  return request<API.attachment>(`/wp/v2/media/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/media/${param0} */
export async function patchAttachment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchAttachmentParams,
  body: {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The ID for the author of the post. */
    author?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: string;
    /** Whether or not the post can be pinged. */
    ping_status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
    /** The theme file to use to display the post. */
    template?: string;
    /** Alternative text to display when attachment is not displayed. */
    alt_text?: string;
    /** The attachment caption. */
    caption?: { raw?: string; rendered?: string };
    /** The attachment description. */
    description?: { raw?: string; rendered?: string };
    /** The ID for the associated post of the attachment. */
    post?: number;
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

  return request<API.attachment>(`/wp/v2/media/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
