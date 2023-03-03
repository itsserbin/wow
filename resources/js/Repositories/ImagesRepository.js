export default {
    async fetch(params) {
        try {
            const response = await axios.get(route('api.images.index', params));
            return response.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    async destroy(id) {
        try {
            const response = await axios.delete(route('api.images.destroy', id));
            return response.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
    async update(item) {
        try {
            const response = await axios.put(route('api.images.update', item.id), item)
            return response.data;
        } catch (error) {
            throw new Error(error.response.data);
        }
    },
};
