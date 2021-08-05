import {
    Switch,
    Route,
  } from "react-router-dom";
  import Home from '../pages/Home';
  import About from '../pages/About';
  import Layout from '../layout/Layout';
  import Blogs from '../pages/Blogs';
  import BlogDetailIndex from '../pages/BlogDetail';
  
  const Routes = () => {
     return(
      <Switch>
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/blogs" component={Blogs}/>
            <Route exact path="/blogs/:id" component={BlogDetailIndex}/>
          </Layout>
      </Switch>
     )
  }
  
  export default Routes;