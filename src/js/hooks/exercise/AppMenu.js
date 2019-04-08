import React from 'react';
import history from './browserHistory';
import PropTypes from 'prop-types';

export default class AppMenu extends React.Component {

    static propTypes = {
        config: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            url: PropTypes.string,
            title: PropTypes.string,
        })).isRequired,
    };

    handlePageChange (el) {
        return () => {
            history.push(el.url, el);
        };
    }

    render () {
        if (!this.props.config || this.props.config.length === 0) {
            return null;
        }
        return (
            <menu>
                <ul>
                    {this.props.config.map((el) => {
                        return <li key={el.url}><a href={'javascript://'} onClick={this.handlePageChange(el)}>{el.text}</a></li>;
                    })}
                </ul>
            </menu>
        );
    }
}