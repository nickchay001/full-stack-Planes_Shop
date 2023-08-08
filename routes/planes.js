const express = require("express")
const router = express.Router()
const { getPlanes, createPlane, getPlane } = require('../controllers/planes')
const path = require('path')
const multer = require('multer')

// Показываем где хранить загружаемые файли
const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

// GET /api/planes
// получить все самолеты
router.get('/', getPlanes)

// GET /api/planes/:id
// получить самолет по id
router.get('/:id', getPlane)

// POST /api/planes
// Создать самолет
router.post('/', upload.single('planeImage'), createPlane)

module.exports = router