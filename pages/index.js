import Link from "next/link";
import { Layout } from "../components/layout";

export default function IndexPage() {
  async function sayHi() {
    const response = await fetch("/api/helloWorld");
    const json = await response.json();
    alert(`Hi, ${json.name}`);
  }

  return (
    <Layout>
      <div>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        <Link href="/day">
          <a>Day</a>
        </Link>
      </div>

      <button onClick={sayHi}>say hi</button>
    </Layout>
  );
}
