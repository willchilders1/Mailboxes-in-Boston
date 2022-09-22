"use strict"

var fs = require('fs');
var csv2geojson = require('csv2geojson')

// read file as string
fs.readFile('../data/boston-mailboxes.csv', 'utf-8', (err, csvString) => {

    if(err) throw err;

    // convert to GeoJSON
    csv2geojson.csv2geojson(csvString, {
        latfield: 'LATITUDE',
        lonfield: 'LONGITUDE',
        delimiter: ','
    }, (err, geojson) => {
    
        if(err) throw err;
        
        fs.writeFile('../data/boston-mailboxes.json', JSON.stringify(geojson), 'utf-8', (err) => {
            
            if(err) throw err;
            
            console.log('done writing file');
        });
    })
});