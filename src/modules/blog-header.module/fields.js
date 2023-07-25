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
      name: 'filter_options',
      label: 'Filter Options',
      type: 'choice',
      choices: [
        ['authors', 'Authors'],
        ['tags', 'Tags'],
        ['search', 'Search Bar'],
      ],
      default: ['authors', 'tags', 'search'],
      display: 'checkbox',
      display_width: null,
      help_text: 'Choose what options are available for filtering blog posts.',
      id: 'filter_options',
      locked: false,
      multiple: true,
      preset: null,
      reordering_enabled: false,
      required: false,
    },
    {
      name: 'subscribe_options',
      label: 'Subscibe Options',
      type: 'group',
      expanded: false,
      children: [
        {
          name: 'select_blog',
          label: 'Blog to subscribe to',
          type: 'blog',
          display_width: null,
          help_text:
            'Default will use the current blog when used in a blog template or the primary blog when used elsewhere.',
          id: '65eb34eb-8c1c-01a3-5e08-60946b4d9ea2',
          locked: false,
          required: false,
        },
        {
          name: 'subscribe_title',
          label: 'Title to display above subscribe form',
          type: 'text',
          allow_new_line: false,
          default: 'Subscribe Here!',
          display_width: null,
          id: '7fc80a6f-5107-253d-2f65-591302b81645',
          locked: false,
          required: false,
          show_emoji_picker: false,
          validation_regex: '',
        },
        {
          name: 'response_message',
          label: 'Inline response for users',
          type: 'richtext',
          default: 'Thanks for subscribing!',
          display_width: null,
          id: '35981351-6a67-cbca-b7bb-dc4e36ded0fe',
          locked: false,
          required: false,
        },
      ],
    },
    {
      name: 'search_options',
      label: 'Search Options',
      type: 'group',
      expanded: false,
      children: [
        {
          name: 'field_label',
          label: 'Label text',
          type: 'text',
          allow_new_line: false,
          display_width: null,
          id: 'd7644a33-944a-3b21-7faa-133195962602',
          locked: false,
          required: false,
          show_emoji_picker: false,
          validation_regex: '',
        },
        {
          name: 'placeholder',
          label: 'Placeholder text',
          type: 'text',
          allow_new_line: false,
          default: 'Search',
          display_width: null,
          id: 'e75bef76-6568-6550-8840-1d97bfc93c0b',
          locked: false,
          required: false,
          show_emoji_picker: false,
          validation_regex: '',
        },
        {
          name: 'include_search_button',
          label: 'Include search button',
          type: 'boolean',
          locked: false,
          default: false,
          display: 'checkbox',
          display_width: null,
          id: '132b5655-eccf-c251-9ed4-d04901e91987',
          required: false,
        },
        {
          name: 'results',
          label: 'Results',
          type: 'group',
          children: [
            {
              name: 'use_custom_search_results_template',
              label: 'Use custom search results page',
              type: 'boolean',
              locked: false,
              required: false,
              default: false,
              display: 'toggle',
              display_width: null,
              id: 'results.user_custom_search_results_template',
              inline_help_text:
                'Turn this setting on to use a custom search results page instead of the default global search results page.',
            },
            {
              name: 'path_id',
              label: 'Search results page',
              type: 'page',
              locked: false,
              display_width: null,
              id: 'results.path_id',
              inline_help_text:
                'This is where people will go when they click to search their search term. Make sure to choose a page that contains the search results module.',
              required: false,
              visibility: {
                controlling_field:
                  'results.user_custom_search_results_template',
                controlling_value_regex: 'true',
                operator: 'EQUAL',
              },
            },
          ],
          display_width: null,
          expanded: false,
          id: 'results',
          locked: false,
          required: false,
          tab: 'CONTENT',
        },
        {
          name: 'content_types',
          label: 'Search results include',
          type: 'group',
          children: [
            {
              name: 'website_pages',
              label: 'Website pages',
              type: 'boolean',
              default: true,
              display: 'checkbox',
              display_width: null,
              id: '71d525ff-37c4-6c64-1f96-d99dbb529816',
              locked: false,
              required: false,
              visibility: {
                access: {
                  operator: 'HAS_ALL',
                  scopes: ['sitepages-access'],
                },
                operator: 'NOT_EMPTY',
              },
            },
            {
              name: 'landing_pages',
              label: 'Landing pages',
              type: 'boolean',
              default: false,
              display: 'checkbox',
              display_width: null,
              id: 'd6212113-19b5-c9b9-2f92-12dfc122d00c',
              locked: false,
              required: false,
            },
            {
              name: 'blog_posts',
              label: 'Blog posts',
              type: 'boolean',
              default: true,
              display: 'checkbox',
              display_width: null,
              id: '7535615c-ed26-2e34-87ef-21c5c87ccbcb',
              locked: false,
              required: false,
            },
            {
              name: 'knowledge_articles',
              label: 'Knowledge articles',
              type: 'boolean',
              default: false,
              display: 'checkbox',
              display_width: null,
              id: '307d0eed-0cf9-7465-5715-a75c378ec61f',
              locked: false,
              required: false,
              visibility: {
                access: {
                  operator: 'HAS_ALL',
                  scopes: ['service-knowledge-access'],
                },
              },
            },
          ],
          default: {
            website_pages: true,
            landing_pages: false,
            blog_posts: true,
            knowledge_articles: false,
          },
          display_width: null,
          expanded: false,
          id: '346180f5-0d36-e8df-aca9-a74bfa2d79a4',
          locked: false,
          required: false,
          tab: 'CONTENT',
        },
      ],
    },
  ];

  return [fields, styles];
};
