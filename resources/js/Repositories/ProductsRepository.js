export default {
    async list() {
        try {
            const response = await axios.get(route('api.products.list'));
            return response.data;
        } catch (e) {
            throw new Error(e.response.data);
        }
    },
    async fetch(params) {
        try {
            const response = await axios.get(route('api.products.index', params));
            return response.data;
        } catch (e) {
            throw new Error(e.response.data);
        }
    },
    async search(query) {
        try {
            const response = await axios.get(route('api.products.search', query));
            return response.data;
        } catch (e) {
            throw new Error(e.response.data);
        }
    },
    async create(data) {
        try {
            const response = await axios.post(route('api.products.create'), data);
            return response.data;
        } catch (e) {
            return console.log(e);
        }
    },
    async edit(id) {
        try {
            const response = await axios.get(route('api.products.edit', id));
            return response.data;
        } catch (e) {
            throw new Error(e.response.data);
        }
    },
    async destroy(id) {
        try {
            const response = await axios.delete(route('api.products.destroy', id))
            return response.data;
        } catch (e) {
            throw new Error(e.response.data);
        }
    },
    async update(item) {
        try {
            const response = await axios.put(route('api.products.update', item.id), item)
            return response.data;
        } catch (e) {
            return console.log(e);
        }
    },
    async updateSort(id, sort) {
        try {
            const response = await axios.post(route('api.products.sort.update', id), {sort: sort});
            return response.data;
        } catch (e) {
            return console.log(e);
        }
    },
    v1() {
        return {
            async category(params) {
                try {
                    const response = await axios.get(route('api.v1.products.category', params));
                    return response.data;
                } catch (e) {
                    throw new Error(e.response.data);
                }
            }
        }
    }
}
