import React from "react";
import Loader from "./Loader/index.js";
import List from "./List";

const getData = ()=>{
    return Promise.resolve([
        {title: "1st title", text: "First text", id: 1, version: 1},
        {title: "1st title", text: "First text", id: 2, version: 1},
        {title: "1st title", text: "First text", id: 3, version: 1},
        {title: "1st title", text: "First text", id: 4, version: 1}
    ]);
};

export default class ListContainer extends React.Component {

    state = {
        data: null,
        loading: true
    };

    componentDidMount(){
        getData().then((data) => this.setState({data, loading: false}))
    }

    render(){
        return <Loader loading={this.state.loading}>
            <List data={this.state.data} />
        </Loader>;
    }

}