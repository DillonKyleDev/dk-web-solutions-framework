const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const moduleHeader = JSON.parse(fs.readFileSync('../../json/module-header.json'));
  const moduleFooter = JSON.parse(fs.readFileSync('../../json/module-footer.json'));
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));

  const fieldConversions = JSON.parse(fs.readFileSync('../../json/field-conversions.json'));
  const spacing = JSON.parse(fs.readFileSync('../../json/spacing.json'));
  const colors = JSON.parse(fs.readFileSync('../../json/colors.json'));

  let fields = [
    moduleHeader,
    moduleFooter,
    fieldConversions,
    {
      name: 'table_id',
      label: 'HubDB Table',
      required: false,
      locked: false,
      type: 'hubdbtable',
      default: 6677379,
    },
    {
      name: 'card_type',
      id: 'card_type',
      label: 'Card Type',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['resource', 'Resource Card'],
        ['image', 'Image'],
      ],
      type: 'choice',
      default: 'resource',
    },
    {
      name: 'card_layout',
      id: 'card_layout',
      label: 'Card Layout',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['one-column', 'One Column'],
        ['two-column', 'Two Column'],
        ['three-column', 'Three Column'],
        ['four-column', 'Four Column'],
      ],
      type: 'choice',
      default: 'three-column',
    },
    setFieldParams(spacing, {
      name: 'card_spacing',
      id: 'card_spacing',
      label: 'Card Spacing',
      default: 'small',
    }),
    setFieldParams(spacing, {
      name: 'card_padding',
      id: 'card_padding',
      label: 'Card Padding',
      default: 'xs',
    }),
    setFieldParams(colors, {
      name: 'card_background',
      id: 'card_background',
      label: 'Card Background Color',
      default: 'white',
    }),
    {
      name: 'border_',
      label: 'Card Border',
      required: false,
      locked: false,
      type: 'boolean',
      display: 'checkbox',
      default: true,
      display_width: 'half_width',
    },
    {
      name: 'border_radius_',
      label: 'Card Border Radius',
      required: false,
      locked: false,
      type: 'boolean',
      display: 'checkbox',
      default: true,
      display_width: 'half_width',
      visibility: {
        controlling_field_path: 'border_',
        controlling_value_regex: true,
        operator: 'EQUAL',
      },
    },
  ];

  return [fields, styles];
};
