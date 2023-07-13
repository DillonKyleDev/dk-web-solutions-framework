const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const moduleHeader = JSON.parse(
    fs.readFileSync('../../json/module-header.json')
  );
  const moduleFooter = JSON.parse(
    fs.readFileSync('../../json/module-footer.json')
  );
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));

  const fieldConversions = JSON.parse(
    fs.readFileSync('../../json/field-conversions.json')
  );
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
      name: 'prefilter_results_',
      label: 'Prefilter Results?',
      required: false,
      locked: false,
      type: 'boolean',
      display: 'checkbox',
      inline_help_text:
        'Choose whether to only show results with a specific column value.',
      default: false,
    },
    {
      type: 'group',
      name: 'prefilter_options',
      label: 'Prefilter Options',
      expanded: true,
      occurrence: {
        min: 1,
        max: null,        
        default: 1,
      },
      children: [
        {
          name: 'prefilter_column',
          label: 'Column to Prefilter',
          required: false,
          locked: false,
          validation_regex: '',
          allow_new_line: false,
          show_emoji_picker: false,
          inline_help_text:
            'Match column name exactly, including any trailing spaces.',
          type: 'text',
          default: 'resource_type',
        },
        {
          name: 'prefilter_result',
          label: 'Desired Column Value',
          required: false,
          locked: false,
          validation_regex: '',
          allow_new_line: false,
          show_emoji_picker: false,
          inline_help_text:
            'Match desired value exactly, including any trailing spaces.',
          type: 'text',
          default: 'Download',
        },
      ],
      visibility: {
        controlling_field_path: 'prefilter_results_',
        controlling_value_regex: true,
        operator: 'EQUAL',
      },
    },
    {
      name: 'filters_layout',
      id: 'filters_layout',
      label: 'Filters Layout',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      help_text: 'Choose where the filters sidebar will be displayed.',
      choices: [
        ['none', 'No Filters'],
        ['left', 'Left Sidebar'],
        ['right', 'Right Sidebar'],
      ],
      type: 'choice',
      default: 'none',
    },
    {
      name: 'filter_columns',
      label: 'Filter Columns',
      required: false,
      locked: false,
      occurrence: {
        min: 1,
        max: null,
        sorting_label_field: null,
        default: 1,
      },
      inline_help_text:
        'Add column names that you wish to be added to the filters sidebar.',
      allow_new_line: false,
      show_emoji_picker: true,
      type: 'text',
      default: ['resource_type'],
      visibility: {
        controlling_field_path: 'filters_layout',
        controlling_value_regex: 'none',
        operator: 'NOT_EQUAL',
      },
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
      default: 'four-column',
    },
    setFieldParams(spacing, {
      name: 'card_spacing',
      id: 'card_spacing',
      label: 'Card Spacing',
      default: 'xxs',
    }),
    setFieldParams(spacing, {
      name: 'card_padding',
      id: 'card_padding',
      label: 'Card Padding',
      default: 'xxs',
    }),
  ];

  return [fields, styles];
};
