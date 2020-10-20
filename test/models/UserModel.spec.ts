import { User } from '@/models/user';
import { Gender } from '@/models/enums/gender';

const user = new User();
const gender = Gender.Female;

describe('UserModel', () => {
  it('Must contain a id: number', () => {
    expect(typeof user.id).toBe('number');
  });

  it('Must contain a name: string', () => {
    expect(typeof user.name).toBe('string');
  });

  it('Must contain a status: boolean', () => {
    expect(typeof user.status).toBe('boolean');
  });

  it('Must contain a email', () => {
    expect(typeof user.email).toBe('string');
  });

  it('Must contain a gender', () => {
    expect(typeof user.gender).toBe(typeof gender);
  });
});
