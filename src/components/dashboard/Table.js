import Link from 'next/link';
import { useRouter } from 'next/router';
import moment from 'moment';
import { data } from 'autoprefixer';
import Button from '@/components/elements/Button';
export default function Table({ info, title, caption, link, modal }) {
  const router = useRouter();
  return (
    <div className="w-full bg-white mt-[2.4rem] p-[2.4rem] rounded-[1rem]">
      <header className="p-[0] mb-[2.4rem] flex justify-between">
        <div className="">
          <h4>{title}</h4>
          <h5>{caption}</h5>
        </div>
        <div className="">
          {router.pathname === '/admin/games' && (
            <Button
              className={'bg-green-600 text-white px-[2.4rem] capitalize'}
              onClick={(e) => (e.preventDefault(), router.push(`/admin/${link}/create`))}
            >
              Create {`${link}`}
            </Button>
          )}
        </div>
      </header>
      {(router.pathname === '/admin/games' || router.pathname === '/admin') && (
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="w-[2.4rem]">ID</th>
              <th>Games</th>
              <th>Questions</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>

          {info.data.map((data, count = 1) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{`${count + 1}`}</td>
                    <td className="capitalize">{data.name}</td>
                    <td>{data.questions.length}</td>
                    <td>{moment(data.createdAt).format('L')}</td>
                    <td className="text-green-600 font-bold">
                      <Link onClick={(e) => (modal = true)} href={`/admin/games/${data.id}`}>
                        -&gt;
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      )}

      {router.pathname === '/admin/questions' && (
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="w-[2.4rem]">ID</th>
              <th>Games</th>
              <th>Questions</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>

          {info.data.map((data, count = 1) => {
            return (
              <tbody>
                <tr key={count}>
                  <td>{count + 1}</td>
                  <td className="capitalize">{data.name}</td>
                  <td>{data.questions.length}</td>
                  <td>{moment(data.createdAt).format('L')}</td>
                  <td className="text-green-600 font-bold">
                    <Link href={`/admin/questions/${data._id}`}>-&gt;</Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </div>
  );
}
