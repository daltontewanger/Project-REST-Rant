const router = require("express").Router();
const Place = require("../models/places");

router.get("/new", (req, res) => {
  res.render("places/new");
});

//GET retrieve all places
router.get("/", async (req, res) => {
  try {
    const places = await Place.find();
    res.render("places/index", {
      places,
    });
  } catch (error) {
    console.log("error:", error);
    res.json({ message: "error getting place" });
  }
});

// GET retrieve by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    res.render("places/show", {
      place,
    });
  } catch (error) {
    console.log("error:", error);
    res.render("error404");
  }
});

router.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id });
  }
});

// CREATE place
router.post("/", async (req, res) => {
  if (!req.body.pic) {
    req.body.pic = undefined;
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  await Place.create(req.body);
  res.redirect("/places");
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      req.body.pic = "/images/coffee-cat.jpg";
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

module.exports = router;
