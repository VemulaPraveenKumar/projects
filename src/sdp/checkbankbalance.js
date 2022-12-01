import React from 'react'

function checkbankbalance() {
  return (
    <div>
<h1>Banking</h1>
<table pos>
  <tr>
    <td><h4>Account Holder Name:</h4></td>
    <td><input type="text" ></input></td>
  </tr>
  <tr>
    <td><h4>IFSC CODE:</h4></td>
    <td><input type="text" ></input></td>
  </tr>
  <tr>
    <td><h4>Account Number:</h4></td>
    <td><input type="text" ></input></td>
  </tr>
          <button type="submit">LOGIN AND CHECK BALANCE </button>
</table>
<h2>BALANCE:23,000</h2>
    </div>
    
  );
}


export default checkbankbalance