/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
// export default function access(initialState: { currentUser?: API.User } | undefined) {
//   const { currentUser } = initialState ?? {};
//   return {
//     // canAdmin: currentUser && currentUser.access === 'admin',
//
//     // isSuperAdmin: currentUser && currentUser?.capabilities?.publish_ech_customer_policies,
//     isSuperAdmin: true,
//
//   };
// }

export default function access(initialState) {
  // const {currentUser} = initialState ?? {};
  return {
    // canAdmin: currentUser && currentUser.access === 'admin',

    isAdministrator: initialState?.isAdministrator,
    isUser: initialState?.isUser,
    // isSuperUser: initialState?.isSuperUser,
    // isStaffMember: initialState?.isStaffMember,
    // isSuperAdmin: true,

  };
}
