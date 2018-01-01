const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../server/app')

const expect = chai.expect

process.env.NODE_ENV = 'test'

chai.use(chaiHttp)

describe('GET /api/abilities', () => {

  it('can get all abilities', done => {
    chai.request(app)
      .get('/api/abilities')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        // TODO test res.body here
        done()
      })
  })

  it('can query based on champion_id', done => {
    chai.request(app)
      .get('/api/abilities?champion_id=1')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        res.body.map(ability => {
          expect(ability.champion_id).to.equal(1)
        })
        done()
      })
  })

})
