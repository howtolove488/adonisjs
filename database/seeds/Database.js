'use strict'

const Factory = use('Factory')

class DatabaseSeeder {

  * run () {
    yield Factory.model('App/Model/Post').create(5) 
  }

}

module.exports = DatabaseSeeder