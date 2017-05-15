import React, {Component} from 'react';
import Header from '../container/Header';
import BuddyList from '../container/BuddyList';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="buddyListApp">
              <Header/>
              <BuddyList/>
            </div>

        );
    }

}

export default App
