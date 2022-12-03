"use client";

function RandomNum() {
  const num = Math.random() * 100;

  return <h1>{num}</h1>;
}

export default RandomNum;
