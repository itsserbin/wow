const CharacteristicsRepository = () => {
  return {
    list: async function() {
      try {
        const response = await axios.get(route("api.characteristics.list"));
        return response.data;
      } catch (err) {
        return console.error(err);
      }
    },
    fetch: async function(params) {
      try {
        const response = await axios.get(route("api.characteristics.index", params));
        return response.data;
      } catch (err) {
        return console.error(err);
      }
    },
    create: async function(data) {
      try {
        const response = await axios.post(route("api.characteristics.create"), data);
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    },
    edit: async function(id) {
      try {
        const response = await axios.get(route("api.characteristics.edit", id));
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    },
    destroy: async function(id) {
      try {
        const response = await axios.delete(route("api.characteristics.destroy", id));
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    },
    update: async function(id, data) {
      try {
        const response = await axios.put(route("api.characteristics.update", id), data);
        return response.data;
      } catch (e) {
        return console.log(e);
      }
    }
  };
};
export {
  CharacteristicsRepository as C
};
