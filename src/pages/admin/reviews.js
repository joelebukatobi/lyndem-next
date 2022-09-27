import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';
import Layout from '@/components/layout/Dashboard';
import Welcome from '@/components/dashboard/Welcome';
import Table from '@/components/dashboard/Table';
export default function Reviews({ reviews }) {
  return (
    <Layout>
      <Welcome />
      <div className="w-full flex">
        <Table info={reviews} title="Recent Reviews" caption="Here's a list of your recent reviews" />
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
  const res = await Promise.all([fetch(`${API_URL}/api/v1/reviews`)]);
  const info = await Promise.all(res.map((res) => res.json()));

  return {
    props: {
      token,
      reviews: info[0],
    },
  };
}
