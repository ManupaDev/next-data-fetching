function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}

const UserBar = asyncComponent(async ({ userId }: { userId: number }) => {
  const [user] = await (
    await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
  ).json();
  console.log(user);

  return <h1>{user.name}</h1>;
});

export default UserBar;
