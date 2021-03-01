import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import nextConfig from '../next.config'
import React from 'react'

const name = 'Lorem Ipsum'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home}: { children: React.ReactNode, home?: boolean }) {
  const isProd = process.env.NODE_ENV === 'production';
  const assetSuffix = isProd ? '' : '-dev';
  const containsKatex = () => {
    // TODO: Check if DOM contains an element with class "katex".
    /*
    const containsKatexCore = function (node: React.ReactNode): boolean {
      const span = node as HTMLSpanElement;
      if (span && span.className === 'katex')
        return true;

      const items: Array<React.ReactNode> = React.Children.toArray(node);
      for (const item of items) {
        if (containsKatexCore(item))
          return true;
      }

      return false;
    };

    return containsKatexCore(children);
     */
    /*
    const containsKatexSelf = function (node: React.ReactNode): boolean {
      const span = node as HTMLSpanElement;
      return span && span.className === 'katex';
    }

    const explored = new Set<React.ReactNode>();
    explored.add(children);
    const fringe: Array<React.ReactNode> = [];
    fringe.push(children);
    while (fringe.length > 0) {
      const node: React.ReactNode = fringe.pop();
      if (containsKatexSelf(children))
        return true;

      const items: Array<React.ReactNode> = React.Children.toArray(node);
      for (const item of items) {
        if (!explored.has(item)) {
          explored.add(item);
          fringe.push(item);
        }
      }
    }

    return false;
     */
    return true;
  };
  const needsKatex = !home && containsKatex();
  return (
    <div className={styles.container}>
      <Head>
        {!isProd && (<link rel="icon" href="/favicon.ico" />)}
        {needsKatex && (<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />)}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src={`${nextConfig.basePath}/images/profile${assetSuffix}.png`}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <pre>{`nextConfig: ${JSON.stringify(nextConfig)}`}</pre>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src={`${nextConfig.basePath}/images/profile${assetSuffix}.png`}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            <pre>{`nextConfig: ${JSON.stringify(nextConfig)}`}</pre>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
