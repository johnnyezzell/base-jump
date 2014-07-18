var BJ = function(obj) {
    if (obj instanceof BJ) return obj;
    if (!(this instanceof BJ)) return new BJ(obj);
    this._wrapped = obj;
};

BJ.isFunction = function(obj) {
    return (typeof obj === 'function');
};