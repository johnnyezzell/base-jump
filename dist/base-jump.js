/*
base-jump 0.0.0 - A leap forward for your base JavaScript objects
Built on 2014-07-17
*/
Array.prototype.insertBefore = function(index, item) {
    this.splice(index, 0, item);
};
;
