import React from 'react'

function deposit() {
  return (
    <div>
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
  <tr>
    <td><h4>Amount in RS:</h4></td>
    <td><input type="text" ></input></td>
  </tr>
  <tr>
    <td>
<h4>Amount in Words:</h4></td>
    <td><input type="text"></input></td>
          </tr>
          <button type="submit">SUBMIT  </button>
</table>
<h3>Pay</h3>
<h3>Conform</h3>
<h2>DEPOSIT IS SUCCESSFUL</h2>

    </div>
    
  );
}

export default deposit