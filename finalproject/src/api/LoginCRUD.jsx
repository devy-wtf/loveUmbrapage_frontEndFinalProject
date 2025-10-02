const API_URL = 'http://localhost:3000/users';

export async function validateUser(username, password) {
  const response = await fetch(API_URL);
  const users = await response.json();

  const match = users.find(
    user => user.regisUsername === username && user.createPassword === password
  );

  return !!match;
}
