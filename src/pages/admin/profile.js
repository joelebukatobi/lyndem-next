// React JS
import { useState, useContext } from 'react';

// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';

// Config
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';

// Components
import Layout from '@/components/layout/Dashboard';
import Welcome from '@/components/dashboard/Welcome';
import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Label from '@/components/elements/Label';

// Context
import AuthContext from '@/context/AuthContext';

// External Libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile({ token }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [photo, setPhoto] = useState();
  // const [newPassword, setNewPassword] = useState();
  // const [currentPassword, setCurrentPassword] = useState();

  const updateDetails = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/backend/api/v1/users/${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });

    if (res.ok) {
      toast.success('Your profile has been updated');
      setTimeout(() => {
        router.push('/admin');
      }, 5000);
    }
  };

  const changeHandler = (e) => {
    setPhoto(e.target.files[0]);
  };

  const updatePhoto = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('files', photo);
    const res = await fetch(`${API_URL}/backend/api/v1/users/${user._id}/photo`, {
      method: 'PUT',
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      toast.success('Your profile has been updated');
      setTimeout(() => {
        router.push('/admin');
      }, 5000);
    }
  };

  return (
    <Layout>
      <Welcome />
      <ToastContainer />
      <div className={'w-full bg-white mt-[2.4rem] p-[2.4rem] rounded-[1rem]'}>
        <form onSubmit={updateDetails}>
          {user && (
            <header className="p-[0] mb-[2.4rem] flex justify-between">
              <div className="">
                <h4>{`${user.name.substring(0, user.name.indexOf(' '))}'s`} Profile</h4>
                <h5>Edit your profile using the form below</h5>
              </div>
            </header>
          )}
          <hr className="bg-black/25" />
          <div className="input-group ">
            <div className="w-full flex flex-col">
              <Label htmlFor={'name'} className={'text-black'}>
                Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type={'text'}
                id={'name'}
                name={'name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={'w-[100%] placeholder:text-black/50 text-black'}
                required={'required'}
              />
            </div>
          </div>
          <div className="input-group ">
            <div className="w-full flex flex-col">
              <Label htmlFor={'email'} className={'text-black'}>
                Email <span className="text-red-600">*</span>
              </Label>
              <Input
                type={'email'}
                id={'email'}
                name={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={'w-[100%] placeholder:text-black/50 text-black'}
                required={'required'}
              />
            </div>
          </div>
          <div className="input-group">
            <Button type={'submit'} className={'bg-green-600 text-white w-full'}>
              Save Changes
            </Button>
          </div>
        </form>
        {/* <form onSubmit={updatePhoto}>
          {user && (
            <header className="p-[0] mb-[2.4rem] flex justify-between">
              <div className="">
                <h4>Update Password</h4>
                <h5>Edit your password below</h5>
              </div>
            </header>
          )}
          <hr className="bg-black/25" />
          <div className="input-group w-full">
            <div className="w-full flex flex-col">
              <Label htmlFor={'photo'} className={'text-black'}>
                User Image <span className="text-red-600">*</span>
              </Label>
              <Input
                type={'file'}
                id={'photo'}
                name={'photo'}
                onChange={changeHandler}
                className={'w-[100%] placeholder:text-black/50 text-black'}
                required={'required'}
              />
            </div>
          </div>
          <Button type={'submit'} className={'bg-green-600 text-white w-full'}>
            Save Changes
          </Button>
        </form> */}
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

  return {
    props: {
      token,
    },
  };
}
