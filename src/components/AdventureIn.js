import AdvData from "./advData";
import "./advStyle.css";

function AdventureIn() {
  return (
    <div className="adv">
      <h1>Let the Adventure begin</h1>
      <p>"Dare to explore the unknown."</p>
      <div className="advcard">
        <AdvData
          Img="https://images.unsplash.com/photo-1630879937467-4afa290b1a6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Sky Diving"
          header="Sky Diving"
          text="Are you ready to unleash your inner daredevil? This year, step out of your comfort zone and take the plunge with an adventure that will leave you breathless and exhilarated. Get ready to experience the ultimate rush of adrenaline with the Pokhara Skydive – the latest addition to the world of extreme sports !"
          Url="/"
          visit="Book Now"
        />
        <AdvData
          Img="https://cdn.getyourguide.com/img/tour/08712ea5b6fd0dfa0360f027a75533e61d6edbc5b370efc505f1d1733c459e1e.jpg/145.jpg"
          Alt="Glider Rides"
          header="Glider Rides"
          text="
          Prepare for an exhilarating journey into the skies above Pokhara with our Ultralight Glider Flight Experience. From the moment of takeoff to the gentle landing, our experienced pilots will guide you through the skies, offering unparalleled views and unmatched thrills."
          Url="/"
          visit="Book Now"
        />
      </div>
      <div className="advcard">
        <AdvData
          Img="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Hot Air Ballon"
          header="Hot Air Ballon"
          text="Embark on a majestic journey to the heights of the sky, where you can feel the cool breeze caress your face and marvel at the awe-inspiring views of Fishtail, Annapurna, and Dhaulagiri mountain ranges along the city of lakes Pokhara"
          Url="/"
          visit="Book Now"
        />
        <AdvData
          Img="https://images.unsplash.com/photo-1591041228934-a1a81bb1791d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Paragliding"
          header="Paragliding"
          text="Paragliding in Pokhara will be your greatest option if you are thinking about engaging in any challenging and thrilling sports to get over your phobia. In Nepal, paragliding is one of the most popular adventure activities. Your initial paragliding adventure might be started at Pokhara."
          Url="/"
          visit="Book Now"
        />
      </div>
    </div>
  );
}
export default AdventureIn;
