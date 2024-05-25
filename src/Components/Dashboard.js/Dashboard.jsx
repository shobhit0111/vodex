import "./dashboard.css";
import logo from "../Home1/Images/logo.png";
import AppBar from "../Common/AppBar.jsx";
import BarGraph from "../Common/BarGraph.jsx";
import ScoreBar from "../Common/ScoreBar.jsx";
import TableData from "../Common/Table.jsx";
// import Button from "@material-ui/core/Button";

const Dashboard = () => {
  return (
    <>
      <div className="Container">
        <div className="Side-Content">
          <img src={logo} alt="logo" />
          <div className="SideNav-Content"></div>
        </div>
        <div className="Main-Content">
          <AppBar />
          <div className="graphDiv">
            <div className="chartDiv">
              <BarGraph />
            </div>
            <div className="scoreDiv">
              <div className="score1">
                <p>Email Sent</p>
              </div>
              <div className="score2">
                <ScoreBar />
              </div>
              <div className="score3">
                <p>Performance</p>
              </div>
              <div className="score3">
                <p>Average</p>
              </div>
            </div>
          </div>
          <div className="flexButtons">
            <button type="button">New</button>
            <button type="button">No Show</button>
            <button type="button">Target</button>
            <button type="button">Paid</button>
          </div>
          <div className="leads-div">
            <span>Leads</span>
            <span className="view-leads">
              <button>
                View All Leads
              </button>
            </span>
          </div>
          <div className="tableDiv">
            <TableData />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
