const express = require('express')
const { getAllCompanies,addCompany,getCompanyById ,updateCompany } = require("../controller/Company_controller");
const router = express.Router();

router.get("/",getAllCompanies);

router.get("/:id",getCompanyById);
router.post("/add",addCompany);
router.post("/update/:id",updateCompany);


module.exports = router;