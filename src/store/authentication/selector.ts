import { State } from "../../store/index"

export const isLoginLoading = (state: State) => state.authentication.isLoading

export const isLoginLoaded = (state: State) => state.authentication.isLoaded

export const user = (state: State) => state.authentication.user

export const errors = (state: State) => state.authentication.errors
