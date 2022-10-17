import { AsyncThunkAction } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsuncThunk<Return, Arg, RejectedValue> {
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  // eslint-disable-next-line
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)
    return result
  }
}