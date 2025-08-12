import { groq } from "next-sanity";

export const pageQuery = groq`
  *[_type == "page" && slug.current == "homepage"][0]{
  _id,
  title,
  slug,
  pageSettings{
    pageBackground,
    headingFontColor,
    titleFontColor,
    contentFontColor
  },
  pageBuilder[] {
    _type,
    _key,
    title,
    content,
    heroSectionHighRef,
    heroSectionMediumRef,
    brandsSectionRef,
    
    // For each section type, resolve the reference
    _type == "heroSectionHighRef" => {
      ...,
      "debug_ref": ^.heroSectionHighRef,
      "data": *[_type == "heroSectionHigh" && _id == ^.heroSectionHighRef][0] {
        _id,
        _type,
        title,
        heading,
        subheading,
        image,
        icon,
        sideLine
      }
    },
    
    _type == "heroSectionMediumRef" => {
      ...,
      "debug_ref": ^.heroSectionMediumRef,
      "debug_all_fields": {
        _type,
        _key,
        title,
        content,
        heroSectionMediumRef
      },
      "data": *[_type == "heroSectionMedium" && _id == ^.heroSectionMediumRef][0] {
        _id,
        _type,
        title,
        heading,
        content,
        image,
        icon,
        sideLine
      }
    },
    
    // _type == "teamSectionRef" => {
    //   ...,
    //   "data": *[_type == "teamSection" && _id == ^.teamSectionRef][0] {
    //     _id,
    //     _type,
    //     label,
    //     title,
    //     highlightedText,
    //     description,
    //     icon,
    //     mainImage
    //   }
    // },
    
    _type == "brandsSectionRef" => {
      ...,
      "debug_ref": ^.brandsSectionRef,
      "debug_brands_doc": *[_type == "brands" && _id == ^.brandsSectionRef][0],
      "data": *[_type == "brands" && _id == ^.brandsSectionRef][0] {
        _id,
        _type,
        label,
        sideLine,
        "sideLineString": string(sideLine),
        imageResolution{
          width,
          height,
          unit,
          gap
        },
        logos[]{
          name,
          image,
          url
        }
      },
      "debug_all_fields": *[_type == "brands" && _id == ^.brandsSectionRef][0] {
        _id,
        _type,
        label,
        sideLine,
        logos,
        // Include all fields to see what's actually there
        ...,
      }
    },
    
    // _type == "easyAccessSectionRef" => {
    //   ...,
    //   "data": *[_type == "easyAccess" && _id == ^.easyAccessSectionRef][0] {
    //     _id,
    //     _type,
    //     title,
    //     icon,
    //     features[]{
    //       title,
    //       description
    //     },
    //     bottomImage
    //   }
    // },
    
    // _type == "insightSectionRef" => {
    //   ...,
    //   "data": *[_type == "insightSection" && _id == ^.insightSectionRef][0] {
    //     _id,
    //     _type,
    //     badgeLabel,
    //     title,
    //     icon,
    //     description,
    //     image
    //   }
    // },
    
    // _type == "workspaceSectionRef" => {
    //   ...,
    //   "data": *[_type == "workspaceSection" && _id == ^.workspaceSectionRef][0] {
    //     _id,
    //     _type,
    //     badgeLabel,
    //     title,
    //     icon,
    //     description,
    //     image
    //   }
    // },
    
    // _type == "headingDescriptionRef" => {
    //   ...,
    //   "data": *[_type == "headingDescription" && _id == ^.headingDescriptionRef][0] {
    //     _id,
    //     _type,
    //     title,
    //     description
    //   }
    // },
    
    // _type == "newsletterSectionRef" => {
    //   ...,
    //   "data": *[_type == "newsletterSection" && _id == ^.newsletterSectionRef][0] {
    //     _id,
    //     _type,
    //     title,
    //     description,
    //     buttonText,
    //     buttonLink
    //   }
    // },
    
    _type == "featureSectionWithTitleRef" => {
      ...,
      "debug_ref": ^.featureSectionWithTitleRef,
      "data": *[_type == "featureSectionWithTitle" && _id == ^.featureSectionWithTitleRef][0] {
        _id,
        _type,
        icon,
        title,
        heading,
        content,
        columns[]{
          columnTitle,
          columnContent
        },
        isActive,
        sideLine,
        fontSettings{
          columnTitleFontColor,
          columnContentFontColor,
          columnLayout
        }
      }
    }
  }
}
`;
