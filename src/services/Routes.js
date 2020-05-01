import React from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    basename: '',
    forceRefresh: false,
    queryKey: false
})

const Home = React.lazy( () => import('../pages/Home'))
const Movie = React.lazy( () => import('../pages/Movie'))

export default function Routes(){
  return (
    <Router history={ history }>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:id" component={Movie} />
        </Switch>
      </React.Suspense>
    </Router>
  )
} 