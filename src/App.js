import './App.css';
// import moment from 'moment';
//import MediaCard from './Component/MediaCard.js';
import DrawerAppBar from './sdp/mainpage';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './sdp/Home';
import Team from './sdp/Team';
import Survey from './Survey';
import Login from './Login';
import Banking from './Banking';
import Withdraw from './sdp/Withdraw';
import deposit from './sdp/deposit';
import checkbankbalance from './sdp/checkbankbalance';
import typeofloans from './sdp/TYPE_OF_LOANS';

function App() {
  return (
    <Router>
      <div>
      <DrawerAppBar/>
      </div>
    <div className="App"> 

        <Switch/>
        <Route path='/Home'exact component={Home}/>
        <Route path='/Team'exact component={Team}/>
        <Route path='/Survey'exact component={Survey}/>
        <Route path='/Login'exact component={Login}/>
        <Route path='/Banking'exact component={Banking}/>
        <Route path='/withdraw' exact component={Withdraw}/>
       <Route path='/deposit' exact component={deposit}/>
       <Route path='/checkbankbalance' exact component={checkbankbalance}/>
       <Route path='/TYPE_OF_LOANS' exact component={typeofloans}/>
    </div> 
    </Router> 
  );
}
export default App;