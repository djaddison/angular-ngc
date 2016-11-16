let HTMLContent = "<p>{{selector}} component</p>";
let SASSContent = ':host {\n  display: block;\n}\n';
let TypeScriptContent = `import { Component } from "@angular/core";

@Component({
    selector: "{{selector}}",
    template: require("./{{filename}}.component.html"),
    styles:  [require("./{{filename}}.component.scss")]
})
export class {{class}}Component {}`;

module.exports = {
  type: 'multiple',
  keys: ['selector', 'class', 'filename'],
  files: [
    { type: 'html', filename: '{{filename}}.component.html', content: HTMLContent },
    { type: 'scss', filename: '{{filename}}.component.scss', content: SASSContent },
    { type: 'typescript', filename: '{{filename}}.component.ts', content: TypeScriptContent }
  ]
};