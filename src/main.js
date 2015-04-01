import React from 'react';
import AppComponent from './components/appComponent';

React.render(
    React.createElement( AppComponent, {history: true} ),
    document.getElementById('app')
);
