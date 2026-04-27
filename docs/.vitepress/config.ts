import { defineConfig } from "vitepress";

export default defineConfig({
  title: "CaseWave",
  description: "Modular Node-Link Graph Engine for React",
  base: "/casewave/",

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Documentation", link: "/documentation/" },
      { text: "Examples", link: "/examples/" },
      { text: "GitHub", link: "https://github.com/mrkwxopya/casewave" }
    ],

    sidebar: {
      "/documentation/": [
        {
          text: "Documentation",
          items: [
            { text: "Overview", link: "/documentation/" },
            { text: "Getting Started", link: "/documentation/getting-started" },
            { text: "Core Engine", link: "/documentation/core" },
            { text: "React Renderer", link: "/documentation/react" },
            { text: "Canvas", link: "/documentation/canvas" },
            { text: "Nodes", link: "/documentation/nodes" },
            { text: "Edges", link: "/documentation/edges" },
            { text: "Groups", link: "/documentation/groups" },
            { text: "Plugins", link: "/documentation/plugins" },
            { text: "Themes", link: "/documentation/themes" },
            { text: "Layout", link: "/documentation/layout" },
            { text: "Devtools", link: "/documentation/devtools" },
            { text: "Collaboration", link: "/documentation/collaboration" }
          ]
        }
      ],
      "/examples/": [
        {
          text: "Examples",
          items: [
            { text: "Overview", link: "/examples/" },
            { text: "Basic Board", link: "/examples/basic" },
            { text: "Custom Node", link: "/examples/custom-node" },
            { text: "Drag Connect", link: "/examples/drag-connect" },
            { text: "Themes", link: "/examples/themes" },
            { text: "Layout", link: "/examples/layout" }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mrkwxopya/casewave"
      }
    ],

    search: {
      provider: "local"
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 mrkwxopya"
    }
  }
});
