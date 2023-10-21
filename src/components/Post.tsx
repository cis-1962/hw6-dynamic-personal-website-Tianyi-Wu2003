import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { editPost, deletePost, PostType } from '../features/postsSlice';

function Post({ post }: { post: PostType }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedImg, setEditedImg] = useState(post.img);
  const [editedDesc, setEditedDesc] = useState(post.description);
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(deletePost(post));
  };

  const onEdit = () => {
    dispatch(
      editPost({
        id: post.id,
        title: editedTitle,
        img: editedImg,
        description: editedDesc,
      }),
    );
    setIsEditing(false);
  };

  const onCancel = () => {
    setEditedTitle(post.title);
    setEditedImg(post.img);
    setEditedDesc(post.description);
    setIsEditing(false);
  };

  return (
    <div className=" h-68">
      {isEditing ? (
        <div className="h-full p-2 bg-sky-50 border-4 border-white rounded-lg shadow">
          <form className="flex flex-col mb-2">
            <label htmlFor="postTitle">
              Post Title:
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
              />
            </label>
            <label htmlFor="postImage">
              Post Image:
              <input
                type="text"
                id="postImage"
                name="postImage"
                value={editedImg}
                onChange={(e) => setEditedImg(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
              />
            </label>
            <label htmlFor="postDesc">
              Description:
              <input
                type="text"
                id="postDesc"
                name="postDesc"
                value={editedDesc}
                onChange={(e) => setEditedDesc(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 block"
              />
            </label>
          </form>
          <button
            type="button"
            onClick={onEdit}
            className="h-6 mr-1 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-3 border border-blue-500 hover:border-transparent rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="h-6 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white px-3 border border-blue-500 hover:border-transparent rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="mt-2 w-40 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white px-3 border border-red-500 hover:border-transparent rounded"
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="h-full p-2 bg-sky-50 border-4 border-white rounded-lg shadow">
          <div key={post.id}>
            <h3 className="mb-2 font-normal tracking-tight text-gray-800">
              Post # {post.id} : {post.title}
            </h3>
            <img className="rounded-t-lg" src={post.img} alt="" />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {post.description}
            </p>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3 border border-blue-500 hover:border-transparent rounded"
            >
              Edit Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
