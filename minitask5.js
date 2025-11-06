const account = {
  id: 1,
  username: 'Nugraha Panca Wibisana',
  password: 'wibisana',
};

const newPassword = 'wibi';

if (newPassword.length >= 5) {
  const changePassword = {
    ...account,
    password: newPassword,
  };

  console.log(changePassword.username, changePassword.password);
}

console.log("Invalid password");

