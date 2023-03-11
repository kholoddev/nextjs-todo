import Head from 'next/head';

import { Home } from '#screens/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ToDo | Home</title>
        <meta name="description" content="Index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
