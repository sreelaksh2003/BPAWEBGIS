var size = 0;
var placement = 'point';
function categories_Geology_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Basic Rocks':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(124,200,48,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Charnockite group of rocks':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(161,91,231,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Charnockite Group of rocks':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,46,208,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High grade metasedimentary rocks':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,234,78,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Khondalite Group of rocks':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,214,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Migmatite Complex':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,106,168,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pegmatite/Aplite/Quartz vein':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(14,14,208,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Penisular Gneissic Complex':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(14,234,124,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sand and Silt':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(98,213,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sandstone and clay with lignite interc':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,173,228,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tank/WB/River':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,61,61,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,125,42,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Geology_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAME");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Geology_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
