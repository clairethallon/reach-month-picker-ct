import { useState } from "react";

function MonthItem(props) {
  // const [name, setName]=useState(null);

  // when user clicks a props.month.name, send that data back to App.js using selectedMonth function
  const setMonth = () => {
    console.log('month selected:', props.month.name);
    props.selectedMonth(props.month.name)
  }
  return (
    <div>
      {/* on click, run setMonth function */}
      <h2 onClick={setMonth}>{props.month.name}</h2>
    </div>
  )


}

export default MonthItem;