'use strict'

const Factory = use('Factory')

Factory.blueprint('App/Model/Post', (fake) => {
  return {
    title: fake.sentence(),
    content: fake.paragraph()
  }
})