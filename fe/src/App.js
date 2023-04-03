import Button from '@mui/material/Button';
import SignIn from './components/SignIn';
import StickyFooter from './components/StickyFooter';
import AppBar from './components/AppBar';

function App() {
  return (
    <div>
      <AppBar></AppBar>
      <SignIn></SignIn>
      <StickyFooter></StickyFooter>
    </div>

  );
}

export default App;
