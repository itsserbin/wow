export const ProductsRepository = () => {
    return {
        list: async function () {
            try {
                const response = await axios.get(route('api.products.list'));
                return response.data;
            } catch (err) {
                return console.error(err)
            }
        },
        fetch: async function (params) {
            try {
                const response = await axios.get(route('api.products.index', params));
                return response.data;
            } catch (err) {
                return console.error(err)
            }
        },
        create: async function (data) {
            try {
                const response = await axios.post(route('api.products.create'), data);
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        },
        edit: async function (id) {
            try {
                const response = await axios.get(route('api.products.edit', id));
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        },
        destroy: async function (id) {
            try {
                const response = await axios.delete(route('api.products.destroy', id))
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        },
        update: async function (id, data) {
            try {
                const response = await axios.put(route('api.products.update', id), data)
                return response.data;
            } catch (e) {
                return console.log(e);
            }
        },
        v1: function () {
            return {
                async category(params) {
                    try {
                        const response = await axios.get(route('api.v1.products.category', params));
                        return response.data;
                    } catch (e) {
                        return console.log(e);
                    }
                }
            }
        }
    };
};
