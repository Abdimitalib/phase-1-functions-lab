const hqLocation=42
function distanceFromHqInBlocks(location){
    return Math.abs((location-hqLocation));
}

function distanceFromHqInFeet(location){
    return Math.abs(distanceFromHqInBlocks(location) * 264);
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264)
}
function calculatesFarePrice(start, destination){
    let distance = Math.abs((destination - start) * 264 );
    if(distance < 400){
        return 0;
    }else if(distance >= 400 && distance <= 2000){
        return Math.abs((distance- 400) * 0.02);
    }else if(distance > 2000 && distance <= 2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
}