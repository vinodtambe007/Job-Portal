const express = require('express');
const {CategoryController} = require('../controller/Category_controller');
const router = express.Router();

router.get("/",CategoryController.getAllCategory);
router.get("/limit/:limit",CategoryController.getCategoryByLimit);
router.get("/:id",CategoryController.getCategoryById);
router.post("/add",CategoryController.addCategory);
router.post("/update/:id",CategoryController.updateCategory);
router.delete("/delete/:id",CategoryController.deleteCategoryById);

module.exports = router;