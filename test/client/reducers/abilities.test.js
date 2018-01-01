import reducer from '../../../client/reducers/abilities'

const chai = require('chai')
const actionTypes = require('../../../client/actionTypes')

const expect = chai.expect

const initialState = {
  isFetching: false,
  error: '',
  abilities: [],
  activeAbility: -1
}

process.env.NODE_ENV = 'test'

describe('abilities reducer', () => {

  it('REQUEST_ABILITIES with initialState', done => {
    const payload = {
      type: actionTypes.REQUEST_ABILITIES
    }
    chai.expect(reducer(initialState, payload).isFetching).to.equal(true)
    done()
  })

})
