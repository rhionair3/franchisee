const envDev = require('./env.development');
const envProd = require('./env.production');
module.exports = {
 setup: function (){
  if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'development') {
   return envDev;
  } else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'production') {
   return envProd;
  } else {
   return envDev;
  }
 }
}