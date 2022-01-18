export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e6a1f5c5b566bc687d3bba",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-test-studio-gqu48zgm",
                  apiId: "2e598ea3-05bf-4bba-8150-81fcd5c1dec3",
                },
                {
                  buildHookId: "61e6a1f591057973d512d4b0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-test-web-254szo9m",
                  apiId: "7943526e-9495-4073-9269-983d4d44431c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/legowhales/sanity-gatsby-blog-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-test-web-254szo9m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
