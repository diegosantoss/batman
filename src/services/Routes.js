import React from 'react';
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import Loadable from 'react-loadable';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    basename: '',
    forceRefresh: false
})

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading() {
		return <div>Loading...</div>
	}
})

const Movie = Loadable({
  loader: () => import('../pages/Movie'),
  loading() {
		return <div>Loading...</div>
	}
})

// const Home = React.lazy( () => import('../pages/Home'))
// const Movie = React.lazy( () => import('../pages/Movie'))

export default function Routes(){
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:movie" component={Movie} />
      </Switch>
    </Router>
  )
} 