import {
  CommitOptions,
  createLogger,
  createStore,
  DispatchOptions,
  Store as VuexStore,
} from "vuex";

import { Actions } from "./actions";
import { Getters, getters } from "./getters";
import { Mutations, mutations } from "./mutations";
import { State, state } from "./state";

// import { Actions, actions } from './actions';
export const store = createStore<State>({
  plugins: import.meta.env.NODE_ENV === "development" ? [createLogger()] : [],
  state,
  mutations,
  getters,
});

export function useStore() {
  return store as Store;
}

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
