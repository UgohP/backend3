import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  username: string
}

const Page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();
  return (
    <>
      <div>
        {users.map((user) => (
            <li key={user.id}><Link href={`/users/${user.id}`}>{user.username}</Link></li>
        ))}
      </div>
    </>
  );
};

export default Page;
