import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form/Form';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container mt-5">
        <Form />
      </main>
    </div>
  );
}

export default App;
