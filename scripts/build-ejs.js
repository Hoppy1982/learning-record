const path = require('path')
const fs = require('fs')
const ejs = require('ejs')

const ejsDir = path.join(__dirname, '/../client/src/pages')
const htmlDir = path.join(__dirname, '/../client/build/html')

fs.readdir(ejsDir, (err, filenames) => {
  if (err) {
    throw new Error(`Error reading filenames at ${ejsDir}`)
  }

  let ejsFiles = filterEjsFiles(filenames)

  ejsFiles.forEach((ejsFile) => {
    generateHTML(ejsFile)
  })
})



function filterEjsFiles(filenames) {
  return filenames.filter((filename) => {
    if (filename.split('.').pop() === 'ejs') {
      return true
    }
  })
}



function generateHTML(ejsFilename) {
  let htmlFileName = ejsFilename.split('.').shift() + '.html'

  ejs.renderFile(path.join(ejsDir, ejsFilename), {}, (err, html) => {
    if (err) {
      throw new Error(`Error creating html from ${ejsFilename}`)
    }

    fs.writeFile(path.join(htmlDir, htmlFileName), html, (err) => {
      if (err) {
        throw new Error(`Error saving ${htmlFileName}`)
      }
      console.log(`${htmlFileName} saved..`)
    })
  })
}
