"use strict";
module.exports = function(context, options = {}) {
    const {Syntax, RuleError, report, getSource} = context;
    return {
        [Syntax.Str](node){ // "Str" node
            const text = getSource(node); // Get text
            const matchesAre = /あれは/g.exec(text);
            const matchesKore = /これは/g.exec(text);
            const matchesSore = /それは/g.exec(text);
            const matchesArera = /あれらは/g.exec(text);
            const matchesKorera = /これらは/g.exec(text);
            const matchesSorera = /それらは/g.exec(text);
            const matches = (matchesAre || matchesKore || matchesSore || matchesArera || matchesKorera || matchesSorera)
            if (!matches) {
                return;
            }
            const indexOfArekoresore = matches.index;
            const ruleError = new RuleError("不明瞭な指示詞が検出されました。「あの手法は」を例に明瞭化しましょう。", {
                index: indexOfArekoresore // padding of index
            });
            report(node, ruleError);
        }
    }
};
