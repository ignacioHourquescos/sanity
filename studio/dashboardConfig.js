export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e65907604a6a4b2b6d467e',
                  title: 'Sanity Studio',
                  name: 'sanity-studio-tqw7cibr',
                  apiId: '61ae4332-bb8f-4e15-ab51-2a69a377ddb7'
                },
                {
                  buildHookId: '60e65907da73ca41ea678f21',
                  title: 'Landing pages Website',
                  name: 'sanity-web-r86s7as7',
                  apiId: '0e7d7245-a56a-4fd6-81dc-9ee2c85cce0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ignacioHourquescos/sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-web-r86s7as7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
