const company_fields = require('./company_fields');
const button_generate_note = require('./button_generate_note');
const user_fields = require('./user_fields');
const build_page = require('./build_page');

(async () => {
  const page = await build_page(
    'http://sefa.serra.es.gov.br:8080/tbw/loginNFEContribuinte.jsp?execobj=NFERelacionados'
  );

  await user_fields(page);

  setTimeout(async () => {
    button_generate_note(page);
    await company_fields(page);
  }, 2000);
})();
