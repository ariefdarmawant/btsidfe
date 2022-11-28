import api from "./api";

const ChecklistItemService = {
  getChecklistItems: async (id) => {
    return (await api.get(`/checklist/${id}/item`)).data.data;
  },

  postChecklistItem: async (id, itemName) => {
    return await api.post(`/checklist/${id}/item`, {
      itemName
    });
  },

  getChecklistItem: async (id, itemId) => {
    return api.get(`/checklist/${id}/item/${itemId}`);
  },

  updateChecklistItem: async (id,itemId) => {
    return api.put(`/checklist/${id}/item/${itemId}`);
  },

  deleteChecklistItem: async (id, itemId) => {
    return api.delete(`/checklist/${id}/item/${itemId}`);
  },

  renameItem: async (id,itemId, itemName) => {
    return api.put(`/checklist/${id}/item/rename/${itemId}`, {
        itemName
    })
  }
};

export default ChecklistItemService;
