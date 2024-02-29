import { Navigate, Outlet } from '@umijs/max';
// import {getCurrentUser} from "@/services/wp-api/User";
import {getCurrentUser} from "@/components/Helpers/AuthHelpers";

export default (props) => {

  // const fetchUserInfo = async () => {
  //
  //   //   const currentUser = await request('/api/auth/me', {
  //   //       method: 'GET'
  //   //   }).then(async (api_response) => {
  //   //       console.log('/api/auth/me -test = api_response');
  //   //       console.log(api_response);
  //   //   }).catch(function (error) {
  //   //       console.log(error);
  //   //   });
  //   //
  //   // console.log('currentUser');
  //   // console.log(currentUser);
  //
  //   try {
  //
  //     // if( process.env.NODE_ENV === 'development' ){
  //     const currentUser = await getCurrentUser({
  //       // skipErrorHandler: true,
  //       // context: 'edit',
  //     });
  //     console.log('currentUser');
  //     console.log(currentUser);
  //     return currentUser;
  //     // }
  //
  //
  //
  //   } catch (error) {
  //     console.log('fetchUserInfo - error');
  //     console.log(error);
  //     // history.push(loginPath);
  //   }
  //   return undefined;
  // };
  //
  // const current_user =  fetchUserInfo();
  //
  // // const { isLogin } = useAuth();
  // // const isLogin  = false;
  // const isLogin  = current_user;
  // if (isLogin) {

  const laravel_api_bearer_token = localStorage.getItem('laravel_api_bearer_token');
  if ( laravel_api_bearer_token !== "" && laravel_api_bearer_token !== null && laravel_api_bearer_token.length > 0 ) {
    console.log('isLogin - case 01');
    return <Outlet />;
  } else{
    console.log('isLogin - case 02');
    return <Navigate to="/authentication/" />;
  }
}
