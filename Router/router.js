const express = require('express');
const router = express.Router();
const user = require('../models/user')

router.post('/contact', async (req, res) => {
    
    const { name, email, message } = req.body;
    if (!name || !email || !message) { 

        return res.json({ alertMessage : 'Please fill all field' });
    }

    try {
            const data = new user({name, email,message});
            const userData = await data.save();
            if (userData) {
                return res.json({ message: 'Send Message Successfully!' });
            }
        }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;