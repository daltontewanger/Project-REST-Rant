const router = require("express").Router();
const Place = require("../models/places");
const Comment = require("../models/comment");

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
    const place = await Place.findById(id).populate('comments');
    res.render("places/show", {
      place,
    });
  } catch (error) {
    console.log("error:", error);
    res.render("error404");
  }
});

router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  try {
    const place = await Place.findById(id);
    res.render("places/edit", {
      place,
    });
  } catch (error) {
    console.log("error:", error);
    res.render("error404");
  }
});

// CREATE place
router.post("/", async (req, res) => {
  try {
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
  } catch (error) {
    if (error && error.name == "ValidationError") {
      let message = "Validation Error: ";
      for (var field in error.errors) {
        message += `${field} was ${error.errors[field].value}. `
        message += `${error.errors[field].message}`
      }
      res.render("places/new", { message, place: req.body });
    } else {
      res.render("error404");
    }
  }
});

// PUT (UPDATE) Place
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.body.pic) {
      req.body.pic = undefined;
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }
    await Place.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect(`/places/${id}`);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error updating place", error });
  }
});

// DELETE Place
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    res.redirect("/places");
  } catch (error) {
    console.log("Error:", error);
    res.render("error404");
  }
});

module.exports = router;
