import { Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Products from './pages/products';
import MainHeader from './Header/MainHeader';

function App() {
  return (
    <>
    <header>
      <MainHeader />
    </header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </>
  );
}

export default App;
