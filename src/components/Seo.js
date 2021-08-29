import Head from 'next/head';

const Seo = ({ description, title, siteTitle, config }) => (
  <Head>
    <title>{`${title} | ${siteTitle}`}</title>
    <meta name="description" content={description} key="description" />
    <meta property="og:type" content="website" key="website" />
    <meta property="og:title" content={title} key="title" />
    <meta property="og:description" content={description} key="ogDescription" />
    <meta property="og:site_name" content={siteTitle} key="siteTitle" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default Seo;