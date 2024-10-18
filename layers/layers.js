var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bharathapuzha_1 = new ol.format.GeoJSON();
var features_Bharathapuzha_1 = format_Bharathapuzha_1.readFeatures(json_Bharathapuzha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_1.addFeatures(features_Bharathapuzha_1);
var lyr_Bharathapuzha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_1, 
                style: style_Bharathapuzha_1,
                popuplayertitle: "Bharathapuzha",
                interactive: true,
                title: '<img src="styles/legend/Bharathapuzha_1.png" /> Bharathapuzha'
            });
var format_Geology_2 = new ol.format.GeoJSON();
var features_Geology_2 = format_Geology_2.readFeatures(json_Geology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_2.addFeatures(features_Geology_2);
var lyr_Geology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_2, 
                style: style_Geology_2,
                popuplayertitle: "Geology",
                interactive: true,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_2_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/Geology_2_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/Geology_2_2.png" /> Charnockite Group of rocks<br />\
    <img src="styles/legend/Geology_2_3.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/Geology_2_4.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/Geology_2_5.png" /> Migmatite Complex<br />\
    <img src="styles/legend/Geology_2_6.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/Geology_2_7.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/Geology_2_8.png" /> Sand and Silt<br />\
    <img src="styles/legend/Geology_2_9.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/Geology_2_10.png" /> Tank/WB/River<br />\
    <img src="styles/legend/Geology_2_11.png" /> <br />'
        });
var format_CheckDam_3 = new ol.format.GeoJSON();
var features_CheckDam_3 = format_CheckDam_3.readFeatures(json_CheckDam_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckDam_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckDam_3.addFeatures(features_CheckDam_3);
var lyr_CheckDam_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CheckDam_3, 
                style: style_CheckDam_3,
                popuplayertitle: "CheckDam",
                interactive: true,
                title: '<img src="styles/legend/CheckDam_3.png" /> CheckDam'
            });
var format_Road_4 = new ol.format.GeoJSON();
var features_Road_4 = format_Road_4.readFeatures(json_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_4.addFeatures(features_Road_4);
var lyr_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_4, 
                style: style_Road_4,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_4.png" /> Road'
            });
var format_StreamBPA_5 = new ol.format.GeoJSON();
var features_StreamBPA_5 = format_StreamBPA_5.readFeatures(json_StreamBPA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StreamBPA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StreamBPA_5.addFeatures(features_StreamBPA_5);
var lyr_StreamBPA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StreamBPA_5, 
                style: style_StreamBPA_5,
                popuplayertitle: "StreamBPA",
                interactive: true,
    title: 'StreamBPA<br />\
    <img src="styles/legend/StreamBPA_5_0.png" /> Major River<br />\
    <img src="styles/legend/StreamBPA_5_1.png" /> First Order<br />\
    <img src="styles/legend/StreamBPA_5_2.png" /> Second Order<br />\
    <img src="styles/legend/StreamBPA_5_3.png" /> Third Order<br />\
    <img src="styles/legend/StreamBPA_5_4.png" /> Fourth Oder<br />\
    <img src="styles/legend/StreamBPA_5_5.png" /> Fifth Order<br />\
    <img src="styles/legend/StreamBPA_5_6.png" /> <br />'
        });
var format_Waterbody_6 = new ol.format.GeoJSON();
var features_Waterbody_6 = format_Waterbody_6.readFeatures(json_Waterbody_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbody_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbody_6.addFeatures(features_Waterbody_6);
var lyr_Waterbody_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbody_6, 
                style: style_Waterbody_6,
                popuplayertitle: "Waterbody",
                interactive: true,
                title: '<img src="styles/legend/Waterbody_6.png" /> Waterbody'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bharathapuzha_1.setVisible(true);lyr_Geology_2.setVisible(true);lyr_CheckDam_3.setVisible(true);lyr_Road_4.setVisible(true);lyr_StreamBPA_5.setVisible(true);lyr_Waterbody_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bharathapuzha_1,lyr_Geology_2,lyr_CheckDam_3,lyr_Road_4,lyr_StreamBPA_5,lyr_Waterbody_6];
lyr_Bharathapuzha_1.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Geology_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_CheckDam_3.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_Road_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_StreamBPA_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Waterbody_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bharathapuzha_1.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'TextEdit', 'KERWSDRP_I': 'TextEdit', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Geology_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_CheckDam_3.set('fieldImages', {'Name': 'TextEdit', 'name1': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_Road_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_StreamBPA_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDER1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Waterbody_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Bharathapuzha_1.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Geology_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_CheckDam_3.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_Road_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_StreamBPA_5.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_Waterbody_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Waterbody_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});