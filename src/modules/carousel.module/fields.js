const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));
  const itemType = JSON.parse(fs.readFileSync('../../json/cards.json'));
  const itemSpacing = JSON.parse(fs.readFileSync('../../json/spacing.json'));
  const itemPadding = JSON.parse(fs.readFileSync('../../json/spacing.json'));

  let fields = [
    {
      name: 'items_visible',
      label: 'Items Visible',
      required: false,
      locked: false,
      display: 'slider',
      min: 1,
      max: 6,
      step: 1,
      type: 'number',
      prefix: '',
      suffix: '',
      default: 3,
    },
    {
      name: 'auto_scroll_',
      label: 'Auto Scroll?',
      required: false,
      locked: false,
      type: 'boolean',
      display: 'checkbox',
      default: false,
    },
    setFieldParams(itemType),
    setFieldParams(itemSpacing, {
      name: 'item_spacing',
      label: 'Item Spacing',
      default: 'small',
    }),
    setFieldParams(itemPadding, {
      name: 'item_padding',
      label: 'Item Padding',
      default: 'xxs',
    }),
    {
      name: 'carousel_source',
      id: 'carousel_source',
      label: 'Carousel Source',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['hubdb', 'HubDB'],
        ['repeater', 'Repeater'],
      ],
      type: 'choice',
      default: 'repeater',
    },
    {
      name: 'carousel_table',
      label: 'Carousel Table',
      required: false,
      locked: false,
      type: 'hubdbtable',
      default: 6675210,
      visibility: {
        controlling_field_path: 'carousel_source',
        controlling_value_regex: 'hubdb',
        operator: 'EQUAL',
      },
    },
    {
      name: 'carousel_columns',
      label: 'Carousel Columns',
      type: 'group',
      visibility: {
        controlling_field_path: 'carousel_source',
        controlling_value_regex: 'repeater',
        operator: 'EQUAL',
      },
      required: false,
      locked: false,
      occurrence: {
        min: 1,
        max: null,
        sorting_label_field: null,
        default: 1,
      },
      allow_new_line: false,
      show_emoji_picker: true,
      children: [
        {
          name: 'image',
          label: 'Image',
          visibility_rules: 'ADVANCED',
          advanced_visibility: {
            boolean_operator: 'OR',
            criteria: [
              {
                controlling_field_path: 'card_type',
                controlling_value_regex: 'image',
                operator: 'EQUAL',
              },
              {
                controlling_field_path: 'card_type',
                controlling_value_regex: 'icon',
                operator: 'EQUAL',
              },
              {
                controlling_field_path: 'card_type',
                controlling_value_regex: 'testimonial',
                operator: 'EQUAL',
              },
            ],
          },
          required: false,
          locked: false,
          responsive: true,
          resizable: true,
          show_loading: false,
          type: 'image',
          default: {
            size_type: 'exact',
            src: '',
            alt: 'image-alt-text',
            loading: 'lazy',
          },
        },
        {
          name: 'richtext',
          label: 'Rich Text',
          required: false,
          locked: false,
          type: 'richtext',
          default: '<h3>Heading 3</h3><p>Example paragraph text.</p>',
        },
      ],
      type: 'group',
      default: [
        {
          ingredient: 'Water',
          quantity: 1,
          measurement: 'cups',
        },
      ],
    },
  ];

  return [fields, styles];
};
