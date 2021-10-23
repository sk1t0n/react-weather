import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { InfoPage } from '../../pages/InfoPage';
import { NotFoundPage } from '../../pages/404';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/info" component={InfoPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
