import React from "react";
import { Container } from "reactstrap";
import "./places.css";
import pic from './cafe_tpt-central'
import pic1 from './ducksoup-central'
import pic2 from './chishuru-south'
import pic3 from './persepolis-south.24'
import pic4 from './mangal ii - north.avif'
import pic5 from './tankatsu - north.49'



const PlacesPage = () => {
  document.title = "Places Nearby";

  return (
    
    <div className="container-fluid" align="center">
      <Container>
        <h1>Places to go</h1>
        <h3>
          Doing dinner and a film? These are the best spots to eat in (pre or
          post popcorn) near our go-to cinemas.
        </h3>
        <br/>
        <p>Dinner and a movie is a time-honored tradition. A night of great food and entertainment is a foolproof way to treat yourself. Below, we have selected some amazing restaurants/bars near our branches,
           so even if the movie is terrible, the night is still salvagable.  </p>
        <div align="left">
          <div>

            <h1>London Central</h1>


            <h2>Cafe TPT</h2>



            <img src={pic}  className="img" alt="cafe tpt" />
            <p>Perfect for a casual weeknight dinner, catching up with mates or dining solo, 
            a late-night debrief of the movie alongside a char siu pork on rice is the right way to visit one of our cinemas. A late night Cantonese spot you can never go wrong with - we recommend the whopper, cheesy bechamel-covered, Macau-style baked pork chop.</p>
            <button style={{fontFamily:'bebas neue'}} a href="https://www.google.com/maps/place/Cafe+TPT/@51.5110664,-0.1407725,15z/data=!3m1!4b1!4m5!3m4!1s0x487604d24ab1661b:0xb3eaf5ec47a9945d!8m2!3d51.5110719!4d-0.1319995">Get Directions</button>

            <h2>Ducksoup</h2>

            <img src={pic1} className="img" alt="ducksoup"></img>
            <p >Perfect for a catch-up with mates or just drink and some light bites. If you like modern European food, and want to go for a classy and casual option around central London Ducksoup is an ever reliable lunch or dinner hangout.</p>
            <button style={{fontFamily:'bebas neue'}} a href="https://www.google.com/maps/place/DUCKSOUP/@51.5142332,-0.1316223,19z/data=!4m5!3m4!1s0x487604d31e133b33:0x63e1f809f021c29d!8m2!3d51.5133111!4d-0.1321472">Get Directions</button>

            </div>

            <div>

            <h1>London South</h1>

            <h2>Chishuru</h2>

            <img src={pic2} className="img" alt="chishuru"></img>
            <div>
            <p > Vegetarian friendly, West African cuisine from Chishuru is a guaranteed part of the evening, ekuru, goat ayamase and plantain and baobab ice cream are our favourite dishes!</p>
            <button style={{fontFamily:'bebas neue'}} a href="https://www.google.com/maps/place/Chishuru/@51.4619795,-0.1222635,15z/data=!3m1!4b1!4m5!3m4!1s0x48760564157cd34f:0x50fe2742da8fd4ee!8m2!3d51.4619798!4d-0.1135302">Get Directions</button>
            </div>
            <h2>Persepolis</h2>

            <img src={pic3} className="img" alt=""></img>
            <p>Persian inspired vegetarian and vegan cuisine, perfect for a cheap, healthy lunch. There's meze, falafels, and a gorgeous black honey ice cream sundae as well loads of unexpected bits in between!</p>
            <button style={{fontFamily:'bebas neue'}} a href="https://www.google.com/maps/place/Persepolis/@51.4733339,-0.080533,15z/data=!3m1!4b1!4m5!3m4!1s0x487603755d8f19d3:0x7f3546ad74e87cf3!8m2!3d51.4733753!4d-0.0717888">Get Directions</button>

            </div>
            <div>

            <h1>London North</h1>

            <h2>Mangal II</h2>
            <img className="img" src={pic4} alt="img"></img>
            <p >How could you go wrong with Turkish food? Mushroom manti to die for, as well as bits and bobs on the restaurant menu that change regularly. But don't worry, if you are not too adventurous, you can always find a reliable kofte and a doner.</p>
            <button style={{fontFamily:'bebas neue'}} a href="https://www.google.com/maps/place/Mangal+2+Restaurant/@51.5507874,-0.0749761,17z/data=!3m1!4b1!4m5!3m4!1s0x48761c8b8863bf4d:0x2c4c0fb5893488a9!8m2!3d51.5507862!4d-0.0749536">Get Directions</button>

            <h2>Tankatsu</h2>
            <img className="img" src={pic5} alt="img"></img>
            <p >Tanakatsu is best known for it's katsu dishes. The modern Japanese diner is ten minutes away from our cinemas. The sushi is a favourite of ours, and ofcourse at £12-£15 it is a reliably tasty fare.</p>
            <button style={{fontFamily:'bebas neue'}} a href="https://www.google.com/maps/place/TANAKATSU/@51.5302818,-0.1020072,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b5b8f09e6dd:0x1d058f16ae27fd9d!8m2!3d51.5302818!4d-0.1020072">Get Directions</button>

            </div>

        </div>

        


      </Container>

    </div>
  );
};

export default PlacesPage;
