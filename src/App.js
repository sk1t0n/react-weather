import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';

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
