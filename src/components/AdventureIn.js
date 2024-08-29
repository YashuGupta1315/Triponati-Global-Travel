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
          Url="/SkyDiving"
          visit="Book Now"
        />
        <AdvData
          Img="https://cdn.getyourguide.com/img/tour/08712ea5b6fd0dfa0360f027a75533e61d6edbc5b370efc505f1d1733c459e1e.jpg/145.jpg"
          Alt="Glider Rides"
          header="Glider Rides"
          text="
          Prepare for an exhilarating journey into the skies above Pokhara with our Ultralight Glider Flight Experience. From the moment of takeoff to the gentle landing, our experienced pilots will guide you through the skies, offering unparalleled views and unmatched thrills."
          Url="/GliderRides"
          visit="Book Now"
        />
      </div>
      <div className="advcard">
        <AdvData
          Img="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Hot Air Ballon"
          header="Hot Air Ballon"
          text="Embark on a majestic journey to the heights of the sky, where you can feel the cool breeze caress your face and marvel at the awe-inspiring views of Fishtail, Annapurna, and Dhaulagiri mountain ranges along the city of lakes Pokhara"
          Url="/HotAirBallon"
          visit="Book Now"
        />
        <AdvData
          Img="https://images.unsplash.com/photo-1591041228934-a1a81bb1791d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Paragliding"
          header="Paragliding"
          text="Paragliding in Pokhara will be your greatest option if you are thinking about engaging in any challenging and thrilling sports to get over your phobia. In Nepal, paragliding is one of the most popular adventure activities. Your initial paragliding adventure might be started at Pokhara."
          Url="/Paragliding"
          visit="Book Now"
        />
      </div>
      <div className="advcard">
        <AdvData
          Img="https://images.unsplash.com/photo-1520094203104-4f498c82e366?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Helicopter Tour"
          header="Helicopter Tour"
          text="Pokhara heli sightseing tour is an amazing helicopter ride over the Phewa Lake and the Pokhara city. The helicopter tour gives an opportunity to explore the green and clean city Pokhara from the aerial view. "
          Url="/HelicopterTour"
          visit="Book Now"
        />
        <AdvData
          Img="https://images.unsplash.com/photo-1590927586009-0082868049c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Bungee Jumping"
          header="Bungee Jumping"
          text="If you are an adventure hunter and want to go for an activity that actually can pump up your heart's race rate, feel the free fall, and flex your strength and mental ability to take risks, bungee jumping in Pokhara is the best thing you can do."
          visit="Book Now"
        />
      </div>
      <div className="advcard">
        <AdvData
          Img="https://media2.thrillophilia.com/images/photos/000/134/639/original/1539861676_bali-sobek-ayung-rafting_62bcccbdbd7732466a2bf365a1a7e5e7379e9686.jpg?width=975&height=600"
          Alt="River Rafting"
          header="River Rafting"
          text="Enjoy river rafting in Pokhara on the Upper Seti River in the adventure capital of the world.This half-day rafting activity is an exhilarating experience that takes about 1.5 hours for completion.You get a view of the snow-capped Annapurna mountain range while you paddle on the clean water that comes from the Himalayas."
          Url="/"
          visit="Book Now"
        />
        <AdvData
          Img="https://plus.unsplash.com/premium_photo-1661290309226-2e5cd5a3915f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Jungle Safari"
          header="Jungle Safari"
          text="Explore Nepal's wild side with our Chitwan Jungle Safari from Kathmandu/Pokhara. Encounter exotic wildlife, cruise along the Rapti River & immerse in local culture for an unforgettable adventure"
          visit="Book Now"
        />
      </div>
    </div>
  );
}
export default AdventureIn;
