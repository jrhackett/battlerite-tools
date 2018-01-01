const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../server/app')

const expect = chai.expect

process.env.NODE_ENV = 'test'

chai.use(chaiHttp)

describe('server responds to general requests correctly', () => {

  it('GET / responds with 404', done => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })

  it('GET /api responds with 404', done => {
    chai.request(app)
      .get('/api')
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })

  it('404 random URL', done => {
    chai.request(app)
      .get('/foo/bar')
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })

})
