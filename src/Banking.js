import React from 'react'
import {Button} from '@mui/material'

function forms() {
  return (
    <div>
      <h1 className='text'>Banking</h1>
      <Button href='/withdraw'>Withdraw</Button><br/>
      <Button href='/deposit'>deposit</Button><br/>
      <Button href='/checkbankbalance'>Check Bank Balance </Button><br/>
      <Button>Bank Offers</Button><br/>
      <Button href='/TYPE_OF_LOANS'>Types of Loans</Button><br/>
    </div>
    
  );
}

export default forms


