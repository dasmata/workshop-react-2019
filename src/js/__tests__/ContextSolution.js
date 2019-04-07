import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import App from '../context/solution/App';
import AddButton from '../context/solution/AddButton';

require('jsdom-global')();
configure({adapter: new Adapter()});

describe('Testing the context solution', () => {

    it('renders initial snapshop', () => {
        expect.assertions(1);
        const tree = render(
            <App/>,
        );
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('add element', () => {
        expect.assertions(2);
        const tree = mount(
            <App/>,
        );
        tree.find('a').at(0).simulate('click');
        expect(tree.find(App).state('showForm')).toBe(true);
        expect(toJson(tree)).toMatchSnapshot();
    });
});
