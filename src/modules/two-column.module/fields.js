const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));
  const column = JSON.parse(fs.readFileSync('../../json/column.json'));

  let fields = setFieldParams(column, {});

  return [...column, styles];
};
