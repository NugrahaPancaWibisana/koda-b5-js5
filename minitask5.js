const account = {
  id: 1,
  username: 'Nugraha Panca Wibisana',
  password: 'wibisana',
};

const newPassword = 'wibi1';

if (newPassword.length >= 5) {
  const changePassword = {
    ...account,
    password: newPassword,
  };

  console.log(changePassword.username, changePassword.password);
} else {
    console.log("Invalid password");
}

