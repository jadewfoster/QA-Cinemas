import React from 'react';
import {Container} from 'reactstrap';
import './gettingther.css'
import pic from './LondonCentral.png'
import pic2 from './London-North.png'
import pic3 from './London-South.png'

const GettingThere = () => {
  document.title = "Getting there"
  
  return (
    <div id="dropped-box" className="container-fluid">
      <Container id="open">
        <h1>Getting There</h1>
        <br />

        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select your cinema
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/central-london">Central London</a></li>
    <li><a class="dropdown-item" href="/north-london">North London</a></li>
    <li><a class="dropdown-item" href="/south-london">South London</a></li>
  </ul>
</div>

<div className='branch-wrapper'>
  <div className='branch-link'>
    <h3 className='branchname'>
      Central London</h3>
      <div className='address'>
      35 Dean St, London W1D 4PY
      </div>


    <div className='branch-thumbnail'>
      <div className='branch-image'>
        <img src={pic}>
      </img>
</div>
</div>

</div>
</div>


<div className='branch-wrapper'>
  <div className='branch-link'>
    <h3 className='branchname'>
     North London</h3>
      <div className='address'>
      1 Wakley St, London EC1V 7LT
      </div>

    <div className='branch-thumbnail'>
      <div className='branch-image'>
        <img src={pic2}>
      </img>
</div>
</div>

</div>
</div>
<div className='branch-wrapper'>
  <div className='branch-link'>
    <h3 className='branchname'>
     South London</h3>
      <div className='address'>
      20 Peckham High St, London SE15 5DT
      </div>

    <div className='branch-thumbnail'>
      <div className='branch-image'>
        <img src={pic3}>
      </img>
</div>
</div>

</div>
</div>


      </Container>

      </div>

  )
};
export default GettingThere;