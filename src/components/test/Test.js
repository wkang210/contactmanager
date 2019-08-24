import React, { Component } from 'react'

export default class Test extends Component {
    state ={
        title: '',
        body: '',
    };

    componentDidMount(){
        console.log('component did mount');
        //this is where ajax calls usually go

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({title:data.title, body: data.body});
            console.log(this.state);
        });
    }
    // componentWillMount(){
    //     console.log('component will mount');
    // } DEAD
    // componentDidUpdate(){
    //     console.log('update');
    // }
    // componentWillUpdate(){
    //     console.log('will update');
    // } DEAD
    // componentWillReceiveProps(){
    //     console.log('when component will recieve props');
    // } Dead
    // static getDerivedStateFromProps(nextProps, prevState){
    //     return null
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState){

    // }
   

    render() {
        const {title} = this.state
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}
