Company = new Mongo.Collection('companies');

Company.allow({
    insert:function(userId, doc) { return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
}); 

if ( Meteor.isServer ) {
  Company._ensureIndex( { userId: 1, companyName: 1, about: 1, keywords: 1 } );
}


CompanyAssets = new Mongo.Collection('companyassets');

CompanyAssets.allow({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

DistributionLists = new Mongo.Collection('distrolist');

DistributionLists.allow ({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

CompanyTeam = new Mongo.Collection('prteam');

CompanyTeam.allow ({
    insert:function(userId, doc) {return !! userId;},
     update:function(userId, doc) {return !! userId;},
     remove:function(userId, doc) {return !! userId;}
           
});

Influencers = new Mongo.Collection('influencers');

Influencers.allow ({
    insert:function(userId, doc) {return !! userId;},
    update: function (userId, doc) {return !! userId;},
    remove: function (userId, doc) {return !! userId;}
           
});

Settings = new Mongo.Collection('settings');

Settings.allow ({
    insert:function(userId, doc) {return !! userId;},
    update: function (userId, doc) {return !! userId;},
    remove: function (userId, doc) {return !! userId;}
           
});
