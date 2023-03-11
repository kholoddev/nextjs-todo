import Link from 'next/link';

import S from './Home.module.scss';

export const Home = () => {
  return (
    <main className={S.container}>
      <h1 className={S.title}>Home</h1>

      <div>
        <Link href="/test" className={S.link}># Test</Link>
      </div>
    </main>
  );
};
