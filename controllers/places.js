const router = require("express").Router();
const places = require("../models/places");

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", {
      place: places[id]
    });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "/images/coffee-cat.jpg";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;
