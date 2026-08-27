var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Rgions_1 = new ol.format.GeoJSON();
var features_Rgions_1 = format_Rgions_1.readFeatures(json_Rgions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgions_1.addFeatures(features_Rgions_1);
var lyr_Rgions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rgions_1, 
                style: style_Rgions_1,
                popuplayertitle: 'Régions',
                interactive: false,
                title: '<img src="styles/legend/Rgions_1.png" /> Régions'
            });
var format_Routesnationales_2 = new ol.format.GeoJSON();
var features_Routesnationales_2 = format_Routesnationales_2.readFeatures(json_Routesnationales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routesnationales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesnationales_2.addFeatures(features_Routesnationales_2);
var lyr_Routesnationales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesnationales_2, 
                style: style_Routesnationales_2,
                popuplayertitle: 'Routes nationales',
                interactive: false,
                title: '<img src="styles/legend/Routesnationales_2.png" /> Routes nationales'
            });
var format_Tribunaux_3 = new ol.format.GeoJSON();
var features_Tribunaux_3 = format_Tribunaux_3.readFeatures(json_Tribunaux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tribunaux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tribunaux_3.addFeatures(features_Tribunaux_3);
var lyr_Tribunaux_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tribunaux_3, 
                style: style_Tribunaux_3,
                popuplayertitle: 'Tribunaux',
                interactive: true,
    title: 'Tribunaux<br />\
    <img src="styles/legend/Tribunaux_3_0.png" /> Cour d\'Appel<br />\
    <img src="styles/legend/Tribunaux_3_1.png" /> Maison de Justice<br />\
    <img src="styles/legend/Tribunaux_3_2.png" /> Tribunal<br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_Rgions_1.setVisible(true);lyr_Routesnationales_2.setVisible(true);lyr_Tribunaux_3.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Rgions_1,lyr_Routesnationales_2,lyr_Tribunaux_3];
lyr_Rgions_1.set('fieldAliases', {'id': 'id', 'Regions': 'Regions', });
lyr_Routesnationales_2.set('fieldAliases', {'id': 'id', 'region_nom_bdd': 'region_nom_bdd', 'prefecture_nom_bdd': 'prefecture_nom_bdd', 'commune_nom_bdd': 'commune_nom_bdd', 'canton_nom_bdd': 'canton_nom_bdd', 'voies_nbr': 'voies_nbr', 'route_type': 'route_type', 'route_classee': 'route_classee', 'route_recouvrement': 'route_recouvrement', 'route_nom': 'route_nom', });
lyr_Tribunaux_3.set('fieldAliases', {'fid': 'fid', 'region': 'region', 'prefecture': 'prefecture', 'commune': 'commune', 'canton': 'canton', 'id': 'id', 'canton_id_bdd': 'canton_id_bdd', 'Localite': 'Localite', 'Nom Tribunal': 'Nom Tribunal', '_Type_Tribunal': '_Type_Tribunal', 'Accès à l\'eau': 'Accès à l\'eau', 'Accès à l\'electricité': 'Accès à l\'electricité', 'Accès à l\'internet': 'Accès à l\'internet', 'Ordinateur fonctionnel': 'Ordinateur fonctionnel', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Type_Tribunal': 'Type_Tribunal', });
lyr_Rgions_1.set('fieldImages', {'id': 'TextEdit', 'Regions': 'TextEdit', });
lyr_Routesnationales_2.set('fieldImages', {'id': 'TextEdit', 'region_nom_bdd': 'TextEdit', 'prefecture_nom_bdd': 'TextEdit', 'commune_nom_bdd': 'TextEdit', 'canton_nom_bdd': 'TextEdit', 'voies_nbr': 'Range', 'route_type': 'TextEdit', 'route_classee': 'TextEdit', 'route_recouvrement': 'TextEdit', 'route_nom': 'TextEdit', });
lyr_Tribunaux_3.set('fieldImages', {'fid': 'Range', 'region': 'TextEdit', 'prefecture': 'TextEdit', 'commune': 'TextEdit', 'canton': 'TextEdit', 'id': 'Range', 'canton_id_bdd': 'TextEdit', 'Localite': 'TextEdit', 'Nom Tribunal': 'TextEdit', '_Type_Tribunal': 'TextEdit', 'Accès à l\'eau': 'TextEdit', 'Accès à l\'electricité': 'TextEdit', 'Accès à l\'internet': 'TextEdit', 'Ordinateur fonctionnel': 'Range', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Type_Tribunal': 'TextEdit', });
lyr_Rgions_1.set('fieldLabels', {'id': 'no label', 'Regions': 'no label', });
lyr_Routesnationales_2.set('fieldLabels', {'id': 'no label', 'region_nom_bdd': 'no label', 'prefecture_nom_bdd': 'no label', 'commune_nom_bdd': 'no label', 'canton_nom_bdd': 'no label', 'voies_nbr': 'no label', 'route_type': 'no label', 'route_classee': 'no label', 'route_recouvrement': 'no label', 'route_nom': 'no label', });
lyr_Tribunaux_3.set('fieldLabels', {'fid': 'hidden field', 'region': 'hidden field', 'prefecture': 'hidden field', 'commune': 'hidden field', 'canton': 'hidden field', 'id': 'hidden field', 'canton_id_bdd': 'hidden field', 'Localite': 'inline label - visible with data', 'Nom Tribunal': 'inline label - visible with data', '_Type_Tribunal': 'hidden field', 'Accès à l\'eau': 'inline label - always visible', 'Accès à l\'electricité': 'inline label - visible with data', 'Accès à l\'internet': 'inline label - visible with data', 'Ordinateur fonctionnel': 'inline label - visible with data', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Type_Tribunal': 'inline label - visible with data', });
lyr_Tribunaux_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});