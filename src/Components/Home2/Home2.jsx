import logo from '../Home1/Images/logo.png';
import mobile from '../Home1/Images/mobile.png';
import robo from '../Home1/Images/robo.png';
import waves from '../Home1/Images/waves.png';
import './home2.css';

const Home2 = ()=>{
    return(
        <>
          <div className="logo-container1">
            <img className='logo' src={logo} alt=""></img>
          </div>
          <div className="centerTextButton">
            <div>
                <p className='text-1'>Get 2x Revenue With <span className='text-2 headGradient'>Gen A.I. Powered</span></p>
                <p className='text-3'><span className='text-4 headGradient'>&nbsp;Sales Agent </span> To Your Customers</p> 
            </div>   
          </div>
          <div className="centerText">
            <p>Connect with 10,000 customers in 1 hour with real-time data insights, revolutionizing business 
                outreach with AI-human synergy.</p>
          </div>
          <div className="Textbtn">
            <button1 className="textbutton" type="submit">VISIT OUR WEBSITE</button1>
            <button2 className="textbutton" type="submit">BOOK A MEETING</button2>
          </div>
          <div className="centerTextButton body">
            <p className='headGradient'>Sales</p>
            <p className='headGradient'>Agent</p>
          </div>
          <div className="form">
            <img src={mobile} alt="mobile"></img>
            <div className='formDiv centerTextButton'>
                <img src={robo} alt="robo"></img>
            </div>
            <div className='formDiv1 centerTextButton'>
                <img src={waves} alt="waves"></img>
            </div>
            <div className='formDiv2 centerTextButton'>
                <p>Talk to our voicebot</p>
                <input id="input1" type="text" placeholder='Full Name'></input>
                <input id="input2" type="text" placeholder='Email'></input>
                <input id="input3" type="text" placeholder='Mobile Number'></input>
                <button type="submit">REQUEST A CALL BACK</button>
            </div>

            
          </div>
          
          
        </>
    )
}
export default Home2