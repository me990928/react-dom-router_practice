import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MySidebar from "./compornents/mySidebar";
import MyTopbar from './compornents/myTopbar';

function App() {
  return (
    <div className='app'>
      <Router>
        {/* 黄色のバー */}
        <MyTopbar />
        <div className='wrap'>
          {/* 青色のバー */}
        <MySidebar />
        {/* リンク先を表示する場所 */}
        <div className='main'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

function Home(){
  return (
    <div>やあHome</div>
  );
}
function About(){
  return (
    <div>やあAbout</div>
  );
}
function NotFound(){
  return (
    <div>NotFound</div>
  );
}