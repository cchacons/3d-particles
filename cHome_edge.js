/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'spot',
                type: 'image',
                rect: ['337px', '22px','487px','108px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spot.png",'0px','0px']
            },
            {
                id: 'spotCopy',
                type: 'image',
                rect: ['371px', '164px','487px','108px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spot.png",'0px','0px']
            },
            {
                id: 'spotCopy2',
                type: 'image',
                rect: ['371px', '164px','487px','108px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spot.png",'0px','0px']
            },
            {
                id: 'content',
                type: 'image',
                rect: ['194px', '64px','586px','371px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"content.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_spotCopy2}": [
                ["style", "top", '225px'],
                ["style", "height", '63px'],
                ["style", "opacity", '1'],
                ["style", "left", '464px'],
                ["style", "width", '283px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "width", '960px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_spot}": [
                ["motion", "location", '580.5px 76px'],
                ["style", "opacity", '0']
            ],
            "${_content}": [
                ["style", "left", '194px'],
                ["style", "top", '64px']
            ],
            "${_spotCopy}": [
                ["style", "top", '154px'],
                ["style", "height", '63px'],
                ["style", "opacity", '0'],
                ["style", "left", '371px'],
                ["style", "width", '283px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4001,
            autoPlay: true,
            labels: {
                "go": 0
            },
            timeline: [
                { id: "eid137", tween: [ "style", "${_spotCopy2}", "left", '464px', { fromValue: '464px'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "style", "${_spotCopy2}", "left", '457px', { fromValue: '464px'}], position: 1202, duration: 48 },
                { id: "eid148", tween: [ "style", "${_spotCopy2}", "left", '464px', { fromValue: '457px'}], position: 2809, duration: 1192 },
                { id: "eid72", tween: [ "style", "${_spotCopy}", "width", '283px', { fromValue: '283px'}], position: 15, duration: 0 },
                { id: "eid80", tween: [ "style", "${_spotCopy}", "left", '371px', { fromValue: '371px'}], position: 777, duration: 0 },
                { id: "eid82", tween: [ "style", "${_spotCopy}", "top", '126px', { fromValue: '154px'}], position: 777, duration: 2490 },
                { id: "eid140", tween: [ "style", "${_spotCopy2}", "opacity", '0', { fromValue: '1'}], position: 477, duration: 735 },
                { id: "eid150", tween: [ "style", "${_spotCopy2}", "opacity", '1', { fromValue: '0'}], position: 2809, duration: 1191 },
                { id: "eid12", tween: [ "motion", "${_spot}", [[580.5, 76, 0, 0],[601.94, 79.6, 22.79, 16.04, 16.77, 11.8],[607.5, 95, 0, 0]]], position: 15, duration: 3985 },
                { id: "eid15", tween: [ "style", "${_spot}", "opacity", '1', { fromValue: '0'}], position: 15, duration: 595 },
                { id: "eid19", tween: [ "style", "${_spot}", "opacity", '0.7', { fromValue: '1'}], position: 610, duration: 425 },
                { id: "eid20", tween: [ "style", "${_spot}", "opacity", '1', { fromValue: '0.7'}], position: 1035, duration: 25 },
                { id: "eid17", tween: [ "style", "${_spot}", "opacity", '0.3', { fromValue: '1'}], position: 1060, duration: 148 },
                { id: "eid18", tween: [ "style", "${_spot}", "opacity", '1', { fromValue: '0.30000001192092896'}], position: 1208, duration: 130 },
                { id: "eid21", tween: [ "style", "${_spot}", "opacity", '0.8', { fromValue: '1'}], position: 1338, duration: 591 },
                { id: "eid30", tween: [ "style", "${_spot}", "opacity", '1', { fromValue: '0.800000011920929'}], position: 1929, duration: 788 },
                { id: "eid32", tween: [ "style", "${_spot}", "opacity", '0.6', { fromValue: '1'}], position: 2717, duration: 115 },
                { id: "eid33", tween: [ "style", "${_spot}", "opacity", '1', { fromValue: '0.6'}], position: 2832, duration: 121 },
                { id: "eid34", tween: [ "style", "${_spot}", "opacity", '0.99', { fromValue: '1'}], position: 2953, duration: 174 },
                { id: "eid35", tween: [ "style", "${_spot}", "opacity", '0.7', { fromValue: '0.9900000095367432'}], position: 3127, duration: 21 },
                { id: "eid36", tween: [ "style", "${_spot}", "opacity", '0.71', { fromValue: '0.699999988079071'}], position: 3148, duration: 102 },
                { id: "eid37", tween: [ "style", "${_spot}", "opacity", '1', { fromValue: '0.7099999785423279'}], position: 3250, duration: 22 },
                { id: "eid39", tween: [ "style", "${_spot}", "opacity", '0', { fromValue: '1'}], position: 3380, duration: 620 },
                { id: "eid71", tween: [ "style", "${_spotCopy}", "height", '63px', { fromValue: '63px'}], position: 15, duration: 0 },
                { id: "eid98", tween: [ "style", "${_spotCopy2}", "top", '213px', { fromValue: '225px'}], position: 0, duration: 1202 },
                { id: "eid120", tween: [ "style", "${_spotCopy2}", "top", '238px', { fromValue: '213px'}], position: 1202, duration: 48 },
                { id: "eid147", tween: [ "style", "${_spotCopy2}", "top", '225px', { fromValue: '238px'}], position: 2809, duration: 1192 },
                { id: "eid78", tween: [ "style", "${_spotCopy}", "opacity", '0', { fromValue: '0'}], position: 15, duration: 0 },
                { id: "eid77", tween: [ "style", "${_spotCopy}", "opacity", '1', { fromValue: '0'}], position: 777, duration: 970 },
                { id: "eid83", tween: [ "style", "${_spotCopy}", "opacity", '1', { fromValue: '1'}], position: 1747, duration: 0 },
                { id: "eid84", tween: [ "style", "${_spotCopy}", "opacity", '0', { fromValue: '1'}], position: 2691, duration: 576 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19768280");
