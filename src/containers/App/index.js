import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { InfoPage } from '../../pages/InfoPage';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="container mt-5">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/info">
            <InfoPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
