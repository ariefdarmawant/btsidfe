import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChecklistRenameModal from "../components/ChecklistRename";
import ChecklistService from "../services/checklist.service";
import ChecklistItemService from "../services/checklistItem.service";

const ChecklistItem = () => {
  const { id: checklistId } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [newItem, setNewChecklist] = useState("");
  const [curEdit, setCurEdit] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getChecklistItems();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    getChecklistItems();
  },[show])

  const getChecklistItems = async () => {
    setItems(await ChecklistItemService.getChecklistItems(checklistId));
  };

  const pushNewChecklist = async () => {
    await ChecklistItemService.postChecklistItem(checklistId, newItem);
    getChecklistItems();
  };

  const deleteChecklistItem = async (itemId) => {
    await ChecklistItemService.deleteChecklistItem(checklistId, itemId);
    getChecklistItems();
  };

  const updateItem = async (itemId) => {
    await ChecklistItemService.updateChecklistItem(checklistId, itemId);
    getChecklistItems();
  };

  const renameItem = async (itemId, itemName) => {
    await ChecklistItemService.renameItem(checklistId, itemId, itemName);
    getChecklistItems();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex">
        <div className="flex flex-col gap-4">
          <div>Checklist Item: </div>
          {items.map((obj, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex flex-row gap-4  justify-center">
                <input
                  type="checkbox"
                  checked={obj.itemCompletionStatus}
                  onChange={() => updateItem(obj.id)}
                  readOnly
                />
                <div className="text-lg">{obj.name}</div>
                <button
                  className="bg-red-200 rounded-lg"
                  onClick={() => deleteChecklistItem(obj.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-200 rounded-lg"
                  onClick={() => {
                    setCurEdit(obj.id);
                    setShow(true);
                  }}
                >
                  Rename
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div>Create new checklist</div>
        <input
          type="text"
          placeholder="checklist name"
          value={newItem}
          onChange={(e) => setNewChecklist(e.target.value)}
        />
        <button
          className="bg-gray-200 rounded-lg mt-4"
          onClick={pushNewChecklist}
        >
          Create
        </button>
      </div>
      <ChecklistRenameModal
        itemId={curEdit}
        checklistId={checklistId}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default ChecklistItem;
