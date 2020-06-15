'use strict';
const CarManager=require('./Managers/CarManager');
const AuroraProxy=require('./Proxies/AuroraProxy');
const GetCarEndpoint=require('./EndPoints/GetCarEndpoint');

module.exports.hello = async (event,context,callback) => {
 const getCarEndpoint=newCarEndpoint(new CarManager(new AuroraProxy()));
 getCarEndpoint.httpResponceForGetCar(event.pathParameters).then(res=>{
   callback(null,res);
 })
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
