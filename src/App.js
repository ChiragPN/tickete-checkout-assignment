import Navbar from "./components/Navbar";
import BookingSummary from './components/BookingSummary/BookingSummary';
import Forms from './components/Forms/Forms';
import PaymentMode from './components/PaymentMode/PaymentMode';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container frame-804'>

      <div className="frame-806">
        <Navbar/>
      </div>

      <div className="frame-808 md:flex md:flex-row-reverse md:mx-8">
        <BookingSummary/>
        <div>
          <Forms/>
          <PaymentMode/>
        </div>
      </div>
      
      <div className="FAQ md:mx-8">
        <FAQ/>
      </div>

      <div className="footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;