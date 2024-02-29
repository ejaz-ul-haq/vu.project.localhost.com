// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/widgets */
export async function getWidget(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWidgetParams,
  options?: { [key: string]: any },
) {
  return request<API.widget>('/wp/v2/widgets', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/widgets */
export async function createWidget(
  body: {
    /** Unique identifier for the widget. */
    id?: string;
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base?: string;
    /** The sidebar the widget belongs to. */
    sidebar: string;
    /** Instance settings of the widget, if supported. */
    instance?: { encoded?: string; hash?: string; raw?: Record<string, any> };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data?: string;
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

  return request<API.widget>('/wp/v2/widgets', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/widgets/${param0} */
export async function getWidget_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWidgetParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.widget>(`/wp/v2/widgets/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/widgets/${param0} */
export async function putWidget(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putWidgetParams,
  body: {
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base?: string;
    /** The sidebar the widget belongs to. */
    sidebar?: string;
    /** Instance settings of the widget, if supported. */
    instance?: { encoded?: string; hash?: string; raw?: Record<string, any> };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data?: string;
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

  return request<API.widget>(`/wp/v2/widgets/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/widgets/${param0} */
export async function createWidget_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createWidgetParams,
  body: {
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base?: string;
    /** The sidebar the widget belongs to. */
    sidebar?: string;
    /** Instance settings of the widget, if supported. */
    instance?: { encoded?: string; hash?: string; raw?: Record<string, any> };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data?: string;
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

  return request<API.widget>(`/wp/v2/widgets/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/widgets/${param0} */
export async function deleteWidget(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteWidgetParams,
  body: {
    /** Whether to force removal of the widget, or move it to the inactive sidebar. */
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

  return request<API.widget>(`/wp/v2/widgets/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/widgets/${param0} */
export async function patchWidget(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchWidgetParams,
  body: {
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base?: string;
    /** The sidebar the widget belongs to. */
    sidebar?: string;
    /** Instance settings of the widget, if supported. */
    instance?: { encoded?: string; hash?: string; raw?: Record<string, any> };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data?: string;
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

  return request<API.widget>(`/wp/v2/widgets/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}
