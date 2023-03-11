import Head from 'next/head';

import { Test } from '#screens/Test';

const TestPage = () => {
  return (
    <>
      <Head>
        <title>ToDo | Test</title>
        <meta name="description" content="Test page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Test />
    </>
  );
};

export default TestPage;
