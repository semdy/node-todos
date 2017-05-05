var __uid = 0;

var getUid = function(){
    return ++__uid;
};

module.exports = getUid;