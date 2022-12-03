import UserBar from './user-bar';

export default async function Home() {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const posts: Post[] = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {posts.map((post, i) => {
        return (
          <div key={i} className="border border-black">
            <UserBar userId={post.userId}/>
            <h1 className='text-2xl font-semibold'>{post.title}</h1>
            <h1>{post.body}</h1>
          </div>
        );
      })}
    </div>
  );
}
