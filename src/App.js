import './App.css';
import Navbar from "./components/Navbar";
import BookingSummary from './components/BookingSummary';
import DetailsForm from './components/DetailsForm';
import PaymentMode from './components/PaymentMode';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <BookingSummary/>
      <DetailsForm/>
      <PaymentMode/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
