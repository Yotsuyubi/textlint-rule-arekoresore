"use strict";

module.exports = function (context) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var {
    Syntax,
    RuleError,
    report,
    getSource
  } = context;
  return {
    [Syntax.Str](node) {
      // "Str" node
      var text = getSource(node); // Get text

      var matchesAre = /あれは/g.exec(text);
      var matchesKore = /これは/g.exec(text);
      var matchesSore = /それは/g.exec(text);
      var matchesArera = /あれらは/g.exec(text);
      var matchesKorera = /これらは/g.exec(text);
      var matchesSorera = /それらは/g.exec(text);
      var matches = matchesAre || matchesKore || matchesSore || matchesArera || matchesKorera || matchesSorera;

      if (!matches) {
        return;
      }

      var indexOfArekoresore = matches.index;
      var ruleError = new RuleError("不明瞭な指示詞が検出されました。「あの手法は」を例に明瞭化しましょう。", {
        index: indexOfArekoresore // padding of index

      });
      report(node, ruleError);
    }

  };
};
//# sourceMappingURL=index.js.map