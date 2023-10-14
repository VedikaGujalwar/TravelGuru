import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import LakePalace from "../assets/lakepalace.jpeg"
import Udaipur from "../assets/udaipur.jpeg"
import Meghalaya1 from "../assets/meghalaya1.jpg"
import Meghalaya2 from "../assets/meghalaya2.jpg"
import Ladakh1 from "../assets/ladakh1.jpeg"
import Ladakh2 from "../assets/ladakh2.jpeg"
import Kerala1 from "../assets/kerala1.jpeg"
import Kerala2 from "../assets/kerala2.jpeg"

const Destination = (props) => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours gives you the opportunity to explore and expell</p>
      
      <DestinationData
        className="first-des"
        heading = "Udaipur"
        text= "Often referred to as the Venice of the East the city of lakes Udaipur is located around azure water lakes and is hemmed in by lush green hills of Aravallis The famous Lake Palace located in the middle of Lake Pichola is one of the most beautiful sights of Udaipur It is also home to Jaisamand Lake, claimed to be the second largest man-made sweet water lake in Asia. The beautiful City Palace and Sajjangarh (Monsoon Palace) add to the architectural beauty and grandeur of the city. The city is also known for its profusion of zinc and marble. Solar observatory in Lake Fateh Sagar is the only observatory in India located on an island and has been made on the pattern of  Big Bear Lake in Southern California. The ten-day Shilpgram Festival which starts from 21 Dec to 30 Dec pulls in a large number of people interested in arts and crafts. Udaipur was founded in-1535 by Maharana Udai Singh II as the new capital of Mewar Kingdom. It is located in the fertile, circular Girwa Valley to the southwest of Nagda, which was the first capital of Mewar."
        img1={LakePalace}
        img2={Udaipur}
      />
      <DestinationData
        className="first-des-reverse"
        heading = "Meghalaya"
        text= "Located in North-east India, Meghalaya, also known as the Abode of Clouds, falls in one of the richest biodiversity areas in the world. The famed monsoons, the rich traditional festivals, and the dramatic terrain are just some of the many things this state is famous for.The unforgettable landscapes of Meghalaya will stay in your heart, long after your journey is over. The table-top heights of Sohra (Cherrapunjee) are brimful with waterfalls, streams, and forest trails. Gaze at the Bangladeshi plains from the many vantage points on the state’s southern ridges. The outskirts of Shillong and the high plateau around Mylliem and Smit offer postcard perfect representations of the simple life – complete with pastel green meadows, tall pine groves, crisp cool air, and quiet villages with quaint cottages and wooden fences spread across the countryside."
        img1={Meghalaya1}
        img2={Meghalaya2}
      />
      <DestinationData
        className="first-des"
        heading = "Ladakh"
        text= "Leh has registered an increasing number of tourists attracted towards it, because of its landscape, culture, tradition environment etc. and still has much potential for adventure tourism. Leh figures on the international tourist map and attracts a large inflow of tourists both from home and abroad. The economy of the region is therefore, based on tourism. That is why Leh is abounds in Hotels, guest houses and taxis. There are 250 hotels, guest house of different classes in Leh.Hemis, Alchi, Lamayuru, Shey and Thiksay are some of the most popular monasteries of Ladakh which attract both domestic as well as foreign tourist.Pangong lake(Half in China) and world highest motorable road Khardongla (18350 fts) is main attraction for domestic tourist, and monasteries and mountains are for foreign tourist.Tourist Places Government of India, Ministry of home Affairs has recently declared some more a areas of Ladakh opened for International Tourism. These areas are among the outstanding feature of Himalayan Panorama. It could be yet another destination for the global tourists. These areas are relatively more distinct for cultural and adventure tourism."
        img1={Ladakh1}
        img2={Ladakh2}
      />
      <DestinationData
        className="first-des-reverse"
        heading = "Kerala"
        text= "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.The production of pepper and natural rubber contributes significantly to the total national output. In the agricultural sector, coconut, tea, coffee, cashew and spices are important. The state is situated between Arabian Sea to the west and Western Ghats mountain ranges to the east. The state's coastline extends for 595 kilometres (370 mi), and around 1.1 million people in the state are dependent on the fishery industry, which contributes 3% to the state's income. Named as one of the ten paradises of the world by National Geographic Traveler,Kerala is one of the prominent tourist destinations of India, with coconut-lined sandy beaches, backwaters, hill stations, Ayurvedic tourism and tropical greenery as its major attractions."
        img1={Kerala1}
        img2={Kerala2}
      />

    </div>
  );
};
export default Destination;
