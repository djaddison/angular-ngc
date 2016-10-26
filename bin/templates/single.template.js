function renderFilename( expand ){
  return expand.filename + this.fileExt;
}

function renderTypeScript( expand ){
return `import { Component } from "@angular/core";

@Component({
    selector: "${expand.selector}",
    template: \`
      <p>${expand.selector} component</p>
    \`,
    styles: [\`
      :host {
        display: block;
      }
    \`]
})
export class ${expand.class}Component {}`;
}

module.exports = {
  type: 'single',
  files: [
    { type: 'typescript', fileExt: '.component.ts', renderContent: renderTypeScript, renderFilename: renderFilename }
  ]
};