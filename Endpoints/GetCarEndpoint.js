'use strict';
const CarManager=require('Managers/CarManager');


const carManager=Symbol();
module.exports=class GetCarEndpoint{
    constructor(theCarManager){
        this[carManager]=theCarManager;
    }

    httpResponseForGetCar(thePathParameters){
        return new Promise((resolve)=>{
            const pathParameters=JSON.parse(JSON.stringify(thePathParameters));
            this[carManager].getCarForId(pathParameters.id).then(res=>{
                const responce={
                    statusCode:200,
                    body:JSON.stringify(res),
                    headers:{'x-api-version':"0.0.3"}
                };
                resolve(responce);
            })
        })
    }
}