const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const moduleHeader = JSON.parse(fs.readFileSync('../../json/module-header.json'));  
  const moduleFooter = JSON.parse(fs.readFileSync('../../json/module-footer.json'));
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));
  
  const column = JSON.parse(fs.readFileSync('../../json/column.json'));  
  const verticalAlignment = JSON.parse(fs.readFileSync('../../json/alignment.json'));

  let fields = [
    moduleHeader,
    moduleFooter,
    setFieldParams(verticalAlignment, {
      name: 'vertical_alignment',
      label: 'Vertical Alignment',
      default: 'top',
    }),
    {
      id: 'columns',
      name: 'columns',
      label: 'Columns',
      required: false,
      locked: false,
      occurrence: {
        min: 1,
        max: 1,
        default: null,
      },
      children: column,
      type: 'group',
    },
  ];

  return [fields, styles];
};
