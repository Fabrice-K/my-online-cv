import Head from 'next/head';

type SeoProps = {
  description: string;
  siteTitle: string;
  siteName: string;

}

const Seo = ({ description, siteTitle, siteName }: SeoProps) => (
  <Head>
    <title>{`${siteTitle} | ${siteName}`}</title>
    <meta name="description" content={description} key="description" />
    <meta property="og:type" content="website" key="website" />
    <meta property="og:title" content={siteTitle} key="title" />
    <meta property="og:description" content={description} key="ogDescription" />
    <meta property="og:site_name" content={siteName} key="name" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default Seo;