const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../server/app')

const expect = chai.expect

process.env.NODE_ENV = 'test'

chai.use(chaiHttp)

describe('GET /api/champions', () => {

  it('can get all champions', done => {
    chai.request(app)
      .get('/api/champions')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        // TODO test res.body here
        done()
      })
  })

  it('can query based on id', done => {
    chai.request(app)
      .get('/api/champions?id=1')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        res.body.map(champion => {
          expect(champion.id).to.equal(1)
        })
        done()
      })
  })

})
