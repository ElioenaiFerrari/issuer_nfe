const button_generate_note = async (page) => {
  const img_generate_note = await page.$('img#img1');

  return img_generate_note.click();
};

module.exports = button_generate_note;
