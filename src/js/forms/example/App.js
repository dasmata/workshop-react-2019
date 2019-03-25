import React from 'react';

export default class App extends React.Component {

    state = {
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: false,
    };

    handleChange (field) {
        this.setState({
            [field.name]: field.value,
        });
    }

    render () {
        return (<form onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state);
            }}>
                <label>
                    <div>1st field</div>
                    <input
                        type={'text'}
                        value={this.state.first}
                        name={'first'}
                        onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.value});}}
                    />
                </label>
                <label>
                    <div>Second field</div>
                    <select
                        id="lang"
                        name={'second'}
                        onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.value});}}
                        value={this.state.second}
                    >
                        <option value="select">Select</option>
                        <option value="1st option">1st option</option>
                        <option value="second option">second option</option>
                    </select>
                </label>
                <label>
                    <div>Third field</div>
                    <textarea
                        name={'third'}
                        value={this.state.third}
                        onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.value});}}
                    ></textarea>
                </label>
                <div>Sex (forth field)</div>
                <label>
                    <span>M</span>
                    <input type="radio" name="forth"
                           value={'M'}
                           checked={this.state.forth === 'M'}
                           onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.value});}}/>
                </label>
                <label>
                    <span>F</span>
                    <input type="radio" name="forth"
                           value={'F'}
                           checked={this.state.forth === 'F'}
                           onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.value});}}/>
                </label>
                <div>Fifth field</div>
                <label>
                    <span>Terms and conditions</span>
                    <input
                        name="fifth"
                        type="checkbox"
                        checked={this.state.fifth}
                        onChange={(e) => {this.handleChange({name: e.target.name, value: e.target.checked});}}/>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }

}