const path = require('path')
const fs = require('fs')
//fs can only make one subdir at a time, shelljs can make nested dirs
const shelljs = require('shelljs')
const util = require('util')

const readDir = util.promisify(fs.readdir)


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
  shelljs.mkdir('-p', copyDetailsObj.dest)

  readDir(copyDetailsObj.src)
  .then(filenames => {
    return filterFiles(filenames, copyDetailsObj.ext)
  })
  .then(filteredFiles => {
    copyFiles(filteredFiles, copyDetailsObj.src, copyDetailsObj.dest)
  })
  .catch(err => {
    throw new Error('readDir failed...')
  })

})


/*
toCopy.forEach(copyDetailsObj => {
  let filteredFiles

  fs.readdir(copyDetailsObj.src, (err, filenames) => {
    if (err) { throw new Error(`Error reading filenames at ${copyDetailsObj.src}`) }

    shelljs.mkdir('-p', copyDetailsObj.dest)//fs can only make one subdir at a time
    filteredFiles = filterFiles(filenames, copyDetailsObj.ext)
    copyFiles(filteredFiles, copyDetailsObj.src, copyDetailsObj.dest)
  })

})*/


function filterFiles(filenames, ext) {
  return filenames.filter(filename => {
    if (ext === '*') {return true}
    if (path.extname(filename) === ext) {return true}
  })
}


function copyFiles(filenames, src, dest) {
  filenames.forEach(filename => {
    fs.copyFile(path.join(src, filename), path.join(dest, filename), (err) => {

      if (err) {
        throw new Error(`Error copying ${filename}`)
      }

      console.log(`${filename} copied to ${dest}`)
    })
  })
}
