const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Ilari',
      room: 'Homeoffice'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    users.removeUser('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user whose id is not found', () => {
    users.removeUser('12222');
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var res = users.getUser('1');
    expect(res.name).toEqual('Mike');
  });

  it('should not find a user whose id is not found', () => {
    var res = users.getUser('1222');
    expect(res).toNotExist();
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });
});
