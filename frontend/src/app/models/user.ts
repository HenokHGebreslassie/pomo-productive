export class User {
  public static userHolder = new User()

  private _id: string = ''
  private _email: string = ''
  private _password : string = ''
  private _firstName : string = ''
  private _lastName : string = ''


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
  public static createUserFromObject(obj: object) : User {
    const user: User = new User()
    Object.assign(user, obj)
    return user
  }
}
