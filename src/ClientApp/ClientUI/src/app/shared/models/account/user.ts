export interface User {
    firstName: string;
    lastName: string;
    jwt: string;
    user: UserDetailsDto;
}

export interface UserDetailsDto {
    firstName: string;
    lastName: string;
    isOnline: boolean;
    id: string;
    userName: string;
    email: string;
  }