import React from 'react';
import PlaceholderComponent from './components/placeholderComponent';

React.render(
    React.createElement( PlaceholderComponent, {history: true} ),
    document.getElementById('app')
);
