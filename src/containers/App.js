import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
/*import { robots } from './robots';*/
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		//searchField: state.searchRobots.searchField 
		//if we had one more state, we would use the above
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}


/*robots (the database) is passed as state to searchbox and Cardlist, but received
as props in Cardlist.js and Searchbox.js*/

class App extends Component {
	/*constructor () {
		super()
		this.state = {
			robots: [],
			//searchfield: ''
		}	
	}*/

   componentDidMount () {
    	this.props.onRequestRobots();
    	//console.log(this.props.store.getState()) passing store as a prop 
       /*fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));*/
    } 

	/*onSearchChange = (event) => {
	    this.setState ({ searchfield: event.target.value });
	}*/

	render () {
		//const { robots } = this.state;
		const { searchField, onSearchChange, robots, isPending } = this.props;
		//const { robots, searchfield } = this.state; 
		const filteredRobots = robots.filter(robot => {
	    	return robot.name.toLowerCase().includes(searchField.toLowerCase());
	    })
	    //return (!robots.length) ?
	    return isPending ?
            <h1>Loading...</h1> :
		(
			<div className ='tc'>
				<h1 className='f2'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				{/*<SearchBox searchChange={this.onSearchChange} />*/}
				<Scroll>
					<Cardlist robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
} 


export default connect(mapStateToProps, mapDispatchToProps)(App);