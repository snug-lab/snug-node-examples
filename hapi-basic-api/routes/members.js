'use strict';

exports.register = function(server, options, next) {
    // Our storage of members
    var members = [];

    server.route([{
        method: 'GET',
        path: '/members',
        handler: function(request, reply) {
            // Return the list of members
            reply(members);
        }
    }, {
        method: 'POST',
        path: '/members',
        handler: function(request, reply) {
            // Get the members
            var member = request.payload.member;
            // Let's store the members
            var key = members.push(member);
            reply({                
                member: member
            });
        }
    }]);

    next();
}

exports.register.attributes = {
    name: 'routes-members',
    version: '1.0.0'
};
