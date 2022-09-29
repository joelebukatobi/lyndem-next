// React JS
import { useState } from 'react';

// Next JS
import { useRouter } from 'next/router';
// Config
import { API_URL } from '@/config/index';

// Components
import Layout from '@/components/layout/Layout';
import Input from '@/components/elements/Input';
import Button from '@/components/elements/Button';

export default function about({ games }) {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };
  console.log(games.data);
  return (
    <Layout title={'Games'}>
      <form onSubmit={handleSubmit} className="h-[50vh] flex items-center justify-center">
        <Input />
        <Button className={'bg-[#0202cb] text-white px-[2.4rem]'}>Search</Button>
      </form>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = JSON.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await Promise.all([
    fetch(`${API_URL}/api/v1/games/632b4ceee627b7fc854e2039/questions`),
    fetch(`${API_URL}/api/v1/questions`),
  ]);

  const info = await Promise.all(res.map((res) => res.json()));
  console.log(info[0]);

  return {
    props: {
      games: info[0],
    },
  };
}
