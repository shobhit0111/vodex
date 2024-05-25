import logo from '../Home1/Images/logo.png';
import Background from '../Home1/Images/Background1.jpeg';
import logo2 from "../Home1/Images/logo2.png"

import './home1.css';

const Home1 = () =>{
  return(
    <>
      <div className="Header">
        <div className="logo-container">
          <img src={logo} alt="logo"  />
        </div>
        <div className="nav-item">
            <ul>
                <li>About</li>
                <li>How It Works</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className="login-button-container">
        <button className="login-button" type="submit">Login/SignUp</button>
        </div>
        
      </div>
      <div className="Body">
        <div className="background">
          <img className="background1" src={Background} alt="background"></img>
        </div>
        <div className="center">
          <div className="circle">
            <div className="innerCircle">
              <div className="centerLogo">
                <img className="logo2" src={logo2} alt="logo"></img>
              </div>
              <div className="centerTextButton">
                <span className="span1">Automate your</span>
              </div> 
              <div className="centerTextButton">
                <span className="span2">pre-sales</span>
              </div>
              <div className="centerTextButton">
                <span className="span3">Recently received $2 million</span><span className="span4">&nbsp;in seed funding.</span>
              </div>
              <div className="centerTextButton">
                <button className="start-button" type="submit">START A CONVERSATION
                </button>
              </div>
              
              
            </div>
          </div>
          
        </div>

      </div>
    </>
    
  )
}
export default Home1
