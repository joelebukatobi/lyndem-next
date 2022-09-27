import { AuthProvider } from '../context/AuthContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
