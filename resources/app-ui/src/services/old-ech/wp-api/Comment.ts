// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/comments */
export async function getComment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCommentParams,
  options?: { [key: string]: any },
) {
  return request<API.comment>('/wp/v2/comments', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/comments */
export async function createComment(
  body: {
    /** The ID of the user object, if author was a user. */
    author?: number;
    /** Email address for the comment author. */
    author_email?: string;
    /** IP address for the comment author. */
    author_ip?: string;
    /** Display name for the comment author. */
    author_name?: string;
    /** URL for the comment author. */
    author_url?: string;
    /** User agent for the comment author. */
    author_user_agent?: string;
    /** The content for the comment. */
    content?: { raw?: string; rendered?: string };
    /** The date the comment was published, in the site's timezone. */
    date?: string;
    /** The date the comment was published, as GMT. */
    date_gmt?: string;
    /** The ID for the parent of the comment. */
    parent?: number;
    /** The ID of the associated post object. */
    post?: number;
    /** State of the comment. */
    status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
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

  return request<API.comment>('/wp/v2/comments', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/comments/${param0} */
export async function getComment_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCommentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.comment>(`/wp/v2/comments/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/comments/${param0} */
export async function putComment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putCommentParams,
  body: {
    /** The ID of the user object, if author was a user. */
    author?: number;
    /** Email address for the comment author. */
    author_email?: string;
    /** IP address for the comment author. */
    author_ip?: string;
    /** Display name for the comment author. */
    author_name?: string;
    /** URL for the comment author. */
    author_url?: string;
    /** User agent for the comment author. */
    author_user_agent?: string;
    /** The content for the comment. */
    content?: { raw?: string; rendered?: string };
    /** The date the comment was published, in the site's timezone. */
    date?: string;
    /** The date the comment was published, as GMT. */
    date_gmt?: string;
    /** The ID for the parent of the comment. */
    parent?: number;
    /** The ID of the associated post object. */
    post?: number;
    /** State of the comment. */
    status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
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

  return request<API.comment>(`/wp/v2/comments/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/comments/${param0} */
export async function createComment_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createCommentParams,
  body: {
    /** The ID of the user object, if author was a user. */
    author?: number;
    /** Email address for the comment author. */
    author_email?: string;
    /** IP address for the comment author. */
    author_ip?: string;
    /** Display name for the comment author. */
    author_name?: string;
    /** URL for the comment author. */
    author_url?: string;
    /** User agent for the comment author. */
    author_user_agent?: string;
    /** The content for the comment. */
    content?: { raw?: string; rendered?: string };
    /** The date the comment was published, in the site's timezone. */
    date?: string;
    /** The date the comment was published, as GMT. */
    date_gmt?: string;
    /** The ID for the parent of the comment. */
    parent?: number;
    /** The ID of the associated post object. */
    post?: number;
    /** State of the comment. */
    status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
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

  return request<API.comment>(`/wp/v2/comments/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/comments/${param0} */
export async function deleteComment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCommentParams,
  body: {
    /** Whether to bypass Trash and force deletion. */
    force?: boolean;
    /** The password for the parent post of the comment (if the post is password protected). */
    password?: string;
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

  return request<API.comment>(`/wp/v2/comments/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/comments/${param0} */
export async function patchComment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchCommentParams,
  body: {
    /** The ID of the user object, if author was a user. */
    author?: number;
    /** Email address for the comment author. */
    author_email?: string;
    /** IP address for the comment author. */
    author_ip?: string;
    /** Display name for the comment author. */
    author_name?: string;
    /** URL for the comment author. */
    author_url?: string;
    /** User agent for the comment author. */
    author_user_agent?: string;
    /** The content for the comment. */
    content?: { raw?: string; rendered?: string };
    /** The date the comment was published, in the site's timezone. */
    date?: string;
    /** The date the comment was published, as GMT. */
    date_gmt?: string;
    /** The ID for the parent of the comment. */
    parent?: number;
    /** The ID of the associated post object. */
    post?: number;
    /** State of the comment. */
    status?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
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

  return request<API.comment>(`/wp/v2/comments/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
