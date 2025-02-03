const express = require('express');
const {getAllJobs,addJobs,getJobById, getJobsByCompanyId,deleteJob ,updateJobBYId} = require("../controller/Job_controller");
const router = express.Router();
const auth = require("../middleware/auth")

router.get("/",getAllJobs);
router.get("/companyJobs/:id",getJobsByCompanyId);
router.post("/add",addJobs);
//authorization done
router.post("/update/:id",updateJobBYId);
router.get("/:id",getJobById);
router.post("/deleteJob",deleteJob);


module.exports = router;