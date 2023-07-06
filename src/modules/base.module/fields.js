const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));
  const spacing = JSON.parse(fs.readFileSync('../../json/spacing.json'));

  let fields = [
    setFieldParams(spacing, {
      name: 'module_spacing',
      label: 'Module Spacing',
      default: 'medium',
    }),
  ];

  return [fields, styles];
};
