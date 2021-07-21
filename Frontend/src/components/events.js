import React from "react";
import * as AiIcons from 'react-icons/ai';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>eventos</p>
                <button onClick={this.props.changeComponent} className='homeButton'><AiIcons.AiFillHome className='homepage' /><br />Homepage</button>
            </div>
            
        )
    }
}

export default Events;