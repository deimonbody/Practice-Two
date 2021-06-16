import runRover from "./task-4"

function getExpeditionsTargets(commandSeries) {
    let resultArr = commandSeries.map((command)=>{
        return runRover(command)
    })
    return resultArr;
}

export default function boundingRover(commandSeries) {
    let coordinates = getExpeditionsTargets (commandSeries);
    if(!coordinates.length) return {top:0,right:0,bottom:0,left:0};

    let xCoor = coordinates.map((elem)=>{return elem.x});
    let yCoor = coordinates.map((elem)=>{return elem.y});
    

    return {
        top:        Math.max(...yCoor),
        right:      Math.max(...xCoor),
        bottom:     Math.min(...yCoor),
        left:       Math.min(...xCoor)
    };
};
