// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /wp/v2/ech-customer-organizations/${param0}/autosaves */
export async function getEchOrganizationRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEchOrganizationRevisionParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.echOrganizationRevision>(
    `/wp/v2/ech-customer-organizations/${param0}/autosaves`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /wp/v2/ech-customer-organizations/${param0}/autosaves */
export async function createEchOrganizationRevision(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createEchOrganizationRevisionParams,
  body: {
    /** The ID for the parent of the autosave. */
    parent?: number;
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
    /** The ID for the author of the post. */
    author?: number;
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Meta fields. */
    meta?: {
      ech_organization_logo_url?: string;
      ech_organization_address?: string;
      ech_organization_trading_name?: string;
      ech_organization_type?: string;
      ech_organization_registration_no?: string;
      ech_organization_phone?: string;
      ech_organization_email?: string;
      ech_organization_website?: string;
      ech_organization_contact_person?: string;
      ech_organization_door_no?: string;
      ech_organization_building_name?: string;
      ech_organization_street_line_01?: string;
      ech_organization_street_line_02?: string;
      ech_organization_city_town?: string;
      ech_organization_county?: string;
      ech_organization_post_code?: string;
      ech_organization_nominated_individual_first_name?: string;
      ech_organization_nominated_individual_middle_name?: string;
      ech_organization_nominated_individual_last_name?: string;
      ech_organization_nominated_individual_email?: string;
      ech_organization_nominated_individual_phone?: string;
      ech_organization_registered_manager_first_name?: string;
      ech_organization_registered_manager_middle_name?: string;
      ech_organization_registered_manager_last_name?: string;
      ech_organization_registered_manager_email?: string;
      ech_organization_registered_manager_phone?: string;
      ech_organization_data_protection_officer_first_name?: string;
      ech_organization_data_protection_officer_middle_name?: string;
      ech_organization_data_protection_officer_last_name?: string;
      ech_organization_data_protection_officer_email?: string;
      ech_organization_data_protection_officer_phone?: string;
      ech_organization_data_protection_officer_regulated_activity?: string;
      ech_organization_local_authority_authority_name?: string;
      ech_organization_local_authority_safeguarding_officer_name?: string;
      ech_organization_local_authority_role_department?: string;
      ech_organization_local_authority_information_link?: string;
      ech_organization_local_authority_phone_number?: string;
      ech_organization_super_users?: { super_user_id?: number; super_user_status?: number }[];
      ech_organization_staff_members?: { staff_member_id?: number; staff_member_status?: number }[];
      ech_organization_customer_policies?: { policy_id?: number; policy_seats?: number }[];
      ech_organization_email_notifications?: {
        email_notification_id?: string;
        email_notification_status?: string;
        email_notification_subject?: string;
        email_notification_body?: string;
      }[];
    };
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

  return request<API.echOrganizationRevision>(
    `/wp/v2/ech-customer-organizations/${param0}/autosaves`,
    {
      method: 'POST',
      params: { ...queryParams },
      data: formData,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /wp/v2/ech-customer-organizations/${param0}/autosaves/${param1} */
export async function getEchOrganizationRevision_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEchOrganizationRevisionParams,
  options?: { [key: string]: any },
) {
  const { parent: param0, id: param1, ...queryParams } = params;
  return request<API.echOrganizationRevision>(
    `/wp/v2/ech-customer-organizations/${param0}/autosaves/${param1}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}
