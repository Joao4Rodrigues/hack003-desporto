import React from 'react';
import Homepage from './components/Homepage';
import Sports from './components/sports';
import Events from './components/events';

class OurApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            component: 'home',
            sports: ''
        }
    }

    render() {
        if (this.state.component === 'home') {
            return (
                <div>
                    <Homepage changeComponent={(sport) => this.setState({
                    component: 'sports',
                    sports: sport
                    })}/>
                </div>
            )
        } else if (this.state.component === 'sports'){
            return (
                <div>
                    <Sports changeComponent={() => this.setState({
                    component: 'home'
                    })} sport={this.state.sports}/>
                </div>
            )
        } else if (this.state.component === 'events') {
            return (
                <div>
                    <Events changeComponent={() => this.setState({component: 'home'})} />
                </div>
            )
        }
    }
}

export default OurApp;