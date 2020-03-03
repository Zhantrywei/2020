const htmlToText = require('html-to-text')
const Fontmin = require('fontmin')
const fs = require('fs')
const path = require('path')
const htmlfs = fs.readFileSync(__dirname + '/index.html', 'utf-8')

const text = htmlToText.fromString(htmlfs, {
    wordwrap: 130,
    tables: true
})

function fontminRun(text){
    const srcPath = "../../../20200106/font-study/lib/FZSJ-OXKAJW.ttf"
    const destPath = "./fonts"
    const fontmin = new Fontmin().src(srcPath)
    
}
fontminRun(text);
