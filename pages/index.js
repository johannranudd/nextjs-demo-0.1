import Head from 'next/head';
import { StyledDiv } from '../styles/index.styles';

export default function Home() {
  return (
    <StyledDiv>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='section-center'>
        <h1>hello</h1>
      </section>
    </StyledDiv>
  );
}
