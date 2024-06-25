import React from 'react';
import work from './assets/work.png';
import dura from './assets/dura.png';
import rese from './assets/rese.png';
import pharm from './assets/pharm.png';
import it from './assets/it.png';
import insu from './assets/insu.png';
import policy from './assets/policy.png';
import health from './assets/health.png';
import phy from './assets/phy.png';
import edip from './assets/edip.png';
import upper from './assets/upper.png';
import midup from './assets/midup.png';
import mid from './assets/mid.png';
import lower from './assets/lower.png'
export default function EcoSystem() {
    return (
        <div className="relative z-50">
            {/* <div className='absolute top-[9.36px] left-[64px] flex text-[2.86px] text-white'>
                <div className='w-[54.08px] h-[20.03px] flex items-center justify-center absolute top-[8.27px] left-[1.55px]' style={{ backgroundImage: `url(${work})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Workforce Development
                </div>
                <div className='w-[36.4px] h-[17.16px] flex items-center justify-center absolute top-[3.13px] left-[38.57px]' style={{ backgroundImage: `url(${dura})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Durable Medical Equipments
                </div>
                <div className='w-[29.12px] h-[15.06px] flex items-center justify-center absolute top-[0.26px] left-[66.19px]' style={{ backgroundImage: `url(${rese})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Research & Technology
                </div>
                <div className='w-[24.18px] h-[13.77px] flex items-center justify-center absolute -top-[0.26px] left-[90.94px]' style={{ backgroundImage: `url(${pharm})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Pharmaceuticals
                </div>
                <div className='w-[21.34px] h-[12.85px] flex items-center justify-center absolute -top-[1.04px] left-[113.87px]' style={{ backgroundImage: `url(${it})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Health Information System
                </div>
                <div className='w-[21.34px] h-[12.85px] flex items-center justify-center absolute -top-[0.92px] left-[137.07px]' style={{ backgroundImage: `url(${insu})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Insurance
                </div>
                <div className='w-[24.18px] h-[13.77px] flex items-center justify-center absolute -top-[0.13px] left-[157.41px]' style={{ backgroundImage: `url(${policy})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Policy & Regulations
                </div>
                <div className='w-[24.18px] h-[13.77px] flex items-center justify-center absolute top-[0.52px] left-[176.96px]' style={{ backgroundImage: `url(${health})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    Health
                </div>
                
                <div className='w-[35.62px] h-[16.64px] absolute top-[3.39px] left-[197.78px]'>
                    <div className='w-[40.33px] h-[18.72px] absolute -top-[2.08px] -left-[1.56px]' style={{ backgroundImage: `url(${edip})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='w-[20px] h-[12px] absolute top-[2.02px] left-[3.48px] leading-[3.66px]'> Physical & Digital Infrastructure</div>
                    </div>
                </div>
                <div className='w-[49.66px] h-[20.28px] absolute top-[7.56px] left-[222.02px]'>
                    <div className='w-[53.95px] h-[20.03px] absolute -left-[2.08px]' style={{ backgroundImage: `url(${edip})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='w-[20px] h-[12px] absolute top-[4.02px] left-[10.74px] leading-[3.66px]'>Epidemiology & Emergency Preparedness</div>
                    </div>
                </div>
            </div> */}
            <div className='w-[272.38px] h-[27.84px] absolute top-[9.36px] left-[64px]'>
                <img src={upper} alt='Upper' />
            </div>
            <div className='w-[208px] h-[84.11px] absolute top-[13.01px] left-[98.6px]' >
                <img src={midup} alt='nothing'/>
            </div>
            <div className='w-[41.65px] h-[22.59px] absolute top-[92.77px] left-[179.54px]' >
                <img src={mid} alt='nothing'/>
            </div>
            <div className='w-[337.41px] h-[91.83px] absolute top-[113.17px] left-[31.48px]' >
                <img src={lower} alt='nothing'/>
            </div>
        </div>
    );
}
