import api from "./api";

const ChecklistService = {
  getChecklists: async () => {
    return (await api.get("/checklist")).data.data;
  },

  postChecklist: async (name) => {
    return await api.post("/checklist/", {
      name
    });
  },

  deleteChecklist: async (id) => {
    return api.delete("/checklist/" + id);
  },
};

export default ChecklistService;
