// api.js
import Realm from 'realm';
import realmConfig from './realmConfig';


const UserSchema = {
  name: 'FantasyMatch',
  properties: {
    FirstName:'string',
    LastName:'string',
    mobile:'string',
    username: 'string',
    email: 'string',
    password: 'string',
  },
};

const createAccount = async ({FirstName,LastName,mobile, username, email, password }) => {
  try {
    const realm = await Realm.open(realmConfig);
    realm.write(() => {
      realm.create('FantasyMatch', { FirstName,LastName,mobile, username, email, password });
    });
    console.log('Account created successfully!');
  } catch (error) {
    console.error('Error creating account: ', error);
    throw error;
  }
};

export { createAccount };
