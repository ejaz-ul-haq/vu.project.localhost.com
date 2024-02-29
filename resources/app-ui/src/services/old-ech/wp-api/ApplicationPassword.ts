// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/users/${param0}/application-passwords */
export async function getApplicationPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApplicationPasswordParams,
  options?: { [key: string]: any },
) {
  const { user_id: param0, ...queryParams } = params;
  return request<API.applicationPassword>(`/wp/v2/users/${param0}/application-passwords`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/users/${param0}/application-passwords */
export async function createApplicationPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createApplicationPasswordParams,
  body: {
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id?: string;
    /** The name of the application password. */
    name: string;
  },
  options?: { [key: string]: any },
) {
  const { user_id: param0, ...queryParams } = params;
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

  return request<API.applicationPassword>(`/wp/v2/users/${param0}/application-passwords`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/users/${param0}/application-passwords */
export async function deleteApplicationPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteApplicationPasswordParams,
  options?: { [key: string]: any },
) {
  const { user_id: param0, ...queryParams } = params;
  return request<API.applicationPassword>(`/wp/v2/users/${param0}/application-passwords`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/users/${param0}/application-passwords/${param1} */
export async function getApplicationPassword_3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApplicationPasswordParams,
  options?: { [key: string]: any },
) {
  const { user_id: param0, uuid: param1, ...queryParams } = params;
  return request<API.applicationPassword>(
    `/wp/v2/users/${param0}/application-passwords/${param1}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 PUT /wp/v2/users/${param0}/application-passwords/${param1} */
export async function putApplicationPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putApplicationPasswordParams,
  body: {
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id?: string;
    /** The name of the application password. */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  const { user_id: param0, uuid: param1, ...queryParams } = params;
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

  return request<API.applicationPassword>(
    `/wp/v2/users/${param0}/application-passwords/${param1}`,
    {
      method: 'PUT',
      params: { ...queryParams },
      data: formData,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /wp/v2/users/${param0}/application-passwords/${param1} */
export async function createApplicationPassword_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createApplicationPasswordParams,
  body: {
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id?: string;
    /** The name of the application password. */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  const { user_id: param0, uuid: param1, ...queryParams } = params;
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

  return request<API.applicationPassword>(
    `/wp/v2/users/${param0}/application-passwords/${param1}`,
    {
      method: 'POST',
      params: { ...queryParams },
      data: formData,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 DELETE /wp/v2/users/${param0}/application-passwords/${param1} */
export async function deleteApplicationPassword_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteApplicationPasswordParams,
  options?: { [key: string]: any },
) {
  const { user_id: param0, uuid: param1, ...queryParams } = params;
  return request<API.applicationPassword>(
    `/wp/v2/users/${param0}/application-passwords/${param1}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 PATCH /wp/v2/users/${param0}/application-passwords/${param1} */
export async function patchApplicationPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchApplicationPasswordParams,
  body: {
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id?: string;
    /** The name of the application password. */
    name?: string;
  },
  options?: { [key: string]: any },
) {
  const { user_id: param0, uuid: param1, ...queryParams } = params;
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

  return request<API.applicationPassword>(
    `/wp/v2/users/${param0}/application-passwords/${param1}`,
    {
      method: 'PATCH',
      params: { ...queryParams },
      data: formData,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /wp/v2/users/${param0}/application-passwords/introspect */
export async function getApplicationPassword_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApplicationPasswordParams,
  options?: { [key: string]: any },
) {
  const { user_id: param0, ...queryParams } = params;
  return request<API.applicationPassword>(
    `/wp/v2/users/${param0}/application-passwords/introspect`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}
