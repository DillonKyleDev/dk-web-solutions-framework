const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const moduleHeader = JSON.parse(fs.readFileSync('../../json/module-header.json'));  
  const moduleFooter = JSON.parse(fs.readFileSync('../../json/module-footer.json'));
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));

  let fields = [moduleHeader, moduleFooter];

  return [fields, styles];
};
