// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';

// import{
//   BrowserRouter as Router, Route ,Routes
// } from 'react-router-dom';



// import Button from 'react-bootstrap/Button';

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode'); // whether dark mode is enabled is enabled or not

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black'
  // })

  const toggleMode =()=>{
    
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      setText('Enable Light Mode')
      showAlert("Dark Mode Has Been Enabled", "success")
      // setMyStyle({
      //   // color: 'black'
      // })
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      setText('Enable Dark Mode')
      showAlert("Light Mode Has Been Enabled", "success")


      // setMyStyle({
      //   // color: 'black'
      // })

    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)

  }

 
  return (
  <>
  
  <Navbar title="TextUtilis" aboutText="About" mode={mode} text={text} toggleMode={toggleMode}/>
  <Alert alert={alert}/> 
  {/* <About /> */}
  <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze Below" mode={mode}/>

  
  



  </>
  );
}
export default App;
