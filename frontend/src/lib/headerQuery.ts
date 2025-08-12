import { groq } from "next-sanity";

export const getHeaderQuery = groq`
  *[_type == "siteHeader"][0] {
    _id,
    logo,
    navLinks[] {
      label,
      url
    },
    headerSettings {
      logoSize,
      menuFontSize,
      menuFontColor,
      menuFontWeight
    },
    ctaButton {
      name,
      link,
      icon,
      iconPosition,
      buttonStyle,
      buttonSize
    }
  }
`;
