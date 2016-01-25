import React from 'react';
import { TestComponent } from './components/testComponent.js';

export class AppRoot extends React.Component {
    render(){
        return (
            <div className="test-list example">
                <TestComponent />
                <TestComponent />
                <TestComponent />
            </div>
        )
    }
}
