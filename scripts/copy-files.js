const path = require('path')
const fs = require('fs')
const shelljs = require('shelljs')


const toCopy = [
  {
    name: 'favicon stuffs',
    src: path.join(__dirname, '/../client/src/static/toRoot'),
    dest: path.join(__dirname, '/../client/build'),
    ext: '*'
  },
  {
    name: 'images',
    src: path.join(__dirname, '/../client/src/static/images'),
    dest: path.join(__dirname, '/../client/build/static/images'),
    ext: '.jpg'
  }
]


toCopy.forEach(copyDetailsObj => {
  let filteredFiles

  fs.readdir(copyDetailsObj.src, (err, filenames) => {
    if (err) { throw new Error(`Error reading filenames at ${copyDetailsObj.src}`) }

    shelljs.mkdir('-p', copyDetailsObj.dest)//fs can only make one subdir at a time
    filteredFiles = filterFiles(filenames, copyDetailsObj.ext)
    copyFiles(filteredFiles, copyDetailsObj.src, copyDetailsObj.dest)
  })

})


function filterFiles(filenames, ext) {
  return filenames.filter(filename => {
    if (ext === '*') {return true}
    if (path.extname(filename) === ext) {return true}
  })
}


function copyFiles(filenames, src, dest) {
  filenames.forEach(filename => {
    fs.copyFile(path.join(src, filename), path.join(dest, filename), (err) => {
      console.log(src)
      console.log(dest)
      console.log(filename)
      if (err) {
        throw new Error(`Error copying ${filename}`)
      }

      console.log(`${filename} copied to ${dest}`)
    })
  })
}
