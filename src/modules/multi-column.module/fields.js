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
  const colors = JSON.parse(fs.readFileSync('../../json/colors.json'));

  let fields = [
    moduleHeader,
    moduleFooter,
    {
      name: 'column_type',
      id: 'column_type',
      label: 'Column Type',
      required: false,
      locked: false,
      multiple: 'false',
      display: 'select',
      choices: [
        ['simple', 'Simple'],
        ['icon', 'Icon'],
        ['image', 'Image'],
      ],
      type: 'choice',
      default: 'simple',
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
      default: 'small',
    }),
    setFieldParams(spacing, {
      name: 'column_padding',
      id: 'column_padding',
      label: 'Column Padding',
      default: 'xs',
    }),
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
          name: 'icon',
          label: 'Icon',
          required: false,
          locked: false,
          responsive: true,
          resizable: true,
          show_loading: false,
          type: 'image',
          default: {
            size_type: 'exact',
            src: 'https://22112970.fs1.hubspotusercontent-na1.net/hubfs/22112970/icons/token-icon.svg',
            alt: 'image-alt-text',
            loading: 'lazy',
            width: 64,
            height: 64,
          },
          visibility: {
            controlling_field_path: 'column_type',
            controlling_value_regex: 'icon',
            operator: 'EQUAL',
          },
        },
        {
          name: 'text_content',
          label: 'Content',
          required: false,
          locked: false,
          type: 'richtext',
          default:
            "<h3>Heading 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
          visibility: {
            controlling_field_path: 'column_type',
            controlling_value_regex: 'image',
            operator: 'NOT_EQUAL',
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
          visibility_rules: 'ADVANCED',
          advanced_visibility: {
            boolean_operator: 'OR',
            criteria: [
              {
                controlling_field_path: 'column_type',
                controlling_value_regex: 'image',
                operator: 'NOT_EQUAL',
              },
              {
                controlling_field_path: 'column_type',
                controlling_value_regex: 'simple',
                operator: 'NOT_EQUAL',
              },
            ],
          },
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
          visibility_rules: 'ADVANCED',
          advanced_visibility: {
            boolean_operator: 'AND',
            criteria: [
              {
                controlling_field_path: 'columns.is_link_',
                controlling_value_regex: true,
                operator: 'EQUAL',
              },
              {
                controlling_field_path: 'column_type',
                controlling_value_regex: 'simple',
                operator: 'NOT_EQUAL',
              },
              {
                controlling_field_path: 'column_type',
                controlling_value_regex: 'image',
                operator: 'NOT_EQUAL',
              },
            ],
          },
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
          inline_help_text: 'Leave blank if you do not want a visible link.',
          visibility_rules: 'ADVANCED',
          advanced_visibility: {
            boolean_operator: 'AND',
            criteria: [
              {
                controlling_field_path: 'columns.is_link_',
                controlling_value_regex: true,
                operator: 'EQUAL',
              },
              {
                controlling_field_path: 'column_type',
                controlling_value_regex: 'simple',
                operator: 'NOT_EQUAL',
              },
              {
                controlling_field_path: 'column_type',
                controlling_value_regex: 'image',
                operator: 'NOT_EQUAL',
              },
            ],
          },
        },
      ],
      default: [
        {
          text_content:
            "<h3>Heading 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
          image: null,
          icon: {
            size_type: 'exact',
            src: 'https://22112970.fs1.hubspotusercontent-na1.net/hubfs/22112970/icons/token-icon.svg',
            alt: 'image-alt-text',
            loading: 'lazy',
            width: 64,
            height: 64,
          },
          is_link_: false,
          link: {
            url: {
              content_id: null,
              type: 'EXTERNAL',
              href: 'https://www.example.com/',
            },
            open_in_new_tab: false,
            no_follow: false,
          },
          link_text: 'Read more',
        },
        {
          text_content:
            "<h3>Heading 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
          image: null,
          icon: {
            size_type: 'exact',
            src: 'https://22112970.fs1.hubspotusercontent-na1.net/hubfs/22112970/icons/token-icon.svg',
            alt: 'image-alt-text',
            loading: 'lazy',
            width: 64,
            height: 64,
          },
          is_link_: false,
          link: {
            url: {
              content_id: null,
              type: 'EXTERNAL',
              href: 'https://www.example.com/',
            },
            open_in_new_tab: false,
            no_follow: false,
          },
          link_text: 'Read more',
        },
        {
          text_content:
            "<h3>Heading 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
          image: null,
          icon: {
            size_type: 'exact',
            src: 'https://22112970.fs1.hubspotusercontent-na1.net/hubfs/22112970/icons/token-icon.svg',
            alt: 'image-alt-text',
            loading: 'lazy',
            width: 64,
            height: 64,
          },
          is_link_: false,
          link: {
            url: {
              content_id: null,
              type: 'EXTERNAL',
              href: 'https://www.example.com/',
            },
            open_in_new_tab: false,
            no_follow: false,
          },
          link_text: 'Read more',
        },
      ],
    },
  ];

  return [fields, styles];
};
