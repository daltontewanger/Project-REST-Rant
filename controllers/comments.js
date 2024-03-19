const router = require("express").Router();
const Place = require("../models/places");
const Comment = require("../models/comment");

// CREATE a new comment
router.post("/:id/comment", async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    if (req.body.rant === "on") {
      req.body.rant = true;
    } else {
      req.body.rant = false;
    }

    const newComment = await Comment.create(req.body);
    place.comments.push(newComment.id);
    await place.save();
    res.redirect(`/places/${place.id}`);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.render("error404");
  }
});

module.exports = router;
