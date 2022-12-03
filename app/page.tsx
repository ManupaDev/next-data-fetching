import UserBar from "./user-bar";

export default async function Home() {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const num = Math.random() * 100;

  const posts: Post[] = await (
    await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-cache"})
  ).json();

  return (
    <div className="p-4 ">
      <h1>{num}</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, i) => {
          return (
            <div key={i} className="border border-black">
              <UserBar userId={post.userId} />
              <h1 className="text-2xl font-semibold">{post.title}</h1>
              <h1>{post.body}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
