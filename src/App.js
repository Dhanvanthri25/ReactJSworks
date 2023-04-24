import logo from './logo.svg';
import './App.css';
import Hello from './Components/Task-1/hello world';
import { Congrats } from './Components/Task-2/congrats';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import { Superleague } from './Components/Task-3/Superleague';
import { Socialbuttons } from './Components/Task-4/Socialbuttons';
import { Notifications } from './Components/Task-5/Notifications';
import { Login } from './Components/Task-6/Login';
import { Technology } from './Components/Task-7/Technology';
import { Navbarpf } from './Components/Myportfolio/Navbarpf';
import { Hooks } from './Components/Task-8/Hooks';
import { FruitsCounter } from './Components/Task-9/Fruitscounter';
import { Feedback } from './Components/Task-10/Feedback';
import { FeedbackThanks } from './Components/Task-10/Feedbackthanks';
import { Datefunction } from './Components/Task-11/Datefunction';
import { Work } from './Components/Myportfolio/Work/Work';
import { Certificates } from './Components/Myportfolio/Certificates/Certificate';
import { Contact } from './Components/Myportfolio/Contact/Contact';
import { Home } from './Components/Myportfolio/Home/Home';
import { About } from './Components/Myportfolio/About/About';
import { Skills } from './Components/Myportfolio/Skills/Skills';
import { Shoesjson } from './Components/Task-12/shoes';
import { Fakestore } from './Components/Task-13/Fakestore';
import { Storedetails } from './Components/Task-13/Storedetails';
import { Form } from './Components/Task-14/Nodeform';
import { Admin } from './Components/Task-14/Admintable';
import { UpdateData } from './Components/Task-14/Updatedata';
import { Cursor } from './Components/Myportfolio/Cursor/Cursor';





function App() {
  return (






    <BrowserRouter>
      <Routes>

        <Route path='/helloworld' element={[<Navbar />, <Hello />, <Cursor />]} />
        <Route path='/Congrats' element={[<Navbar />, <Congrats />, <Cursor />]} />
        <Route path='/Superleague' element={[<Navbar />, <Superleague />, <Cursor />]} />
        <Route path='/Socialbuttons' element={[<Navbar />, <Socialbuttons />, <Cursor />]} />
        <Route path='/Notifications' element={[<Navbar />, <Notifications />, <Cursor />]} />
        <Route path='/Login' element={[<Navbar />, <Login />, <Cursor />]} />
        <Route path='/Technology' element={[<Navbar />, <Technology />, <Cursor />]} />
        <Route path='/Hooks' element={[<Navbar />, <Hooks />, <Cursor />]} />
        <Route path='/FruitsCounter' element={[<Navbar />, <FruitsCounter />, <Cursor />]} />
        <Route path='/Feedback' element={[<Navbar />, <Feedback />, <Cursor />]} />
        <Route path='/FeedbackThanks' element={[<Navbar />, <FeedbackThanks />, <Cursor />]} />
        <Route path='/Datefunction' element={[<Navbar />, <Datefunction />, <Cursor />]} />
        <Route path='/Shoesjson' element={[<Navbar />, <Shoesjson />, <Cursor />]} />
        <Route path='/Fakestore' element={[<Navbar />, <Fakestore />, <Cursor />]} />
        <Route path='/Storedetails/:id' element={[<Navbar />, <Storedetails />, <Cursor />]} />
        <Route path='/Form' element={[<Navbar />, <Form />, <Cursor />]} />
        <Route path='/UpdateData/:s_no' element={[<Navbar />, <UpdateData />, <Cursor />]} />







        <Route path='/' element={[<Navbarpf />, <Home />, <About />, <Skills />, <Work />, <Certificates />, <Contact />, <Cursor />]} />
        <Route path='/Home' element={[<Navbarpf />, <Home />, <Cursor />]} />
        <Route path='/About' element={[<Navbarpf />, <About />, <Cursor />]} />
        <Route path='/Skills' element={[<Navbarpf />, <Skills />, <Cursor />]} />
        <Route path='/Cursor' element={[<Navbarpf />, <Cursor />]} />
        <Route path='/Work' element={[<Navbarpf />, <Work />, <Cursor />]} />
        <Route path='/Certificates' element={[<Navbarpf />, <Certificates />, <Cursor />]} />
        <Route path='/Contact' element={[<Navbarpf />, <Contact />, <Cursor />]} />
        <Route path='/admin' element={[<Admin />, <Cursor />]} />











      </Routes>
    </BrowserRouter>




  );
}

export default App;
