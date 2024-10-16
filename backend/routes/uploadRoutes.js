import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
  // cb is CallBack
  destination(req, file, cb) {
    cb(null, 'uploads/') // null is for error
  },
  // creating file name
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

// check file type
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

// upload is a middleware
const upload = multer({
  storage,
})

// upload.single('image') is middleware
router.post('/', upload.single('image'), (req, res) => {
  res.send({
    message: 'File uploaded successfully',
    image: `/${req.file.path}`,
  })
})

export default router
