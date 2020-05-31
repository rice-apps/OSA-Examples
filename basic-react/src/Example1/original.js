import React from 'react';

class Original extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), // default value is a new date
            count: 0, // default value is 0
        }
    }

    componentDidMount() {
        console.log("Component Mounted!");
        console.log("Checkout the initial state here:");
        console.log(this.state);
    }

    /**
     * This will run whenever the incoming PROPS change OR when the STATE changes
     * @param {*} prevProps 
     * @param {*} prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.date != this.state.date) {
            console.log("The date changed!");
        }
        if (prevState.count != this.state.count) {
            console.log("The count changed!");
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>Values</h2>
                <p>{this.state.date.toLocaleDateString()}</p>
                <button onClick={() => this.setState({ date: new Date(2020, 5, 1) })}>Set the Date to June 1.</button>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment the counter.</button>
            </React.Fragment>
        );
    }
}

export default Original;
