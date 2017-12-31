const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../server/app')

const expect = chai.expect

process.env.NODE_ENV = 'test'

chai.use(chaiHttp)

describe('GET /api/loadouts', () => {

  it('can get all loadouts', (done) => {
    chai.request(app)
      .get('/api/loadouts')
      .end( (err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        // TODO test res.body here
        done()
      })
  })

})
