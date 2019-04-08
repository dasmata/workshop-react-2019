import React, { Fragment, useEffect, useState } from 'react';
import HelloWorld from './HelloWorld';
import AppMenu from './AppMenu';

const menuConfig = [
    'first item', 'second item', 'third item',
];

const App = (props) => {
    return (
        <Fragment>
            <section>
                <AppMenu config={menuConfig} onClick={(el)=>{console.log('App handle for click:', el)}} />
            </section>
            <section>
                <main>
                    <HelloWorld/>
                </main>
            </section>
            <section>
                <footer></footer>
            </section>
        </Fragment>
    );
};

export default App;