import './Queue.css';

import React, { Component } from 'react';
import Time from './Time';

class Queue extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="queue">
                {children.map((child, i) => (
                    <div className={"queue__item" + (child.room ? " queue__item--now" : "") + " queue__item--" + child.category} key={i} >
                        <div className="queue__number">{child.number}{child.room && (" → " + child.room)}</div>
                        {!child.room && (<div className="queue__time">
                            <Time hours={child.hours1} minutes={child.minutes1} /> - <Time hours={child.hours2} minutes={child.minutes2} />
                        </div>)}
                    </div>
                ))}
            </div>
        )
    }
}

export default Queue;