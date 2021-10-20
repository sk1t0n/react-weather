import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { Form } from '../../components/Form';
import { Footer } from '../../components/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mt-5">
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
