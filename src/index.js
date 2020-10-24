require('dotenv/config');
const puppeteer = require('puppeteer');

/**
 *
 * Esse código ainda será refatorado, pois está confuso e extenso :V
 */

const {
  USER_CNPJ,
  USER_PASS,
  USER_SERVICE_CODE,
  COMPANY_CNPJ,
  COMPANY_NAME,
  COMPANY_ZIP_CODE,
  COMPANY_DISTRICT,
  COMPANY_CITY,
  COMPANY_STREET,
  COMPANY_EMAIL,
  COMPANY_STATE,
  NOTE_CODE,
  NOTE_DESCRIPTION,
  NOTE_QUANTITY,
  NOTE_VALUE,
} = process.env;

const input_typing_params = { delay: 100 };

const clear_input = (element) => (element.value = '');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    'http://sefa.serra.es.gov.br:8080/tbw/loginNFEContribuinte.jsp?execobj=NFERelacionados'
  );

  const input_cnpj = await page.$('#usuario');
  const input_pass = await page.$('#senha');
  const button_confirm = await page.$('.textoButton');

  await input_cnpj.type(USER_CNPJ, input_typing_params);

  await input_pass.type(USER_PASS, input_typing_params);

  await button_confirm.click();

  await setTimeout(async () => {
    const img_generate_note = await page.$('img#img1');

    await img_generate_note.click();

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

      setTimeout(async () => {
        await input_company_cnpj.type(COMPANY_CNPJ, input_typing_params);
        await input_company_name.type(COMPANY_NAME, input_typing_params);
        await input_company_register.type(COMPANY_CNPJ, input_typing_params);

        await input_company_zip_code.type(
          COMPANY_ZIP_CODE,
          input_typing_params
        );
        await input_company_street.type(COMPANY_STREET, input_typing_params);
        await input_company_district.type(
          COMPANY_DISTRICT,
          input_typing_params
        );
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

        setTimeout(async () => {
          await button_confirm_note.click();
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
})();
