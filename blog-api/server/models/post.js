'use strict';

module.exports = function(Post) {
    Post.createPost = function(req, callback) {
        // Post.findOne({id : id}).then(function(val){
        //     callback(null,val);
        // })
    };

    Post.remoteMethod('createPost', {
        accepts: {arg: 'vals', type: 'object', http: { source: 'req' }  },
        returns: {arg: 'val', type: 'object'}
    })
};
