import { request } from '@umijs/max';

// /** 此处后端没有提供注释 GET /wp/v2/users */
// export async function getGeneralSettings2(
//     // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
//     params: API.getUsersParams,
//     options?: { [key: string]: any },
// ) {
//     return request<API.user>('/wp/v2/users', {
//         method: 'GET',
//         params: {
//             ...params,
//         },
//         ...(options || {}),
//     });
// }


export async function getGeneralSettings(
    params: { [key: string]: any },
    options?: { [key: string]: any },
){
    return request<API.user>('/wp/v2/general-settings', {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}






// request('/wp/v2/super-admin-video-tutorials', {
//     method: 'GET',
// }).then((api_response) => {
//     console.log('api_response');
//     console.log(api_response);
//
//     const orders_screen_view_video_tutorials_data = {
//         // ...initialValues,
//         orders_screen: {
//             // ...initialValues.orders_screen,
//             view_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'orders_screen_view_video_url') ].video_url,
//         },
//     };
//
//     setOrdersViewVideoTutorials(orders_screen_view_video_tutorials_data);
//
//     console.log('orders_screen_view_video_tutorials_data');
//     console.log(orders_screen_view_video_tutorials_data);
//
// });
