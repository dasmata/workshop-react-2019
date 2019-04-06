/**
 * Lazy Loading Exercise
 *
 * Move tab contents in separate components that will lazy load
 * only when the tab is actually rendered.
 *
 * The inactive tabs should not be in the DOM. When a tab is changed
 * the active tab should be inserted in the DOM using an App re-render
 * via state
 *
 */
import React from 'react';
import './App.scss';

export default () => {
    return <div>
        <div className={'tab-holder'}>
            <input className="state" type="radio" title="first-tab" name="tabs-state" id="first-tab" defaultChecked={true}/>
            <input className="state" type="radio" title="second-tab" name="tabs-state" id="second-tab"/>
            <input className="state" type="radio" title="third-tab" name="tabs-state" id="third-tab"/>

            <label className={'label'} htmlFor={'first-tab'} id={'first-tab-label'}>1st tab</label>
            <label className={'label'} htmlFor={'second-tab'} id={'second-tab-label'}>second tab</label>
            <label className={'label'} htmlFor={'third-tab'} id={'third-tab-label'}>third tab</label>

            <div className={'content'} id={'first-tab-panel'}>
                1st tab content
            </div>
            <div className={'content'} id={'second-tab-panel'}>
                second tab content
            </div>
            <div className={'content'} id={'third-tab-panel'}>
                third tab content
            </div>
        </div>
    </div>;
}