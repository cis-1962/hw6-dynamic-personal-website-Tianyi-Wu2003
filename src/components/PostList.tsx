import { useAppSelector } from '../app/hooks';
import PostAdd from './PostAdd';
import Post from './Post';

function PostList() {
  const posts = useAppSelector((state) => state.all.posts);

  return (
    <section className="h-auto min-h-screen p-4 mx-auto bg-sky-50 rounded">
      <PostAdd />
      <h2 className="text-sky-700 text-3xl flex px-10 mt-4"> Posts</h2>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <div>
            <Post key={post.id} post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostList;
