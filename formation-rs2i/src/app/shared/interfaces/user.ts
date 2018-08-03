import { Auth } from './auth';

export interface User extends Auth {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}
