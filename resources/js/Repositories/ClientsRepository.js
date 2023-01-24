export const ClientsRepository = () => {
    return {
        fetch: async function (params) {
            try {
                const response = await axios.get(route('api.clients.index', params));
                return response.data;
            } catch (err) {
                return console.error(err)
            }
        },
        edit: async function (id) {
            try {
                const response = await axios.get(route('api.clients.edit', id));
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        },
        destroy: async function (id) {
            try {
                const response = await axios.delete(route('api.clients.destroy', id))
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        },
        update: async function (id, data) {
            try {
                const response = await axios.put(route('api.clients.update', id), data)
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        },
        search: async function (query) {
            try {
                const response = await axios.get(route('api.clients.search', query))
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        }
    };
};
