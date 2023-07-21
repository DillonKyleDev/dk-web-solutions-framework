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

  let fields = [
    moduleHeader,
    moduleFooter,
    {
      choices: [['show_numbers', 'Show numbers']],
      default: ['show_numbers'],
      display: 'checkbox',
      id: 'numbers',
      label: 'Numbers',
      locked: false,
      multiple: true,
      name: 'numbers',
      preset: null,
      reordering_enabled: false,
      required: false,
      type: 'choice',
    },
    {
      choices: [
        ['show_arrows', 'Show arrows'],
        ['show_labels', 'Show labels'],
      ],
      default: ['show_arrows', 'show_labels'],
      display: 'checkbox',
      id: 'first_and_last',
      label: 'First and last',
      locked: false,
      multiple: true,
      name: 'first_and_last',
      preset: null,
      reordering_enabled: false,
      required: false,
      type: 'choice',
    },
    {
      allow_new_line: false,
      default: 'First',
      id: 'first_label',
      label: 'First label',
      locked: false,
      name: 'first_label',
      required: false,
      show_emoji_picker: false,
      type: 'text',
      validation_regex: '',
      visibility: {
        controlling_field: 'first_and_last',
        controlling_value_regex: 'show_labels',
        operator: 'MATCHES_REGEX',
      },
    },
    {
      allow_new_line: false,
      default: 'Last',
      id: 'last_label',
      label: 'Last label',
      locked: false,
      name: 'last_label',
      required: false,
      show_emoji_picker: false,
      type: 'text',
      validation_regex: '',
      visibility: {
        controlling_field: 'first_and_last',
        controlling_value_regex: 'show_labels',
        operator: 'MATCHES_REGEX',
      },
    },
    {
      choices: [
        ['show_arrows', 'Show arrows'],
        ['show_labels', 'Show labels'],
      ],
      default: ['show_arrows', 'show_labels'],
      display: 'checkbox',
      id: 'previous_and_next',
      label: 'Previous and next',
      locked: false,
      multiple: true,
      name: 'previous_and_next',
      preset: null,
      reordering_enabled: false,
      required: false,
      type: 'choice',
    },
    {
      allow_new_line: false,
      default: 'Prev',
      id: 'previous_label',
      label: 'Previous label',
      locked: false,
      name: 'previous_label',
      required: false,
      show_emoji_picker: false,
      type: 'text',
      validation_regex: '',
      visibility: {
        controlling_field: 'previous_and_next',
        controlling_value_regex: 'show_labels',
        operator: 'MATCHES_REGEX',
      },
    },
    {
      allow_new_line: false,
      default: 'Next',
      id: 'next_label',
      label: 'Next label',
      locked: false,
      name: 'next_label',
      required: false,
      show_emoji_picker: false,
      type: 'text',
      validation_regex: '',
      visibility: {
        controlling_field: 'previous_and_next',
        controlling_value_regex: 'show_labels',
        operator: 'MATCHES_REGEX',
      },
    },
    {
      children: [
        {
          allow_new_line: false,
          default: 'Pagination navigation',
          id: 'default_text.pagination_navigation',
          label: 'Pagination navigation',
          locked: false,
          name: 'pagination_navigation',
          required: false,
          show_emoji_picker: false,
          type: 'text',
          validation_regex: '',
        },
        {
          allow_new_line: false,
          default: 'Go to page {{ this_page }}',
          id: 'default_text.go_to_page',
          label: 'Go to page',
          locked: false,
          name: 'go_to_page',
          required: false,
          show_emoji_picker: false,
          type: 'text',
          validation_regex: '',
        },
      ],
      expanded: false,
      id: 'default_text',
      label: 'Default text',
      locked: true,
      name: 'default_text',
      required: false,
      tab: 'CONTENT',
      type: 'group',
    },
  ];

  return [fields, styles];
};
