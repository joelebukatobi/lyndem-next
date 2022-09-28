// Next JS
import Head from 'next/head';
import { useRouter } from 'next/router';
// Components
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Video from '@/components/Video';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';

export default function Layout({ children, link, title, image, description, keywords }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://xpathedge.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content={keywords} />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Navbar />
      {router.pathname === '/' && <Hero />}
      {(router.pathname === '/about' || router.pathname === '/services' || router.pathname === '/games') && (
        <Header title={title} image={image} link={link} />
      )}
      <Container>{children}</Container>

      {router.pathname === '/' && <Video />}
      {router.pathname === '/' && <Gallery />}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Lyndem Edutainment',
  description:
    'Tailor-made technological solutions, creative expressions, and flawless executions. Let’s disrupt the norm, together.',
  keywords:
    'web development, web design, software development, branding, identity branding, mobile app development, mobile app design, ui/ux design, IT consultancy,',
};
