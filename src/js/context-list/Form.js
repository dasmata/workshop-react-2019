import React from 'react';
import ListContext from './listContext';

export default class Form extends React.Component {

    state = {
        title: '',
        description: '',
    };

    handleFieldChange = (input) => {
        this.setState({
            [input.name]: input.value,
        });
    };

    render () {
        return (<ListContext.Consumer>
            {({onSubmit, showForm}) => {
                return showForm && <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(this.state);
                }}>
                    <div>
                        <label>
                            <span>Title</span>
                            <input
                                type={'text'}
                                name={'title'}
                                onChange={(e) => this.handleFieldChange(e.target)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Description</span>
                            <input
                                type={'text'}
                                name={'description'}
                                onChange={(e) => this.handleFieldChange(e.target)}
                            />
                        </label>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>;
            }}
        </ListContext.Consumer>);
    }
}
