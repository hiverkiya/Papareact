import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div> Homepage</div>
      <Link href="/search">
        <button className="btn">Search page</button>
      </Link>
    </div>
  );
}
