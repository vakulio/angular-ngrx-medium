export interface ICurrentUser {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string | null;
  image: string | null;
  token: string;
}

export interface ICurrentUserInput extends ICurrentUser {
  password: string;
}
