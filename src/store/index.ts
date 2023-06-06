import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// define your typings for the store state
export interface State {
  count: number;
}

// @ts-ignore
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    generatedCodes: [],
  },

  mutations: {
    createCode(state, payload: {}) {
      console.log("first");

      state.generatedCodes.push(payload);

      console.log(state.generatedCodes);
    },
  },
});
