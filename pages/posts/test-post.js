import Head from 'next/head'
import Link from 'next/link'

export default function TestPost() {
  return (
    <>
      <Head>
        <title>Test post</title>
      </Head>
      <h1>Test Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
