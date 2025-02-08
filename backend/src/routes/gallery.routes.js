const express = require('express');
const router = express.Router();
const Gallery = require('../models/gallery.model');
const multer = require('multer');

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/gallery');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Get all gallery items
router.get('/', async (req, res) => {
    try {
        const items = await Gallery.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new gallery item
router.post('/', upload.single('image'), async (req, res) => {
    const galleryItem = new Gallery({
        title: req.body.title,
        description: req.body.description,
        imageUrl: `/uploads/gallery/${req.file.filename}`,
        category: req.body.category
    });

    try {
        const newItem = await galleryItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get gallery item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Gallery.findById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Gallery item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
