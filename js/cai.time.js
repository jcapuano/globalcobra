var cai = cai || {};  

cai.now = Date.now || function() { 
  return +new Date; 
}; 


cai.nowJSON = function() { 
  return new Date().toJSON(); 
}; 
