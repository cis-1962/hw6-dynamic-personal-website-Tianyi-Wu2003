import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import IntroductionForm from './IntroductionForm';

function Introduction() {
  const [isEditing, setIsEditing] = useState(false);

  const changeEditState = () => {
    setIsEditing(!isEditing);
  };

  const introImg = useAppSelector((state) => state.introduction.img);
  const introDesc = useAppSelector((state) => state.introduction.description);

  return (
    <div className=" p-4 mx-auto bg-sky-100 rounded">
      <div className=" flex items-center justify-center">
        <div className="flex-1" />
        <h1 className=" text-sky-700 text-5xl flex justify-center"> Hi~</h1>
        <div className="flex-1">
          {!isEditing && (
            <button
              type="button"
              className=" absolute right-40 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 border border-blue-500 hover:border-transparent rounded"
              onClick={changeEditState}
            >
              {' '}
              Edit
            </button>
          )}
        </div>
      </div>

      {isEditing ? (
        <>
          <div>
            <img className=" rounded" src={introImg} alt="pic" />
          </div>
          <IntroductionForm changeEditState={setIsEditing} />
        </>
      ) : (
        <div className="mt-10 px-10 flex flex-row space-x-10">
          <div>
            <img className=" rounded" src={introImg} alt="pic" />
          </div>
          <div>
            <h5 className="text-gray-600 text-lg">{introDesc}</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default Introduction;
