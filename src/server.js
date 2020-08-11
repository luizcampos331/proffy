const { 
  pageLanding, 
  pageStudy, 
  pageGiveClasses, 
  saveClasses 
} = require('./pages')

//Servidor
const express = require('express');
const server = express();

//Configurando Template Engine (nunjuks)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen(5004)