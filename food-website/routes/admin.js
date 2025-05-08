const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Category = require("../models/Category");
const Item = require("../models/Item");
const adminLayout = "../views/layouts/admin";

router.get("/dashboard", async (req, res) => {
  try {
    const categories = await Category.find();
    const items = await Item.find().populate("category");
    res.render("admin/dashboard", { categories, items, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});

router.get("/add", async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("admin/addNew", { layout: adminLayout, categories });
  } catch (error) {
    console.log(error);
  }
});

router.post("/category", upload.single("image"), async (req, res) => {
  try {
    const { name } = req.body;
    const image = "/uploads/" + req.file.filename;
    const newCategory = new Category({ name, image });
    await Category.create(newCategory);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
});

router.post(
  "/item",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        category,
        newPrice,
        oldPrice,
        description,
        seasonalItem,
        newItem,
      } = req.body;
      const image1 = req.files.image1
        ? "/uploads/" + req.files.image1[0].filename
        : "";
      const image2 = req.files.image2
        ? "/uploads/" + req.files.image2[0].filename
        : "";
      const newItems = new Item({
        name,
        category,
        newPrice,
        oldPrice,
        description,
        image1,
        image2,
        seasonalItem: seasonalItem === "on",
        newItem: newItem === "on",
      });
      await Item.create(newItems);
      console.log(newItems);
      res.redirect("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/edit-cat/:id", async (req, res) => {
  try {
    const categories = await Category.findOne({ _id: req.params.id });
    res.render("admin/editCat", { categories, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});

// EDIT CATEGORY ROUTE
router.put("/edit-cat/:id", upload.single("image"), async (req, res) => {
  try {
    const { name } = req.body;

    const updatedData = { name };

    if (req.file) {
      updatedData.image = "/uploads/" + req.file.filename;
    }

    await Category.findByIdAndUpdate(req.params.id, updatedData);
    res.redirect("/dashboard");
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send("Update failed.");
  }
});
module.exports = router;
