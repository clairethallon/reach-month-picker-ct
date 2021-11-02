import { useState } from "react";
import MonthItem from "../MonthItem/MonthItem";

function MonthList(props) {
  // const [name, setName]=useState(null);
  return (
    <div>

      {/* map through props array. For each item, send the month row data and selectedMonth function */}
      {
        props.months.map((month) =>
          (<MonthItem month={month} selectedMonth={props.selectedMonth} />))
      }

    </div>
  )


}

export default MonthList;