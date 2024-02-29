// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/menu-items/${param0}/autosaves */
export async function getNavMenuItemRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNavMenuItemRevisionParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.navMenuItemRevision>(`/wp/v2/menu-items/${param0}/autosaves`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/menu-items/${param0}/autosaves */
export async function createNavMenuItemRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createNavMenuItemRevisionParams,
  body: {
    /** The ID for the parent of the object. */
    parent?: number;
    /** The title for the object. */
    title?: { raw?: string; rendered?: string };
    /** The family of objects originally represented, such as "post_type" or "taxonomy". */
    type?: string;
    /** A named status for the object. */
    status?: string;
    /** Text for the title attribute of the link element for this menu item. */
    attr_title?: string;
    /** Class names for the link element of this menu item. */
    classes?: string[];
    /** The description of this menu item. */
    description?: string;
    /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
    menu_order?: number;
    /** The type of object originally represented, such as "category", "post", or "attachment". */
    object?: string;
    /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
    object_id?: number;
    /** The target attribute of the link element for this menu item. */
    target?: string;
    /** The URL to which this menu item points. */
    url?: string;
    /** The XFN relationship expressed in the link of this menu item. */
    xfn?: string[];
    /** The terms assigned to the object in the nav_menu taxonomy. */
    menus?: number;
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

  return request<API.navMenuItemRevision>(`/wp/v2/menu-items/${param0}/autosaves`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/menu-items/${param0}/autosaves/${param1} */
export async function getNavMenuItemRevision_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNavMenuItemRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, id: param1, ...queryParams } = params;
  return request<API.navMenuItemRevision>(`/wp/v2/menu-items/${param0}/autosaves/${param1}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
