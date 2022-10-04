import { useContext } from 'react';
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';
import AuthContext from '@/context/AuthContext';
import Layout from '@/components/layout/Dashboard';
import Welcome from '@/components/dashboard/Welcome';
import Table from '@/components/dashboard/Table';
export default function Question({ questions }) {
  const { user, logout } = useContext(AuthContext);
  return (
    <Layout>
      <Welcome />
      <div className="w-full flex">
        <Table
          info={questions}
          title="Game Questions"
          caption="Here's a list of your recent games, select the one you'd like to  add questions to or edit existing questions"
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/admin/login',
      },
    };
  }
  const res = await Promise.all([fetch(`${API_URL}/backend/api/v1/games`)]);
  const info = await Promise.all(res.map((res) => res.json()));

  return {
    props: {
      token,
      questions: info[0],
    },
  };
}
