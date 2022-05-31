import express from 'express';

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send("hello doctor");
})

router.post('/postformdata', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

export default router;

