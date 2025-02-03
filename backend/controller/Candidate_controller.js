const CandidateProfile = require('../model/Candidate')


//upload resume 


const getAllCandidateProfile = async (req, res) => {
    try {
        const data = await CandidateProfile.find({ status: "Active" });
        return res.status(200).json({ data: data });
    } catch (err) {
        return res.status(400).json({ error: err })
    }
}
const getCandidateByuserId = async (req, res) => {
    try {
        let user_id = req.params.id;
        let candidate_details = await CandidateProfile.findOne({user_id:user_id})
        return res.status(200).json({ success:true , data : candidate_details })

    } catch (err) {
        return res.status(400).json({ error: err })
    }
}
const updateCandidateProfile = async (req, res) => {
    try {
        const updatedCandidate = await CandidateProfile.findOneAndUpdate(
            { user_id: req.params.id },
            {
                $set: {
                    full_name:req.body.full_name,
                    email:req.body.email,
                    mobile_number:req.body.mobile_number,
                    linkedIn_url:req.body.linkedIn_url,
                    github_url:req.body.github_url,
                    experience:req.body.experience,
                    years_of_experience:req.body.years_of_experience,
                    city:req.body.city,
                    state:req.body.state,
                    address:req.body.address,
                    updated_on: Date.now(),
                    updated_by: 1
                }
            },
            { new: true }
        );

        if (!updatedCandidate) {
            return res.status(404).json({ error: 'Candidate profile not found' });
        }
        return res.status(200).json({ success:true,candidate_updated: updatedCandidate })
    } catch (err) {
        return res.status(400).json({ error: err })

    }
}
const deleteCandidateProfile = async (req, res) => {
    try {
        const deleteCandidate = await CandidateProfile.findOneAndUpdate(
            { candidate_id: req.params.id },
            {
                $set: {
                    status: 'Active',
                    deleted_on: Date.now(),
                    deleted_by: 1
                }
            },
            { new: true }
        );
        return res.status(200).json({ candidate_updated: deleteCandidate })
    } catch (err) {
        return res.status(400).json({ error: err })

    }
}
//IMP
const calculateFilledPercentage = async (req,res) => {
    try {
        const candidate = await CandidateProfile.findOne({ candidate_id: req.params.id });

        if (!candidate) {
            throw new Error('Candidate profile not found');
        }

        let filledFields = 0;
        for (const key in candidate.toObject()) {
            if (candidate[key] !== undefined && candidate[key] !== null) {
                filledFields++;
            }
        }

        const totalFields = Object.keys(CandidateProfile.schema.paths).length - 1; 
        const filledPercentage = (filledFields / totalFields) * 100;

       // return filledPercentage;
        return res.status(200).json({ filledPercentage: filledPercentage })

    } catch (err) {
        throw err;
    }
};

const uploadResume = async(req,res) =>{
    try {
        // Logic to handle file upload

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const fileName = req.file.filename;
        console.log("filename = ",fileName)

        const userId = req.params.id;
        const candidate = await CandidateProfile.findOneAndUpdate(
            { user_id: userId },
            { resume: fileName }, // Update the resume field with the uploaded file name
            { new: true }
        );

        if (!candidate) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getAllCandidateProfile, getCandidateByuserId, updateCandidateProfile, deleteCandidateProfile , calculateFilledPercentage ,uploadResume};