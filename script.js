function checkValidateAccount(account) {
  let regx = /^[_a-z0-9]{6,}$/;
  if (regx.test(account)) {
    console.log(`Account: ${account} hợp lệ!`);
  } else {
    console.log(`Account: ${account} không hợp lệ!`);
  }
}

let account = '123abc_';
checkValidateAccount(account);
account = '_abc123';
checkValidateAccount(account);
account = '______';
checkValidateAccount(account);
account = '123456';
checkValidateAccount(account);
account = 'abcdefg';
checkValidateAccount(account);
account = '.@';
checkValidateAccount(account);
account = '12345';
checkValidateAccount(account);
account = '1234_';
checkValidateAccount(account);
account = 'abcde ';
checkValidateAccount(account);
