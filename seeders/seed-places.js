const mongoose = require("mongoose");
const Place = require("../models/places");
require("dotenv").config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    const seedData = [
      {
        name: "H-Thai-ML",
        city: "Seattle",
        state: "WA",
        cuisines: "Thai, Pan-Asian",
        pic: "/images/table-in-restaurant.jpg",
        founded: 1989,
      },
      {
        name: "Coding Cat Cafe",
        city: "Phoenix",
        state: "AZ",
        cuisines: "Coffee, Bakery",
        pic: "/images/coffee-cat.jpg",
        founded: 2020,
      },
    ];

    await Place.deleteMany();
    await Place.insertMany(seedData);

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();
