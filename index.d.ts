declare module "react-native-compass-heading" {

    export interface CompassHeading {
        heading:number; 
        accuracy:number;
    }

    type SuccessCallback = (heading: CompassHeading) => void;

    export function stop():void;

    export function start(degree_update_rate:number,callback:SuccessCallback):void;
}