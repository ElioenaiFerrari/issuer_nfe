const { clear_input, input_typing_params } = require('./utils');
const {
  USER_SERVICE_CODE,
  COMPANY_CNPJ,
  COMPANY_NAME,
  COMPANY_ZIP_CODE,
  COMPANY_STREET,
  COMPANY_DISTRICT,
  COMPANY_CITY,
  COMPANY_STATE,
  COMPANY_EMAIL,
  NOTE_CODE,
  NOTE_QUANTITY,
  NOTE_VALUE,
} = require('./constants');

const company_fields = async (page) => {
  await setTimeout(async () => {
    const select_services_provided = await page.$('#qyidatividade');
    const input_company_cnpj = await page.$('#qycnpjcpf');
    const input_company_name = await page.$('#qynome');
    const input_company_zip_code = await page.$('#input8');
    const input_company_district = await page.$('#input4');
    const input_company_billing_address = await page.$('#input5');
    const input_company_city = await page.$('#input2');
    const input_company_state = await page.$('#input3');
    const input_company_street = await page.$('#input6');
    const input_company_email = await page.$('#input10');
    const input_company_register = await page.$('#qyrginscrestadual');

    const input_note_code = await page.$('#icodigo');
    // const input_note_description = await page.$('#qynfitensdescritem');
    const input_note_quantity = await page.$('#qynfitensqtd');
    const input_note_value = await page.$('#qynfitensvlrunitario');
    const input_note_total_value = await page.$('#qynfitensvlrtotal');

    const button_insert_note = await page.$('#imagebutton1Imagem');
    const button_confirm_note = await page.$('#imagebutton4Texto');

    await select_services_provided.select(USER_SERVICE_CODE);

    await setTimeout(async () => {
      await input_company_cnpj.type(COMPANY_CNPJ, input_typing_params);
      await input_company_name.type(COMPANY_NAME, input_typing_params);
      await input_company_register.type(COMPANY_CNPJ, input_typing_params);

      await input_company_zip_code.type(COMPANY_ZIP_CODE, input_typing_params);
      await input_company_street.type(COMPANY_STREET, input_typing_params);
      await input_company_district.type(COMPANY_DISTRICT, input_typing_params);
      await input_company_city.type(COMPANY_CITY, input_typing_params);
      await input_company_state.type(COMPANY_STATE, input_typing_params);

      await input_company_billing_address.type(
        COMPANY_NAME,
        input_typing_params
      );
      await input_company_email.type(COMPANY_EMAIL, input_typing_params);

      await input_note_code.type(NOTE_CODE, input_typing_params);
      // await input_note_description.type(NOTE_DESCRIPTION, input_typing_params);
      await input_note_quantity.type(NOTE_QUANTITY, input_typing_params);

      //clear inputs
      await input_note_value.evaluate(clear_input);
      await input_note_value.type(NOTE_VALUE, input_typing_params);

      await input_note_total_value.click();

      await button_insert_note.click();

      await setTimeout(async () => {
        await button_confirm_note.click();
      }, 2000);
    }, 2000);
  }, 2000);
};

module.exports = company_fields;
