import { useState } from "react";

function Header(props) {
  // const [name, setName]=useState(null);


  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        {/* display the selected month we got via App.js */}
        <h2 class="pink">{props.displayMonth}</h2>
        <br />
      </header>
      <br />

    </div>
  )


}

export default Header;