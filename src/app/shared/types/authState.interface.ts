import { IBackendErr } from "./backendErrors";
import { ICurrentUser } from "./currentUser.interface";

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null,
  isLoggedIn: boolean | null,
  validationErrors: IBackendErr | null
}
