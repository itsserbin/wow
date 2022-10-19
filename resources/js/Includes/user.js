// import {reactive, provide, inject} from 'vue';
//
// const user = {
//     roles: [],
//     permissions: []
// }
//
// export function getUser() {
//     axios.get('/api/users/get')
//         .then(({data}) => {
//             if (data.result.roles.length) {
//                 data.result.roles.forEach((item) => {
//                     user.roles.push(item.slug);
//                     item.permissions.forEach((permission_item) => {
//                         user.permissions.push(permission_item.slug)
//                     })
//                 });
//
//                 user.permissions = user.permissions.reduce((acc, item) => {
//                     if (acc.includes(item)) {
//                         return acc;
//                     }
//                     return [...acc, item];
//                 }, []);
//             }
//         })
//         .catch((response) => console.log(response))
// }
//
// export const stateSymbol = Symbol('state');
// export const createState = () => reactive({
//     roles: user.roles,
//     permissions: user.permissions
// });
//
// export function can(val) {
//     return user.permissions.includes(val);
// }
//
// export const useState = () => inject(stateSymbol);
// export const provideState = () => provide(
//     stateSymbol,
//     can,
//     getUser,
//     createState()
// );

import {createStore} from 'vuex'

let user = createStore({
    debug: true,
    state: {
        roles: [],
        permissions: [],
    },
    mutations: {
        load(state) {
            axios.get('/api/users/get')
                .then(({data}) => {
                    if (data.result.roles.length) {
                        data.result.roles.forEach((item) => {
                            state.roles.push(item.slug);
                            item.permissions.forEach((permission_item) => {
                                state.permissions.push(permission_item.slug)
                            })
                        });

                        state.permissions = state.permissions.reduce((acc, item) => {
                            if (acc.includes(item)) {
                                return acc;
                            }
                            return [...acc, item];
                        }, []);
                    }
                })
                .catch((response) => console.log(response))
        },
        can(val, state) {
            return state.permissions.includes(val);
        }
    },
});

export default user;
