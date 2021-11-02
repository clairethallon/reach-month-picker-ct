import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from "../MonthList/MonthList"
import Header from "../Header/Header"

function App() {

  // const [name, setName]=useState(null);

  // const for array of months
  const [months, setMonths] = useState([]);
  // create const of selected Month to later pass to Header using props
  const [selectedMonth, setSelectedMonth] = useState('');

  // on loading, make axios.get call to load months
  useEffect(() => {
    console.log('loaded');
    getMonths();
  }, []); //need extre empty array or it will load forever

  const getMonths = () => {
    console.log('in getMonths');
    //axios get call
    axios.get('/calendar').then((response) => {
      console.log('loaded', response);
      setMonths(response.data); // set 'months' to array of months
    }).catch((err) => {
      console.log(err);
    })
  };

  // function to set the selected month to the month clicked by user
  const handleSelectedMonth = (month) => {
    setSelectedMonth(month);
  }

  return (
    <div className="App">
      {/* Header component. Sending month selection via props */}
      <Header displayMonth={selectedMonth} />
      {/* MonthList component. Sending month array and month selection function props */}
      <MonthList months={months} selectedMonth={handleSelectedMonth} />
    </div>
  );
}


export default App;
