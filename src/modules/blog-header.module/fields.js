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
      label: 'Filter Options',
      locked: false,
      multiple: true,
      name: 'filter_options',
      preset: null,
      reordering_enabled: false,
      required: false,
      type: 'choice',
    },
    {
      type: 'group',
      name: 'subscribe_options',
      label: 'Subscibe Options',
      expanded: false,
      children: [
        {
          display_width: null,
          help_text:
            'Default will use the current blog when used in a blog template or the primary blog when used elsewhere.',
          id: '65eb34eb-8c1c-01a3-5e08-60946b4d9ea2',
          label: 'Blog to subscribe to',
          locked: false,
          name: 'select_blog',
          required: false,
          type: 'blog',
        },
        {
          allow_new_line: false,
          default: 'Subscribe Here!',
          display_width: null,
          id: '7fc80a6f-5107-253d-2f65-591302b81645',
          label: 'Title to display above subscribe form',
          locked: false,
          name: 'subscribe_title',
          required: false,
          show_emoji_picker: false,
          type: 'text',
          validation_regex: '',
        },
        {
          default: 'Thanks for subscribing!',
          display_width: null,
          id: '35981351-6a67-cbca-b7bb-dc4e36ded0fe',
          label: 'Inline response for users',
          locked: false,
          name: 'response_message',
          required: false,
          type: 'richtext',
        },
      ],
    },
    {
      type: 'group',
      name: 'search_options',
      label: 'Search Options',
      expanded: false,
      children: [
        {
          allow_new_line: false,
          display_width: null,
          id: 'd7644a33-944a-3b21-7faa-133195962602',
          label: 'Label text',
          locked: false,
          name: 'field_label',
          required: false,
          show_emoji_picker: false,
          type: 'text',
          validation_regex: '',
        },
        {
          allow_new_line: false,
          default: 'Search',
          display_width: null,
          id: 'e75bef76-6568-6550-8840-1d97bfc93c0b',
          label: 'Placeholder text',
          locked: false,
          name: 'placeholder',
          required: false,
          show_emoji_picker: false,
          type: 'text',
          validation_regex: '',
        },
        {
          default: false,
          display: 'checkbox',
          display_width: null,
          id: '132b5655-eccf-c251-9ed4-d04901e91987',
          label: 'Include search button',
          locked: false,
          name: 'include_search_button',
          required: false,
          type: 'boolean',
        },
        {
          children: [
            {
              default: false,
              display: 'toggle',
              display_width: null,
              id: 'results.user_custom_search_results_template',
              inline_help_text:
                'Turn this setting on to use a custom search results page instead of the default global search results page.',
              label: 'Use custom search results page',
              locked: false,
              name: 'use_custom_search_results_template',
              required: false,
              type: 'boolean',
            },
            {
              display_width: null,
              id: 'results.path_id',
              inline_help_text:
                'This is where people will go when they click to search their search term. Make sure to choose a page that contains the search results module.',
              label: 'Search results page',
              locked: false,
              name: 'path_id',
              required: false,
              type: 'page',
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
          label: 'Results',
          locked: false,
          name: 'results',
          required: false,
          tab: 'CONTENT',
          type: 'group',
        },
        {
          children: [
            {
              default: true,
              display: 'checkbox',
              display_width: null,
              id: '71d525ff-37c4-6c64-1f96-d99dbb529816',
              label: 'Website pages',
              locked: false,
              name: 'website_pages',
              required: false,
              type: 'boolean',
              visibility: {
                access: {
                  operator: 'HAS_ALL',
                  scopes: ['sitepages-access'],
                },
                operator: 'NOT_EMPTY',
              },
            },
            {
              default: false,
              display: 'checkbox',
              display_width: null,
              id: 'd6212113-19b5-c9b9-2f92-12dfc122d00c',
              label: 'Landing pages',
              locked: false,
              name: 'landing_pages',
              required: false,
              type: 'boolean',
            },
            {
              default: true,
              display: 'checkbox',
              display_width: null,
              id: '7535615c-ed26-2e34-87ef-21c5c87ccbcb',
              label: 'Blog posts',
              locked: false,
              name: 'blog_posts',
              required: false,
              type: 'boolean',
            },
            {
              default: false,
              display: 'checkbox',
              display_width: null,
              id: '307d0eed-0cf9-7465-5715-a75c378ec61f',
              label: 'Knowledge articles',
              locked: false,
              name: 'knowledge_articles',
              required: false,
              type: 'boolean',
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
          label: 'Search results include',
          locked: false,
          name: 'content_types',
          required: false,
          tab: 'CONTENT',
          type: 'group',
        },
      ],
    },
  ];

  return [fields, styles];
};
