import { useState } from "react";

function MonthItem(props) {
  // const [name, setName]=useState(null);
  return (
    <div>
      <h2>{props.month.name}</h2>
    </div>
  )


}

export default MonthItem;