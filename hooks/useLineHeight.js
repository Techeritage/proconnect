import { Extension } from "@tiptap/core";

export const LineHeight = Extension.create({
  name: "lineHeight",

  addOptions() {
    return {
      types: ["paragraph", "heading"], // Apply to paragraphs and headings
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (element) => element.style.lineHeight?.replace(/['"]+/g, ""),
            renderHTML: (attributes) => {
              if (!attributes.lineHeight) {
                return {};
              }
              return { style: `line-height: ${attributes.lineHeight}` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setLineHeight:
        (lineHeight) =>
        ({ commands }) => {
          // Update the line height for the current node (paragraph or heading)
          return commands.updateAttributes(this.name, { lineHeight });
        },
      unsetLineHeight:
        () =>
        ({ commands }) => {
          // Remove the line height attribute
          return commands.updateAttributes(this.name, { lineHeight: null });
        },
    };
  },
});