const { input_typing_params } = require('./utils');
const { USER_CNPJ, USER_PASS } = require('./constants');

const user_fields = async (page) => {
  const input_cnpj = await page.$('#usuario');
  const input_pass = await page.$('#senha');
  const button_confirm = await page.$('.textoButton');

  await input_cnpj.type(USER_CNPJ, input_typing_params);
  await input_pass.type(USER_PASS, input_typing_params);

  return button_confirm.click();
};

module.exports = user_fields;
