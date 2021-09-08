import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import {getPosts} from './Actions/posts';
import NavbarComp from './Components/NavBar/NavbarComp';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="page-container">
        <div className="content-wrap">
          <NavbarComp />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
