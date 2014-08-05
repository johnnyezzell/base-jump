// ##Object Extensions

// Some people will suggest that the following
// methods should never be created.  However, if
// someone wants to create their own method on
// the object with the same name, they can overwrite
// this base-jump method easily. 
//
// Sample of overwritting object proptotype method.
//
// var myObject.copy = function() {...};
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

// ###Type Check Functions

// Check to see if the current object is an array.
Object.defineProperty(Object.prototype, 'isArray', {    
    value: function() {
        return Object.prototype.toString.call(this) === "[object Array]";
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Check to see if the curren object is a function.
Object.defineProperty(Object.prototype, 'isFunction', {
    value: function() {
        return typeof this === 'function';   
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Check to see if the current object is a number.
Object.defineProperty(Object.prototype, 'isNumber', {
    value: function() {
        return !isNaN(parseFloat(this));
    },
    writable: true,
    configurable: true,
    enumrable: false
});

// Check to see if the current object is a string.
Object.defineProperty(Object.prototype, 'isString', {
    value: function() {
        return Object.prototype.toString.call(this) === '[object String]';
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Check to see if the current object is a boolean.
Object.defineProperty(Object.prototype, 'isBoolean', {
    value: function() {
        return Object.prototype.toString.call(this) === '[object Boolean]';
    },
    writeable: true,
    configurable: true,
    enumerable: false
});


// ###Type Conversion Functions

// Converts an object that can represent a number into a number.
//
// "Test 123.412" will return 123.412
Object.defineProperty(Object.prototype, 'toNumber', {
    value: function() {
        return parseFloat(this.toString().replace(/,/g, '').match(/(\+|-)?((\d+(\.\d+)?)|(\.\d+))/), 10);        
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Converts an object that can represent a boolean into a boolean
//
// "test" or 123 will return true.  "asdfas" or 0 will return false.
Object.defineProperty(Object.prototype, 'toBoolean', {
    value: function() {
        return ((this.isNumber() && this.toString() !== '0') ||
                (this.isString() && this.toString().trim().toLowerCase() === 'true'));
    },
    writable: true,
    configuration: true,
    enumerable: false
});