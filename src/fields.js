const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const spacing = JSON.parse(fs.readFileSync('../../json/spacing.json'));

  let fields = [
    setFieldParams(spacing, {
      name: 'padding_top',
      label: 'Padding Top',
      default: 'medium',
    }),
  ];

  return fields;
};
