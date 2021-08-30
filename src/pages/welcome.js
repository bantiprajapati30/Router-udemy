import {Route } from 'react-router-dom';
const Welcome=()=> {
return <div>
    <section>
    <h2>this is welcome page</h2>
      <Route path="/welcome/new-user">
          <p>Hello this is for new users only </p>
          <p>Welcome new user</p>
      </Route>
    </section>
</div>
}
export default Welcome;