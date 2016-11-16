let TypeScriptContent = `
import { Component } from "@angular/core";

@Component({
    selector: "{{selector}}",
    template: \`
      <p>{{selector}} component</p>
    \`,
    styles: [\`
      :host {
        display: block;
      }
    \`]
})
export class {{class}}Component {}`;

module.exports = {
  type: 'single',
  keys: ['selector', 'class', 'filename'],
  files: [
    { type: 'typescript', filename: '{{filename}}.component.ts', content: TypeScriptContent }
  ]
};