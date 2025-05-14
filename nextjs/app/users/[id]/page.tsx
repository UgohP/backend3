interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();

  const user = users.find((user) => user.id === parseInt(params.id));

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default Page;
