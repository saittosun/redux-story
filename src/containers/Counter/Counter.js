// jshint esversion: 6
import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
// import * as actionTypes from '../../store/actions/action';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //         default:
    //     }
    // }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => {
                        return (
                            <li 
                                key={strResult.id} 
                                onClick={() => this.props.onDeleteResult(strResult.id)}>
                                {strResult.value}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

// the name is totally up to you but it's very clear about what you will store in here. You store instructions about how the state managed by redux should be mapped to props you can use in this container because that's important, the state managed redux is not received as state here because state is the thing you change internally from within a component. Those times are over, redux is now the place where we manage and change the state, so we don't want to get anything which we can change internally and props are changed internally, that is why we map the redux state to props. This is where the name comes from,
const mapStateToProps = state => {// the state stored in redux as the     input and returns a javascript object which is a map of prop names and slices of the state stored in redux.
    return {
        // this state here again, will be given to you by react-redux which of course will reach out to your redux state which of course in turn is the state you set up here, so there will be a counter property available.

        // bu kisim combinereducer i anlatirken yazildi: now we will have one state in the end but to avoid naming conflicts, redux adds one level of nesting where it has one state object but basically with these keys here, in combined reducers as properties which give us access to these sub states for these feature areas, you could say. 
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

// here I'll say which kind of actions do I want to dispatch in this container. This also stores a function which will receive the dispatch function which we can execute as an argument, just as we have dispatch available on the store here, if we directly access the store, the react-redux package gives us well basically this helper function (dispatch) which will call dispatch on the store behind the scenes. We then here also return a javascript object where we can define some prop names which will hold a reference to a function which should eventually get executed to dispatch an action.
const mapDispatchToProps = dispatch => {
    return {
        // This property(onIncrementCounter) now holds a value of course and that value should be an anonymous function. 
        // what I want to do here, this function here will in the end be available through this property and therefore, whenever this property is executed as a function, for example, if we assign it to an onClick handler, then this dispatch method here is going to get executed.
        //  execute it because once I execute increment and this will happen when this prop is basically executed, when I execute increment,this will give me an action because it's an action creator, don't forget that, increment returns us an action,
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);