import Link from 'next/link';

import S from './Test.module.scss';

export const Test = () => {
  return (
    <main className={S.container}>
      <h1 className={S.title}>Test</h1>

      <div>
        <Link href="/" className={S.link}># Index</Link>
      </div>
    </main>
  );
};
