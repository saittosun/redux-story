// jshint esversion: 6
import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
        }
    }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

// the name is totally up to you but it's very clear about what you will store in here. You store instructions about how the state managed by redux should be mapped to props you can use in this container because that's important, the state managed redux is not received as state here because state is the thing you change internally from within a component. Those times are over, redux is now the place where we manage and change the state, so we don't want to get anything which we can change internally and props are changed internally, that is why we map the redux state to props. This is where the name comes from,
const mapStateToProps = state => {// the state stored in redux as the     input and returns a javascript object which is a map of prop names and slices of the state stored in redux.
    return {
        // this state here again, will be given to you by react-redux which of course will reach out to your redux state which of course in turn is the state you set up here, so there will be a counter property available.
        ctr: state.counter
    }

}

export default connect(mapStateToProps)(Counter);