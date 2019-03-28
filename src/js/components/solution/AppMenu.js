import React from 'react';
import history from './browserHistory';
import PropTypes from 'prop-types';

function handlePageChange (el) {
    return () => {
        history.push(el.url, el);
    };
}

const AppMenu = ({config}) => {
    if (!config || config.length === 0) {
        return null;
    }
    return (
        <menu>
            <ul>
                {config.map((el) => {
                    return <li key={el.url}><a href={'javascript://'} onClick={handlePageChange(el)}>{el.text}</a></li>;
                })}
            </ul>
        </menu>
    );
};
AppMenu.propTypes = {
    config: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
    })).isRequired,
};

export default AppMenu;
