// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/settings */
export async function getSettings(options?: { [key: string]: any }) {
  return request<API.settings>('/wp/v2/settings', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /wp/v2/settings */
export async function putSettings(
  body: {
    /** Site title. */
    title?: string;
    /** Site tagline. */
    description?: string;
    /** Site URL. */
    url?: string;
    /** This address is used for admin purposes, like new user notification. */
    email?: string;
    /** A city in the same timezone as you. */
    timezone?: string;
    /** A date format for all date strings. */
    date_format?: string;
    /** A time format for all time strings. */
    time_format?: string;
    /** A day number of the week that the week should start on. */
    start_of_week?: number;
    /** WordPress locale code. */
    language?: string;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    use_smilies?: boolean;
    /** Default post category. */
    default_category?: number;
    /** Default post format. */
    default_post_format?: string;
    /** Blog pages show at most. */
    posts_per_page?: number;
    /** What to show on the front page */
    show_on_front?: string;
    /** The ID of the page that should be displayed on the front page */
    page_on_front?: number;
    /** The ID of the page that should display the latest posts */
    page_for_posts?: number;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    default_ping_status?: string;
    /** Allow people to submit comments on new posts. */
    default_comment_status?: string;
    /** Site logo. */
    site_logo?: number;
    /** Site icon. */
    site_icon?: number;
    /** WooCommerce Local Pickup Method Settings */
    pickup_location_settings?: {
      enabled?: 'yes' | 'no';
      title?: string;
      tax_status?: 'taxable' | 'none';
      cost?: string;
    };
    /** WooCommerce Local Pickup Locations */
    pickup_locations?: {
      name?: string;
      address?: {
        address_1?: string;
        city?: string;
        state?: string;
        postcode?: string;
        country?: string;
      };
      details?: string;
      enabled?: boolean;
    }[];
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

  return request<API.settings>('/wp/v2/settings', {
    method: 'PUT',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /wp/v2/settings */
export async function createSettings(
  body: {
    /** Site title. */
    title?: string;
    /** Site tagline. */
    description?: string;
    /** Site URL. */
    url?: string;
    /** This address is used for admin purposes, like new user notification. */
    email?: string;
    /** A city in the same timezone as you. */
    timezone?: string;
    /** A date format for all date strings. */
    date_format?: string;
    /** A time format for all time strings. */
    time_format?: string;
    /** A day number of the week that the week should start on. */
    start_of_week?: number;
    /** WordPress locale code. */
    language?: string;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    use_smilies?: boolean;
    /** Default post category. */
    default_category?: number;
    /** Default post format. */
    default_post_format?: string;
    /** Blog pages show at most. */
    posts_per_page?: number;
    /** What to show on the front page */
    show_on_front?: string;
    /** The ID of the page that should be displayed on the front page */
    page_on_front?: number;
    /** The ID of the page that should display the latest posts */
    page_for_posts?: number;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    default_ping_status?: string;
    /** Allow people to submit comments on new posts. */
    default_comment_status?: string;
    /** Site logo. */
    site_logo?: number;
    /** Site icon. */
    site_icon?: number;
    /** WooCommerce Local Pickup Method Settings */
    pickup_location_settings?: {
      enabled?: 'yes' | 'no';
      title?: string;
      tax_status?: 'taxable' | 'none';
      cost?: string;
    };
    /** WooCommerce Local Pickup Locations */
    pickup_locations?: {
      name?: string;
      address?: {
        address_1?: string;
        city?: string;
        state?: string;
        postcode?: string;
        country?: string;
      };
      details?: string;
      enabled?: boolean;
    }[];
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

  return request<API.settings>('/wp/v2/settings', {
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /wp/v2/settings */
export async function patchSettings(
  body: {
    /** Site title. */
    title?: string;
    /** Site tagline. */
    description?: string;
    /** Site URL. */
    url?: string;
    /** This address is used for admin purposes, like new user notification. */
    email?: string;
    /** A city in the same timezone as you. */
    timezone?: string;
    /** A date format for all date strings. */
    date_format?: string;
    /** A time format for all time strings. */
    time_format?: string;
    /** A day number of the week that the week should start on. */
    start_of_week?: number;
    /** WordPress locale code. */
    language?: string;
    /** Convert emoticons like :-) and :-P to graphics on display. */
    use_smilies?: boolean;
    /** Default post category. */
    default_category?: number;
    /** Default post format. */
    default_post_format?: string;
    /** Blog pages show at most. */
    posts_per_page?: number;
    /** What to show on the front page */
    show_on_front?: string;
    /** The ID of the page that should be displayed on the front page */
    page_on_front?: number;
    /** The ID of the page that should display the latest posts */
    page_for_posts?: number;
    /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
    default_ping_status?: string;
    /** Allow people to submit comments on new posts. */
    default_comment_status?: string;
    /** Site logo. */
    site_logo?: number;
    /** Site icon. */
    site_icon?: number;
    /** WooCommerce Local Pickup Method Settings */
    pickup_location_settings?: {
      enabled?: 'yes' | 'no';
      title?: string;
      tax_status?: 'taxable' | 'none';
      cost?: string;
    };
    /** WooCommerce Local Pickup Locations */
    pickup_locations?: {
      name?: string;
      address?: {
        address_1?: string;
        city?: string;
        state?: string;
        postcode?: string;
        country?: string;
      };
      details?: string;
      enabled?: boolean;
    }[];
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

  return request<API.settings>('/wp/v2/settings', {
    method: 'PATCH',
    data: formData,
    ...(options || {}),
  });
}
