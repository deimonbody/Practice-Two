
export default function boundingRect(coordsList) {
    if(!coordsList.length) return {top:0,bottom:0,left:0,right:0};

    let topAndBottom = [];
    let rightAndLeft = [];
    
    coordsList.map((element) => {
        rightAndLeft.push(element.x);
        topAndBottom.push(element.y);
    });
    
    return {
        top:    Math.max(...topAndBottom),
        bottom: Math.min(...topAndBottom),
        left:   Math.min(...rightAndLeft),
        right:  Math.max(...rightAndLeft),
     };
};
