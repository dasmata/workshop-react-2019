/**
 * * Build systems
 * * JSX
 * * ways to build a component
 * * iterations and variables
 * * data flow
 * * propTypes
 */

import React, { Fragment } from 'react';
import HelloWorld from './HelloWorld';

const App = (props) => {
    console.log(props);
    return (
        <Fragment>
            <section>
                <header>
                </header>
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