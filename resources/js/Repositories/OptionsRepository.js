export default {
    main() {
        return {
            async index() {
                try {
                    const response = await axios.get(route('api.options.main.index'));
                    return response.data;
                } catch (error) {
                    throw new Error(error.response.data.message);
                }
            },
            async update(params) {
                try {
                    const response = await  axios.put(route('api.options.main.update'), params);
                    return response.data;
                } catch (error) {
                    throw new Error(error.response.data.message);
                }
            },
        }
    },
    // async fetch(params) {
    //     try {
    //         const response = await axios.get(route('api.categories.index', params));
    //         return response.data;
    //     } catch (error) {
    //         throw new Error(error.response.data.message);
    //     }
    // },
    // async update(item) {
    //     try {
    //         const response = await axios.put(route('api.categories.update', item.id), item);
    //         return response.data;
    //     } catch (error) {
    //         return error.response.data;
    //     }
    // },
    // async edit(id) {
    //     try {
    //         const response = await axios.get(route('api.categories.edit', id));
    //         return response.data;
    //     } catch (error) {
    //         return error.response.data;
    //     }
    // },
}
