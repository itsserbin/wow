export default {
    async fetch(params) {
        try {
            const response = await axios.get(route('api.pages.index', params));
            return response.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    async destroy(id) {
        try {
            const response = await axios.delete(route('api.pages.destroy', id));
            return response.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    async edit(id) {
        try {
            const response = await axios.get(route('api.pages.edit', id));
            return response.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    async update(item) {
        try {
            const response = await axios.put(route('api.pages.update', item.id), item);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    async create(item) {
        try {
            const response = await axios.post(route('api.pages.create'), item);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
};
