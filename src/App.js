import { Route, Switch } from 'react-router-dom';

import TasksPage from './pages/Tasks';
import AboutPage from './pages/About';
import Layout from './components/layout/Layout';

function App() {
  return( 
      <Layout className = "h-screen">
        <Switch>
          <Route path='/' exact>
                  <TasksPage />
          </Route>
          <Route path='/about'>
                  <AboutPage />
          </Route>
        </Switch>
      </Layout>
  
  );
}

export default App;
