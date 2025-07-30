import { groq } from "next-sanity";

export const pageQuery = groq`
  *[_type == "page" && slug.current == "homepage"][0]{
  _id,
  title,
  slug,
  pageBuilder[] {
    _type,
    _key,
    title,
    content,
    
    // For each section type, resolve the reference
    _type == "heroSectionRef" => {
      ...,
      "data": *[_type == "heroSection" && _id == ^.heroSectionRef][0] {
        _id,
        _type,
        headline,
        subtext
      }
    },
    
    _type == "teamSectionRef" => {
      ...,
      "data": *[_type == "teamSection" && _id == ^.teamSectionRef][0] {
        _id,
        _type,
        label,
        title,
        highlightedText,
        description,
        icon,
        mainImage
      }
    },
    
    _type == "brandsSectionRef" => {
      ...,
      "data": *[_type == "brands" && _id == ^.brandsSectionRef][0] {
        _id,
        _type,
        label,
        logos[]{
          name,
          image,
          url
        }
      }
    },
    
    _type == "easyAccessSectionRef" => {
      ...,
      "data": *[_type == "easyAccess" && _id == ^.easyAccessSectionRef][0] {
        _id,
        _type,
        title,
        icon,
        features[]{
          title,
          description
        },
        bottomImage
      }
    },
    
    _type == "insightSectionRef" => {
      ...,
      "data": *[_type == "insightSection" && _id == ^.insightSectionRef][0] {
        _id,
        _type,
        badgeLabel,
        title,
        icon,
        description,
        image
      }
    },
    
    _type == "workspaceSectionRef" => {
      ...,
      "data": *[_type == "workspaceSection" && _id == ^.workspaceSectionRef][0] {
        _id,
        _type,
        badgeLabel,
        title,
        icon,
        description,
        image
      }
    },
    
    _type == "headingDescriptionRef" => {
      ...,
      "data": *[_type == "headingDescription" && _id == ^.headingDescriptionRef][0] {
        _id,
        _type,
        title,
        description
      }
    },
    
    _type == "newsletterSectionRef" => {
      ...,
      "data": *[_type == "newsletterSection" && _id == ^.newsletterSectionRef][0] {
        _id,
        _type,
        title,
        description,
        buttonText,
        buttonLink
      }
    }
  }
}
`;
