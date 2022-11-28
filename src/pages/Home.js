import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChecklistService from "../services/checklist.service";

const Home = () => {
  const navigate = useNavigate();
  const [checklists, setChecklists] = useState([]);
  const [newChecklist, setNewChecklist] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    getChecklists();
  }, []);

  useEffect(() => {
    console.log(checklists);
  }, [checklists]);

  const getChecklists = async () => {
    setChecklists(await ChecklistService.getChecklists());
  };

  const pushNewChecklist = async () => {
    await ChecklistService.postChecklist(newChecklist);
    getChecklists();
  };

  const deleteChecklist = async (id) => {
    await ChecklistService.deleteChecklist(id);
    getChecklists();
  };
  
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex">
        <div className="flex flex-col gap-4">
          <div>Checklists: </div>
          {checklists.map((obj, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex flex-row gap-4  justify-center">
                <input
                  type="checkbox"
                  checked={obj.checklistCompletionStatus}
                  readOnly
                />
                <Link
                  to={`/checklist/${obj.id}`}
                  className="underline cursor-pointer"
                >
                  {obj.name}
                </Link>
                <button
                  className="bg-red-200 rounded-lg"
                  onClick={() => deleteChecklist(obj.id)}
                >
                  Delete
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
          value={newChecklist}
          onChange={(e) => setNewChecklist(e.target.value)}
        />
        <button
          className="bg-gray-200 rounded-lg mt-4"
          onClick={pushNewChecklist}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Home;
