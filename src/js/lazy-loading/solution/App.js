import React, { useState, Suspense, lazy } from 'react';
import './App.scss';

const FirstTab = lazy(()=>import('./FirstTab'));
const SecondTab = lazy(()=>import('./SecondTab'));
const ThirdTab = lazy(()=>import('./ThirdTab'));

export default () => {
    const [activeTab, setActiveTab] = useState(1);

    return <div>
        <div className={'tab-holder'}>
            <label className={`label ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>1st tab</label>
            <label className={`label ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>second tab</label>
            <label className={`label ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>third tab</label>

            <Suspense fallback={<div>Loading...</div>}>
                {activeTab === 1 && <div className={'content'}>
                    <FirstTab/>
                </div>}
                {activeTab === 2 && <div className={'content'}>
                    <SecondTab/>
                </div>}
                {activeTab === 3 && <div className={'content'}>
                    <ThirdTab/>
                </div>}
            </Suspense>
        </div>
    </div>;
}