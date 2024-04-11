/*\
title: $:/plugins/linonetwo/github-external-image/currsuffix.js
type: application/javascript
module-type: widget

Text node widget, <$currsuffix title={{!!title}}>

\*/
(function () {

  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  var Widget = require("$:/core/modules/widgets/widget.js").widget;
  var _MIME = require("$:/plugins/mingyue/github-external/mime.js")._MIME;
  /**
   * Inherit from the base widget class
   */
  class TextNodeWidget extends Widget {
    constructor(parseTreeNode, options) {
      super(parseTreeNode, options);
    }

    /**
     * Render this widget into the DOM
     * @param parent 
     * @param nextSibling 
     */
    render(parent, nextSibling) {
      this.parentDomNode = parent;
      this.computeAttributes();
      this.execute();


      //定义微件参数 text，并通过this.getAttribute()方法获取参数。

      console.log(this.title, this.type);

      let suf_list = Array();
      for (const item of _MIME) {
        suf_list.push(item[2]);
      }

      let suffix = this.title.split('.').slice(-1)[0].trim();

      if (suffix && suf_list.includes(suffix)) {
        this.result_suffix = suffix;
      } else {
        for (const item of _MIME) {
          if (this.type === item[0]) {
            if (Array.isArray(item[2])) {
              this.result_suffix = item[2][0];
            }
            if (typeof item[2] === 'string') this.result_suffix = item[2];
          }
        }
      }
      // console.log(`${this.title} ${this.type} ${this.result_suffix}`);
      var textNode = this.document.createTextNode(this.result_suffix);
      parent.insertBefore(textNode, nextSibling);
      this.domNodes.push(textNode);
    }

    /**
     * 计算 widget 的内部状态
     */
    execute() {
      // 文本节点无事可做
      this.title = this.getVariable("currentTiddler");
      // this.type = this.getAttribute("type", "");
    }

    /**
     * 在需要时选择性地刷新 widget。如果需要重新渲染 widget 或其任何子控件，则返回 true
     */
    refresh(changedTiddlers) {
      var changedAttributes = this.computeAttributes();
      if (changedAttributes.text) {
        this.refreshSelf();
        return true;
      } else {
        return false;
      }
    }
  }
  exports.currsuffix = TextNodeWidget;
})();


// 采用router获取tiddlers目录下的文件名列表集合，对比列表集合进行。
// 

// 先通过title -> makeTitleSafe 这里就可以对比了。-> encodeURI()，这里去返回


// makeTitleSafe(title) {
//   var illegalFilenameCharacters = /<|>|\:|\"|\/|\\|\||\?|\*|\^|\s/g;
//   var fixedTitle = $tw.utils.transliterate(title).replace(illegalFilenameCharacters, "_");
//   return fixedTitle;
// }

// this.makeTitleSafe(this.getVariable("currentTiddler"))

// https://github.com/tiddly-gittly/tidgi-obsidian-manager/blob/master/src/obsidian-vault/router/get-obvault.js
// https://github.com/tiddly-gittly/tidgi-obsidian-manager/blob/master/src/obsidian-vault/utils/request.ts

// encodeURI()