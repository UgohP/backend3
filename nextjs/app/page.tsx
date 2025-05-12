import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-5">
      <h1>Hello World</h1>
      <Link href="/about">
        <h1>About</h1>
      </Link>
    </div>
  );
}
