const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.model');
const multer = require('multer');

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/blog');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Get all blog posts
router.get('/', async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new blog post
router.post('/', upload.single('featuredImage'), async (req, res) => {
    const blogPost = new Blog({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        featuredImage: `/uploads/blog/${req.file.filename}`,
        tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : []
    });

    try {
        const newPost = await blogPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get blog post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update blog post
router.patch('/:id', upload.single('featuredImage'), async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        if (req.body.title) post.title = req.body.title;
        if (req.body.content) post.content = req.body.content;
        if (req.body.author) post.author = req.body.author;
        if (req.file) post.featuredImage = `/uploads/blog/${req.file.filename}`;
        if (req.body.tags) post.tags = req.body.tags.split(',').map(tag => tag.trim());
        
        post.updatedAt = Date.now();

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
