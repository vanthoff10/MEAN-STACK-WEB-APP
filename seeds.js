var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's rest", 
            image:"https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b014459df0c171aeebb3_340.jpg",
            description:"acon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner."
            
        }, 
        
        {
            name: "The bus cloud", 
            image:"https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104491f8c179afe4b3be_340.jpg",
            description:"Hey now brown cow"
            
        }, 
        
        {
            name: "Silver wrap town", 
            image:"https://pixabay.com/get/e83db50a2ff5083ed1584d05fb1d4e97e07ee3d21cac104491f8c179afe4b3be_340.jpg",
            description:"Sitting and having a memorable time"
            
        }
    ];

function seedDB(){
        //Remove all campgrounds
        Campground.remove({}, function(err){
    //         if(err){
    //             console.log(err);
    //         }
    //     console.log("removed campground");
        
    //     //add a few campgrounds
    //     data.forEach(function(seed){
    //     Campground.create(seed, function(err, campground){
    //         if(err){
    //             console.log(err);
    //         }else {
    //             console.log("Campground created");
                
    //             //create a comment
    //             Comment.create(
    //                     {
    //                         text:"This place is great. but i wish there was some more",
    //                         author: "Homer"
    //                     }, function(err, comment){
    //                         if(err){
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("created new comment");
    //                         }
                            
    //                     });
                
    //         }
    //     });
    // });
        
    });
    
    //add a few comments
}

module.exports = seedDB;

