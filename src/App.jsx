import EcoSystem from "./EcoSystem";
import Header from "./Header";
import operation from './assets/operatingmodel.png'
import demo from './assets/demo.png';
import './App.css'
import eclipse1 from './assets/eclipse1.png'
import top from './assets/top.png';
import eclipse3 from './assets/ellipse3.png';
import eclipse5 from './assets/ellipse5.png';
import eclipse4 from './assets/ellipse4.png';
export default function App() {
  return (
    <>
      <div className="w-[1366px] h-[1024px] colorr relative overflow-hidden font-aktiv-grotesk">
        <Header />
        <div className="w-[634px] h-[31px] relative -top-[10px] left-[46px] z-10 text-[24px] text-[#FAFBFC]">
          The Unified Strategy Ecosystem brings together 3 worlds
        </div>
        <div className="w-[239px] h-[131px] absolute top-[235px] left-[1103px]  ">
          <div className="w-[96px] h-[40px]">
            <p className="text-[16px] text-[#E0FBFF] font-light leading-[19.2px] -tracking-[0.04rem] text-left">Operating</p>
            <p className="text-[#FFFFFF] text-[16px] font-semibold leading-[19.2px]">Environment</p>
          </div>
          <div className="text-[14px] text-[#E0FBFF] text-left font-normal leading-[21px]">
            Analyse the drivers and trends that influence the world of health to anticipate threats and opportunities to strategy execution.
          </div>
        </div>
        <div className="w-[400.11px] h-[205.52px] absolute top-[732.65px] left-[56.89px] z-10">
          <EcoSystem />
        </div>
        <div className="w-[107.39px] h-[50.77px] absolute  top-[822.75px] left-[428.12px]">
          <p className="text-[16px] text-[#E0FBFF]">Health</p>
          <p className="text-[16px] text-[#FFFFFF]">Ecosystem</p>
        </div>
        <div className="w-[85.91px] h-[50.77px] absolute text-[16px] top-[649.55px] left-[709.45px]">
          <p className="text-[#E0FBFF] ">Operating</p>
          <p className="text-white">Model</p>
        </div>
        <div className="w-[136.77px] h-[161px] absolute  top-[558px] left-[588px]">
          <img src={operation} alt="Operation" />
        </div>
        <div className="w-[599.92px] h-[499px] absolute  top-[194px] left-[622px]">
          <img src={demo} alt="Demo" />
        </div>
        <div className="modelCircle ">

        </div>
        <div className="Eclipse ">

        </div>
        <div className="leftside">

        </div>

        <div className="health border-[1px] border-[#00B2D1] ">

        </div>
        <div id="eclipse1 text-white bg-red-900 z-30">
          <img src={eclipse1} alt="done" />
          
        </div>
      </div>
      <div className="leftone">
        <img src={top} alt="left" />
      </div>
      <div className="eclipse3">
        <img src={eclipse3} alt="d" />
      </div>
      <div className="eclipse5 z-50">
        <img src={eclipse5} alt="d" />
      </div>
      <div className="eclipse5 z-50">
        <img src={eclipse5} alt="d" />
      </div>
      <div className="eclipse4 z-50">
        <img src={eclipse4} alt="d" />
      </div>

    </>
  )
}