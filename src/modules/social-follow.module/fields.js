const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const sectionHeader = JSON.parse(fs.readFileSync('../../json/section-header.json'));  
  const sectionFooter = JSON.parse(fs.readFileSync('../../json/section-footer.json'));
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));

  let fields = [sectionHeader, sectionFooter];

  return [fields, styles];
};
