export default async function Home() {

  interface Post {
    userId:number;
    id:number;
    title:string;
    body:string;
  }

  const posts:Post[] = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {
        posts.map((post,i)=>{
          return(
            <div key={i} className="border border-black">
              <h1>UserId:{post.userId}</h1>
              <h1>PostId:{post.id}</h1>
              <h1>{post.title}</h1>
              <h1>{post.body}</h1>
            </div>
          );
        })
      }
    </div>
  )
}

