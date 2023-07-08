const fs = require('fs');

const setFieldParams = (field, params) => {
  return { ...field, ...params };
};

module.exports = (fieldOptions) => {
  const sectionHeader = JSON.parse(fs.readFileSync('../../json/section-header.json'));  
  const sectionFooter = JSON.parse(fs.readFileSync('../../json/section-footer.json'));
  const styles = JSON.parse(fs.readFileSync('../../json/styles.json'));
  
  const spacing = JSON.parse(fs.readFileSync('../../json/spacing.json'));
  const colors = JSON.parse(fs.readFileSync('../../json/colors.json'));

  let fields = [
    sectionHeader,
    {
      name: 'column_type',
      id: 'column_type',
      label: 'Column Type',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['text-content', 'Content'],
        ['image', 'Image'],
      ],
      type: 'choice',
      default: 'text-content',
    },
    {
      name: 'column_layout',
      id: 'column_layout',
      label: 'Column Layout',
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
      name: 'column_spacing',
      id: 'column_spacing',
      label: 'Column Spacing',
      default: 'xs',
    }),
    setFieldParams(spacing, {
      name: 'column_padding',
      id: 'column_padding',
      label: 'Column Padding',
      default: 'xs',
    }),
    setFieldParams(colors, {
      name: 'column_background',
      label: 'Column Background Color',
      default: 'white',
    }),
    {
      name: 'border_',
      label: 'Column Border',
      required: false,
      locked: false,
      type: 'boolean',
      display: 'checkbox',
      default: true,
      display_width: 'half_width',
    },
    {
      name: 'border_radius_',
      label: 'Column Border Radius',
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
    {
      name: 'columns',
      label: 'Columns',
      required: false,
      locked: false,
      occurrence: {
        min: 1,
        max: null,
        default: 3,
      },
      type: 'group',
      children: [
        {
          name: 'text_content',
          label: 'Content',
          required: false,
          locked: false,
          type: 'richtext',
          default: '<h3>Heading 3</h3><p>Example paragraph text.</p>',
          visibility: {
            controlling_field_path: 'column_type',
            controlling_value_regex: 'text-content',
            operator: 'EQUAL',
          },
        },
        {
          name: 'image',
          label: 'Image',
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
          visibility: {
            controlling_field_path: 'column_type',
            controlling_value_regex: 'image',
            operator: 'EQUAL',
          },
        },
        {
          name: 'is_link_',
          label: 'Is Link?',
          required: false,
          locked: false,
          type: 'boolean',
          display: 'checkbox',
          default: false,
        },
        {
          name: 'link',
          display_width: null,
          label: 'Link',
          required: false,
          locked: false,
          supported_types: [
            'EXTERNAL',
            'CONTENT',
            'FILE',
            'EMAIL_ADDRESS',
            'BLOG',
            'CALL_TO_ACTION',
          ],
          show_advanced_rel_options: true,
          type: 'link',
          default: {
            url: {
              content_id: null,
              type: 'EXTERNAL',
              href: '',
            },
            open_in_new_tab: true,
            no_follow: false,
          },
          visibility: {
            controlling_field_path: 'columns.is_link_',
            controlling_value_regex: true,
            operator: 'EQUAL',
          },
        },
      ],
      default: [
        {
          text_content: '<h3>Heading 3</h3><p>Example paragraph text.</p>',
          image: null,
        },
        {
          text_content: '<h3>Heading 3</h3><p>Example paragraph text.</p>',
          image: null,
        },
        {
          text_content: '<h3>Heading 3</h3><p>Example paragraph text.</p>',
          image: null,
        },
      ],
    },
  ];  

  return [fields, styles];
};
