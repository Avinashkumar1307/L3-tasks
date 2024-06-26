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
            <div className='w-[272.38px] h-[27.84px] absolute top-[9.36px] left-[64px] z-50'>
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
