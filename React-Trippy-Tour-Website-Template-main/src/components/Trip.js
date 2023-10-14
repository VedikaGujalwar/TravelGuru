import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/trip1.jpeg";
import Trip2 from "../assets/trip2.jpeg";
import Trip3 from "../assets/trip3.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Recent Trips, Timeless Reviews</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading = "Trip to Jaipur"
        text="Pink city, is one of the most beautiful and culturally rich cities in India. It was founded by Maharaja Sawai Jai Singh II in November 1727 and also got its name from this brave Hindu ruler. Located in Northern India, Jaipur is the capital of Rajasthan and also the largest city in this state."
        />
        <TripData
          image={Trip2}
          heading ="Trip to Himachal Pradesh"
          text=" Identified as Dev Bhumi and is believed to be the abode of Gods and Goddesses. The entire State is punctuated with stone as well as wood temples. The rich culture and traditions have made Himachal unique in itself. The shadowy valleys, rugged crags, glaciers and gigantic pines and roaring rivers and exquisite flora and fauna compose the symphony that is for ever Himachal."
        />
        <TripData
        image={Trip3}
        heading= "Trip to Kedarnath"
        text="Kedarnath is one amongst one of the most important shrines in the Hindu Religion. It is located at an altitude of 3583mt above the sea level on the banks of River Mandakini near the Chorabari Glacier in Uttarakhand.

        Kedarnath temple is one amongst the 12 Jyotirlingas in India and has its significance since the epic Mahabharata.  Kedarnath is one of the four major sites in the India’s Chota Char Dham pilgrimage in the Northern Himalayas of Uttarakhand. Kedarnath not only has a high significance in the Hindu Religion but it also has some mythologies associated to it. "
        />
      </div>
    </div>
  );
}

export default Trip;
