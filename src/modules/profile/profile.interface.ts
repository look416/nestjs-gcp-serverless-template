export type Profile = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}