import moment from "moment";
import "moment-duration-format";

function convertFrames(time:any, standard:any){
    const convertedTime = time.split(":");
    const frames = convertedTime[3];
    const framesPerSec = standard === "NTSC" ? 30 : 25;
    const milliSecs = Number(framesPerSec) * frames * 40;
    const newTime = convertedTime[0]+":"+convertedTime[1]+":"+convertedTime[2]+"."+String(milliSecs);
    return newTime;
}

export function sumTime(time1:any, time2: any, standard: any){

    return moment.duration(convertFrames(time1, standard)).add(moment.duration(convertFrames(time2, standard))).format('hh:mm:ss:SS', {trim: false});    
    
}

export function diffTime(time1:any, time2: any, standard: any){
    var newTime1 = moment(convertFrames(time1, standard), 'hh:mm:ss:SS');
    var newTime2 = moment(convertFrames(time2, standard), 'hh:mm:ss:SS');

    return moment.duration(newTime1.diff(newTime2)).format('hh:mm:ss:SS', {trim: false});    

}