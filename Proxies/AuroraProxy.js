'use strict';
const uuidv4=require('uuid/v4');

const auroraProxy=Symbol();
module.exports=class AuroraProxy{
    constructor(){

    }

    getCarForId(carId){
        console.log(`*****************  ${uuidv4()}  *******`);
        console.log(`TODO:Lookup Car in database for id: ${carId} ********`);
        return new Promise((resolve)=>{
            resolve({id:carId,make:"Scia",model:"FRS",color:"silver"})
        })
    }
}