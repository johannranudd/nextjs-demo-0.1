import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.div`
  .section-center {
    display: grid;
    place-items: center;
    padding-top: 5rem;
  }
`;

export default function Home() {
  return (
    <StyledDiv>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='section-center'>
        <h1>Home</h1>
        <div>
          <Link href={`/events`}>Browse All Events</Link>
        </div>
      </section>
    </StyledDiv>
  );
}
