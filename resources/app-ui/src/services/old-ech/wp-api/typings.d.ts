declare namespace API {
  type applicationPassword = {
    /** The unique identifier for the application password. */
    uuid?: string;
    /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
    app_id?: string;
    /** The name of the application password. */
    name?: string;
    /** The generated password. Only available after adding an application. */
    password?: string;
    /** The GMT date the application password was created. */
    created?: string;
    /** The GMT date the application password was last used. */
    last_used?: any;
    /** The IP address the application password was last used by. */
    last_ip?: any;
  };

  type attachment = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** Permalink template for the post. */
    permalink_template?: string;
    /** Slug automatically generated from the post title. */
    generated_slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The ID for the author of the post. */
    author?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
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
    /** Attachment type. */
    media_type?: 'image' | 'file';
    /** The attachment MIME type. */
    mime_type?: string;
    /** Details about the media file, specific to its type. */
    media_details?: Record<string, any>;
    /** The ID for the associated post of the attachment. */
    post?: number;
    /** URL to the original attachment file. */
    source_url?: string;
    /** List of the missing image sizes of the attachment. */
    missing_image_sizes?: string[];
  };

  type blockDirectoryItem = {
    /** The block name, in namespace/block-name format. */
    name?: string;
    /** The block title, in human readable format. */
    title?: string;
    /** A short description of the block, in human readable format. */
    description?: string;
    /** The block slug. */
    id?: string;
    /** The star rating of the block. */
    rating?: number;
    /** The number of ratings. */
    rating_count?: number;
    /** The number sites that have activated this block. */
    active_installs?: number;
    /** The average rating of blocks published by the same author. */
    author_block_rating?: number;
    /** The number of blocks published by the same author. */
    author_block_count?: number;
    /** The WordPress.org username of the block author. */
    author?: string;
    /** The block icon. */
    icon?: string;
    /** The date when the block was last updated. */
    last_updated?: string;
    /** The date when the block was last updated, in fuzzy human readable format. */
    humanized_updated?: string;
  };

  type blockPattern = {
    /** The pattern name. */
    name?: string;
    /** The pattern title, in human readable format. */
    title?: string;
    /** The pattern content. */
    content?: string;
    /** The pattern detailed description. */
    description?: string;
    /** The pattern viewport width for inserter preview. */
    viewport_width?: number;
    /** Determines whether the pattern is visible in inserter. */
    inserter?: boolean;
    /** The pattern category slugs. */
    categories?: any[];
    /** The pattern keywords. */
    keywords?: any[];
    /** Block types that the pattern is intended to be used with. */
    block_types?: any[];
    /** An array of post types that the pattern is restricted to be used with. */
    post_types?: any[];
    /** An array of template types where the pattern fits. */
    template_types?: any[];
    /** Where the pattern comes from e.g. core */
    source?:
      | 'core'
      | 'plugin'
      | 'theme'
      | 'pattern-directory/core'
      | 'pattern-directory/theme'
      | 'pattern-directory/featured';
  };

  type blockPatternCategory = {
    /** The category name. */
    name?: string;
    /** The category label, in human readable format. */
    label?: string;
    /** The category description, in human readable format. */
    description?: string;
  };

  type blockType = {
    /** Version of block API. */
    api_version?: number;
    /** Title of block type. */
    title?: string;
    /** Unique name identifying the block type. */
    name?: string;
    /** Description of block type. */
    description?: string;
    /** Icon of block type. */
    icon?: any;
    /** Block attributes. */
    attributes?: Record<string, any>;
    /** Context provided by blocks of this type. */
    provides_context?: Record<string, any>;
    /** Context values inherited by blocks of this type. */
    uses_context?: string[];
    /** Custom CSS selectors. */
    selectors?: Record<string, any>;
    /** Block supports. */
    supports?: Record<string, any>;
    /** Block category. */
    category?: any;
    /** Is the block dynamically rendered. */
    is_dynamic?: boolean;
    /** Editor script handles. */
    editor_script_handles?: any;
    /** Public facing and editor script handles. */
    script_handles?: any;
    /** Public facing script handles. */
    view_script_handles?: any;
    /** Editor style handles. */
    editor_style_handles?: any;
    /** Public facing and editor style handles. */
    style_handles?: any;
    /** Block style variations. */
    styles?: { name: string; label?: string; inline_style?: string; style_handle?: string }[];
    /** Block variations. */
    variations?: {
      name: string;
      title: string;
      description?: string;
      category?: any;
      icon?: any;
      isDefault?: boolean;
      attributes?: Record<string, any>;
      innerBlocks?: { name?: string; attributes?: Record<string, any>; innerBlocks?: any[] }[];
      example?: {
        attributes?: Record<string, any>;
        innerBlocks?: { name?: string; attributes?: Record<string, any>; innerBlocks?: any[] }[];
      };
      scope?: any;
      keywords?: string[];
    }[];
    /** Public text domain. */
    textdomain?: any;
    /** Parent blocks. */
    parent?: any;
    /** Ancestor blocks. */
    ancestor?: any;
    /** Block keywords. */
    keywords?: string[];
    /** Block example. */
    example?: {
      attributes?: Record<string, any>;
      innerBlocks?: { name?: string; attributes?: Record<string, any>; innerBlocks?: any[] }[];
    };
    /** Editor script handle. DEPRECATED: Use `editor_script_handles` instead. */
    editor_script?: any;
    /** Public facing and editor script handle. DEPRECATED: Use `script_handles` instead. */
    script?: any;
    /** Public facing script handle. DEPRECATED: Use `view_script_handles` instead. */
    view_script?: any;
    /** Editor style handle. DEPRECATED: Use `editor_style_handles` instead. */
    editor_style?: any;
    /** Public facing and editor style handle. DEPRECATED: Use `style_handles` instead. */
    style?: any;
  };

  type category = {
    /** Unique identifier for the term. */
    id?: number;
    /** Number of published posts for the term. */
    count?: number;
    /** HTML description of the term. */
    description?: string;
    /** URL of the term. */
    link?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Type attribution for the term. */
    taxonomy?: 'category';
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type comment = {
    /** Unique identifier for the comment. */
    id?: number;
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
    /** URL to the comment. */
    link?: string;
    /** The ID for the parent of the comment. */
    parent?: number;
    /** The ID of the associated post object. */
    post?: number;
    /** State of the comment. */
    status?: string;
    /** Type of the comment. */
    type?: string;
    /** Avatar URLs for the comment author. */
    author_avatar_urls?: { '24'?: string; '48'?: string; '96'?: string };
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type createApplicationPasswordParams = {
    user_id: any;
  };

  type createApplicationPasswordParams = {
    user_id: any;
    uuid: any;
  };

  type createAttachmentParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type createCategoryParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type createCommentParams = {
    /** Unique identifier for the comment. */
    id: number;
  };

  type createEchCustomerPolicyRevisionParams = {
    id: any;
  };

  type createEchOrganizationRevisionParams = {
    id: any;
  };

  type createEchPolicyBundlesParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type createEchPolicyRevisionParams = {
    id: any;
  };

  type createGenreParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type createNavMenuItemParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type createNavMenuItemRevisionParams = {
    id: any;
  };

  type createNavMenuParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type createPageParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type createPageRevisionParams = {
    id: any;
  };

  type createPluginParams = {
    plugin: any;
  };

  type createPostParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type createPostRevisionParams = {
    id: any;
  };

  type createProductCatParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type createProductParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type createProductRevisionParams = {
    id: any;
  };

  type createProductTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type createRenderedBlockParams = {
    /** Unique registered name for the block. */
    name: any;
  };

  type createSidebarParams = {
    id: any;
  };

  type createTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type createWidgetParams = {
    /** Unique identifier for the widget. */
    id: any;
  };

  type createWpBlockParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type createWpBlockRevisionParams = {
    id: any;
  };

  type createWpGlobalStylesParams = {
    id: any;
  };

  type createWpNavigationParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type createWpNavigationRevisionParams = {
    id: any;
  };

  type createWpTemplateParams = {
    /** The id of a template */
    id: any;
  };

  type createWpTemplatePartParams = {
    /** The id of a template */
    id: any;
  };

  type createWpTemplatePartRevisionParams = {
    id: any;
  };

  type createWpTemplateRevisionParams = {
    id: any;
  };

  type deleteApplicationPasswordParams = {
    user_id: any;
  };

  type deleteApplicationPasswordParams = {
    user_id: any;
    uuid: any;
  };

  type deleteAttachmentParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteCategoryParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type deleteCommentParams = {
    /** Unique identifier for the comment. */
    id: number;
  };

  type deleteEchCustomerPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteEchCustomerPolicyRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type deleteEchOrganizationParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteEchPolicyBundlesParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type deleteEchPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteEchPolicyRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type deleteGenreParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type deleteNavMenuItemParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteNavMenuParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type deletePageParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deletePageRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type deletePluginParams = {
    plugin: any;
  };

  type deletePostParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deletePostRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type deleteProductCatParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type deleteProductParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteProductTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type deleteTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type deleteUserParams = {
    /** Unique identifier for the user. */
    id: number;
  };

  type deleteWidgetParams = {
    id: any;
  };

  type deleteWpBlockParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteWpBlockRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type deleteWpNavigationParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type deleteWpNavigationRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type deleteWpTemplateParams = {
    /** The id of a template */
    id: any;
  };

  type deleteWpTemplatePartParams = {
    /** The id of a template */
    id: any;
  };

  type deleteWpTemplatePartRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type deleteWpTemplateRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
  };

  type echCustomerPolicy = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** Permalink template for the post. */
    permalink_template?: string;
    /** Slug automatically generated from the post title. */
    generated_slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** Meta fields. */
    meta?: {
      ech_parent_policy_id?: string;
      ech_organization_id?: string;
      ech_total_seats?: string;
      ech_used_seats?: string;
      ech_subscriptions?: { subscription_id?: number }[];
      ech_orders?: { order_id?: number }[];
      ech_products?: { product_id?: number }[];
      ech_staff_members?: { staff_member_id?: number }[];
      ech_parent_policy_versions?: {
        parent_policy_version_id?: number;
        parent_policy_version_status?: string;
      }[];
    };
    /** The theme file to use to display the post. */
    template?: string;
  };

  type echCustomerPolicyRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type echOrganization = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
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
  };

  type echOrganizationRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type echPolicy = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** Permalink template for the post. */
    permalink_template?: string;
    /** Slug automatically generated from the post title. */
    generated_slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the ech_policy_bundles taxonomy. */
    ech_policy_bundles?: number[];
  };

  type echPolicyBundles = {
    /** Unique identifier for the term. */
    id?: number;
    /** Number of published posts for the term. */
    count?: number;
    /** HTML description of the term. */
    description?: string;
    /** URL of the term. */
    link?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Type attribution for the term. */
    taxonomy?: 'ech_policy_bundles';
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type echPolicyRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type genre = {
    /** Unique identifier for the term. */
    id?: number;
    /** Number of published posts for the term. */
    count?: number;
    /** HTML description of the term. */
    description?: string;
    /** URL of the term. */
    link?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Type attribution for the term. */
    taxonomy?: 'genre';
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type getApplicationPasswordParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    user_id: any;
  };

  type getApplicationPasswordParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    user_id: any;
  };

  type getApplicationPasswordParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    user_id: any;
    uuid: any;
  };

  type getAttachmentParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit result set to posts assigned to specific authors. */
    author?: any;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title';
    /** Limit result set to items with particular parent IDs. */
    parent?: any;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: any;
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
    /** Limit result set to attachments of a particular media type. */
    media_type?: 'image' | 'video' | 'text' | 'application' | 'audio';
    /** Limit result set to attachments of a particular MIME type. */
    mime_type?: any;
  };

  type getAttachmentParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getBlockDirectoryItemParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit result set to blocks matching the search term. */
    term: any;
  };

  type getBlockTypeParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Block namespace. */
    namespace?: any;
  };

  type getBlockTypeParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Block namespace. */
    namespace: any;
  };

  type getBlockTypeParams = {
    /** Block name. */
    name: any;
    /** Block namespace. */
    namespace: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getCategoryParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'slug'
      | 'include_slugs'
      | 'term_group'
      | 'description'
      | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: any;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: any;
  };

  type getCategoryParams = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getCommentParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to comments published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit result set to comments assigned to specific user IDs. Requires authorization. */
    author?: any;
    /** Ensure result set excludes comments assigned to specific user IDs. Requires authorization. */
    author_exclude?: any;
    /** Limit result set to that from a specific author email. Requires authorization. */
    author_email?: any;
    /** Limit response to comments published before a given ISO8601 compliant date. */
    before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by comment attribute. */
    orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
    /** Limit result set to comments of specific parent IDs. */
    parent?: any;
    /** Ensure result set excludes specific parent IDs. */
    parent_exclude?: any;
    /** Limit result set to comments assigned to specific post IDs. */
    post?: any;
    /** Limit result set to comments assigned a specific status. Requires authorization. */
    status?: any;
    /** Limit result set to comments assigned a specific type. Requires authorization. */
    type?: any;
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getCommentParams = {
    /** Unique identifier for the comment. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the parent post of the comment (if the post is password protected). */
    password?: any;
  };

  type getCurrentUserParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getEchCustomerPoliciesParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit result set to posts assigned to specific authors. */
    author?: any;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
    /** The associated organization ID to filter out the policies collection. */
    organization_id?: number;
  };

  type getEchCustomerPolicyByPostMethodParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type getEchCustomerPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getEchCustomerPolicyRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getEchCustomerPolicyRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getEchCustomerPolicyRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getEchCustomerPolicyRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getEchOrganizationByPostMethodParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type getEchOrganizationParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getEchOrganizationRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getEchOrganizationRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getEchOrganizationsParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit result set to posts assigned to specific authors. */
    author?: any;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
  };

  type getEchPoliciesParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit result set to posts assigned to specific authors. */
    author?: any;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the ech_policy_bundles taxonomy. */
    ech_policy_bundles?:
      | number[]
      | { terms?: number[]; include_children?: boolean; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the ech_policy_bundles taxonomy. */
    ech_policy_bundles_exclude?: number[] | { terms?: number[]; include_children?: boolean };
  };

  type getEchPolicyBundlesParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'slug'
      | 'include_slugs'
      | 'term_group'
      | 'description'
      | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: any;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: any;
  };

  type getEchPolicyBundlesParams = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getEchPolicyByPostMethodParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type getEchPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getEchPolicyRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getEchPolicyRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getEchPolicyRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getEchPolicyRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getGenreParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'slug'
      | 'include_slugs'
      | 'term_group'
      | 'description'
      | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: any;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: any;
  };

  type getGenreParams = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getMenuLocationParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getMenuLocationParams = {
    /** An alphanumeric identifier for the menu location. */
    location: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getNavMenuItemParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title'
      | 'menu_order';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the menus taxonomy. */
    menus?: number[] | { terms?: number[]; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the menus taxonomy. */
    menus_exclude?: number[] | { terms?: number[] };
    /** Limit result set to posts with a specific menu_order value. */
    menu_order?: number;
  };

  type getNavMenuItemParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getNavMenuItemRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getNavMenuItemRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getNavMenuParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'slug'
      | 'include_slugs'
      | 'term_group'
      | 'description'
      | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: any;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: any;
  };

  type getNavMenuParams = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getPageParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit result set to posts assigned to specific authors. */
    author?: any;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Limit result set to posts with a specific menu_order value. */
    menu_order?: number;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title'
      | 'menu_order';
    /** Limit result set to items with particular parent IDs. */
    parent?: any;
    /** Limit result set to all items except those of a particular parent ID. */
    parent_exclude?: any;
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
  };

  type getPageParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getPageRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getPageRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getPageRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getPageRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getPatternDirectoryItemParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit results to those matching a category ID. */
    category?: number;
    /** Limit results to those matching a keyword ID. */
    keyword?: number;
    /** Limit results to those matching a pattern (slug). */
    slug?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title'
      | 'favorite_count';
  };

  type getPluginParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit results to those matching a string. */
    search?: any;
    /** Limits results to plugins with the given status. */
    status?: any;
  };

  type getPluginParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    plugin: any;
  };

  type getPostParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit result set to posts assigned to specific authors. */
    author?: any;
    /** Ensure result set excludes posts assigned to specific authors. */
    author_exclude?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the categories taxonomy. */
    categories?:
      | number[]
      | { terms?: number[]; include_children?: boolean; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the categories taxonomy. */
    categories_exclude?: number[] | { terms?: number[]; include_children?: boolean };
    /** Limit result set to items with specific terms assigned in the tags taxonomy. */
    tags?: number[] | { terms?: number[]; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the tags taxonomy. */
    tags_exclude?: number[] | { terms?: number[] };
    /** Limit result set to items with specific terms assigned in the ech_policy_bundles taxonomy. */
    ech_policy_bundles?:
      | number[]
      | { terms?: number[]; include_children?: boolean; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the ech_policy_bundles taxonomy. */
    ech_policy_bundles_exclude?: number[] | { terms?: number[]; include_children?: boolean };
    /** Limit result set to items with specific terms assigned in the genre taxonomy. */
    genre?: number[] | { terms?: number[]; include_children?: boolean; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the genre taxonomy. */
    genre_exclude?: number[] | { terms?: number[]; include_children?: boolean };
    /** Limit result set to items that are sticky. */
    sticky?: any;
  };

  type getPostParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getPostRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getPostRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getPostRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getPostRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getProductCatParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'slug'
      | 'include_slugs'
      | 'term_group'
      | 'description'
      | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: any;
    /** Limit result set to terms assigned to a specific parent. */
    parent?: number;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: any;
  };

  type getProductCatParams = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getProductParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title'
      | 'popularity'
      | 'rating';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
    /** Limit result set based on relationship between multiple taxonomies. */
    tax_relation?: 'AND' | 'OR';
    /** Limit result set to items with specific terms assigned in the product_cat taxonomy. */
    product_cat?:
      | number[]
      | { terms?: number[]; include_children?: boolean; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the product_cat taxonomy. */
    product_cat_exclude?: number[] | { terms?: number[]; include_children?: boolean };
    /** Limit result set to items with specific terms assigned in the product_tag taxonomy. */
    product_tag?: number[] | { terms?: number[]; operator?: 'AND' | 'OR' };
    /** Limit result set to items except those with specific terms assigned in the product_tag taxonomy. */
    product_tag_exclude?: number[] | { terms?: number[] };
  };

  type getProductParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getProductRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getProductRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getProductTagParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'slug'
      | 'include_slugs'
      | 'term_group'
      | 'description'
      | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: any;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: any;
  };

  type getProductTagParams = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getRenderedBlockParams = {
    /** Unique registered name for the block. */
    name: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'edit';
    /** Attributes for the block. */
    attributes?: any;
    /** ID of the post context. */
    post_id?: number;
  };

  type getSearchResultParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit results to items of an object type. */
    type?: 'post' | 'term' | 'post-format';
    /** Limit results to items of one or more object subtypes. */
    subtype?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
  };

  type getSidebarParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getSidebarParams = {
    /** The id of a registered sidebar */
    id: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getStatusParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getStatusParams = {
    /** An alphanumeric identifier for the status. */
    status: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getTagParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by term attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'slug'
      | 'include_slugs'
      | 'term_group'
      | 'description'
      | 'count';
    /** Whether to hide terms not assigned to any posts. */
    hide_empty?: any;
    /** Limit result set to terms assigned to a specific post. */
    post?: number;
    /** Limit result set to terms with one or more specific slugs. */
    slug?: any;
  };

  type getTagParams = {
    /** Unique identifier for the term. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getTaxonomyParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit results to taxonomies associated with a specific post type. */
    type?: any;
  };

  type getTaxonomyParams = {
    /** An alphanumeric identifier for the taxonomy. */
    taxonomy: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getThemeParams = {
    /** Limit result set to themes assigned one or more statuses. */
    status?: any;
  };

  type getThemeParams = {
    /** The theme's stylesheet. This uniquely identifies the theme. */
    stylesheet: any;
  };

  type getTypeParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getTypeParams = {
    /** An alphanumeric identifier for the post type. */
    type: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getUserByPostMethodParams = {
    /** Unique identifier for the user. */
    id: number;
  };

  type getUserParams = {
    /** Unique identifier for the user. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getUsersParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by user attribute. */
    orderby?:
      | 'id'
      | 'include'
      | 'name'
      | 'registered_date'
      | 'slug'
      | 'include_slugs'
      | 'email'
      | 'url';
    /** Limit result set to users with one or more specific slugs. */
    slug?: any;
    /** Limit result set to users matching at least one specific role provided. Accepts csv list or single role. */
    roles?: any;
    /** Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability. */
    capabilities?: any;
    /** Limit result set to users who are considered authors. */
    who?: 'authors';
    /** Limit result set to users who have published posts. */
    has_published_posts?: any;
    /** The associated organization ID to filter out the users collection. */
    organization_id?: number;
  };

  type getWidgetParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The sidebar to return widgets for. */
    sidebar?: any;
  };

  type getWidgetParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getWidgetTypeParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWidgetTypeParams = {
    /** The widget type id. */
    id: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpBlockParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
  };

  type getWpBlockParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getWpBlockRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getWpBlockRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpBlockRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getWpBlockRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpGlobalStylesParams = {
    /** The id of a template */
    id: any;
  };

  type getWpGlobalStylesRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Offset the result set by a specific number of items. */
    offset?: number;
  };

  type getWpNavigationParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Limit response to posts published after a given ISO8601 compliant date. */
    after?: any;
    /** Limit response to posts modified after a given ISO8601 compliant date. */
    modified_after?: any;
    /** Limit response to posts published before a given ISO8601 compliant date. */
    before?: any;
    /** Limit response to posts modified before a given ISO8601 compliant date. */
    modified_before?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by post attribute. */
    orderby?:
      | 'author'
      | 'date'
      | 'id'
      | 'include'
      | 'modified'
      | 'parent'
      | 'relevance'
      | 'slug'
      | 'include_slugs'
      | 'title';
    /** Array of column names to be searched. */
    search_columns?: any;
    /** Limit result set to posts with one or more specific slugs. */
    slug?: any;
    /** Limit result set to posts assigned one or more statuses. */
    status?: any;
  };

  type getWpNavigationParams = {
    /** Unique identifier for the post. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** The password for the post if it is password protected. */
    password?: any;
  };

  type getWpNavigationRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getWpNavigationRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpNavigationRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getWpNavigationRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpTemplateParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit to the specified post id. */
    wp_id?: number;
    /** Limit to the specified template part area. */
    area?: any;
    /** Post type to get the templates for. */
    post_type?: any;
  };

  type getWpTemplateParams = {
    /** The id of a template */
    id: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpTemplatePartParams = {
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Limit to the specified post id. */
    wp_id?: number;
    /** Limit to the specified template part area. */
    area?: any;
    /** Post type to get the templates for. */
    post_type?: any;
  };

  type getWpTemplatePartParams = {
    /** The id of a template */
    id: any;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpTemplatePartRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getWpTemplatePartRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpTemplatePartRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getWpTemplatePartRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpTemplateRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    /** Current page of the collection. */
    page?: number;
    /** Maximum number of items to be returned in result set. */
    per_page?: number;
    /** Limit results to those matching a string. */
    search?: any;
    /** Ensure result set excludes specific IDs. */
    exclude?: any;
    /** Limit result set to specific IDs. */
    include?: any;
    /** Offset the result set by a specific number of items. */
    offset?: number;
    /** Order sort attribute ascending or descending. */
    order?: 'asc' | 'desc';
    /** Sort collection by object attribute. */
    orderby?: 'date' | 'id' | 'include' | 'relevance' | 'slug' | 'include_slugs' | 'title';
  };

  type getWpTemplateRevisionParams = {
    /** The ID for the parent of the revision. */
    parent: number;
    /** Unique identifier for the revision. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type getWpTemplateRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent?: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
    id: any;
  };

  type getWpTemplateRevisionParams = {
    /** The ID for the parent of the autosave. */
    parent: number;
    /** The ID for the autosave. */
    id: number;
    /** Scope under which the request is made; determines fields present in response. */
    context?: 'view' | 'embed' | 'edit';
  };

  type menuLocation = {
    /** The name of the menu location. */
    name?: string;
    /** The description of the menu location. */
    description?: string;
    /** The ID of the assigned menu. */
    menu?: number;
  };

  type navMenu = {
    /** Unique identifier for the term. */
    id?: number;
    /** HTML description of the term. */
    description?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Meta fields. */
    meta?: Record<string, any>;
    /** The locations assigned to the menu. */
    locations?: string[];
    /** Whether to automatically add top level pages to this menu. */
    auto_add?: boolean;
  };

  type navMenuItem = {
    /** The title for the object. */
    title?: { raw?: string; rendered?: string };
    /** Unique identifier for the object. */
    id?: number;
    /** The singular label used to describe this type of menu item. */
    type_label?: string;
    /** The family of objects originally represented, such as "post_type" or "taxonomy". */
    type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
    /** A named status for the object. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** The ID for the parent of the object. */
    parent?: number;
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
    target?: '_blank' | '';
    /** The URL to which this menu item points. */
    url?: string;
    /** The XFN relationship expressed in the link of this menu item. */
    xfn?: string[];
    /** Whether the menu item represents an object that no longer exists. */
    invalid?: boolean;
    /** The terms assigned to the object in the nav_menu taxonomy. */
    menus?: number;
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type navMenuItemRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** GUID for the revision, as it exists in the database. */
    guid?: string;
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the object. */
    title?: { raw?: string; rendered?: string };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type page = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** Permalink template for the post. */
    permalink_template?: string;
    /** Slug automatically generated from the post title. */
    generated_slug?: string;
    /** The ID for the parent of the post. */
    parent?: number;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The order of the post in relation to other posts. */
    menu_order?: number;
    /** Meta fields. */
    meta?: { footnotes?: string };
    /** The theme file to use to display the post. */
    template?: string;
  };

  type pageRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type patchApplicationPasswordParams = {
    user_id: any;
    uuid: any;
  };

  type patchAttachmentParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchCategoryParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type patchCommentParams = {
    /** Unique identifier for the comment. */
    id: number;
  };

  type patchEchCustomerPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchEchOrganizationParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchEchPolicyBundlesParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type patchEchPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchGenreParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type patchNavMenuItemParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchNavMenuParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type patchPageParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchPluginParams = {
    plugin: any;
  };

  type patchPostParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchProductCatParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type patchProductParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchProductTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type patchSidebarParams = {
    id: any;
  };

  type patchTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type patchUserParams = {
    /** Unique identifier for the user. */
    id: number;
  };

  type patchWidgetParams = {
    /** Unique identifier for the widget. */
    id: any;
  };

  type patchWpBlockParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchWpGlobalStylesParams = {
    id: any;
  };

  type patchWpNavigationParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type patchWpTemplateParams = {
    /** The id of a template */
    id: any;
  };

  type patchWpTemplatePartParams = {
    /** The id of a template */
    id: any;
  };

  type patternDirectoryItem = {
    /** The pattern ID. */
    id?: number;
    /** The pattern title, in human readable format. */
    title?: string;
    /** The pattern content. */
    content?: string;
    /** The pattern's category slugs. */
    categories?: string[];
    /** The pattern's keywords. */
    keywords?: string[];
    /** A description of the pattern. */
    description?: string;
    /** The preferred width of the viewport when previewing a pattern, in pixels. */
    viewport_width?: number;
    /** The block types which can use this pattern. */
    block_types?: string[];
  };

  type plugin = {
    /** The plugin file. */
    plugin?: string;
    /** The plugin activation status. */
    status?: 'inactive' | 'active';
    /** The plugin name. */
    name?: string;
    /** The plugin's website address. */
    plugin_uri?: string;
    /** The plugin author. */
    author?: Record<string, any>;
    /** Plugin author's website address. */
    author_uri?: string;
    /** The plugin description. */
    description?: { raw?: string; rendered?: string };
    /** The plugin version number. */
    version?: string;
    /** Whether the plugin can only be activated network-wide. */
    network_only?: boolean;
    /** Minimum required version of WordPress. */
    requires_wp?: string;
    /** Minimum required version of PHP. */
    requires_php?: string;
    /** The plugin's text domain. */
    textdomain?: string;
  };

  type post = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** Permalink template for the post. */
    permalink_template?: string;
    /** Slug automatically generated from the post title. */
    generated_slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The ID for the author of the post. */
    author?: number;
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** The format for the post. */
    format?:
      | 'standard'
      | 'aside'
      | 'chat'
      | 'gallery'
      | 'link'
      | 'image'
      | 'quote'
      | 'status'
      | 'video'
      | 'audio';
    /** Meta fields. */
    meta?: { footnotes?: string };
    /** Whether or not the post should be treated as sticky. */
    sticky?: boolean;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the category taxonomy. */
    categories?: number[];
    /** The terms assigned to the post in the post_tag taxonomy. */
    tags?: number[];
    /** The terms assigned to the post in the ech_policy_bundles taxonomy. */
    ech_policy_bundles?: number[];
    /** The terms assigned to the post in the genre taxonomy. */
    genre?: number[];
  };

  type postRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type product = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** Permalink template for the post. */
    permalink_template?: string;
    /** Slug automatically generated from the post title. */
    generated_slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** The ID of the featured media for the post. */
    featured_media?: number;
    /** Whether or not comments are open on the post. */
    comment_status?: 'open' | 'closed';
    /** Whether or not the post can be pinged. */
    ping_status?: 'open' | 'closed';
    /** Meta fields. */
    meta?: Record<string, any>;
    /** The theme file to use to display the post. */
    template?: string;
    /** The terms assigned to the post in the product_cat taxonomy. */
    product_cat?: number[];
    /** The terms assigned to the post in the product_tag taxonomy. */
    product_tag?: number[];
  };

  type productCat = {
    /** Unique identifier for the term. */
    id?: number;
    /** Number of published posts for the term. */
    count?: number;
    /** HTML description of the term. */
    description?: string;
    /** URL of the term. */
    link?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Type attribution for the term. */
    taxonomy?: 'product_cat';
    /** The parent term ID. */
    parent?: number;
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type productRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The excerpt for the post. */
    excerpt?: { raw?: string; rendered?: string; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type productTag = {
    /** Unique identifier for the term. */
    id?: number;
    /** Number of published posts for the term. */
    count?: number;
    /** HTML description of the term. */
    description?: string;
    /** URL of the term. */
    link?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Type attribution for the term. */
    taxonomy?: 'product_tag';
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type putApplicationPasswordParams = {
    user_id: any;
    uuid: any;
  };

  type putAttachmentParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putCategoryParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type putCommentParams = {
    /** Unique identifier for the comment. */
    id: number;
  };

  type putEchCustomerPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putEchOrganizationParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putEchPolicyBundlesParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type putEchPolicyParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putGenreParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type putNavMenuItemParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putNavMenuParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type putPageParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putPluginParams = {
    plugin: any;
  };

  type putPostParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putProductCatParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type putProductParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putProductTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type putSidebarParams = {
    id: any;
  };

  type putTagParams = {
    /** Unique identifier for the term. */
    id: number;
  };

  type putUserParams = {
    /** Unique identifier for the user. */
    id: number;
  };

  type putWidgetParams = {
    /** Unique identifier for the widget. */
    id: any;
  };

  type putWpBlockParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putWpGlobalStylesParams = {
    id: any;
  };

  type putWpNavigationParams = {
    /** Unique identifier for the post. */
    id: number;
  };

  type putWpTemplateParams = {
    /** The id of a template */
    id: any;
  };

  type putWpTemplatePartParams = {
    /** The id of a template */
    id: any;
  };

  type renderedBlock = {
    /** The rendered block. */
    rendered?: string;
  };

  type searchResult = {
    /** Unique identifier for the object. */
    id?: any;
    /** The title for the object. */
    title?: string;
    /** URL to the object. */
    url?: string;
    /** Object type. */
    type?: 'post' | 'term' | 'post-format';
    /** Object subtype. */
    subtype?:
      | 'post'
      | 'page'
      | 'product'
      | 'ech-policy'
      | 'ech-customer-policy'
      | 'ech-organization'
      | 'category'
      | 'post_tag'
      | 'product_cat'
      | 'product_tag'
      | 'ech_policy_bundles'
      | 'genre';
  };

  type settings = {
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
    default_ping_status?: 'open' | 'closed';
    /** Allow people to submit comments on new posts. */
    default_comment_status?: 'open' | 'closed';
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
  };

  type sidebar = {
    /** ID of sidebar. */
    id?: string;
    /** Unique name identifying the sidebar. */
    name?: string;
    /** Description of sidebar. */
    description?: string;
    /** Extra CSS class to assign to the sidebar in the Widgets interface. */
    class?: string;
    /** HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element. */
    before_widget?: string;
    /** HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element. */
    after_widget?: string;
    /** HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element. */
    before_title?: string;
    /** HTML content to append to the sidebar title when displayed. Default is a closing h2 element. */
    after_title?: string;
    /** Status of sidebar. */
    status?: 'active' | 'inactive';
    /** Nested widgets. */
    widgets?: any[];
  };

  type status = {
    /** The title for the status. */
    name?: string;
    /** Whether posts with this status should be private. */
    private?: boolean;
    /** Whether posts with this status should be protected. */
    protected?: boolean;
    /** Whether posts of this status should be shown in the front end of the site. */
    public?: boolean;
    /** Whether posts with this status should be publicly-queryable. */
    queryable?: boolean;
    /** Whether to include posts in the edit listing for their post type. */
    show_in_list?: boolean;
    /** An alphanumeric identifier for the status. */
    slug?: string;
    /** Whether posts of this status may have floating published dates. */
    date_floating?: boolean;
  };

  type tag = {
    /** Unique identifier for the term. */
    id?: number;
    /** Number of published posts for the term. */
    count?: number;
    /** HTML description of the term. */
    description?: string;
    /** URL of the term. */
    link?: string;
    /** HTML title for the term. */
    name?: string;
    /** An alphanumeric identifier for the term unique to its type. */
    slug?: string;
    /** Type attribution for the term. */
    taxonomy?: 'post_tag';
    /** Meta fields. */
    meta?: Record<string, any>;
  };

  type taxonomy = {
    /** All capabilities used by the taxonomy. */
    capabilities?: Record<string, any>;
    /** A human-readable description of the taxonomy. */
    description?: string;
    /** Whether or not the taxonomy should have children. */
    hierarchical?: boolean;
    /** Human-readable labels for the taxonomy for various contexts. */
    labels?: Record<string, any>;
    /** The title for the taxonomy. */
    name?: string;
    /** An alphanumeric identifier for the taxonomy. */
    slug?: string;
    /** Whether or not the term cloud should be displayed. */
    show_cloud?: boolean;
    /** Types associated with the taxonomy. */
    types?: string[];
    /** REST base route for the taxonomy. */
    rest_base?: string;
    /** REST namespace route for the taxonomy. */
    rest_namespace?: string;
    /** The visibility settings for the taxonomy. */
    visibility?: {
      public?: boolean;
      publicly_queryable?: boolean;
      show_ui?: boolean;
      show_admin_column?: boolean;
      show_in_nav_menus?: boolean;
      show_in_quick_edit?: boolean;
    };
  };

  type theme = {
    /** The theme's stylesheet. This uniquely identifies the theme. */
    stylesheet?: string;
    /** The theme's template. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet. */
    template?: string;
    /** The theme author. */
    author?: { raw?: string; rendered?: string };
    /** The website of the theme author. */
    author_uri?: { raw?: string; rendered?: string };
    /** A description of the theme. */
    description?: { raw?: string; rendered?: string };
    /** Whether the theme is a block-based theme. */
    is_block_theme?: boolean;
    /** The name of the theme. */
    name?: { raw?: string; rendered?: string };
    /** The minimum PHP version required for the theme to work. */
    requires_php?: string;
    /** The minimum WordPress version required for the theme to work. */
    requires_wp?: string;
    /** The theme's screenshot URL. */
    screenshot?: string;
    /** Tags indicating styles and features of the theme. */
    tags?: { raw?: string[]; rendered?: string };
    /** The theme's text domain. */
    textdomain?: string;
    /** Features supported by this theme. */
    theme_supports?: {
      'align-wide'?: boolean;
      'automatic-feed-links'?: boolean;
      'block-templates'?: boolean;
      'block-template-parts'?: boolean;
      'custom-background'?: {
        'default-image'?: string;
        'default-preset'?: 'default' | 'fill' | 'fit' | 'repeat' | 'custom';
        'default-position-x'?: 'left' | 'center' | 'right';
        'default-position-y'?: 'left' | 'center' | 'right';
        'default-size'?: 'auto' | 'contain' | 'cover';
        'default-repeat'?: 'repeat-x' | 'repeat-y' | 'repeat' | 'no-repeat';
        'default-attachment'?: 'scroll' | 'fixed';
        'default-color'?: string;
      };
      'custom-header'?: {
        'default-image'?: string;
        'random-default'?: boolean;
        width?: number;
        height?: number;
        'flex-height'?: boolean;
        'flex-width'?: boolean;
        'default-text-color'?: string;
        'header-text'?: boolean;
        uploads?: boolean;
        video?: boolean;
      };
      'custom-logo'?: {
        width?: number;
        height?: number;
        'flex-width'?: boolean;
        'flex-height'?: boolean;
        'header-text'?: string[];
        'unlink-homepage-logo'?: boolean;
      };
      'customize-selective-refresh-widgets'?: boolean;
      'dark-editor-style'?: boolean;
      'disable-custom-colors'?: boolean;
      'disable-custom-font-sizes'?: boolean;
      'disable-custom-gradients'?: boolean;
      'disable-layout-styles'?: boolean;
      'editor-color-palette'?: any;
      'editor-font-sizes'?: any;
      'editor-gradient-presets'?: any;
      'editor-styles'?: boolean;
      html5?: any;
      formats?: string[];
      'post-thumbnails'?: any;
      'responsive-embeds'?: boolean;
      'title-tag'?: boolean;
      'wp-block-styles'?: boolean;
    };
    /** The URI of the theme's webpage. */
    theme_uri?: { raw?: string; rendered?: string };
    /** The theme's current version. */
    version?: string;
    /** A named status for the theme. */
    status?: 'inactive' | 'active';
  };

  type type = {
    /** All capabilities used by the post type. */
    capabilities?: Record<string, any>;
    /** A human-readable description of the post type. */
    description?: string;
    /** Whether or not the post type should have children. */
    hierarchical?: boolean;
    /** Whether or not the post type can be viewed. */
    viewable?: boolean;
    /** Human-readable labels for the post type for various contexts. */
    labels?: Record<string, any>;
    /** The title for the post type. */
    name?: string;
    /** An alphanumeric identifier for the post type. */
    slug?: string;
    /** All features, supported by the post type. */
    supports?: Record<string, any>;
    /** If the value is a string, the value will be used as the archive slug. If the value is false the post type has no archive. */
    has_archive?: any;
    /** Taxonomies associated with post type. */
    taxonomies?: string[];
    /** REST base route for the post type. */
    rest_base?: string;
    /** REST route's namespace for the post type. */
    rest_namespace?: string;
    /** The visibility settings for the post type. */
    visibility?: { show_ui?: boolean; show_in_nav_menus?: boolean };
    /** The icon for the post type. */
    icon?: any;
  };

  type user = {
    /** Unique identifier for the user. */
    id?: number;
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
    /** Author URL of the user. */
    link?: string;
    /** Locale for the user. */
    locale?: '' | 'en_US';
    /** The nickname for the user. */
    nickname?: string;
    /** An alphanumeric identifier for the user. */
    slug?: string;
    /** Registration date for the user. */
    registered_date?: string;
    /** Roles assigned to the user. */
    roles?: string[];
    /** Password for the user (never included). */
    password?: string;
    /** All capabilities assigned to the user. */
    capabilities?: Record<string, any>;
    /** Any extra capabilities assigned to the user. */
    extra_capabilities?: Record<string, any>;
    /** Avatar URLs for the user. */
    avatar_urls?: { '24'?: string; '48'?: string; '96'?: string };
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
  };

  type widget = {
    /** Unique identifier for the widget. */
    id?: string;
    /** The type of the widget. Corresponds to ID in widget-types endpoint. */
    id_base?: string;
    /** The sidebar the widget belongs to. */
    sidebar?: string;
    /** HTML representation of the widget. */
    rendered?: string;
    /** HTML representation of the widget admin form. */
    rendered_form?: string;
    /** Instance settings of the widget, if supported. */
    instance?: { encoded?: string; hash?: string; raw?: Record<string, any> };
    /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
    form_data?: string;
  };

  type widgetType = {
    /** Unique slug identifying the widget type. */
    id?: string;
    /** Human-readable name identifying the widget type. */
    name?: string;
    /** Description of the widget. */
    description?: string;
    /** Whether the widget supports multiple instances */
    is_multi?: boolean;
    /** Class name */
    classname?: string;
  };

  type wpBlock = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: { raw?: string };
    /** The content for the post. */
    content?: { raw?: string; block_version?: number; protected?: boolean };
    /** Meta fields. */
    meta?: { wp_pattern_sync_status?: 'partial' | 'unsynced' };
    /** The theme file to use to display the post. */
    template?: string;
  };

  type wpBlockRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string };
    /** The content for the post. */
    content?: { raw?: string; block_version?: number; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type wpGlobalStyles = {
    /** ID of global styles config. */
    id?: string;
    /** Global styles. */
    styles?: any;
    /** Global settings. */
    settings?: any;
    /** Title of the global styles variation. */
    title?: { raw?: string; rendered?: string };
  };

  type wpGlobalStylesRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** Global styles. */
    styles?: any;
    /** Global settings. */
    settings?: any;
  };

  type wpNavigation = {
    /** The date the post was published, in the site's timezone. */
    date?: any;
    /** The date the post was published, as GMT. */
    date_gmt?: any;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the post. */
    id?: number;
    /** URL to the post. */
    link?: string;
    /** The date the post was last modified, in the site's timezone. */
    modified?: string;
    /** The date the post was last modified, as GMT. */
    modified_gmt?: string;
    /** An alphanumeric identifier for the post unique to its type. */
    slug?: string;
    /** A named status for the post. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Type of post. */
    type?: string;
    /** A password to protect access to the content and excerpt. */
    password?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** The theme file to use to display the post. */
    template?: string;
  };

  type wpNavigationRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** The globally unique identifier for the post. */
    guid?: { raw?: string; rendered?: string };
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** The title for the post. */
    title?: { raw?: string; rendered?: string };
    /** The content for the post. */
    content?: { raw?: string; rendered?: string; block_version?: number; protected?: boolean };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type wpTemplate = {
    /** ID of template. */
    id?: string;
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Source of template */
    source?: string;
    /** Source of a customized template */
    origin?: string;
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Post ID. */
    wp_id?: number;
    /** Theme file exists. */
    has_theme_file?: any;
    /** The ID for the author of the template. */
    author?: number;
    /** The date the template was last modified, in the site's timezone. */
    modified?: string;
    /** Whether a template is a custom template. */
    is_custom?: any;
  };

  type wpTemplatePart = {
    /** ID of template. */
    id?: string;
    /** Unique slug identifying the template. */
    slug?: string;
    /** Theme identifier for the template. */
    theme?: string;
    /** Type of template. */
    type?: string;
    /** Source of template */
    source?: string;
    /** Source of a customized template */
    origin?: string;
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Description of template. */
    description?: string;
    /** Status of template. */
    status?:
      | 'publish'
      | 'future'
      | 'draft'
      | 'pending'
      | 'private'
      | 'wc-active'
      | 'wc-switched'
      | 'wc-expired'
      | 'wc-pending-cancel'
      | 'wc-pending'
      | 'wc-processing'
      | 'wc-on-hold'
      | 'wc-completed'
      | 'wc-cancelled'
      | 'wc-refunded'
      | 'wc-failed'
      | 'wc-checkout-draft';
    /** Post ID. */
    wp_id?: number;
    /** Theme file exists. */
    has_theme_file?: any;
    /** The ID for the author of the template. */
    author?: number;
    /** The date the template was last modified, in the site's timezone. */
    modified?: string;
    /** Where the template part is intended for use (header, footer, etc.) */
    area?: string;
  };

  type wpTemplatePartRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** GUID for the revision, as it exists in the database. */
    guid?: string;
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Preview link for the post. */
    preview_link?: string;
  };

  type wpTemplateRevision = {
    /** The ID for the author of the revision. */
    author?: number;
    /** The date the revision was published, in the site's timezone. */
    date?: string;
    /** The date the revision was published, as GMT. */
    date_gmt?: string;
    /** GUID for the revision, as it exists in the database. */
    guid?: string;
    /** Unique identifier for the revision. */
    id?: number;
    /** The date the revision was last modified, in the site's timezone. */
    modified?: string;
    /** The date the revision was last modified, as GMT. */
    modified_gmt?: string;
    /** The ID for the parent of the revision. */
    parent?: number;
    /** An alphanumeric identifier for the revision unique to its type. */
    slug?: string;
    /** Title of template. */
    title?: { raw?: string; rendered?: string };
    /** Content of template. */
    content?: { raw?: string; block_version?: number };
    /** Preview link for the post. */
    preview_link?: string;
  };
}
