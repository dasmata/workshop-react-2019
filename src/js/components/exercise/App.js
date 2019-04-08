/**
 * Components exercise
 *
 * Convert all class components in function components
 *
 * */

import React, { Fragment, Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {

    handleMenuClick = (e) => {
        e.preventDefault();
        console.log(e.target.title);
    };

    render () {
        return (
            <Fragment>
                <section>
                    <header>
                        <ul>
                            <li><a href={'javascript://'} onClick={this.handleMenuClick} title={'first item'}>first item</a></li>
                            <li><a href={'javascript://'} onClick={this.handleMenuClick} title={'second item'}>second item</a></li>
                            <li><a href={'javascript://'} onClick={this.handleMenuClick} title={'third item'}>third item</a></li>
                        </ul>
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
    }
}

export default App;