"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/index");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "この解析手法は、低ノイズで行える。",
        "これらの解析手法は、低ノイズで行える。"
    ],
    invalid: [
        // single match
        {
            text: "これは、低ノイズで行える。",
            errors: [
                {
                    message: "不明瞭な指示詞が検出されました。「あの手法は」を例に明瞭化しましょう。",
                    line: 1,
                    column: 1
                }
            ],
            text: "これらは、低ノイズで行える。",
            errors: [
                {
                    message: "不明瞭な指示詞が検出されました。「あの手法は」を例に明瞭化しましょう。",
                    line: 1,
                    column: 1
                }
            ]
        }
    ]
});
