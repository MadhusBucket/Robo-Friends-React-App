import React,{ Component } from 'react';
import Scrolls from '../components/Scrolls';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import 'tachyons';




class App extends Component  {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: "",
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots : users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
        
       
        
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
         return (
           <div className="tc">
             <h1 className="f1">I DONT'T KNOW STUFF</h1>
             <Searchbox searchChange={this.onSearchChange} />
             <Scrolls>
               <CardList robots={filteredRobots} />
             </Scrolls>
           </div>
         );
    }
   
}

export default App;