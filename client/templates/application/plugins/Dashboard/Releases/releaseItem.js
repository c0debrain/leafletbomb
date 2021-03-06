Template.releaseItems.helpers({

title:function(e) {
     return "Releases";
},

width:function(e) {
     return "48%";
        
},

height:function(e) {
     return "100%";
},

releaselist: function(e) {
            var id= Company.findOne()._id;
             var postlist = [];
                if(Posts.findOne({userId: id,status:2 }) == undefined) {
                   postlist = [{title:'No Published Releases ',tagline:'0 found'}];
                } else {
                   postlist = Posts.find({userId: id, status:2 }, {sort:{releasedate: -1}});
                    }
         return postlist;
                        
            
 },
 draftlist: function(e) {
            var id= Company.findOne()._id;
            var postlist= [];
                if(Posts.findOne({userId: id,status:0 }) == undefined) {
                   postlist = [{title:'No Drafts ',tagline:'0 found'}];
                } else {
                   postlist = Posts.find({userId: id, status:0 }, {sort:{releasedate: -1}});
                    }
         return postlist;
                        
            
 },
 scheduledlist: function(e) {
            var id= Company.findOne()._id;
            var postlist = [];
                if(Posts.findOne({userId: id,status:1 }) == undefined) {
                   postlist = [{title:'No Scheduled Releases  ',tagline:'0 found'}];
                } else {
                   postlist = Posts.find({userId: id, status:1 }, {sort:{releasedate: -1}});
                   
                    }
            
         return postlist;
                        
            
 }

});

Template.releaseItem.helpers({

    docid: function(e) {
            return this.docId;
        },
    title: function(e) {
        return this.title;
        },    
        
    featuredImage: function() {
                       var featuredfile = "/media/file_placeholder.png"
                     PostAssets.find({docId:this.docId , type:"featured"}).forEach(
                                            function(files){

                                                featuredfile =Images.findOne({_id:files.filename}).url();
                                            
                                            
                                            });
                    return featuredfile;
                
    
   }, 
   
   showcounters:function(e) { if(this.docId) {
                                return "visible";
                                } else {
                                return "hidden";
                                }
                            },    
   
   totalseen:function(e) { 
                    console.log(this.docId+" , "+PostEngage.find({docId:this.docId , seen:1}).count());
                        Meteor.subscribe('postengagement',this.docId);
                if(this.docId != undefined) {
                      
                var numberSeen = PostEngage.find({docId:this.docId , seen:1}).count();      
   return numberSeen;
            }
   },
   
   totalcomments:function(e) { return 0; },
   
   totalshared:function(e) {return 0; },
        

});

Template.releaseItems.events({


    'click .list_Item' : function(e) {
                    
                    var theid = e.target.id;
                    
                    console.log(theid);
                    Router.go("/dashboard/"+this.userId+"/postCtrl/"+theid);
                }



});
