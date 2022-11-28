import { Modal } from "flowbite-react";
import React, { useState } from "react";
import ChecklistItemService from "../services/checklistItem.service";

const ChecklistRename = ({ show, setShow, itemId, checklistId }) => {
  const [name, setName] = useState("");

  const onSubmit = async () => {
    await ChecklistItemService.renameItem(checklistId, itemId, name);
    setShow(false);
  };

  return (
    <React.Fragment>
      <Modal show={show} size="xl" popup={true}>
        <Modal.Body>
          <div class="relative">
            <input
              type="text"
              id="floating_filled"
              class="block break-words rounded-lg px-2.5  w-full pb-2.5 pt-5 text-sm text-gray-900 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="floating_filled"
              class="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              New Name
            </label>
          </div>
          <button onClick={onSubmit}>Submit</button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ChecklistRename;
