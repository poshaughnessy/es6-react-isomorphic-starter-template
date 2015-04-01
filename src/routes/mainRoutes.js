import React from 'react';
import PlaceholderComponent from '../components/placeholderComponent';

let placeholderComponent = React.createFactory( PlaceholderComponent );

function MainRoutes(app) {

    app.get('/', (req, res) => {

        var html = React.renderToString( placeholderComponent({}) );

        res.render('index.ejs', {reactOutput: html});

    });

}

export default MainRoutes;