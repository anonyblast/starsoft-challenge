import { User } from '../src/users/entities/user.entity';

describe('User Entity', () => {
  it('should create a user entity instance', () => {
    const user = new User();
    user.name = 'John Doe';
    user.email = 'john.doe@example.com';
    user.password = 'secret';

    expect(user).toBeInstanceOf(User);
    expect(user.name).toEqual('John Doe');
    expect(user.email).toEqual('john.doe@example.com');
    expect(user.password).toEqual('secret');
  });
});
