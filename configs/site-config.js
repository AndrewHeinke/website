const baseUrl = "https://github.com/AndrewHeinke/website";

const siteConfig = {
  author: {
    name: "Andrew Heinke",
    github: "https://github.com/AndrewHeinke",
    twitter: "https://twitter.com/andrewheinke",
    linkedin: "https://www.linkedin.com/in/andrewheinke/",
    email: "andrew.j.heinke@gmail.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  youtube: "https://www.youtube.com/channel/UCXsSYqOrsKggZhkWnvBLB5Q",
  seo: {
    title: "Andrew Heinke",
    titleTemplate: "%s - Andrew Heinke",
    description: "The personal website of Andrew Heinke",
    siteUrl: "https://andrewheinke.com",
    twitter: {
      handle: "@andrewheinke",
      site: "@andrewheinke",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://andrewheinke.com",
      title: "Andrew Heinke",
      description: "The personal website of Andrew Heinke",
      site_name: "Andrew Heinke, Front End Software Engineer",
      images: [
        {
          url: "https://andrewheinke.com/images/og-image.png",
          width: 1240,
          height: 480,
          alt: "Andrew Heinke, Front End Software Engineer",
        },
        {
          url: "https://andrewheinke.com/images/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "Andrew Heinke, Front End Software Engineer",
        },
      ],
    },
  },
};

export default siteConfig;
