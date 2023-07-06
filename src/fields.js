const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

const defaultRichTextField = {
  type: 'richtext',
  enabled_features: [
    'font_size',
    'standard_emphasis',
    'block',
    'font_family',
    'alignment',
  ],
  display_width: null,
  required: false,
  locked: false,
};

const styles = {
  label: 'Styles',
  name: 'styles',
  type: 'group',
  tab: 'STYLE',
  children: [
    {
      name: 'padding_top',
      label: 'Padding Top',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['xxxs', 'XXXS'],
        ['xxs', 'XXS'],
        ['xs', 'XS'],
        ['small', 'Small'],
        ['medium', 'Medium'],
        ['large', 'Large'],
        ['xl', 'Xl'],
        ['xxl', 'XXL'],
        ['xxxl', 'XXXL'],
      ],
      type: 'choice',
      default: 'medium',
    },
    {
      name: 'padding_bottom',
      label: 'Padding Bottom',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['xxxs', 'XXXS'],
        ['xxs', 'XXS'],
        ['xs', 'XS'],
        ['small', 'Small'],
        ['medium', 'Medium'],
        ['large', 'Large'],
        ['xl', 'Xl'],
        ['xxl', 'XXL'],
        ['xxxl', 'XXXL'],
      ],
      type: 'choice',
      default: 'medium',
    },
    {
      name: 'background_color',
      label: 'Background Color',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['transparent', 'Transparent'],
        ['white', 'White'],
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
      ],
      type: 'choice',
      default: 'transparent',
    },
  ],
};

module.exports = (fieldOptions) => {
  let fields = [
    setFieldParams(styles),
    setFieldParams(defaultRichTextField, {
      name: 'description',
      label: 'Product description',
      default:
        '<p>For teams that need additional security, control, and support.</p>',
    }),
  ];

  return fields;
};
