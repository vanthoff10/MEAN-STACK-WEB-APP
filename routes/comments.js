var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//=============================
//COMMENTS ROUTES
//=============================\

router.get("/new",isLoggedIn, function(req, res){
   //find campground by ID
   Campground.findById(req.params.id, function(err, campground){
      if(err)
      {
         console.log(err);
      }else {
         res.render("comments/new", {campground: campground});
      }
   });
   
});

router.post("/",isLoggedIn, function(req, res){
   //lookup campground with id
   Campground.findById(req.params.id, function(err, campground){
      if(err){
         console.log(err);
         res.redirect("/campgrounds");
      }
      else {
         Comment.create(req.body.comment, function(err, comment){
            if(err){
               console.log(err);
            } else {
               //add username and id to comment
               comment.author.id = req.user._id;
               comment.author.username = req.user.username;
               //save comment
               comment.save();
               campground.comments.push(comment);
               campground.save();
               console.log(comment);
               res.redirect("/campgrounds/" + campground._id);
            }
         });
      }
   });
   //create new comment
   //connect new comment to campground
   //redirect to campground show page
}); 

function checkCommentOwnership(req, res, next){
   if(req.isAuthenticate()){
      Comment.findById(req.params.comment_id, function(err, foundComment){
         if(err){
            res.redirect("back");
         } else {
            if(foundComment.author.id.equals(req.user._id)) {
               next();
            } else {
               res.redirect("back");
            }
         }
      });
   }
}
function isLoggedIn(req, res, next) {
   if(req.isAuthenticated()){
      return next();
   } 
   res.redirect("/login");
}

//middeware


module.exports = router;
