import React from 'react';
import {Container} from 'reactstrap';
import './gettingthere.css'
import pic from './assets/LondonCentral.png'
import pic2 from './assets/London-North.png'
import pic3 from './assets/London-South.png'

const GettingThere = () => {
  document.title = "Getting There"
  
  return (
    <div id="dropped-box" className="container-fluid">
      <Container id="open">
        <h1 className = "title">Getting There</h1>
        <br />

        <div class="dropdown">
  <h3>
    Click on the image of the cinema to view directions:
  </h3>
</div>
<br/>
<br/>

<div className='branch-wrapper'>
  <div  className='branch-link'>
    <h3 className='branchname'>
      Central London</h3>
      <div className='address'>
      35 Dean St, London W1D 4PY
      </div>


    <div className='branch-thumbnail'>
      <div className='branch-image'>
      <a href="/londoncentral">
        <img src={pic} alt="London Central">
      </img>
      </a>
      <br/>
      <br/>
      <br/>
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
      <a href="/londonnorth">
        <img src={pic2} alt="London North">
      </img>
      </a>
      <br/>
      <br/>
      <br/>
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
      <a href="/londonsouth" alt="London South">
        <img src={pic3}>
      </img>
      </a>
      <br/>
      <br/>
</div>
</div>

</div>
</div>


      </Container>

      </div>

  )
};
export default GettingThere;