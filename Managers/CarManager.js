'use strict';

const auroraProxy=Symbol();
module.exports=class CarManager{
    constructor(theAuroraProxy){
        this[auroraProxy]=theAuroraProxy;
    }

    getCarForId(carId){
        return new Promise((resolve)=>{
            this[auroraProxy].getCarForId(carId).then(res=>{
                reslove(res);
            })
        })
    }
}