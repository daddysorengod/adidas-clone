import { ICountState, ICountModel } from "./interface";
export const count: ICountModel = {
  state: {
    count: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state: ICountState, payload: number) {
      return { ...state, count: state.count + payload };
    },
  },
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, rootState: any) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};
