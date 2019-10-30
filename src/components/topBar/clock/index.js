import React  from 'react';
import Clock from 'react-live-clock';
 
export default class MyComponent extends React.Component {
    render() {
        return (
            <div>
            <Clock format={'hh:mm:ss'} ticking={true} />
            </div>
        )
    }
}