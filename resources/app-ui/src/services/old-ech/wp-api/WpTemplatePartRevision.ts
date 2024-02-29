// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/template-parts/${param0}/autosaves */
export async function getWpTemplatePartRevision_3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpTemplatePartRevisionParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.wpTemplatePartRevision>(`/wp/v2/template-parts/${param0}/autosaves`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/template-parts/${param0}/autosaves */
export async function createWpTemplatePartRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createWpTemplatePartRevisionParams,
  body: {
    /** The ID for the parent of the autosave. */
    parent?: number;
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
    /** Where the template part is intended for use (header, footer, etc.) */
    area?: string;
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

  return request<API.wpTemplatePartRevision>(`/wp/v2/template-parts/${param0}/autosaves`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/template-parts/${param0}/autosaves/${param1} */
export async function getWpTemplatePartRevision_4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpTemplatePartRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, id: param1, ...queryParams } = params;
  return request<API.wpTemplatePartRevision>(
    `/wp/v2/template-parts/${param0}/autosaves/${param1}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /wp/v2/template-parts/${param0}/revisions */
export async function getWpTemplatePartRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpTemplatePartRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, ...queryParams } = params;
  return request<API.wpTemplatePartRevision>(`/wp/v2/template-parts/${param0}/revisions`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/template-parts/${param0}/revisions/${param1} */
export async function getWpTemplatePartRevision_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWpTemplatePartRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, id: param1, ...queryParams } = params;
  return request<API.wpTemplatePartRevision>(
    `/wp/v2/template-parts/${param0}/revisions/${param1}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 DELETE /wp/v2/template-parts/${param0}/revisions/${param1} */
export async function deleteWpTemplatePartRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteWpTemplatePartRevisionParams,
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

  return request<API.wpTemplatePartRevision>(
    `/wp/v2/template-parts/${param0}/revisions/${param1}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      data: formData,
      ...(options || {}),
    },
  );
}
