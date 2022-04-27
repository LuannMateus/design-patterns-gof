import { User } from '../interfaces/User';

export class MyDatabaseMonoState {
  private static users: User[] = [];

  public getUsers(): void {
    for (const user of MyDatabaseMonoState.users) {
      console.log(user);
    }
  }

  public setUsers(user: User): void {
    MyDatabaseMonoState.users.push(user);
  }

  public removeUsers(index: number): void {
    MyDatabaseMonoState.users.splice(index, 1);
  }
}
