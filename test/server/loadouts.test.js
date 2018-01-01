const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../server/app')

const expect = chai.expect

process.env.NODE_ENV = 'test'

chai.use(chaiHttp)

const testLoadout = {
  name: 'Test Create Loadout',
  build: [1, 2, 3, 4, 5],
  champion_id: 1
}

describe('GET /api/loadouts', () => {

  it('can get all loadouts', done => {
    chai.request(app)
      .get('/api/loadouts')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        // TODO test res.body here
        done()
      })
  })

})

describe('POST /api/loadouts', () => {

  it('can create a simple loadout', done => {
    createLoadout(testLoadout, (err, res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.a('array')
      expect(res.body[0].name).to.equal(testLoadout.name)
      expect(res.body[0].build).to.equal(testLoadout.build.sort((a, b) => a - b).join('-'))
      expect(res.body[0].champion_id).to.equal(testLoadout.champion_id)
      done()
    })
  })

})

describe('DELETE /api/loadouts', () => {

  it('can create and then delete a simple loadout', done => {
    createLoadout(testLoadout, (createErr, createRes) => {
      chai.request(app)
        .delete('/api/loadouts')
        .send({ uuid: createRes.body[0].uuid })
        .end((deleteErr, deleteRes) => {
          expect(deleteRes).to.have.status(200)
        })
        done()
    })
  })

})

const createLoadout = (loadout, endCallback) => {
  chai.request(app)
    .post('/api/loadouts')
    .send(loadout)
    .end((err, res) => endCallback(err, res))
}
