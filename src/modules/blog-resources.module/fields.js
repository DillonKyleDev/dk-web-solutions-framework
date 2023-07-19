const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const moduleHeader = JSON.parse(fs.readFileSync('../../json/module-header.json'));
  const moduleFooter = JSON.parse(fs.readFileSync('../../json/module-footer.json'));
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));

  const spacing = JSON.parse(fs.readFileSync('../../json/spacing.json'));

  let fields = [
    moduleHeader,
    moduleFooter,
    {
      type: 'group',
      name: 'card_fields_visibility',
      label: 'Card Fields Visibility',
      expanded: false,
      children: [
        {
          name: 'show_title_',
          label: 'Show Title?',
          required: false,
          locked: false,
          type: 'boolean',
          display: 'checkbox',
          inline_help_text: 'Choose whether or not to display this element.',
          default: true,
        },
        {
          name: 'show_snippet_',
          label: 'Show Snippet?',
          required: false,
          locked: false,
          type: 'boolean',
          display: 'checkbox',
          help_text: 'Choose whether or not to display this element.',
          default: true,
        },
        {
          name: 'show_image_',
          label: 'Show Image?',
          required: false,
          locked: false,
          type: 'boolean',
          display: 'checkbox',
          help_text: 'Choose whether or not to display this element.',
          default: true,
        },
        {
          name: 'show_link_text_',
          label: 'Show Link Text?',
          required: false,
          locked: false,
          type: 'boolean',
          display: 'checkbox',
          help_text: 'Choose whether or not to display this element.',
          default: true,
        },
        {
          name: 'link_text_',
          label: 'Link Text',
          required: false,
          locked: false,
          validation_regex: '',
          allow_new_line: false,
          show_emoji_picker: false,
          type: 'text',
          default: 'Read more',
          help_text: 'Choose what text to display for each CTA link.',
          visibility: {
            controlling_field_path: 'card_fields_visibility.show_link_text_',
            controlling_value_regex: true,
            operator: 'EQUAL',
          },
        },
      ],
    },
    {
      name: 'blog',
      label: 'Blog',
      required: false,
      locked: false,
      type: 'blog',
      default: null,
    },
    {
      name: 'prefilter_results_',
      label: 'Prefilter Results?',
      required: false,
      locked: false,
      type: 'boolean',
      display: 'checkbox',
      inline_help_text:
        'Choose whether to only show results from a specific tag and/or author.',
      default: false,
    },
    {
      name: 'prefilter_tag',
      label: 'Prefilter Tag',
      required: false,
      locked: false,
      tag_value: 'SLUG',
      type: 'tag',
      default: null,
      visibility: {
        controlling_field_path: 'prefilter_results_',
        controlling_value_regex: true,
        operator: 'EQUAL',
      },
    },
    {
      name: 'prefilter_author',
      label: 'Prefilter Author',
      required: false,
      locked: false,
      validation_regex: '',
      allow_new_line: false,
      show_emoji_picker: false,
      inline_help_text:
        'Match desired author exactly, including any trailing spaces.',
      type: 'text',
      default: '',
      visibility: {
        controlling_field_path: 'prefilter_results_',
        controlling_value_regex: true,
        operator: 'EQUAL',
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
