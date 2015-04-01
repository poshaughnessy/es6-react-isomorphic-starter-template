import React from 'react';
import AppComponent from '../components/appComponent';

let appComponent = React.createFactory( AppComponent );

function MainRoutes(app) {

    app.get('/', (req, res) => {

        var html = React.renderToString( appComponent({}) );

        res.render('index.ejs', {reactOutput: html});

    });

}

export default MainRoutes;