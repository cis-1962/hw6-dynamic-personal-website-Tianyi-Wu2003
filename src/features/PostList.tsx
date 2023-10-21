import { useAppSelector } from '../app/hooks';

function PostList() {
  const posts = useAppSelector((state) => state.all.posts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <img className="profile-photo" src={post.img} alt="new" />
      <p>{post.description}</p>
    </article>
  ));

  return (
    <section>
      <h2> Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostList;
