function renderFilename( expand ){
  return expand.filename + this.fileExt;
}

function renderTypeScript( expand ){
return `import { Component } from "@angular/core";

@Component({
    selector: "${expand.selector}",
    template: require("./${expand.filename}.component.html"),
    styles:  [require("./${expand.filename}.component.scss")]
})
export class ${expand.class}Component {}`;
}

function renderHTML( expand ){
  return `<p>${expand.selector} component</p>`;
}

function renderSASS( expand ){
  return ':host {\n  display: block;\n}\n';
}

module.exports = {
  type: 'multiple',
  files: [
    { type: 'typescript', fileExt: '.component.ts', renderContent: renderTypeScript, renderFilename: renderFilename },
    { type: 'html', fileExt: '.component.html', renderContent: renderHTML, renderFilename: renderFilename },
    { type: 'scss', fileExt: '.component.scss', renderContent: renderSASS, renderFilename: renderFilename }
  ]
};