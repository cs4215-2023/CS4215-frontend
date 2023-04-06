/* eslint-disable */
import * as ace from 'ace-builds/src-noconflict/ace';
import { Variant } from 'Clang-slang/dist/types';

export function HighlightRulesSelector_native(
  id,
  variant = Variant.DEFAULT,
  external = 'NONE',
  externalLibraries = []
) {
  // @ts-ignore
  function _SourceHighlightRules(acequire, exports, module) {
    const oop = acequire('../lib/oop');
    const DocCommentHighlightRules = acequire(
      './doc_comment_highlight_rules'
    ).DocCommentHighlightRules;
    const TextHighlightRules = acequire('./text_highlight_rules').TextHighlightRules;
    const identifierRegex = '[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*';
    const chapter = variant === Variant.DEFAULT ? id.toString() : id.toString() + '_' + variant;

    // Currently there are no builtin libraries for NativeJS
    // const builtin_lib = SourceDocumentation.builtins[chapter];
    const builtin_lib = null;

    function addFromBuiltinLibrary(meta) {
      if (builtin_lib === null) {
        return '';
      }
      let func = '';
      for (const name in builtin_lib) {
        if (builtin_lib[name]['meta'] === meta) {
          func += '|' + name;
        }
      }
      return func;
    }
    function addFromExternalLibrary(meta) {
      if (externalLibraries === null) {
        return '';
      }
      let func = '';
      externalLibraries.forEach(node => {
        if (node.meta === meta) {
          func += '|' + node.caption;
        }
      });
      return func;
    }
    function getAllNames(meta) {
      const concat = addFromBuiltinLibrary(meta) + addFromExternalLibrary(meta);
      return concat.substr(1);
    }
    const ChapterKeywordSelector = () => {
      let output = '';
      return output;
    };
    const ChapterForbbidenWordSelector = () => {
      return 'window|document';
    };
    // @ts-ignore
    // copied from https://github.com/ajaxorg/ace-builds/blob/master/src/mode-c_cpp.js
    const SourceHighlightRules = function () {
      var cFunctions = (exports.cFunctions =
        '\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b');

      var keywordControls =
        'break|case|continue|default|do|else|for|goto|if|_Pragma|' +
        'return|switch|while|catch|operator|try|throw|using';
      var storageType =
        'asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|' +
        '_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|' +
        'class|wchar_t|template|char16_t|char32_t';
      var storageModifiers =
        'const|extern|register|restrict|static|volatile|inline|private|' +
        'protected|public|friend|explicit|virtual|export|mutable|typename|' +
        'constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local';
      var keywordOperators =
        'and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|' +
        'const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace';
      var builtinConstants = 'NULL|true|false|TRUE|FALSE|nullptr';
      var keywordMapper = (this.$keywords = this.createKeywordMapper(
        {
          'keyword.control': keywordControls,
          'storage.type': storageType,
          'storage.modifier': storageModifiers,
          'keyword.operator': keywordOperators,
          'variable.language': 'this',
          'constant.language': builtinConstants
        },
        'identifier'
      ));
      var identifierRe = '[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b';
      var escapeRe = /\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/
        .source;
      var formatRe =
        '%' +
        /(\d+\$)?/.source + // field (argument #)
        /[#0\- +']*/.source + // flags
        /[,;:_]?/.source + // separator character (AltiVec)
        /((-?\d+)|\*(-?\d+\$)?)?/.source + // minimum field width
        /(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source + // precision
        /(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source + // length modifier
        /(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source; // conversion type
      this.$rules = {
        start: [
          DocCommentHighlightRules.getStartRule('doc-start'),
          {
            token: 'comment',
            regex: '\\/\\*',
            next: 'comment'
          },
          {
            token: 'string',
            regex: "'(?:" + escapeRe + "|.)?'"
          },
          {
            token: 'string.start',
            regex: '"',
            stateName: 'qqstring',
            next: [
              { token: 'string', regex: /\\\s*$/, next: 'qqstring' },
              { token: 'constant.language.escape', regex: escapeRe },
              { token: 'constant.language.escape', regex: formatRe },
              { token: 'string.end', regex: '"|$', next: 'start' },
              { defaultToken: 'string' }
            ]
          },
          {
            token: 'string.start',
            regex: 'R"\\(',
            stateName: 'rawString',
            next: [
              { token: 'string.end', regex: '\\)"', next: 'start' },
              { defaultToken: 'string' }
            ]
          },
          {
            token: 'constant.numeric',
            regex: '0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b'
          },
          {
            token: 'constant.numeric',
            regex:
              '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b'
          },
          {
            token: 'keyword',
            regex: '#\\s*(?:include|import|pragma|line|define|undef)\\b',
            next: 'directive'
          },
          {
            token: 'keyword',
            regex: '#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b'
          },
          {
            token: 'support.function.C99.c',
            regex: cFunctions
          },
          {
            token: keywordMapper,
            regex: '[a-zA-Z_$][a-zA-Z0-9_$]*'
          },
          {
            token: 'keyword.operator',
            regex: /--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/
          },
          {
            token: 'punctuation.operator',
            regex: '\\?|\\:|\\,|\\;|\\.'
          },
          {
            token: 'paren.lparen',
            regex: '[[({]'
          },
          {
            token: 'paren.rparen',
            regex: '[\\])}]'
          },
          {
            token: 'text',
            regex: '\\s+'
          }
        ],

        directive: [
          {
            token: 'constant.other.multiline',
            regex: /\\/
          },
          {
            token: 'constant.other.multiline',
            regex: /.*\\/
          },
          {
            token: 'constant.other',
            regex: '\\s*<.+?>',
            next: 'start'
          },
          {
            token: 'constant.other',
            regex: '\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
            next: 'start'
          },
          {
            token: 'constant.other',
            regex: "\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
            next: 'start'
          },
          {
            token: 'constant.other',
            regex: /[^\\\/]+/,
            next: 'start'
          }
        ]
      };
      this.embedRules(DocCommentHighlightRules, 'doc-', [
        DocCommentHighlightRules.getEndRule('start')
      ]);
      this.normalizeRules();
    };
    oop.inherits(SourceHighlightRules, TextHighlightRules);
    function JSX() {
      const tagRegex = identifierRegex.replace('\\d', '\\d\\-');
      const jsxTag = {
        // @ts-ignore
        onMatch: function (val, state, stack) {
          const offset = val.charAt(1) == '/' ? 2 : 1;
          if (offset == 1) {
            if (state != this.nextState) stack.unshift(this.next, this.nextState, 0);
            else stack.unshift(this.next);
            stack[2]++;
          } else if (offset == 2) {
            if (state == this.nextState) {
              stack[1]--;
              if (!stack[1] || stack[1] < 0) {
                stack.shift();
                stack.shift();
              }
            }
          }
          return [
            {
              type: 'meta.tag.punctuation.' + (offset == 1 ? '' : 'end-') + 'tag-open.xml',
              value: val.slice(0, offset)
            },
            {
              type: 'meta.tag.tag-name.xml',
              value: val.substr(offset)
            }
          ];
        },
        regex: '</?' + tagRegex + '',
        next: 'jsxAttributes',
        nextState: 'jsx'
      };
      // @ts-ignore
      this.$rules.start.unshift(jsxTag);
      const jsxJsRule = {
        regex: '{',
        token: 'paren.quasi.start',
        push: 'start'
      };
      // @ts-ignore
      this.$rules.jsx = [jsxJsRule, jsxTag, { include: 'reference' }, { defaultToken: 'string' }];
      // @ts-ignore
      this.$rules.jsxAttributes = [
        {
          token: 'meta.tag.punctuation.tag-close.xml',
          regex: '/?>',
          // @ts-ignore
          onMatch: function (value, currentState, stack) {
            if (currentState == stack[0]) stack.shift();
            if (value.length == 2) {
              if (stack[0] == this.nextState) stack[1]--;
              if (!stack[1] || stack[1] < 0) {
                stack.splice(0, 2);
              }
            }
            // @ts-ignore
            this.next = stack[0] || 'start';
            return [{ type: this.token, value: value }];
          },
          nextState: 'jsx'
        },
        jsxJsRule,
        comments('jsxAttributes'),
        {
          token: 'entity.other.attribute-name.xml',
          regex: tagRegex
        },
        {
          token: 'keyword.operator.attribute-equals.xml',
          regex: '='
        },
        {
          token: 'text.tag-whitespace.xml',
          regex: '\\s+'
        },
        {
          token: 'string.attribute-value.xml',
          regex: "'",
          stateName: 'jsx_attr_q',
          push: [
            { token: 'string.attribute-value.xml', regex: "'", next: 'pop' },
            { include: 'reference' },
            { defaultToken: 'string.attribute-value.xml' }
          ]
        },
        {
          token: 'string.attribute-value.xml',
          regex: '"',
          stateName: 'jsx_attr_qq',
          push: [
            { token: 'string.attribute-value.xml', regex: '"', next: 'pop' },
            { include: 'reference' },
            { defaultToken: 'string.attribute-value.xml' }
          ]
        },
        jsxTag
      ];
      // @ts-ignore
      this.$rules.reference = [
        {
          token: 'constant.language.escape.reference.xml',
          regex: '(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)'
        }
      ];
    }
    // @ts-ignore
    function comments(next) {
      return [
        {
          token: 'comment',
          regex: /\/\*/,
          next: [
            DocCommentHighlightRules.getTagRule(),
            { token: 'comment', regex: '\\*\\/', next: next || 'pop' },
            { defaultToken: 'comment', caseInsensitive: true }
          ]
        },
        {
          token: 'comment',
          regex: '\\/\\/',
          next: [
            DocCommentHighlightRules.getTagRule(),
            { token: 'comment', regex: '$|^', next: next || 'pop' },
            { defaultToken: 'comment', caseInsensitive: true }
          ]
        }
      ];
    }
    exports.SourceHighlightRules = SourceHighlightRules;
  }
  const name = id.toString() + variant + external;
  // @ts-ignore
  ace.define(
    'ace/mode/source_highlight_rules' + name,
    [
      'require',
      'exports',
      'module',
      'ace/lib/oop',
      'ace/mode/doc_comment_highlight_rules',
      'ace/mode/text_highlight_rules'
    ],
    _SourceHighlightRules
  );
}
