import reducer from '../../../client/reducers/loadouts'

const chai = require('chai')
const actionTypes = require('../../../client/actionTypes')

const expect = chai.expect

const initialState = {
  isFetching: false,
  error: '',
  loadouts: []
}

process.env.NODE_ENV = 'test'

describe('loadouts reducer', () => {

  it('REQUEST_LOADOUTS with initialState', (done) => {
    const payload = {
      type: actionTypes.REQUEST_LOADOUTS
    }
    chai.expect(reducer(initialState, payload).isFetching).to.equal(true)
    done()
  })

})
