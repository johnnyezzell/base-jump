// Some people will suggest that the following
// methods should never be created.  However, if
// someone wants to create their over method on
// the object with the same name, they can overwrite
// this base-jump method easily. 
//
// Sample of overwritting object proptotype method.
// var myObject.copy = function() {...};
(function() {

    function copyObject(sourceObject) {
        var targetObject = {};
        for(var propertyName in sourceObject) {
            // We ignore functions because this causes problems when
            // dealing with two way databinding.  In the future, we may
            // change this and create a new copySafe that does not copy
            // the functions.
            if(typeof sourceObject[propertyName] !== 'function')
                targetObject[propertyName] = sourceObject[propertyName];
        }
        return targetObject;
    }
    
    // Create a copy of the current object.
    // Arrays will be copied as a value.
    Object.defineProperty(Object.prototype, 'copy', {
        value: function() {
            return copyObject(this);
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
    // Check to see if the current object is an Array
    Object.defineProperty(Object.prototype, 'isArray', {    
        value: function() {
            return Object.prototype.toString.call(this) === "[object Array]";
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
    Object.defineProperty(Object.prototype, 'isFunction', {
        value: function() {
            return typeof this === 'function';   
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
}());