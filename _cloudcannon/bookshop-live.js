(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/slugify/slugify.js
  var require_slugify = __commonJS({
    "node_modules/slugify/slugify.js"(exports, module) {
      (function(name, root, factory) {
        if (typeof exports === "object") {
          module.exports = factory();
          module.exports["default"] = factory();
        } else if (typeof define === "function" && define.amd) {
          define(factory);
        } else {
          root[name] = factory();
        }
      })("slugify", exports, function() {
        var charMap = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`);
        var locales = JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');
        function replace2(string, options) {
          if (typeof string !== "string") {
            throw new Error("slugify: string argument expected");
          }
          options = typeof options === "string" ? { replacement: options } : options || {};
          var locale = locales[options.locale] || {};
          var replacement = options.replacement === void 0 ? "-" : options.replacement;
          var trim = options.trim === void 0 ? true : options.trim;
          var slug = string.normalize().split("").reduce(function(result, ch) {
            var appendChar = locale[ch] || charMap[ch] || ch;
            if (appendChar === replacement) {
              appendChar = " ";
            }
            return result + appendChar.replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
          }, "");
          if (options.strict) {
            slug = slug.replace(/[^A-Za-z0-9\s]/g, "");
          }
          if (trim) {
            slug = slug.trim();
          }
          slug = slug.replace(/\s+/g, replacement);
          if (options.lower) {
            slug = slug.toLowerCase();
          }
          return slug;
        }
        replace2.extend = function(customMap) {
          Object.assign(charMap, customMap);
        };
        return replace2;
      });
    }
  });

  // node_modules/entities/lib/maps/entities.json
  var require_entities = __commonJS({
    "node_modules/entities/lib/maps/entities.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
    }
  });

  // node_modules/markdown-it/lib/common/entities.js
  var require_entities2 = __commonJS({
    "node_modules/markdown-it/lib/common/entities.js"(exports, module) {
      "use strict";
      module.exports = require_entities();
    }
  });

  // node_modules/uc.micro/categories/P/regex.js
  var require_regex = __commonJS({
    "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
      module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }
  });

  // node_modules/mdurl/encode.js
  var require_encode = __commonJS({
    "node_modules/mdurl/encode.js"(exports, module) {
      "use strict";
      var encodeCache = {};
      function getEncodeCache(exclude) {
        var i, ch, cache = encodeCache[exclude];
        if (cache) {
          return cache;
        }
        cache = encodeCache[exclude] = [];
        for (i = 0; i < 128; i++) {
          ch = String.fromCharCode(i);
          if (/^[0-9a-z]$/i.test(ch)) {
            cache.push(ch);
          } else {
            cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
          }
        }
        for (i = 0; i < exclude.length; i++) {
          cache[exclude.charCodeAt(i)] = exclude[i];
        }
        return cache;
      }
      function encode(string, exclude, keepEscaped) {
        var i, l, code, nextCode, cache, result = "";
        if (typeof exclude !== "string") {
          keepEscaped = exclude;
          exclude = encode.defaultChars;
        }
        if (typeof keepEscaped === "undefined") {
          keepEscaped = true;
        }
        cache = getEncodeCache(exclude);
        for (i = 0, l = string.length; i < l; i++) {
          code = string.charCodeAt(i);
          if (keepEscaped && code === 37 && i + 2 < l) {
            if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
              result += string.slice(i, i + 3);
              i += 2;
              continue;
            }
          }
          if (code < 128) {
            result += cache[code];
            continue;
          }
          if (code >= 55296 && code <= 57343) {
            if (code >= 55296 && code <= 56319 && i + 1 < l) {
              nextCode = string.charCodeAt(i + 1);
              if (nextCode >= 56320 && nextCode <= 57343) {
                result += encodeURIComponent(string[i] + string[i + 1]);
                i++;
                continue;
              }
            }
            result += "%EF%BF%BD";
            continue;
          }
          result += encodeURIComponent(string[i]);
        }
        return result;
      }
      encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
      encode.componentChars = "-_.!~*'()";
      module.exports = encode;
    }
  });

  // node_modules/mdurl/decode.js
  var require_decode = __commonJS({
    "node_modules/mdurl/decode.js"(exports, module) {
      "use strict";
      var decodeCache = {};
      function getDecodeCache(exclude) {
        var i, ch, cache = decodeCache[exclude];
        if (cache) {
          return cache;
        }
        cache = decodeCache[exclude] = [];
        for (i = 0; i < 128; i++) {
          ch = String.fromCharCode(i);
          cache.push(ch);
        }
        for (i = 0; i < exclude.length; i++) {
          ch = exclude.charCodeAt(i);
          cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
        }
        return cache;
      }
      function decode(string, exclude) {
        var cache;
        if (typeof exclude !== "string") {
          exclude = decode.defaultChars;
        }
        cache = getDecodeCache(exclude);
        return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
          var i, l, b1, b2, b3, b4, chr, result = "";
          for (i = 0, l = seq.length; i < l; i += 3) {
            b1 = parseInt(seq.slice(i + 1, i + 3), 16);
            if (b1 < 128) {
              result += cache[b1];
              continue;
            }
            if ((b1 & 224) === 192 && i + 3 < l) {
              b2 = parseInt(seq.slice(i + 4, i + 6), 16);
              if ((b2 & 192) === 128) {
                chr = b1 << 6 & 1984 | b2 & 63;
                if (chr < 128) {
                  result += "\uFFFD\uFFFD";
                } else {
                  result += String.fromCharCode(chr);
                }
                i += 3;
                continue;
              }
            }
            if ((b1 & 240) === 224 && i + 6 < l) {
              b2 = parseInt(seq.slice(i + 4, i + 6), 16);
              b3 = parseInt(seq.slice(i + 7, i + 9), 16);
              if ((b2 & 192) === 128 && (b3 & 192) === 128) {
                chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
                if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                  result += "\uFFFD\uFFFD\uFFFD";
                } else {
                  result += String.fromCharCode(chr);
                }
                i += 6;
                continue;
              }
            }
            if ((b1 & 248) === 240 && i + 9 < l) {
              b2 = parseInt(seq.slice(i + 4, i + 6), 16);
              b3 = parseInt(seq.slice(i + 7, i + 9), 16);
              b4 = parseInt(seq.slice(i + 10, i + 12), 16);
              if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
                chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
                if (chr < 65536 || chr > 1114111) {
                  result += "\uFFFD\uFFFD\uFFFD\uFFFD";
                } else {
                  chr -= 65536;
                  result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
                }
                i += 9;
                continue;
              }
            }
            result += "\uFFFD";
          }
          return result;
        });
      }
      decode.defaultChars = ";/?:@&=+$,#";
      decode.componentChars = "";
      module.exports = decode;
    }
  });

  // node_modules/mdurl/format.js
  var require_format = __commonJS({
    "node_modules/mdurl/format.js"(exports, module) {
      "use strict";
      module.exports = function format2(url) {
        var result = "";
        result += url.protocol || "";
        result += url.slashes ? "//" : "";
        result += url.auth ? url.auth + "@" : "";
        if (url.hostname && url.hostname.indexOf(":") !== -1) {
          result += "[" + url.hostname + "]";
        } else {
          result += url.hostname || "";
        }
        result += url.port ? ":" + url.port : "";
        result += url.pathname || "";
        result += url.search || "";
        result += url.hash || "";
        return result;
      };
    }
  });

  // node_modules/mdurl/parse.js
  var require_parse = __commonJS({
    "node_modules/mdurl/parse.js"(exports, module) {
      "use strict";
      function Url() {
        this.protocol = null;
        this.slashes = null;
        this.auth = null;
        this.port = null;
        this.hostname = null;
        this.hash = null;
        this.search = null;
        this.pathname = null;
      }
      var protocolPattern = /^([a-z0-9.+-]+:)/i;
      var portPattern = /:[0-9]*$/;
      var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
      var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
      var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
      var autoEscape = ["'"].concat(unwise);
      var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
      var hostEndingChars = ["/", "?", "#"];
      var hostnameMaxLen = 255;
      var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
      var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
      var hostlessProtocol = {
        "javascript": true,
        "javascript:": true
      };
      var slashedProtocol = {
        "http": true,
        "https": true,
        "ftp": true,
        "gopher": true,
        "file": true,
        "http:": true,
        "https:": true,
        "ftp:": true,
        "gopher:": true,
        "file:": true
      };
      function urlParse(url, slashesDenoteHost) {
        if (url && url instanceof Url) {
          return url;
        }
        var u = new Url();
        u.parse(url, slashesDenoteHost);
        return u;
      }
      Url.prototype.parse = function(url, slashesDenoteHost) {
        var i, l, lowerProto, hec, slashes, rest = url;
        rest = rest.trim();
        if (!slashesDenoteHost && url.split("#").length === 1) {
          var simplePath = simplePathPattern.exec(rest);
          if (simplePath) {
            this.pathname = simplePath[1];
            if (simplePath[2]) {
              this.search = simplePath[2];
            }
            return this;
          }
        }
        var proto = protocolPattern.exec(rest);
        if (proto) {
          proto = proto[0];
          lowerProto = proto.toLowerCase();
          this.protocol = proto;
          rest = rest.substr(proto.length);
        }
        if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          slashes = rest.substr(0, 2) === "//";
          if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
          }
        }
        if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
          var hostEnd = -1;
          for (i = 0; i < hostEndingChars.length; i++) {
            hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
              hostEnd = hec;
            }
          }
          var auth, atSign;
          if (hostEnd === -1) {
            atSign = rest.lastIndexOf("@");
          } else {
            atSign = rest.lastIndexOf("@", hostEnd);
          }
          if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = auth;
          }
          hostEnd = -1;
          for (i = 0; i < nonHostChars.length; i++) {
            hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
              hostEnd = hec;
            }
          }
          if (hostEnd === -1) {
            hostEnd = rest.length;
          }
          if (rest[hostEnd - 1] === ":") {
            hostEnd--;
          }
          var host = rest.slice(0, hostEnd);
          rest = rest.slice(hostEnd);
          this.parseHost(host);
          this.hostname = this.hostname || "";
          var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
          if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for (i = 0, l = hostparts.length; i < l; i++) {
              var part = hostparts[i];
              if (!part) {
                continue;
              }
              if (!part.match(hostnamePartPattern)) {
                var newpart = "";
                for (var j = 0, k = part.length; j < k; j++) {
                  if (part.charCodeAt(j) > 127) {
                    newpart += "x";
                  } else {
                    newpart += part[j];
                  }
                }
                if (!newpart.match(hostnamePartPattern)) {
                  var validParts = hostparts.slice(0, i);
                  var notHost = hostparts.slice(i + 1);
                  var bit = part.match(hostnamePartStart);
                  if (bit) {
                    validParts.push(bit[1]);
                    notHost.unshift(bit[2]);
                  }
                  if (notHost.length) {
                    rest = notHost.join(".") + rest;
                  }
                  this.hostname = validParts.join(".");
                  break;
                }
              }
            }
          }
          if (this.hostname.length > hostnameMaxLen) {
            this.hostname = "";
          }
          if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
          }
        }
        var hash = rest.indexOf("#");
        if (hash !== -1) {
          this.hash = rest.substr(hash);
          rest = rest.slice(0, hash);
        }
        var qm = rest.indexOf("?");
        if (qm !== -1) {
          this.search = rest.substr(qm);
          rest = rest.slice(0, qm);
        }
        if (rest) {
          this.pathname = rest;
        }
        if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
          this.pathname = "";
        }
        return this;
      };
      Url.prototype.parseHost = function(host) {
        var port = portPattern.exec(host);
        if (port) {
          port = port[0];
          if (port !== ":") {
            this.port = port.substr(1);
          }
          host = host.substr(0, host.length - port.length);
        }
        if (host) {
          this.hostname = host;
        }
      };
      module.exports = urlParse;
    }
  });

  // node_modules/mdurl/index.js
  var require_mdurl = __commonJS({
    "node_modules/mdurl/index.js"(exports, module) {
      "use strict";
      module.exports.encode = require_encode();
      module.exports.decode = require_decode();
      module.exports.format = require_format();
      module.exports.parse = require_parse();
    }
  });

  // node_modules/uc.micro/properties/Any/regex.js
  var require_regex2 = __commonJS({
    "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
      module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }
  });

  // node_modules/uc.micro/categories/Cc/regex.js
  var require_regex3 = __commonJS({
    "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
      module.exports = /[\0-\x1F\x7F-\x9F]/;
    }
  });

  // node_modules/uc.micro/categories/Cf/regex.js
  var require_regex4 = __commonJS({
    "node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
      module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    }
  });

  // node_modules/uc.micro/categories/Z/regex.js
  var require_regex5 = __commonJS({
    "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
      module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    }
  });

  // node_modules/uc.micro/index.js
  var require_uc = __commonJS({
    "node_modules/uc.micro/index.js"(exports) {
      "use strict";
      exports.Any = require_regex2();
      exports.Cc = require_regex3();
      exports.Cf = require_regex4();
      exports.P = require_regex();
      exports.Z = require_regex5();
    }
  });

  // node_modules/markdown-it/lib/common/utils.js
  var require_utils = __commonJS({
    "node_modules/markdown-it/lib/common/utils.js"(exports) {
      "use strict";
      function _class(obj) {
        return Object.prototype.toString.call(obj);
      }
      function isString2(obj) {
        return _class(obj) === "[object String]";
      }
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      function has(object, key) {
        return _hasOwnProperty.call(object, key);
      }
      function assign2(obj) {
        var sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function(source) {
          if (!source) {
            return;
          }
          if (typeof source !== "object") {
            throw new TypeError(source + "must be object");
          }
          Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
          });
        });
        return obj;
      }
      function arrayReplaceAt(src, pos, newElements) {
        return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
      }
      function isValidEntityCode(c) {
        if (c >= 55296 && c <= 57343) {
          return false;
        }
        if (c >= 64976 && c <= 65007) {
          return false;
        }
        if ((c & 65535) === 65535 || (c & 65535) === 65534) {
          return false;
        }
        if (c >= 0 && c <= 8) {
          return false;
        }
        if (c === 11) {
          return false;
        }
        if (c >= 14 && c <= 31) {
          return false;
        }
        if (c >= 127 && c <= 159) {
          return false;
        }
        if (c > 1114111) {
          return false;
        }
        return true;
      }
      function fromCodePoint(c) {
        if (c > 65535) {
          c -= 65536;
          var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        }
        return String.fromCharCode(c);
      }
      var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
      var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
      var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
      var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
      var entities = require_entities2();
      function replaceEntityPattern(match, name) {
        var code = 0;
        if (has(entities, name)) {
          return entities[name];
        }
        if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
          code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
          if (isValidEntityCode(code)) {
            return fromCodePoint(code);
          }
        }
        return match;
      }
      function unescapeMd(str) {
        if (str.indexOf("\\") < 0) {
          return str;
        }
        return str.replace(UNESCAPE_MD_RE, "$1");
      }
      function unescapeAll(str) {
        if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
          return str;
        }
        return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
          if (escaped) {
            return escaped;
          }
          return replaceEntityPattern(match, entity);
        });
      }
      var HTML_ESCAPE_TEST_RE = /[&<>"]/;
      var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
      var HTML_REPLACEMENTS = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      function replaceUnsafeChar(ch) {
        return HTML_REPLACEMENTS[ch];
      }
      function escapeHtml(str) {
        if (HTML_ESCAPE_TEST_RE.test(str)) {
          return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
        }
        return str;
      }
      var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
      function escapeRE(str) {
        return str.replace(REGEXP_ESCAPE_RE, "\\$&");
      }
      function isSpace(code) {
        switch (code) {
          case 9:
          case 32:
            return true;
        }
        return false;
      }
      function isWhiteSpace(code) {
        if (code >= 8192 && code <= 8202) {
          return true;
        }
        switch (code) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 160:
          case 5760:
          case 8239:
          case 8287:
          case 12288:
            return true;
        }
        return false;
      }
      var UNICODE_PUNCT_RE = require_regex();
      function isPunctChar(ch) {
        return UNICODE_PUNCT_RE.test(ch);
      }
      function isMdAsciiPunct(ch) {
        switch (ch) {
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 124:
          case 125:
          case 126:
            return true;
          default:
            return false;
        }
      }
      function normalizeReference(str) {
        str = str.trim().replace(/\s+/g, " ");
        if ("\u1E9E".toLowerCase() === "\u1E7E") {
          str = str.replace(/ẞ/g, "\xDF");
        }
        return str.toLowerCase().toUpperCase();
      }
      exports.lib = {};
      exports.lib.mdurl = require_mdurl();
      exports.lib.ucmicro = require_uc();
      exports.assign = assign2;
      exports.isString = isString2;
      exports.has = has;
      exports.unescapeMd = unescapeMd;
      exports.unescapeAll = unescapeAll;
      exports.isValidEntityCode = isValidEntityCode;
      exports.fromCodePoint = fromCodePoint;
      exports.escapeHtml = escapeHtml;
      exports.arrayReplaceAt = arrayReplaceAt;
      exports.isSpace = isSpace;
      exports.isWhiteSpace = isWhiteSpace;
      exports.isMdAsciiPunct = isMdAsciiPunct;
      exports.isPunctChar = isPunctChar;
      exports.escapeRE = escapeRE;
      exports.normalizeReference = normalizeReference;
    }
  });

  // node_modules/markdown-it/lib/helpers/parse_link_label.js
  var require_parse_link_label = __commonJS({
    "node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {
      "use strict";
      module.exports = function parseLinkLabel(state, start, disableNested) {
        var level, found, marker, prevPos, labelEnd = -1, max = state.posMax, oldPos = state.pos;
        state.pos = start + 1;
        level = 1;
        while (state.pos < max) {
          marker = state.src.charCodeAt(state.pos);
          if (marker === 93) {
            level--;
            if (level === 0) {
              found = true;
              break;
            }
          }
          prevPos = state.pos;
          state.md.inline.skipToken(state);
          if (marker === 91) {
            if (prevPos === state.pos - 1) {
              level++;
            } else if (disableNested) {
              state.pos = oldPos;
              return -1;
            }
          }
        }
        if (found) {
          labelEnd = state.pos;
        }
        state.pos = oldPos;
        return labelEnd;
      };
    }
  });

  // node_modules/markdown-it/lib/helpers/parse_link_destination.js
  var require_parse_link_destination = __commonJS({
    "node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {
      "use strict";
      var unescapeAll = require_utils().unescapeAll;
      module.exports = function parseLinkDestination(str, pos, max) {
        var code, level, lines = 0, start = pos, result = {
          ok: false,
          pos: 0,
          lines: 0,
          str: ""
        };
        if (str.charCodeAt(pos) === 60) {
          pos++;
          while (pos < max) {
            code = str.charCodeAt(pos);
            if (code === 10) {
              return result;
            }
            if (code === 60) {
              return result;
            }
            if (code === 62) {
              result.pos = pos + 1;
              result.str = unescapeAll(str.slice(start + 1, pos));
              result.ok = true;
              return result;
            }
            if (code === 92 && pos + 1 < max) {
              pos += 2;
              continue;
            }
            pos++;
          }
          return result;
        }
        level = 0;
        while (pos < max) {
          code = str.charCodeAt(pos);
          if (code === 32) {
            break;
          }
          if (code < 32 || code === 127) {
            break;
          }
          if (code === 92 && pos + 1 < max) {
            if (str.charCodeAt(pos + 1) === 32) {
              break;
            }
            pos += 2;
            continue;
          }
          if (code === 40) {
            level++;
            if (level > 32) {
              return result;
            }
          }
          if (code === 41) {
            if (level === 0) {
              break;
            }
            level--;
          }
          pos++;
        }
        if (start === pos) {
          return result;
        }
        if (level !== 0) {
          return result;
        }
        result.str = unescapeAll(str.slice(start, pos));
        result.lines = lines;
        result.pos = pos;
        result.ok = true;
        return result;
      };
    }
  });

  // node_modules/markdown-it/lib/helpers/parse_link_title.js
  var require_parse_link_title = __commonJS({
    "node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {
      "use strict";
      var unescapeAll = require_utils().unescapeAll;
      module.exports = function parseLinkTitle(str, pos, max) {
        var code, marker, lines = 0, start = pos, result = {
          ok: false,
          pos: 0,
          lines: 0,
          str: ""
        };
        if (pos >= max) {
          return result;
        }
        marker = str.charCodeAt(pos);
        if (marker !== 34 && marker !== 39 && marker !== 40) {
          return result;
        }
        pos++;
        if (marker === 40) {
          marker = 41;
        }
        while (pos < max) {
          code = str.charCodeAt(pos);
          if (code === marker) {
            result.pos = pos + 1;
            result.lines = lines;
            result.str = unescapeAll(str.slice(start + 1, pos));
            result.ok = true;
            return result;
          } else if (code === 40 && marker === 41) {
            return result;
          } else if (code === 10) {
            lines++;
          } else if (code === 92 && pos + 1 < max) {
            pos++;
            if (str.charCodeAt(pos) === 10) {
              lines++;
            }
          }
          pos++;
        }
        return result;
      };
    }
  });

  // node_modules/markdown-it/lib/helpers/index.js
  var require_helpers = __commonJS({
    "node_modules/markdown-it/lib/helpers/index.js"(exports) {
      "use strict";
      exports.parseLinkLabel = require_parse_link_label();
      exports.parseLinkDestination = require_parse_link_destination();
      exports.parseLinkTitle = require_parse_link_title();
    }
  });

  // node_modules/markdown-it/lib/renderer.js
  var require_renderer = __commonJS({
    "node_modules/markdown-it/lib/renderer.js"(exports, module) {
      "use strict";
      var assign2 = require_utils().assign;
      var unescapeAll = require_utils().unescapeAll;
      var escapeHtml = require_utils().escapeHtml;
      var default_rules = {};
      default_rules.code_inline = function(tokens, idx, options, env, slf) {
        var token = tokens[idx];
        return "<code" + slf.renderAttrs(token) + ">" + escapeHtml(tokens[idx].content) + "</code>";
      };
      default_rules.code_block = function(tokens, idx, options, env, slf) {
        var token = tokens[idx];
        return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml(tokens[idx].content) + "</code></pre>\n";
      };
      default_rules.fence = function(tokens, idx, options, env, slf) {
        var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
        if (info) {
          arr = info.split(/(\s+)/g);
          langName = arr[0];
          langAttrs = arr.slice(2).join("");
        }
        if (options.highlight) {
          highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
        } else {
          highlighted = escapeHtml(token.content);
        }
        if (highlighted.indexOf("<pre") === 0) {
          return highlighted + "\n";
        }
        if (info) {
          i = token.attrIndex("class");
          tmpAttrs = token.attrs ? token.attrs.slice() : [];
          if (i < 0) {
            tmpAttrs.push(["class", options.langPrefix + langName]);
          } else {
            tmpAttrs[i] = tmpAttrs[i].slice();
            tmpAttrs[i][1] += " " + options.langPrefix + langName;
          }
          tmpToken = {
            attrs: tmpAttrs
          };
          return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
        }
        return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
      };
      default_rules.image = function(tokens, idx, options, env, slf) {
        var token = tokens[idx];
        token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
        return slf.renderToken(tokens, idx, options);
      };
      default_rules.hardbreak = function(tokens, idx, options) {
        return options.xhtmlOut ? "<br />\n" : "<br>\n";
      };
      default_rules.softbreak = function(tokens, idx, options) {
        return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
      };
      default_rules.text = function(tokens, idx) {
        return escapeHtml(tokens[idx].content);
      };
      default_rules.html_block = function(tokens, idx) {
        return tokens[idx].content;
      };
      default_rules.html_inline = function(tokens, idx) {
        return tokens[idx].content;
      };
      function Renderer() {
        this.rules = assign2({}, default_rules);
      }
      Renderer.prototype.renderAttrs = function renderAttrs(token) {
        var i, l, result;
        if (!token.attrs) {
          return "";
        }
        result = "";
        for (i = 0, l = token.attrs.length; i < l; i++) {
          result += " " + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
        }
        return result;
      };
      Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
        var nextToken, result = "", needLf = false, token = tokens[idx];
        if (token.hidden) {
          return "";
        }
        if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
          result += "\n";
        }
        result += (token.nesting === -1 ? "</" : "<") + token.tag;
        result += this.renderAttrs(token);
        if (token.nesting === 0 && options.xhtmlOut) {
          result += " /";
        }
        if (token.block) {
          needLf = true;
          if (token.nesting === 1) {
            if (idx + 1 < tokens.length) {
              nextToken = tokens[idx + 1];
              if (nextToken.type === "inline" || nextToken.hidden) {
                needLf = false;
              } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
                needLf = false;
              }
            }
          }
        }
        result += needLf ? ">\n" : ">";
        return result;
      };
      Renderer.prototype.renderInline = function(tokens, options, env) {
        var type, result = "", rules = this.rules;
        for (var i = 0, len = tokens.length; i < len; i++) {
          type = tokens[i].type;
          if (typeof rules[type] !== "undefined") {
            result += rules[type](tokens, i, options, env, this);
          } else {
            result += this.renderToken(tokens, i, options);
          }
        }
        return result;
      };
      Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
        var result = "";
        for (var i = 0, len = tokens.length; i < len; i++) {
          if (tokens[i].type === "text") {
            result += tokens[i].content;
          } else if (tokens[i].type === "image") {
            result += this.renderInlineAsText(tokens[i].children, options, env);
          } else if (tokens[i].type === "softbreak") {
            result += "\n";
          }
        }
        return result;
      };
      Renderer.prototype.render = function(tokens, options, env) {
        var i, len, type, result = "", rules = this.rules;
        for (i = 0, len = tokens.length; i < len; i++) {
          type = tokens[i].type;
          if (type === "inline") {
            result += this.renderInline(tokens[i].children, options, env);
          } else if (typeof rules[type] !== "undefined") {
            result += rules[tokens[i].type](tokens, i, options, env, this);
          } else {
            result += this.renderToken(tokens, i, options, env);
          }
        }
        return result;
      };
      module.exports = Renderer;
    }
  });

  // node_modules/markdown-it/lib/ruler.js
  var require_ruler = __commonJS({
    "node_modules/markdown-it/lib/ruler.js"(exports, module) {
      "use strict";
      function Ruler() {
        this.__rules__ = [];
        this.__cache__ = null;
      }
      Ruler.prototype.__find__ = function(name) {
        for (var i = 0; i < this.__rules__.length; i++) {
          if (this.__rules__[i].name === name) {
            return i;
          }
        }
        return -1;
      };
      Ruler.prototype.__compile__ = function() {
        var self = this;
        var chains = [""];
        self.__rules__.forEach(function(rule) {
          if (!rule.enabled) {
            return;
          }
          rule.alt.forEach(function(altName) {
            if (chains.indexOf(altName) < 0) {
              chains.push(altName);
            }
          });
        });
        self.__cache__ = {};
        chains.forEach(function(chain) {
          self.__cache__[chain] = [];
          self.__rules__.forEach(function(rule) {
            if (!rule.enabled) {
              return;
            }
            if (chain && rule.alt.indexOf(chain) < 0) {
              return;
            }
            self.__cache__[chain].push(rule.fn);
          });
        });
      };
      Ruler.prototype.at = function(name, fn, options) {
        var index = this.__find__(name);
        var opt = options || {};
        if (index === -1) {
          throw new Error("Parser rule not found: " + name);
        }
        this.__rules__[index].fn = fn;
        this.__rules__[index].alt = opt.alt || [];
        this.__cache__ = null;
      };
      Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
        var index = this.__find__(beforeName);
        var opt = options || {};
        if (index === -1) {
          throw new Error("Parser rule not found: " + beforeName);
        }
        this.__rules__.splice(index, 0, {
          name: ruleName,
          enabled: true,
          fn,
          alt: opt.alt || []
        });
        this.__cache__ = null;
      };
      Ruler.prototype.after = function(afterName, ruleName, fn, options) {
        var index = this.__find__(afterName);
        var opt = options || {};
        if (index === -1) {
          throw new Error("Parser rule not found: " + afterName);
        }
        this.__rules__.splice(index + 1, 0, {
          name: ruleName,
          enabled: true,
          fn,
          alt: opt.alt || []
        });
        this.__cache__ = null;
      };
      Ruler.prototype.push = function(ruleName, fn, options) {
        var opt = options || {};
        this.__rules__.push({
          name: ruleName,
          enabled: true,
          fn,
          alt: opt.alt || []
        });
        this.__cache__ = null;
      };
      Ruler.prototype.enable = function(list, ignoreInvalid) {
        if (!Array.isArray(list)) {
          list = [list];
        }
        var result = [];
        list.forEach(function(name) {
          var idx = this.__find__(name);
          if (idx < 0) {
            if (ignoreInvalid) {
              return;
            }
            throw new Error("Rules manager: invalid rule name " + name);
          }
          this.__rules__[idx].enabled = true;
          result.push(name);
        }, this);
        this.__cache__ = null;
        return result;
      };
      Ruler.prototype.enableOnly = function(list, ignoreInvalid) {
        if (!Array.isArray(list)) {
          list = [list];
        }
        this.__rules__.forEach(function(rule) {
          rule.enabled = false;
        });
        this.enable(list, ignoreInvalid);
      };
      Ruler.prototype.disable = function(list, ignoreInvalid) {
        if (!Array.isArray(list)) {
          list = [list];
        }
        var result = [];
        list.forEach(function(name) {
          var idx = this.__find__(name);
          if (idx < 0) {
            if (ignoreInvalid) {
              return;
            }
            throw new Error("Rules manager: invalid rule name " + name);
          }
          this.__rules__[idx].enabled = false;
          result.push(name);
        }, this);
        this.__cache__ = null;
        return result;
      };
      Ruler.prototype.getRules = function(chainName) {
        if (this.__cache__ === null) {
          this.__compile__();
        }
        return this.__cache__[chainName] || [];
      };
      module.exports = Ruler;
    }
  });

  // node_modules/markdown-it/lib/rules_core/normalize.js
  var require_normalize = __commonJS({
    "node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {
      "use strict";
      var NEWLINES_RE = /\r\n?|\n/g;
      var NULL_RE = /\0/g;
      module.exports = function normalize2(state) {
        var str;
        str = state.src.replace(NEWLINES_RE, "\n");
        str = str.replace(NULL_RE, "\uFFFD");
        state.src = str;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_core/block.js
  var require_block = __commonJS({
    "node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {
      "use strict";
      module.exports = function block2(state) {
        var token;
        if (state.inlineMode) {
          token = new state.Token("inline", "", 0);
          token.content = state.src;
          token.map = [0, 1];
          token.children = [];
          state.tokens.push(token);
        } else {
          state.md.block.parse(state.src, state.md, state.env, state.tokens);
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_core/inline.js
  var require_inline = __commonJS({
    "node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {
      "use strict";
      module.exports = function inline(state) {
        var tokens = state.tokens, tok, i, l;
        for (i = 0, l = tokens.length; i < l; i++) {
          tok = tokens[i];
          if (tok.type === "inline") {
            state.md.inline.parse(tok.content, state.md, state.env, tok.children);
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_core/linkify.js
  var require_linkify = __commonJS({
    "node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {
      "use strict";
      var arrayReplaceAt = require_utils().arrayReplaceAt;
      function isLinkOpen(str) {
        return /^<a[>\s]/i.test(str);
      }
      function isLinkClose(str) {
        return /^<\/a\s*>/i.test(str);
      }
      module.exports = function linkify(state) {
        var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
        if (!state.md.options.linkify) {
          return;
        }
        for (j = 0, l = blockTokens.length; j < l; j++) {
          if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
            continue;
          }
          tokens = blockTokens[j].children;
          htmlLinkLevel = 0;
          for (i = tokens.length - 1; i >= 0; i--) {
            currentToken = tokens[i];
            if (currentToken.type === "link_close") {
              i--;
              while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
                i--;
              }
              continue;
            }
            if (currentToken.type === "html_inline") {
              if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
                htmlLinkLevel--;
              }
              if (isLinkClose(currentToken.content)) {
                htmlLinkLevel++;
              }
            }
            if (htmlLinkLevel > 0) {
              continue;
            }
            if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
              text = currentToken.content;
              links = state.md.linkify.match(text);
              nodes = [];
              level = currentToken.level;
              lastPos = 0;
              if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === "text_special") {
                links = links.slice(1);
              }
              for (ln = 0; ln < links.length; ln++) {
                url = links[ln].url;
                fullUrl = state.md.normalizeLink(url);
                if (!state.md.validateLink(fullUrl)) {
                  continue;
                }
                urlText = links[ln].text;
                if (!links[ln].schema) {
                  urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
                } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                  urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
                } else {
                  urlText = state.md.normalizeLinkText(urlText);
                }
                pos = links[ln].index;
                if (pos > lastPos) {
                  token = new state.Token("text", "", 0);
                  token.content = text.slice(lastPos, pos);
                  token.level = level;
                  nodes.push(token);
                }
                token = new state.Token("link_open", "a", 1);
                token.attrs = [["href", fullUrl]];
                token.level = level++;
                token.markup = "linkify";
                token.info = "auto";
                nodes.push(token);
                token = new state.Token("text", "", 0);
                token.content = urlText;
                token.level = level;
                nodes.push(token);
                token = new state.Token("link_close", "a", -1);
                token.level = --level;
                token.markup = "linkify";
                token.info = "auto";
                nodes.push(token);
                lastPos = links[ln].lastIndex;
              }
              if (lastPos < text.length) {
                token = new state.Token("text", "", 0);
                token.content = text.slice(lastPos);
                token.level = level;
                nodes.push(token);
              }
              blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
            }
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_core/replacements.js
  var require_replacements = __commonJS({
    "node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {
      "use strict";
      var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
      var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
      var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
      var SCOPED_ABBR = {
        c: "\xA9",
        r: "\xAE",
        tm: "\u2122"
      };
      function replaceFn(match, name) {
        return SCOPED_ABBR[name.toLowerCase()];
      }
      function replace_scoped(inlineTokens) {
        var i, token, inside_autolink = 0;
        for (i = inlineTokens.length - 1; i >= 0; i--) {
          token = inlineTokens[i];
          if (token.type === "text" && !inside_autolink) {
            token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
          }
          if (token.type === "link_open" && token.info === "auto") {
            inside_autolink--;
          }
          if (token.type === "link_close" && token.info === "auto") {
            inside_autolink++;
          }
        }
      }
      function replace_rare(inlineTokens) {
        var i, token, inside_autolink = 0;
        for (i = inlineTokens.length - 1; i >= 0; i--) {
          token = inlineTokens[i];
          if (token.type === "text" && !inside_autolink) {
            if (RARE_RE.test(token.content)) {
              token.content = token.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
            }
          }
          if (token.type === "link_open" && token.info === "auto") {
            inside_autolink--;
          }
          if (token.type === "link_close" && token.info === "auto") {
            inside_autolink++;
          }
        }
      }
      module.exports = function replace2(state) {
        var blkIdx;
        if (!state.md.options.typographer) {
          return;
        }
        for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
          if (state.tokens[blkIdx].type !== "inline") {
            continue;
          }
          if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
            replace_scoped(state.tokens[blkIdx].children);
          }
          if (RARE_RE.test(state.tokens[blkIdx].content)) {
            replace_rare(state.tokens[blkIdx].children);
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_core/smartquotes.js
  var require_smartquotes = __commonJS({
    "node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {
      "use strict";
      var isWhiteSpace = require_utils().isWhiteSpace;
      var isPunctChar = require_utils().isPunctChar;
      var isMdAsciiPunct = require_utils().isMdAsciiPunct;
      var QUOTE_TEST_RE = /['"]/;
      var QUOTE_RE = /['"]/g;
      var APOSTROPHE = "\u2019";
      function replaceAt(str, index, ch) {
        return str.slice(0, index) + ch + str.slice(index + 1);
      }
      function process_inlines(tokens, state) {
        var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
        stack = [];
        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          thisLevel = tokens[i].level;
          for (j = stack.length - 1; j >= 0; j--) {
            if (stack[j].level <= thisLevel) {
              break;
            }
          }
          stack.length = j + 1;
          if (token.type !== "text") {
            continue;
          }
          text = token.content;
          pos = 0;
          max = text.length;
          OUTER:
            while (pos < max) {
              QUOTE_RE.lastIndex = pos;
              t = QUOTE_RE.exec(text);
              if (!t) {
                break;
              }
              canOpen = canClose = true;
              pos = t.index + 1;
              isSingle = t[0] === "'";
              lastChar = 32;
              if (t.index - 1 >= 0) {
                lastChar = text.charCodeAt(t.index - 1);
              } else {
                for (j = i - 1; j >= 0; j--) {
                  if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                    break;
                  if (!tokens[j].content)
                    continue;
                  lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                  break;
                }
              }
              nextChar = 32;
              if (pos < max) {
                nextChar = text.charCodeAt(pos);
              } else {
                for (j = i + 1; j < tokens.length; j++) {
                  if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak")
                    break;
                  if (!tokens[j].content)
                    continue;
                  nextChar = tokens[j].content.charCodeAt(0);
                  break;
                }
              }
              isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
              isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
              isLastWhiteSpace = isWhiteSpace(lastChar);
              isNextWhiteSpace = isWhiteSpace(nextChar);
              if (isNextWhiteSpace) {
                canOpen = false;
              } else if (isNextPunctChar) {
                if (!(isLastWhiteSpace || isLastPunctChar)) {
                  canOpen = false;
                }
              }
              if (isLastWhiteSpace) {
                canClose = false;
              } else if (isLastPunctChar) {
                if (!(isNextWhiteSpace || isNextPunctChar)) {
                  canClose = false;
                }
              }
              if (nextChar === 34 && t[0] === '"') {
                if (lastChar >= 48 && lastChar <= 57) {
                  canClose = canOpen = false;
                }
              }
              if (canOpen && canClose) {
                canOpen = isLastPunctChar;
                canClose = isNextPunctChar;
              }
              if (!canOpen && !canClose) {
                if (isSingle) {
                  token.content = replaceAt(token.content, t.index, APOSTROPHE);
                }
                continue;
              }
              if (canClose) {
                for (j = stack.length - 1; j >= 0; j--) {
                  item = stack[j];
                  if (stack[j].level < thisLevel) {
                    break;
                  }
                  if (item.single === isSingle && stack[j].level === thisLevel) {
                    item = stack[j];
                    if (isSingle) {
                      openQuote = state.md.options.quotes[2];
                      closeQuote = state.md.options.quotes[3];
                    } else {
                      openQuote = state.md.options.quotes[0];
                      closeQuote = state.md.options.quotes[1];
                    }
                    token.content = replaceAt(token.content, t.index, closeQuote);
                    tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
                    pos += closeQuote.length - 1;
                    if (item.token === i) {
                      pos += openQuote.length - 1;
                    }
                    text = token.content;
                    max = text.length;
                    stack.length = j;
                    continue OUTER;
                  }
                }
              }
              if (canOpen) {
                stack.push({
                  token: i,
                  pos: t.index,
                  single: isSingle,
                  level: thisLevel
                });
              } else if (canClose && isSingle) {
                token.content = replaceAt(token.content, t.index, APOSTROPHE);
              }
            }
        }
      }
      module.exports = function smartquotes(state) {
        var blkIdx;
        if (!state.md.options.typographer) {
          return;
        }
        for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
          if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
            continue;
          }
          process_inlines(state.tokens[blkIdx].children, state);
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_core/text_join.js
  var require_text_join = __commonJS({
    "node_modules/markdown-it/lib/rules_core/text_join.js"(exports, module) {
      "use strict";
      module.exports = function text_join(state) {
        var j, l, tokens, curr, max, last2, blockTokens = state.tokens;
        for (j = 0, l = blockTokens.length; j < l; j++) {
          if (blockTokens[j].type !== "inline")
            continue;
          tokens = blockTokens[j].children;
          max = tokens.length;
          for (curr = 0; curr < max; curr++) {
            if (tokens[curr].type === "text_special") {
              tokens[curr].type = "text";
            }
          }
          for (curr = last2 = 0; curr < max; curr++) {
            if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
              tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
            } else {
              if (curr !== last2) {
                tokens[last2] = tokens[curr];
              }
              last2++;
            }
          }
          if (curr !== last2) {
            tokens.length = last2;
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/token.js
  var require_token = __commonJS({
    "node_modules/markdown-it/lib/token.js"(exports, module) {
      "use strict";
      function Token2(type, tag, nesting) {
        this.type = type;
        this.tag = tag;
        this.attrs = null;
        this.map = null;
        this.nesting = nesting;
        this.level = 0;
        this.children = null;
        this.content = "";
        this.markup = "";
        this.info = "";
        this.meta = null;
        this.block = false;
        this.hidden = false;
      }
      Token2.prototype.attrIndex = function attrIndex(name) {
        var attrs, i, len;
        if (!this.attrs) {
          return -1;
        }
        attrs = this.attrs;
        for (i = 0, len = attrs.length; i < len; i++) {
          if (attrs[i][0] === name) {
            return i;
          }
        }
        return -1;
      };
      Token2.prototype.attrPush = function attrPush(attrData) {
        if (this.attrs) {
          this.attrs.push(attrData);
        } else {
          this.attrs = [attrData];
        }
      };
      Token2.prototype.attrSet = function attrSet(name, value) {
        var idx = this.attrIndex(name), attrData = [name, value];
        if (idx < 0) {
          this.attrPush(attrData);
        } else {
          this.attrs[idx] = attrData;
        }
      };
      Token2.prototype.attrGet = function attrGet(name) {
        var idx = this.attrIndex(name), value = null;
        if (idx >= 0) {
          value = this.attrs[idx][1];
        }
        return value;
      };
      Token2.prototype.attrJoin = function attrJoin(name, value) {
        var idx = this.attrIndex(name);
        if (idx < 0) {
          this.attrPush([name, value]);
        } else {
          this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
        }
      };
      module.exports = Token2;
    }
  });

  // node_modules/markdown-it/lib/rules_core/state_core.js
  var require_state_core = __commonJS({
    "node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {
      "use strict";
      var Token2 = require_token();
      function StateCore(src, md2, env) {
        this.src = src;
        this.env = env;
        this.tokens = [];
        this.inlineMode = false;
        this.md = md2;
      }
      StateCore.prototype.Token = Token2;
      module.exports = StateCore;
    }
  });

  // node_modules/markdown-it/lib/parser_core.js
  var require_parser_core = __commonJS({
    "node_modules/markdown-it/lib/parser_core.js"(exports, module) {
      "use strict";
      var Ruler = require_ruler();
      var _rules = [
        ["normalize", require_normalize()],
        ["block", require_block()],
        ["inline", require_inline()],
        ["linkify", require_linkify()],
        ["replacements", require_replacements()],
        ["smartquotes", require_smartquotes()],
        ["text_join", require_text_join()]
      ];
      function Core() {
        this.ruler = new Ruler();
        for (var i = 0; i < _rules.length; i++) {
          this.ruler.push(_rules[i][0], _rules[i][1]);
        }
      }
      Core.prototype.process = function(state) {
        var i, l, rules;
        rules = this.ruler.getRules("");
        for (i = 0, l = rules.length; i < l; i++) {
          rules[i](state);
        }
      };
      Core.prototype.State = require_state_core();
      module.exports = Core;
    }
  });

  // node_modules/markdown-it/lib/rules_block/table.js
  var require_table = __commonJS({
    "node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      function getLine(state, line) {
        var pos = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
        return state.src.slice(pos, max);
      }
      function escapedSplit(str) {
        var result = [], pos = 0, max = str.length, ch, isEscaped = false, lastPos = 0, current = "";
        ch = str.charCodeAt(pos);
        while (pos < max) {
          if (ch === 124) {
            if (!isEscaped) {
              result.push(current + str.substring(lastPos, pos));
              current = "";
              lastPos = pos + 1;
            } else {
              current += str.substring(lastPos, pos - 1);
              lastPos = pos;
            }
          }
          isEscaped = ch === 92;
          pos++;
          ch = str.charCodeAt(pos);
        }
        result.push(current + str.substring(lastPos));
        return result;
      }
      module.exports = function table(state, startLine, endLine, silent) {
        var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
        if (startLine + 2 > endLine) {
          return false;
        }
        nextLine = startLine + 1;
        if (state.sCount[nextLine] < state.blkIndent) {
          return false;
        }
        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          return false;
        }
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        if (pos >= state.eMarks[nextLine]) {
          return false;
        }
        firstCh = state.src.charCodeAt(pos++);
        if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
          return false;
        }
        if (pos >= state.eMarks[nextLine]) {
          return false;
        }
        secondCh = state.src.charCodeAt(pos++);
        if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
          return false;
        }
        if (firstCh === 45 && isSpace(secondCh)) {
          return false;
        }
        while (pos < state.eMarks[nextLine]) {
          ch = state.src.charCodeAt(pos);
          if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
            return false;
          }
          pos++;
        }
        lineText = getLine(state, startLine + 1);
        columns = lineText.split("|");
        aligns = [];
        for (i = 0; i < columns.length; i++) {
          t = columns[i].trim();
          if (!t) {
            if (i === 0 || i === columns.length - 1) {
              continue;
            } else {
              return false;
            }
          }
          if (!/^:?-+:?$/.test(t)) {
            return false;
          }
          if (t.charCodeAt(t.length - 1) === 58) {
            aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
          } else if (t.charCodeAt(0) === 58) {
            aligns.push("left");
          } else {
            aligns.push("");
          }
        }
        lineText = getLine(state, startLine).trim();
        if (lineText.indexOf("|") === -1) {
          return false;
        }
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        columns = escapedSplit(lineText);
        if (columns.length && columns[0] === "")
          columns.shift();
        if (columns.length && columns[columns.length - 1] === "")
          columns.pop();
        columnCount = columns.length;
        if (columnCount === 0 || columnCount !== aligns.length) {
          return false;
        }
        if (silent) {
          return true;
        }
        oldParentType = state.parentType;
        state.parentType = "table";
        terminatorRules = state.md.block.ruler.getRules("blockquote");
        token = state.push("table_open", "table", 1);
        token.map = tableLines = [startLine, 0];
        token = state.push("thead_open", "thead", 1);
        token.map = [startLine, startLine + 1];
        token = state.push("tr_open", "tr", 1);
        token.map = [startLine, startLine + 1];
        for (i = 0; i < columns.length; i++) {
          token = state.push("th_open", "th", 1);
          if (aligns[i]) {
            token.attrs = [["style", "text-align:" + aligns[i]]];
          }
          token = state.push("inline", "", 0);
          token.content = columns[i].trim();
          token.children = [];
          token = state.push("th_close", "th", -1);
        }
        token = state.push("tr_close", "tr", -1);
        token = state.push("thead_close", "thead", -1);
        for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
          lineText = getLine(state, nextLine).trim();
          if (!lineText) {
            break;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            break;
          }
          columns = escapedSplit(lineText);
          if (columns.length && columns[0] === "")
            columns.shift();
          if (columns.length && columns[columns.length - 1] === "")
            columns.pop();
          if (nextLine === startLine + 2) {
            token = state.push("tbody_open", "tbody", 1);
            token.map = tbodyLines = [startLine + 2, 0];
          }
          token = state.push("tr_open", "tr", 1);
          token.map = [nextLine, nextLine + 1];
          for (i = 0; i < columnCount; i++) {
            token = state.push("td_open", "td", 1);
            if (aligns[i]) {
              token.attrs = [["style", "text-align:" + aligns[i]]];
            }
            token = state.push("inline", "", 0);
            token.content = columns[i] ? columns[i].trim() : "";
            token.children = [];
            token = state.push("td_close", "td", -1);
          }
          token = state.push("tr_close", "tr", -1);
        }
        if (tbodyLines) {
          token = state.push("tbody_close", "tbody", -1);
          tbodyLines[1] = nextLine;
        }
        token = state.push("table_close", "table", -1);
        tableLines[1] = nextLine;
        state.parentType = oldParentType;
        state.line = nextLine;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/code.js
  var require_code = __commonJS({
    "node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {
      "use strict";
      module.exports = function code(state, startLine, endLine) {
        var nextLine, last2, token;
        if (state.sCount[startLine] - state.blkIndent < 4) {
          return false;
        }
        last2 = nextLine = startLine + 1;
        while (nextLine < endLine) {
          if (state.isEmpty(nextLine)) {
            nextLine++;
            continue;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            nextLine++;
            last2 = nextLine;
            continue;
          }
          break;
        }
        state.line = last2;
        token = state.push("code_block", "code", 0);
        token.content = state.getLines(startLine, last2, 4 + state.blkIndent, false) + "\n";
        token.map = [startLine, state.line];
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/fence.js
  var require_fence = __commonJS({
    "node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {
      "use strict";
      module.exports = function fence(state, startLine, endLine, silent) {
        var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (pos + 3 > max) {
          return false;
        }
        marker = state.src.charCodeAt(pos);
        if (marker !== 126 && marker !== 96) {
          return false;
        }
        mem = pos;
        pos = state.skipChars(pos, marker);
        len = pos - mem;
        if (len < 3) {
          return false;
        }
        markup = state.src.slice(mem, pos);
        params = state.src.slice(pos, max);
        if (marker === 96) {
          if (params.indexOf(String.fromCharCode(marker)) >= 0) {
            return false;
          }
        }
        if (silent) {
          return true;
        }
        nextLine = startLine;
        for (; ; ) {
          nextLine++;
          if (nextLine >= endLine) {
            break;
          }
          pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (pos < max && state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          if (state.src.charCodeAt(pos) !== marker) {
            continue;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            continue;
          }
          pos = state.skipChars(pos, marker);
          if (pos - mem < len) {
            continue;
          }
          pos = state.skipSpaces(pos);
          if (pos < max) {
            continue;
          }
          haveEndMarker = true;
          break;
        }
        len = state.sCount[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);
        token = state.push("fence", "code", 0);
        token.info = params;
        token.content = state.getLines(startLine + 1, nextLine, len, true);
        token.markup = markup;
        token.map = [startLine, state.line];
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/blockquote.js
  var require_blockquote = __commonJS({
    "node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function blockquote(state, startLine, endLine, silent) {
        var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset2, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (state.src.charCodeAt(pos++) !== 62) {
          return false;
        }
        if (silent) {
          return true;
        }
        initial = offset2 = state.sCount[startLine] + 1;
        if (state.src.charCodeAt(pos) === 32) {
          pos++;
          initial++;
          offset2++;
          adjustTab = false;
          spaceAfterMarker = true;
        } else if (state.src.charCodeAt(pos) === 9) {
          spaceAfterMarker = true;
          if ((state.bsCount[startLine] + offset2) % 4 === 3) {
            pos++;
            initial++;
            offset2++;
            adjustTab = false;
          } else {
            adjustTab = true;
          }
        } else {
          spaceAfterMarker = false;
        }
        oldBMarks = [state.bMarks[startLine]];
        state.bMarks[startLine] = pos;
        while (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (isSpace(ch)) {
            if (ch === 9) {
              offset2 += 4 - (offset2 + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
            } else {
              offset2++;
            }
          } else {
            break;
          }
          pos++;
        }
        oldBSCount = [state.bsCount[startLine]];
        state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
        lastLineEmpty = pos >= max;
        oldSCount = [state.sCount[startLine]];
        state.sCount[startLine] = offset2 - initial;
        oldTShift = [state.tShift[startLine]];
        state.tShift[startLine] = pos - state.bMarks[startLine];
        terminatorRules = state.md.block.ruler.getRules("blockquote");
        oldParentType = state.parentType;
        state.parentType = "blockquote";
        for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
          isOutdented = state.sCount[nextLine] < state.blkIndent;
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (pos >= max) {
            break;
          }
          if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
            initial = offset2 = state.sCount[nextLine] + 1;
            if (state.src.charCodeAt(pos) === 32) {
              pos++;
              initial++;
              offset2++;
              adjustTab = false;
              spaceAfterMarker = true;
            } else if (state.src.charCodeAt(pos) === 9) {
              spaceAfterMarker = true;
              if ((state.bsCount[nextLine] + offset2) % 4 === 3) {
                pos++;
                initial++;
                offset2++;
                adjustTab = false;
              } else {
                adjustTab = true;
              }
            } else {
              spaceAfterMarker = false;
            }
            oldBMarks.push(state.bMarks[nextLine]);
            state.bMarks[nextLine] = pos;
            while (pos < max) {
              ch = state.src.charCodeAt(pos);
              if (isSpace(ch)) {
                if (ch === 9) {
                  offset2 += 4 - (offset2 + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
                } else {
                  offset2++;
                }
              } else {
                break;
              }
              pos++;
            }
            lastLineEmpty = pos >= max;
            oldBSCount.push(state.bsCount[nextLine]);
            state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] = offset2 - initial;
            oldTShift.push(state.tShift[nextLine]);
            state.tShift[nextLine] = pos - state.bMarks[nextLine];
            continue;
          }
          if (lastLineEmpty) {
            break;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            state.lineMax = nextLine;
            if (state.blkIndent !== 0) {
              oldBMarks.push(state.bMarks[nextLine]);
              oldBSCount.push(state.bsCount[nextLine]);
              oldTShift.push(state.tShift[nextLine]);
              oldSCount.push(state.sCount[nextLine]);
              state.sCount[nextLine] -= state.blkIndent;
            }
            break;
          }
          oldBMarks.push(state.bMarks[nextLine]);
          oldBSCount.push(state.bsCount[nextLine]);
          oldTShift.push(state.tShift[nextLine]);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] = -1;
        }
        oldIndent = state.blkIndent;
        state.blkIndent = 0;
        token = state.push("blockquote_open", "blockquote", 1);
        token.markup = ">";
        token.map = lines = [startLine, 0];
        state.md.block.tokenize(state, startLine, nextLine);
        token = state.push("blockquote_close", "blockquote", -1);
        token.markup = ">";
        state.lineMax = oldLineMax;
        state.parentType = oldParentType;
        lines[1] = state.line;
        for (i = 0; i < oldTShift.length; i++) {
          state.bMarks[i + startLine] = oldBMarks[i];
          state.tShift[i + startLine] = oldTShift[i];
          state.sCount[i + startLine] = oldSCount[i];
          state.bsCount[i + startLine] = oldBSCount[i];
        }
        state.blkIndent = oldIndent;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/hr.js
  var require_hr = __commonJS({
    "node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function hr(state, startLine, endLine, silent) {
        var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        marker = state.src.charCodeAt(pos++);
        if (marker !== 42 && marker !== 45 && marker !== 95) {
          return false;
        }
        cnt = 1;
        while (pos < max) {
          ch = state.src.charCodeAt(pos++);
          if (ch !== marker && !isSpace(ch)) {
            return false;
          }
          if (ch === marker) {
            cnt++;
          }
        }
        if (cnt < 3) {
          return false;
        }
        if (silent) {
          return true;
        }
        state.line = startLine + 1;
        token = state.push("hr", "hr", 0);
        token.map = [startLine, state.line];
        token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/list.js
  var require_list = __commonJS({
    "node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      function skipBulletListMarker(state, startLine) {
        var marker, pos, max, ch;
        pos = state.bMarks[startLine] + state.tShift[startLine];
        max = state.eMarks[startLine];
        marker = state.src.charCodeAt(pos++);
        if (marker !== 42 && marker !== 45 && marker !== 43) {
          return -1;
        }
        if (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (!isSpace(ch)) {
            return -1;
          }
        }
        return pos;
      }
      function skipOrderedListMarker(state, startLine) {
        var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max = state.eMarks[startLine];
        if (pos + 1 >= max) {
          return -1;
        }
        ch = state.src.charCodeAt(pos++);
        if (ch < 48 || ch > 57) {
          return -1;
        }
        for (; ; ) {
          if (pos >= max) {
            return -1;
          }
          ch = state.src.charCodeAt(pos++);
          if (ch >= 48 && ch <= 57) {
            if (pos - start >= 10) {
              return -1;
            }
            continue;
          }
          if (ch === 41 || ch === 46) {
            break;
          }
          return -1;
        }
        if (pos < max) {
          ch = state.src.charCodeAt(pos);
          if (!isSpace(ch)) {
            return -1;
          }
        }
        return pos;
      }
      function markTightParagraphs(state, idx) {
        var i, l, level = state.level + 2;
        for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
          if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
            state.tokens[i + 2].hidden = true;
            state.tokens[i].hidden = true;
            i += 2;
          }
        }
      }
      module.exports = function list(state, startLine, endLine, silent) {
        var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max, nextLine, offset2, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, isTerminatingParagraph = false, tight = true;
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
          return false;
        }
        if (silent && state.parentType === "paragraph") {
          if (state.sCount[startLine] >= state.blkIndent) {
            isTerminatingParagraph = true;
          }
        }
        if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
          isOrdered = true;
          start = state.bMarks[startLine] + state.tShift[startLine];
          markerValue = Number(state.src.slice(start, posAfterMarker - 1));
          if (isTerminatingParagraph && markerValue !== 1)
            return false;
        } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
          isOrdered = false;
        } else {
          return false;
        }
        if (isTerminatingParagraph) {
          if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine])
            return false;
        }
        markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
        if (silent) {
          return true;
        }
        listTokIdx = state.tokens.length;
        if (isOrdered) {
          token = state.push("ordered_list_open", "ol", 1);
          if (markerValue !== 1) {
            token.attrs = [["start", markerValue]];
          }
        } else {
          token = state.push("bullet_list_open", "ul", 1);
        }
        token.map = listLines = [startLine, 0];
        token.markup = String.fromCharCode(markerCharCode);
        nextLine = startLine;
        prevEmptyEnd = false;
        terminatorRules = state.md.block.ruler.getRules("list");
        oldParentType = state.parentType;
        state.parentType = "list";
        while (nextLine < endLine) {
          pos = posAfterMarker;
          max = state.eMarks[nextLine];
          initial = offset2 = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
          while (pos < max) {
            ch = state.src.charCodeAt(pos);
            if (ch === 9) {
              offset2 += 4 - (offset2 + state.bsCount[nextLine]) % 4;
            } else if (ch === 32) {
              offset2++;
            } else {
              break;
            }
            pos++;
          }
          contentStart = pos;
          if (contentStart >= max) {
            indentAfterMarker = 1;
          } else {
            indentAfterMarker = offset2 - initial;
          }
          if (indentAfterMarker > 4) {
            indentAfterMarker = 1;
          }
          indent = initial + indentAfterMarker;
          token = state.push("list_item_open", "li", 1);
          token.markup = String.fromCharCode(markerCharCode);
          token.map = itemLines = [startLine, 0];
          if (isOrdered) {
            token.info = state.src.slice(start, posAfterMarker - 1);
          }
          oldTight = state.tight;
          oldTShift = state.tShift[startLine];
          oldSCount = state.sCount[startLine];
          oldListIndent = state.listIndent;
          state.listIndent = state.blkIndent;
          state.blkIndent = indent;
          state.tight = true;
          state.tShift[startLine] = contentStart - state.bMarks[startLine];
          state.sCount[startLine] = offset2;
          if (contentStart >= max && state.isEmpty(startLine + 1)) {
            state.line = Math.min(state.line + 2, endLine);
          } else {
            state.md.block.tokenize(state, startLine, endLine, true);
          }
          if (!state.tight || prevEmptyEnd) {
            tight = false;
          }
          prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
          state.blkIndent = state.listIndent;
          state.listIndent = oldListIndent;
          state.tShift[startLine] = oldTShift;
          state.sCount[startLine] = oldSCount;
          state.tight = oldTight;
          token = state.push("list_item_close", "li", -1);
          token.markup = String.fromCharCode(markerCharCode);
          nextLine = startLine = state.line;
          itemLines[1] = nextLine;
          contentStart = state.bMarks[startLine];
          if (nextLine >= endLine) {
            break;
          }
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          if (state.sCount[startLine] - state.blkIndent >= 4) {
            break;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
          if (isOrdered) {
            posAfterMarker = skipOrderedListMarker(state, nextLine);
            if (posAfterMarker < 0) {
              break;
            }
            start = state.bMarks[nextLine] + state.tShift[nextLine];
          } else {
            posAfterMarker = skipBulletListMarker(state, nextLine);
            if (posAfterMarker < 0) {
              break;
            }
          }
          if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
            break;
          }
        }
        if (isOrdered) {
          token = state.push("ordered_list_close", "ol", -1);
        } else {
          token = state.push("bullet_list_close", "ul", -1);
        }
        token.markup = String.fromCharCode(markerCharCode);
        listLines[1] = nextLine;
        state.line = nextLine;
        state.parentType = oldParentType;
        if (tight) {
          markTightParagraphs(state, listTokIdx);
        }
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/reference.js
  var require_reference = __commonJS({
    "node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {
      "use strict";
      var normalizeReference = require_utils().normalizeReference;
      var isSpace = require_utils().isSpace;
      module.exports = function reference(state, startLine, _endLine, silent) {
        var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], nextLine = startLine + 1;
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (state.src.charCodeAt(pos) !== 91) {
          return false;
        }
        while (++pos < max) {
          if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
            if (pos + 1 === max) {
              return false;
            }
            if (state.src.charCodeAt(pos + 1) !== 58) {
              return false;
            }
            break;
          }
        }
        endLine = state.lineMax;
        terminatorRules = state.md.block.ruler.getRules("reference");
        oldParentType = state.parentType;
        state.parentType = "reference";
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
          if (state.sCount[nextLine] - state.blkIndent > 3) {
            continue;
          }
          if (state.sCount[nextLine] < 0) {
            continue;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
        }
        str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        max = str.length;
        for (pos = 1; pos < max; pos++) {
          ch = str.charCodeAt(pos);
          if (ch === 91) {
            return false;
          } else if (ch === 93) {
            labelEnd = pos;
            break;
          } else if (ch === 10) {
            lines++;
          } else if (ch === 92) {
            pos++;
            if (pos < max && str.charCodeAt(pos) === 10) {
              lines++;
            }
          }
        }
        if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
          return false;
        }
        for (pos = labelEnd + 2; pos < max; pos++) {
          ch = str.charCodeAt(pos);
          if (ch === 10) {
            lines++;
          } else if (isSpace(ch)) {
          } else {
            break;
          }
        }
        res = state.md.helpers.parseLinkDestination(str, pos, max);
        if (!res.ok) {
          return false;
        }
        href = state.md.normalizeLink(res.str);
        if (!state.md.validateLink(href)) {
          return false;
        }
        pos = res.pos;
        lines += res.lines;
        destEndPos = pos;
        destEndLineNo = lines;
        start = pos;
        for (; pos < max; pos++) {
          ch = str.charCodeAt(pos);
          if (ch === 10) {
            lines++;
          } else if (isSpace(ch)) {
          } else {
            break;
          }
        }
        res = state.md.helpers.parseLinkTitle(str, pos, max);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;
          lines += res.lines;
        } else {
          title = "";
          pos = destEndPos;
          lines = destEndLineNo;
        }
        while (pos < max) {
          ch = str.charCodeAt(pos);
          if (!isSpace(ch)) {
            break;
          }
          pos++;
        }
        if (pos < max && str.charCodeAt(pos) !== 10) {
          if (title) {
            title = "";
            pos = destEndPos;
            lines = destEndLineNo;
            while (pos < max) {
              ch = str.charCodeAt(pos);
              if (!isSpace(ch)) {
                break;
              }
              pos++;
            }
          }
        }
        if (pos < max && str.charCodeAt(pos) !== 10) {
          return false;
        }
        label = normalizeReference(str.slice(1, labelEnd));
        if (!label) {
          return false;
        }
        if (silent) {
          return true;
        }
        if (typeof state.env.references === "undefined") {
          state.env.references = {};
        }
        if (typeof state.env.references[label] === "undefined") {
          state.env.references[label] = { title, href };
        }
        state.parentType = oldParentType;
        state.line = startLine + lines + 1;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/common/html_blocks.js
  var require_html_blocks = __commonJS({
    "node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {
      "use strict";
      module.exports = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "section",
        "source",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul"
      ];
    }
  });

  // node_modules/markdown-it/lib/common/html_re.js
  var require_html_re = __commonJS({
    "node_modules/markdown-it/lib/common/html_re.js"(exports, module) {
      "use strict";
      var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
      var unquoted = "[^\"'=<>`\\x00-\\x20]+";
      var single_quoted = "'[^']*'";
      var double_quoted = '"[^"]*"';
      var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
      var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
      var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
      var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
      var comment2 = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
      var processing = "<[?][\\s\\S]*?[?]>";
      var declaration = "<![A-Z]+\\s+[^>]*>";
      var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
      var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment2 + "|" + processing + "|" + declaration + "|" + cdata + ")");
      var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
      module.exports.HTML_TAG_RE = HTML_TAG_RE;
      module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
    }
  });

  // node_modules/markdown-it/lib/rules_block/html_block.js
  var require_html_block = __commonJS({
    "node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {
      "use strict";
      var block_names = require_html_blocks();
      var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
      var HTML_SEQUENCES = [
        [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
        [/^<!--/, /-->/, true],
        [/^<\?/, /\?>/, true],
        [/^<![A-Z]/, />/, true],
        [/^<!\[CDATA\[/, /\]\]>/, true],
        [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
        [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]
      ];
      module.exports = function html_block(state, startLine, endLine, silent) {
        var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        if (!state.md.options.html) {
          return false;
        }
        if (state.src.charCodeAt(pos) !== 60) {
          return false;
        }
        lineText = state.src.slice(pos, max);
        for (i = 0; i < HTML_SEQUENCES.length; i++) {
          if (HTML_SEQUENCES[i][0].test(lineText)) {
            break;
          }
        }
        if (i === HTML_SEQUENCES.length) {
          return false;
        }
        if (silent) {
          return HTML_SEQUENCES[i][2];
        }
        nextLine = startLine + 1;
        if (!HTML_SEQUENCES[i][1].test(lineText)) {
          for (; nextLine < endLine; nextLine++) {
            if (state.sCount[nextLine] < state.blkIndent) {
              break;
            }
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            lineText = state.src.slice(pos, max);
            if (HTML_SEQUENCES[i][1].test(lineText)) {
              if (lineText.length !== 0) {
                nextLine++;
              }
              break;
            }
          }
        }
        state.line = nextLine;
        token = state.push("html_block", "", 0);
        token.map = [startLine, nextLine];
        token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/heading.js
  var require_heading = __commonJS({
    "node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function heading(state, startLine, endLine, silent) {
        var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        ch = state.src.charCodeAt(pos);
        if (ch !== 35 || pos >= max) {
          return false;
        }
        level = 1;
        ch = state.src.charCodeAt(++pos);
        while (ch === 35 && pos < max && level <= 6) {
          level++;
          ch = state.src.charCodeAt(++pos);
        }
        if (level > 6 || pos < max && !isSpace(ch)) {
          return false;
        }
        if (silent) {
          return true;
        }
        max = state.skipSpacesBack(max, pos);
        tmp = state.skipCharsBack(max, 35, pos);
        if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
          max = tmp;
        }
        state.line = startLine + 1;
        token = state.push("heading_open", "h" + String(level), 1);
        token.markup = "########".slice(0, level);
        token.map = [startLine, state.line];
        token = state.push("inline", "", 0);
        token.content = state.src.slice(pos, max).trim();
        token.map = [startLine, state.line];
        token.children = [];
        token = state.push("heading_close", "h" + String(level), -1);
        token.markup = "########".slice(0, level);
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/lheading.js
  var require_lheading = __commonJS({
    "node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {
      "use strict";
      module.exports = function lheading(state, startLine, endLine) {
        var content, terminate, i, l, token, pos, max, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
        if (state.sCount[startLine] - state.blkIndent >= 4) {
          return false;
        }
        oldParentType = state.parentType;
        state.parentType = "paragraph";
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
          if (state.sCount[nextLine] - state.blkIndent > 3) {
            continue;
          }
          if (state.sCount[nextLine] >= state.blkIndent) {
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            if (pos < max) {
              marker = state.src.charCodeAt(pos);
              if (marker === 45 || marker === 61) {
                pos = state.skipChars(pos, marker);
                pos = state.skipSpaces(pos);
                if (pos >= max) {
                  level = marker === 61 ? 1 : 2;
                  break;
                }
              }
            }
          }
          if (state.sCount[nextLine] < 0) {
            continue;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
        }
        if (!level) {
          return false;
        }
        content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        state.line = nextLine + 1;
        token = state.push("heading_open", "h" + String(level), 1);
        token.markup = String.fromCharCode(marker);
        token.map = [startLine, state.line];
        token = state.push("inline", "", 0);
        token.content = content;
        token.map = [startLine, state.line - 1];
        token.children = [];
        token = state.push("heading_close", "h" + String(level), -1);
        token.markup = String.fromCharCode(marker);
        state.parentType = oldParentType;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/paragraph.js
  var require_paragraph = __commonJS({
    "node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {
      "use strict";
      module.exports = function paragraph(state, startLine) {
        var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
        oldParentType = state.parentType;
        state.parentType = "paragraph";
        for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
          if (state.sCount[nextLine] - state.blkIndent > 3) {
            continue;
          }
          if (state.sCount[nextLine] < 0) {
            continue;
          }
          terminate = false;
          for (i = 0, l = terminatorRules.length; i < l; i++) {
            if (terminatorRules[i](state, nextLine, endLine, true)) {
              terminate = true;
              break;
            }
          }
          if (terminate) {
            break;
          }
        }
        content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
        state.line = nextLine;
        token = state.push("paragraph_open", "p", 1);
        token.map = [startLine, state.line];
        token = state.push("inline", "", 0);
        token.content = content;
        token.map = [startLine, state.line];
        token.children = [];
        token = state.push("paragraph_close", "p", -1);
        state.parentType = oldParentType;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_block/state_block.js
  var require_state_block = __commonJS({
    "node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {
      "use strict";
      var Token2 = require_token();
      var isSpace = require_utils().isSpace;
      function StateBlock(src, md2, env, tokens) {
        var ch, s, start, pos, len, indent, offset2, indent_found;
        this.src = src;
        this.md = md2;
        this.env = env;
        this.tokens = tokens;
        this.bMarks = [];
        this.eMarks = [];
        this.tShift = [];
        this.sCount = [];
        this.bsCount = [];
        this.blkIndent = 0;
        this.line = 0;
        this.lineMax = 0;
        this.tight = false;
        this.ddIndent = -1;
        this.listIndent = -1;
        this.parentType = "root";
        this.level = 0;
        this.result = "";
        s = this.src;
        indent_found = false;
        for (start = pos = indent = offset2 = 0, len = s.length; pos < len; pos++) {
          ch = s.charCodeAt(pos);
          if (!indent_found) {
            if (isSpace(ch)) {
              indent++;
              if (ch === 9) {
                offset2 += 4 - offset2 % 4;
              } else {
                offset2++;
              }
              continue;
            } else {
              indent_found = true;
            }
          }
          if (ch === 10 || pos === len - 1) {
            if (ch !== 10) {
              pos++;
            }
            this.bMarks.push(start);
            this.eMarks.push(pos);
            this.tShift.push(indent);
            this.sCount.push(offset2);
            this.bsCount.push(0);
            indent_found = false;
            indent = 0;
            offset2 = 0;
            start = pos + 1;
          }
        }
        this.bMarks.push(s.length);
        this.eMarks.push(s.length);
        this.tShift.push(0);
        this.sCount.push(0);
        this.bsCount.push(0);
        this.lineMax = this.bMarks.length - 1;
      }
      StateBlock.prototype.push = function(type, tag, nesting) {
        var token = new Token2(type, tag, nesting);
        token.block = true;
        if (nesting < 0)
          this.level--;
        token.level = this.level;
        if (nesting > 0)
          this.level++;
        this.tokens.push(token);
        return token;
      };
      StateBlock.prototype.isEmpty = function isEmpty(line) {
        return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
      };
      StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
        for (var max = this.lineMax; from < max; from++) {
          if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
            break;
          }
        }
        return from;
      };
      StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
        var ch;
        for (var max = this.src.length; pos < max; pos++) {
          ch = this.src.charCodeAt(pos);
          if (!isSpace(ch)) {
            break;
          }
        }
        return pos;
      };
      StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
        if (pos <= min) {
          return pos;
        }
        while (pos > min) {
          if (!isSpace(this.src.charCodeAt(--pos))) {
            return pos + 1;
          }
        }
        return pos;
      };
      StateBlock.prototype.skipChars = function skipChars(pos, code) {
        for (var max = this.src.length; pos < max; pos++) {
          if (this.src.charCodeAt(pos) !== code) {
            break;
          }
        }
        return pos;
      };
      StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
        if (pos <= min) {
          return pos;
        }
        while (pos > min) {
          if (code !== this.src.charCodeAt(--pos)) {
            return pos + 1;
          }
        }
        return pos;
      };
      StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
        var i, lineIndent, ch, first2, last2, queue, lineStart, line = begin;
        if (begin >= end) {
          return "";
        }
        queue = new Array(end - begin);
        for (i = 0; line < end; line++, i++) {
          lineIndent = 0;
          lineStart = first2 = this.bMarks[line];
          if (line + 1 < end || keepLastLF) {
            last2 = this.eMarks[line] + 1;
          } else {
            last2 = this.eMarks[line];
          }
          while (first2 < last2 && lineIndent < indent) {
            ch = this.src.charCodeAt(first2);
            if (isSpace(ch)) {
              if (ch === 9) {
                lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
              } else {
                lineIndent++;
              }
            } else if (first2 - lineStart < this.tShift[line]) {
              lineIndent++;
            } else {
              break;
            }
            first2++;
          }
          if (lineIndent > indent) {
            queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first2, last2);
          } else {
            queue[i] = this.src.slice(first2, last2);
          }
        }
        return queue.join("");
      };
      StateBlock.prototype.Token = Token2;
      module.exports = StateBlock;
    }
  });

  // node_modules/markdown-it/lib/parser_block.js
  var require_parser_block = __commonJS({
    "node_modules/markdown-it/lib/parser_block.js"(exports, module) {
      "use strict";
      var Ruler = require_ruler();
      var _rules = [
        ["table", require_table(), ["paragraph", "reference"]],
        ["code", require_code()],
        ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]],
        ["blockquote", require_blockquote(), ["paragraph", "reference", "blockquote", "list"]],
        ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]],
        ["list", require_list(), ["paragraph", "reference", "blockquote"]],
        ["reference", require_reference()],
        ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]],
        ["heading", require_heading(), ["paragraph", "reference", "blockquote"]],
        ["lheading", require_lheading()],
        ["paragraph", require_paragraph()]
      ];
      function ParserBlock() {
        this.ruler = new Ruler();
        for (var i = 0; i < _rules.length; i++) {
          this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
        }
      }
      ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
        var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
        while (line < endLine) {
          state.line = line = state.skipEmptyLines(line);
          if (line >= endLine) {
            break;
          }
          if (state.sCount[line] < state.blkIndent) {
            break;
          }
          if (state.level >= maxNesting) {
            state.line = endLine;
            break;
          }
          for (i = 0; i < len; i++) {
            ok = rules[i](state, line, endLine, false);
            if (ok) {
              break;
            }
          }
          state.tight = !hasEmptyLines;
          if (state.isEmpty(state.line - 1)) {
            hasEmptyLines = true;
          }
          line = state.line;
          if (line < endLine && state.isEmpty(line)) {
            hasEmptyLines = true;
            line++;
            state.line = line;
          }
        }
      };
      ParserBlock.prototype.parse = function(src, md2, env, outTokens) {
        var state;
        if (!src) {
          return;
        }
        state = new this.State(src, md2, env, outTokens);
        this.tokenize(state, state.line, state.lineMax);
      };
      ParserBlock.prototype.State = require_state_block();
      module.exports = ParserBlock;
    }
  });

  // node_modules/markdown-it/lib/rules_inline/text.js
  var require_text = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {
      "use strict";
      function isTerminatorChar(ch) {
        switch (ch) {
          case 10:
          case 33:
          case 35:
          case 36:
          case 37:
          case 38:
          case 42:
          case 43:
          case 45:
          case 58:
          case 60:
          case 61:
          case 62:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 125:
          case 126:
            return true;
          default:
            return false;
        }
      }
      module.exports = function text(state, silent) {
        var pos = state.pos;
        while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
          pos++;
        }
        if (pos === state.pos) {
          return false;
        }
        if (!silent) {
          state.pending += state.src.slice(state.pos, pos);
        }
        state.pos = pos;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/linkify.js
  var require_linkify2 = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/linkify.js"(exports, module) {
      "use strict";
      var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
      module.exports = function linkify(state, silent) {
        var pos, max, match, proto, link, url, fullUrl, token;
        if (!state.md.options.linkify)
          return false;
        if (state.linkLevel > 0)
          return false;
        pos = state.pos;
        max = state.posMax;
        if (pos + 3 > max)
          return false;
        if (state.src.charCodeAt(pos) !== 58)
          return false;
        if (state.src.charCodeAt(pos + 1) !== 47)
          return false;
        if (state.src.charCodeAt(pos + 2) !== 47)
          return false;
        match = state.pending.match(SCHEME_RE);
        if (!match)
          return false;
        proto = match[1];
        link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
        if (!link)
          return false;
        url = link.url;
        url = url.replace(/\*+$/, "");
        fullUrl = state.md.normalizeLink(url);
        if (!state.md.validateLink(fullUrl))
          return false;
        if (!silent) {
          state.pending = state.pending.slice(0, -proto.length);
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "linkify";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "linkify";
          token.info = "auto";
        }
        state.pos += url.length - proto.length;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/newline.js
  var require_newline = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      module.exports = function newline(state, silent) {
        var pmax, max, ws, pos = state.pos;
        if (state.src.charCodeAt(pos) !== 10) {
          return false;
        }
        pmax = state.pending.length - 1;
        max = state.posMax;
        if (!silent) {
          if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
            if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
              ws = pmax - 1;
              while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)
                ws--;
              state.pending = state.pending.slice(0, ws);
              state.push("hardbreak", "br", 0);
            } else {
              state.pending = state.pending.slice(0, -1);
              state.push("softbreak", "br", 0);
            }
          } else {
            state.push("softbreak", "br", 0);
          }
        }
        pos++;
        while (pos < max && isSpace(state.src.charCodeAt(pos))) {
          pos++;
        }
        state.pos = pos;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/escape.js
  var require_escape = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {
      "use strict";
      var isSpace = require_utils().isSpace;
      var ESCAPED = [];
      for (i = 0; i < 256; i++) {
        ESCAPED.push(0);
      }
      var i;
      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
        ESCAPED[ch.charCodeAt(0)] = 1;
      });
      module.exports = function escape2(state, silent) {
        var ch1, ch2, origStr, escapedStr, token, pos = state.pos, max = state.posMax;
        if (state.src.charCodeAt(pos) !== 92)
          return false;
        pos++;
        if (pos >= max)
          return false;
        ch1 = state.src.charCodeAt(pos);
        if (ch1 === 10) {
          if (!silent) {
            state.push("hardbreak", "br", 0);
          }
          pos++;
          while (pos < max) {
            ch1 = state.src.charCodeAt(pos);
            if (!isSpace(ch1))
              break;
            pos++;
          }
          state.pos = pos;
          return true;
        }
        escapedStr = state.src[pos];
        if (ch1 >= 55296 && ch1 <= 56319 && pos + 1 < max) {
          ch2 = state.src.charCodeAt(pos + 1);
          if (ch2 >= 56320 && ch2 <= 57343) {
            escapedStr += state.src[pos + 1];
            pos++;
          }
        }
        origStr = "\\" + escapedStr;
        if (!silent) {
          token = state.push("text_special", "", 0);
          if (ch1 < 256 && ESCAPED[ch1] !== 0) {
            token.content = escapedStr;
          } else {
            token.content = origStr;
          }
          token.markup = origStr;
          token.info = "escape";
        }
        state.pos = pos + 1;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/backticks.js
  var require_backticks = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {
      "use strict";
      module.exports = function backtick(state, silent) {
        var start, max, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
        if (ch !== 96) {
          return false;
        }
        start = pos;
        pos++;
        max = state.posMax;
        while (pos < max && state.src.charCodeAt(pos) === 96) {
          pos++;
        }
        marker = state.src.slice(start, pos);
        openerLength = marker.length;
        if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
          if (!silent)
            state.pending += marker;
          state.pos += openerLength;
          return true;
        }
        matchStart = matchEnd = pos;
        while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
          matchEnd = matchStart + 1;
          while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
            matchEnd++;
          }
          closerLength = matchEnd - matchStart;
          if (closerLength === openerLength) {
            if (!silent) {
              token = state.push("code_inline", "code", 0);
              token.markup = marker;
              token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
            }
            state.pos = matchEnd;
            return true;
          }
          state.backticks[closerLength] = matchStart;
        }
        state.backticksScanned = true;
        if (!silent)
          state.pending += marker;
        state.pos += openerLength;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/strikethrough.js
  var require_strikethrough = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {
      "use strict";
      module.exports.tokenize = function strikethrough(state, silent) {
        var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
        if (silent) {
          return false;
        }
        if (marker !== 126) {
          return false;
        }
        scanned = state.scanDelims(state.pos, true);
        len = scanned.length;
        ch = String.fromCharCode(marker);
        if (len < 2) {
          return false;
        }
        if (len % 2) {
          token = state.push("text", "", 0);
          token.content = ch;
          len--;
        }
        for (i = 0; i < len; i += 2) {
          token = state.push("text", "", 0);
          token.content = ch + ch;
          state.delimiters.push({
            marker,
            length: 0,
            token: state.tokens.length - 1,
            end: -1,
            open: scanned.can_open,
            close: scanned.can_close
          });
        }
        state.pos += scanned.length;
        return true;
      };
      function postProcess(state, delimiters) {
        var i, j, startDelim, endDelim, token, loneMarkers = [], max = delimiters.length;
        for (i = 0; i < max; i++) {
          startDelim = delimiters[i];
          if (startDelim.marker !== 126) {
            continue;
          }
          if (startDelim.end === -1) {
            continue;
          }
          endDelim = delimiters[startDelim.end];
          token = state.tokens[startDelim.token];
          token.type = "s_open";
          token.tag = "s";
          token.nesting = 1;
          token.markup = "~~";
          token.content = "";
          token = state.tokens[endDelim.token];
          token.type = "s_close";
          token.tag = "s";
          token.nesting = -1;
          token.markup = "~~";
          token.content = "";
          if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
            loneMarkers.push(endDelim.token - 1);
          }
        }
        while (loneMarkers.length) {
          i = loneMarkers.pop();
          j = i + 1;
          while (j < state.tokens.length && state.tokens[j].type === "s_close") {
            j++;
          }
          j--;
          if (i !== j) {
            token = state.tokens[j];
            state.tokens[j] = state.tokens[i];
            state.tokens[i] = token;
          }
        }
      }
      module.exports.postProcess = function strikethrough(state) {
        var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
        postProcess(state, state.delimiters);
        for (curr = 0; curr < max; curr++) {
          if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
            postProcess(state, tokens_meta[curr].delimiters);
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/emphasis.js
  var require_emphasis = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {
      "use strict";
      module.exports.tokenize = function emphasis(state, silent) {
        var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
        if (silent) {
          return false;
        }
        if (marker !== 95 && marker !== 42) {
          return false;
        }
        scanned = state.scanDelims(state.pos, marker === 42);
        for (i = 0; i < scanned.length; i++) {
          token = state.push("text", "", 0);
          token.content = String.fromCharCode(marker);
          state.delimiters.push({
            marker,
            length: scanned.length,
            token: state.tokens.length - 1,
            end: -1,
            open: scanned.can_open,
            close: scanned.can_close
          });
        }
        state.pos += scanned.length;
        return true;
      };
      function postProcess(state, delimiters) {
        var i, startDelim, endDelim, token, ch, isStrong, max = delimiters.length;
        for (i = max - 1; i >= 0; i--) {
          startDelim = delimiters[i];
          if (startDelim.marker !== 95 && startDelim.marker !== 42) {
            continue;
          }
          if (startDelim.end === -1) {
            continue;
          }
          endDelim = delimiters[startDelim.end];
          isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
          ch = String.fromCharCode(startDelim.marker);
          token = state.tokens[startDelim.token];
          token.type = isStrong ? "strong_open" : "em_open";
          token.tag = isStrong ? "strong" : "em";
          token.nesting = 1;
          token.markup = isStrong ? ch + ch : ch;
          token.content = "";
          token = state.tokens[endDelim.token];
          token.type = isStrong ? "strong_close" : "em_close";
          token.tag = isStrong ? "strong" : "em";
          token.nesting = -1;
          token.markup = isStrong ? ch + ch : ch;
          token.content = "";
          if (isStrong) {
            state.tokens[delimiters[i - 1].token].content = "";
            state.tokens[delimiters[startDelim.end + 1].token].content = "";
            i--;
          }
        }
      }
      module.exports.postProcess = function emphasis(state) {
        var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
        postProcess(state, state.delimiters);
        for (curr = 0; curr < max; curr++) {
          if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
            postProcess(state, tokens_meta[curr].delimiters);
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/link.js
  var require_link = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {
      "use strict";
      var normalizeReference = require_utils().normalizeReference;
      var isSpace = require_utils().isSpace;
      module.exports = function link(state, silent) {
        var attrs, code, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max = state.posMax, start = state.pos, parseReference = true;
        if (state.src.charCodeAt(state.pos) !== 91) {
          return false;
        }
        labelStart = state.pos + 1;
        labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
        if (labelEnd < 0) {
          return false;
        }
        pos = labelEnd + 1;
        if (pos < max && state.src.charCodeAt(pos) === 40) {
          parseReference = false;
          pos++;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          if (pos >= max) {
            return false;
          }
          start = pos;
          res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
          if (res.ok) {
            href = state.md.normalizeLink(res.str);
            if (state.md.validateLink(href)) {
              pos = res.pos;
            } else {
              href = "";
            }
            start = pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10) {
                break;
              }
            }
            res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
            if (pos < max && start !== pos && res.ok) {
              title = res.str;
              pos = res.pos;
              for (; pos < max; pos++) {
                code = state.src.charCodeAt(pos);
                if (!isSpace(code) && code !== 10) {
                  break;
                }
              }
            }
          }
          if (pos >= max || state.src.charCodeAt(pos) !== 41) {
            parseReference = true;
          }
          pos++;
        }
        if (parseReference) {
          if (typeof state.env.references === "undefined") {
            return false;
          }
          if (pos < max && state.src.charCodeAt(pos) === 91) {
            start = pos + 1;
            pos = state.md.helpers.parseLinkLabel(state, pos);
            if (pos >= 0) {
              label = state.src.slice(start, pos++);
            } else {
              pos = labelEnd + 1;
            }
          } else {
            pos = labelEnd + 1;
          }
          if (!label) {
            label = state.src.slice(labelStart, labelEnd);
          }
          ref = state.env.references[normalizeReference(label)];
          if (!ref) {
            state.pos = oldPos;
            return false;
          }
          href = ref.href;
          title = ref.title;
        }
        if (!silent) {
          state.pos = labelStart;
          state.posMax = labelEnd;
          token = state.push("link_open", "a", 1);
          token.attrs = attrs = [["href", href]];
          if (title) {
            attrs.push(["title", title]);
          }
          state.linkLevel++;
          state.md.inline.tokenize(state);
          state.linkLevel--;
          token = state.push("link_close", "a", -1);
        }
        state.pos = pos;
        state.posMax = max;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/image.js
  var require_image = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {
      "use strict";
      var normalizeReference = require_utils().normalizeReference;
      var isSpace = require_utils().isSpace;
      module.exports = function image(state, silent) {
        var attrs, code, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max = state.posMax;
        if (state.src.charCodeAt(state.pos) !== 33) {
          return false;
        }
        if (state.src.charCodeAt(state.pos + 1) !== 91) {
          return false;
        }
        labelStart = state.pos + 2;
        labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
        if (labelEnd < 0) {
          return false;
        }
        pos = labelEnd + 1;
        if (pos < max && state.src.charCodeAt(pos) === 40) {
          pos++;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          if (pos >= max) {
            return false;
          }
          start = pos;
          res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
          if (res.ok) {
            href = state.md.normalizeLink(res.str);
            if (state.md.validateLink(href)) {
              pos = res.pos;
            } else {
              href = "";
            }
          }
          start = pos;
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!isSpace(code) && code !== 10) {
              break;
            }
          }
          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;
            for (; pos < max; pos++) {
              code = state.src.charCodeAt(pos);
              if (!isSpace(code) && code !== 10) {
                break;
              }
            }
          } else {
            title = "";
          }
          if (pos >= max || state.src.charCodeAt(pos) !== 41) {
            state.pos = oldPos;
            return false;
          }
          pos++;
        } else {
          if (typeof state.env.references === "undefined") {
            return false;
          }
          if (pos < max && state.src.charCodeAt(pos) === 91) {
            start = pos + 1;
            pos = state.md.helpers.parseLinkLabel(state, pos);
            if (pos >= 0) {
              label = state.src.slice(start, pos++);
            } else {
              pos = labelEnd + 1;
            }
          } else {
            pos = labelEnd + 1;
          }
          if (!label) {
            label = state.src.slice(labelStart, labelEnd);
          }
          ref = state.env.references[normalizeReference(label)];
          if (!ref) {
            state.pos = oldPos;
            return false;
          }
          href = ref.href;
          title = ref.title;
        }
        if (!silent) {
          content = state.src.slice(labelStart, labelEnd);
          state.md.inline.parse(content, state.md, state.env, tokens = []);
          token = state.push("image", "img", 0);
          token.attrs = attrs = [["src", href], ["alt", ""]];
          token.children = tokens;
          token.content = content;
          if (title) {
            attrs.push(["title", title]);
          }
        }
        state.pos = pos;
        state.posMax = max;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/autolink.js
  var require_autolink = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {
      "use strict";
      var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
      var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
      module.exports = function autolink(state, silent) {
        var url, fullUrl, token, ch, start, max, pos = state.pos;
        if (state.src.charCodeAt(pos) !== 60) {
          return false;
        }
        start = state.pos;
        max = state.posMax;
        for (; ; ) {
          if (++pos >= max)
            return false;
          ch = state.src.charCodeAt(pos);
          if (ch === 60)
            return false;
          if (ch === 62)
            break;
        }
        url = state.src.slice(start + 1, pos);
        if (AUTOLINK_RE.test(url)) {
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) {
            return false;
          }
          if (!silent) {
            token = state.push("link_open", "a", 1);
            token.attrs = [["href", fullUrl]];
            token.markup = "autolink";
            token.info = "auto";
            token = state.push("text", "", 0);
            token.content = state.md.normalizeLinkText(url);
            token = state.push("link_close", "a", -1);
            token.markup = "autolink";
            token.info = "auto";
          }
          state.pos += url.length + 2;
          return true;
        }
        if (EMAIL_RE.test(url)) {
          fullUrl = state.md.normalizeLink("mailto:" + url);
          if (!state.md.validateLink(fullUrl)) {
            return false;
          }
          if (!silent) {
            token = state.push("link_open", "a", 1);
            token.attrs = [["href", fullUrl]];
            token.markup = "autolink";
            token.info = "auto";
            token = state.push("text", "", 0);
            token.content = state.md.normalizeLinkText(url);
            token = state.push("link_close", "a", -1);
            token.markup = "autolink";
            token.info = "auto";
          }
          state.pos += url.length + 2;
          return true;
        }
        return false;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/html_inline.js
  var require_html_inline = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {
      "use strict";
      var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
      function isLinkOpen(str) {
        return /^<a[>\s]/i.test(str);
      }
      function isLinkClose(str) {
        return /^<\/a\s*>/i.test(str);
      }
      function isLetter(ch) {
        var lc = ch | 32;
        return lc >= 97 && lc <= 122;
      }
      module.exports = function html_inline(state, silent) {
        var ch, match, max, token, pos = state.pos;
        if (!state.md.options.html) {
          return false;
        }
        max = state.posMax;
        if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
          return false;
        }
        ch = state.src.charCodeAt(pos + 1);
        if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
          return false;
        }
        match = state.src.slice(pos).match(HTML_TAG_RE);
        if (!match) {
          return false;
        }
        if (!silent) {
          token = state.push("html_inline", "", 0);
          token.content = state.src.slice(pos, pos + match[0].length);
          if (isLinkOpen(token.content))
            state.linkLevel++;
          if (isLinkClose(token.content))
            state.linkLevel--;
        }
        state.pos += match[0].length;
        return true;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/entity.js
  var require_entity = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {
      "use strict";
      var entities = require_entities2();
      var has = require_utils().has;
      var isValidEntityCode = require_utils().isValidEntityCode;
      var fromCodePoint = require_utils().fromCodePoint;
      var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
      var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
      module.exports = function entity(state, silent) {
        var ch, code, match, token, pos = state.pos, max = state.posMax;
        if (state.src.charCodeAt(pos) !== 38)
          return false;
        if (pos + 1 >= max)
          return false;
        ch = state.src.charCodeAt(pos + 1);
        if (ch === 35) {
          match = state.src.slice(pos).match(DIGITAL_RE);
          if (match) {
            if (!silent) {
              code = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
              token = state.push("text_special", "", 0);
              token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(65533);
              token.markup = match[0];
              token.info = "entity";
            }
            state.pos += match[0].length;
            return true;
          }
        } else {
          match = state.src.slice(pos).match(NAMED_RE);
          if (match) {
            if (has(entities, match[1])) {
              if (!silent) {
                token = state.push("text_special", "", 0);
                token.content = entities[match[1]];
                token.markup = match[0];
                token.info = "entity";
              }
              state.pos += match[0].length;
              return true;
            }
          }
        }
        return false;
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/balance_pairs.js
  var require_balance_pairs = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {
      "use strict";
      function processDelimiters(state, delimiters) {
        var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max = delimiters.length;
        if (!max)
          return;
        var headerIdx = 0;
        var lastTokenIdx = -2;
        var jumps = [];
        for (closerIdx = 0; closerIdx < max; closerIdx++) {
          closer = delimiters[closerIdx];
          jumps.push(0);
          if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
            headerIdx = closerIdx;
          }
          lastTokenIdx = closer.token;
          closer.length = closer.length || 0;
          if (!closer.close)
            continue;
          if (!openersBottom.hasOwnProperty(closer.marker)) {
            openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
          }
          minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
          openerIdx = headerIdx - jumps[headerIdx] - 1;
          newMinOpenerIdx = openerIdx;
          for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
            opener = delimiters[openerIdx];
            if (opener.marker !== closer.marker)
              continue;
            if (opener.open && opener.end < 0) {
              isOddMatch = false;
              if (opener.close || closer.open) {
                if ((opener.length + closer.length) % 3 === 0) {
                  if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                    isOddMatch = true;
                  }
                }
              }
              if (!isOddMatch) {
                lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
                jumps[closerIdx] = closerIdx - openerIdx + lastJump;
                jumps[openerIdx] = lastJump;
                closer.open = false;
                opener.end = closerIdx;
                opener.close = false;
                newMinOpenerIdx = -1;
                lastTokenIdx = -2;
                break;
              }
            }
          }
          if (newMinOpenerIdx !== -1) {
            openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
          }
        }
      }
      module.exports = function link_pairs(state) {
        var curr, tokens_meta = state.tokens_meta, max = state.tokens_meta.length;
        processDelimiters(state, state.delimiters);
        for (curr = 0; curr < max; curr++) {
          if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
            processDelimiters(state, tokens_meta[curr].delimiters);
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/fragments_join.js
  var require_fragments_join = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/fragments_join.js"(exports, module) {
      "use strict";
      module.exports = function fragments_join(state) {
        var curr, last2, level = 0, tokens = state.tokens, max = state.tokens.length;
        for (curr = last2 = 0; curr < max; curr++) {
          if (tokens[curr].nesting < 0)
            level--;
          tokens[curr].level = level;
          if (tokens[curr].nesting > 0)
            level++;
          if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
            tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
          } else {
            if (curr !== last2) {
              tokens[last2] = tokens[curr];
            }
            last2++;
          }
        }
        if (curr !== last2) {
          tokens.length = last2;
        }
      };
    }
  });

  // node_modules/markdown-it/lib/rules_inline/state_inline.js
  var require_state_inline = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {
      "use strict";
      var Token2 = require_token();
      var isWhiteSpace = require_utils().isWhiteSpace;
      var isPunctChar = require_utils().isPunctChar;
      var isMdAsciiPunct = require_utils().isMdAsciiPunct;
      function StateInline(src, md2, env, outTokens) {
        this.src = src;
        this.env = env;
        this.md = md2;
        this.tokens = outTokens;
        this.tokens_meta = Array(outTokens.length);
        this.pos = 0;
        this.posMax = this.src.length;
        this.level = 0;
        this.pending = "";
        this.pendingLevel = 0;
        this.cache = {};
        this.delimiters = [];
        this._prev_delimiters = [];
        this.backticks = {};
        this.backticksScanned = false;
        this.linkLevel = 0;
      }
      StateInline.prototype.pushPending = function() {
        var token = new Token2("text", "", 0);
        token.content = this.pending;
        token.level = this.pendingLevel;
        this.tokens.push(token);
        this.pending = "";
        return token;
      };
      StateInline.prototype.push = function(type, tag, nesting) {
        if (this.pending) {
          this.pushPending();
        }
        var token = new Token2(type, tag, nesting);
        var token_meta = null;
        if (nesting < 0) {
          this.level--;
          this.delimiters = this._prev_delimiters.pop();
        }
        token.level = this.level;
        if (nesting > 0) {
          this.level++;
          this._prev_delimiters.push(this.delimiters);
          this.delimiters = [];
          token_meta = { delimiters: this.delimiters };
        }
        this.pendingLevel = this.level;
        this.tokens.push(token);
        this.tokens_meta.push(token_meta);
        return token;
      };
      StateInline.prototype.scanDelims = function(start, canSplitWord) {
        var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max = this.posMax, marker = this.src.charCodeAt(start);
        lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
        while (pos < max && this.src.charCodeAt(pos) === marker) {
          pos++;
        }
        count = pos - start;
        nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
        isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace(lastChar);
        isNextWhiteSpace = isWhiteSpace(nextChar);
        if (isNextWhiteSpace) {
          left_flanking = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            left_flanking = false;
          }
        }
        if (isLastWhiteSpace) {
          right_flanking = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            right_flanking = false;
          }
        }
        if (!canSplitWord) {
          can_open = left_flanking && (!right_flanking || isLastPunctChar);
          can_close = right_flanking && (!left_flanking || isNextPunctChar);
        } else {
          can_open = left_flanking;
          can_close = right_flanking;
        }
        return {
          can_open,
          can_close,
          length: count
        };
      };
      StateInline.prototype.Token = Token2;
      module.exports = StateInline;
    }
  });

  // node_modules/markdown-it/lib/parser_inline.js
  var require_parser_inline = __commonJS({
    "node_modules/markdown-it/lib/parser_inline.js"(exports, module) {
      "use strict";
      var Ruler = require_ruler();
      var _rules = [
        ["text", require_text()],
        ["linkify", require_linkify2()],
        ["newline", require_newline()],
        ["escape", require_escape()],
        ["backticks", require_backticks()],
        ["strikethrough", require_strikethrough().tokenize],
        ["emphasis", require_emphasis().tokenize],
        ["link", require_link()],
        ["image", require_image()],
        ["autolink", require_autolink()],
        ["html_inline", require_html_inline()],
        ["entity", require_entity()]
      ];
      var _rules2 = [
        ["balance_pairs", require_balance_pairs()],
        ["strikethrough", require_strikethrough().postProcess],
        ["emphasis", require_emphasis().postProcess],
        ["fragments_join", require_fragments_join()]
      ];
      function ParserInline() {
        var i;
        this.ruler = new Ruler();
        for (i = 0; i < _rules.length; i++) {
          this.ruler.push(_rules[i][0], _rules[i][1]);
        }
        this.ruler2 = new Ruler();
        for (i = 0; i < _rules2.length; i++) {
          this.ruler2.push(_rules2[i][0], _rules2[i][1]);
        }
      }
      ParserInline.prototype.skipToken = function(state) {
        var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
        if (typeof cache[pos] !== "undefined") {
          state.pos = cache[pos];
          return;
        }
        if (state.level < maxNesting) {
          for (i = 0; i < len; i++) {
            state.level++;
            ok = rules[i](state, true);
            state.level--;
            if (ok) {
              break;
            }
          }
        } else {
          state.pos = state.posMax;
        }
        if (!ok) {
          state.pos++;
        }
        cache[pos] = state.pos;
      };
      ParserInline.prototype.tokenize = function(state) {
        var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
        while (state.pos < end) {
          if (state.level < maxNesting) {
            for (i = 0; i < len; i++) {
              ok = rules[i](state, false);
              if (ok) {
                break;
              }
            }
          }
          if (ok) {
            if (state.pos >= end) {
              break;
            }
            continue;
          }
          state.pending += state.src[state.pos++];
        }
        if (state.pending) {
          state.pushPending();
        }
      };
      ParserInline.prototype.parse = function(str, md2, env, outTokens) {
        var i, rules, len;
        var state = new this.State(str, md2, env, outTokens);
        this.tokenize(state);
        rules = this.ruler2.getRules("");
        len = rules.length;
        for (i = 0; i < len; i++) {
          rules[i](state);
        }
      };
      ParserInline.prototype.State = require_state_inline();
      module.exports = ParserInline;
    }
  });

  // node_modules/linkify-it/lib/re.js
  var require_re = __commonJS({
    "node_modules/linkify-it/lib/re.js"(exports, module) {
      "use strict";
      module.exports = function(opts) {
        var re = {};
        opts = opts || {};
        re.src_Any = require_regex2().source;
        re.src_Cc = require_regex3().source;
        re.src_Z = require_regex5().source;
        re.src_P = require_regex().source;
        re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
        re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
        var text_separators = "[><\uFF5C]";
        re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
        re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
        re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
        re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
        re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!" + (opts["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
        re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]|$)|" + (opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + "|$)|;(?!" + re.src_ZCc + "|$)|\\!+(?!" + re.src_ZCc + "|[!]|$)|\\?(?!" + re.src_ZCc + "|[?]|$))+|\\/)?";
        re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
        re.src_xn = "xn--[a-z0-9\\-]{1,59}";
        re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
        re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
        re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
        re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
        re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
        re.src_host_strict = re.src_host + re.src_host_terminator;
        re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
        re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
        re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
        re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
        re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
        re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
        return re;
      };
    }
  });

  // node_modules/linkify-it/index.js
  var require_linkify_it = __commonJS({
    "node_modules/linkify-it/index.js"(exports, module) {
      "use strict";
      function assign2(obj) {
        var sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function(source) {
          if (!source) {
            return;
          }
          Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
          });
        });
        return obj;
      }
      function _class(obj) {
        return Object.prototype.toString.call(obj);
      }
      function isString2(obj) {
        return _class(obj) === "[object String]";
      }
      function isObject2(obj) {
        return _class(obj) === "[object Object]";
      }
      function isRegExp(obj) {
        return _class(obj) === "[object RegExp]";
      }
      function isFunction2(obj) {
        return _class(obj) === "[object Function]";
      }
      function escapeRE(str) {
        return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      var defaultOptions2 = {
        fuzzyLink: true,
        fuzzyEmail: true,
        fuzzyIP: false
      };
      function isOptionsObj(obj) {
        return Object.keys(obj || {}).reduce(function(acc, k) {
          return acc || defaultOptions2.hasOwnProperty(k);
        }, false);
      }
      var defaultSchemas = {
        "http:": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.http) {
              self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
            }
            if (self.re.http.test(tail)) {
              return tail.match(self.re.http)[0].length;
            }
            return 0;
          }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.no_http) {
              self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
            }
            if (self.re.no_http.test(tail)) {
              if (pos >= 3 && text[pos - 3] === ":") {
                return 0;
              }
              if (pos >= 3 && text[pos - 3] === "/") {
                return 0;
              }
              return tail.match(self.re.no_http)[0].length;
            }
            return 0;
          }
        },
        "mailto:": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.mailto) {
              self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
            }
            if (self.re.mailto.test(tail)) {
              return tail.match(self.re.mailto)[0].length;
            }
            return 0;
          }
        }
      };
      var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
      var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
      function resetScanCache(self) {
        self.__index__ = -1;
        self.__text_cache__ = "";
      }
      function createValidator(re) {
        return function(text, pos) {
          var tail = text.slice(pos);
          if (re.test(tail)) {
            return tail.match(re)[0].length;
          }
          return 0;
        };
      }
      function createNormalizer() {
        return function(match, self) {
          self.normalize(match);
        };
      }
      function compile(self) {
        var re = self.re = require_re()(self.__opts__);
        var tlds = self.__tlds__.slice();
        self.onCompile();
        if (!self.__tlds_replaced__) {
          tlds.push(tlds_2ch_src_re);
        }
        tlds.push(re.src_xn);
        re.src_tlds = tlds.join("|");
        function untpl(tpl) {
          return tpl.replace("%TLDS%", re.src_tlds);
        }
        re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
        re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
        re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
        re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
        var aliases = [];
        self.__compiled__ = {};
        function schemaError(name, val) {
          throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
        }
        Object.keys(self.__schemas__).forEach(function(name) {
          var val = self.__schemas__[name];
          if (val === null) {
            return;
          }
          var compiled = { validate: null, link: null };
          self.__compiled__[name] = compiled;
          if (isObject2(val)) {
            if (isRegExp(val.validate)) {
              compiled.validate = createValidator(val.validate);
            } else if (isFunction2(val.validate)) {
              compiled.validate = val.validate;
            } else {
              schemaError(name, val);
            }
            if (isFunction2(val.normalize)) {
              compiled.normalize = val.normalize;
            } else if (!val.normalize) {
              compiled.normalize = createNormalizer();
            } else {
              schemaError(name, val);
            }
            return;
          }
          if (isString2(val)) {
            aliases.push(name);
            return;
          }
          schemaError(name, val);
        });
        aliases.forEach(function(alias) {
          if (!self.__compiled__[self.__schemas__[alias]]) {
            return;
          }
          self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
          self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
        });
        self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
        var slist = Object.keys(self.__compiled__).filter(function(name) {
          return name.length > 0 && self.__compiled__[name];
        }).map(escapeRE).join("|");
        self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
        self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
        self.re.schema_at_start = RegExp("^" + self.re.schema_search.source, "i");
        self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
        resetScanCache(self);
      }
      function Match(self, shift) {
        var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
        this.schema = self.__schema__.toLowerCase();
        this.index = start + shift;
        this.lastIndex = end + shift;
        this.raw = text;
        this.text = text;
        this.url = text;
      }
      function createMatch(self, shift) {
        var match = new Match(self, shift);
        self.__compiled__[match.schema].normalize(match, self);
        return match;
      }
      function LinkifyIt(schemas, options) {
        if (!(this instanceof LinkifyIt)) {
          return new LinkifyIt(schemas, options);
        }
        if (!options) {
          if (isOptionsObj(schemas)) {
            options = schemas;
            schemas = {};
          }
        }
        this.__opts__ = assign2({}, defaultOptions2, options);
        this.__index__ = -1;
        this.__last_index__ = -1;
        this.__schema__ = "";
        this.__text_cache__ = "";
        this.__schemas__ = assign2({}, defaultSchemas, schemas);
        this.__compiled__ = {};
        this.__tlds__ = tlds_default;
        this.__tlds_replaced__ = false;
        this.re = {};
        compile(this);
      }
      LinkifyIt.prototype.add = function add(schema, definition) {
        this.__schemas__[schema] = definition;
        compile(this);
        return this;
      };
      LinkifyIt.prototype.set = function set(options) {
        this.__opts__ = assign2(this.__opts__, options);
        return this;
      };
      LinkifyIt.prototype.test = function test(text) {
        this.__text_cache__ = text;
        this.__index__ = -1;
        if (!text.length) {
          return false;
        }
        var m, ml, me, len, shift, next, re, tld_pos, at_pos;
        if (this.re.schema_test.test(text)) {
          re = this.re.schema_search;
          re.lastIndex = 0;
          while ((m = re.exec(text)) !== null) {
            len = this.testSchemaAt(text, m[2], re.lastIndex);
            if (len) {
              this.__schema__ = m[2];
              this.__index__ = m.index + m[1].length;
              this.__last_index__ = m.index + m[0].length + len;
              break;
            }
          }
        }
        if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
          tld_pos = text.search(this.re.host_fuzzy_test);
          if (tld_pos >= 0) {
            if (this.__index__ < 0 || tld_pos < this.__index__) {
              if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
                shift = ml.index + ml[1].length;
                if (this.__index__ < 0 || shift < this.__index__) {
                  this.__schema__ = "";
                  this.__index__ = shift;
                  this.__last_index__ = ml.index + ml[0].length;
                }
              }
            }
          }
        }
        if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
          at_pos = text.indexOf("@");
          if (at_pos >= 0) {
            if ((me = text.match(this.re.email_fuzzy)) !== null) {
              shift = me.index + me[1].length;
              next = me.index + me[0].length;
              if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
                this.__schema__ = "mailto:";
                this.__index__ = shift;
                this.__last_index__ = next;
              }
            }
          }
        }
        return this.__index__ >= 0;
      };
      LinkifyIt.prototype.pretest = function pretest(text) {
        return this.re.pretest.test(text);
      };
      LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
        if (!this.__compiled__[schema.toLowerCase()]) {
          return 0;
        }
        return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
      };
      LinkifyIt.prototype.match = function match(text) {
        var shift = 0, result = [];
        if (this.__index__ >= 0 && this.__text_cache__ === text) {
          result.push(createMatch(this, shift));
          shift = this.__last_index__;
        }
        var tail = shift ? text.slice(shift) : text;
        while (this.test(tail)) {
          result.push(createMatch(this, shift));
          tail = tail.slice(this.__last_index__);
          shift += this.__last_index__;
        }
        if (result.length) {
          return result;
        }
        return null;
      };
      LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
        this.__text_cache__ = text;
        this.__index__ = -1;
        if (!text.length)
          return null;
        var m = this.re.schema_at_start.exec(text);
        if (!m)
          return null;
        var len = this.testSchemaAt(text, m[2], m[0].length);
        if (!len)
          return null;
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        return createMatch(this, 0);
      };
      LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
        list = Array.isArray(list) ? list : [list];
        if (!keepOld) {
          this.__tlds__ = list.slice();
          this.__tlds_replaced__ = true;
          compile(this);
          return this;
        }
        this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
          return el !== arr[idx - 1];
        }).reverse();
        compile(this);
        return this;
      };
      LinkifyIt.prototype.normalize = function normalize2(match) {
        if (!match.schema) {
          match.url = "http://" + match.url;
        }
        if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
          match.url = "mailto:" + match.url;
        }
      };
      LinkifyIt.prototype.onCompile = function onCompile() {
      };
      module.exports = LinkifyIt;
    }
  });

  // node_modules/punycode/punycode.js
  var require_punycode = __commonJS({
    "node_modules/punycode/punycode.js"(exports, module) {
      "use strict";
      var maxInt = 2147483647;
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128;
      var delimiter = "-";
      var regexPunycode = /^xn--/;
      var regexNonASCII = /[^\0-\x7E]/;
      var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
      var errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      };
      var baseMinusTMin = base - tMin;
      var floor2 = Math.floor;
      var stringFromCharCode = String.fromCharCode;
      function error(type) {
        throw new RangeError(errors[type]);
      }
      function map2(array, fn) {
        const result = [];
        let length = array.length;
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        const parts = string.split("@");
        let result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        const labels = string.split(".");
        const encoded = map2(labels, fn).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        const output = [];
        let counter = 0;
        const length = string.length;
        while (counter < length) {
          const value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            const extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      var ucs2encode = (array) => String.fromCodePoint(...array);
      var basicToDigit = function(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      };
      var digitToBasic = function(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      };
      var adapt = function(delta, numPoints, firstTime) {
        let k = 0;
        delta = firstTime ? floor2(delta / damp) : delta >> 1;
        delta += floor2(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor2(delta / baseMinusTMin);
        }
        return floor2(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };
      var decode = function(input) {
        const output = [];
        const inputLength = input.length;
        let i = 0;
        let n = initialN;
        let bias = initialBias;
        let basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (let j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          let oldi = i;
          for (let w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error("invalid-input");
            }
            const digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor2((maxInt - i) / w)) {
              error("overflow");
            }
            i += digit * w;
            const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            const baseMinusT = base - t;
            if (w > floor2(maxInt / baseMinusT)) {
              error("overflow");
            }
            w *= baseMinusT;
          }
          const out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor2(i / out) > maxInt - n) {
            error("overflow");
          }
          n += floor2(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return String.fromCodePoint(...output);
      };
      var encode = function(input) {
        const output = [];
        input = ucs2decode(input);
        let inputLength = input.length;
        let n = initialN;
        let delta = 0;
        let bias = initialBias;
        for (const currentValue of input) {
          if (currentValue < 128) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        let basicLength = output.length;
        let handledCPCount = basicLength;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          let m = maxInt;
          for (const currentValue of input) {
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          const handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor2((maxInt - delta) / handledCPCountPlusOne)) {
            error("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (const currentValue of input) {
            if (currentValue < n && ++delta > maxInt) {
              error("overflow");
            }
            if (currentValue == n) {
              let q = delta;
              for (let k = base; ; k += base) {
                const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                const qMinusT = q - t;
                const baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor2(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      };
      var toUnicode = function(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      };
      var toASCII = function(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
      };
      var punycode = {
        "version": "2.1.0",
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      module.exports = punycode;
    }
  });

  // node_modules/markdown-it/lib/presets/default.js
  var require_default = __commonJS({
    "node_modules/markdown-it/lib/presets/default.js"(exports, module) {
      "use strict";
      module.exports = {
        options: {
          html: false,
          xhtmlOut: false,
          breaks: false,
          langPrefix: "language-",
          linkify: false,
          typographer: false,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 100
        },
        components: {
          core: {},
          block: {},
          inline: {}
        }
      };
    }
  });

  // node_modules/markdown-it/lib/presets/zero.js
  var require_zero = __commonJS({
    "node_modules/markdown-it/lib/presets/zero.js"(exports, module) {
      "use strict";
      module.exports = {
        options: {
          html: false,
          xhtmlOut: false,
          breaks: false,
          langPrefix: "language-",
          linkify: false,
          typographer: false,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: [
              "normalize",
              "block",
              "inline",
              "text_join"
            ]
          },
          block: {
            rules: [
              "paragraph"
            ]
          },
          inline: {
            rules: [
              "text"
            ],
            rules2: [
              "balance_pairs",
              "fragments_join"
            ]
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/presets/commonmark.js
  var require_commonmark = __commonJS({
    "node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {
      "use strict";
      module.exports = {
        options: {
          html: true,
          xhtmlOut: true,
          breaks: false,
          langPrefix: "language-",
          linkify: false,
          typographer: false,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: [
              "normalize",
              "block",
              "inline",
              "text_join"
            ]
          },
          block: {
            rules: [
              "blockquote",
              "code",
              "fence",
              "heading",
              "hr",
              "html_block",
              "lheading",
              "list",
              "reference",
              "paragraph"
            ]
          },
          inline: {
            rules: [
              "autolink",
              "backticks",
              "emphasis",
              "entity",
              "escape",
              "html_inline",
              "image",
              "link",
              "newline",
              "text"
            ],
            rules2: [
              "balance_pairs",
              "emphasis",
              "fragments_join"
            ]
          }
        }
      };
    }
  });

  // node_modules/markdown-it/lib/index.js
  var require_lib = __commonJS({
    "node_modules/markdown-it/lib/index.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var helpers = require_helpers();
      var Renderer = require_renderer();
      var ParserCore = require_parser_core();
      var ParserBlock = require_parser_block();
      var ParserInline = require_parser_inline();
      var LinkifyIt = require_linkify_it();
      var mdurl = require_mdurl();
      var punycode = require_punycode();
      var config = {
        default: require_default(),
        zero: require_zero(),
        commonmark: require_commonmark()
      };
      var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
      var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
      function validateLink(url) {
        var str = url.trim().toLowerCase();
        return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
      }
      var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
      function normalizeLink(url) {
        var parsed = mdurl.parse(url, true);
        if (parsed.hostname) {
          if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
            try {
              parsed.hostname = punycode.toASCII(parsed.hostname);
            } catch (er) {
            }
          }
        }
        return mdurl.encode(mdurl.format(parsed));
      }
      function normalizeLinkText(url) {
        var parsed = mdurl.parse(url, true);
        if (parsed.hostname) {
          if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
            try {
              parsed.hostname = punycode.toUnicode(parsed.hostname);
            } catch (er) {
            }
          }
        }
        return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
      }
      function MarkdownIt2(presetName, options) {
        if (!(this instanceof MarkdownIt2)) {
          return new MarkdownIt2(presetName, options);
        }
        if (!options) {
          if (!utils.isString(presetName)) {
            options = presetName || {};
            presetName = "default";
          }
        }
        this.inline = new ParserInline();
        this.block = new ParserBlock();
        this.core = new ParserCore();
        this.renderer = new Renderer();
        this.linkify = new LinkifyIt();
        this.validateLink = validateLink;
        this.normalizeLink = normalizeLink;
        this.normalizeLinkText = normalizeLinkText;
        this.utils = utils;
        this.helpers = utils.assign({}, helpers);
        this.options = {};
        this.configure(presetName);
        if (options) {
          this.set(options);
        }
      }
      MarkdownIt2.prototype.set = function(options) {
        utils.assign(this.options, options);
        return this;
      };
      MarkdownIt2.prototype.configure = function(presets) {
        var self = this, presetName;
        if (utils.isString(presets)) {
          presetName = presets;
          presets = config[presetName];
          if (!presets) {
            throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
          }
        }
        if (!presets) {
          throw new Error("Wrong `markdown-it` preset, can't be empty");
        }
        if (presets.options) {
          self.set(presets.options);
        }
        if (presets.components) {
          Object.keys(presets.components).forEach(function(name) {
            if (presets.components[name].rules) {
              self[name].ruler.enableOnly(presets.components[name].rules);
            }
            if (presets.components[name].rules2) {
              self[name].ruler2.enableOnly(presets.components[name].rules2);
            }
          });
        }
        return this;
      };
      MarkdownIt2.prototype.enable = function(list, ignoreInvalid) {
        var result = [];
        if (!Array.isArray(list)) {
          list = [list];
        }
        ["core", "block", "inline"].forEach(function(chain) {
          result = result.concat(this[chain].ruler.enable(list, true));
        }, this);
        result = result.concat(this.inline.ruler2.enable(list, true));
        var missed = list.filter(function(name) {
          return result.indexOf(name) < 0;
        });
        if (missed.length && !ignoreInvalid) {
          throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
        }
        return this;
      };
      MarkdownIt2.prototype.disable = function(list, ignoreInvalid) {
        var result = [];
        if (!Array.isArray(list)) {
          list = [list];
        }
        ["core", "block", "inline"].forEach(function(chain) {
          result = result.concat(this[chain].ruler.disable(list, true));
        }, this);
        result = result.concat(this.inline.ruler2.disable(list, true));
        var missed = list.filter(function(name) {
          return result.indexOf(name) < 0;
        });
        if (missed.length && !ignoreInvalid) {
          throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
        }
        return this;
      };
      MarkdownIt2.prototype.use = function(plugin) {
        var args = [this].concat(Array.prototype.slice.call(arguments, 1));
        plugin.apply(plugin, args);
        return this;
      };
      MarkdownIt2.prototype.parse = function(src, env) {
        if (typeof src !== "string") {
          throw new Error("Input data should be a String");
        }
        var state = new this.core.State(src, this, env);
        this.core.process(state);
        return state.tokens;
      };
      MarkdownIt2.prototype.render = function(src, env) {
        env = env || {};
        return this.renderer.render(this.parse(src, env), this.options, env);
      };
      MarkdownIt2.prototype.parseInline = function(src, env) {
        var state = new this.core.State(src, this, env);
        state.inlineMode = true;
        this.core.process(state);
        return state.tokens;
      };
      MarkdownIt2.prototype.renderInline = function(src, env) {
        env = env || {};
        return this.renderer.render(this.parseInline(src, env), this.options, env);
      };
      module.exports = MarkdownIt2;
    }
  });

  // node_modules/markdown-it/index.js
  var require_markdown_it = __commonJS({
    "node_modules/markdown-it/index.js"(exports, module) {
      "use strict";
      module.exports = require_lib();
    }
  });

  // node_modules/@bookshop/live/lib/app/parsers/params-parser.js
  var TOKENS = {
    ASSIGN: /:|=/,
    DELIM: /"|'|`/,
    ESCAPE: /\\/,
    SPACE: /\s|\r|\n/,
    INSCOPE: /\(/,
    OUTSCOPE: /\)/,
    INDEX: /\[/,
    OUTDEX: /\]/
  };
  var ParamsParser = class {
    constructor(input) {
      this.input = input;
      this.stream = input.split("");
      this.state = `IDENT`;
      this.deps = {};
      this.output = [];
    }
    build() {
      while (this.stream.length) {
        this.process(this.stream.shift());
      }
      this.process(" ");
      return this.output;
    }
    process(t) {
      switch (this.state) {
        case `IDENT`:
          return this.processIDENT(t);
        case `VALUE`:
          return this.processVALUE(t);
      }
    }
    processIDENT(t) {
      if (TOKENS.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.identifier = this.deps.identifier || "";
      this.deps.started = true;
      if (TOKENS.ASSIGN.test(t) && !this.deps.escape) {
        if (!this.deps.identifier) {
          throw new Error("No identifier provided");
        }
        this.state = "VALUE";
        this.deps = { identifier: this.deps.identifier };
        return;
      }
      if (TOKENS.ESCAPE.test(t) && !this.deps.escape) {
        return this.deps.escape = true;
      }
      this.deps.identifier += t;
      this.deps.escape = false;
    }
    processVALUE(t) {
      if (TOKENS.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.value = this.deps.value || "";
      this.deps.started = true;
      if (this.deps.escape) {
        this.deps.value += t;
        this.deps.escape = false;
        return;
      }
      if (TOKENS.ESCAPE.test(t)) {
        this.deps.escape = true;
        return;
      }
      this.deps.value += t;
      if (!this.deps.delim) {
        if (TOKENS.DELIM.test(t)) {
          return this.deps.delim = new RegExp(t);
        }
        if (TOKENS.INSCOPE.test(t)) {
          return this.deps.delim = TOKENS.OUTSCOPE;
        }
        if (TOKENS.INDEX.test(t)) {
          return this.deps.delim = TOKENS.OUTDEX;
        }
        this.deps.delim = TOKENS.SPACE;
        if (!TOKENS.SPACE.test(t)) {
          return;
        }
      }
      if (this.deps.delimDepth && this.deps.delim.test(t)) {
        return this.deps.delimDepth -= 1;
      }
      if (this.deps.delim === TOKENS.SPACE && this.deps.delim.test(t)) {
        this.deps.value = this.deps.value.replace(/.$/, "");
        this.deps.value = this.deps.value.replace(/^\(\(+(.+)\)+\)$/, "($1)");
        this.deps.value = this.deps.value.replace(/^\((\S+)\)$/, "$1");
        this.output.push([this.deps.identifier, this.deps.value]);
        this.state = "IDENT";
        this.deps = {};
        return;
      }
      if (this.deps.delim.test(t)) {
        this.deps.delim = null;
        return;
      }
      if (this.deps.delim === TOKENS.OUTSCOPE && TOKENS.INSCOPE.test(t)) {
        this.deps.delimDepth = this.deps.delimDepth || 0;
        this.deps.delimDepth += 1;
      }
    }
  };

  // node_modules/@bookshop/live/lib/app/parsers/comment-parser.js
  var TOKENS2 = {
    ESCAPE: /\\/,
    SPACE: /\s|\r|\n/,
    INSCOPE: /\(/,
    OUTSCOPE: /\)/,
    END: /END/
  };
  var CommentParser = class {
    constructor(input) {
      this.input = input;
      this.stream = input.split("");
      this.state = `IDENT`;
      this.deps = {};
      this.output = {};
    }
    build() {
      while (this.stream.length) {
        this.process(this.stream.shift());
      }
      this.process("END");
      return this.output;
    }
    process(t) {
      switch (this.state) {
        case `IDENT`:
          return this.processIDENT(t);
        case `VALUE`:
          return this.processVALUE(t);
      }
    }
    processIDENT(t) {
      if (TOKENS2.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.identifier = this.deps.identifier || "";
      this.deps.started = true;
      if (TOKENS2.END.test(t)) {
        if (this.deps.identifier) {
          this.output[this.deps.identifier] = true;
        }
        return;
      }
      if (TOKENS2.INSCOPE.test(t) && !this.deps.escape) {
        if (!this.deps.identifier) {
          throw new Error("No identifier provided");
        }
        this.state = "VALUE";
        this.deps = { identifier: this.deps.identifier };
        return;
      }
      if (TOKENS2.ESCAPE.test(t) && !this.deps.escape) {
        return this.deps.escape = true;
      }
      this.deps.identifier += t;
      this.deps.escape = false;
    }
    processVALUE(t) {
      if (TOKENS2.SPACE.test(t) && !this.deps.started) {
        return;
      }
      ;
      this.deps.value = this.deps.value || "";
      this.deps.started = true;
      if (this.deps.escape) {
        this.deps.value += t;
        this.deps.escape = false;
        return;
      }
      if (TOKENS2.OUTSCOPE.test(t) && !this.deps.delimDepth) {
        this.output[this.deps.identifier] = this.deps.value;
        this.state = "IDENT";
        this.deps = {};
        return;
      }
      if (TOKENS2.ESCAPE.test(t)) {
        this.deps.escape = true;
        return;
      }
      this.deps.value += t;
      if (TOKENS2.INSCOPE.test(t)) {
        this.deps.delimDepth = this.deps.delimDepth || 0;
        this.deps.delimDepth += 1;
      }
      if (TOKENS2.OUTSCOPE.test(t) && this.deps.delimDepth) {
        this.deps.delimDepth -= 1;
      }
    }
  };

  // node_modules/@bookshop/live/lib/app/core.js
  var normalizeName = (name) => name.replace(/\/[\w-]+\..+$/, "").replace(/\..+$/, "");
  var parseParams = (params) => params ? new ParamsParser(params).build() : [];
  var getTemplateCommentIterator = (node) => {
    const documentNode = node.ownerDocument ?? document;
    return documentNode.evaluate("//comment()[contains(.,'bookshop-live')]", node, null, XPathResult.ANY_TYPE, null);
  };
  var parseComment = (node) => {
    return new CommentParser(node.textContent.replace(/^bookshop-live /, "")).build();
  };
  var nodeIsBefore = (a, b) => {
    return a && (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
  };
  var bookshop_version = null;
  if (true) {
    bookshop_version = "3.3.3";
  }
  var storeResolvedPath = (name, identifier, pathStack, logger) => {
    if (typeof identifier !== "string")
      return;
    const splitIdentifier = identifier.replace(/^include\./, "").replace(/\[(\d+)]/g, ".$1").split(".");
    logger?.log?.(`Split ${identifier} info ${JSON.stringify(splitIdentifier)}`);
    const baseIdentifier = splitIdentifier.shift();
    logger?.log?.(`Using base identifier ${baseIdentifier}`);
    if (baseIdentifier) {
      const existingPath = findInStack(baseIdentifier, pathStack);
      logger?.log?.(`Found the existing path ${existingPath}`);
      const prefix = existingPath ?? baseIdentifier;
      logger?.log?.(`Using the prefix ${prefix}`);
      pathStack[pathStack.length - 1][name] = `${[prefix, ...splitIdentifier].join(".")}`;
    } else {
      const existingPath = findInStack(identifier, pathStack);
      logger?.log?.(`Found the existing path ${existingPath}`);
      const path = existingPath ?? identifier;
      logger?.log?.(`Using the path ${path}`);
      pathStack[pathStack.length - 1][name] = path;
    }
    logger?.log?.(`Stored ${name}: ${pathStack[pathStack.length - 1][name]}`);
  };
  var findInStack = (key, stack) => {
    const [baseIdentifier, ...rest] = key.split(".");
    if (baseIdentifier) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i][baseIdentifier]) {
          if (rest.length)
            return `${stack[i][baseIdentifier]}.${rest.join(".")}`;
          return `${stack[i][baseIdentifier]}`;
        }
        if (stack[i]["."] && stack[i]["."] !== "." && !/^(\$|Params)/.test(key)) {
          return `${stack[i]["."]}.${key}`;
        }
      }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i][key]) {
        return `${stack[i][key]}`;
      }
    }
    return null;
  };
  var dig = (obj, path) => {
    if (typeof path === "string" && /^\s*['"`]/.test(path))
      return false;
    if (typeof path === "string")
      path = path.replace(/\[(\d+)]/g, ".$1").split(".");
    obj = obj[path.shift()];
    if (obj && path.length)
      return dig(obj, path);
    return obj;
  };
  var replaceHTMLRegion = (startNode, endNode, outputElement) => {
    let node = startNode.nextSibling;
    while (node && (node.compareDocumentPosition(endNode) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
      const next = node.nextSibling;
      node.remove();
      node = next;
    }
    while (outputElement.childNodes.length) {
      endNode.parentNode.insertBefore(outputElement.childNodes[0], endNode);
    }
  };
  var evaluateTemplate = async (liveInstance, documentNode, parentPathStack, templateBlockHandler = () => {
  }, isRetry, logger) => {
    const stack = [{ scope: {} }];
    const pathStack = parentPathStack || [{}];
    let stashedNodes = [];
    let stashedParams = [];
    let meta = {};
    const combinedScope = () => [liveInstance.data, ...stack.map((s) => s.scope)];
    const currentScope = () => stack[stack.length - 1];
    const iterator = getTemplateCommentIterator(documentNode);
    let currentNode = iterator.iterateNext();
    while (currentNode) {
      logger?.log?.(`Parsing the comment:`);
      logger?.log?.(currentNode.textContent);
      const liveTag = parseComment(currentNode);
      for (const [name, identifier] of parseParams(liveTag?.meta)) {
        meta[name] = identifier;
        logger?.log?.(`Registered metadata ${name} as ${identifier}`);
        if (name === "version" && bookshop_version) {
          const expected_version = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
          if (expected_version !== bookshop_version) {
            console.error([
              `Your Bookshop SSG plugin is running version ${expected_version}, but @bookshop/live is running version ${bookshop_version}.`,
              `Bookshop follows semantic versioning with regard to your site and components,`,
              `but this does not extend to Bookshop packages being compatible with each other across any version jump.`,
              `
Run %cnpx @bookshop/up@latest%c in your root directory to upgrade all Bookshop dependencies.`
            ].join("\n"), `color: #FF4C29; font-family: monospace; font-weight: bold;`, `color: unset; font-family: unset; font-weight: unset;`);
          }
        }
        await liveInstance.storeMeta(meta);
      }
      for (const [name, identifier] of parseParams(liveTag?.context)) {
        logger?.log?.(`Parsing context ${name}: ${identifier}`);
        currentScope().scope[name] = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
        const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
        if (typeof normalizedIdentifier === "object" && !Array.isArray(normalizedIdentifier)) {
          Object.values(normalizedIdentifier).forEach((value) => {
            return storeResolvedPath(name, value, pathStack, logger?.nested?.());
          });
        } else {
          storeResolvedPath(name, normalizedIdentifier, pathStack, logger?.nested?.());
        }
      }
      for (const [name, identifier] of parseParams(liveTag?.reassign)) {
        logger?.log?.(`Reassigning ${name} to ${identifier}`);
        for (let i = stack.length - 1; i >= 0; i -= 1) {
          if (stack[i].scope[name] !== void 0) {
            stack[i].scope[name] = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
            break;
          }
        }
        for (let i = pathStack.length - 1; i >= 0; i -= 1) {
          if (pathStack[i][name] !== void 0) {
            const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
            if (typeof normalizedIdentifier === "object" && !Array.isArray(normalizedIdentifier)) {
              Object.values(normalizedIdentifier).forEach((value) => {
                return storeResolvedPath(name, value, [pathStack[i]]);
              });
            } else {
              storeResolvedPath(name, normalizedIdentifier, [pathStack[i]]);
            }
            break;
          }
        }
      }
      if (liveTag?.end) {
        logger?.log?.(`Reached the end of a block, handing off to the handler function`);
        currentScope().endNode = currentNode;
        await templateBlockHandler(stack.pop(), logger?.nested?.());
        pathStack.pop();
      } else if (liveTag.stack) {
        logger?.log?.(`Stacking a new context`);
        let scope = {};
        pathStack.push({});
        stack.push({
          pathStack: JSON.parse(JSON.stringify(pathStack)),
          scope
        });
      } else if (liveTag.unstack) {
        logger?.log?.(`Unstacking a context`);
        stack.pop();
        pathStack.pop();
      } else if (liveTag && liveTag?.name === "__bookshop__subsequent") {
        logger?.log?.(`Stashing parameters for the next bookshop tag`);
        stashedNodes.push(currentNode);
        stashedParams = [...stashedParams, ...parseParams(liveTag?.params)];
      } else if (liveTag?.name) {
        logger?.log?.(`Rendering a new component ${liveTag.name}`);
        let scope = {};
        const params = [...stashedParams, ...parseParams(liveTag?.params)];
        pathStack.push({});
        for (const [name, identifier] of params) {
          if (name === "bind") {
            const bindVals = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
            if (bindVals && typeof bindVals === "object") {
              scope = { ...scope, ...bindVals };
              Object.keys(bindVals).forEach((key) => storeResolvedPath(key, `${identifier}.${key}`, pathStack));
            }
          } else if (name === ".") {
            const bindVals = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
            if (bindVals && typeof bindVals === "object" && !Array.isArray(bindVals)) {
              scope = { ...scope, ...bindVals };
            } else {
              scope[name] = bindVals;
            }
            const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
            if (typeof normalizedIdentifier === "object" && !Array.isArray(normalizedIdentifier)) {
              Object.entries(normalizedIdentifier).forEach(([key, value]) => {
                return storeResolvedPath(key, value, pathStack);
              });
            } else {
              storeResolvedPath(name, normalizedIdentifier, pathStack);
            }
          } else {
            scope[name] = await liveInstance.eval(identifier, combinedScope(), logger?.nested?.());
            storeResolvedPath(name, identifier, pathStack);
          }
        }
        ;
        stack.push({
          startNode: currentNode,
          name: normalizeName(liveTag?.name),
          pathStack: JSON.parse(JSON.stringify(pathStack)),
          scope,
          params,
          stashedNodes,
          depth: stack.length - 1
        });
        stashedParams = [];
        stashedNodes = [];
      }
      try {
        currentNode = iterator.iterateNext();
      } catch (e) {
        logger?.log?.(`Failed to iterate to the next node.`);
        if (!isRetry) {
          logger?.log?.(`Trying to start again...`);
          return await evaluateTemplate(liveInstance, documentNode, parentPathStack, templateBlockHandler, true, logger);
        }
      }
    }
  };
  var renderComponentUpdates = async (liveInstance, documentNode, logger) => {
    const vDom = document.implementation.createHTMLDocument();
    const updates = [];
    const templateBlockHandler = async ({ startNode, endNode, name, scope, pathStack, depth, stashedNodes }, logger2) => {
      logger2?.log?.(`Received a template block to render for ${name}`);
      if (depth) {
        logger2?.log?.(`Skipping render for nested component ${name}`);
        return;
      }
      ;
      const liveRenderFlag = scope?.live_render ?? scope?.liveRender ?? scope?._live_render ?? scope?._liveRender ?? true;
      if (!liveRenderFlag) {
        logger2?.log?.(`Skipping render for ${name} due to false liverender flag`);
        return;
      }
      ;
      const output = vDom.createElement("div");
      await liveInstance.renderElement(name, scope, output, logger2?.nested?.());
      logger2?.log?.(`Rendered ${name} block into an update`);
      updates.push({ startNode, endNode, output, pathStack, scope, name, stashedNodes });
    };
    logger?.log?.(`Evaluating templates found in a document`);
    await evaluateTemplate(liveInstance, documentNode, null, templateBlockHandler, false, logger?.nested?.());
    logger?.log?.(`Completed evaluating the document`);
    return updates;
  };
  var findDataBinding = (identifier, liveInstance, pathStack, logger) => {
    logger?.log?.(`Finding the data binding for ${identifier}`);
    const normalizedIdentifier = liveInstance.normalize(identifier, logger?.nested?.());
    if (typeof normalizedIdentifier === "object" && !Array.isArray(normalizedIdentifier)) {
      for (const innerIdentifier of Object.values(normalizedIdentifier)) {
        logger?.log?.(`'twas an object \u2014 finding the data binding for ${innerIdentifier}'`);
        let dataBinding = findDataBinding(innerIdentifier, liveInstance, pathStack, logger?.nested?.());
        if (dataBinding)
          return dataBinding;
      }
      return null;
    }
    let path = findInStack(normalizedIdentifier, pathStack) ?? normalizedIdentifier;
    let pathResolves = dig(liveInstance.data, path);
    logger?.log?.(`Found the path ${path}, which ${pathResolves ? `does resolve` : `does not resolve`}`);
    if (pathResolves) {
      let dataBinding = path.replace(/^page(\.|$)/, "");
      dataBinding = dataBinding.replace(/^Params(\.|$)/, "");
      return dataBinding;
    }
  };
  var hydrateDataBindings = async (liveInstance, documentNode, pathsInScope, preComment, postComment, stashedNodes, logger) => {
    logger?.log?.(`Hydrating data bindings`);
    const vDom = documentNode.ownerDocument;
    const components = [];
    documentNode.prepend(preComment);
    for (let node of stashedNodes.reverse()) {
      logger?.log?.(`Adding a stashed node to the top of our document node`);
      documentNode.prepend(node);
    }
    documentNode.append(postComment);
    vDom.body.appendChild(documentNode);
    const templateBlockHandler = async (component, logger2) => {
      logger2?.log?.(`Storing an update for ${component.name}`);
      components.push(component);
    };
    logger?.log?.(`Evaluating template...`);
    await evaluateTemplate(liveInstance, documentNode, [{}], templateBlockHandler, false, logger?.nested?.());
    for (let { startNode, endNode, params, pathStack, scope, name } of components) {
      const isStandardComponent = liveInstance.resolveComponentType(name) === "component";
      const dataBindingFlag = scope?.editorLink ?? scope?.editor_link ?? scope?._editorLink ?? scope?._editor_link ?? scope?.dataBinding ?? scope?.data_binding ?? scope?._dataBinding ?? scope?._data_binding ?? isStandardComponent;
      if (dataBindingFlag) {
        let dataBinding = null;
        for (const [, identifier] of params) {
          dataBinding = findDataBinding(identifier, liveInstance, pathStack, logger?.nested?.());
          if (dataBinding)
            break;
        }
        if (dataBinding) {
          logger?.log?.(`Found the data binding ${dataBinding} for ${name}`);
          let node = startNode.nextElementSibling;
          while (node && (node.compareDocumentPosition(endNode) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
            logger?.log?.(`Setting data-cms-bind on an element`);
            node.dataset.cmsBind = `#${dataBinding}`;
            node = node.nextElementSibling;
          }
        } else {
          logger?.log?.(`Couldn't find a data binding for ${name}`);
        }
      } else {
        logger?.log?.(`${name} opted out of getting a data binding`);
      }
    }
    preComment.remove();
    postComment.remove();
    for (let node of stashedNodes) {
      node.remove();
    }
    documentNode.remove();
  };
  var graftTrees = (DOMStart, DOMEnd, vDOMObject, logger) => {
    let existingNodes = [], incomingNodes = [...vDOMObject.childNodes];
    let existingNode = DOMStart.nextSibling;
    while (nodeIsBefore(existingNode, DOMEnd)) {
      existingNodes.push(existingNode);
      existingNode = existingNode.nextSibling;
    }
    if (existingNodes.length !== incomingNodes.length) {
      logger?.log?.(`Trees are different lengths, replacing the entire region en-masse`);
      replaceHTMLRegion(DOMStart, DOMEnd, vDOMObject);
      return;
    }
    logger?.log?.(`Updating the tree...`);
    for (let i = 0; i < existingNodes.length; i++) {
      diffAndUpdateNode(existingNodes[i], incomingNodes[i]);
    }
  };
  var diffAndUpdateNode = (existingNode, incomingNode) => {
    if (existingNode.isEqualNode(incomingNode)) {
      return;
    }
    if (!existingNode.cloneNode(false).isEqualNode(incomingNode.cloneNode(false))) {
      existingNode.replaceWith(incomingNode);
      return;
    }
    if (existingNode.childNodes.length !== incomingNode.childNodes.length) {
      existingNode.replaceWith(incomingNode);
      return;
    }
    const existingChildren = [...existingNode.childNodes];
    const incomingChildren = [...incomingNode.childNodes];
    for (let i = 0; i < existingChildren.length; i++) {
      diffAndUpdateNode(existingChildren[i], incomingChildren[i]);
    }
  };

  // node_modules/@bookshop/live/lib/app/live.js
  var sleep = (ms = 0) => {
    return new Promise((r) => setTimeout(r, ms));
  };
  var getLive = (engines2) => class BookshopLive {
    constructor(options) {
      this.engines = engines2;
      this.elements = [];
      this.globalData = {};
      this.data = {};
      this.cloudcannonInfo = {};
      this.renderOptions = {};
      this.renderCount = 0;
      this.renderedAt = 0;
      this.shouldRenderAt = null;
      this.renderFrequency = 1e3;
      this.renderTimeout = null;
      this.verbose = false;
      this.logFn = this.logger();
      this.loadedFn = options?.loadedFn;
      const remoteGlobals = options?.remoteGlobals?.length || 0;
      this.awaitingDataFetches = remoteGlobals + 1;
      options?.remoteGlobals?.forEach(this.fetchGlobalData.bind(this));
      this.fetchInfo();
    }
    completeRender() {
      if (typeof this.loadedFn === "function") {
        this.loadedFn();
        this.loadedFn = null;
      }
      this.renderCount += 1;
    }
    logger(depth = 0) {
      return {
        log: (str) => {
          if (this.verbose) {
            console.log(`${"|  ".repeat(depth)}${str}`);
          }
        },
        nested: () => this.logger(depth + 1)
      };
    }
    async fetchInfo() {
      try {
        this.logFn.log(`Trying to load /_cloudcannon/info.json`);
        const dataReq = await fetch(`/_cloudcannon/info.json`);
        this.cloudcannonInfo = await dataReq.json();
        await this.engines[0].storeInfo?.(this.cloudcannonInfo);
        this.awaitingDataFetches -= 1;
        this.logFn.log(`Loaded /_cloudcannon/info.json`);
      } catch (e) {
        this.awaitingDataFetches -= 1;
        this.logFn.log(`\u274C Failed to load /_cloudcannon/info.json`);
      }
    }
    async fetchGlobalData(path) {
      try {
        const dataReq = await fetch(path);
        const data = await dataReq.json();
        Object.assign(this.globalData, data);
        this.awaitingDataFetches -= 1;
      } catch (e) {
        this.awaitingDataFetches -= 1;
      }
    }
    readElement(el) {
      return {
        dom: el,
        originalHTML: el.innerHTML,
        componentName: el.dataset.bookshopLive,
        componentPropSource: el.dataset.bookshopProps
      };
    }
    resolveComponentType(componentName) {
      return this.engines[0].resolveComponentType(componentName);
    }
    async storeMeta(meta) {
      await this.engines[0].storeMeta?.(meta);
    }
    async renderElement(componentName, scope, dom, logger) {
      try {
        logger?.log?.(`Rendering ${componentName}`);
        await this.engines[0].render(dom, componentName, scope, { ...this.globalData }, logger?.nested?.());
        logger?.log?.(`Rendered ${componentName}`);
      } catch (e) {
        logger?.log?.(`Error rendering ${componentName}`);
        console.warn(`Error rendering bookshop component ${componentName}`, e.toString());
        console.warn(`This is expected in certain cases, and may not be an issue, especially when deleting or re-ordering components.`);
      }
    }
    async eval(identifier, scope, logger) {
      logger?.log?.(`Evaluating ${identifier} in ${JSON.stringify(scope)}`);
      const result = await this.engines[0].eval(identifier, scope);
      logger?.log?.(`Evaluated to ${result}`);
      return result;
    }
    normalize(identifier, logger) {
      logger?.log?.(`Normalizing ${identifier}`);
      if (typeof this.engines[0].normalize === "function") {
        identifier = this.engines[0].normalize(identifier);
        logger?.log?.(`Normalized to ${typeof identifier === "object" ? JSON.stringify(identifier) : identifier}`);
      }
      return identifier;
    }
    async update(data, options) {
      this.logFn.log(`Received new data to update the page with`);
      const now = Date.now();
      if (typeof this.engines[0].transformData === "function" && options?.transformData !== false) {
        this.data = this.engines[0].transformData(data);
        this.logFn.log(`Transformed the data using the engine's transform function`);
      } else {
        this.data = data;
      }
      this.renderOptions = options;
      while (this.awaitingDataFetches > 0) {
        this.logFn.log(`Still fetching remote data, waiting for all fetches to complete...`);
        await sleep(100);
      }
      if (now - this.renderedAt < this.renderFrequency) {
        const shouldRenderAt = this.renderedAt + this.renderFrequency;
        this.shouldRenderAt = shouldRenderAt;
        this.logFn.log(`Throttling this render \u2014 will try to render again in ${shouldRenderAt - now}ms`);
        await sleep(shouldRenderAt - now);
        if (shouldRenderAt !== this.shouldRenderAt) {
          this.logFn.log(`A newer render has schedule itself \u2014 throwing away this render attempt`);
          return false;
        }
        this.logFn.log(`Now running previously throttled render`);
      }
      this.shouldRenderAt = null;
      this.renderedAt = Date.now();
      this.logFn.log(`Rendering the update`);
      await this.render();
      this.logFn.log(`Done rendering`);
      return true;
    }
    async render() {
      const CCEditorPanelSupport = typeof window === "undefined" || typeof window !== "undefined" && window.CloudCannon?.refreshInterface;
      this.logFn.log(CCEditorPanelSupport ? `Editor panels are supported` : `Editor panels are not supported`);
      const options = {
        dataBindings: CCEditorPanelSupport,
        ...this.renderOptions
      };
      if (typeof window !== "undefined" && (window.bookshopEditorLinks === false || window.bookshopDataBindings === false)) {
        options.dataBindings = false;
      }
      if (options.editorLinks === false) {
        options.dataBindings = false;
      }
      this.logFn.log(options.dataBindings ? `Data bindings are enabled` : `Data bindings are disabled`);
      this.logFn.log(`Rendering component updates...`);
      const componentUpdates = await renderComponentUpdates(this, document, this.logFn.nested());
      this.logFn.log(`Individual component updates have been rendered`);
      for (let {
        startNode,
        endNode,
        output,
        pathStack,
        stashedNodes,
        name
      } of componentUpdates) {
        this.logFn.log(`Processing a component update for ${name}`);
        if (options.dataBindings) {
          this.logFn.log(`Hydrating the data bindings for ${name}`);
          await hydrateDataBindings(this, output, pathStack, startNode.cloneNode(), endNode.cloneNode(), stashedNodes.map((n) => n.cloneNode()), this.logFn.nested());
        }
        this.logFn.log(`Grafting ${name}'s update to the DOM tree`);
        graftTrees(startNode, endNode, output, this.logFn.nested());
        this.logFn.log(`Completed grafting ${name}'s update to the DOM tree`);
      }
      this.completeRender();
      this.logFn.log(`Finished rendering`);
    }
  };

  // node_modules/liquidjs/dist/liquid.browser.esm.js
  var Drop = class {
    valueOf() {
      return void 0;
    }
    liquidMethodMissing(key) {
      return void 0;
    }
  };
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var toStr = Object.prototype.toString;
  var toLowerCase = String.prototype.toLowerCase;
  function isString(value) {
    return typeof value === "string";
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function stringify(value) {
    value = toValue(value);
    if (isString(value))
      return value;
    if (isNil(value))
      return "";
    return String(value);
  }
  function toValue(value) {
    return value instanceof Drop ? value.valueOf() : value;
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function toLiquid(value) {
    if (value && isFunction(value.toLiquid))
      return toLiquid(value.toLiquid());
    return value;
  }
  function isNil(value) {
    return value == null;
  }
  function isArray(value) {
    return toStr.call(value) === "[object Array]";
  }
  function forOwn(object, iteratee) {
    object = object || {};
    for (const k in object) {
      if (object.hasOwnProperty(k)) {
        if (iteratee(object[k], k, object) === false)
          break;
      }
    }
    return object;
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  function isObject(value) {
    const type = typeof value;
    return value !== null && (type === "object" || type === "function");
  }
  function range(start, stop, step = 1) {
    const arr = [];
    for (let i = start; i < stop; i += step) {
      arr.push(i);
    }
    return arr;
  }
  function padStart(str, length, ch = " ") {
    return pad(str, length, ch, (str2, ch2) => ch2 + str2);
  }
  function padEnd(str, length, ch = " ") {
    return pad(str, length, ch, (str2, ch2) => str2 + ch2);
  }
  function pad(str, length, ch, add) {
    str = String(str);
    let n = length - str.length;
    while (n-- > 0)
      str = add(str, ch);
    return str;
  }
  function identify(val) {
    return val;
  }
  function snakeCase(str) {
    return str.replace(/(\w?)([A-Z])/g, (_, a, b) => (a ? a + "_" : "") + b.toLowerCase());
  }
  function changeCase(str) {
    const hasLowerCase = [...str].some((ch) => ch >= "a" && ch <= "z");
    return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
  }
  function ellipsis(str, N) {
    return str.length > N ? str.substr(0, N - 3) + "..." : str;
  }
  function caseInsensitiveCompare(a, b) {
    if (a == null && b == null)
      return 0;
    if (a == null)
      return 1;
    if (b == null)
      return -1;
    a = toLowerCase.call(a);
    b = toLowerCase.call(b);
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  }
  var Node2 = class {
    constructor(key, value, next, prev) {
      this.key = key;
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  };
  var LRU = class {
    constructor(limit2, size2 = 0) {
      this.limit = limit2;
      this.size = size2;
      this.cache = {};
      this.head = new Node2("HEAD", null, null, null);
      this.tail = new Node2("TAIL", null, null, null);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
    write(key, value) {
      if (this.cache[key]) {
        this.cache[key].value = value;
      } else {
        const node = new Node2(key, value, this.head.next, this.head);
        this.head.next.prev = node;
        this.head.next = node;
        this.cache[key] = node;
        this.size++;
        this.ensureLimit();
      }
    }
    read(key) {
      if (!this.cache[key])
        return;
      const { value } = this.cache[key];
      this.remove(key);
      this.write(key, value);
      return value;
    }
    remove(key) {
      const node = this.cache[key];
      node.prev.next = node.next;
      node.next.prev = node.prev;
      delete this.cache[key];
      this.size--;
    }
    clear() {
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.size = 0;
      this.cache = {};
    }
    ensureLimit() {
      if (this.size > this.limit)
        this.remove(this.tail.prev.key);
    }
  };
  function domResolve(root, path) {
    const base = document.createElement("base");
    base.href = root;
    const head = document.getElementsByTagName("head")[0];
    head.insertBefore(base, head.firstChild);
    const a = document.createElement("a");
    a.href = path;
    const resolved = a.href;
    head.removeChild(base);
    return resolved;
  }
  function resolve(root, filepath, ext) {
    if (root.length && last(root) !== "/")
      root += "/";
    const url = domResolve(root, filepath);
    return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (str, origin, path) => {
      const last2 = path.split("/").pop();
      if (/\.\w+$/.test(last2))
        return str;
      return origin + path + ext;
    });
  }
  async function readFile(url) {
    return new Promise((resolve2, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve2(xhr.responseText);
        } else {
          reject(new Error(xhr.statusText));
        }
      };
      xhr.onerror = () => {
        reject(new Error("An error occurred whilst receiving the response."));
      };
      xhr.open("GET", url);
      xhr.send();
    });
  }
  function readFileSync(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status < 200 || xhr.status >= 300) {
      throw new Error(xhr.statusText);
    }
    return xhr.responseText;
  }
  async function exists(filepath) {
    return true;
  }
  function existsSync(filepath) {
    return true;
  }
  var fs = /* @__PURE__ */ Object.freeze({
    resolve,
    readFile,
    readFileSync,
    exists,
    existsSync
  });
  function isComparable(arg) {
    return arg && isFunction(arg.equals);
  }
  function isTruthy(val, ctx) {
    return !isFalsy(val, ctx);
  }
  function isFalsy(val, ctx) {
    if (ctx.opts.jsTruthy) {
      return !val;
    } else {
      return val === false || val === void 0 || val === null;
    }
  }
  var defaultOperators = {
    "==": (l, r) => {
      if (isComparable(l))
        return l.equals(r);
      if (isComparable(r))
        return r.equals(l);
      return l === r;
    },
    "!=": (l, r) => {
      if (isComparable(l))
        return !l.equals(r);
      if (isComparable(r))
        return !r.equals(l);
      return l !== r;
    },
    ">": (l, r) => {
      if (isComparable(l))
        return l.gt(r);
      if (isComparable(r))
        return r.lt(l);
      return l > r;
    },
    "<": (l, r) => {
      if (isComparable(l))
        return l.lt(r);
      if (isComparable(r))
        return r.gt(l);
      return l < r;
    },
    ">=": (l, r) => {
      if (isComparable(l))
        return l.geq(r);
      if (isComparable(r))
        return r.leq(l);
      return l >= r;
    },
    "<=": (l, r) => {
      if (isComparable(l))
        return l.leq(r);
      if (isComparable(r))
        return r.geq(l);
      return l <= r;
    },
    "contains": (l, r) => {
      return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
    },
    "and": (l, r, ctx) => isTruthy(l, ctx) && isTruthy(r, ctx),
    "or": (l, r, ctx) => isTruthy(l, ctx) || isTruthy(r, ctx)
  };
  var TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  var IDENTIFIER = 1;
  var BLANK = 4;
  var QUOTE = 8;
  var INLINE_BLANK = 16;
  var NUMBER = 32;
  var SIGN = 64;
  TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;
  function createTrie(operators) {
    const trie = {};
    for (const [name, handler] of Object.entries(operators)) {
      let node = trie;
      for (let i = 0; i < name.length; i++) {
        const c = name[i];
        node[c] = node[c] || {};
        if (i === name.length - 1 && TYPES[name.charCodeAt(i)] & IDENTIFIER) {
          node[c].needBoundary = true;
        }
        node = node[c];
      }
      node.handler = handler;
      node.end = true;
    }
    return trie;
  }
  var defaultOptions = {
    root: ["."],
    layouts: ["."],
    partials: ["."],
    relativeReference: true,
    cache: void 0,
    extname: "",
    fs,
    dynamicPartials: true,
    jsTruthy: false,
    trimTagRight: false,
    trimTagLeft: false,
    trimOutputRight: false,
    trimOutputLeft: false,
    greedy: true,
    tagDelimiterLeft: "{%",
    tagDelimiterRight: "%}",
    outputDelimiterLeft: "{{",
    outputDelimiterRight: "}}",
    preserveTimezones: false,
    strictFilters: false,
    strictVariables: false,
    lenientIf: false,
    globals: {},
    keepOutputType: false,
    operators: defaultOperators,
    operatorsTrie: createTrie(defaultOperators)
  };
  function normalize(options) {
    options = options || {};
    if (options.hasOwnProperty("root")) {
      options.root = normalizeDirectoryList(options.root);
    }
    if (options.hasOwnProperty("partials")) {
      options.partials = normalizeDirectoryList(options.partials);
    }
    if (options.hasOwnProperty("layouts")) {
      options.layouts = normalizeDirectoryList(options.layouts);
    }
    if (options.hasOwnProperty("cache")) {
      let cache;
      if (typeof options.cache === "number")
        cache = options.cache > 0 ? new LRU(options.cache) : void 0;
      else if (typeof options.cache === "object")
        cache = options.cache;
      else
        cache = options.cache ? new LRU(1024) : void 0;
      options.cache = cache;
    }
    if (options.hasOwnProperty("operators")) {
      options.operatorsTrie = createTrie(options.operators);
    }
    return options;
  }
  function applyDefault(options) {
    const fullOptions = Object.assign({}, defaultOptions, options);
    if (fullOptions.partials === defaultOptions.partials) {
      fullOptions.partials = fullOptions.root;
    }
    if (fullOptions.layouts === defaultOptions.layouts) {
      fullOptions.layouts = fullOptions.root;
    }
    return fullOptions;
  }
  function normalizeDirectoryList(value) {
    let list = [];
    if (isArray(value))
      list = value;
    if (isString(value))
      list = [value];
    return list.map((str) => resolve(str, ".", "")).map((str) => str[str.length - 1] !== "/" ? str + "/" : str);
  }
  var LiquidError = class extends Error {
    constructor(err, token) {
      super(err.message);
      this.originalError = err;
      this.token = token;
      this.context = "";
    }
    update() {
      const err = this.originalError;
      this.context = mkContext(this.token);
      this.message = mkMessage(err.message, this.token);
      this.stack = this.message + "\n" + this.context + "\n" + this.stack + "\nFrom " + err.stack;
    }
  };
  var TokenizationError = class extends LiquidError {
    constructor(message, token) {
      super(new Error(message), token);
      this.name = "TokenizationError";
      super.update();
    }
  };
  var ParseError = class extends LiquidError {
    constructor(err, token) {
      super(err, token);
      this.name = "ParseError";
      this.message = err.message;
      super.update();
    }
  };
  var RenderError = class extends LiquidError {
    constructor(err, tpl) {
      super(err, tpl.token);
      this.name = "RenderError";
      this.message = err.message;
      super.update();
    }
    static is(obj) {
      return obj.name === "RenderError";
    }
  };
  var UndefinedVariableError = class extends LiquidError {
    constructor(err, token) {
      super(err, token);
      this.name = "UndefinedVariableError";
      this.message = err.message;
      super.update();
    }
  };
  var InternalUndefinedVariableError = class extends Error {
    constructor(variableName) {
      super(`undefined variable: ${variableName}`);
      this.name = "InternalUndefinedVariableError";
      this.variableName = variableName;
    }
  };
  var AssertionError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "AssertionError";
      this.message = message + "";
    }
  };
  function mkContext(token) {
    const [line] = token.getPosition();
    const lines = token.input.split("\n");
    const begin = Math.max(line - 2, 1);
    const end = Math.min(line + 3, lines.length);
    const context = range(begin, end + 1).map((lineNumber) => {
      const indicator = lineNumber === line ? ">> " : "   ";
      const num = padStart(String(lineNumber), String(end).length);
      const text = lines[lineNumber - 1];
      return `${indicator}${num}| ${text}`;
    }).join("\n");
    return context;
  }
  function mkMessage(msg, token) {
    if (token.file)
      msg += `, file:${token.file}`;
    const [line, col] = token.getPosition();
    msg += `, line:${line}, col:${col}`;
    return msg;
  }
  var Context = class {
    constructor(env = {}, opts = defaultOptions, sync = false) {
      this.scopes = [{}];
      this.registers = {};
      this.sync = sync;
      this.opts = opts;
      this.globals = opts.globals;
      this.environments = env;
    }
    getRegister(key) {
      return this.registers[key] = this.registers[key] || {};
    }
    setRegister(key, value) {
      return this.registers[key] = value;
    }
    saveRegister(...keys) {
      return keys.map((key) => [key, this.getRegister(key)]);
    }
    restoreRegister(keyValues) {
      return keyValues.forEach(([key, value]) => this.setRegister(key, value));
    }
    getAll() {
      return [this.globals, this.environments, ...this.scopes].reduce((ctx, val) => __assign(ctx, val), {});
    }
    get(paths) {
      const scope = this.findScope(paths[0]);
      return this.getFromScope(scope, paths);
    }
    getFromScope(scope, paths) {
      if (typeof paths === "string")
        paths = paths.split(".");
      return paths.reduce((scope2, path) => {
        scope2 = readProperty(scope2, path);
        if (isNil(scope2) && this.opts.strictVariables) {
          throw new InternalUndefinedVariableError(path);
        }
        return scope2;
      }, scope);
    }
    push(ctx) {
      return this.scopes.push(ctx);
    }
    pop() {
      return this.scopes.pop();
    }
    bottom() {
      return this.scopes[0];
    }
    findScope(key) {
      for (let i = this.scopes.length - 1; i >= 0; i--) {
        const candidate = this.scopes[i];
        if (key in candidate)
          return candidate;
      }
      if (key in this.environments)
        return this.environments;
      return this.globals;
    }
  };
  function readProperty(obj, key) {
    if (isNil(obj))
      return obj;
    obj = toLiquid(obj);
    if (isFunction(obj[key]))
      return obj[key]();
    if (obj instanceof Drop) {
      if (obj.hasOwnProperty(key))
        return obj[key];
      return obj.liquidMethodMissing(key);
    }
    if (key === "size")
      return readSize(obj);
    if (key === "first")
      return readFirst(obj);
    if (key === "last")
      return readLast(obj);
    return obj[key];
  }
  function readFirst(obj) {
    if (isArray(obj))
      return obj[0];
    return obj["first"];
  }
  function readLast(obj) {
    if (isArray(obj))
      return obj[obj.length - 1];
    return obj["last"];
  }
  function readSize(obj) {
    if (isArray(obj) || isString(obj))
      return obj.length;
    return obj["size"];
  }
  var LookupType;
  (function(LookupType2) {
    LookupType2["Partials"] = "partials";
    LookupType2["Layouts"] = "layouts";
    LookupType2["Root"] = "root";
  })(LookupType || (LookupType = {}));
  var Loader = class {
    constructor(options) {
      this.options = options;
    }
    *lookup(file, type, sync, currentFile) {
      const { fs: fs2 } = this.options;
      const dirs = this.options[type];
      for (const filepath of this.candidates(file, dirs, currentFile, type !== LookupType.Root)) {
        if (sync ? fs2.existsSync(filepath) : yield fs2.exists(filepath))
          return filepath;
      }
      throw this.lookupError(file, dirs);
    }
    shouldLoadRelative(currentFile) {
      return this.options.relativeReference && this.isRelativePath(currentFile);
    }
    isRelativePath(path) {
      return path.startsWith("./") || path.startsWith("../");
    }
    *candidates(file, dirs, currentFile, enforceRoot) {
      const { fs: fs2, extname } = this.options;
      if (this.shouldLoadRelative(file) && currentFile) {
        const referenced = fs2.resolve(this.dirname(currentFile), file, extname);
        for (const dir of dirs) {
          if (!enforceRoot || referenced.startsWith(dir)) {
            yield referenced;
            return;
          }
        }
      }
      for (const dir of dirs) {
        const referenced = fs2.resolve(dir, file, extname);
        if (!enforceRoot || referenced.startsWith(dir)) {
          yield referenced;
        }
      }
      if (fs2.fallback !== void 0) {
        const filepath = fs2.fallback(file);
        if (filepath !== void 0)
          yield filepath;
      }
    }
    dirname(path) {
      const segments = path.split("/");
      segments.pop();
      return segments.join("/");
    }
    lookupError(file, roots) {
      const err = new Error("ENOENT");
      err.message = `ENOENT: Failed to lookup "${file}" in "${roots}"`;
      err.code = "ENOENT";
      return err;
    }
  };
  var SimpleEmitter = class {
    constructor() {
      this.buffer = "";
    }
    write(html) {
      this.buffer += stringify(html);
    }
  };
  var StreamedEmitter = class {
    constructor() {
      this.buffer = "";
      this.stream = null;
      throw new Error("streaming not supported in browser");
    }
  };
  function createResolvedThenable(value) {
    const ret = {
      then: (resolve2) => resolve2(value),
      catch: () => ret
    };
    return ret;
  }
  function createRejectedThenable(err) {
    const ret = {
      then: (resolve2, reject) => {
        if (reject)
          return reject(err);
        return ret;
      },
      catch: (reject) => reject(err)
    };
    return ret;
  }
  function isThenable(val) {
    return val && isFunction(val.then);
  }
  function isAsyncIterator(val) {
    return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
  }
  function toThenable(val) {
    if (isThenable(val))
      return val;
    if (isAsyncIterator(val))
      return reduce();
    return createResolvedThenable(val);
    function reduce(prev) {
      let state;
      try {
        state = val.next(prev);
      } catch (err) {
        return createRejectedThenable(err);
      }
      if (state.done)
        return createResolvedThenable(state.value);
      return toThenable(state.value).then(reduce, (err) => {
        let state2;
        try {
          state2 = val.throw(err);
        } catch (e) {
          return createRejectedThenable(e);
        }
        if (state2.done)
          return createResolvedThenable(state2.value);
        return reduce(state2.value);
      });
    }
  }
  function toPromise(val) {
    return Promise.resolve(toThenable(val));
  }
  function toValue$1(val) {
    let ret;
    toThenable(val).then((x) => {
      ret = x;
      return createResolvedThenable(ret);
    }).catch((err) => {
      throw err;
    });
    return ret;
  }
  var KeepingTypeEmitter = class {
    constructor() {
      this.buffer = "";
    }
    write(html) {
      html = toValue(html);
      if (typeof html !== "string" && this.buffer === "") {
        this.buffer = html;
      } else {
        this.buffer = stringify(this.buffer) + stringify(html);
      }
    }
  };
  var Render = class {
    renderTemplatesToNodeStream(templates, ctx) {
      const emitter = new StreamedEmitter();
      Promise.resolve().then(() => toThenable(this.renderTemplates(templates, ctx, emitter))).then(() => emitter.end(), (err) => emitter.error(err));
      return emitter.stream;
    }
    *renderTemplates(templates, ctx, emitter) {
      if (!emitter) {
        emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
      }
      for (const tpl of templates) {
        try {
          const html = yield tpl.render(ctx, emitter);
          html && emitter.write(html);
          if (emitter["break"] || emitter["continue"])
            break;
        } catch (e) {
          const err = RenderError.is(e) ? e : new RenderError(e, tpl);
          throw err;
        }
      }
      return emitter.buffer;
    }
  };
  var TokenKind;
  (function(TokenKind2) {
    TokenKind2[TokenKind2["Number"] = 1] = "Number";
    TokenKind2[TokenKind2["Literal"] = 2] = "Literal";
    TokenKind2[TokenKind2["Tag"] = 4] = "Tag";
    TokenKind2[TokenKind2["Output"] = 8] = "Output";
    TokenKind2[TokenKind2["HTML"] = 16] = "HTML";
    TokenKind2[TokenKind2["Filter"] = 32] = "Filter";
    TokenKind2[TokenKind2["Hash"] = 64] = "Hash";
    TokenKind2[TokenKind2["PropertyAccess"] = 128] = "PropertyAccess";
    TokenKind2[TokenKind2["Word"] = 256] = "Word";
    TokenKind2[TokenKind2["Range"] = 512] = "Range";
    TokenKind2[TokenKind2["Quoted"] = 1024] = "Quoted";
    TokenKind2[TokenKind2["Operator"] = 2048] = "Operator";
    TokenKind2[TokenKind2["Delimited"] = 12] = "Delimited";
  })(TokenKind || (TokenKind = {}));
  function isDelimitedToken(val) {
    return !!(getKind(val) & TokenKind.Delimited);
  }
  function isOperatorToken(val) {
    return getKind(val) === TokenKind.Operator;
  }
  function isHTMLToken(val) {
    return getKind(val) === TokenKind.HTML;
  }
  function isOutputToken(val) {
    return getKind(val) === TokenKind.Output;
  }
  function isTagToken(val) {
    return getKind(val) === TokenKind.Tag;
  }
  function isQuotedToken(val) {
    return getKind(val) === TokenKind.Quoted;
  }
  function isLiteralToken(val) {
    return getKind(val) === TokenKind.Literal;
  }
  function isNumberToken(val) {
    return getKind(val) === TokenKind.Number;
  }
  function isPropertyAccessToken(val) {
    return getKind(val) === TokenKind.PropertyAccess;
  }
  function isWordToken(val) {
    return getKind(val) === TokenKind.Word;
  }
  function isRangeToken(val) {
    return getKind(val) === TokenKind.Range;
  }
  function getKind(val) {
    return val ? val.kind : -1;
  }
  var ParseStream = class {
    constructor(tokens, parseToken) {
      this.handlers = {};
      this.stopRequested = false;
      this.tokens = tokens;
      this.parseToken = parseToken;
    }
    on(name, cb) {
      this.handlers[name] = cb;
      return this;
    }
    trigger(event, arg) {
      const h = this.handlers[event];
      return h ? (h.call(this, arg), true) : false;
    }
    start() {
      this.trigger("start");
      let token;
      while (!this.stopRequested && (token = this.tokens.shift())) {
        if (this.trigger("token", token))
          continue;
        if (isTagToken(token) && this.trigger(`tag:${token.name}`, token)) {
          continue;
        }
        const template = this.parseToken(token, this.tokens);
        this.trigger("template", template);
      }
      if (!this.stopRequested)
        this.trigger("end");
      return this;
    }
    stop() {
      this.stopRequested = true;
      return this;
    }
  };
  var TemplateImpl = class {
    constructor(token) {
      this.token = token;
    }
  };
  function assert(predicate, message) {
    if (!predicate) {
      const msg = message ? message() : `expect ${predicate} to be true`;
      throw new AssertionError(msg);
    }
  }
  var NullDrop = class extends Drop {
    equals(value) {
      return isNil(toValue(value));
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return null;
    }
  };
  var EmptyDrop = class extends Drop {
    equals(value) {
      if (value instanceof EmptyDrop)
        return false;
      value = toValue(value);
      if (isString(value) || isArray(value))
        return value.length === 0;
      if (isObject(value))
        return Object.keys(value).length === 0;
      return false;
    }
    gt() {
      return false;
    }
    geq() {
      return false;
    }
    lt() {
      return false;
    }
    leq() {
      return false;
    }
    valueOf() {
      return "";
    }
  };
  var BlankDrop = class extends EmptyDrop {
    equals(value) {
      if (value === false)
        return true;
      if (isNil(toValue(value)))
        return true;
      if (isString(value))
        return /^\s*$/.test(value);
      return super.equals(value);
    }
  };
  var nil = new NullDrop();
  var literalValues = {
    "true": true,
    "false": false,
    "nil": nil,
    "null": nil,
    "empty": new EmptyDrop(),
    "blank": new BlankDrop()
  };
  var rHex = /[\da-fA-F]/;
  var rOct = /[0-7]/;
  var escapeChar = {
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	",
    v: "\v"
  };
  function hexVal(c) {
    const code = c.charCodeAt(0);
    if (code >= 97)
      return code - 87;
    if (code >= 65)
      return code - 55;
    return code - 48;
  }
  function parseStringLiteral(str) {
    let ret = "";
    for (let i = 1; i < str.length - 1; i++) {
      if (str[i] !== "\\") {
        ret += str[i];
        continue;
      }
      if (escapeChar[str[i + 1]] !== void 0) {
        ret += escapeChar[str[++i]];
      } else if (str[i + 1] === "u") {
        let val = 0;
        let j = i + 2;
        while (j <= i + 5 && rHex.test(str[j])) {
          val = val * 16 + hexVal(str[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      } else if (!rOct.test(str[i + 1])) {
        ret += str[++i];
      } else {
        let j = i + 1;
        let val = 0;
        while (j <= i + 3 && rOct.test(str[j])) {
          val = val * 8 + hexVal(str[j++]);
        }
        i = j - 1;
        ret += String.fromCharCode(val);
      }
    }
    return ret;
  }
  var Expression = class {
    constructor(tokens) {
      this.postfix = [...toPostfix(tokens)];
    }
    *evaluate(ctx, lenient) {
      assert(ctx, () => "unable to evaluate: context not defined");
      const operands = [];
      for (const token of this.postfix) {
        if (isOperatorToken(token)) {
          const r = yield operands.pop();
          const l = yield operands.pop();
          const result = evalOperatorToken(ctx.opts.operators, token, l, r, ctx);
          operands.push(result);
        } else {
          operands.push(yield evalToken(token, ctx, lenient && this.postfix.length === 1));
        }
      }
      return operands[0];
    }
  };
  function evalToken(token, ctx, lenient = false) {
    if (isPropertyAccessToken(token))
      return evalPropertyAccessToken(token, ctx, lenient);
    if (isRangeToken(token))
      return evalRangeToken(token, ctx);
    if (isLiteralToken(token))
      return evalLiteralToken(token);
    if (isNumberToken(token))
      return evalNumberToken(token);
    if (isWordToken(token))
      return token.getText();
    if (isQuotedToken(token))
      return evalQuotedToken(token);
  }
  function evalPropertyAccessToken(token, ctx, lenient) {
    const props = token.props.map((prop) => evalToken(prop, ctx, false));
    try {
      return ctx.get([token.propertyName, ...props]);
    } catch (e) {
      if (lenient && e.name === "InternalUndefinedVariableError")
        return null;
      throw new UndefinedVariableError(e, token);
    }
  }
  function evalNumberToken(token) {
    const str = token.whole.content + "." + (token.decimal ? token.decimal.content : "");
    return Number(str);
  }
  function evalQuotedToken(token) {
    return parseStringLiteral(token.getText());
  }
  function evalOperatorToken(operators, token, lhs, rhs, ctx) {
    const impl = operators[token.operator];
    return impl(lhs, rhs, ctx);
  }
  function evalLiteralToken(token) {
    return literalValues[token.literal];
  }
  function evalRangeToken(token, ctx) {
    const low = evalToken(token.lhs, ctx);
    const high = evalToken(token.rhs, ctx);
    return range(+low, +high + 1);
  }
  function* toPostfix(tokens) {
    const ops = [];
    for (const token of tokens) {
      if (isOperatorToken(token)) {
        while (ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence()) {
          yield ops.pop();
        }
        ops.push(token);
      } else
        yield token;
    }
    while (ops.length) {
      yield ops.pop();
    }
  }
  var Token = class {
    constructor(kind, input, begin, end, file) {
      this.kind = kind;
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
    getText() {
      return this.input.slice(this.begin, this.end);
    }
    getPosition() {
      let [row, col] = [1, 1];
      for (let i = 0; i < this.begin; i++) {
        if (this.input[i] === "\n") {
          row++;
          col = 1;
        } else
          col++;
      }
      return [row, col];
    }
    size() {
      return this.end - this.begin;
    }
  };
  var DelimitedToken = class extends Token {
    constructor(kind, content, input, begin, end, trimLeft2, trimRight2, file) {
      super(kind, input, begin, end, file);
      this.trimLeft = false;
      this.trimRight = false;
      this.content = this.getText();
      const tl = content[0] === "-";
      const tr = last(content) === "-";
      this.content = content.slice(tl ? 1 : 0, tr ? -1 : content.length).trim();
      this.trimLeft = tl || trimLeft2;
      this.trimRight = tr || trimRight2;
    }
  };
  function whiteSpaceCtrl(tokens, options) {
    let inRaw = false;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!isDelimitedToken(token))
        continue;
      if (!inRaw && token.trimLeft) {
        trimLeft(tokens[i - 1], options.greedy);
      }
      if (isTagToken(token)) {
        if (token.name === "raw")
          inRaw = true;
        else if (token.name === "endraw")
          inRaw = false;
      }
      if (!inRaw && token.trimRight) {
        trimRight(tokens[i + 1], options.greedy);
      }
    }
  }
  function trimLeft(token, greedy) {
    if (!token || !isHTMLToken(token))
      return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
      token.trimRight++;
  }
  function trimRight(token, greedy) {
    if (!token || !isHTMLToken(token))
      return;
    const mask = greedy ? BLANK : INLINE_BLANK;
    while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
      token.trimLeft++;
    if (token.input.charAt(token.begin + token.trimLeft) === "\n")
      token.trimLeft++;
  }
  var NumberToken = class extends Token {
    constructor(whole, decimal) {
      super(TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file);
      this.whole = whole;
      this.decimal = decimal;
    }
  };
  var IdentifierToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Word, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.content = this.getText();
    }
    isNumber(allowSign = false) {
      const begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN ? this.begin + 1 : this.begin;
      for (let i = begin; i < this.end; i++) {
        if (!(TYPES[this.input.charCodeAt(i)] & NUMBER))
          return false;
      }
      return true;
    }
  };
  var LiteralToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Literal, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.literal = this.getText();
    }
  };
  var precedence = {
    "==": 1,
    "!=": 1,
    ">": 1,
    "<": 1,
    ">=": 1,
    "<=": 1,
    "contains": 1,
    "and": 0,
    "or": 0
  };
  var OperatorToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Operator, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.operator = this.getText();
    }
    getPrecedence() {
      const key = this.getText();
      return key in precedence ? precedence[key] : 1;
    }
  };
  var PropertyAccessToken = class extends Token {
    constructor(variable, props, end) {
      super(TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file);
      this.variable = variable;
      this.props = props;
      this.propertyName = this.variable instanceof IdentifierToken ? this.variable.getText() : parseStringLiteral(this.variable.getText());
    }
  };
  var FilterToken = class extends Token {
    constructor(name, args, input, begin, end, file) {
      super(TokenKind.Filter, input, begin, end, file);
      this.name = name;
      this.args = args;
    }
  };
  var HashToken = class extends Token {
    constructor(input, begin, end, name, value, file) {
      super(TokenKind.Hash, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.name = name;
      this.value = value;
      this.file = file;
    }
  };
  var QuotedToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.Quoted, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
    }
  };
  var HTMLToken = class extends Token {
    constructor(input, begin, end, file) {
      super(TokenKind.HTML, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.file = file;
      this.trimLeft = 0;
      this.trimRight = 0;
    }
    getContent() {
      return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
    }
  };
  var RangeToken = class extends Token {
    constructor(input, begin, end, lhs, rhs, file) {
      super(TokenKind.Range, input, begin, end, file);
      this.input = input;
      this.begin = begin;
      this.end = end;
      this.lhs = lhs;
      this.rhs = rhs;
      this.file = file;
    }
  };
  var OutputToken = class extends DelimitedToken {
    constructor(input, begin, end, options, file) {
      const { trimOutputLeft, trimOutputRight, outputDelimiterLeft, outputDelimiterRight } = options;
      const value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
      super(TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file);
    }
  };
  function matchOperator(str, begin, trie, end = str.length) {
    let node = trie;
    let i = begin;
    let info;
    while (node[str[i]] && i < end) {
      node = node[str[i++]];
      if (node["end"])
        info = node;
    }
    if (!info)
      return -1;
    if (info["needBoundary"] && TYPES[str.charCodeAt(i)] & IDENTIFIER)
      return -1;
    return i;
  }
  var Tokenizer = class {
    constructor(input, trie, file = "") {
      this.input = input;
      this.trie = trie;
      this.file = file;
      this.p = 0;
      this.rawBeginAt = -1;
      this.N = input.length;
    }
    readExpression() {
      return new Expression(this.readExpressionTokens());
    }
    *readExpressionTokens() {
      const operand = this.readValue();
      if (!operand)
        return;
      yield operand;
      while (this.p < this.N) {
        const operator = this.readOperator();
        if (!operator)
          return;
        const operand2 = this.readValue();
        if (!operand2)
          return;
        yield operator;
        yield operand2;
      }
    }
    readOperator() {
      this.skipBlank();
      const end = matchOperator(this.input, this.p, this.trie, this.p + 8);
      if (end === -1)
        return;
      return new OperatorToken(this.input, this.p, this.p = end, this.file);
    }
    readFilters() {
      const filters = [];
      while (true) {
        const filter = this.readFilter();
        if (!filter)
          return filters;
        filters.push(filter);
      }
    }
    readFilter() {
      this.skipBlank();
      if (this.end())
        return null;
      assert(this.peek() === "|", () => `unexpected token at ${this.snapshot()}`);
      this.p++;
      const begin = this.p;
      const name = this.readIdentifier();
      if (!name.size())
        return null;
      const args = [];
      this.skipBlank();
      if (this.peek() === ":") {
        do {
          ++this.p;
          const arg = this.readFilterArg();
          arg && args.push(arg);
          while (this.p < this.N && this.peek() !== "," && this.peek() !== "|")
            ++this.p;
        } while (this.peek() === ",");
      }
      return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
    }
    readFilterArg() {
      const key = this.readValue();
      if (!key)
        return;
      this.skipBlank();
      if (this.peek() !== ":")
        return key;
      ++this.p;
      const value = this.readValue();
      return [key.getText(), value];
    }
    readTopLevelTokens(options = defaultOptions) {
      const tokens = [];
      while (this.p < this.N) {
        const token = this.readTopLevelToken(options);
        tokens.push(token);
      }
      whiteSpaceCtrl(tokens, options);
      return tokens;
    }
    readTopLevelToken(options) {
      const { tagDelimiterLeft, outputDelimiterLeft } = options;
      if (this.rawBeginAt > -1)
        return this.readEndrawOrRawContent(options);
      if (this.match(tagDelimiterLeft))
        return this.readTagToken(options);
      if (this.match(outputDelimiterLeft))
        return this.readOutputToken(options);
      return this.readHTMLToken(options);
    }
    readHTMLToken(options) {
      const begin = this.p;
      while (this.p < this.N) {
        const { tagDelimiterLeft, outputDelimiterLeft } = options;
        if (this.match(tagDelimiterLeft))
          break;
        if (this.match(outputDelimiterLeft))
          break;
        ++this.p;
      }
      return new HTMLToken(this.input, begin, this.p, this.file);
    }
    readTagToken(options = defaultOptions) {
      const { file, input } = this;
      const begin = this.p;
      if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
        throw this.mkError(`tag ${this.snapshot(begin)} not closed`, begin);
      }
      const token = new TagToken(input, begin, this.p, options, file);
      if (token.name === "raw")
        this.rawBeginAt = begin;
      return token;
    }
    readToDelimiter(delimiter) {
      while (this.p < this.N) {
        if (this.peekType() & QUOTE) {
          this.readQuoted();
          continue;
        }
        ++this.p;
        if (this.rmatch(delimiter))
          return this.p;
      }
      return -1;
    }
    readOutputToken(options = defaultOptions) {
      const { file, input } = this;
      const { outputDelimiterRight } = options;
      const begin = this.p;
      if (this.readToDelimiter(outputDelimiterRight) === -1) {
        throw this.mkError(`output ${this.snapshot(begin)} not closed`, begin);
      }
      return new OutputToken(input, begin, this.p, options, file);
    }
    readEndrawOrRawContent(options) {
      const { tagDelimiterLeft, tagDelimiterRight } = options;
      const begin = this.p;
      let leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
      while (this.p < this.N) {
        if (this.readIdentifier().getText() !== "endraw") {
          leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
          continue;
        }
        while (this.p <= this.N) {
          if (this.rmatch(tagDelimiterRight)) {
            const end = this.p;
            if (begin === leftPos) {
              this.rawBeginAt = -1;
              return new TagToken(this.input, begin, end, options, this.file);
            } else {
              this.p = leftPos;
              return new HTMLToken(this.input, begin, leftPos, this.file);
            }
          }
          if (this.rmatch(tagDelimiterLeft))
            break;
          this.p++;
        }
      }
      throw this.mkError(`raw ${this.snapshot(this.rawBeginAt)} not closed`, begin);
    }
    mkError(msg, begin) {
      return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
    }
    snapshot(begin = this.p) {
      return JSON.stringify(ellipsis(this.input.slice(begin), 16));
    }
    readWord() {
      console.warn("Tokenizer#readWord() will be removed, use #readIdentifier instead");
      return this.readIdentifier();
    }
    readIdentifier() {
      this.skipBlank();
      const begin = this.p;
      while (this.peekType() & IDENTIFIER)
        ++this.p;
      return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    readHashes() {
      const hashes = [];
      while (true) {
        const hash = this.readHash();
        if (!hash)
          return hashes;
        hashes.push(hash);
      }
    }
    readHash() {
      this.skipBlank();
      if (this.peek() === ",")
        ++this.p;
      const begin = this.p;
      const name = this.readIdentifier();
      if (!name.size())
        return;
      let value;
      this.skipBlank();
      if (this.peek() === ":") {
        ++this.p;
        value = this.readValue();
      }
      return new HashToken(this.input, begin, this.p, name, value, this.file);
    }
    remaining() {
      return this.input.slice(this.p);
    }
    advance(i = 1) {
      this.p += i;
    }
    end() {
      return this.p >= this.N;
    }
    readTo(end) {
      while (this.p < this.N) {
        ++this.p;
        if (this.rmatch(end))
          return this.p;
      }
      return -1;
    }
    readValue() {
      const value = this.readQuoted() || this.readRange();
      if (value)
        return value;
      if (this.peek() === "[") {
        this.p++;
        const prop = this.readQuoted();
        if (!prop)
          return;
        if (this.peek() !== "]")
          return;
        this.p++;
        return new PropertyAccessToken(prop, [], this.p);
      }
      const variable = this.readIdentifier();
      if (!variable.size())
        return;
      let isNumber2 = variable.isNumber(true);
      const props = [];
      while (true) {
        if (this.peek() === "[") {
          isNumber2 = false;
          this.p++;
          const prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
          this.readTo("]");
          props.push(prop);
        } else if (this.peek() === "." && this.peek(1) !== ".") {
          this.p++;
          const prop = this.readIdentifier();
          if (!prop.size())
            break;
          if (!prop.isNumber())
            isNumber2 = false;
          props.push(prop);
        } else
          break;
      }
      if (!props.length && literalValues.hasOwnProperty(variable.content)) {
        return new LiteralToken(this.input, variable.begin, variable.end, this.file);
      }
      if (isNumber2)
        return new NumberToken(variable, props[0]);
      return new PropertyAccessToken(variable, props, this.p);
    }
    readRange() {
      this.skipBlank();
      const begin = this.p;
      if (this.peek() !== "(")
        return;
      ++this.p;
      const lhs = this.readValueOrThrow();
      this.p += 2;
      const rhs = this.readValueOrThrow();
      ++this.p;
      return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
    }
    readValueOrThrow() {
      const value = this.readValue();
      assert(value, () => `unexpected token ${this.snapshot()}, value expected`);
      return value;
    }
    readQuoted() {
      this.skipBlank();
      const begin = this.p;
      if (!(this.peekType() & QUOTE))
        return;
      ++this.p;
      let escaped = false;
      while (this.p < this.N) {
        ++this.p;
        if (this.input[this.p - 1] === this.input[begin] && !escaped)
          break;
        if (escaped)
          escaped = false;
        else if (this.input[this.p - 1] === "\\")
          escaped = true;
      }
      return new QuotedToken(this.input, begin, this.p, this.file);
    }
    readFileName() {
      const begin = this.p;
      while (!(this.peekType() & BLANK) && this.peek() !== "," && this.p < this.N)
        this.p++;
      return new IdentifierToken(this.input, begin, this.p, this.file);
    }
    match(word) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== this.input[this.p + i])
          return false;
      }
      return true;
    }
    rmatch(pattern) {
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
          return false;
      }
      return true;
    }
    peekType(n = 0) {
      return TYPES[this.input.charCodeAt(this.p + n)];
    }
    peek(n = 0) {
      return this.input[this.p + n];
    }
    skipBlank() {
      while (this.peekType() & BLANK)
        ++this.p;
    }
  };
  var TagToken = class extends DelimitedToken {
    constructor(input, begin, end, options, file) {
      const { trimTagLeft, trimTagRight, tagDelimiterLeft, tagDelimiterRight } = options;
      const value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
      super(TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file);
      const tokenizer = new Tokenizer(this.content, options.operatorsTrie);
      this.name = tokenizer.readIdentifier().getText();
      if (!this.name)
        throw new TokenizationError(`illegal tag syntax`, this);
      tokenizer.skipBlank();
      this.args = tokenizer.remaining();
    }
  };
  var Hash = class {
    constructor(markup) {
      this.hash = {};
      const tokenizer = new Tokenizer(markup, {});
      for (const hash of tokenizer.readHashes()) {
        this.hash[hash.name.content] = hash.value;
      }
    }
    *render(ctx) {
      const hash = {};
      for (const key of Object.keys(this.hash)) {
        hash[key] = this.hash[key] === void 0 ? true : yield evalToken(this.hash[key], ctx);
      }
      return hash;
    }
  };
  function isKeyValuePair(arr) {
    return isArray(arr);
  }
  var Filter = class {
    constructor(name, impl, args, liquid) {
      this.name = name;
      this.impl = impl || identify;
      this.args = args;
      this.liquid = liquid;
    }
    render(value, context) {
      const argv = [];
      for (const arg of this.args) {
        if (isKeyValuePair(arg))
          argv.push([arg[0], evalToken(arg[1], context)]);
        else
          argv.push(evalToken(arg, context));
      }
      return this.impl.apply({ context, liquid: this.liquid }, [value, ...argv]);
    }
  };
  var Value = class {
    constructor(str, liquid) {
      this.filters = [];
      const tokenizer = new Tokenizer(str, liquid.options.operatorsTrie);
      this.initial = tokenizer.readExpression();
      this.filters = tokenizer.readFilters().map(({ name, args }) => new Filter(name, liquid.filters.get(name), args, liquid));
    }
    *value(ctx, lenient) {
      lenient = lenient || ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === "default";
      let val = yield this.initial.evaluate(ctx, lenient);
      for (const filter of this.filters) {
        val = yield filter.render(val, ctx);
      }
      return val;
    }
  };
  var Tag = class extends TemplateImpl {
    constructor(token, tokens, liquid) {
      super(token);
      this.name = token.name;
      const impl = liquid.tags.get(token.name);
      this.impl = Object.create(impl);
      this.impl.liquid = liquid;
      if (this.impl.parse) {
        this.impl.parse(token, tokens);
      }
    }
    *render(ctx, emitter) {
      const hash = yield new Hash(this.token.args).render(ctx);
      const impl = this.impl;
      if (isFunction(impl.render))
        return yield impl.render(ctx, emitter, hash);
    }
  };
  var Output = class extends TemplateImpl {
    constructor(token, liquid) {
      super(token);
      this.value = new Value(token.content, liquid);
    }
    *render(ctx, emitter) {
      const val = yield this.value.value(ctx, false);
      emitter.write(val);
    }
  };
  var HTML = class extends TemplateImpl {
    constructor(token) {
      super(token);
      this.str = token.getContent();
    }
    *render(ctx, emitter) {
      emitter.write(this.str);
    }
  };
  var Parser = class {
    constructor(liquid) {
      this.liquid = liquid;
      this.cache = this.liquid.options.cache;
      this.fs = this.liquid.options.fs;
      this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
      this.loader = new Loader(this.liquid.options);
    }
    parse(html, filepath) {
      const tokenizer = new Tokenizer(html, this.liquid.options.operatorsTrie, filepath);
      const tokens = tokenizer.readTopLevelTokens(this.liquid.options);
      return this.parseTokens(tokens);
    }
    parseTokens(tokens) {
      let token;
      const templates = [];
      while (token = tokens.shift()) {
        templates.push(this.parseToken(token, tokens));
      }
      return templates;
    }
    parseToken(token, remainTokens) {
      try {
        if (isTagToken(token)) {
          return new Tag(token, remainTokens, this.liquid);
        }
        if (isOutputToken(token)) {
          return new Output(token, this.liquid);
        }
        return new HTML(token);
      } catch (e) {
        throw new ParseError(e, token);
      }
    }
    parseStream(tokens) {
      return new ParseStream(tokens, (token, tokens2) => this.parseToken(token, tokens2));
    }
    *_parseFileCached(file, sync, type = LookupType.Root, currentFile) {
      const key = this.loader.shouldLoadRelative(file) ? currentFile + "," + file : type + ":" + file;
      let templates = yield this.cache.read(key);
      if (templates)
        return templates;
      templates = yield this._parseFile(file, sync, type, currentFile);
      this.cache.write(key, templates);
      return templates;
    }
    *_parseFile(file, sync, type = LookupType.Root, currentFile) {
      const filepath = yield this.loader.lookup(file, type, sync, currentFile);
      return this.liquid.parse(sync ? this.fs.readFileSync(filepath) : yield this.fs.readFile(filepath), filepath);
    }
  };
  var assign = {
    parse: function(token) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this.key = tokenizer.readIdentifier().content;
      tokenizer.skipBlank();
      assert(tokenizer.peek() === "=", () => `illegal token ${token.getText()}`);
      tokenizer.advance();
      this.value = tokenizer.remaining();
    },
    render: function* (ctx) {
      ctx.bottom()[this.key] = yield this.liquid._evalValue(this.value, ctx);
    }
  };
  function toEnumerable(val) {
    if (isArray(val))
      return val;
    if (isString(val) && val.length > 0)
      return [val];
    if (isObject(val))
      return Object.keys(val).map((key) => [key, val[key]]);
    return [];
  }
  function toArray(val) {
    if (isArray(val))
      return val;
    return [val];
  }
  var ForloopDrop = class extends Drop {
    constructor(length, collection, variable) {
      super();
      this.i = 0;
      this.length = length;
      this.name = `${variable}-${collection}`;
    }
    next() {
      this.i++;
    }
    index0() {
      return this.i;
    }
    index() {
      return this.i + 1;
    }
    first() {
      return this.i === 0;
    }
    last() {
      return this.i === this.length - 1;
    }
    rindex() {
      return this.length - this.i;
    }
    rindex0() {
      return this.length - this.i - 1;
    }
    valueOf() {
      return JSON.stringify(this);
    }
  };
  var MODIFIERS = ["offset", "limit", "reversed"];
  var For = {
    type: "block",
    parse: function(token, remainTokens) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      const variable = tokenizer.readIdentifier();
      const inStr = tokenizer.readIdentifier();
      const collection = tokenizer.readValue();
      assert(variable.size() && inStr.content === "in" && collection, () => `illegal tag: ${token.getText()}`);
      this.variable = variable.content;
      this.collection = collection;
      this.hash = new Hash(tokenizer.remaining());
      this.templates = [];
      this.elseTemplates = [];
      let p;
      const stream = this.liquid.parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:else", () => p = this.elseTemplates).on("tag:endfor", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${token.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      let collection = toEnumerable(yield evalToken(this.collection, ctx));
      if (!collection.length) {
        yield r.renderTemplates(this.elseTemplates, ctx, emitter);
        return;
      }
      const hash = yield this.hash.render(ctx);
      const modifiers = this.liquid.options.orderedFilterParameters ? Object.keys(hash).filter((x) => MODIFIERS.includes(x)) : MODIFIERS.filter((x) => hash[x] !== void 0);
      collection = modifiers.reduce((collection2, modifier) => {
        if (modifier === "offset")
          return offset(collection2, hash["offset"]);
        if (modifier === "limit")
          return limit(collection2, hash["limit"]);
        return reversed(collection2);
      }, collection);
      const scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
      ctx.push(scope);
      for (const item of collection) {
        scope[this.variable] = item;
        yield r.renderTemplates(this.templates, ctx, emitter);
        if (emitter["break"]) {
          emitter["break"] = false;
          break;
        }
        emitter["continue"] = false;
        scope.forloop.next();
      }
      ctx.pop();
    }
  };
  function reversed(arr) {
    return [...arr].reverse();
  }
  function offset(arr, count) {
    return arr.slice(count);
  }
  function limit(arr, count) {
    return arr.slice(0, count);
  }
  var capture = {
    parse: function(tagToken, remainTokens) {
      const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
      this.variable = readVariableName(tokenizer);
      assert(this.variable, () => `${tagToken.args} not valid identifier`);
      this.templates = [];
      const stream = this.liquid.parser.parseStream(remainTokens);
      stream.on("tag:endcapture", () => stream.stop()).on("template", (tpl) => this.templates.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx) {
      const r = this.liquid.renderer;
      const html = yield r.renderTemplates(this.templates, ctx);
      ctx.bottom()[this.variable] = html;
    }
  };
  function readVariableName(tokenizer) {
    const word = tokenizer.readIdentifier().content;
    if (word)
      return word;
    const quoted = tokenizer.readQuoted();
    if (quoted)
      return evalQuotedToken(quoted);
  }
  var Case = {
    parse: function(tagToken, remainTokens) {
      this.cond = new Value(tagToken.args, this.liquid);
      this.cases = [];
      this.elseTemplates = [];
      let p = [];
      const stream = this.liquid.parser.parseStream(remainTokens).on("tag:when", (token) => {
        p = [];
        const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
        while (!tokenizer.end()) {
          const value = tokenizer.readValue();
          this.cases.push({
            val: value,
            templates: p
          });
          tokenizer.readTo(",");
        }
      }).on("tag:else", () => p = this.elseTemplates).on("tag:endcase", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      const cond = toValue(yield this.cond.value(ctx, ctx.opts.lenientIf));
      for (const branch of this.cases) {
        const val = evalToken(branch.val, ctx, ctx.opts.lenientIf);
        if (val === cond) {
          yield r.renderTemplates(branch.templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  };
  var comment = {
    parse: function(tagToken, remainTokens) {
      const stream = this.liquid.parser.parseStream(remainTokens);
      stream.on("token", (token) => {
        if (token.name === "endcomment")
          stream.stop();
      }).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    }
  };
  var BlockMode;
  (function(BlockMode2) {
    BlockMode2[BlockMode2["OUTPUT"] = 0] = "OUTPUT";
    BlockMode2[BlockMode2["STORE"] = 1] = "STORE";
  })(BlockMode || (BlockMode = {}));
  var BlockMode$1 = BlockMode;
  var render = {
    parseFilePath,
    renderFilePath,
    parse: function(token) {
      const args = token.args;
      const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
      this["file"] = this.parseFilePath(tokenizer, this.liquid);
      this["currentFile"] = token.file;
      while (!tokenizer.end()) {
        tokenizer.skipBlank();
        const begin = tokenizer.p;
        const keyword = tokenizer.readIdentifier();
        if (keyword.content === "with" || keyword.content === "for") {
          tokenizer.skipBlank();
          if (tokenizer.peek() !== ":") {
            const value = tokenizer.readValue();
            if (value) {
              const beforeAs = tokenizer.p;
              const asStr = tokenizer.readIdentifier();
              let alias;
              if (asStr.content === "as")
                alias = tokenizer.readIdentifier();
              else
                tokenizer.p = beforeAs;
              this[keyword.content] = { value, alias: alias && alias.content };
              tokenizer.skipBlank();
              if (tokenizer.peek() === ",")
                tokenizer.advance();
              continue;
            }
          }
        }
        tokenizer.p = begin;
        break;
      }
      this.hash = new Hash(tokenizer.remaining());
    },
    render: function* (ctx, emitter) {
      const { liquid, hash } = this;
      const filepath = yield this.renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal filename "${filepath}"`);
      const childCtx = new Context({}, ctx.opts, ctx.sync);
      const scope = yield hash.render(ctx);
      if (this["with"]) {
        const { value, alias } = this["with"];
        scope[alias || filepath] = evalToken(value, ctx);
      }
      childCtx.push(scope);
      if (this["for"]) {
        const { value, alias } = this["for"];
        let collection = evalToken(value, ctx);
        collection = toEnumerable(collection);
        scope["forloop"] = new ForloopDrop(collection.length, value.getText(), alias);
        for (const item of collection) {
          scope[alias] = item;
          const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
          yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
          scope.forloop.next();
        }
      } else {
        const templates = yield liquid._parsePartialFile(filepath, childCtx.sync, this["currentFile"]);
        yield liquid.renderer.renderTemplates(templates, childCtx, emitter);
      }
    }
  };
  function parseFilePath(tokenizer, liquid) {
    if (liquid.options.dynamicPartials) {
      const file = tokenizer.readValue();
      if (file === void 0)
        throw new TypeError(`illegal argument "${tokenizer.input}"`);
      if (file.getText() === "none")
        return null;
      if (isQuotedToken(file)) {
        const tpls = liquid.parse(evalQuotedToken(file));
        if (tpls.length === 1 && isHTMLToken(tpls[0].token))
          return tpls[0].token.getContent();
        return tpls;
      }
      return file;
    }
    const filepath = tokenizer.readFileName().getText();
    return filepath === "none" ? null : filepath;
  }
  function renderFilePath(file, ctx, liquid) {
    if (typeof file === "string")
      return file;
    if (Array.isArray(file))
      return liquid.renderer.renderTemplates(file, ctx);
    return evalToken(file, ctx);
  }
  var include = {
    parseFilePath,
    renderFilePath,
    parse: function(token) {
      const args = token.args;
      const tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
      this["file"] = this.parseFilePath(tokenizer, this.liquid);
      this["currentFile"] = token.file;
      const begin = tokenizer.p;
      const withStr = tokenizer.readIdentifier();
      if (withStr.content === "with") {
        tokenizer.skipBlank();
        if (tokenizer.peek() !== ":") {
          this.withVar = tokenizer.readValue();
        } else
          tokenizer.p = begin;
      } else
        tokenizer.p = begin;
      this.hash = new Hash(tokenizer.remaining());
    },
    render: function* (ctx, emitter) {
      const { liquid, hash, withVar } = this;
      const { renderer } = liquid;
      const filepath = yield this.renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal filename "${filepath}"`);
      const saved = ctx.saveRegister("blocks", "blockMode");
      ctx.setRegister("blocks", {});
      ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
      const scope = yield hash.render(ctx);
      if (withVar)
        scope[filepath] = evalToken(withVar, ctx);
      const templates = yield liquid._parsePartialFile(filepath, ctx.sync, this["currentFile"]);
      ctx.push(scope);
      yield renderer.renderTemplates(templates, ctx, emitter);
      ctx.pop();
      ctx.restoreRegister(saved);
    }
  };
  var decrement = {
    parse: function(token) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this.variable = tokenizer.readIdentifier().content;
    },
    render: function(context, emitter) {
      const scope = context.environments;
      if (!isNumber(scope[this.variable])) {
        scope[this.variable] = 0;
      }
      emitter.write(stringify(--scope[this.variable]));
    }
  };
  var cycle = {
    parse: function(tagToken) {
      const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
      const group = tokenizer.readValue();
      tokenizer.skipBlank();
      this.candidates = [];
      if (group) {
        if (tokenizer.peek() === ":") {
          this.group = group;
          tokenizer.advance();
        } else
          this.candidates.push(group);
      }
      while (!tokenizer.end()) {
        const value = tokenizer.readValue();
        if (value)
          this.candidates.push(value);
        tokenizer.readTo(",");
      }
      assert(this.candidates.length, () => `empty candidates: ${tagToken.getText()}`);
    },
    render: function(ctx, emitter) {
      const group = evalToken(this.group, ctx);
      const fingerprint = `cycle:${group}:` + this.candidates.join(",");
      const groups = ctx.getRegister("cycle");
      let idx = groups[fingerprint];
      if (idx === void 0) {
        idx = groups[fingerprint] = 0;
      }
      const candidate = this.candidates[idx];
      idx = (idx + 1) % this.candidates.length;
      groups[fingerprint] = idx;
      const html = evalToken(candidate, ctx);
      emitter.write(html);
    }
  };
  var If = {
    parse: function(tagToken, remainTokens) {
      this.branches = [];
      this.elseTemplates = [];
      let p;
      this.liquid.parser.parseStream(remainTokens).on("start", () => this.branches.push({
        predicate: new Value(tagToken.args, this.liquid),
        templates: p = []
      })).on("tag:elsif", (token) => this.branches.push({
        predicate: new Value(token.args, this.liquid),
        templates: p = []
      })).on("tag:else", () => p = this.elseTemplates).on("tag:endif", function() {
        this.stop();
      }).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      }).start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      for (const { predicate, templates } of this.branches) {
        const value = yield predicate.value(ctx, ctx.opts.lenientIf);
        if (isTruthy(value, ctx)) {
          yield r.renderTemplates(templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  };
  var increment = {
    parse: function(token) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this.variable = tokenizer.readIdentifier().content;
    },
    render: function(context, emitter) {
      const scope = context.environments;
      if (!isNumber(scope[this.variable])) {
        scope[this.variable] = 0;
      }
      const val = scope[this.variable];
      scope[this.variable]++;
      emitter.write(stringify(val));
    }
  };
  var layout = {
    parseFilePath,
    renderFilePath,
    parse: function(token, remainTokens) {
      const tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
      this["file"] = this.parseFilePath(tokenizer, this.liquid);
      this["currentFile"] = token.file;
      this.hash = new Hash(tokenizer.remaining());
      this.tpls = this.liquid.parser.parseTokens(remainTokens);
    },
    render: function* (ctx, emitter) {
      const { liquid, hash, file } = this;
      const { renderer } = liquid;
      if (file === null) {
        ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
        yield renderer.renderTemplates(this.tpls, ctx, emitter);
        return;
      }
      const filepath = yield this.renderFilePath(this["file"], ctx, liquid);
      assert(filepath, () => `illegal filename "${filepath}"`);
      const templates = yield liquid._parseLayoutFile(filepath, ctx.sync, this["currentFile"]);
      ctx.setRegister("blockMode", BlockMode$1.STORE);
      const html = yield renderer.renderTemplates(this.tpls, ctx);
      const blocks = ctx.getRegister("blocks");
      if (blocks[""] === void 0)
        blocks[""] = (parent, emitter2) => emitter2.write(html);
      ctx.setRegister("blockMode", BlockMode$1.OUTPUT);
      ctx.push(yield hash.render(ctx));
      yield renderer.renderTemplates(templates, ctx, emitter);
      ctx.pop();
    }
  };
  var BlockDrop = class extends Drop {
    constructor(superBlockRender = () => "") {
      super();
      this.superBlockRender = superBlockRender;
    }
    super() {
      return this.superBlockRender();
    }
  };
  var block = {
    parse(token, remainTokens) {
      const match = /\w+/.exec(token.args);
      this.block = match ? match[0] : "";
      this.tpls = [];
      this.liquid.parser.parseStream(remainTokens).on("tag:endblock", function() {
        this.stop();
      }).on("template", (tpl) => this.tpls.push(tpl)).on("end", () => {
        throw new Error(`tag ${token.getText()} not closed`);
      }).start();
    },
    *render(ctx, emitter) {
      const blockRender = this.getBlockRender(ctx);
      if (ctx.getRegister("blockMode") === BlockMode$1.STORE) {
        ctx.getRegister("blocks")[this.block] = blockRender;
      } else {
        yield blockRender(new BlockDrop(), emitter);
      }
    },
    getBlockRender(ctx) {
      const { liquid, tpls } = this;
      const renderChild = ctx.getRegister("blocks")[this.block];
      const renderCurrent = function* (superBlock, emitter) {
        ctx.push({ block: superBlock });
        yield liquid.renderer.renderTemplates(tpls, ctx, emitter);
        ctx.pop();
      };
      return renderChild ? (superBlock, emitter) => renderChild(new BlockDrop(() => renderCurrent(superBlock, emitter)), emitter) : renderCurrent;
    }
  };
  var raw = {
    parse: function(tagToken, remainTokens) {
      this.tokens = [];
      const stream = this.liquid.parser.parseStream(remainTokens);
      stream.on("token", (token) => {
        if (token.name === "endraw")
          stream.stop();
        else
          this.tokens.push(token);
      }).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function() {
      return this.tokens.map((token) => token.getText()).join("");
    }
  };
  var TablerowloopDrop = class extends ForloopDrop {
    constructor(length, cols, collection, variable) {
      super(length, collection, variable);
      this.length = length;
      this.cols = cols;
    }
    row() {
      return Math.floor(this.i / this.cols) + 1;
    }
    col0() {
      return this.i % this.cols;
    }
    col() {
      return this.col0() + 1;
    }
    col_first() {
      return this.col0() === 0;
    }
    col_last() {
      return this.col() === this.cols;
    }
  };
  var tablerow = {
    parse: function(tagToken, remainTokens) {
      const tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
      const variable = tokenizer.readIdentifier();
      tokenizer.skipBlank();
      const tmp = tokenizer.readIdentifier();
      assert(tmp && tmp.content === "in", () => `illegal tag: ${tagToken.getText()}`);
      this.variable = variable.content;
      this.collection = tokenizer.readValue();
      this.hash = new Hash(tokenizer.remaining());
      this.templates = [];
      let p;
      const stream = this.liquid.parser.parseStream(remainTokens).on("start", () => p = this.templates).on("tag:endtablerow", () => stream.stop()).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      });
      stream.start();
    },
    render: function* (ctx, emitter) {
      let collection = toEnumerable(yield evalToken(this.collection, ctx));
      const hash = yield this.hash.render(ctx);
      const offset2 = hash.offset || 0;
      const limit2 = hash.limit === void 0 ? collection.length : hash.limit;
      collection = collection.slice(offset2, offset2 + limit2);
      const cols = hash.cols || collection.length;
      const r = this.liquid.renderer;
      const tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
      const scope = { tablerowloop };
      ctx.push(scope);
      for (let idx = 0; idx < collection.length; idx++, tablerowloop.next()) {
        scope[this.variable] = collection[idx];
        if (tablerowloop.col0() === 0) {
          if (tablerowloop.row() !== 1)
            emitter.write("</tr>");
          emitter.write(`<tr class="row${tablerowloop.row()}">`);
        }
        emitter.write(`<td class="col${tablerowloop.col()}">`);
        yield r.renderTemplates(this.templates, ctx, emitter);
        emitter.write("</td>");
      }
      if (collection.length)
        emitter.write("</tr>");
      ctx.pop();
    }
  };
  var unless = {
    parse: function(tagToken, remainTokens) {
      this.branches = [];
      this.elseTemplates = [];
      let p;
      this.liquid.parser.parseStream(remainTokens).on("start", () => this.branches.push({
        predicate: new Value(tagToken.args, this.liquid),
        test: isFalsy,
        templates: p = []
      })).on("tag:elsif", (token) => this.branches.push({
        predicate: new Value(token.args, this.liquid),
        test: isTruthy,
        templates: p = []
      })).on("tag:else", () => p = this.elseTemplates).on("tag:endunless", function() {
        this.stop();
      }).on("template", (tpl) => p.push(tpl)).on("end", () => {
        throw new Error(`tag ${tagToken.getText()} not closed`);
      }).start();
    },
    render: function* (ctx, emitter) {
      const r = this.liquid.renderer;
      for (const { predicate, test, templates } of this.branches) {
        const value = yield predicate.value(ctx, ctx.opts.lenientIf);
        if (test(value, ctx)) {
          yield r.renderTemplates(templates, ctx, emitter);
          return;
        }
      }
      yield r.renderTemplates(this.elseTemplates, ctx, emitter);
    }
  };
  var Break = {
    render: function(ctx, emitter) {
      emitter["break"] = true;
    }
  };
  var Continue = {
    render: function(ctx, emitter) {
      emitter["continue"] = true;
    }
  };
  var tags = {
    assign,
    "for": For,
    capture,
    "case": Case,
    comment,
    include,
    render,
    decrement,
    increment,
    cycle,
    "if": If,
    layout,
    block,
    raw,
    tablerow,
    unless,
    "break": Break,
    "continue": Continue
  };
  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  };
  var unescapeMap = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#34;": '"',
    "&#39;": "'"
  };
  function escape(str) {
    return stringify(str).replace(/&|<|>|"|'/g, (m) => escapeMap[m]);
  }
  function unescape(str) {
    return String(str).replace(/&(amp|lt|gt|#34|#39);/g, (m) => unescapeMap[m]);
  }
  function escapeOnce(str) {
    return escape(unescape(str));
  }
  function newlineToBr(v) {
    return v.replace(/\n/g, "<br />\n");
  }
  function stripHtml(v) {
    return v.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, "");
  }
  var abs = Math.abs;
  var atLeast = Math.max;
  var atMost = Math.min;
  var ceil = Math.ceil;
  var dividedBy = (v, arg) => v / arg;
  var floor = Math.floor;
  var minus = (v, arg) => v - arg;
  var modulo = (v, arg) => v % arg;
  var times = (v, arg) => v * arg;
  function round(v, arg = 0) {
    const amp = Math.pow(10, arg);
    return Math.round(v * amp) / amp;
  }
  function plus(v, arg) {
    return Number(v) + Number(arg);
  }
  function sortNatural(input, property) {
    if (!input || !input.sort)
      return [];
    if (property !== void 0) {
      return [...input].sort((lhs, rhs) => caseInsensitiveCompare(lhs[property], rhs[property]));
    }
    return [...input].sort(caseInsensitiveCompare);
  }
  var urlDecode = (x) => x.split("+").map(decodeURIComponent).join(" ");
  var urlEncode = (x) => x.split(" ").map(encodeURIComponent).join("+");
  var join = (v, arg) => v.join(arg === void 0 ? " " : arg);
  var last$1 = (v) => isArray(v) ? last(v) : "";
  var first = (v) => isArray(v) ? v[0] : "";
  var reverse = (v) => [...v].reverse();
  function sort(arr, property) {
    const getValue = (obj) => property ? this.context.getFromScope(obj, property.split(".")) : obj;
    return toArray(arr).sort((lhs, rhs) => {
      lhs = getValue(lhs);
      rhs = getValue(rhs);
      return lhs < rhs ? -1 : lhs > rhs ? 1 : 0;
    });
  }
  var size = (v) => v && v.length || 0;
  function map(arr, property) {
    return toArray(arr).map((obj) => this.context.getFromScope(obj, property.split(".")));
  }
  function compact(arr) {
    return toArray(arr).filter((x) => !isNil(x));
  }
  function concat(v, arg) {
    return toArray(v).concat(arg);
  }
  function slice(v, begin, length = 1) {
    begin = begin < 0 ? v.length + begin : begin;
    return v.slice(begin, begin + length);
  }
  function where(arr, property, expected) {
    return toArray(arr).filter((obj) => {
      const value = this.context.getFromScope(obj, String(property).split("."));
      return expected === void 0 ? isTruthy(value, this.context) : value === expected;
    });
  }
  function uniq(arr) {
    const u = {};
    return (arr || []).filter((val) => {
      if (u.hasOwnProperty(String(val)))
        return false;
      u[String(val)] = true;
      return true;
    });
  }
  var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var monthNamesShort = monthNames.map(abbr);
  var dayNamesShort = dayNames.map(abbr);
  var suffixes = {
    1: "st",
    2: "nd",
    3: "rd",
    "default": "th"
  };
  function abbr(str) {
    return str.slice(0, 3);
  }
  function daysInMonth(d) {
    const feb = isLeapYear(d) ? 29 : 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  function getDayOfYear(d) {
    let num = 0;
    for (let i = 0; i < d.getMonth(); ++i) {
      num += daysInMonth(d)[i];
    }
    return num + d.getDate();
  }
  function getWeekOfYear(d, startDay) {
    const now = getDayOfYear(d) + (startDay - d.getDay());
    const jan1 = new Date(d.getFullYear(), 0, 1);
    const then = 7 - jan1.getDay() + startDay;
    return String(Math.floor((now - then) / 7) + 1);
  }
  function isLeapYear(d) {
    const year = d.getFullYear();
    return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
  }
  function getSuffix(d) {
    const str = d.getDate().toString();
    const index = parseInt(str.slice(-1));
    return suffixes[index] || suffixes["default"];
  }
  function century(d) {
    return parseInt(d.getFullYear().toString().substring(0, 2), 10);
  }
  var padWidths = {
    d: 2,
    e: 2,
    H: 2,
    I: 2,
    j: 3,
    k: 2,
    l: 2,
    L: 3,
    m: 2,
    M: 2,
    S: 2,
    U: 2,
    W: 2
  };
  var padChars = {
    a: " ",
    A: " ",
    b: " ",
    B: " ",
    c: " ",
    e: " ",
    k: " ",
    l: " ",
    p: " ",
    P: " "
  };
  var formatCodes = {
    a: (d) => dayNamesShort[d.getDay()],
    A: (d) => dayNames[d.getDay()],
    b: (d) => monthNamesShort[d.getMonth()],
    B: (d) => monthNames[d.getMonth()],
    c: (d) => d.toLocaleString(),
    C: (d) => century(d),
    d: (d) => d.getDate(),
    e: (d) => d.getDate(),
    H: (d) => d.getHours(),
    I: (d) => String(d.getHours() % 12 || 12),
    j: (d) => getDayOfYear(d),
    k: (d) => d.getHours(),
    l: (d) => String(d.getHours() % 12 || 12),
    L: (d) => d.getMilliseconds(),
    m: (d) => d.getMonth() + 1,
    M: (d) => d.getMinutes(),
    N: (d, opts) => {
      const width = Number(opts.width) || 9;
      const str = String(d.getMilliseconds()).substr(0, width);
      return padEnd(str, width, "0");
    },
    p: (d) => d.getHours() < 12 ? "AM" : "PM",
    P: (d) => d.getHours() < 12 ? "am" : "pm",
    q: (d) => getSuffix(d),
    s: (d) => Math.round(d.valueOf() / 1e3),
    S: (d) => d.getSeconds(),
    u: (d) => d.getDay() || 7,
    U: (d) => getWeekOfYear(d, 0),
    w: (d) => d.getDay(),
    W: (d) => getWeekOfYear(d, 1),
    x: (d) => d.toLocaleDateString(),
    X: (d) => d.toLocaleTimeString(),
    y: (d) => d.getFullYear().toString().substring(2, 4),
    Y: (d) => d.getFullYear(),
    z: (d, opts) => {
      const nOffset = Math.abs(d.getTimezoneOffset());
      const h = Math.floor(nOffset / 60);
      const m = nOffset % 60;
      return (d.getTimezoneOffset() > 0 ? "-" : "+") + padStart(h, 2, "0") + (opts.flags[":"] ? ":" : "") + padStart(m, 2, "0");
    },
    "t": () => "	",
    "n": () => "\n",
    "%": () => "%"
  };
  formatCodes.h = formatCodes.b;
  function strftime(d, formatStr) {
    let output = "";
    let remaining = formatStr;
    let match;
    while (match = rFormat.exec(remaining)) {
      output += remaining.slice(0, match.index);
      remaining = remaining.slice(match.index + match[0].length);
      output += format(d, match);
    }
    return output + remaining;
  }
  function format(d, match) {
    const [input, flagStr = "", width, modifier, conversion] = match;
    const convert = formatCodes[conversion];
    if (!convert)
      return input;
    const flags = {};
    for (const flag of flagStr)
      flags[flag] = true;
    let ret = String(convert(d, { flags, width, modifier }));
    let padChar = padChars[conversion] || "0";
    let padWidth = width || padWidths[conversion] || 0;
    if (flags["^"])
      ret = ret.toUpperCase();
    else if (flags["#"])
      ret = changeCase(ret);
    if (flags["_"])
      padChar = " ";
    else if (flags["0"])
      padChar = "0";
    if (flags["-"])
      padWidth = 0;
    return padStart(ret, padWidth, padChar);
  }
  var OneMinute = 6e4;
  var hostTimezoneOffset = new Date().getTimezoneOffset();
  var ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
  var TimezoneDate = class extends Date {
    constructor(init, timezoneOffset) {
      if (init instanceof TimezoneDate)
        return init;
      const diff = (hostTimezoneOffset - timezoneOffset) * OneMinute;
      const time = new Date(init).getTime() + diff;
      super(time);
      this.timezoneOffset = timezoneOffset;
    }
    getTimezoneOffset() {
      return this.timezoneOffset;
    }
    static createDateFixedToTimezone(dateString) {
      const m = dateString.match(ISO8601_TIMEZONE_PATTERN);
      if (m && m[1] === "Z") {
        return new TimezoneDate(+new Date(dateString), 0);
      }
      if (m && m[2] && m[3] && m[4]) {
        const [, , sign, hours, minutes] = m;
        const delta = (sign === "+" ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
        return new TimezoneDate(+new Date(dateString), delta);
      }
      return new Date(dateString);
    }
  };
  function date(v, arg) {
    const opts = this.context.opts;
    let date2;
    if (v === "now" || v === "today") {
      date2 = new Date();
    } else if (isNumber(v)) {
      date2 = new Date(v * 1e3);
    } else if (isString(v)) {
      if (/^\d+$/.test(v)) {
        date2 = new Date(+v * 1e3);
      } else if (opts.preserveTimezones) {
        date2 = TimezoneDate.createDateFixedToTimezone(v);
      } else {
        date2 = new Date(v);
      }
    } else {
      date2 = v;
    }
    if (!isValidDate(date2))
      return v;
    if (opts.hasOwnProperty("timezoneOffset")) {
      date2 = new TimezoneDate(date2, opts.timezoneOffset);
    }
    return strftime(date2, arg);
  }
  function isValidDate(date2) {
    return date2 instanceof Date && !isNaN(date2.getTime());
  }
  function Default(v, arg) {
    if (isArray(v) || isString(v))
      return v.length ? v : arg;
    return isFalsy(toValue(v), this.context) ? arg : v;
  }
  function json(v) {
    return JSON.stringify(v);
  }
  function append(v, arg) {
    assert(arguments.length === 2, () => "append expect 2 arguments");
    return stringify(v) + stringify(arg);
  }
  function prepend(v, arg) {
    assert(arguments.length === 2, () => "prepend expect 2 arguments");
    return stringify(arg) + stringify(v);
  }
  function lstrip(v) {
    return stringify(v).replace(/^\s+/, "");
  }
  function downcase(v) {
    return stringify(v).toLowerCase();
  }
  function upcase(str) {
    return stringify(str).toUpperCase();
  }
  function remove(v, arg) {
    return stringify(v).split(String(arg)).join("");
  }
  function removeFirst(v, l) {
    return stringify(v).replace(String(l), "");
  }
  function rstrip(str) {
    return stringify(str).replace(/\s+$/, "");
  }
  function split(v, arg) {
    return stringify(v).split(String(arg));
  }
  function strip(v) {
    return stringify(v).trim();
  }
  function stripNewlines(v) {
    return stringify(v).replace(/\n/g, "");
  }
  function capitalize(str) {
    str = stringify(str);
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  function replace(v, pattern, replacement) {
    return stringify(v).split(String(pattern)).join(replacement);
  }
  function replaceFirst(v, arg1, arg2) {
    return stringify(v).replace(String(arg1), arg2);
  }
  function truncate(v, l = 50, o = "...") {
    v = stringify(v);
    if (v.length <= l)
      return v;
    return v.substr(0, l - o.length) + o;
  }
  function truncatewords(v, l = 15, o = "...") {
    const arr = v.split(/\s+/);
    let ret = arr.slice(0, l).join(" ");
    if (arr.length >= l)
      ret += o;
    return ret;
  }
  var builtinFilters = /* @__PURE__ */ Object.freeze({
    escape,
    escapeOnce,
    newlineToBr,
    stripHtml,
    abs,
    atLeast,
    atMost,
    ceil,
    dividedBy,
    floor,
    minus,
    modulo,
    times,
    round,
    plus,
    sortNatural,
    urlDecode,
    urlEncode,
    join,
    last: last$1,
    first,
    reverse,
    sort,
    size,
    map,
    compact,
    concat,
    slice,
    where,
    uniq,
    date,
    Default,
    json,
    append,
    prepend,
    lstrip,
    downcase,
    upcase,
    remove,
    removeFirst,
    rstrip,
    split,
    strip,
    stripNewlines,
    capitalize,
    replace,
    replaceFirst,
    truncate,
    truncatewords
  });
  var TagMap = class {
    constructor() {
      this.impls = {};
    }
    get(name) {
      const impl = this.impls[name];
      assert(impl, () => `tag "${name}" not found`);
      return impl;
    }
    set(name, impl) {
      this.impls[name] = impl;
    }
  };
  var FilterMap = class {
    constructor(strictFilters, liquid) {
      this.strictFilters = strictFilters;
      this.liquid = liquid;
      this.impls = {};
    }
    get(name) {
      const impl = this.impls[name];
      assert(impl || !this.strictFilters, () => `undefined filter: ${name}`);
      return impl;
    }
    set(name, impl) {
      this.impls[name] = impl;
    }
    create(name, args) {
      return new Filter(name, this.get(name), args, this.liquid);
    }
  };
  var Liquid = class {
    constructor(opts = {}) {
      this.options = applyDefault(normalize(opts));
      this.parser = new Parser(this);
      this.renderer = new Render();
      this.filters = new FilterMap(this.options.strictFilters, this);
      this.tags = new TagMap();
      forOwn(tags, (conf, name) => this.registerTag(snakeCase(name), conf));
      forOwn(builtinFilters, (handler, name) => this.registerFilter(snakeCase(name), handler));
    }
    parse(html, filepath) {
      return this.parser.parse(html, filepath);
    }
    _render(tpl, scope, sync) {
      const ctx = new Context(scope, this.options, sync);
      return this.renderer.renderTemplates(tpl, ctx);
    }
    async render(tpl, scope) {
      return toPromise(this._render(tpl, scope, false));
    }
    renderSync(tpl, scope) {
      return toValue$1(this._render(tpl, scope, true));
    }
    renderToNodeStream(tpl, scope) {
      const ctx = new Context(scope, this.options);
      return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
    }
    _parseAndRender(html, scope, sync) {
      const tpl = this.parse(html);
      return this._render(tpl, scope, sync);
    }
    async parseAndRender(html, scope) {
      return toPromise(this._parseAndRender(html, scope, false));
    }
    parseAndRenderSync(html, scope) {
      return toValue$1(this._parseAndRender(html, scope, true));
    }
    _parsePartialFile(file, sync, currentFile) {
      return this.parser.parseFile(file, sync, LookupType.Partials, currentFile);
    }
    _parseLayoutFile(file, sync, currentFile) {
      return this.parser.parseFile(file, sync, LookupType.Layouts, currentFile);
    }
    async parseFile(file) {
      return toPromise(this.parser.parseFile(file, false));
    }
    parseFileSync(file) {
      return toValue$1(this.parser.parseFile(file, true));
    }
    async renderFile(file, ctx) {
      const templates = await this.parseFile(file);
      return this.render(templates, ctx);
    }
    renderFileSync(file, ctx) {
      const templates = this.parseFileSync(file);
      return this.renderSync(templates, ctx);
    }
    async renderFileToNodeStream(file, scope) {
      const templates = await this.parseFile(file);
      return this.renderToNodeStream(templates, scope);
    }
    _evalValue(str, ctx) {
      const value = new Value(str, this);
      return value.value(ctx, false);
    }
    async evalValue(str, ctx) {
      return toPromise(this._evalValue(str, ctx));
    }
    evalValueSync(str, ctx) {
      return toValue$1(this._evalValue(str, ctx));
    }
    registerFilter(name, filter) {
      this.filters.set(name, filter);
    }
    registerTag(name, tag) {
      this.tags.set(name, tag);
    }
    plugin(plugin) {
      return plugin.call(this, Liquid);
    }
    express() {
      const self = this;
      let firstCall = true;
      return function(filePath, ctx, callback) {
        if (firstCall) {
          firstCall = false;
          self.options.root.unshift(...normalizeDirectoryList(this.root));
        }
        self.renderFile(filePath, ctx).then((html) => callback(null, html), callback);
      };
    }
  };

  // node_modules/@bookshop/eleventy-engine/lib/translateLiquid.js
  var quoteDynamicNames = (raw2) => {
    return raw2.replace(/\s_bookshop_(include_)?{{(.+)}}\s/, (_, include2, innards) => {
      return ` "_bookshop_${include2 || ""}{{${innards}}}" `;
    });
  };
  var rewriteTag = function(token, src, liveMarkup) {
    let raw2 = token.getText();
    if (token.kind === 16)
      return src;
    if (token.name && token.name.match(/^end/))
      return src;
    if (liveMarkup && token.name && token.name === "for") {
      raw2 = `${raw2}{% loop_context ${token.args} %}`;
    }
    if (liveMarkup && token.name && (token.name === "assign" || token.name === "local")) {
      let [, identifier, value] = token.args.match(/^[\r\n\s]*([^=]+?)[\r\n\s]*=[\r\n\s]*([\s\S]+?)[\r\n\s]*$/);
      raw2 = `${raw2}<!--bookshop-live context(${identifier}: (${value}))-->`;
    }
    if (token.name && token.name === "bookshop_include") {
      let componentName;
      token.name = "include";
      raw2 = raw2.replace(/bookshop_include[\r\n\s]+('|")?(\S+)/, (_, quote, component) => {
        componentName = component.replace(/('|")$/, "");
        return `include ${quote || ""}_bookshop_include_${component}`;
      });
      raw2 = quoteDynamicNames(raw2);
      if (liveMarkup) {
        let params = token.args.split(" ");
        params.shift();
        raw2 = `<!--bookshop-live name(${componentName}) params(${params.join(" ")})-->${raw2}<!--bookshop-live end-->`;
      }
    }
    if (token.name && token.name === "bookshop") {
      let componentName;
      token.name = "include";
      raw2 = raw2.replace(/bookshop[\r\n\s]+('|")?(\S+)/, (_, quote, component) => {
        componentName = component.replace(/('|")$/, "");
        return `include ${quote || ""}_bookshop_${component}`;
      });
      raw2 = quoteDynamicNames(raw2);
      if (liveMarkup) {
        let params = token.args.split(" ");
        params.shift();
        raw2 = `<!--bookshop-live name(${componentName}) params(${params.join(" ")})-->${raw2}<!--bookshop-live end-->`;
      }
    }
    return [
      src.substr(0, token.begin),
      raw2,
      src.substr(token.end)
    ].join("");
  };
  function translateLiquid_default(text, opts) {
    opts = {
      expandBindSyntax: true,
      liveMarkup: true,
      ...opts
    };
    text = text.toString();
    const tokenizer = new Tokenizer(text);
    const output = tokenizer.readTopLevelTokens();
    output.reverse().forEach((tag) => {
      text = rewriteTag(tag, text, opts.liveMarkup);
    });
    const unbind = opts.expandBindSyntax ? "{% unbind %}" : "";
    return `${unbind}${text}`;
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/unbind.js
  function unbind_default(Liquid2) {
    this.registerTag("unbind", {
      parse: function(token) {
      },
      render: function(ctx, hash) {
        const lastScope = ctx.scopes.length - 1;
        if (typeof ctx.scopes[lastScope].bind === "object") {
          ctx.scopes[lastScope] = {
            ...ctx.scopes[lastScope].bind,
            ...ctx.scopes[lastScope],
            bind: null
          };
        }
        return ``;
      }
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/slug-plugin.js
  var import_slugify = __toModule(require_slugify());
  function slug_plugin_default(Liquid2) {
    this.registerFilter("slug", (text) => {
      if (text && typeof text === "string")
        return (0, import_slugify.default)(text).toLowerCase();
      return text;
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/markdownify.js
  var import_markdown_it = __toModule(require_markdown_it());
  var md = new import_markdown_it.default({
    html: true
  });
  function markdownify_default(Liquid2) {
    this.registerFilter("markdownify", (input) => {
      return md.render(input ?? "");
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/loop_context.js
  function loop_context_default(Liquid2) {
    this.registerTag("loop_context", {
      parse: function(token) {
        this.args = token.args;
      },
      render: function(ctx, hash) {
        const argsString = this.args.replace(/\s+in\s+/, "=").split(" ")[0];
        return `<!--bookshop-live context(${argsString}[${ctx.get(["forloop", "index0"])}])-->`;
      }
    });
  }

  // node_modules/@bookshop/eleventy-engine/lib/plugins/url.js
  var url_default = (meta) => function(Liquid2) {
    this.registerFilter("url", (url) => {
      url = url || "";
      if (url.startsWith("/") && !url.startsWith("//")) {
        if (meta.pathPrefix === void 0 || typeof meta.pathPrefix !== "string") {
          console.error([
            `The Eleventy Bookshop plugin needs to be supplied a pathPrefix in order to use the url filter.`,
            `e.g. in .eleventy.js:`,
            ``,
            `eleventyConfig.addPlugin(pluginBookshop({`,
            `    bookshopLocations: <. . .>,`,
            `    pathPrefix: "/documentation/"`,
            `  }));`
          ].join("\n"));
          throw new Error("pathPrefix (String) is required in the `url` filter. This should be supplied ");
        }
        const baseurl = meta.pathPrefix || "";
        return `${baseurl}${url}`.replace(/\/\//g, "/");
      }
      return url;
    });
  };

  // node_modules/@bookshop/eleventy-engine/lib/engine.js
  var Engine = class {
    constructor(options) {
      options = {
        name: "Eleventy",
        files: {},
        ...options
      };
      this.key = "eleventy";
      this.name = options.name;
      this.files = options.files;
      this.plugins = options.plugins || [];
      this.plugins.push(unbind_default, slug_plugin_default, loop_context_default, markdownify_default);
      this.meta = {};
      this.info = {};
      this.plugins.push(url_default(this.meta));
      this.initializeLiquid();
      this.applyLiquidPlugins();
    }
    initializeLiquid() {
      const eleventyEngine = this;
      this.liquid = new Liquid({
        fs: {
          readFileSync(file) {
            return "LiquidJS readFileSync unimplemented";
          },
          async readFile(file) {
            return await eleventyEngine.retrieveInclude(file);
          },
          existsSync() {
            return true;
          },
          async exists() {
            return true;
          },
          resolve(root, file, ext) {
            return `${root}${file}`;
          }
        }
      });
    }
    async retrieveInclude(file) {
      let content;
      if (/_bookshop_include_/.test(file)) {
        content = this.getShared(file.replace(/^.*_bookshop_include_/, ""));
      } else if (/_bookshop_/.test(file)) {
        content = this.getComponent(file.replace(/^.*_bookshop_/, ""));
      } else {
        content = this.files?.[file];
      }
      if (!content && content !== "") {
        console.warn(`[eleventy-engine] No file found for ${file}`);
        return "";
      }
      return translateLiquid_default(content);
    }
    applyLiquidPlugins() {
      this.plugins.forEach((plugin) => {
        this.liquid.plugin(plugin);
      });
    }
    getShared(name) {
      const key = `shared/eleventy/${name}.eleventy.liquid`;
      return this.files?.[key];
    }
    getComponentKey(name) {
      const base = name.split("/").reverse()[0];
      return `components/${name}/${base}.eleventy.liquid`;
    }
    getComponent(name) {
      const key = this.getComponentKey(name);
      return this.files?.[key];
    }
    hasComponent(name) {
      const key = this.getComponentKey(name);
      return !!this.files?.[key];
    }
    resolveComponentType(name) {
      if (this.getComponent(name))
        return "component";
      if (this.getShared(name))
        return "shared";
      return false;
    }
    injectInfo(props) {
      return {
        collections: this.precomputed_collections,
        ...this.info.data || {},
        ...props,
        env_bookshop_live: true
      };
    }
    async storeMeta(meta = {}) {
      this.meta.pathPrefix = meta.pathPrefix ? await this.eval(meta.pathPrefix) : void 0;
    }
    async storeInfo(info = {}) {
      this.info = info;
      const collections = this.info.collections || {};
      collections["all"] = [];
      for (const [key, val] of Object.entries(collections)) {
        collections[key] = val.map((item) => {
          return {
            inputPath: item.path,
            outputPath: item.path,
            fileSlug: item.url.replace(/(\/|\.[^\/]+)$/, "").replace(/^.+([^\/]+)$/, "").toLowerCase(),
            url: item.url,
            date: item.date ? new Date(item.date) : new Date(),
            templateContent: "Content is not available when live editing",
            data: item
          };
        });
        collections["all"] = [...collections["all"], ...collections[key]];
      }
      this.precomputed_collections = collections;
    }
    async render(target, name, props, globals, logger) {
      let source = this.getComponent(name);
      if (!source)
        source = this.getShared(name);
      if (!source) {
        console.warn(`[eleventy-engine] No component found for ${name}`);
        return "";
      }
      logger?.log?.(`Going to render ${name}, with source:`);
      logger?.log?.(source);
      source = translateLiquid_default(source);
      logger?.log?.(`Rewritten the template for ${name} to:`);
      logger?.log?.(source);
      if (!globals || typeof globals !== "object")
        globals = {};
      props = this.injectInfo({ ...globals, ...props });
      target.innerHTML = await this.liquid.parseAndRender(source || "", props);
      logger?.log?.(`Rendered ${name} as:`);
      logger?.log?.(target.innerHTML);
    }
    async eval(str, props = {}) {
      try {
        if (/^\([\s\S]+\)$/.test(str)) {
          str = str.replace(/^\(|\)$/g, "");
        }
        str = str.replace(/\n/g, "");
        const ctx = new Context();
        ctx.push(this.injectInfo({}));
        if (Array.isArray(props)) {
          props.forEach((p) => ctx.push(p));
        } else {
          ctx.push(props);
        }
        const [, value, index] = str.match(/^(.*?)(?:\[(\d+)\])?$/);
        let result = await this.liquid.evalValue(value, ctx);
        if (index && typeof result === "object" && !Array.isArray(result)) {
          result = Object.entries(result);
        }
        return index ? result?.[index] : result;
      } catch (e) {
        console.warn(`Error evaluating \`${str}\` in the Eleventy engine`, e.toString());
        return "";
      }
    }
    loader() {
    }
  };

  // component-library/components/about/hero/hero.eleventy.liquid
  var hero_eleventy_default = '<section class="about-hero-two">\n  <div class="container">\n    <div class="row">\n      <div class="col-xl-5 col-lg-10 mx-auto">\n        <div class="about-hero-two-content position-relative">\n          <h2>{{title}}</h2>\n          {{description | markdownify}}\n          <div\n            class="scroll-down d-flex justify-content-center justify-content-xl-start"\n          >\n            <a href="{{button.link}}" class="btn btn-primary btn-lg">\n              {{button.text}}\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class="col-xl-7 col-lg-12">\n        <div class="about-hero-two-banner">\n        {% for item in hero_images %}\n          <div class="{% if item.placement == "front_bottom" %}\n          image-one\n        {% elsif item.placement == "back_top_right" %}\n          image-two\n        {% elsif item.placement == "back_top_left" %}\n          image-three\n        {% endif %}">\n            <img src="{{item.image}}" alt="{{item.image_alt}}" loading="lazy"/>\n          </div>\n        {% endfor %}\n          <div class="pattern"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n';

  // bookshop-import-file:components/about/hero/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default2 = hero_eleventy_default;

  // component-library/components/about/team/team.eleventy.liquid
  var team_eleventy_default = '<div class="team">\n   <div class="container">\n      <div class="row">\n         <div class="col-lg-10 col-xl-7 mx-auto">\n            <div class="section-header">\n               <h2>{{title}}</h2>\n            </div>\n         </div>\n      </div>\n      <div class="row">\n         {% for item in team_members %}\n         <div class="col-lg-3 col-md-6">\n            <div class="team-member">\n               <div class="team-member-thumb">\n                  <img src="{{item.image}}" alt="{{item.image_alt}}" loading="lazy" style="border-radius:20px"/>\n               </div>\n               <div class="team-member-details">\n                  <h3>{{item.name}}</h3>\n                  <p>{{item.designation}}</p>\n               </div>\n            </div>\n         </div>\n         {% endfor %}\n      </div>\n   </div>\n</div>\n';

  // bookshop-import-file:components/about/team/team.eleventy.liquid__bookshop_file__
  var team_eleventy_default2 = team_eleventy_default;

  // component-library/components/about/video/video.eleventy.liquid
  var video_eleventy_default = '<section class="works">\n   <div class="container">\n      <div class="row align-items-center">\n         <div class="col-lg-6">\n            <div class="works-content">\n               <h2>{{title}}</h2>\n               {{description | markdownify}}\n               <a href="{{button.link}}" class="btn btn-lg btn-white" target="_blank"> {{button.text}} </a>\n            </div>\n         </div>\n         <div class="col-lg-6">\n            <div class="works-banner">\n               <img src="{{video.image}}" class="w-100" alt="{{video.image_alt}}" loading="lazy" style="border-radius:20px"/>\n               <div class="effect"></div>\n               <div class="video-iframe d-flex align-items-center justify-content-center">\n                  <div class="video-icon me-sm-9 me-8">\n                     <a class="popup-vimeo" href="{{video.link}}">\n                        <svg\n                           width="28"\n                           height="32"\n                           viewBox="0 0 28 32"\n                           fill="none"\n                           xmlns="http://www.w3.org/2000/svg"\n                        >\n                           <path\n                              d="M26 12.5359C28.6667 14.0755 28.6667 17.9245 26 19.4641L6.5 30.7224C3.83333 32.262 0.499998 30.3375 0.499999 27.2583L0.5 4.74167C0.5 1.66247 3.83333 -0.262033 6.5 1.27757L26 12.5359Z"\n                              fill="white"\n                           />\n                        </svg>\n                     </a>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/about/video/video.eleventy.liquid__bookshop_file__
  var video_eleventy_default2 = video_eleventy_default;

  // component-library/components/contact/form/form.eleventy.liquid
  var form_eleventy_default = '<section class="contact">\n   <div class="container">\n      <div class="row">\n         <div class="col-lg-5 me-auto order-2 order-lg-1">\n            <div class="contact-form-Information">\n               <div class="address">\n                  <h3>{{address.heading}}</h3>\n                  <p>{{address.address}}</p>\n                  <div class="item mb-4">\n                     <h3>{{phone.heading}}</h3>\n                     <a href="tel:{{phone.cell}}"\n                        >{{phone.cell}}\n                        <span>\n                           <img \n                              src="{{ phone.image }}" \n                              alt="{{ phone.image_alt }}" \n                              loading="lazy" />\n                        </span>\n                     </a>\n                  </div>\n                  <div class="item">\n                     <h3>{{email.heading}}</h3>\n                     <a href="mailto:{{email.email}}"\n                        >{{email.email}}\n                        <span>\n                           <img\n                              src="{{ email.image }}"\n                              alt="{{ email.image_alt }}"\n                              loading="lazy"\n                           />\n                        </span>\n                     </a>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <div class="col-lg-6 order-1 order-lg-2">\n            <div class="contact-form">\n               <form method="post">\n                  <h3>{{form.heading}}</h3>\n                  <div class="col-md-12">\n                     <label for="Name" class="label">{{form.fullname.heading}}</label>\n                     <input\n                        type="text"\n                        class="form-control"\n                        id="Name"\n                        name="name"\n                        placeholder="{{form.fullname.placeholder}}"\n                        required=""\n                     />\n                  </div>\n                  <div class="col-md-12">\n                     <label for="Name" class="label">{{form.phone_number.heading}}</label>\n                     <input\n                        type="tel"\n                        class="form-control"\n                        id="Name"\n                        name="phone-number"\n                        placeholder="{{form.phone_number.placeholder}}"\n                        required=""\n                     />\n                  </div>\n                  <div class="col-md-12">\n                     <label for="email" class="label">{{form.email.heading}}</label>\n                     <input\n                        type="email"\n                        class="form-control mb-6"\n                        id="email"\n                        name="_replyto"\n                        placeholder="{{form.email.placeholder}}"\n                        required=""\n                     />\n                  </div>\n                  <div class="col-12">\n                     <label for="email" class="label">{{form.message.heading}}</label>\n                     <textarea\n                        class="form-control mb-4"\n                        id="floatingTextarea2"\n                        name="message"\n                        placeholder="{{form.message.placeholder}}"\n                        rows="8"\n                        spellcheck="false"\n                     ></textarea>\n                  </div>\n                  <input type="text" name="_gotcha" style="display: none" />\n                  <div class="col-12">\n                     <button type="submit" class="btn btn-primary btn-lg mt-7">\n                        <span class="position-relative">{{form.submit_button.text}}</span>\n                     </button>\n                  </div>\n               </form>\n               <div class="effect"></div>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/contact/form/form.eleventy.liquid__bookshop_file__
  var form_eleventy_default2 = form_eleventy_default;

  // component-library/components/contact/hero/hero.eleventy.liquid
  var hero_eleventy_default3 = '<section class="contact-hero">\n   <div class="container">\n      <div class="row">\n         <div class="col-lg-6">\n            <div class="contact-hero-content">\n               <h1>{{title}}</h1>\n               {{description | markdownify}}\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/contact/hero/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default4 = hero_eleventy_default3;

  // component-library/components/feature/hero/hero.eleventy.liquid
  var hero_eleventy_default5 = '<section class="feature-hero">\n   <div class="container">\n      <div class="row align-items-center">\n         <div class="col-lg-6">\n            <div class="feature-hero-content">\n               <h1 class="">{{title}}</h1>\n               {{description | markdownify}}\n               <div class="d-block mb-6">\n                  <a href="{{button.link}}" class="btn btn-primary btn-lg"> {{button.text}} </a>\n               </div>\n            </div>\n         </div>\n         <div class="col-lg-6">\n            <div class="feature-hero-banner">\n               <img src="{{image}}" alt="{{image_alt}}" loading="lazy" />\n               <div class="shape">\n                  <img src="/images/feature/effect-4.png" alt="shape" loading="lazy" />\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/feature/hero/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default6 = hero_eleventy_default5;

  // component-library/components/global/counter/counter.eleventy.liquid
  var counter_eleventy_default = '<section\n   class="counter-up {% if alternate_style %} counter-up-two pb-xxl-14 pb-lg-13 {% endif %}"\n   id="counter-up"\n>\n   <div class="container">\n      <div class="row">\n         <div class="col-lg-12">\n            <div class="section-header">\n               <h2>\n                  {{ title }} <span>{{ title_suffix }}</span>\n               </h2>\n               {{ description | markdownify}}\n            </div>\n         </div>\n         <div class="col-12">\n            <div class="counter-up-wrapper d-grid">\n               {% for item in numbers %}\n               <div class="counter-up-content">\n                  <div class="counter-up-content-item">\n                     <div class="counter-percent">\n                        {% if item.prefix %}\n                        <span class="percent">{{ item.prefix }}</span>\n                        {% endif %}\n                        <span class="counter">{{ item.number }}</span>\n                        {% if item.suffix %}\n                        <span class="percent">{{ item.suffix }}</span>\n                        {% endif %}\n                     </div>\n                     <p>{{ item.text }}</p>\n                  </div>\n               </div>\n               {% endfor %}\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/global/counter/counter.eleventy.liquid__bookshop_file__
  var counter_eleventy_default2 = counter_eleventy_default;

  // component-library/components/global/error/error.eleventy.liquid
  var error_eleventy_default = '<section class="error py-xxl-12 py-lg-9 py-10 py-sm-6">\n  <div class="container">\n    <div class="row">\n      <div class="col-lg-12">\n        <div class="error-content text-center">\n          <img src="{{image}}" alt="{{image_alt}}" />\n          <h3 class="my-5">{{description | markdownify}}</h3>\n          <a href="/" class="btn btn-lg btn-primary"> Try Again </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>';

  // bookshop-import-file:components/global/error/error.eleventy.liquid__bookshop_file__
  var error_eleventy_default2 = error_eleventy_default;

  // component-library/components/global/faq/faq.eleventy.liquid
  var faq_eleventy_default = `<script>
   function onClick (element) {
		const accordionItem = element.closest('.accordion-item')
		var current = document.getElementsByClassName('shows');
		current[0].className = current[0].className.replace(' shows', '');
		accordionItem.className += ' shows';
	}
<\/script>
<section class="faq-two">
   <div class="container">
      <div class="row">
         <div class="col-lg-8 mx-auto">
            <div class="section-header">
               <h2>{{title}} <span>{{title_suffix}}</span></h2>
               <p>{{description | markdownify}}</p>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-12">
            <div class="accordion" id="accordionExample">
               {% for item in FAQ %}
                {% if forloop.index == 1 %}
               <div class="accordion-item shows">
                  <span>0{{forloop.index}}</span>
                  <h2 class="accordion-header" id="headingOne">
                     <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onclick="onClick(this)"
                     >
                        <p class="header-content">{{item.title}}</p>
                     </button>
                  </h2>
                  <div
                     id="collapseOne"
                     class="accordion-collapse collapse show"
                     aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample"
                  >
                     <div class="accordion-body">{{item.description | markdownify}}</div>
                  </div>
               </div>
               {% else %}
               <div class="accordion-item">
                  <span>0{{forloop.index}}</span>
                  <h2 class="accordion-header" id="heading{{forloop.index}}">
                     <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse{{forloop.index}}"
                        aria-expanded="false"
                        aria-controls="collapse{{forloop.index}}"
                        onclick="onClick(this)"
                     >
                        <p class="header-content">{{item.title}}</p>
                     </button>
                  </h2>
                  <div
                     id="collapse{{forloop.index}}"
                     class="accordion-collapse collapse"
                     aria-labelledby="heading{{forloop.index}}"
                     data-bs-parent="#accordionExample"
                  >
                     <div class="accordion-body">{{item.description | markdownify}}</div>
                  </div>
               </div>
               {% endif %} {% endfor %}
            </div>
         </div>
      </div>
   </div>
</section>
`;

  // bookshop-import-file:components/global/faq/faq.eleventy.liquid__bookshop_file__
  var faq_eleventy_default2 = faq_eleventy_default;

  // component-library/components/global/feature/feature.eleventy.liquid
  var feature_eleventy_default = '<section class="feature pt-sm-10 pt-5 pb-4">\n  <div class="container">\n    {% if reversed %}\n    <div class="row align-items-center">\n      <div class="col-lg-6">\n        <div class="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">\n          <div class="card-image">\n            <img src="{{image}}" alt="{{image_alt}}" loading="lazy" />\n          </div>\n          <div class="effect-one"></div>\n        </div>\n      </div>\n      <div class="col-lg-6">\n        <div class="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">\n          <h2>{{title}}</h2>\n          <p>{{description | markdownify}}</p>\n          <div class="Learn-more">\n            <a href="{{button.link}}" class="">\n              {{button.text}}\n              <i class="ph-arrow-right"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    {%else%}\n    <div class="row align-items-center">\n      <div class="col-lg-6 order-2 order-lg-1">\n        <div class="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">\n          <h2 class="pe-xl-0">{{title}}</h2>\n          <p>{{description | markdownify}}</p>\n          <div class="Learn-more">\n            <a href="{{button.link}}" class="">\n              {{button.text}}\n              <i class="ph-arrow-right"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class="col-lg-6 order-1 order-lg-2">\n        <div class="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">\n          <div class="card-image">\n            <img src="{{image}}" alt="{{image_alt}}" loading="lazy" />\n          </div>\n          <div class="effect-two"></div>\n        </div>\n      </div>\n    </div>\n    {% endif %}\n  </div>\n</section>\n';

  // bookshop-import-file:components/global/feature/feature.eleventy.liquid__bookshop_file__
  var feature_eleventy_default2 = feature_eleventy_default;

  // component-library/components/global/header/header.eleventy.liquid
  var header_eleventy_default = '<section class="feature pt-0 pb-0">\n  <div class="container">\n    <div class="row">\n      <div class="col-lg-8 mx-auto">\n        <div class="section-header @@disply"{% if remove_top_padding %}style="padding-top:0;"{% endif %}>\n          <h2>{{ title }}<span>{{ title_suffix }}</span></h2>\n          <p>{{ description | markdownify}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>';

  // bookshop-import-file:components/global/header/header.eleventy.liquid__bookshop_file__
  var header_eleventy_default2 = header_eleventy_default;

  // component-library/components/global/login/login.eleventy.liquid
  var login_eleventy_default = '<section class="sing-up pt-md-20 pt-18 pb-md-20 pb-10">\n  <div class="container">\n    <div class="row">\n      <div class="col-xxl-7 col-lg-8 mx-auto">\n        <div class="sing-up-body">\n          <h2>\n            {{title}}\n          </h2>\n          <form class="sing-up-items row gy-4 gx-3">\n            <div class="col-md-12">\n              <label for="fullName" class="form-label">{{fullname.heading}}</label>\n              <input type="text" class="form-control" id="fullName" placeholder="{{fullname.placeholder}}">\n            </div>\n            <div class="col-md-12">\n              <label for="pEmailId" class="form-label">{{email.heading}}</label>\n              <input type="email" class="form-control" id="pEmailId" placeholder="{{email.placeholder}}">\n            </div>\n            <div class="col-6">\n              <div class="form-check">\n                <input class="form-check-input" type="checkbox" id="gridCheck">\n                <label class="form-check-label" for="gridCheck">\n                  {{checkbox_text}}\n                </label>\n              </div>\n            </div>\n            <div class="col-6">\n              <div class="form-check ps-0  text-end">\n                <label class="form-check-label" for="gridCheck">\n                  <a href="#" class="forget-password"> Forget Password</a>\n                </label>\n              </div>\n            </div>\n            <div class="col-md-12">\n              <button type="submit" class="btn btn-submit  w-100">{{log_in_button.text}}</button>\n            </div>\n            <div class="col-md-12 mt-3">\n              <label for="" class="d-block text-center mb-0">or</label>\n            </div>\n            <div class="button-group">\n              <button type="submit" class="btn btn-submit btn-social w-100">\n                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path\n                    d="M15.9649 17.0524C14.3566 18.4107 12.2703 19.2728 9.99918 19.2728C6.61971 19.2728 3.65312 17.411 2.04492 14.6944L2.647 11.919L5.31573 11.4236C5.93512 13.423 7.80412 14.89 9.99918 14.89C11.0641 14.89 12.0529 14.5531 12.8679 13.9555L15.4324 14.3467L15.9649 17.0524Z"\n                    fill="white" />\n                  <path\n                    d="M15.9657 17.0523L15.4332 14.3465L12.8688 13.9553C12.0538 14.553 11.0649 14.8898 10 14.8898V19.2727C12.2711 19.2727 14.3575 18.4106 15.9657 17.0523Z"\n                    fill="white" />\n                  <path\n                    d="M5.10938 9.99998C5.10938 10.4998 5.18544 10.9779 5.31584 11.4235L2.04503 14.6943C1.23004 13.3251 0.726562 11.7168 0.726562 9.99998C0.726562 8.28304 1.23004 6.67484 2.04503 5.30566L4.67012 5.75746L5.31584 8.57647C5.18544 9.02196 5.10938 9.50009 5.10938 9.99998Z"\n                    fill="white" />\n                  <path\n                    d="M19.2711 9.99996C19.2711 12.8252 17.9636 15.3571 15.9641 17.0523L12.8672 13.9554C13.4974 13.4989 14.0299 12.8904 14.3776 12.1733H9.9984C9.6941 12.1733 9.45508 11.9342 9.45508 11.6299V8.36998C9.45508 8.06569 9.6941 7.82666 9.9984 7.82666H18.5757C18.8365 7.82666 19.0647 8.01135 19.1081 8.27215C19.2168 8.83724 19.2711 9.424 19.2711 9.99996Z"\n                    fill="white" />\n                  <path\n                    d="M14.3792 12.1733C14.0315 12.8904 13.499 13.4989 12.8688 13.9554L15.9657 17.0523C17.9652 15.3571 19.2727 12.8252 19.2727 9.99996C19.2727 9.424 19.2184 8.83724 19.1097 8.27215C19.0663 8.01135 18.838 7.82666 18.5772 7.82666H10V12.1733H14.3792Z"\n                    fill="white" />\n                  <path\n                    d="M16.117 3.3171C16.1279 3.46923 16.0627 3.61053 15.9649 3.71916L13.6395 6.03372C13.4548 6.22932 13.1505 6.25105 12.9332 6.08805C12.0746 5.44697 11.0641 5.11011 9.99918 5.11011C7.80412 5.11011 5.93512 6.57705 5.31573 8.57651L2.04492 5.3057C3.65312 2.58908 6.61971 0.727295 9.99918 0.727295C12.1616 0.727295 14.2697 1.52417 15.9214 2.91504C16.0409 3.01288 16.1061 3.16497 16.117 3.3171Z"\n                    fill="white" />\n                  <path\n                    d="M12.9339 6.08805C13.1513 6.25109 13.4555 6.22932 13.6402 6.03372L15.9657 3.71916C16.0635 3.61053 16.1287 3.46927 16.1178 3.3171C16.1069 3.16494 16.0417 3.01288 15.9222 2.91504C14.2705 1.52417 12.1624 0.727295 10 0.727295V5.11011C11.0649 5.11011 12.0755 5.44697 12.9339 6.08805Z"\n                    fill="white" />\n                </svg>\n                Sign In with Google</button>\n              <button type="submit" class="btn btn-submit btn-social w-100">\n                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path fill-rule="evenodd" clip-rule="evenodd"\n                    d="M11.9 28.9508V19.0996H8.19995V14.6996H12V11.4996C12 7.59961 14.4 5.59961 17.7 5.59961C19.3 5.59961 20.7 5.69961 21.1 5.79961V9.79961H18.7999C16.9 9.69961 16.5 10.5996 16.5 11.7996V14.5996H21L20.4 18.9996H16.5V29.0775C23.6656 28.1463 29.2 22.0195 29.2 14.6C29.2 6.53664 22.6634 0 14.6 0C6.53664 0 0 6.53664 0 14.6C0 21.7409 5.12653 27.6844 11.9 28.9508Z"\n                    fill="white" />\n                </svg>\n                Sign In with FaceBook</button>\n            </div>\n            <div class="divider mt-9"></div>\n            <div class="col-md-12">\n              <a href="{{sign_up_button.link}}" class="create-account">{{sign_up_button.text}}</a>\n            </div>\n        </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>';

  // bookshop-import-file:components/global/login/login.eleventy.liquid__bookshop_file__
  var login_eleventy_default2 = login_eleventy_default;

  // component-library/components/global/signup/signup.eleventy.liquid
  var signup_eleventy_default = '<section class="sing-up pt-md-20 pt-18 pb-md-20 pb-10">\n   <div class="container">\n      <div class="row">\n         <div class="col-lg-7 mx-auto">\n            <div class="sing-up-body">\n               <h2>{{title}}</h2>\n               <form class="sing-up-items row gy-4 gx-3">\n                  <div class="col-md-12">\n                     <label for="fullName" class="form-label">{{form.fullname.heading}}</label>\n                     <input\n                        type="text"\n                        class="form-control"\n                        id="fullName"\n                        placeholder="{{form.fullname.placeholder}}"\n                     />\n                  </div>\n                  <div class="col-md-12">\n                     <label for="pEmailId" class="form-label">{{form.email.heading}}</label>\n                     <input\n                        type="email"\n                        class="form-control"\n                        id="pEmailId"\n                        placeholder="{{form.email.placeholder}}"\n                     />\n                  </div>\n                  <div class="col-md-12">\n                     <label for="setpassword" class="form-label">{{form.password.heading}}</label>\n                     <div class="input-group input-group-password">\n                        <input\n                           type="password"\n                           id="setpassword"\n                           class="form-control has-right-icon"\n                        />\n                        <span\n                           class="input-group-text fa fa-fw fa-eye viewPassword"\n                           toggle="#setpassword"\n                        ></span>\n                     </div>\n                  </div>\n                  <div class="col-md-12">\n                     <label for="Re-password" class="form-label"\n                        >{{form.retype_password.heading}}</label\n                     >\n                     <div class="input-group input-group-password">\n                        <input\n                           type="password"\n                           class="form-control has-right-icon"\n                           id="Re-password"\n                        />\n                        <span\n                           class="input-group-text fa fa-fw fa-eye viewPassword"\n                           toggle="#Re-password"\n                        ></span>\n                     </div>\n                  </div>\n                  <div class="col-md-12">\n                     <div class="form-check">\n                        <input class="form-check-input" type="checkbox" id="gridCheck" />\n                        <label class="form-check-label pe-0 pe-lg-14" for="gridCheck">\n                           {{form.checkbox_text}}\n                        </label>\n                     </div>\n                  </div>\n                  <div class="col-md-12">\n                     <button type="submit" class="btn btn-submit w-100">{{form.sign_up_text}}</button>\n                  </div>\n                  <div class="col-md-12 mt-3">\n                     <label for="" class="d-block text-center mb-0">or</label>\n                  </div>\n                  <div class="button-group">\n                     <button type="submit" class="btn btn-submit btn-social w-100">\n                        <svg\n                           width="20"\n                           height="20"\n                           viewBox="0 0 20 20"\n                           fill="none"\n                           xmlns="http://www.w3.org/2000/svg"\n                        >\n                           <path\n                              d="M15.9649 17.0524C14.3566 18.4107 12.2703 19.2728 9.99918 19.2728C6.61971 19.2728 3.65312 17.411 2.04492 14.6944L2.647 11.919L5.31573 11.4236C5.93512 13.423 7.80412 14.89 9.99918 14.89C11.0641 14.89 12.0529 14.5531 12.8679 13.9555L15.4324 14.3467L15.9649 17.0524Z"\n                              fill="white"\n                           />\n                           <path\n                              d="M15.9657 17.0523L15.4332 14.3465L12.8688 13.9553C12.0538 14.553 11.0649 14.8898 10 14.8898V19.2727C12.2711 19.2727 14.3575 18.4106 15.9657 17.0523Z"\n                              fill="white"\n                           />\n                           <path\n                              d="M5.10938 9.99998C5.10938 10.4998 5.18544 10.9779 5.31584 11.4235L2.04503 14.6943C1.23004 13.3251 0.726562 11.7168 0.726562 9.99998C0.726562 8.28304 1.23004 6.67484 2.04503 5.30566L4.67012 5.75746L5.31584 8.57647C5.18544 9.02196 5.10938 9.50009 5.10938 9.99998Z"\n                              fill="white"\n                           />\n                           <path\n                              d="M19.2711 9.99996C19.2711 12.8252 17.9636 15.3571 15.9641 17.0523L12.8672 13.9554C13.4974 13.4989 14.0299 12.8904 14.3776 12.1733H9.9984C9.6941 12.1733 9.45508 11.9342 9.45508 11.6299V8.36998C9.45508 8.06569 9.6941 7.82666 9.9984 7.82666H18.5757C18.8365 7.82666 19.0647 8.01135 19.1081 8.27215C19.2168 8.83724 19.2711 9.424 19.2711 9.99996Z"\n                              fill="white"\n                           />\n                           <path\n                              d="M14.3792 12.1733C14.0315 12.8904 13.499 13.4989 12.8688 13.9554L15.9657 17.0523C17.9652 15.3571 19.2727 12.8252 19.2727 9.99996C19.2727 9.424 19.2184 8.83724 19.1097 8.27215C19.0663 8.01135 18.838 7.82666 18.5772 7.82666H10V12.1733H14.3792Z"\n                              fill="white"\n                           />\n                           <path\n                              d="M16.117 3.3171C16.1279 3.46923 16.0627 3.61053 15.9649 3.71916L13.6395 6.03372C13.4548 6.22932 13.1505 6.25105 12.9332 6.08805C12.0746 5.44697 11.0641 5.11011 9.99918 5.11011C7.80412 5.11011 5.93512 6.57705 5.31573 8.57651L2.04492 5.3057C3.65312 2.58908 6.61971 0.727295 9.99918 0.727295C12.1616 0.727295 14.2697 1.52417 15.9214 2.91504C16.0409 3.01288 16.1061 3.16497 16.117 3.3171Z"\n                              fill="white"\n                           />\n                           <path\n                              d="M12.9339 6.08805C13.1513 6.25109 13.4555 6.22932 13.6402 6.03372L15.9657 3.71916C16.0635 3.61053 16.1287 3.46927 16.1178 3.3171C16.1069 3.16494 16.0417 3.01288 15.9222 2.91504C14.2705 1.52417 12.1624 0.727295 10 0.727295V5.11011C11.0649 5.11011 12.0755 5.44697 12.9339 6.08805Z"\n                              fill="white"\n                           />\n                        </svg>\n                        Sign In with Google\n                     </button>\n                     <button type="submit" class="btn btn-submit btn-social w-100">\n                        <svg\n                           width="20"\n                           height="20"\n                           viewBox="0 0 30 30"\n                           fill="none"\n                           xmlns="http://www.w3.org/2000/svg"\n                        >\n                           <path\n                              fill-rule="evenodd"\n                              clip-rule="evenodd"\n                              d="M11.9 28.9508V19.0996H8.19995V14.6996H12V11.4996C12 7.59961 14.4 5.59961 17.7 5.59961C19.3 5.59961 20.7 5.69961 21.1 5.79961V9.79961H18.7999C16.9 9.69961 16.5 10.5996 16.5 11.7996V14.5996H21L20.4 18.9996H16.5V29.0775C23.6656 28.1463 29.2 22.0195 29.2 14.6C29.2 6.53664 22.6634 0 14.6 0C6.53664 0 0 6.53664 0 14.6C0 21.7409 5.12653 27.6844 11.9 28.9508Z"\n                              fill="white"\n                           />\n                        </svg>\n                        Sign In with FaceBook\n                     </button>\n                  </div>\n                  <div class="divider mt-9"></div>\n                  <div class="col-md-12">\n                     <a href="{{form.log_in_button.link}}" class="create-account">\n                        {{form.log_in_button.text}}\n                     </a>\n                  </div>\n               </form>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/global/signup/signup.eleventy.liquid__bookshop_file__
  var signup_eleventy_default2 = signup_eleventy_default;

  // component-library/components/global/testimonial/testimonial.eleventy.liquid
  var testimonial_eleventy_default = '<section class="testimonial">\n   <div class="container">\n      <div class="row align-items-center">\n         <div class="col-lg-8 mx-auto text-center mb-5">\n            <div class="testimonial-content">\n               <h2>{{title}} <span> {{title_suffix}}</span></h2>\n               {{description | markdownify }}\n            </div>\n         </div>\n      </div>\n      <div class="row">\n         {% for item in slider %}\n         <div class="col-lg-4 col-md-6 mb-5">\n            <div class="testimonial-item">\n               <div class="testimonial-item-person">\n                  <div class="thumb">\n                     <img src="{{item.image}}" alt="{{item.image_alt}}" class="img-fluid" loading="lazy" />\n                  </div>\n                  <div class="content">\n                     <h3>{{item.author}}</h3>\n                     <p>{{item.designation}}</p>\n                  </div>\n               </div>\n               <p>{{item.message}}</p>\n            </div>\n         </div>\n         {% endfor %}\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/global/testimonial/testimonial.eleventy.liquid__bookshop_file__
  var testimonial_eleventy_default2 = testimonial_eleventy_default;

  // component-library/components/home/hero/hero.eleventy.liquid
  var hero_eleventy_default7 = '<section class="hero-two">\n   <div class="hero-two-shape"></div>\n   <div class="container-fluid">\n      <div class="row align-items-center">\n         <div class="col-lg-6">\n            <div class="hero-two-content">\n               <h1 class="mb-4">{{title}}</h1>\n               <div class="mb-7 w-xxl-80">{{description | markdownify}}</div>\n               <div class="">\n                  <a href="{{button.url}}" class="btn btn-primary btn-lg"> {{button.text}} </a>\n               </div>\n            </div>\n         </div>\n         <div class="col-lg-6">\n            <div class="hero-two-banner">\n               <img src="{{image}}" alt="{{image_alt}}" />\n               <div class="hero-two-banner-shape"></div>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n\n';

  // bookshop-import-file:components/home/hero/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default8 = hero_eleventy_default7;

  // component-library/components/home/video/video.eleventy.liquid
  var video_eleventy_default3 = '<section class="video pb-xxl-22 pb-lg-18 pb-12">\n  <div class="container">\n    <div class="row">\n      <div class="col-lg-10 mx-auto">\n        <div class="banner">\n          <img style= "border-radius: 20px;"\n            src="{{image}}"\n            class="w-100"\n            alt="{{image_alt}}"\n            loading="lazy"\n          />\n          <div class="effect-one"></div>\n          <div class="effect-two"></div>\n          <div\n            class="video-iframe d-flex align-items-center justify-content-center"\n          >\n            <div class="video-icon me-sm-9 me-8">\n              <a class="popup-vimeo" href="{{video_url}}">\n                <svg\n                  width="28"\n                  height="32"\n                  viewBox="0 0 28 32"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    d="M26 12.5359C28.6667 14.0755 28.6667 17.9245 26 19.4641L6.5 30.7224C3.83333 32.262 0.499998 30.3375 0.499999 27.2583L0.5 4.74167C0.5 1.66247 3.83333 -0.262033 6.5 1.27757L26 12.5359Z"\n                    fill="white"\n                  />\n                </svg>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n';

  // bookshop-import-file:components/home/video/video.eleventy.liquid__bookshop_file__
  var video_eleventy_default4 = video_eleventy_default3;

  // component-library/components/pricing/hero/hero.eleventy.liquid
  var hero_eleventy_default9 = '<section class="pricing-inner @@bg-color">\n   <div class="container">\n      <div class="row">\n         <div class="col-lg-8 mx-auto">\n            <div class="section-header position-relative text-center">\n               <h2>{{title}}</h2>\n               {{description | markdownify}}\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/pricing/hero/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default10 = hero_eleventy_default9;

  // component-library/components/pricing/table/table.eleventy.liquid
  var table_eleventy_default = '<section class="pricing pb-xxl-20 pb-lg-15 pb-md-5">\n   <div class="container">\n      <div class="row">\n         {% for item in pricing_tier %}\n         <div class="col-lg-4">\n            <div class="card pricing-item {% if item.highlight_tier %} active {% endif %}">\n               <h5 class="card-title">{{item.tier}}</h5>\n               <p class="card-text">{{item.description}}</p>\n               {% if item.has_discount %}\n               <div class="price">\n                  <p class="pricingtable">{{item.currency_symbol}}{{item.discount_price}}</p>\n                  <div class="discount">\n                     <p>{{item.currency_symbol}}{{item.price}}</p>\n                     <div class="vector vector-one">\n                        <img src="/images/pricing/cross-shape.png" alt="cross-shape" loading="lazy" />\n                     </div>\n                  </div>\n                  <div class="shape-two top-0"></div>\n               </div>\n               {% else %}\n               <div class="price">\n                  <p><span>{{item.currency_symbol}}{{item.price}}</span></p>\n                  <div class="shape-one"></div>\n               </div>\n               {% endif %}\n               <div class="card-body">\n                  <ul class="list-unstyled">\n                     {% for feature in item.features %}\n                     <li class="{% if feature.active_feature == false %} deactive {% endif %}">\n                        <i class="ph-check {% if feature.active_feature == false %} deactive {% endif %}"></i>\n                        {{feature.item}}\n                     </li>\n                     {% endfor %}\n                  </ul>\n                  <div class="link">\n                     <a href="{{item.button.link}}" class="btn btn-lg btn-white">\n                        {{item.button.text}}\n                     </a>\n                  </div>\n               </div>\n            </div>\n         </div>\n         {% endfor %}\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/pricing/table/table.eleventy.liquid__bookshop_file__
  var table_eleventy_default2 = table_eleventy_default;

  // component-library/components/privacy/hero/hero.eleventy.liquid
  var hero_eleventy_default11 = '<section class="privacy-hero">\n   <div class="container">\n      <div class="row">\n         <div class="col-md-12">\n            <div class="privacy-hero-content text-center">\n               <h1>{{title}}</h1>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n';

  // bookshop-import-file:components/privacy/hero/hero.eleventy.liquid__bookshop_file__
  var hero_eleventy_default12 = hero_eleventy_default11;

  // component-library/components/privacy/privacy/privacy.eleventy.liquid
  var privacy_eleventy_default = '<section class="privacy">\n  <div class="container">\n    <div class="row">\n      <div class="privacy-wrapper">\n        <div class="col-lg-7 mx-auto">\n          <div\n            data-bs-spy="scroll"\n            data-bs-target="#navbar-example2"\n            data-bs-offset="0"\n            class="scrollspy-example"\n            tabindex="0"\n          >\n            {% for item in terms_and_conditions %}\n              <div class="privacy-items" id="item{{forloop.index}}">\n                <div class="card">\n                  <h3 class="sub-title">{{item.heading}}</h3>\n                  <div class="card-body">\n                    <div class="card-text">{{ item.description }}</div>\n                  </div>\n                </div>\n              </div>\n            {% endfor %}\n          </div>\n        </div>\n        <div class="col-lg-4">\n          <nav id="scrol-nav" class="navbar navbar-light privacy-nav">\n            <ul class="nav nav-pills">\n              {% for item in terms_and_conditions %}\n                {% if forloop.index == 1 %}\n                <li class="nav-item">\n                  <a class="nav-link active" href="#item{{forloop.index}}"\n                    >{{item.heading}}</a\n                  >\n                </li>\n                {% else %}\n                <li class="nav-item">\n                  <a class="nav-link" href="#item{{forloop.index}}">\n                    {{item.heading}}</a\n                  >\n                </li>\n                {% endif %}\n              {% endfor %}\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>';

  // bookshop-import-file:components/privacy/privacy/privacy.eleventy.liquid__bookshop_file__
  var privacy_eleventy_default2 = privacy_eleventy_default;

  // component-library/shared/eleventy/page.eleventy.liquid
  var page_eleventy_default = '<main>\n{% for block in content_blocks %}\n    {% bookshop "{{block._bookshop_name}}" bind: block %}\n{% endfor %}\n</main>\n';

  // bookshop-import-file:shared/eleventy/page.eleventy.liquid__bookshop_file__
  var page_eleventy_default2 = page_eleventy_default;

  // bookshop-import-glob:(.eleventy.liquid)
  var files = {};
  files["components/about/hero/hero.eleventy.liquid"] = hero_eleventy_default2;
  files["components/about/team/team.eleventy.liquid"] = team_eleventy_default2;
  files["components/about/video/video.eleventy.liquid"] = video_eleventy_default2;
  files["components/contact/form/form.eleventy.liquid"] = form_eleventy_default2;
  files["components/contact/hero/hero.eleventy.liquid"] = hero_eleventy_default4;
  files["components/feature/hero/hero.eleventy.liquid"] = hero_eleventy_default6;
  files["components/global/counter/counter.eleventy.liquid"] = counter_eleventy_default2;
  files["components/global/error/error.eleventy.liquid"] = error_eleventy_default2;
  files["components/global/faq/faq.eleventy.liquid"] = faq_eleventy_default2;
  files["components/global/feature/feature.eleventy.liquid"] = feature_eleventy_default2;
  files["components/global/header/header.eleventy.liquid"] = header_eleventy_default2;
  files["components/global/login/login.eleventy.liquid"] = login_eleventy_default2;
  files["components/global/signup/signup.eleventy.liquid"] = signup_eleventy_default2;
  files["components/global/testimonial/testimonial.eleventy.liquid"] = testimonial_eleventy_default2;
  files["components/home/hero/hero.eleventy.liquid"] = hero_eleventy_default8;
  files["components/home/video/video.eleventy.liquid"] = video_eleventy_default4;
  files["components/pricing/hero/hero.eleventy.liquid"] = hero_eleventy_default10;
  files["components/pricing/table/table.eleventy.liquid"] = table_eleventy_default2;
  files["components/privacy/hero/hero.eleventy.liquid"] = hero_eleventy_default12;
  files["components/privacy/privacy/privacy.eleventy.liquid"] = privacy_eleventy_default2;
  files["shared/eleventy/page.eleventy.liquid"] = page_eleventy_default2;
  var eleventy_default = files;

  // bookshop-import-config:bookshop.config.js
  var engines = [];
  var Engine0Plugins = [];
  engines.push(new Engine({
    ...{ "plugins": [] },
    files: eleventy_default,
    plugins: Engine0Plugins
  }));
  var bookshop_config_default = engines;

  // node_modules/@bookshop/live/lib/app/app.js
  window.BookshopLive = getLive(bookshop_config_default);
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
