import "./TrekStyle.css";
import TrekData from "./TrekData";
function Trek() {
  return (
    <div className="trek">
      <h1>Trek</h1>
      <p>"The best view comes after the hardest climb"</p>
      <div className="trekcard">
        <TrekData
          image="https://images.unsplash.com/photo-1536308998534-ca7106a1d1f1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Everest Base Camp"
          heading="Everest Base Camp Trek"
          url="/"
          See="More.."
        />
        <TrekData
          image="https://images.unsplash.com/photo-1700556581873-087bde7919a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ghorepani"
          heading="Ghorepani Poonhill Annapurna Trek"
          url="/"
          See="More.."
        />
        <TrekData
          image="https://hsj.com.np/uploads/0000/1/2023/06/22/james-chou-60twv-x-avm-unsplash1.jpg"
          alt="Gokyo Ri "
          heading="Gokyo Ri And Everest Base Camp Trek"
          url="/"
          See="More.."
        />
       
      </div>
      <div className="trekcard">
      <TrekData
          image="https://hsj.com.np/uploads/0000/386/2020/05/04/langtang-trek.jpeg"
          alt="Langtang Valley "
          heading="Langtang Valley Trek"
          url="/"
          See="More.."
        />
        <TrekData
          image="https://hsj.com.np/uploads/0000/1/2023/01/21/manasalu-trek.jpg"
          alt="Manaslu Circuit "
          heading="Manaslu Circuit Trek"
          url="/"
          See="More.."
        />
         <TrekData
          image="https://hsj.com.np/uploads/0000/1/2020/07/17/annapurna-base-trek-400.jpg"
          alt="Annapurna Base Camp"
          heading="Annapurna Base Camp"
          url="/Annapurana"
          See="More.."
        />

      </div>
    </div>
  );
}
export default Trek;
