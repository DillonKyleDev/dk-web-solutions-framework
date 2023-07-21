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

  const spacing = JSON.parse(fs.readFileSync('../../json/spacing.json'));

  let fields = [
    moduleHeader,
    moduleFooter,
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
    {
      advanced_visibility: {
        boolean_operator: 'AND',
        children: [],
        criteria: [
          {
            controlling_field: 'display_for_each_list_item',
            controlling_value_regex: 'image',
            operator: 'MATCHES_REGEX',
          },
        ],
      },
      default: false,
      display: 'toggle',
      display_width: null,
      id: 'alternate_image',
      label: 'Alternate image',
      locked: false,
      name: 'alternate_image',
      required: false,
      type: 'boolean',
      visibility_rules: 'ADVANCED',
    },
    {
      choices: [
        ['image', 'Image'],
        ['title', 'Title'],
        ['author_name', 'Author name'],
        ['tags', 'Tags'],
        ['publish_date', 'Publish date'],
        ['read_time', 'Read Time'],
        ['description', 'Description'],
        ['link_text', 'Link Text'],
      ],
      default: [
        'image',
        'title',        
        'author_name',
        'tags',
        'publish_date',
        'read_time',
        'description',
        'link_text'
      ],
      display: 'checkbox',
      display_width: null,
      help_text:
        "The publish date format can be changed in blog settings. <a href='https://knowledge.hubspot.com/blog/manage-your-blog-template-and-settings#set-your-blog-s-date-formats' target='_blank' rel='noopener'>Learn more</a>",
      id: 'display_for_each_list_item',
      label: 'Display for each list item',
      locked: false,
      multiple: true,
      name: 'display_for_each_list_item',
      preset: null,
      reordering_enabled: false,
      required: false,
      type: 'choice',
    },
    {
      name: 'link_text',
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
        controlling_field: 'display_for_each_list_item',
        controlling_value_regex: 'link_text',
        operator: 'MATCHES_REGEX',
      },
    },
  ];

  return [fields, styles];
};
