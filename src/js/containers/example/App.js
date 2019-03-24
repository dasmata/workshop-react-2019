import React, { Fragment } from 'react';
import ListContainer from "./ListContainer";

export default (props) => (
        <Fragment>
            <section>
                <header>The page header</header>
            </section>
            <section>
                <main style={{position:"relative", minHeight: "100px"}}>
                    <ListContainer />
                </main>
            </section>
            <section>
                <footer>The page footer</footer>
            </section>
        </Fragment>
);