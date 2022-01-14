export interface ICountState {
  count: number;
}

export interface ICountModel {
  state: ICountState;
  reducers: {
    increment: (state: ICountState, payload: number) => ICountState;
  };
  effects: (
    dispatch: any
  ) => {
    incrementAsync: (payload: number, rootState: any) => void;
  };
}
