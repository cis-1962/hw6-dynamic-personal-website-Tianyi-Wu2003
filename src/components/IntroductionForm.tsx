import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { save } from '../features/introductionSlice';

function IntroductionForm({
  changeEditState,
}: {
  changeEditState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

  const img = useAppSelector((state) => state.introduction.img);
  const description = useAppSelector((state) => state.introduction.description);
  const [editedImg, setEditedImg] = useState(img);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    dispatch(save({ img: editedImg, description: editedDescription }));
    changeEditState(false);
  };

  const handleCancel = () => {
    setEditedImg(img);
    setEditedDescription(description);
    changeEditState(false);
  };

  return (
    <div className=" px-10 mt-5">
      <label
        htmlFor="Image"
        className=" mb-4 text-lg text-gray-600 dark:text-white block"
      >
        Image
        <input
          type="text"
          name="img"
          value={editedImg}
          onChange={(e) => setEditedImg(e.target.value)}
          className=" w-full h-10 bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
        />
      </label>
      <label
        htmlFor="Description"
        className=" mb-4 text-lg text-gray-700 dark:text-white block"
      >
        Descriptioin
        <input
          type="text"
          name="description"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className=" w-full h-10 bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
        />
      </label>
      <div className=" space-x-5">
        <button
          type="button"
          onClick={handleSave}
          className="h-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 border border-blue-500 hover:border-transparent rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="h-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 border border-blue-500 hover:border-transparent rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default IntroductionForm;
