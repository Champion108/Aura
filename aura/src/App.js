//import Homepage from './components/homepage/hompage'
import Navbar from './components/homepage/navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './components/homepage/hompage';
import './App.css';
import SignIn from './components/signin/signin';
import SignUp from './components/signin/signup';
import Footer from './components/homepage/footer';
import Chat from './components/chats/main';

function App() {
  return (
    <div className='body'>
      <Navbar/>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/signin" element={<SignIn />}>
             <Route path="./chat" element={<Chat />}/>
          </Route>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

/*navbar and footer will be added once the chat testing is done
   <Navbar/> to be added before <BrowserRouter>
   <Footer /> to be added after </BrowserRouter>
*/