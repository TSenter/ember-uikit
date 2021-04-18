import Component from "@ember/component";

export default Component.extends({
  tagName: "table",

  classNames: ["uk-table"],
  classNameBindings: [
    "divided:uk-table-divider",
    "striped:uk-table-striped",
    "hover:uk-table-hover",
    "justified:uk-table-justify",
  ],
});
