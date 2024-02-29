// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/users */
export async function getUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersParams,
  options?: { [key: string]: any },
) {
  return request<API.user>('/wp/v2/users', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/users */
export async function createUser(
  body: {
    /** Login name for the user. */
    username: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: string;
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password: string;
    /** Meta fields. */
    meta?: {
      persisted_preferences?: { _modified?: string };
      ech_gender?: string;
      ech_dob?: string;
      ech_phone_no?: string;
      ech_street_address_line_1?: string;
      ech_street_address_line_2?: string;
      ech_country_region?: string;
      ech_state_county?: string;
      ech_city?: string;
      ech_postcode_zip?: string;
      ech_setup_wizard?: { status?: string; quantity?: number }[];
      ech_account_status?: string;
      ech_organization_id?: string;
      ech_user_profile_image_url?: string;
      ech_user_password?: string;
      ech_wp_web_app_password?: string;
      ech_wc_api_consumer_key?: string;
      ech_wc_api_consumer_secret?: string;
      ech_user_policies?: { policy_id?: number; policy_status?: string }[];
      ech_user_delete_request?: {
        super_user_id?: number;
        request_status?: string;
        request_time?: string;
      }[];
    };
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

  return request<API.user>('/wp/v2/users', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/users/${param0} */
export async function getUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.user>(`/wp/v2/users/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/users/${param0} */
export async function putUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putUserParams,
  body: {
    /** Login name for the user. */
    username?: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email?: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: string;
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password?: string;
    /** Meta fields. */
    meta?: {
      persisted_preferences?: { _modified?: string };
      ech_gender?: string;
      ech_dob?: string;
      ech_phone_no?: string;
      ech_street_address_line_1?: string;
      ech_street_address_line_2?: string;
      ech_country_region?: string;
      ech_state_county?: string;
      ech_city?: string;
      ech_postcode_zip?: string;
      ech_setup_wizard?: { status?: string; quantity?: number }[];
      ech_account_status?: string;
      ech_organization_id?: string;
      ech_user_profile_image_url?: string;
      ech_user_password?: string;
      ech_wp_web_app_password?: string;
      ech_wc_api_consumer_key?: string;
      ech_wc_api_consumer_secret?: string;
      ech_user_policies?: { policy_id?: number; policy_status?: string }[];
      ech_user_delete_request?: {
        super_user_id?: number;
        request_status?: string;
        request_time?: string;
      }[];
    };
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

  return request<API.user>(`/wp/v2/users/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/users/${param0} */
export async function getUserByPostMethod(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByPostMethodParams,
  body: {
    /** Login name for the user. */
    username?: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email?: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: string;
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password?: string;
    /** Meta fields. */
    meta?: {
      persisted_preferences?: { _modified?: string };
      ech_gender?: string;
      ech_dob?: string;
      ech_phone_no?: string;
      ech_street_address_line_1?: string;
      ech_street_address_line_2?: string;
      ech_country_region?: string;
      ech_state_county?: string;
      ech_city?: string;
      ech_postcode_zip?: string;
      ech_setup_wizard?: { status?: string; quantity?: number }[];
      ech_account_status?: string;
      ech_organization_id?: string;
      ech_user_profile_image_url?: string;
      ech_user_password?: string;
      ech_wp_web_app_password?: string;
      ech_wc_api_consumer_key?: string;
      ech_wc_api_consumer_secret?: string;
      ech_user_policies?: { policy_id?: number; policy_status?: string }[];
      ech_user_delete_request?: {
        super_user_id?: number;
        request_status?: string;
        request_time?: string;
      }[];
    };
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

  return request<API.user>(`/wp/v2/users/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/users/${param0} */
export async function deleteUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserParams,
  body: {
    /** Required to be true, as users do not support trashing. */
    force?: boolean;
    /** Reassign the deleted user's posts and links to this user ID. */
    reassign: number;
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

  return request<API.user>(`/wp/v2/users/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/users/${param0} */
export async function patchUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.patchUserParams,
  body: {
    /** Login name for the user. */
    username?: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email?: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: string;
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password?: string;
    /** Meta fields. */
    meta?: {
      persisted_preferences?: { _modified?: string };
      ech_gender?: string;
      ech_dob?: string;
      ech_phone_no?: string;
      ech_street_address_line_1?: string;
      ech_street_address_line_2?: string;
      ech_country_region?: string;
      ech_state_county?: string;
      ech_city?: string;
      ech_postcode_zip?: string;
      ech_setup_wizard?: { status?: string; quantity?: number }[];
      ech_account_status?: string;
      ech_organization_id?: string;
      ech_user_profile_image_url?: string;
      ech_user_password?: string;
      ech_wp_web_app_password?: string;
      ech_wc_api_consumer_key?: string;
      ech_wc_api_consumer_secret?: string;
      ech_user_policies?: { policy_id?: number; policy_status?: string }[];
      ech_user_delete_request?: {
        super_user_id?: number;
        request_status?: string;
        request_time?: string;
      }[];
    };
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

  return request<API.user>(`/wp/v2/users/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /wp/v2/users/me */
export async function getCurrentUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCurrentUserParams,
  options?: { [key: string]: any },
) {
  return request<API.user>('/api/auth/me', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/users/me */
export async function putCurrentUser(
  body: {
    /** Login name for the user. */
    username?: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email?: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: string;
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password?: string;
    /** Meta fields. */
    meta?: {
      persisted_preferences?: { _modified?: string };
      ech_gender?: string;
      ech_dob?: string;
      ech_phone_no?: string;
      ech_street_address_line_1?: string;
      ech_street_address_line_2?: string;
      ech_country_region?: string;
      ech_state_county?: string;
      ech_city?: string;
      ech_postcode_zip?: string;
      ech_setup_wizard?: { status?: string; quantity?: number }[];
      ech_account_status?: string;
      ech_organization_id?: string;
      ech_user_profile_image_url?: string;
      ech_user_password?: string;
      ech_wp_web_app_password?: string;
      ech_wc_api_consumer_key?: string;
      ech_wc_api_consumer_secret?: string;
      ech_user_policies?: { policy_id?: number; policy_status?: string }[];
      ech_user_delete_request?: {
        super_user_id?: number;
        request_status?: string;
        request_time?: string;
      }[];
    };
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

  return request<API.user>('/wp/v2/users/me', {
    method: 'PUT',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/users/me */
export async function createCurrentUser(
  body: {
    /** Login name for the user. */
    username?: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email?: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: string;
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password?: string;
    /** Meta fields. */
    meta?: {
      persisted_preferences?: { _modified?: string };
      ech_gender?: string;
      ech_dob?: string;
      ech_phone_no?: string;
      ech_street_address_line_1?: string;
      ech_street_address_line_2?: string;
      ech_country_region?: string;
      ech_state_county?: string;
      ech_city?: string;
      ech_postcode_zip?: string;
      ech_setup_wizard?: { status?: string; quantity?: number }[];
      ech_account_status?: string;
      ech_organization_id?: string;
      ech_user_profile_image_url?: string;
      ech_user_password?: string;
      ech_wp_web_app_password?: string;
      ech_wc_api_consumer_key?: string;
      ech_wc_api_consumer_secret?: string;
      ech_user_policies?: { policy_id?: number; policy_status?: string }[];
      ech_user_delete_request?: {
        super_user_id?: number;
        request_status?: string;
        request_time?: string;
      }[];
    };
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

  return request<API.user>('/wp/v2/users/me', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /wp/v2/users/me */
export async function deleteCurrentUser(
  body: {
    /** Required to be true, as users do not support trashing. */
    force?: boolean;
    /** Reassign the deleted user's posts and links to this user ID. */
    reassign: number;
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

  return request<API.user>('/wp/v2/users/me', {
    method: 'DELETE',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/users/me */
export async function patchCurrentUser(
  body: {
    /** Login name for the user. */
    username?: string;
    /** Display name for the user. */
    name?: string;
    /** First name for the user. */
    first_name?: string;
    /** Last name for the user. */
    last_name?: string;
    /** The email address for the user. */
    email?: string;
    /** URL of the user. */
    url?: string;
    /** Description of the user. */
    description?: string;
    /** Locale for the user. */
    locale?: string;
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password?: string;
    /** Meta fields. */
    meta?: {
      persisted_preferences?: { _modified?: string };
      ech_gender?: string;
      ech_dob?: string;
      ech_phone_no?: string;
      ech_street_address_line_1?: string;
      ech_street_address_line_2?: string;
      ech_country_region?: string;
      ech_state_county?: string;
      ech_city?: string;
      ech_postcode_zip?: string;
      ech_setup_wizard?: { status?: string; quantity?: number }[];
      ech_account_status?: string;
      ech_organization_id?: string;
      ech_user_profile_image_url?: string;
      ech_user_password?: string;
      ech_wp_web_app_password?: string;
      ech_wc_api_consumer_key?: string;
      ech_wc_api_consumer_secret?: string;
      ech_user_policies?: { policy_id?: number; policy_status?: string }[];
      ech_user_delete_request?: {
        super_user_id?: number;
        request_status?: string;
        request_time?: string;
      }[];
    };
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

  return request<API.user>('/wp/v2/users/me', {
    method: 'PATCH',
    data: formData,
    ...(options || {}),
  });
}
