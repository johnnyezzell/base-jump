// Global BJ object
var BJ = function(obj) {
    if (obj instanceof BJ) return obj;
    if (!(this instanceof BJ)) return new BJ(obj);
    this._wrapped = obj;
};

// Returns true if value passed is a function
BJ.isFunction = function(obj) {
    return (typeof obj === 'function');
};