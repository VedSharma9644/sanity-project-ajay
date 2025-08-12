import { StructureBuilder } from 'sanity/structure'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('SEO Settings')
        .child(S.document().schemaType('seoSettings').documentId('seoSettings')),
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Site Header')
        .child(S.document().schemaType('siteHeader').documentId('siteHeader')),
      S.listItem()
        .title('Site Footer')
        .child(S.document().schemaType('siteFooter').documentId('siteFooter')),
      S.listItem()
        .title('Blog Page')
        .child(S.document().schemaType('siteBlog').documentId('siteBlog')),
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page')),
      S.listItem()
        .title('Blog Posts')
        .child(S.documentTypeList('post')),
      S.listItem()
        .title('Hero Sections - High Priority')
        .child(S.documentTypeList('heroSectionHigh')),
      S.listItem()
        .title('Hero Sections - Medium Priority')
        .child(S.documentTypeList('heroSectionMedium')),
      // S.listItem()
      //   .title('Team Sections')
      //   .child(S.documentTypeList('teamSection')),
      S.listItem()
        .title('Brands Sections')
        .child(S.documentTypeList('brands')),
      // S.listItem()
      //   .title('Easy Access Sections')
      //   .child(S.documentTypeList('easyAccess')),
      // S.listItem()
      //   .title('Insight Sections')
      //   .child(S.documentTypeList('insightSection')),
      // S.listItem()
      //   .title('Workspace Sections')
      //   .child(S.documentTypeList('workspaceSection')),
      // S.listItem()
      //   .title('Heading & Description')
      //   .child(S.documentTypeList('headingDescription')),
      // S.listItem()
      //   .title('Newsletter Sections')
      //   .child(S.documentTypeList('newsletterSection')),
      ...S.documentTypeListItems().filter(
        (item) => !['seoSettings', 'siteSettings', 'siteHeader', 'siteFooter', 'siteBlog', 'page', 'post', 'heroSectionHigh', 'heroSectionMedium', 'brands'].includes(item.getId() || '')
      )
    ])
