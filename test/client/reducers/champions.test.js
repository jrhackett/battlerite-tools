import reducer from '../../../client/reducers/champions'

const chai = require('chai')
const actionTypes = require('../../../client/actionTypes')

const expect = chai.expect

const initialState = {
  isFetching: false,
  error: '',
  champions: []
}

process.env.NODE_ENV = 'test'

describe('champions reducer', () => {

  it('REQUEST_CHAMPIONS with initialState', (done) => {
    const payload = {
      type: actionTypes.REQUEST_CHAMPIONS
    }
    chai.expect(reducer(initialState, payload).isFetching).to.equal(true)
    done()
  })

})
