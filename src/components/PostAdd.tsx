import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addPost } from '../features/postsSlice';

function PostAdd() {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(' ');
  const [image, setImage] = useState(' ');
  const [desc, setDesc] = useState(' ');

  const onSavePost = () => {
    if (title && image && desc) {
      dispatch(
        addPost({
          title,
          img: image,
          description: desc,
        }),
      );
    }

    setTitle(' ');
    setImage(' ');
    setDesc(' ');
  };

  return (
    <section>
      <h2 className="text-xl text-cyan-700"> Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">
          Post Title:
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-96 bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
          />
        </label>
        <label htmlFor="postImage">
          Post Image:
          <input
            type="text"
            id="postImage"
            name="postImage"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-96 bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
          />
        </label>
        <label htmlFor="postDesc">
          Description:
          <input
            type="text"
            id="postDesc"
            name="postDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className=" w-96 bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
          />
        </label>
      </form>
      <button
        type="button"
        onClick={onSavePost}
        className="m-2 h-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 border border-blue-500 hover:border-transparent rounded"
      >
        Save
      </button>
    </section>
  );
}

export default PostAdd;
