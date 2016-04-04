axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
records      = require 'roots-records'
collections  = require 'roots-collections'
dynamic_content = require 'dynamic-content'
excerpt      = require 'html-excerpt'
moment       = require 'moment'
cleanUrls       = require('clean-urls')

monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  locals:
    postExcerpt: (html, length, ellipsis) ->
      excerpt.text(html, length || 100, ellipsis || '...')
    dateFormat: (date, format) ->
      moment(date).format(format)

  extensions: [
    dynamic_content(write: { 'index.md': 'services'}),
    records(
      slider: { file: "data/slider.json" }
      slidertext: { file: "data/slidertext.json" }
      clients: { file: "data/clients.json" }
    ),
    collections(folder: 'news', layout: 'post'),
    collections(folder: 'posts', layout: 'post'),
    collections(folder: 'services', layout: 'page'),
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true

  server:
    "clean_urls": true
