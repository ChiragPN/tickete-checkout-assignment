import Navbar from "./components/Navbar";
import BookingSummary from './components/BookingSummary';
import Forms from './components/Forms';
import PaymentMode from './components/PaymentMode';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <BookingSummary/>
      <Forms/>
      <PaymentMode/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
