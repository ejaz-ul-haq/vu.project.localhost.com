// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/product_tag */
export async function getProductTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductTagParams,
  options?: { [key: string]: any },
) {
  return request<API.productTag>('/wp/v2/product_tag', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/product_tag */
export async function createProductTag(
  body: {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
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

  return request<API.productTag>('/wp/v2/product_tag', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/product_tag/${param0} */
export async function getProductTag_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductTagParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.productTag>(`/wp/v2/product_tag/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/product_tag/${param0} */
export async function putProductTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putProductTagParams,
  body: {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
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

  return request<API.productTag>(`/wp/v2/product_tag/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/product_tag/${param0} */
export async function createProductTag_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createProductTagParams,
  body: {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
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

  return request<API.productTag>(`/wp/v2/product_tag/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/product_tag/${param0} */
export async function deleteProductTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProductTagParams,
  body: {
    /** Required to be true, as terms do not support trashing. */
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

  return request<API.productTag>(`/wp/v2/product_tag/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/product_tag/${param0} */
export async function patchProductTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchProductTagParams,
  body: {
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
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

  return request<API.productTag>(`/wp/v2/product_tag/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
