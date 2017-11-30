const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../server')

const expect = chai.expect

process.env.NODE_ENV = 'test'

chai.use(chaiHttp)

const BattleriteController = require('../../server/controllers/battlerites')

it('can get battlerites', (done) => {
  chai.request(app)
    .get('/api/battlerites')
    .end( (err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.a('array')
      // TODO test res.body here
      done()
    })
})
