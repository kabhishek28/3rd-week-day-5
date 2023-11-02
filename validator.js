const isValid = function(value){
    if (typeof value === "undefined" || value ===null)return flase;
    if (typeof value === "string" && value.trim().length ===0) return false;
    if (typeof value === Number && value.trim().length ===0) return flase;
    return true;
};
module.exports ={isValid}