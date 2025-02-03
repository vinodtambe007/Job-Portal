const express = require('express')
const router = express.Router();
const upload = require('../middleware/upload')
const {
    getAllCandidateProfile, getCandidateByuserId,
    updateCandidateProfile, deleteCandidateProfile,calculateFilledPercentage
    ,uploadResume
    } = require("../controller/Candidate_controller")


 //routing   
router.get('/', getAllCandidateProfile);
router.get('/:id', getCandidateByuserId);
router.get('/delete/:id', deleteCandidateProfile);
router.post('/update/:id', updateCandidateProfile);
router.get('/filledper/:id', calculateFilledPercentage);
//upload file
router.post('/upload/:id',upload.single('file'),uploadResume)

module.exports = router;