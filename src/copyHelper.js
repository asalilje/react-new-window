export const copyStyles = (sourceDocument, targetDocument) => {

  Array.from(sourceDocument.styleSheets).forEach(styleSheet => {
    let cssRules = null;
    try {
      cssRules = styleSheet.cssRules;
    }
    catch(err) {
      console.log(err);
    }

    if (styleSheet.href) {
      const linkElement = targetDocument.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = styleSheet.href;
      targetDocument.head.appendChild(linkElement);
    }
    else if (cssRules) {
      const styleElement = targetDocument.createElement("style");
      Array.from(cssRules).forEach(rule => {
        styleElement.appendChild(targetDocument.createTextNode(rule.cssText));
      });
      targetDocument.head.appendChild(styleElement);
    }
  });

};