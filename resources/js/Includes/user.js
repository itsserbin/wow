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
        }
    },
});

export default user;
