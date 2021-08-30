import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/welcome";
import Products from "./pages/products";
import MainHeader from "./Header/MainHeader";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            {/* here is colon ":" mandotory bcz we are add other path */}
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
