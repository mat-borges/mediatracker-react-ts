import HomeLoggedIn from './LoggedIn';
import SignInPage from '../SignInPage';

export default function HomePage() {
  if (localStorage.user) {
    return <HomeLoggedIn />;
  } else {
    // return <SignInPage />;
    return <HomeLoggedIn />;
  }
}
