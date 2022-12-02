/*
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
}*/
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [posts, setPosts] = useState<Post[] | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  });

  // const posts:Post[] = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  if (posts) {
    return (
      <div className="p-4 grid grid-cols-3 gap-4">
        {posts.map((post, i) => {
          return (
            <div key={i} className="border border-black">
              <h1>UserId:{post.userId}</h1>
              <h1>PostId:{post.id}</h1>
              <h1>{post.title}</h1>
              <h1>{post.body}</h1>
            </div>
          );
        })}
      </div>
    );
  }else{
    return (
      <div>Loading</div>   
     )
  }
}
