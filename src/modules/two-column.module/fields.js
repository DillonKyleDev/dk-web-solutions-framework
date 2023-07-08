const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const sectionHeader = JSON.parse(fs.readFileSync('../../json/section-header.json'));  
  const sectionFooter = JSON.parse(fs.readFileSync('../../json/section-footer.json'));
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));

  const column = JSON.parse(fs.readFileSync('../../json/column.json'));
  const columnGap = JSON.parse(fs.readFileSync('../../json/spacing.json'));
  const verticalAlignment = JSON.parse(fs.readFileSync('../../json/alignment.json'));

  let fields = [
    sectionHeader,
    sectionFooter,
    setFieldParams(columnGap, {
      name: 'column_gap',
      label: 'Column Gap',
      default: 'medium',
    }),
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
        max: 2,
        default: 1,
      },
      children: column,
      type: 'group',
    },
  ];

  return [fields, styles];
};
