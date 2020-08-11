import Head from "next/head";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My app</title>
      </Head>

      <div className="layout">{children}</div>
    </>
  );
}
