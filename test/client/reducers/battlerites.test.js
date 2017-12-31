import reducer from '../../../client/reducers/battlerites'

const chai = require('chai')
const actionTypes = require('../../../client/actionTypes')

const expect = chai.expect

const initialState = {
  isFetching: false,
  error: '',
  battlerites: []
}

process.env.NODE_ENV = 'test'

describe('battlerites reducer', () => {

  it('REQUEST_BATTLERITES with initialState', (done) => {
    const payload = {
      type: actionTypes.REQUEST_BATTLERITES
    }
    chai.expect(reducer(initialState, payload).isFetching).to.equal(true)
    done()
  })

})
