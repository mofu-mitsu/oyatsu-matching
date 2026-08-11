var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// generate_ogp.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);

// src/data/snackTypes.ts
var SNACK_TYPES = {
  STFJ: {
    id: "STFJ",
    code: "STFJ",
    title: "\u3075\u3093\u308F\u308A\u548C\u307F\u30B9\u30A4\u30FC\u30C4",
    snackCategory: "\u3082\u3061\u3082\u3061\u5927\u798F\uFF06\u3075\u3063\u304F\u3089\u3069\u3089\u713C\u304D",
    catchphrase: "\u5305\u307F\u8FBC\u3080\u3088\u3046\u306A\u512A\u3057\u3055\u3068\u3001\u3082\u3063\u3061\u308A\u548C\u307F\u306E\u5E78\u305B\u30B9\u30A4\u30FC\u30C4\u6D3E",
    description: "\u7518\u304F\u3066\u67D4\u3089\u304B\u304F\u3001\u5E38\u6E29\u3067\u307B\u3063\u3068\u548C\u3080\u548C\u83D3\u5B50\u304C\u5927\u597D\u304D\u306A\u3042\u306A\u305F\u3002\u5468\u56F2\u3092\u306A\u3054\u307E\u305B\u308B\u6E29\u304B\u3044\u96F0\u56F2\u6C17\u304C\u3042\u308A\u3001\u304A\u8336\u3068\u4E00\u7DD2\u306B\u3086\u3063\u305F\u308A\u904E\u3054\u3059\u6642\u9593\u3092\u4F55\u3088\u308A\u611B\u3057\u3066\u3044\u307E\u3059\u3002",
    personalityTraits: ["\u6E29\u539A\u3067\u5E73\u548C\u4E3B\u7FA9", "\u4E01\u5BE7\u306B\u5473\u308F\u3046\u6D3E", "\u4F1D\u7D71\u3084\u5B89\u5FC3\u611F\u3092\u5927\u5207\u306B\u3059\u308B"],
    bestPairingTypeId: "YHFJ",
    recommendedKeywords: ["\u548C\u83D3\u5B50 \u30AE\u30D5\u30C8", "\u751F\u5927\u798F", "\u3069\u3089\u713C\u304D", "\u751F\u516B\u30C4\u6A4B", "\u56E3\u5B50"],
    color: {
      bg: "bg-emerald-50",
      badge: "bg-emerald-100 text-emerald-800",
      border: "border-emerald-300",
      accent: "#10b981"
    },
    characterName: "\u3082\u3061\u3042\u3093\u3053\u3061\u3083\u3093",
    characterEmoji: "\u{1F361}"
  },
  STFW: {
    id: "STFW",
    code: "STFW",
    title: "\u307B\u3093\u306E\u308A\u713C\u304D\u7ACB\u3066\u30D0\u30A6\u30E0",
    snackCategory: "\u3075\u3093\u308F\u308A\u30B7\u30D5\u30A9\u30F3\uFF06\u6FC3\u539A\u713C\u304D\u83D3\u5B50",
    catchphrase: "\u3075\u308F\u3075\u308F\u512A\u3057\u3044\u7518\u3055\u306B\u5305\u307E\u308C\u308B\u3001\u738B\u9053\u6D0B\u83D3\u5B50\u30E9\u30D0\u30FC",
    description: "\u713C\u304D\u7ACB\u3066\u306E\u9999\u3070\u3057\u3044\u30D0\u30BF\u30FC\u3084\u5C0F\u9EA6\u306E\u9999\u308A\u304C\u5927\u597D\u304D\u3002\u30AB\u30B9\u30C6\u30E9\u3084\u30B7\u30D5\u30A9\u30F3\u30B1\u30FC\u30AD\u3001\u30D5\u30A3\u30CA\u30F3\u30B7\u30A7\u306A\u3069\u3001\u67D4\u3089\u304B\u3067\u512A\u3057\u3044\u713C\u304D\u83D3\u5B50\u306B\u5FC3\u8E8D\u3089\u305B\u308B\u30ED\u30DE\u30F3\u30C1\u30B9\u30C8\u3067\u3059\u3002",
    personalityTraits: ["\u30ED\u30DE\u30F3\u30C1\u30B9\u30C8", "\u793E\u4EA4\u7684\u3067\u89AA\u3057\u307F\u3084\u3059\u3044", "\u7518\u3044\u9999\u308A\u306B\u7652\u3084\u3084\u3055\u308C\u308B"],
    bestPairingTypeId: "YTCW",
    recommendedKeywords: ["\u6D0B\u83D3\u5B50 \u713C\u304D\u83D3\u5B50", "\u30D0\u30A6\u30E0\u30AF\u30FC\u30D8\u30F3", "\u30B7\u30D5\u30A9\u30F3\u30B1\u30FC\u30AD", "\u30DE\u30C9\u30EC\u30FC\u30CC", "\u30AB\u30B9\u30C6\u30E9", "\u30B7\u30E5\u30FC\u30AF\u30EA\u30FC\u30E0", "\u30A8\u30AF\u30EC\u30A2", "\u30B1\u30FC\u30AD"],
    color: {
      bg: "bg-amber-50",
      badge: "bg-amber-100 text-amber-800",
      border: "border-amber-300",
      accent: "#f59e0b"
    },
    characterName: "\u3075\u308F\u30B7\u30D5\u30A9\u30F3\u738B\u5B50",
    characterEmoji: "\u{1F9C1}"
  },
  STCJ: {
    id: "STCJ",
    code: "STCJ",
    title: "\u3072\u3093\u3084\u308A\u6DBC\u3084\u304B\u548C\u751F\u83D3\u5B50",
    snackCategory: "\u3077\u308B\u3077\u308B\u6C34\u3088\u3046\u304B\u3093\uFF06\u548C\u98A8\u30BC\u30EA\u30FC",
    catchphrase: "\u6DBC\u3084\u304B\u306A\u6E05\u6DBC\u611F\u3068\u3001\u30D7\u30EB\u30F3\u3068\u306A\u3081\u3089\u304B\u306A\u7E4A\u7D30\u3055",
    description: "\u51B7\u305F\u304F\u3066\u67D4\u3089\u304B\u3044\u548C\u306E\u304A\u3084\u3064\u304C\u30C4\u30DC\u3002\u6C34\u3088\u3046\u304B\u3093\u3084\u3042\u3093\u307F\u3064\u3001\u845B\u9905\u306A\u3069\u3001\u53E3\u306E\u4E2D\u3067\u30C4\u30EB\u30EA\u3068\u6EB6\u3051\u308B\u7E4A\u7D30\u306A\u98DF\u611F\u3068\u4E0A\u54C1\u306A\u7518\u3055\u3092\u8FFD\u6C42\u3059\u308B\u98A8\u6D41\u4EBA\u3067\u3059\u3002",
    personalityTraits: ["\u7F8E\u610F\u8B58\u304C\u9AD8\u3044", "\u9759\u304B\u306A\u6642\u9593\u3092\u597D\u3080", "\u7E4A\u7D30\u3067\u6C17\u304C\u5229\u304F"],
    bestPairingTypeId: "STCW",
    recommendedKeywords: ["\u6C34\u3088\u3046\u304B\u3093", "\u3042\u3093\u307F\u3064", "\u304F\u305A\u9905", "\u62B9\u8336\u30BC\u30EA\u30FC", "\u3072\u3093\u3084\u308A \u548C\u83D3\u5B50", "\u51B7\u3084\u3057 \u30B9\u30A4\u30FC\u30C4 \u548C", "\u308F\u3089\u3073\u9905"],
    color: {
      bg: "bg-teal-50",
      badge: "bg-teal-100 text-teal-800",
      border: "border-teal-300",
      accent: "#14b8a6"
    },
    characterName: "\u307F\u305A\u305F\u307E\u30BC\u30EA\u30FC",
    characterEmoji: "\u{1F390}"
  },
  STCW: {
    id: "STCW",
    code: "STCW",
    title: "\u3068\u308D\u3051\u308B\u6975\u4E0A\u3072\u3093\u3084\u308A\u30B9\u30A4\u30FC\u30C4",
    snackCategory: "\u306A\u3081\u3089\u304B\u30D7\u30EA\u30F3\uFF06\u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9",
    catchphrase: "\u53E3\u3069\u3051\u547D\uFF01\u9811\u5F35\u3063\u305F\u81EA\u5206\u3092\u6700\u9AD8\u306B\u7518\u3084\u304B\u3059\u3054\u8912\u7F8E\u30DE\u30CB\u30A2",
    description: "\u6FC3\u539A\u306A\u30D7\u30EA\u30F3\u3001\u30AF\u30EA\u30FC\u30DF\u30FC\u306A\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0\u3001\u53E3\u3069\u3051\u751F\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u306A\u3069\u3001\u51B7\u305F\u304F\u3066\u3068\u308D\u3051\u308B\u7518\u3055\u3092\u611B\u3057\u3066\u3084\u307E\u306A\u3044\u3042\u306A\u305F\u3002\u81EA\u5206\u3078\u306E\u3054\u8912\u7F8E\u4E0A\u624B\u306A\u8D05\u6CA2\u5BB6\u3002",
    personalityTraits: ["\u81EA\u5206\u3092\u7518\u3084\u304B\u3059\u5929\u624D", "\u3053\u3060\u308F\u308A\u6D3E", "\u611F\u899A\u3092\u5927\u5207\u306B\u3059\u308B"],
    bestPairingTypeId: "STCJ",
    recommendedKeywords: ["\u30D7\u30EA\u30F3", "\u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9", "\u751F\u30C1\u30E7\u30B3", "\u30EC\u30A2\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD", "\u3072\u3093\u3084\u308A \u30B9\u30A4\u30FC\u30C4", "\u51B7\u8535 \u6D0B\u83D3\u5B50", "\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0"],
    color: {
      bg: "bg-pink-50",
      badge: "bg-pink-100 text-pink-800",
      border: "border-pink-300",
      accent: "#ec4899"
    },
    characterName: "\u3068\u308D\u308A\u30D7\u30EA\u30F3\u3061\u3083\u3093",
    characterEmoji: "\u{1F36E}"
  },
  SHFJ: {
    id: "SHFJ",
    code: "SHFJ",
    title: "\u30AB\u30EA\u30C3\u3068\u9999\u3070\u3057\u9ED2\u7CD6\u548C\u83D3\u5B50",
    snackCategory: "\u304B\u308A\u3093\u3068\u3046\uFF06\u9ED2\u7CD6\u3042\u3089\u308C",
    catchphrase: "\u4F1D\u7D71\u306E\u30B3\u30AF\u306E\u3042\u308B\u7518\u307F\u3068\u3001\u6B6F\u3054\u305F\u3048\u6E80\u70B9\u306E\u6E80\u8DB3\u611F",
    description: "\u565B\u3080\u307B\u3069\u306B\u5E83\u304C\u308B\u9ED2\u7CD6\u306E\u30B3\u30AF\u3084\u304B\u308A\u3093\u3068\u3046\u306E\u30AB\u30EA\u30C3\u3068\u3057\u305F\u98DF\u611F\u304C\u305F\u307E\u3089\u306A\u3044\uFF01\u4F1D\u7D71\u7684\u306A\u5473\u308F\u3044\u3068\u3057\u3063\u304B\u308A\u3068\u3057\u305F\u98DF\u3079\u5FDC\u3048\u3092\u6C42\u3081\u308B\u5B9F\u76F4\u306A\u30BF\u30A4\u30D7\u3067\u3059\u3002",
    personalityTraits: ["\u82AF\u304C\u5F37\u3044", "\u30D6\u30EC\u306A\u3044\u3053\u3060\u308F\u308A", "\u672C\u7269\u5FD7\u5411"],
    bestPairingTypeId: "SHFW",
    recommendedKeywords: ["\u304B\u308A\u3093\u3068\u3046", "\u9ED2\u7CD6\u3042\u3089\u308C", "\u828B\u304B\u308A\u3093\u3068\u3046", "\u5949\u5929", "\u548C\u83D3\u5B50 \u304A\u304B\u304D", "\u5805\u713C\u304D\u305B\u3093\u3079\u3044", "\u9ED2\u8C46\u3042\u3089\u308C"],
    color: {
      bg: "bg-orange-50",
      badge: "bg-orange-100 text-orange-800",
      border: "border-orange-300",
      accent: "#f97316"
    },
    characterName: "\u30AB\u30EA\u30C3\u3068\u304B\u308A\u3093",
    characterEmoji: "\u{1F358}"
  },
  SHFW: {
    id: "SHFW",
    code: "SHFW",
    title: "\u30B5\u30AF\u30B5\u30AF\u9999\u3070\u3057\u30D0\u30BF\u30FC\u30D1\u30A4",
    snackCategory: "\u6FC3\u539A\u30AF\u30C3\u30AD\u30FC\uFF06\u30EA\u30C3\u30C1\u30D1\u30A4",
    catchphrase: "\u8EFD\u5FEB\u306A\u30B5\u30AF\u30B5\u30AF\u97F3\u3068\u3001\u82B3\u9187\u30D0\u30BF\u30FC\u306E\u9999\u308A\u306B\u5305\u307E\u308C\u3066",
    description: "\u30D0\u30BF\u30FC\u305F\u3063\u3077\u308A\u306E\u30AF\u30C3\u30AD\u30FC\u3084\u30B5\u30AF\u30B5\u30AF\u306E\u30DF\u30EB\u30D5\u30A3\u30FC\u30E6\u30D1\u30A4\u304C\u5927\u597D\u7269\u3002\u565B\u3093\u3060\u77AC\u9593\u306E\u300C\u30B6\u30AF\u30C3\u300D\u300C\u30B5\u30AF\u30C3\u300D\u3068\u3057\u305F\u97F3\u304C\u5927\u597D\u304D\u306A\u3001\u30A8\u30CD\u30EB\u30AE\u30C3\u30B7\u30E5\u3067\u660E\u6717\u306A\u6027\u683C\u3067\u3059\u3002",
    personalityTraits: ["\u660E\u308B\u304F\u524D\u5411\u304D", "\u30EA\u30BA\u30E0\u611F\u3092\u5927\u4E8B\u306B\u3059\u308B", "\u30A2\u30AF\u30C6\u30A3\u30D6"],
    bestPairingTypeId: "SHFJ",
    recommendedKeywords: ["\u30AF\u30C3\u30AD\u30FC", "\u30B5\u30AF\u30B5\u30AF \u30D1\u30A4", "\u30DF\u30EB\u30D5\u30A3\u30FC\u30E6", "\u30D5\u30ED\u30E9\u30F3\u30BF\u30F3"],
    color: {
      bg: "bg-yellow-50",
      badge: "bg-yellow-100 text-yellow-800",
      border: "border-yellow-300",
      accent: "#eab308"
    },
    characterName: "\u30B6\u30AF\u30B6\u30AF\u30AF\u30C3\u30AD\u30FC\u541B",
    characterEmoji: "\u{1F36A}"
  },
  SHCJ: {
    id: "SHCJ",
    code: "SHCJ",
    title: "\u30D1\u30EA\u30C3\u3068\u3072\u3093\u3084\u308A\u6700\u4E2D\u30A2\u30A4\u30B9",
    snackCategory: "\u51B7\u3084\u3057\u6700\u4E2D\uFF06\u30A2\u30A4\u30B9\u3042\u305A\u304D",
    catchphrase: "\u30D1\u30EA\u30C3\u3068\u76AE\u306E\u98DF\u611F\u3068\u3001\u51B7\u305F\u3044\u3042\u305A\u304D\u306E\u7D76\u5999\u30B3\u30E9\u30DC",
    description: "\u30D1\u30EA\u30D1\u30EA\u3057\u305F\u6700\u4E2D\u306E\u76AE\u306E\u4E2D\u306B\u3001\u51B7\u305F\u3044\u30A2\u30A4\u30B9\u3084\u3042\u3093\u3053\u304C\u8A70\u307E\u3063\u305F\u548C\u30B9\u30A4\u30FC\u30C4\u304C\u5927\u597D\u304D\u3002\u98DF\u611F\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u3092\u697D\u3057\u3080\u3001\u6A5F\u8EE2\u306E\u5229\u304F\u30B9\u30DE\u30FC\u30C8\u306A\u4EBA\u3067\u3059\u3002",
    personalityTraits: ["\u8981\u9818\u304C\u826F\u3044", "\u30AE\u30E3\u30C3\u30D7\u840C\u3048", "\u76F4\u611F\u304C\u51B4\u3048\u3066\u3044\u308B"],
    bestPairingTypeId: "YHFW",
    recommendedKeywords: ["\u6700\u4E2D\u30A2\u30A4\u30B9", "\u51B7\u3084\u3057\u305C\u3093\u3056\u3044", "\u3042\u3093\u3053\u30D0\u30FC", "\u62B9\u8336\u3082\u306A\u304B"],
    color: {
      bg: "bg-lime-50",
      badge: "bg-lime-100 text-lime-800",
      border: "border-lime-300",
      accent: "#84cc16"
    },
    characterName: "\u30D1\u30EA\u3082\u306A\u304B\u723A",
    characterEmoji: "\u{1F368}"
  },
  SHCW: {
    id: "SHCW",
    code: "SHCW",
    title: "\u30B6\u30AF\u30C3\u3068\u6C37\u83D3\u30AF\u30E9\u30F3\u30C1",
    snackCategory: "\u30C1\u30E7\u30B3\u30C1\u30C3\u30D7\u30A2\u30A4\u30B9\uFF06\u30AF\u30E9\u30F3\u30C1\u30D0\u30FC",
    catchphrase: "\u51B7\u305F\u3055\u3068\u30B6\u30AF\u30B6\u30AF\u98DF\u611F\u306E\u523A\u6FC0\u7684\u306A\u30CF\u30FC\u30C9\u30CF\u30FC\u30E2\u30CB\u30FC",
    description: "\u30A2\u30A4\u30B9\u306E\u4E2D\u306B\u5165\u3063\u305F\u30AF\u30E9\u30F3\u30C1\u30C1\u30E7\u30B3\u3084\u3001\u30AF\u30C3\u30AD\u30FC\u30B5\u30F3\u30C9\u30A2\u30A4\u30B9\u304C\u5927\u597D\u304D\u306A\u3042\u306A\u305F\u3002\u523A\u6FC0\u7684\u3067\u98FD\u304D\u306A\u3044\u98DF\u611F\u3068\u51B7\u305F\u3055\u3092\u6C42\u3081\u308B\u3001\u597D\u5947\u5FC3\u65FA\u76DB\u306A\u30C1\u30E3\u30EC\u30F3\u30B8\u30E3\u30FC\uFF01",
    personalityTraits: ["\u597D\u5947\u5FC3\u65FA\u76DB", "\u523A\u6FC0\u3092\u6C42\u3081\u308B", "\u30A2\u30A4\u30C7\u30A2\u30DE\u30F3"],
    bestPairingTypeId: "YHCW",
    recommendedKeywords: ["\u30C1\u30E7\u30B3\u30DF\u30F3\u30C8 \u30A2\u30A4\u30B9", "\u30AF\u30E9\u30F3\u30C1\u30A2\u30A4\u30B9", "\u30A2\u30A4\u30B9\u30B5\u30F3\u30C9\u30AF\u30C3\u30AD\u30FC", "\u30C1\u30E7\u30B3\u30C1\u30C3\u30D7"],
    color: {
      bg: "bg-sky-50",
      badge: "bg-sky-100 text-sky-800",
      border: "border-sky-300",
      accent: "#0284c7"
    },
    characterName: "\u30B6\u30AF\u30B6\u30AF\u30A2\u30A4\u30B9\u30DA\u30F3\u30AE\u30F3",
    characterEmoji: "\u{1F427}"
  },
  YTFJ: {
    id: "YTFJ",
    code: "YTFJ",
    title: "\u3082\u3063\u3061\u308A\u6975\u65E8\u713C\u304D\u9905",
    snackCategory: "\u713C\u304D\u305F\u3066\u713C\u304D\u9905\uFF06\u91A4\u6CB9\u751F\u304A\u304B\u304D",
    catchphrase: "\u9999\u3070\u3057\u3044\u91A4\u6CB9\u306E\u9999\u308A\u3068\u3001\u4F38\u3073\uFF5E\u308B\u304A\u9905\u306E\u30DB\u30C3\u3068\u3059\u308B\u306C\u304F\u3082\u308A",
    description: "\u7518\u3055\u3088\u308A\u3082\u9999\u3070\u3057\u3044\u91A4\u6CB9\u306E\u98A8\u5473\u3084\u304A\u9905\u306E\u30E2\u30C1\u30E2\u30C1\u98DF\u611F\u304C\u5927\u597D\u304D\u306A\u3042\u306A\u305F\u3002\u6D3E\u624B\u3055\u3088\u308A\u3082\u3057\u3063\u304B\u308A\u3057\u305F\u5473\u308F\u3044\u3068\u5B9F\u8CEA\u7684\u306A\u6E80\u8DB3\u611F\u3092\u5927\u5207\u306B\u3059\u308B\u3001\u983C\u308A\u304C\u3044\u306E\u3042\u308B\u30BF\u30A4\u30D7\u3002",
    personalityTraits: ["\u3057\u3063\u304B\u308A\u8005", "\u89AA\u5206\u808C\u30FB\u59C9\u5FA1\u808C", "\u7D20\u6734\u3055\u3092\u611B\u3059\u308B"],
    bestPairingTypeId: "YTFW",
    recommendedKeywords: ["\u713C\u304D\u9905", "\u751F\u304A\u304B\u304D", "\u91A4\u6CB9\u714E\u9905", "\u306E\u308A\u9905"],
    color: {
      bg: "bg-amber-100/50",
      badge: "bg-amber-200 text-amber-900",
      border: "border-amber-400",
      accent: "#d97706"
    },
    characterName: "\u3057\u3087\u3046\u3086\u9905\u30DE\u30B9\u30BF\u30FC",
    characterEmoji: "\u{1F361}"
  },
  YTFW: {
    id: "YTFW",
    code: "YTFW",
    title: "\u3057\u3063\u3068\u308A\u30C1\u30FC\u30BA\u30BB\u30A4\u30DC\u30EA\u30FC",
    snackCategory: "\u6FC3\u539A\u30C1\u30FC\u30BA\u30B9\u30B3\u30FC\u30F3\uFF06\u5869\u30D0\u30BF\u30FC\u30B9\u30B3\u30FC\u30F3",
    catchphrase: "\u30C1\u30FC\u30BA\u306E\u30B3\u30AF\u3068\u30D0\u30BF\u30FC\u306E\u5869\u6C17\u304C\u91B8\u3057\u51FA\u3059\u5927\u4EBA\u306A\u3072\u3068\u3068\u304D",
    description: "\u7518\u3059\u304E\u306A\u3044\u30BB\u30A4\u30DC\u30EA\u30FC\uFF08\u5869\u7CFB\uFF09\u306E\u713C\u304D\u83D3\u5B50\u3084\u3001\u82B3\u9187\u306A\u30C1\u30FC\u30BA\u30B9\u30B3\u30FC\u30F3\u304C\u5927\u597D\u7269\u3002\u30AB\u30D5\u30A7\u3067\u30EF\u30A4\u30F3\u3084\u30B3\u30FC\u30D2\u30FC\u3068\u5171\u306B\u904E\u3054\u3059\u6642\u9593\u3092\u697D\u3057\u3080\u3001\u6D17\u7DF4\u3055\u308C\u305F\u304A\u6D12\u843D\u3055\u3093\u3002",
    personalityTraits: ["\u30DE\u30A4\u30DA\u30FC\u30B9", "\u30CF\u30A4\u30BB\u30F3\u30B9", "\u5FC3\u5730\u3088\u3044\u8DDD\u96E2\u611F\u3092\u4FDD\u3064"],
    bestPairingTypeId: "YTFJ",
    recommendedKeywords: ["\u30C1\u30FC\u30BA\u30B9\u30B3\u30FC\u30F3", "\u5869\u30D0\u30BF\u30FC\u30B9\u30B3\u30FC\u30F3", "\u30BB\u30A4\u30DC\u30EA\u30FC \u30BF\u30EB\u30C8", "\u30C1\u30FC\u30BA\u30D1\u30A4"],
    color: {
      bg: "bg-stone-50",
      badge: "bg-stone-200 text-stone-800",
      border: "border-stone-300",
      accent: "#78716c"
    },
    characterName: "\u30C1\u30FC\u30BA\u30BD\u30E0\u30EA\u30A8",
    characterEmoji: "\u{1F9C0}"
  },
  YTCJ: {
    id: "YTCJ",
    code: "YTCJ",
    title: "\u3072\u3093\u3084\u308A\u5869\u51B7\u3084\u3057\u8C46\u8150",
    snackCategory: "\u51B7\u88FD\u5869\u304A\u3084\u3064\uFF06\u3054\u307E\u3069\u3046\u3075\u30B9\u30A4\u30FC\u30C4",
    catchphrase: "\u5869\u6C17\u3068\u51B7\u305F\u3055\u304C\u751F\u3080\u3001\u3042\u3063\u3055\u308A\u30D8\u30EB\u30B7\u30FC\u306A\u6E05\u6DBC\u611F",
    description: "\u51B7\u305F\u304F\u3066\u3055\u3063\u3071\u308A\u3057\u305F\u5869\u5473\u3084\u3001\u30B4\u30DE\u8C46\u8150\u30FB\u8C46\u8150\u30B9\u30A4\u30FC\u30C4\u306A\u3069\u306E\u30D8\u30EB\u30B7\u30FC\uFF06\u30DE\u30A4\u30EB\u30C9\u306A\u304A\u3084\u3064\u3092\u597D\u3080\u3042\u306A\u305F\u3002\u7121\u99C4\u306E\u306A\u3044\u30B9\u30C3\u30AD\u30EA\u3057\u305F\u751F\u6D3B\u3092\u597D\u3080\u30CA\u30C1\u30E5\u30E9\u30EB\u5FD7\u5411\u3002",
    personalityTraits: ["\u30CA\u30C1\u30E5\u30E9\u30EB\u5FD7\u5411", "\u51B7\u9759\u3067\u5BA2\u89B3\u7684", "\u81EA\u5DF1\u7BA1\u7406\u304C\u5F97\u610F"],
    bestPairingTypeId: "YHCJ",
    recommendedKeywords: ["\u80E1\u9EBB\u8C46\u8150", "\u5869\u7F8A\u7FB9", "\u51B7\u3084\u3057\u5869\u8C46", "\u30B8\u30FC\u30DE\u30FC\u30DF\u8C46\u8150", "\u5869\u30BC\u30EA\u30FC", "\u8C46\u8150 \u30B9\u30A4\u30FC\u30C4"],
    color: {
      bg: "bg-slate-50",
      badge: "bg-slate-200 text-slate-800",
      border: "border-slate-300",
      accent: "#64748b"
    },
    characterName: "\u3054\u307E\u3069\u3046\u3075\u3055\u3093",
    characterEmoji: "\u{1F9CA}"
  },
  YTCW: {
    id: "YTCW",
    code: "YTCW",
    title: "\u30AF\u30FC\u30EB\u30C1\u30FC\u30BA\u30C7\u30A3\u30C3\u30D7",
    snackCategory: "\u51B7\u88FD\u6FC3\u539A\u30C1\u30FC\u30BA\u30C7\u30A3\u30C3\u30D7\uFF06\u5869\u51B7\u3084\u3057\u30CA\u30C3\u30C4",
    catchphrase: "\u51B7\u305F\u3044\u304A\u3064\u307E\u307F\u30B9\u30A4\u30FC\u30C4\u3067\u697D\u3057\u3080\u3001\u6975\u4E0A\u30C1\u30EB\u30BF\u30A4\u30E0",
    description: "\u51B7\u3048\u305F\u30AF\u30EA\u30FC\u30E0\u30C1\u30FC\u30BA\u3084\u30B5\u30FC\u30E2\u30F3\u30C7\u30A3\u30C3\u30D7\u3001\u51B7\u3084\u3057\u30B9\u30D1\u30A4\u30B7\u30FC\u30C7\u30A3\u30C3\u30D7\u306A\u3069\u3001\u304A\u9152\u306E\u304A\u4F9B\u306B\u3082\u306A\u308B\u5927\u4EBA\u306E\u304A\u3084\u3064\u304C\u5927\u597D\u304D\u3002\u591C\u306E\u30C1\u30EB\u30BF\u30A4\u30E0\u3092\u611B\u3059\u308B\u5927\u4EBA\u306A\u611F\u6027\u306E\u6301\u3061\u4E3B\u3002",
    personalityTraits: ["\u591C\u578B\u30C1\u30EB\u6D3E", "\u500B\u6027\u7684", "\u81EA\u5206\u306E\u4E16\u754C\u3092\u6301\u3063\u3066\u3044\u308B"],
    bestPairingTypeId: "STFW",
    recommendedKeywords: ["\u30AF\u30EA\u30FC\u30E0\u30C1\u30FC\u30BA \u30C7\u30A3\u30C3\u30D7", "\u5869\u30CA\u30C3\u30C4", "\u51B7\u88FD\u30C1\u30FC\u30BA", "\u30B9\u30E2\u30FC\u30AF\u30CA\u30C3\u30C4"],
    color: {
      bg: "bg-indigo-50",
      badge: "bg-indigo-100 text-indigo-800",
      border: "border-indigo-300",
      accent: "#6366f1"
    },
    characterName: "\u30CA\u30A4\u30C8\u30C1\u30FC\u30BA\u30AD\u30E3\u30C3\u30C8",
    characterEmoji: "\u{1F377}"
  },
  YHFJ: {
    id: "YHFJ",
    code: "YHFJ",
    title: "\u30D0\u30EA\u30C3\u3068\u786C\u713C\u304D\u624B\u5869\u305B\u3093\u3079\u3044",
    snackCategory: "\u4F1D\u7D71\u306E\u5805\u713C\u304D\u91A4\u6CB9\u305B\u3093\u3079\u3044\uFF06\u67FF\u306E\u7A2E",
    catchphrase: "\u30D0\u30EA\u30D0\u30EA\u565B\u307F\u7815\u304F\u723D\u5FEB\u611F\uFF01\u91A4\u6CB9\u3068\u6D77\u82D4\u306E\u8CEA\u5B9F\u525B\u5065\u304A\u3084\u3064",
    description: "\u6B6F\u3054\u305F\u3048\u629C\u7FA4\u306E\u5805\u713C\u304D\u305B\u3093\u3079\u3044\u3084\u67FF\u306E\u7A2E\u3001\u3042\u3089\u308C\u304C\u5927\u597D\u304D\uFF01\u5618\u306E\u306A\u3044\u30B7\u30F3\u30D7\u30EB\u306A\u7F8E\u5473\u3057\u3055\u3068\u3001\u30D0\u30EA\u30D0\u30EA\u98DF\u3079\u308B\u723D\u5FEB\u611F\u3067\u30B9\u30C8\u30EC\u30B9\u3092\u5439\u304D\u98DB\u3070\u3059\u30D1\u30EF\u30D5\u30EB\u306A\u4EBA\u3002",
    personalityTraits: ["\u60C5\u306B\u539A\u3044", "\u30B9\u30C8\u30EC\u30B9\u89E3\u6D88\u304C\u5F97\u610F", "\u7AF9\u3092\u5272\u3063\u305F\u6027\u683C"],
    bestPairingTypeId: "STFJ",
    recommendedKeywords: ["\u5805\u713C\u304D\u714E\u9905", "\u67FF\u306E\u7A2E", "\u5869\u304A\u304B\u304D", "\u9ED2\u80E1\u6912\u305B\u3093\u3079\u3044"],
    color: {
      bg: "bg-stone-100",
      badge: "bg-stone-300 text-stone-900",
      border: "border-stone-400",
      accent: "#57534e"
    },
    characterName: "\u30D0\u30EA\u30D0\u30EA\u305B\u3093\u3079\u3044\u5927\u5C06",
    characterEmoji: "\u{1F358}"
  },
  YHFW: {
    id: "YHFW",
    code: "YHFW",
    title: "\u30AB\u30EA\u30C3\u3068\u30B9\u30D1\u30A4\u30B7\u30FC\u30AF\u30E9\u30C3\u30AB\u30FC",
    snackCategory: "\u6FC3\u539A\u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9\uFF06\u30CF\u30CB\u30FC\u30DE\u30B9\u30BF\u30FC\u30C9\u30D7\u30EC\u30C3\u30C4\u30A7\u30EB",
    catchphrase: "\u3084\u307F\u3064\u304D\u5FC5\u81F3\uFF01\u30AC\u30C4\u30F3\u3068\u97FF\u304F\u5869\u6C17\u3068\u30D0\u30EA\u30D0\u30EA\u30CF\u30FC\u30C9\u98DF\u611F",
    description: "\u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9\u3084\u30C8\u30EB\u30C6\u30A3\u30FC\u30E4\u30C1\u30C3\u30D7\u30B9\u3001\u5869\u30CA\u30C3\u30C4\u306A\u3069\u3001\u5869\u6C17\u3068\u98DF\u611F\u304C\u7656\u306B\u306A\u308B\u304A\u83D3\u5B50\u304C\u5927\u597D\u304D\u3002\u30D1\u30FC\u30C6\u30A3\u30FC\u3084\u53CB\u9054\u3068\u30EF\u30A4\u30EF\u30A4\u697D\u3057\u3080\u306E\u304C\u5927\u597D\u304D\u306A\u30E0\u30FC\u30C9\u30E1\u30FC\u30AB\u30FC\uFF01",
    personalityTraits: ["\u30E0\u30FC\u30C9\u30E1\u30FC\u30AB\u30FC", "\u304A\u796D\u308A\u597D\u304D", "\u76F4\u611F\u7684\u3067\u884C\u52D5\u7684"],
    bestPairingTypeId: "SHCJ",
    recommendedKeywords: ["\u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9", "\u30D7\u30EC\u30C3\u30C4\u30A7\u30EB", "\u30DF\u30C3\u30AF\u30B9\u30CA\u30C3\u30C4 \u5869\u5473", "\u30C8\u30EB\u30C6\u30A3\u30FC\u30E4"],
    color: {
      bg: "bg-rose-50",
      badge: "bg-rose-100 text-rose-800",
      border: "border-rose-300",
      accent: "#f43f5e"
    },
    characterName: "\u30DD\u30C6\u30C1\u304F\u3093",
    characterEmoji: "\u{1F35F}"
  },
  YHCJ: {
    id: "YHCJ",
    code: "YHCJ",
    title: "\u51B7\u3084\u3057\u5869\u3082\u306A\u304B\uFF06\u51B7\u3084\u3057\u679D\u8C46\u30B9\u30CA\u30C3\u30AF",
    snackCategory: "\u5869\u51B7\u3084\u3057\u786C\u83D3\u5B50\uFF06\u30D5\u30EA\u30FC\u30BA\u30C9\u30E9\u30A4\u679D\u8C46",
    catchphrase: "\u3072\u3093\u3084\u308A\u51B7\u3084\u3057\u305F\u5805\u713C\u304D\u306E\u7C8B\u3002\u3055\u3063\u3071\u308A\u5869\u5473\u3067\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5",
    description: "\u51B7\u3084\u3057\u3066\u98DF\u3079\u308B\u5869\u305B\u3093\u3079\u3044\u3084\u51B7\u305F\u3055\u3092\u611F\u3058\u308B\u548C\u30B9\u30CA\u30C3\u30AF\u3002\u4E00\u98A8\u5909\u308F\u3063\u305F\u697D\u3057\u307F\u65B9\u3092\u77E5\u3063\u3066\u3044\u308B\u3001\u77E5\u6027\u3042\u3075\u308C\u308B\u500B\u6027\u7684\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC\u30BF\u30A4\u30D7\u3002",
    personalityTraits: ["\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6", "\u4EBA\u3068\u9055\u3046\u8996\u70B9\u3092\u6301\u3064", "\u51B7\u9759\u6C88\u7740"],
    bestPairingTypeId: "YTCJ",
    recommendedKeywords: ["\u5869\u3082\u306A\u304B", "\u304A\u3064\u307E\u307F \u30B9\u30CA\u30C3\u30AF", "\u548C\u83D3\u5B50 \u5869", "\u51B7\u88FD \u304A\u3064\u307E\u307F", "\u3072\u3093\u3084\u308A \u30B9\u30CA\u30C3\u30AF"],
    color: {
      bg: "bg-cyan-50",
      badge: "bg-cyan-100 text-cyan-800",
      border: "border-cyan-300",
      accent: "#06b6d4"
    },
    characterName: "\u30AF\u30FC\u30EB\u30A8\u30C0\u30DE\u30E1",
    characterEmoji: "\u{1FADB}"
  },
  YHCW: {
    id: "YHCW",
    code: "YHCW",
    title: "\u30B9\u30D1\u30A4\u30B7\u30FC\u30D5\u30ED\u30FC\u30BA\u30F3\u30AF\u30E9\u30F3\u30C1",
    snackCategory: "\u51B7\u3084\u3057\u30B9\u30D1\u30A4\u30B7\u30FC\u30CA\u30C3\u30C4\uFF06\u30D7\u30EC\u30C3\u30C4\u30A7\u30EB\u30A2\u30A4\u30B9",
    catchphrase: "\u30AF\u30FC\u30EB\u3067\u30CF\u30FC\u30C9\u306A\u8F9B\u5869\u7CFB\uFF01\u7656\u306B\u306A\u308B\u5927\u4EBA\u306E\u304A\u3064\u307E\u307F\u30D5\u30ED\u30FC\u30BA\u30F3",
    description: "\u30D5\u30ED\u30FC\u30BA\u30F3\u30B9\u30D1\u30A4\u30B7\u30FC\u30CA\u30C3\u30C4\u3084\u51B7\u3084\u3057\u30DD\u30C6\u30C8\u3001\u30D7\u30EC\u30C3\u30C4\u30A7\u30EB\u30A2\u30A4\u30B9\u306A\u3069\u3001\u610F\u5916\u6027\u3068\u30A4\u30F3\u30D1\u30AF\u30C8\u3092\u611B\u3059\u308B\u30DF\u30B9\u30C6\u30EA\u30A2\u30B9\u306A\u3042\u306A\u305F\u3002\u30C4\u30F3\u30C7\u30EC\u3067\u30CF\u30DE\u308B\u3068\u6DF1\u3044\u9B45\u60D1\u306E\u6301\u3061\u4E3B\u3002",
    personalityTraits: ["\u30DF\u30B9\u30C6\u30EA\u30A2\u30B9", "\u63A2\u7A76\u5FC3\u304C\u5F37\u3044", "\u30AE\u30E3\u30C3\u30D7\u3067\u9B45\u4E86\u3059\u308B"],
    bestPairingTypeId: "SHCW",
    recommendedKeywords: ["\u30B9\u30D1\u30A4\u30B7\u30FC\u30CA\u30C3\u30C4", "\u30D7\u30EC\u30C3\u30C4\u30A7\u30EB \u30A2\u30A4\u30B9", "\u30B8\u30E3\u30FC\u30AD\u30FC", "\u51B7\u3084\u3057\u30DD\u30C6\u30C8", "\u30D5\u30ED\u30FC\u30BA\u30F3 \u304A\u3064\u307E\u307F"],
    color: {
      bg: "bg-purple-50",
      badge: "bg-purple-100 text-purple-800",
      border: "border-purple-300",
      accent: "#a855f7"
    },
    characterName: "\u30D5\u30ED\u30FC\u30BA\u30F3\u30B9\u30D1\u30A4\u30B9",
    characterEmoji: "\u{1F968}"
  }
};

// src/data/fallbackItems.ts
var FALLBACK_ITEMS = [
  // --- Sweet (S) 系 ---
  // 高価格帯 (7000〜10000円)
  {
    itemName: "\u4EAC\u90FD\u7947\u5712 \u9AD8\u7D1A\u5929\u7136\u6C37 \u4EAC\u304B\u304D\u6C37\uFF06\u679C\u6C41\u30B7\u30ED\u30C3\u30D7 \u8D05\u6CA2\u30D5\u30EB\u30BB\u30C3\u30C8",
    itemPrice: 8800,
    itemUrl: "https://item.rakuten.co.jp/f260002-kyoto/262102_toyo001_a/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e6d4.c956da77.5660e6d5.10df9ac1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff260002-kyoto%2F262102_toyo001_a%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f260002-kyoto/cabinet/imgrc0113163681.jpg?_ex=240x240",
    shopName: "\u4EAC\u90FD\u3075\u304F\u3044",
    reviewAverage: 4.8,
    reviewCount: 95,
    targetTypes: ["STCJ", "SHCJ"]
  },
  {
    itemName: "\u9280\u5EA7\u5343\u758B\u5C4B \u7279\u9078\u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9\uFF06\u30BD\u30EB\u30D9 18\u500B\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 4104,
    itemUrl: "https://item.rakuten.co.jp/ginza-sembikiya/876881/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e53a.481b5674.5660e53b.66c4fc60/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fginza-sembikiya%2F876881%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ginza-sembikiya/cabinet/img/frozen/pgs-039/pgs-039-3.jpg?_ex=240x240",
    shopName: "\u9280\u5EA7\u5343\u758B\u5C4B",
    reviewAverage: 4,
    reviewCount: 320,
    targetTypes: ["STCJ", "SHCJ", "STCW", "SHCW"]
  },
  // 中価格帯〜ギフト
  {
    itemName: "\u7FBD\u4E8C\u91CD\u30D0\u30BF\u30FC\u30C1\u30FC\u30BA\u30B5\u30F3\u30C9 (RUNNY CHEESE)",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/runnycheese/10000050/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56610463.4aaa6b01.56610464.7ac5a73c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frunnycheese%2F10000050%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/runnycheese/cabinet/08668840/12697223/imgrc0100350015.jpg?_ex=240x240",
    shopName: "RUNNY CHEESE",
    reviewAverage: 4.8,
    reviewCount: 230,
    targetTypes: ["STFW", "SHFW", "STCW", "SHCW"]
  },
  {
    itemName: "\u5317\u6D77\u9053\u6FC3\u751F\u30D0\u30BF\u30FC\u30B5\u30F3\u30C9 (\u5C0F\u6797\u7267\u5834)",
    itemPrice: 2990,
    itemUrl: "https://item.rakuten.co.jp/onakaegg/7623/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566108a9.2cc4600e.566108aa.3a028b5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fonakaegg%2F7623%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/onakaegg/cabinet/09463831/10545052/11613242/konsen202603.jpg?_ex=240x240",
    shopName: "\u6839\u91E7\u751F\u4E73100%\u5C0F\u6797\u7267\u5834",
    reviewAverage: 4.7,
    reviewCount: 180,
    targetTypes: ["STFW", "SHFW", "STCW", "SHCW"]
  },
  {
    itemName: "\u5E78\u3075\u304F\u306E\u548C\u83D3\u5B50 \u3055\u304F\u3089\u3082\u3061 10\u500B\u5165",
    itemPrice: 2106,
    itemUrl: "https://item.rakuten.co.jp/ko-fuku/sakuramochi-10a/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56610b61.ff9b0f48.56610b62.fc3ed4e9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fko-fuku%2Fsakuramochi-10a%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ko-fuku/cabinet/biiino/item/main-image/20250408145156_1.jpg?_ex=240x240",
    shopName: "\u304A\u83D3\u5B50\u306E\u5E78\u3075\u304F",
    reviewAverage: 4.6,
    reviewCount: 140,
    targetTypes: ["STFJ", "SHFJ"]
  },
  {
    itemName: "\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC\u30B7\u30F3 \u713C\u304D\u83D3\u5B50\u8A70\u3081\u5408\u308F\u305B (EX-C)",
    itemPrice: 2180,
    itemUrl: "https://item.rakuten.co.jp/factory-shin/ex-c/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660d5a8.6c37cd58.5660d5a9.d252909a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffactory-shin%2Fex-c%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/factory-shin/cabinet/biiino/item/main-image/20260204223650_1.jpg?_ex=240x240",
    shopName: "\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC\u30B7\u30F3",
    reviewAverage: 4.6,
    reviewCount: 128,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8 \u30D5\u30A3\u30CA\u30F3\u30B7\u30A7\u30FB\u30DE\u30C9\u30EC\u30FC\u30CC\u8A70\u5408\u305B",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/henri-charpentier/773104/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660df20.8eb492fe.5660df21.146733d3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhenri-charpentier%2F773104%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/henri-charpentier/cabinet/2026/campaign2026/p-thumbnail-26/hgch-24_p10.jpg?_ex=240x240",
    shopName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8",
    reviewAverage: 4.7,
    reviewCount: 340,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "GODIVA \u30CA\u30DD\u30EA\u30BF\u30F3 (450g\u5927\u5BB9\u91CF)",
    itemPrice: 500,
    itemUrl: "https://item.rakuten.co.jp/suzuyaebisudo/r-godiva-napolitain/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e104.09b256bc.5660e105.dd0e639a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuzuyaebisudo%2Fr-godiva-napolitain%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/suzuyaebisudo/cabinet/product/item02/napolitain2025_01.jpg?_ex=240x240",
    shopName: "GODIVA",
    reviewAverage: 4.8,
    reviewCount: 1200,
    targetTypes: ["SHCW", "STCW", "SHFW", "STFW"]
  },
  {
    itemName: "\u30C8\u30DF\u30FC\u30BA\u30D7\u30EA\u30F3 6\u7A2E\u30D0\u30E9\u30A8\u30C6\u30A3\u30BB\u30C3\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/tommys-pudding/variety/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e1eb.ba30a6ca.5660e1ec.974f439d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftommys-pudding%2Fvariety%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/tommys-pudding/cabinet/08979804/6flaverset_02.jpg?_ex=240x240",
    shopName: "\u30C8\u30DF\u30FC\u30BA\u30D7\u30EA\u30F3",
    reviewAverage: 4.6,
    reviewCount: 95,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u5922\u5DE5\u623F\u305F\u304B\u3089 \u30D7\u30EC\u30DF\u30A2\u30E0\u30D7\u30EA\u30F3 6\u500B\u30BB\u30C3\u30C8",
    itemPrice: 3530,
    itemUrl: "https://item.rakuten.co.jp/yumekaboutakara/pudding/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e32f.0be34bcc.5660e330.cebb16ff/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyumekaboutakara%2Fpudding%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/yumekaboutakara/cabinet/12426624/12649973/imgrc0099868578.jpg?_ex=240x240",
    shopName: "\u5922\u5DE5\u623F\u305F\u304B\u3089",
    reviewAverage: 4.5,
    reviewCount: 82,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u9280\u5EA7\u5343\u758B\u5C4B \u9280\u5EA7\u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9\uFF06\u30BD\u30EB\u30D9 10\u500B\u5165",
    itemPrice: 4536,
    itemUrl: "https://item.rakuten.co.jp/ginza-sembikiya/876881/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e53a.481b5674.5660e53b.66c4fc60/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fginza-sembikiya%2F876881%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ginza-sembikiya/cabinet/img/frozen/pgs-039/pgs-039-3.jpg?_ex=240x240",
    shopName: "\u9280\u5EA7\u5343\u758B\u5C4B",
    reviewAverage: 4.8,
    reviewCount: 560,
    targetTypes: ["STCJ", "SHCJ", "STCW"]
  },
  {
    itemName: "\u30B9\u30EA\u30FC\u30CA\u30A4\u30B9 \u8D05\u6CA2\u30A2\u30A4\u30B9\u30A2\u30BD\u30FC\u30C8\u30BB\u30C3\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/threenice/20000693/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e447.eea370fe.5660e448.5ebcc31c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fthreenice%2F20000693%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/threenice/cabinet/aiga-/50fuku_2.jpg?_ex=240x240",
    shopName: "\u30B9\u30EA\u30FC\u30CA\u30A4\u30B9",
    reviewAverage: 4.6,
    reviewCount: 110,
    targetTypes: ["STCJ", "SHCJ", "STCW"]
  },
  {
    itemName: "\u4E0B\u753A\u30D0\u30FC\u30E0\u30AF\u30FC\u30D8\u30F3 \u8A33\u3042\u308A\u30B8\u30E3\u30F3\u30DC\u30D0\u30FC\u30E0 3\u500B\u798F\u888B",
    itemPrice: 1999,
    itemUrl: "https://item.rakuten.co.jp/shitamachibaum/gacha-fukubukuro/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e832.5b29646a.5660e833.25a297c9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshitamachibaum%2Fgacha-fukubukuro%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/shitamachibaum/cabinet/13104948/baumgacha_thm_29.jpg?_ex=240x240",
    shopName: "\u4E0B\u753A\u30D0\u30FC\u30E0\u30AF\u30FC\u30D8\u30F3",
    reviewAverage: 4.7,
    reviewCount: 890,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u4E0B\u753A\u30D0\u30FC\u30E0\u30AF\u30FC\u30D8\u30F3 1000\u5186\u30DD\u30C3\u30AD\u30EA\u304A\u8A66\u3057\u30D0\u30FC\u30E0",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/shitamachibaum/10000007test/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e832.5b29646a.5660e833.25a297c9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshitamachibaum%2F10000007test%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/shitamachibaum/cabinet/11372617/2501_1k2k_thm2.jpg?_ex=240x240",
    shopName: "\u4E0B\u753A\u30D0\u30FC\u30E0\u30AF\u30FC\u30D8\u30F3",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["STFW", "SHFW"]
  },
  // --- ケーキ・洋菓子系（ショートケーキ・バースデーケーキなど） ---
  {
    itemName: "\u30D6\u30E9\u30F3\u30C6\u30A3\u30FC\u30B0\u30EB \u30B7\u30E7\u30FC\u30C8\u30B1\u30FC\u30AD",
    itemPrice: 3e3,
    itemUrl: "https://item.rakuten.co.jp/blanctigre/10000067/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e5c1.63851d98.5663e5c2.933d5ed1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fblanctigre%2F10000067%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/blanctigre/cabinet/10259294/imgrc0103209623.jpg?_ex=240x240",
    shopName: "blanctigre",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B5\u30F3\u30BF\u30A2\u30F3\u30B8\u30A7\u30E9 \u3044\u3061\u3054\u30C7\u30B3\u30EC\u30FC\u30B7\u30E7\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 3150,
    itemUrl: "https://item.rakuten.co.jp/photocake-santaangela/2814b/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e770.b523b6c5.5663e771.b9d95a3e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fphotocake-santaangela%2F2814b%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/photocake-santaangela/cabinet/08506740/08509595/asuraku-itigo.jpg?_ex=240x240",
    shopName: "\u30B5\u30F3\u30BF\u30A2\u30F3\u30B8\u30A7\u30E9",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u83D3\u5320\u3082\u308A\u3093 \u304F\u307E\u3061\u3083\u3093\u30D0\u30FC\u30B9\u30C7\u30FC\u30B1\u30FC\u30AD",
    itemPrice: 4980,
    itemUrl: "https://item.rakuten.co.jp/kasyou-morin/morin-birthday-cake-01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e83e.53f47b95.5663e83f.660739f6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkasyou-morin%2Fmorin-birthday-cake-01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kasyou-morin/cabinet/05776678/10372134/11344336/kuma-ss-bd01.jpg?_ex=240x240",
    shopName: "\u83D3\u5320\u3082\u308A\u3093",
    reviewAverage: 4,
    reviewCount: 78,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7 \u696D\u52D9\u7528 \u82FA\u30B7\u30E7\u30FC\u30C8\u30B1\u30FC\u30AD",
    itemPrice: 1725,
    itemUrl: "https://item.rakuten.co.jp/syokusai-shop/19713/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e976.6ab3e990.5663e977.69fe0f48/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsyokusai-shop%2F19713%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/syokusai-shop/cabinet/item/mainimg2/19713.jpg?_ex=240x240",
    shopName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 56,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u306A\u3054\u307F\u3084 6\u7A2E\u30D0\u30E9\u30A8\u30C6\u30A3\u30B1\u30FC\u30AD\u30BB\u30C3\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/cake-shop/6variety-set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663ea80.eaecb11e.5663ea81.c7e09369/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcake-shop%2F6variety-set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/cake-shop/cabinet/default/original-cake/nagomiya/6variety-set-3.jpg?_ex=240x240",
    shopName: "\u30B1\u30FC\u30AD\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u304B\u307E\u30B7\u30E7 \u30D7\u30C1\u30AB\u30C3\u30D7\u30B1\u30FC\u30AD\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 4500,
    itemUrl: "https://item.rakuten.co.jp/kamasho/10001896/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663f2ad.fcf5031b.5663f2ae.ea00e830/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamasho%2F10001896%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamasho/cabinet/syo1/260401-11c.jpg?_ex=240x240",
    shopName: "\u304B\u307E\u30B7\u30E7",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B3\u30C8\u30D6\u30AD \u30D5\u30EB\u30FC\u30C4\u30C7\u30B3\u30EC\u30FC\u30B7\u30E7\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 4070,
    itemUrl: "https://item.rakuten.co.jp/lecadeaukotobuki/cream-4/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663f30c.b27a5611.5663f30d.9339f953/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flecadeaukotobuki%2Fcream-4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/lecadeaukotobuki/cabinet/top/cream-4.jpg?_ex=240x240",
    shopName: "\u30EB\u30FB\u30AB\u30C9\u30A5\u30FB\u30B3\u30C8\u30D6\u30AD",
    reviewAverage: 4,
    reviewCount: 64,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B5\u30F3\u30D7\u30E9\u30B6 \u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u30B7\u30E7\u30FC\u30C8\u30B1\u30FC\u30AD",
    itemPrice: 1750,
    itemUrl: "https://item.rakuten.co.jp/sanpuraza/5038381-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663f3a5.17b0c126.5663f3a6.519f78ab/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanpuraza%2F5038381-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sanpuraza/cabinet/202605061105.jpg?_ex=240x240",
    shopName: "\u30B5\u30F3\u30D7\u30E9\u30B6",
    reviewAverage: 4.5,
    reviewCount: 48,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B1\u30D9\u30C3\u30AF 12\u7A2E\u30D0\u30E9\u30A8\u30C6\u30A3\u30B1\u30FC\u30AD\u30BB\u30C3\u30C8",
    itemPrice: 5480,
    itemUrl: "https://item.rakuten.co.jp/quebec/10000217/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663f426.9fe9fe18.5663f427.29d7f6ea/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fquebec%2F10000217%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/quebec/cabinet/zk/2022va/12va/12-nwe-main.jpg?_ex=240x240",
    shopName: "\u30B1\u30D9\u30C3\u30AF",
    reviewAverage: 4.5,
    reviewCount: 215,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30ED\u30C3\u30C6 \u82FA\u306E\u30B7\u30E7\u30FC\u30C8\u30B1\u30FC\u30AD\u30A2\u30A4\u30B9",
    itemPrice: 2870,
    itemUrl: "https://item.rakuten.co.jp/lotteshop/106504/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663f4ce.f2f110fd.5663f4cf.100062a1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flotteshop%2F106504%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/lotteshop/cabinet/ice01/10677684/106504_ichigo-short.jpg?_ex=240x240",
    shopName: "\u30ED\u30C3\u30C6\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["STCW"]
    // アイスは完全にChilled
  },
  {
    itemName: "\u8A33\u3042\u308A \u82FA\u30C1\u30E7\u30B3\u30B1\u30FC\u30AD",
    itemPrice: 3480,
    itemUrl: "https://item.rakuten.co.jp/rin-mo/rm-cake-wake-01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663f578.58d73a21.5663f579.269e44c0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frin-mo%2Frm-cake-wake-01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rin-mo/cabinet/09936437/10082448/11206176/sc-wake-01.jpg?_ex=240x240",
    shopName: "rin-mo",
    reviewAverage: 4,
    reviewCount: 65,
    targetTypes: ["STFW", "STCW"]
  },
  // --- ケーキ・洋菓子・ふるさと納税系 ---
  {
    itemName: "\u3046\u308D\u3053\u3084 \u8A33\u3042\u308A \u7AEF\u3063\u3053\u30B1\u30FC\u30AD",
    itemPrice: 3800,
    itemUrl: "https://item.rakuten.co.jp/urokoya/hashikko/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663fdbb.eeb735a8.5663fdbc.16962176/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Furokoya%2Fhashikko%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/urokoya/cabinet/11717329/hashikko/rke1.jpg?_ex=240x240",
    shopName: "\u3046\u308D\u3053\u3084",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B9\u30DE\u30A4\u30EB\u30C7\u30A4\u30B8\u30FC \u304F\u307E\u3055\u3093\u30AB\u30C3\u30D7\u30B1\u30FC\u30AD",
    itemPrice: 3700,
    itemUrl: "https://item.rakuten.co.jp/smiledaisy/cupcake-kuma/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663fef2.b76a9f9b.5663fef3.658b9915/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsmiledaisy%2Fcupcake-kuma%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/smiledaisy/cabinet/compass1692083911.jpg?_ex=240x240",
    shopName: "\u30B9\u30DE\u30A4\u30EB\u30C7\u30A4\u30B8\u30FC",
    reviewAverage: 4.5,
    reviewCount: 42,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u82FA\u306E\u30ED\u30FC\u30EB\u30B1\u30FC\u30AD",
    itemPrice: 3580,
    itemUrl: "https://item.rakuten.co.jp/bcc/roll-cake-ichigo-n/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56640079.5fbdbac7.5664007d.60c65760/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbcc%2Froll-cake-ichigo-n%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bcc/cabinet/02413430/ichigo-roll-n.jpg?_ex=240x240",
    shopName: "\u6D0B\u83D3\u5B50\u5E97\u30DC\u30B9\u30C8\u30F3",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B8\u30A7\u30CB\u30A2\u30EB \u30DF\u30C3\u30AF\u30B9\u30D9\u30EA\u30FC\u30B1\u30FC\u30AD",
    itemPrice: 4700,
    itemUrl: "https://item.rakuten.co.jp/genial/mb-001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566401fd.96e3b107.566401fe.7260ee6b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgenial%2Fmb-001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/genial/cabinet/item00/mb-001-01.jpg?_ex=240x240",
    shopName: "\u30B8\u30A7\u30CB\u30A2\u30EB",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u4E0D\u4E8C\u5BB6 \u82FA\u306E\u30B1\u30FC\u30AD",
    itemPrice: 3500,
    itemUrl: "https://item.rakuten.co.jp/fujiya-family-town/80052/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566403d6.06c1076e.566403d7.c5d0b032/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffujiya-family-town%2F80052%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/fujiya-family-town/cabinet/sweets01/sweets80052/80052_1.jpg?_ex=240x240",
    shopName: "\u4E0D\u4E8C\u5BB6\u30D5\u30A1\u30DF\u30EA\u30FC\u30BF\u30A6\u30F3",
    reviewAverage: 4.5,
    reviewCount: 150,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8 \u30AB\u30B9\u30BF\u30FC\u30C9\u30D7\u30EA\u30F3",
    itemPrice: 2160,
    itemUrl: "https://item.rakuten.co.jp/henri-charpentier/703485/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660df20.8eb492fe.5660df21.146733d3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhenri-charpentier%2F703485%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/henri-charpentier/cabinet/2026/summer2026/gp/thum_g4446.jpg?_ex=240x240",
    shopName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8",
    reviewAverage: 4,
    reviewCount: 320,
    targetTypes: ["STCW", "STFW"]
  },
  // --- ゼリー・ひんやりジュレ・クッキー缶系 ---
  {
    itemName: "\u30D1\u30C6\u30A3 \u30D5\u30EB\u30FC\u30C4\u30BC\u30EA\u30FC\u8A70\u5408\u305B",
    itemPrice: 1545,
    itemUrl: "https://item.rakuten.co.jp/patie/food-01463/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664cc1d.5da08ca4.5664cc1e.bad642f5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpatie%2Ffood-01463%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/patie/cabinet/food/sweets7/food-01463_s1all.jpg?_ex=240x240",
    shopName: "\u30D1\u30C6\u30A3",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STCW", "STCJ"]
  },
  {
    itemName: "\u9280\u5EA7\u5343\u758B\u5C4B \u9280\u5EA7\u30BC\u30EA\u30FC \u8A70\u5408\u305B",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/1894ginza-sembikiya/10000240/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664916a.6bd8cc7c.5664916b.1102c979/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1894ginza-sembikiya%2F10000240%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/1894ginza-sembikiya/cabinet/04020656/imgrc0116822282.jpg?_ex=240x240",
    shopName: "\u9280\u5EA7\u5343\u758B\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 410,
    targetTypes: ["STCW", "STCJ"]
  },
  {
    itemName: "\u9280\u5EA7\u5343\u758B\u5C4B \u9280\u5EA7\u30D5\u30EB\u30FC\u30C4\u30B8\u30E5\u30EC",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/ginza-sembikiya/899270/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660e53a.481b5674.5660e53b.66c4fc60/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fginza-sembikiya%2F899270%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ginza-sembikiya/cabinet/img/jelly/pgs-061/pgs-061-2.jpg?_ex=240x240",
    shopName: "\u9280\u5EA7\u5343\u758B\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 280,
    targetTypes: ["STCW", "STCJ"]
  },
  {
    itemName: "\u30D5\u30FC\u30B7\u30A7 \u30B8\u30E5\u30EC \u30C8\u30E9\u30A4\u30A2\u30F3\u30B0\u30EB",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/matsukazeya-ec/gt-30/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664cfac.00f0c37e.5664cfad.9597b147/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmatsukazeya-ec%2Fgt-30%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/matsukazeya-ec/cabinet/foucher/gift/geleetriangle/gt-30_624.jpg?_ex=240x240",
    shopName: "\u677E\u98A8\u5C4B\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["STCW", "STCJ"]
  },
  {
    itemName: "\u30D5\u30EB\u30FC\u30C4\u30B8\u30E5\u30EC \u30D1\u30D5\u30A7\u30BC\u30EA\u30FC",
    itemPrice: 2200,
    itemUrl: "https://item.rakuten.co.jp/tabemore/t-11-035/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d04f.8811fad6.5664d050.585e3c77/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftabemore%2Ft-11-035%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tabemore/cabinet/11718347/imgrc0332942885.jpg?_ex=240x240",
    shopName: "Tabemore",
    reviewAverage: 4.5,
    reviewCount: 62,
    targetTypes: ["STCW", "STCJ"]
  },
  {
    itemName: "\u30DC\u30FC\u30CE\u30FB\u30DC\u30FC\u30CE \u8D05\u6CA2\u30D1\u30D5\u30A7\u30A2\u30A4\u30B9\u30BB\u30C3\u30C8",
    itemPrice: 3180,
    itemUrl: "https://item.rakuten.co.jp/buono-buono/10003200-6set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d1ed.e767d058.5664d1ef.6dc295c8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbuono-buono%2F10003200-6set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/buono-buono/cabinet/samune/10003200_np.jpg?_ex=240x240",
    shopName: "\u30DC\u30FC\u30CE\u30FB\u30DC\u30FC\u30CE",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u7D66\u98DF\u3067\u304A\u306A\u3058\u307F \u82FA\u306E\u30E0\u30FC\u30B9\u30A2\u30A4\u30B9",
    itemPrice: 550,
    itemUrl: "https://item.rakuten.co.jp/auc-fb-create/mousseichigo/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d298.73c907e8.5664d299.179cf34c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-fb-create%2Fmousseichigo%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-fb-create/cabinet/m70/mousseichigo_600.jpg?_ex=240x240",
    shopName: "\u30A8\u30D5\u30D3\u30FC\u30FB\u30AF\u30EA\u30A8\u30A4\u30C8",
    reviewAverage: 5,
    reviewCount: 120,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30DC\u30CC\u30FC\u30EB \u30D0\u30E9\u30A8\u30C6\u30A3 \u30AF\u30C3\u30AD\u30FC\u30D1\u30C3\u30AF",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/bonheur7/variety-pack/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d378.4fcd0d58.5664d379.2e83371a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbonheur7%2Fvariety-pack%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bonheur7/cabinet/products/11908836/asoto.jpg?_ex=240x240",
    shopName: "\u30DC\u30CC\u30FC\u30EB",
    reviewAverage: 4,
    reviewCount: 150,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30E1\u30BE\u30F3\u30FB\u30C9\u30FB\u30DF\u30A8\u30EB \u8D64\u3044\u30AF\u30C3\u30AD\u30FC\u7F36",
    itemPrice: 3280,
    itemUrl: "https://item.rakuten.co.jp/maisondumiel/red-cookie-can/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664a171.06b596aa.5664a172.ef17bf00/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmaisondumiel%2Fred-cookie-can%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/maisondumiel/cabinet/cr/kago/red-cooke_thumb.jpg?_ex=240x240",
    shopName: "\u30E1\u30BE\u30F3\u30FB\u30C9\u30FB\u30DF\u30A8\u30EB",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["SHFW", "STFW"]
  },
  {
    itemName: "\u4E0D\u4E8C\u5BB6 \u30C1\u30E7\u30B3\u751F\u30B1\u30FC\u30AD",
    itemPrice: 3500,
    itemUrl: "https://item.rakuten.co.jp/fujiya-family-town/80021/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566403d6.06c1076e.566403d7.c5d0b032/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffujiya-family-town%2F80021%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/fujiya-family-town/cabinet/sweets01/sweets80021/80021_4.jpg?_ex=240x240",
    shopName: "\u4E0D\u4E8C\u5BB6\u30D5\u30A1\u30DF\u30EA\u30FC\u30BF\u30A6\u30F3",
    reviewAverage: 4.5,
    reviewCount: 185,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u57FC\u7389\u770C\u7FBD\u751F\u5E02 \u30D0\u30E9\u30A8\u30C6\u30A3\u30B1\u30FC\u30AD\u30BB\u30C3\u30C8",
    itemPrice: 5e3,
    itemUrl: "https://item.rakuten.co.jp/f112160-hanyu/wins021/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566407e2.109db89b.566407e3.356ceb3f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff112160-hanyu%2Fwins021%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f112160-hanyu/cabinet/10633605/12007841/wins021_r.jpg?_ex=240x240",
    shopName: "\u57FC\u7389\u770C\u7FBD\u751F\u5E02",
    reviewAverage: 4.5,
    reviewCount: 60,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7 \u696D\u52D9\u7528 \u751F\u30C1\u30E7\u30B3\u30B1\u30FC\u30AD",
    itemPrice: 1738,
    itemUrl: "https://item.rakuten.co.jp/syokusai-shop/19699/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e976.6ab3e990.5663e977.69fe0f48/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsyokusai-shop%2F19699%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/syokusai-shop/cabinet/item/10479019/19699.jpg?_ex=240x240",
    shopName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 45,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u798F\u5CA1\u770C\u7CF8\u5CF6\u5E02 \u30E2\u30F3\u30D6\u30E9\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 13e3,
    itemUrl: "https://item.rakuten.co.jp/f402303-itoshima/aqd004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56640ade.58e59919.56640adf.ab350193/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff402303-itoshima%2Faqd004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/f402303-itoshima/cabinet/item/aqd/aqd004-1.jpg?_ex=240x240",
    shopName: "\u798F\u5CA1\u770C\u7CF8\u5CF6\u5E02",
    reviewAverage: 4.5,
    reviewCount: 38,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8 \u30DB\u30FC\u30EB\u30B1\u30FC\u30AD",
    itemPrice: 4320,
    itemUrl: "https://item.rakuten.co.jp/henri-charpentier/703550/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660df20.8eb492fe.5660df21.146733d3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhenri-charpentier%2F703550%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/henri-charpentier/cabinet/2026/summer2026/gp/thum_g4739.jpg?_ex=240x240",
    shopName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8",
    reviewAverage: 4.5,
    reviewCount: 72,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u798F\u5CA1\u770C\u5E83\u5DDD\u753A \u30B1\u30FC\u30AD3\u7A2E\u30BB\u30C3\u30C8",
    itemPrice: 12e3,
    itemUrl: "https://item.rakuten.co.jp/f405442-hirokawa/afak218/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56640dce.d473ec97.56640dcf.ce79c85c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff405442-hirokawa%2Fafak218%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f405442-hirokawa/cabinet/item/afak/2/afak218.jpg?_ex=240x240",
    shopName: "\u798F\u5CA1\u770C\u5E83\u5DDD\u753A",
    reviewAverage: 4.5,
    reviewCount: 55,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u798F\u5CA1\u770C\u7CF8\u5CF6\u5E02 \u30B1\u30FC\u30AD3\u7A2E\u30BB\u30C3\u30C8",
    itemPrice: 11e3,
    itemUrl: "https://item.rakuten.co.jp/f402303-itoshima/aqd017/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56640ade.58e59919.56640adf.ab350193/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff402303-itoshima%2Faqd017%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/f402303-itoshima/cabinet/item/aqd/aqd017-1.jpg?_ex=240x240",
    shopName: "\u798F\u5CA1\u770C\u7CF8\u5CF6\u5E02",
    reviewAverage: 4.7,
    reviewCount: 40,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u798F\u4E95\u770C\u5742\u4E95\u5E02 \u30B7\u30E3\u30A4\u30F3\u30DE\u30B9\u30AB\u30C3\u30C8\u751F\u30BF\u30EB\u30C8",
    itemPrice: 14e3,
    itemUrl: "https://item.rakuten.co.jp/f182109-sakai/a-5207/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56640fe2.980456e4.56640fe3.7ec70378/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff182109-sakai%2Fa-5207%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f182109-sakai/cabinet/52/a-5207-s.jpg?_ex=240x240",
    shopName: "\u798F\u4E95\u770C\u5742\u4E95\u5E02",
    reviewAverage: 5,
    reviewCount: 22,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u5317\u6D77\u9053\u4E2D\u5BCC\u826F\u91CE\u753A \u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u30B1\u30FC\u30AD",
    itemPrice: 14e3,
    itemUrl: "https://item.rakuten.co.jp/f014613-nakafurano/nakafurano-am-010/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566412f8.3086acec.566412f9.1ff33df2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff014613-nakafurano%2Fnakafurano-am-010%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f014613-nakafurano/cabinet/furanosweets/24chococake_whole.jpg?_ex=240x240",
    shopName: "\u5317\u6D77\u9053\u4E2D\u5BCC\u826F\u91CE\u753A",
    reviewAverage: 4.5,
    reviewCount: 30,
    targetTypes: ["STFW", "STCW"]
  },
  // --- 手軽なご褒美スイーツ・洋菓子系（1000円前後〜） ---
  {
    itemName: "\u4E09\u661F \u30CF\u30B9\u30AB\u30C3\u30D7\u30AB\u30B9\u30C6\u30E9\u30ED\u30FC\u30EB",
    itemPrice: 700,
    itemUrl: "https://item.rakuten.co.jp/mitsuboshi/h-roll/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56641749.8ed4e27b.5664174a.0d8ffe2e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmitsuboshi%2Fh-roll%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mitsuboshi/cabinet/04241362/04241363/09392067/h-rolls-2025-top001.jpg?_ex=240x240",
    shopName: "\u4E09\u661F",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30D7\u30E9\u30E0\u30C6\u30E9\u30B9 \u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 750,
    itemUrl: "https://item.rakuten.co.jp/auc-plumterrace/cheesecakefree/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643743.ec66ecfa.56643744.418d3454/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-plumterrace%2Fcheesecakefree%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-plumterrace/cabinet/shokuhin3/imgrc0093483097.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30E0\u30C6\u30E9\u30B9",
    reviewAverage: 4,
    reviewCount: 38,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u5927\u9ED2\u5C4B \u751F\u30C1\u30E7\u30B3\u30B1\u30FC\u30AD",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/k-daikokuya/04-00/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566435de.96e1338b.566435df.c61fc917/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fk-daikokuya%2F04-00%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/k-daikokuya/cabinet/item/03-03/1bn126.jpg?_ex=240x240",
    shopName: "\u5927\u9ED2\u5C4B",
    reviewAverage: 4,
    reviewCount: 52,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u696D\u52D9\u7528 \u30EC\u30A2\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 1050,
    itemUrl: "https://item.rakuten.co.jp/sucarfood/5126/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643861.73e10b6d.56643862.0d588b5b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsucarfood%2F5126%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sucarfood/cabinet/07324079/imgrc0104784805.jpg?_ex=240x240",
    shopName: "sucarfood",
    reviewAverage: 4,
    reviewCount: 28,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u6210\u57CE\u77F3\u4E95 \u30D0\u30CA\u30CA\u3068\u30B3\u30B3\u30CA\u30C3\u30C4\u306E\u30B1\u30FC\u30AD",
    itemPrice: 1069,
    itemUrl: "https://item.rakuten.co.jp/seijoishii/4953762883489/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566438a2.c5f5a847.566438a3.7cf0e8b6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fseijoishii%2F4953762883489%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/seijoishii/cabinet/image_49537628/4953762883489_m1.jpg?_ex=240x240",
    shopName: "\u6210\u57CE\u77F3\u4E95",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7 \u30C6\u30A3\u30E9\u30DF\u30B9\u30E2\u30F3\u30D6\u30E9\u30F3",
    itemPrice: 1073,
    itemUrl: "https://item.rakuten.co.jp/syokusai-shop/27560/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e976.6ab3e990.5663e977.69fe0f48/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsyokusai-shop%2F27560%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/syokusai-shop/cabinet/item/03676820/27560.jpg?_ex=240x240",
    shopName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 5,
    reviewCount: 20,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30D7\u30E9\u30E0\u30C6\u30E9\u30B9 \u30ED\u30B7\u30A2\u30B1\u30FC\u30AD",
    itemPrice: 1080,
    itemUrl: "https://item.rakuten.co.jp/auc-plumterrace/russiancake/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643743.ec66ecfa.56643744.418d3454/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-plumterrace%2Frussiancake%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-plumterrace/cabinet/07051890/russiancake_lpra.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30E0\u30C6\u30E9\u30B9",
    reviewAverage: 4.5,
    reviewCount: 112,
    targetTypes: ["SHFW"]
    // クッキー系焼き菓子なので Hard(H)
  },
  {
    itemName: "\u304A\u304B\u3052\u3055\u307E\u30DE\u30FC\u30B1\u30C3\u30C8 \u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0",
    itemPrice: 1150,
    itemUrl: "https://item.rakuten.co.jp/okagesama-market/4901360353996/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643b57.32438b19.56643b58.7e7ce188/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokagesama-market%2F4901360353996%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okagesama-market/cabinet/06206077/06206084/imgrc0085636814.jpg?_ex=240x240",
    shopName: "\u304A\u304B\u3052\u3055\u307E\u30DE\u30FC\u30B1\u30C3\u30C8",
    reviewAverage: 4.5,
    reviewCount: 35,
    targetTypes: ["STCW", "SHCW"]
    // アイスなので Chilled(C)
  },
  {
    itemName: "\u6210\u57CE\u77F3\u4E95 \u30D7\u30EC\u30DF\u30A2\u30E0\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 1117,
    itemUrl: "https://item.rakuten.co.jp/seijoishii/4953762357140/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566438a2.c5f5a847.566438a3.7cf0e8b6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fseijoishii%2F4953762357140%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/seijoishii/cabinet/image_49537623/4953762357140_m1.jpg?_ex=240x240",
    shopName: "\u6210\u57CE\u77F3\u4E95",
    reviewAverage: 4,
    reviewCount: 142,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B1\u30FC\u30CB\u30D2\u30B9\u30AF\u30ED\u30FC\u30CD \u306F\u3061\u307F\u3064\u30A2\u30EB\u30C6\u30CA\uFF08\u6817\u5165\u308A\u30C1\u30E7\u30B3\u30B1\u30FC\u30AD\uFF09",
    itemPrice: 1188,
    itemUrl: "https://item.rakuten.co.jp/konigs-krone/classicaltena/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566442de.6c617fd5.566442df.a708d0b2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonigs-krone%2Fclassicaltena%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/konigs-krone/cabinet/item2/classicaltena_01.jpg?_ex=240x240",
    shopName: "\u30B1\u30FC\u30CB\u30D2\u30B9 \u30AF\u30ED\u30FC\u30CD",
    reviewAverage: 4.5,
    reviewCount: 215,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u30B1\u30FC\u30CB\u30D2\u30B9\u30AF\u30ED\u30FC\u30CD \u306F\u3061\u307F\u3064\u30A2\u30EB\u30C6\u30CA\uFF08\u30C1\u30E7\u30B3\uFF09",
    itemPrice: 1188,
    itemUrl: "https://item.rakuten.co.jp/konigs-krone/altena-4h/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566442de.6c617fd5.566442df.a708d0b2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonigs-krone%2Faltena-4h%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/konigs-krone/cabinet/item2/altena-4h_01.jpg?_ex=240x240",
    shopName: "\u30B1\u30FC\u30CB\u30D2\u30B9 \u30AF\u30ED\u30FC\u30CD",
    reviewAverage: 4,
    reviewCount: 98,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u696D\u52D9\u7528 \u30AB\u30E9\u30E1\u30EB\u30AB\u30B9\u30BF\u30FC\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 1300,
    itemUrl: "https://item.rakuten.co.jp/sucarfood/5450/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643861.73e10b6d.56643862.0d588b5b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsucarfood%2F5450%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/sucarfood/cabinet/07324079/imgrc0105651327.jpg?_ex=240x240",
    shopName: "sucarfood",
    reviewAverage: 4.5,
    reviewCount: 42,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u696D\u52D9\u7528 \u30E2\u30F3\u30D6\u30E9\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 1340,
    itemUrl: "https://item.rakuten.co.jp/sucarfood/0402/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643861.73e10b6d.56643862.0d588b5b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsucarfood%2F0402%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sucarfood/cabinet/07324079/imgrc0104919386.jpg?_ex=240x240",
    shopName: "sucarfood",
    reviewAverage: 4.5,
    reviewCount: 56,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u5C0F\u6A3D\u304D\u305F\u3044\u3061 \u30EF\u30C3\u30D5\u30EB\u30BB\u30C3\u30C8",
    itemPrice: 1380,
    itemUrl: "https://item.rakuten.co.jp/otarukitaichi/10003685/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566448b2.270974b9.566448b3.e127e35f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fotarukitaichi%2F10003685%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/otarukitaichi/cabinet/08170177/08170179/imgrc0074251886.jpg?_ex=240x240",
    shopName: "\u5C0F\u6A3D\u304D\u305F\u3044\u3061",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30ED\u30EA\u30A2\u30F3\u6D0B\u83D3\u5B50\u5E97 \u30E2\u30F3\u30D6\u30E9\u30F3\u30ED\u30FC\u30EB",
    itemPrice: 1398,
    itemUrl: "https://item.rakuten.co.jp/rorian/1043365cm/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644ab9.13f018d6.56644aba.a7a41dd8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frorian%2F1043365cm%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rorian/cabinet/12625820/sum_moroll_1.jpg?_ex=240x240",
    shopName: "\u30ED\u30EA\u30A2\u30F3\u6D0B\u83D3\u5B50\u5E97",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B1\u30FC\u30CB\u30D2\u30B9\u30AF\u30ED\u30FC\u30CD \u30D9\u30FC\u30CD\u30F3",
    itemPrice: 1382,
    itemUrl: "https://item.rakuten.co.jp/konigs-krone/benen/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566442de.6c617fd5.566442df.a708d0b2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonigs-krone%2Fbenen%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/konigs-krone/cabinet/item2/benen_01.jpg?_ex=240x240",
    shopName: "\u30B1\u30FC\u30CB\u30D2\u30B9 \u30AF\u30ED\u30FC\u30CD",
    reviewAverage: 4.5,
    reviewCount: 230,
    targetTypes: ["STFW", "SHFW"]
    // パイ生地系なので硬め(H)もアリ
  },
  {
    itemName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7 \u30EC\u30A2\u30C1\u30FC\u30BA\u30BF\u30EB\u30C8",
    itemPrice: 1427,
    itemUrl: "https://item.rakuten.co.jp/syokusai-shop/27528/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e976.6ab3e990.5663e977.69fe0f48/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsyokusai-shop%2F27528%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/syokusai-shop/cabinet/item/03676820/27528.jpg?_ex=240x240",
    shopName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["STCW", "SHCW"]
  },
  {
    itemName: "\u8D8A\u524D\u304B\u306B\u8077\u4EBA\u7532\u7F85\u7D44 \u82FA\u30E2\u30F3\u30D6\u30E9\u30F3",
    itemPrice: 1524,
    itemUrl: "https://item.rakuten.co.jp/kouragumi/380033a/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644d7c.a0a4d64c.56644d7d.14d762e3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkouragumi%2F380033a%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kouragumi/cabinet/02220540/item_image2/image1-380033a.jpg?_ex=240x240",
    shopName: "\u8D8A\u524D\u304B\u306B\u8077\u4EBA\u7532\u7F85\u7D44",
    reviewAverage: 4.5,
    reviewCount: 85,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30AD\u30E5\u30FC\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3 \u6D0B\u83D3\u5B50\u8A70\u5408\u305B",
    itemPrice: 1548,
    itemUrl: "https://item.rakuten.co.jp/bellevie-harima/try-00003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644df1.c9459e58.56644df2.7fb6a9b5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ftry-00003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bellevie-harima/cabinet/0804/gift2/cutesl11_s1.jpg?_ex=240x240",
    shopName: "\u30D9\u30EB\u30F4\u30A3",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["STFW", "SHFW"]
    // 焼き菓子詰め合わせなので(H)もアリ
  },
  {
    itemName: "\u696D\u52D9\u7528 \u30AF\u30EA\u30FC\u30E0\u30C1\u30FC\u30BA\u30D9\u30A4\u30AF\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 1610,
    itemUrl: "https://item.rakuten.co.jp/sucarfood/0208/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643861.73e10b6d.56643862.0d588b5b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsucarfood%2F0208%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sucarfood/cabinet/07324079/imgrc0105484312.jpg?_ex=240x240",
    shopName: "sucarfood",
    reviewAverage: 4.5,
    reviewCount: 74,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u4E09\u661F \u5929\u4F7F\u306E\u30D7\u30EA\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 1680,
    itemUrl: "https://item.rakuten.co.jp/mitsuboshi/angel_pr/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56641749.8ed4e27b.5664174a.0d8ffe2e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmitsuboshi%2Fangel_pr%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mitsuboshi/cabinet/04241362/04241363/04888407/pr-2026-top.jpg?_ex=240x240",
    shopName: "\u4E09\u661F",
    reviewAverage: 4,
    reviewCount: 92,
    targetTypes: ["STFW", "STCW"]
  },
  // --- チーズケーキ・名店洋菓子系 ---
  {
    itemName: "\u8EFD\u4E95\u6CA2\u30C8\u30EB\u30BF \u30D0\u30B9\u30AF\u98A8\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 2680,
    itemUrl: "https://item.rakuten.co.jp/karuizawatorta/100/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566466bf.e7d8301b.566466c0.edd1fbb1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaruizawatorta%2F100%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/karuizawatorta/cabinet/imgrc0116144684.jpg?_ex=240x240",
    shopName: "\u8EFD\u4E95\u6CA2\u30C8\u30EB\u30BF",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30AF\u30EA\u30AA\u30ED \u5E7B\u306E\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 2740,
    itemUrl: "https://item.rakuten.co.jp/ecolecriollo/578786/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566467bd.8bf690ed.566467be.f0f7b6fa/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fecolecriollo%2F578786%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ecolecriollo/cabinet/cheese-cake/imgrc0149338030.jpg?_ex=240x240",
    shopName: "\u30A8\u30B3\u30FC\u30EB\u30FB\u30AF\u30EA\u30AA\u30ED",
    reviewAverage: 4,
    reviewCount: 450,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "Milk Craft Cream \u7279\u88FD\u30D0\u30B9\u30AF\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 3780,
    itemUrl: "https://item.rakuten.co.jp/milk-craft-cream/100000/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646827.bbd7844d.56646828.fa495151/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmilk-craft-cream%2F100000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/milk-craft-cream/cabinet/biiino/item/main-image/20260612205751_1.jpg?_ex=240x240",
    shopName: "Milk Craft Cream",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30EB\u30BF\u30AA \u30C9\u30A5\u30FC\u30D6\u30EB\u30D5\u30ED\u30DE\u30FC\u30B8\u30E5",
    itemPrice: 3576,
    itemUrl: "https://item.rakuten.co.jp/letao/r970/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646976.81b93fae.56646977.9e611979/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fletao%2Fr970%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/letao/cabinet/item/f011/202603/r970_01_summer.jpg?_ex=240x240",
    shopName: "\u5C0F\u6A3D\u6D0B\u83D3\u5B50\u8217\u30EB\u30BF\u30AA",
    reviewAverage: 4.5,
    reviewCount: 850,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u30C1\u30FC\u30BA\u30AC\u30FC\u30C7\u30F3 \u5FA1\u7528\u90B8\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 2760,
    itemUrl: "https://item.rakuten.co.jp/cheesegarden/02238/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566469e6.a7035fe4.566469e7.a6fb63b3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcheesegarden%2F02238%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cheesegarden/cabinet/product/cheesecake/12993799/imgrc0249159294.jpg?_ex=240x240",
    shopName: "\u30C1\u30FC\u30BA\u30AC\u30FC\u30C7\u30F3",
    reviewAverage: 4.5,
    reviewCount: 620,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u80E1\u8776\u5EB5 \u306F\u3089\u307A\u3053\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/kochouan/cheese07/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646b52.ae56ef30.56646b53.1a7ef9b2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkochouan%2Fcheese07%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kochouan/cabinet/chizu-keki/imgrc0110136125.jpg?_ex=240x240",
    shopName: "\u80E1\u8776\u5EB5",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30E9\u30FB\u30D5\u30A1\u30DF\u30FC\u30E6 \u771F\u3063\u9ED2\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 2915,
    itemUrl: "https://item.rakuten.co.jp/lafamille/black-cheese/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646b7f.46c72410.56646b80.5afe4487/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flafamille%2Fblack-cheese%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_gold/lafamille/img/item/black-cheese/thumb1-1.jpg?_ex=240x240",
    shopName: "\u30E9\u30FB\u30D5\u30A1\u30DF\u30FC\u30E6",
    reviewAverage: 4,
    reviewCount: 340,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u51FD\u9928\u6D0B\u83D3\u5B50\u30B9\u30CA\u30C3\u30D5\u30EB\u30B9 \u30C1\u30FC\u30BA\u30AA\u30E0\u30EC\u30C3\u30C8",
    itemPrice: 972,
    itemUrl: "https://item.rakuten.co.jp/snaffles/1008/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646cdc.fe2fcd55.56646cdd.2f67b59b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsnaffles%2F1008%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/snaffles/cabinet/item/1008_thum_2309.jpg?_ex=240x240",
    shopName: "\u30B9\u30CA\u30C3\u30D5\u30EB\u30B9",
    reviewAverage: 4.5,
    reviewCount: 520,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u30E2\u30F3\u30AF\u30FC\u30EB \u5929\u4F7F\u306E\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 3600,
    itemUrl: "https://item.rakuten.co.jp/y-moncoeur/100013/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646d58.775e6473.56646d59.b12aefdf/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fy-moncoeur%2F100013%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/y-moncoeur/cabinet/2/08793550/free_1754293542858.jpg?_ex=240x240",
    shopName: "\u30E2\u30F3\u30AF\u30FC\u30EB",
    reviewAverage: 4.5,
    reviewCount: 40,
    targetTypes: ["STFW", "STCW"]
  },
  // --- シュークリーム・ワッフル・濃厚ショコラ系 ---
  {
    itemName: "\u30A8\u30FC\u30EB\u30FB\u30A8\u30EB \u30EF\u30C3\u30D5\u30EB\u30B1\u30FC\u30AD 8\u7A2E\u30BB\u30C3\u30C8",
    itemPrice: 2700,
    itemUrl: "https://item.rakuten.co.jp/rl-waffle/0-w0008/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660d450.da345e07.5660d451.02ba9565/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frl-waffle%2F0-w0008%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIxMDB4MTAwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbSI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsJiJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rl-waffle/cabinet/0-w0008.jpg?_ex=240x240",
    shopName: "\u30A8\u30FC\u30EB\u30FB\u30A8\u30EB\uFF08R.L\uFF09",
    reviewAverage: 4.5,
    reviewCount: 420,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30A4\u30FC\u30AF\u30EB\u30B9 \u30EF\u30C3\u30D5\u30EB\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 4500,
    itemUrl: "https://item.rakuten.co.jp/e-cruz/10000044/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56645392.fb375753.56645393.e7c31274/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-cruz%2F10000044%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/e-cruz/cabinet/07827812/imgrc0106504862.jpg?_ex=240x240",
    shopName: "\u30A4\u30FC\u30AF\u30EB\u30B9",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u5C71\u5F62\u770C\u4E0A\u5C71\u5E02 \u304B\u307F\u306E\u3084\u307E\u30B7\u30E5\u30FC",
    itemPrice: 5e3,
    itemUrl: "https://item.rakuten.co.jp/f062073-kaminoyama/10000039/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56645873.db46aab5.56645874.9ee80467/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff062073-kaminoyama%2F10000039%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f062073-kaminoyama/cabinet/item/0048/0048-2401-01rrv5.jpg?_ex=240x240",
    shopName: "\u5C71\u5F62\u770C\u4E0A\u5C71\u5E02",
    reviewAverage: 4,
    reviewCount: 310,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u5C71\u304B\u3089 \u8A33\u3042\u308A\u30B7\u30E5\u30FC\u30AF\u30EA\u30FC\u30E0",
    itemPrice: 3880,
    itemUrl: "https://item.rakuten.co.jp/yamakara/wakearichou/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566458f7.6458362f.566458f8.139ee516/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamakara%2Fwakearichou%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/yamakara/cabinet/shohin01/imgrc0146430549.jpg?_ex=240x240",
    shopName: "\u5C71\u304B\u3089",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u85E4\u592A\u90CE \u5BCC\u58EB\u5C71\u6E67\u6C34\u30B7\u30E5\u30FC\u30AF\u30EA\u30FC\u30E0",
    itemPrice: 2990,
    itemUrl: "https://item.rakuten.co.jp/toutarou/shu6/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56645c40.aa7cf445.56645c41.568414dd/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoutarou%2Fshu6%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/toutarou/cabinet/07364901/imgrc0093881754.jpg?_ex=240x240",
    shopName: "\u85E4\u592A\u90CE",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u4E09\u661F \u3088\u3044\u3068\u307E\u3051\u30FB\u30B7\u30E5\u30FC\u30AF\u30EA\u30FC\u30E0\u8A70\u5408\u305B",
    itemPrice: 3300,
    itemUrl: "https://item.rakuten.co.jp/mitsuboshi/h-box01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56641749.8ed4e27b.5664174a.0d8ffe2e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmitsuboshi%2Fh-box01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mitsuboshi/cabinet/04241362/04241363/09812609/h-box-top-2.jpg?_ex=240x240",
    shopName: "\u4E09\u661F",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u4E09\u661F \u30CF\u30B9\u30AB\u30C3\u30D7\u30B7\u30E5\u30FC\u30A2\u30A4\u30B9",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/mitsuboshi/10000013-sk/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56641749.8ed4e27b.5664174a.0d8ffe2e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmitsuboshi%2F10000013-sk%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mitsuboshi/cabinet/04241362/04241363/05147087/10000013-sk-top0000.jpg?_ex=240x240",
    shopName: "\u4E09\u661F",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["STCW", "SHCW"]
  },
  {
    itemName: "\u5927\u548C\u5DE5\u623F \u30A8\u30AF\u30EC\u30A2\u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3e3,
    itemUrl: "https://item.rakuten.co.jp/d-yorokobi/matome09/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646089.3c792fe6.5664608a.59441e45/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fd-yorokobi%2Fmatome09%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/d-yorokobi/cabinet/matome/eku/imgrc0071748824.jpg?_ex=240x240",
    shopName: "\u5927\u548C\u5DE5\u623F",
    reviewAverage: 4,
    reviewCount: 54,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u5927\u9678 \u30A8\u30AF\u30EC\u30FC\u30CC \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3500,
    itemUrl: "https://item.rakuten.co.jp/tairiku-cake/eclaine-10set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566461c9.adb3c204.566461ca.032faa32/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftairiku-cake%2Feclaine-10set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tairiku-cake/cabinet/eclaine/eclane-10set01-sum.jpg?_ex=240x240",
    shopName: "\u5927\u9678",
    reviewAverage: 5,
    reviewCount: 42,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u3046\u308D\u3053\u3084 \u4FF5\u30B7\u30E5\u30FC",
    itemPrice: 2100,
    itemUrl: "https://item.rakuten.co.jp/urokoya/tawara/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663fdbb.eeb735a8.5663fdbc.16962176/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Furokoya%2Ftawara%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/urokoya/cabinet/11717329/tawara.jpg?_ex=240x240",
    shopName: "\u3046\u308D\u3053\u3084",
    reviewAverage: 4.5,
    reviewCount: 68,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "GODIVA \u30AC\u30C8\u30FC \u30AA \u30B7\u30E7\u30B3\u30E9",
    itemPrice: 3824,
    itemUrl: "https://item.rakuten.co.jp/godiva/206585/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664716f.fab8be8f.56647170.eef8f9f6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgodiva%2F206585%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/godiva/cabinet/products6/206585_1.jpg?_ex=240x240",
    shopName: "GODIVA",
    reviewAverage: 4.5,
    reviewCount: 150,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30EB\u30BF\u30AA \u30B7\u30E7\u30B3\u30E9\u30C9\u30A5\u30FC\u30D6\u30EB",
    itemPrice: 3684,
    itemUrl: "https://item.rakuten.co.jp/letao/j101/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646976.81b93fae.56646977.9e611979/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fletao%2Fj101%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/letao/cabinet/item/f012/202603/j101_01.jpg?_ex=240x240",
    shopName: "\u5C0F\u6A3D\u6D0B\u83D3\u5B50\u8217\u30EB\u30BF\u30AA",
    reviewAverage: 4.5,
    reviewCount: 380,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u305D\u306E\u98DF\u5EB5 \u6FC3\u539A\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u30B1\u30FC\u30AD",
    itemPrice: 2563,
    itemUrl: "https://item.rakuten.co.jp/sonoshokuan/380030/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647301.59b9da42.56647302.4f062a80/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsonoshokuan%2F380030%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sonoshokuan/cabinet/item/cake/image1-380030a.jpg?_ex=240x240",
    shopName: "\u305D\u306E\u98DF\u5EB5",
    reviewAverage: 4,
    reviewCount: 62,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30E9\u30FB\u30D5\u30A1\u30DF\u30FC\u30E6 \u6FC3\u539A\u30B6\u30C3\u30CF\u30C8\u30EB\u30C6",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/lafamille/sachertorte/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646b7f.46c72410.56646b80.5afe4487/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flafamille%2Fsachertorte%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_gold/lafamille/img/item/sachertorte/new/thumb1-s.jpg?_ex=240x240",
    shopName: "\u30E9\u30FB\u30D5\u30A1\u30DF\u30FC\u30E6",
    reviewAverage: 4,
    reviewCount: 420,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u4E94\u5CF6\u8ED2 \u30D9\u30EB\u30AE\u30FC\u30C1\u30E7\u30B3\u30B1\u30FC\u30AD",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/gotoken1879/10000109/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566474c1.e325fe0e.566474c2.5303aa59/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgotoken1879%2F10000109%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/gotoken1879/cabinet/00806618/beru0.jpg?_ex=240x240",
    shopName: "\u4E94\u5CF6\u8ED2",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u795E\u697D\u5742 \u30EB \u30B3\u30AD\u30E4\u30FC\u30B8\u30E5 \u30C6\u30EA\u30FC\u30CC \u30C9\u30A5 \u30B7\u30E7\u30B3\u30E9",
    itemPrice: 4800,
    itemUrl: "https://item.rakuten.co.jp/terrine-de-chocolat/10000000/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566475a4.d6382a0d.566475a5.9b34c447/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fterrine-de-chocolat%2F10000000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/terrine-de-chocolat/cabinet/itemimg/usually_samne_c.jpg?_ex=240x240",
    shopName: "\u795E\u697D\u5742 \u30EB \u30B3\u30AD\u30E4\u30FC\u30B8\u30E5",
    reviewAverage: 4.5,
    reviewCount: 540,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30EB\u30D6\u30E9\u30F3 \u30B7\u30E7\u30B3\u30E9\u30FB\u30C9\u30A5\u30FB\u30B7\u30E7\u30B3\u30E9",
    itemPrice: 4500,
    itemUrl: "https://item.rakuten.co.jp/leblanc/1470660/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664764a.a1ed8a0a.5664764b.5057977b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fleblanc%2F1470660%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/leblanc/cabinet/biiino/item/main-image/20250617111951_1.jpg?_ex=240x240",
    shopName: "\u30EB\u30D6\u30E9\u30F3",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "GODIVA \u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u30ED\u30FC\u30EB\u30B1\u30FC\u30AD",
    itemPrice: 3510,
    itemUrl: "https://item.rakuten.co.jp/godiva/208591/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664716f.fab8be8f.56647170.eef8f9f6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgodiva%2F208591%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/godiva/cabinet/products6/208591_1.jpg?_ex=240x240",
    shopName: "GODIVA",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["STFW", "STCW"]
  },
  // --- バラエティ和洋スイーツ・アイス・焼き菓子系 ---
  {
    itemName: "\u83D3\u5320\u3082\u308A\u3093 \u82FA\u30E2\u30F3\u30D6\u30E9\u30F3",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/kasyou-morin/youkan_8/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e83e.53f47b95.5663e83f.660739f6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkasyou-morin%2Fyoukan_8%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kasyou-morin/cabinet/05776678/10372134/stmb_sq_01b.jpg?_ex=240x240",
    shopName: "\u83D3\u5320\u3082\u308A\u3093",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u304B\u307E\u30C1\u30E5\u30A6 \u82FA\u30BF\u30EB\u30C8",
    itemPrice: 3758,
    itemUrl: "https://item.rakuten.co.jp/kamachu/strawberrytart/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647b98.c80721b4.56647b99.1efa21f2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamachu%2Fstrawberrytart%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamachu/cabinet/06488113/ichigotart.jpg?_ex=240x240",
    shopName: "\u304B\u307E\u30C1\u30E5\u30A6",
    reviewAverage: 4.5,
    reviewCount: 82,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u30D7\u30C1\u30D5\u30A3\u30CA\u30F3\u30B7\u30A7",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4571216260480/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4571216260480%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/4571216260480-00-17.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4,
    reviewCount: 140,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u83D3\u5320\u3082\u308A\u3093 \u51DB\u82B1 \u548C\u98A8\u30C6\u30A3\u30E9\u30DF\u30B9",
    itemPrice: 3580,
    itemUrl: "https://item.rakuten.co.jp/kasyou-morin/tiramisu-6/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e83e.53f47b95.5663e83f.660739f6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkasyou-morin%2Ftiramisu-6%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kasyou-morin/cabinet/06855486/07563144/09185954/rinka-thum46812.jpg?_ex=240x240",
    shopName: "\u83D3\u5320\u3082\u308A\u3093",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFJ", "STCJ", "STFW", "STCW"]
  },
  {
    itemName: "\u8CA1\u5B9D \u30D7\u30EC\u30DF\u30A2\u30E0\u751F\u30C1\u30E7\u30B3\u30C8\u30EA\u30E5\u30D5",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/zaiho/51382-c1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648072.8a1a1e56.56648073.79f81264/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fzaiho%2F51382-c1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/zaiho/cabinet/item/sweets/51382-c1_m.jpg?_ex=240x240",
    shopName: "\u8CA1\u5B9D\u516C\u5F0F\u901A\u8CA9",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u30C0\u30F3\u30B1 \u30AD\u30E5\u30FC\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3 \u713C\u304D\u83D3\u5B50\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1650,
    itemUrl: "https://item.rakuten.co.jp/friend-gift/10011115/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648144.50eeba4d.56648145.4617919e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffriend-gift%2F10011115%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/friend-gift/cabinet/renewal/re2024/cute_main.jpg?_ex=240x240",
    shopName: "\u30D5\u30EC\u30F3\u30C9\u30AE\u30D5\u30C8",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u80E1\u8776\u5EB5 \u3068\u308D\u3051\u308B\u751F\u5927\u798F",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/kochouan/torokeru-016/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646b52.ae56ef30.56646b53.1a7ef9b2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkochouan%2Ftorokeru-016%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kochouan/cabinet/tyugen/imgrc0114787842.jpg?_ex=240x240",
    shopName: "\u80E1\u8776\u5EB5",
    reviewAverage: 4.5,
    reviewCount: 380,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "MACAPRESSO \u592A\u3063\u3061\u3087\u30DE\u30AB\u30ED\u30F3\uFF08\u30C8\u30A5\u30F3\u30AB\u30ED\u30F3\uFF09",
    itemPrice: 5270,
    itemUrl: "https://item.rakuten.co.jp/hayaru/mp12-allstar/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664834f.99677023.56648350.e25aab9e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhayaru%2Fmp12-allstar%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hayaru/cabinet/macapresso/a12_th.jpg?_ex=240x240",
    shopName: "MACAPRESSO",
    reviewAverage: 4.5,
    reviewCount: 290,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u5929\u4F7F\u306E\u304A\u304F\u308A\u3082\u306E \u30D8\u30EB\u30B7\u30FC\u30B9\u30A4\u30FC\u30C4\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3999,
    itemUrl: "https://item.rakuten.co.jp/tenshi-okurimono/te015_healthy_sweets_assort/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664848a.154ac8c8.5664848b.7a9cee31/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftenshi-okurimono%2Fte015_healthy_sweets_assort%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenshi-okurimono/cabinet/te015var/sg/te015var_sn1sg25.jpg?_ex=240x240",
    shopName: "\u5929\u4F7F\u306E\u304A\u304F\u308A\u3082\u306E",
    reviewAverage: 4.5,
    reviewCount: 175,
    targetTypes: ["SHFW", "SHCW", "STFW"]
  },
  {
    itemName: "\u307E\u304A\u3061\u3083\u3093 \u7D79\u7CF8\u548C\u6817\u30E2\u30F3\u30D6\u30E9\u30F3",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/maochan/mcs-g1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664864b.ba5683b4.5664864c.0442cb54/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmaochan%2Fmcs-g1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/maochan/cabinet/shohin/montblanc/mb_1000.jpg?_ex=240x240",
    shopName: "\u307E\u304A\u3061\u3083\u3093\u306E\u304A\u306F\u304E",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["STFJ", "STFW", "STCW"]
  },
  // --- ギフト洋菓子・焼き菓子・アイスソルベ系 ---
  {
    itemName: "\u30DF\u30B5\u30AD\u30C9\u30FC\u30CA\u30C4 \u304A\u3059\u3059\u3081\u30BB\u30C3\u30C8",
    itemPrice: 2700,
    itemUrl: "https://item.rakuten.co.jp/misakidonuts/1-012/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566490d7.88100db0.566490d9.9b613b52/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmisakidonuts%2F1-012%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/misakidonuts/cabinet/biiino/item/main-image/imgrc0115196977.jpg?_ex=240x240",
    shopName: "\u30DF\u30B5\u30AD\u30C9\u30FC\u30CA\u30C4",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u9280\u5EA7\u5343\u758B\u5C4B \u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9\uFF06\u30BD\u30EB\u30D9",
    itemPrice: 5400,
    itemUrl: "https://item.rakuten.co.jp/1894ginza-sembikiya/10000629/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664916a.6bd8cc7c.5664916b.1102c979/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1894ginza-sembikiya%2F10000629%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/1894ginza-sembikiya/cabinet/09510189/230101.jpg?_ex=240x240",
    shopName: "\u9280\u5EA7\u5343\u758B\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 350,
    targetTypes: ["STCW", "SHCW"]
  },
  {
    itemName: "BOMBOMY \u30D5\u30EB\u30FC\u30C4\u30BF\u30EB\u30C8\uFF06\u30C1\u30FC\u30BA\u30BF\u30EB\u30C8\u30BB\u30C3\u30C8",
    itemPrice: 5380,
    itemUrl: "https://item.rakuten.co.jp/bombomy-osaka/16-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664920b.5625fe5f.5664920c.ab50a616/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbombomy-osaka%2F16-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bombomy-osaka/cabinet/imgrc0095741240.jpg?_ex=240x240",
    shopName: "BOMBOMY",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u4E38\u798F\u73C8\u7432\u5E97 \u73C8\u7432\u30D7\u30EA\u30F3\uFF06\u540D\u7269\u30D7\u30EA\u30F3\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3990,
    itemUrl: "https://item.rakuten.co.jp/mfcoffee/ot-p4cp4mp4/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566492bd.7a61c3af.566492be.7a38d596/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmfcoffee%2Fot-p4cp4mp4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mfcoffee/cabinet/cyuu/imgrc0111781106.jpg?_ex=240x240",
    shopName: "\u4E38\u798F\u73C8\u7432\u5E97",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u7F36\u30B9\u30A4\u30FC\u30C4 \u30B1\u30FC\u30AD\u7F36\uFF06\u30D7\u30EA\u30F3\u7F36\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 6480,
    itemUrl: "https://item.rakuten.co.jp/w-harmony/canpachi-0839/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649439.86e65fde.5664943a.ff943f47/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fw-harmony%2Fcanpachi-0839%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/w-harmony/cabinet/canpachi-can/dessert/cakecan_set_6wp.jpg?_ex=240x240",
    shopName: "w-harmony",
    reviewAverage: 4.5,
    reviewCount: 70,
    targetTypes: ["STCW", "STFW"]
  },
  {
    itemName: "\u30D5\u30EC\u30A4\u30D0\u30FC \u30B7\u30D5\u30A9\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 3396,
    itemUrl: "https://item.rakuten.co.jp/luna-luce/flavor-104-101/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566494af.7b0f838e.566494b0.b843b8fd/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fluna-luce%2Fflavor-104-101%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/luna-luce/cabinet/lunaimg/flam-chilled.jpg?_ex=240x240",
    shopName: "\u30EB\u30CA\u30FB\u30EB\u30FC\u30C1\u30A7",
    reviewAverage: 4,
    reviewCount: 85,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u9B54\u6CD5\u306E\u5EB5 \u751F\u30AF\u30EA\u30FC\u30E0\u30B7\u30D5\u30A9\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/aikuru/maho-moff_asso/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649572.862e6165.56649573.6c49a14b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Faikuru%2Fmaho-moff_asso%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/aikuru/cabinet/web/mahoan_2013/creammoffon6.jpg?_ex=240x240",
    shopName: "\u9B54\u6CD5\u306E\u5EB5",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30C9\u30EB\u30C1\u30A7\u30D5\u30A7\u30EA\u30FC\u30C1\u30A7 \u30D1\u30A6\u30F3\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 2180,
    itemUrl: "https://item.rakuten.co.jp/dolcefelice/8201671/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566496b9.db9ebc9b.566496ba.7e56f679/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdolcefelice%2F8201671%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/dolcefelice/cabinet/12490129/12490130/12490136/felice_thumb_pt5.jpg?_ex=240x240",
    shopName: "\u30C9\u30EB\u30C1\u30A7\u30D5\u30A7\u30EA\u30FC\u30C1\u30A7",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u524D\u7530\u73C8\u7432 \u30D1\u30A6\u30F3\u30C9\u30B1\u30FC\u30AD\u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 2170,
    itemUrl: "https://item.rakuten.co.jp/maedacoffee/403/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664970a.a1861afd.5664970b.d9d879aa/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmaedacoffee%2F403%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/maedacoffee/cabinet/06622049/imgrc0069194105.jpg?_ex=240x240",
    shopName: "\u524D\u7530\u73C8\u7432",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u3046\u3055\u304E\u5802 \u30D7\u30EC\u30DF\u30A2\u30E0\u30E9\u30E0\u30EC\u30FC\u30BA\u30F3\u30D1\u30A6\u30F3\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 3456,
    itemUrl: "https://item.rakuten.co.jp/usagido-sweets/lambraisin-pound/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649842.4208b85f.56649843.7b71c767/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fusagido-sweets%2Flambraisin-pound%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/usagido-sweets/cabinet/square800/p_rumraisin.jpg?_ex=240x240",
    shopName: "\u3046\u3055\u304E\u5802\u30B9\u30A4\u30FC\u30C4",
    reviewAverage: 4.5,
    reviewCount: 78,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30DD\u30E1\u30BE\u30F3 \u702C\u6238\u5185\u30EC\u30E2\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 3655,
    itemUrl: "https://item.rakuten.co.jp/pomaison/pmlemon001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649b49.da4f7145.56649b4a.843ae9b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpomaison%2Fpmlemon001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/pomaison/cabinet/biiino/item/main-image-2/20260628105812_1.jpg?_ex=240x240",
    shopName: "\u30DD\u30E1\u30BE\u30F3",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u4E94\u611F \u6AB8\u6AAC\u71E6\uFF08\u30EC\u30E2\u30F3\u3055\u3093\uFF09",
    itemPrice: 1458,
    itemUrl: "https://item.rakuten.co.jp/patisserie-gokanshop/remonsan/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566499e2.ec89cb03.566499e3.c9463026/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpatisserie-gokanshop%2Fremonsan%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/patisserie-gokanshop/cabinet/remonsan/imgrc0113095925.jpg?_ex=240x240",
    shopName: "\u4E94\u611F GOKAN",
    reviewAverage: 5,
    reviewCount: 160,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30CA\u30EB\u30DF\u30BA\u30E0 \u8A33\u3042\u308A\u713C\u304D\u30C9\u30FC\u30CA\u30C4\u30BB\u30C3\u30C8",
    itemPrice: 2899,
    itemUrl: "https://item.rakuten.co.jp/narumism/dn_wkst1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649d63.3ca06efd.56649d64.e14f071d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnarumism%2Fdn_wkst1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/narumism/cabinet/donutwakeari/wk16.jpg?_ex=240x240",
    shopName: "\u30CA\u30EB\u30DF\u30BA\u30E0",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u304A\u3068\u3046\u3075\u5DE5\u623F\u3044\u3057\u304B\u308F \u3068\u3046\u3075\u30C9\u30FC\u30CA\u30C4",
    itemPrice: 2484,
    itemUrl: "https://item.rakuten.co.jp/otoufu/10002006/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649e63.a09d4232.56649e64.501c9852/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fotoufu%2F10002006%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/otoufu/cabinet/sweets/donut_tsumi.jpg?_ex=240x240",
    shopName: "\u304A\u3068\u3046\u3075\u5DE5\u623F\u3044\u3057\u304B\u308F",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30CF\u30C3\u30D4\u30FC\u30C7\u30EA\u30AB \u30AB\u30E9\u30D5\u30EB\u30DE\u30AB\u30ED\u30F3\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3480,
    itemUrl: "https://item.rakuten.co.jp/happydelica/74684/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649f08.5ea9d0b9.56649f09.ef10756d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhappydelica%2F74684%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/happydelica/cabinet/biiino/item/main-image-5/20250620172908_1.jpg?_ex=240x240",
    shopName: "\u30CF\u30C3\u30D4\u30FC\u30C7\u30EA\u30AB",
    reviewAverage: 5,
    reviewCount: 130,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u83D3\u5320\u3082\u308A\u3093 \u81F3\u9AD8\u306E\u30DE\u30AB\u30ED\u30F3\u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3528,
    itemUrl: "https://item.rakuten.co.jp/kasyou-morin/macaron-20/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e83e.53f47b95.5663e83f.660739f6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkasyou-morin%2Fmacaron-20%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kasyou-morin/cabinet/05776678/macaron-20-sum.jpg?_ex=240x240",
    shopName: "\u83D3\u5320\u3082\u308A\u3093",
    reviewAverage: 4.5,
    reviewCount: 280,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30B9\u30C6\u30E9\u304A\u3070\u3055\u3093\u306E\u30AF\u30C3\u30AD\u30FC \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 1740,
    itemUrl: "https://item.rakuten.co.jp/friend-gift/10031457/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648144.50eeba4d.56648145.4617919e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffriend-gift%2F10031457%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/friend-gift/cabinet/renewal/re2022/imgrc0085660771.jpg?_ex=240x240",
    shopName: "\u30B9\u30C6\u30E9\u304A\u3070\u3055\u3093\u306E\u30AF\u30C3\u30AD\u30FC",
    reviewAverage: 4,
    reviewCount: 340,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30E1\u30BE\u30F3\u30FB\u30C9\u30FB\u30DF\u30A8\u30EB \u30DE\u30AB\u30C7\u30DF\u30A2\u30AD\u30E3\u30E9\u30E1\u30EB\u30B5\u30F3\u30C9",
    itemPrice: 2680,
    itemUrl: "https://item.rakuten.co.jp/maisondumiel/caramelsand5/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664a171.06b596aa.5664a172.ef17bf00/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmaisondumiel%2Fcaramelsand5%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/maisondumiel/cabinet/cr/kago/caramelsand_kago_01.jpg?_ex=240x240",
    shopName: "\u30E1\u30BE\u30F3\u30FB\u30C9\u30FB\u30DF\u30A8\u30EB",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u4E2D\u5CF6\u5927\u7965\u5802 \u4E39\u6CE2\u304B\u3089\u306E\u8D08\u308A\u7269 \u713C\u304D\u83D3\u5B50\u30BB\u30C3\u30C8",
    itemPrice: 1620,
    itemUrl: "https://item.rakuten.co.jp/nakajimataishodo/nya-50/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664a1a2.a8407eb4.5664a1a3.9883878f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnakajimataishodo%2Fnya-50%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nakajimataishodo/cabinet/shohin/nye-50/4.jpg?_ex=240x240",
    shopName: "\u4E2D\u5CF6\u5927\u7965\u5802",
    reviewAverage: 4.5,
    reviewCount: 105,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30AD\u30CF\u30C1 \u30D0\u30FC\u30E0\u30AF\u30FC\u30D8\u30F3\u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 2700,
    itemUrl: "https://item.rakuten.co.jp/bellevie-harima/ad-sweets-5292/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644df1.c9459e58.56644df2.7fb6a9b5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Fad-sweets-5292%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bellevie-harima/cabinet/0804/gift2/mrnn17_s1.jpg?_ex=240x240",
    shopName: "\u30D1\u30C6\u30A3\u30B9\u30EA\u30FC \u30AD\u30CF\u30C1",
    reviewAverage: 4.5,
    reviewCount: 240,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30C0\u30F3\u30B1 \u51CD\u3089\u305B\u3066\u98DF\u3079\u308B\u30A2\u30A4\u30B9\u30C7\u30B6\u30FC\u30C8",
    itemPrice: 3180,
    itemUrl: "https://item.rakuten.co.jp/bellevie-harima/danke-ice002/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644df1.c9459e58.56644df2.7fb6a9b5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Fdanke-ice002%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bellevie-harima/cabinet/point5/hitteic15_s1a.jpg?_ex=240x240",
    shopName: "\u30D9\u30EB\u30F4\u30A3",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["STCW", "SHCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u4EAC\u90FD\u5E9C\u9577\u5CA1\u4EAC\u5E02 \u30AF\u30EC\u30FC\u30E0\u30D6\u30EA\u30E5\u30EC\u30C9\u30FC\u30CA\u30C4",
    itemPrice: 4e3,
    itemUrl: "https://item.rakuten.co.jp/f261009-kyoto/a-qq002/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566489a6.1d2755dd.566489a7.de68d725/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff261009-kyoto%2Fa-qq002%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f261009-kyoto/cabinet/frp_goods/frp043/100073753.jpg?_ex=240x240",
    shopName: "\u4EAC\u90FD\u5E9C\u9577\u5CA1\u4EAC\u5E02",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u5275\u3059\u3051 \u3072\u3093\u3084\u308A\u6975\u4E0A \u30A2\u30A4\u30B9\u30C7\u30B6\u30FC\u30C8\u30BB\u30C3\u30C8",
    itemPrice: 3280,
    itemUrl: "https://item.rakuten.co.jp/sosuke/006049/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648aa8.2a8aca4a.56648aa9.f0ac9656/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsosuke%2F006049%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sosuke/cabinet/06372009/10608801/imgrc0171706820.jpg?_ex=240x240",
    shopName: "\u5275\u3059\u3051",
    reviewAverage: 4.5,
    reviewCount: 64,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u30DE\u30C9\u30EC\u30FC\u30CC\uFF06\u30D5\u30A3\u30CA\u30F3\u30B7\u30A7\u30BB\u30C3\u30C8",
    itemPrice: 1680,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4571216260039/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4571216260039%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/4571216260039-00-21.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u5317\u306E\u304A\u83D3\u5B50\u83EF\u98A8 \u3075\u308F\u3075\u308F\u30AA\u30E0\u30EC\u30C3\u30C8\u30BB\u30C3\u30C8",
    itemPrice: 3930,
    itemUrl: "https://item.rakuten.co.jp/kitanokashi-kafuu/otamesi_om/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/47f67b9e.0633201a.47f67b9f.2331b651/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkitanokashi-kafuu%2Fotamesi_om%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kitanokashi-kafuu/cabinet/omelet_set/20250416_om1.jpg?_ex=240x240",
    shopName: "\u5317\u306E\u304A\u83D3\u5B50 \u83EF\u98A8",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u65E5\u672C\u6A4B\u5C4B\u9577\u5175\u885B \u91D1\u9B5A\u3059\u304F\u3044\u30BC\u30EA\u30FC",
    itemPrice: 2004,
    itemUrl: "https://item.rakuten.co.jp/marry-gift/an_jpb-14/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648c2f.66b33991.56648c32.1c0d2fc6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmarry-gift%2Fan_jpb-14%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/marry-gift/cabinet/event_catalog_15/ndt-jpd_1.jpg?_ex=240x240",
    shopName: "\u30DE\u30EA\u30FC\u30AE\u30D5\u30C8",
    reviewAverage: 4.5,
    reviewCount: 78,
    targetTypes: ["STCW", "STCJ"]
  },
  {
    itemName: "\u307E\u304A\u3061\u3083\u3093 \u8D05\u6CA2\u30A2\u30A4\u30B9\u30D1\u30D5\u30A7\u30BB\u30C3\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/maochan/mcs-a1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664864b.ba5683b4.5664864c.0442cb54/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmaochan%2Fmcs-a1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/maochan/cabinet/shohin/09139329/jice-1.jpg?_ex=240x240",
    shopName: "\u307E\u304A\u3061\u3083\u3093\u306E\u304A\u306F\u304E",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["STCW"]
  },
  // 中価格帯〜ギフト
  {
    itemName: "\u6614\u61D0\u304B\u3057\u3044 \u99C4\u83D3\u5B50\u8A70\u3081\u5408\u308F\u305B 60\u70B9\u30BB\u30C3\u30C8",
    itemPrice: 3030,
    itemUrl: "https://item.rakuten.co.jp/kamenosuke/sunak60/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660da23.935b6c0d.5660da24.622696af/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamenosuke%2Fsunak60%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamenosuke/cabinet/kame-ry/image-j030/sunak60.jpg?_ex=240x240",
    shopName: "\u304B\u3081\u306E\u3059\u3051",
    reviewAverage: 4.5,
    reviewCount: 190,
    targetTypes: ["YTFW", "YTFC", "YTCJ"]
  },
  {
    itemName: "\u304A\u305B\u3093\u3079\u3044\u30FB\u304A\u304B\u304D \u8A70\u3081\u5408\u308F\u305B\u30AE\u30D5\u30C8",
    itemPrice: 678,
    itemUrl: "https://item.rakuten.co.jp/netbaby/405967/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660c860.2db1be3a.5660c861.2179610a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnetbaby%2F405967%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/netbaby/cabinet/967/405967.jpg?_ex=240x240",
    shopName: "\u30CD\u30C3\u30C8\u30D9\u30D3\u30FC",
    reviewAverage: 4.6,
    reviewCount: 110,
    targetTypes: ["YTCJ", "YHFW", "YHCJ"]
  },
  {
    itemName: "\u3082\u3061\u5409 \u304A\u5473\u898B\u30BB\u30C3\u30C8 \u3081\u3093\u3079\u3044\uFF06\u304A\u714E\u9905\u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 1296,
    itemUrl: "https://item.rakuten.co.jp/mochikichi/01214/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660d30f.cc42bf3e.5660d310.698db4e1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmochikichi%2F01214%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mochikichi/cabinet/shohin_gazo/oajimimdk1810_1200.jpg?_ex=240x240",
    shopName: "\u3082\u3061\u5409",
    reviewAverage: 4.8,
    reviewCount: 1500,
    targetTypes: ["YTCJ", "YHFW"]
  },
  {
    itemName: "\u30B5\u30AF\u30B5\u30AF\u9999\u3070\u3057\u3044 \u305D\u3089\u8C46\u306E\u304A\u3084\u3064",
    itemPrice: 480,
    itemUrl: "https://item.rakuten.co.jp/kyunan/broadbeans/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660cdf8.13409f57.5660cdf9.5aaa61b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkyunan%2Fbroadbeans%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kyunan/cabinet/mame/broadbeans/soramame_001.jpg?_ex=240x240",
    shopName: "\u30BF\u30DE\u30C1\u30E3\u30F3\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.7,
    reviewCount: 280,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "OH!\u30AA\u30B5\u30AB\u30FC\u30CA \u30A2\u30FC\u30E2\u30F3\u30C9\u5C0F\u9B5A\uFF06\u30DF\u30C3\u30AF\u30B9\u30CA\u30C3\u30C4",
    itemPrice: 480,
    itemUrl: "https://item.rakuten.co.jp/kyunan/4535640000074/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660cdf8.13409f57.5660cdf9.5aaa61b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkyunan%2F4535640000074%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kyunan/cabinet/snack/osacana/imgrc0135383390.jpg?_ex=240x240",
    shopName: "\u30BF\u30DE\u30C1\u30E3\u30F3\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.8,
    reviewCount: 1440,
    targetTypes: ["YHCW", "YTCW"]
  },
  {
    itemName: "\u719F\u6210\u306D\u3063\u3068\u308A\u7D05\u306F\u308B\u304B \u5E72\u3057\u828B 3\u888B\u30BB\u30C3\u30C8",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/kyunan/hoshiimo-beni_3set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660cdf8.13409f57.5660cdf9.5aaa61b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkyunan%2Fhoshiimo-beni_3set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kyunan/cabinet/hosiimo/hoshiimo_beni_3set.jpg?_ex=240x240",
    shopName: "\u30BF\u30DE\u30C1\u30E3\u30F3\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.6,
    reviewCount: 640,
    targetTypes: ["YHFW", "YTFW", "STFJ"]
  },
  // --- 和菓子・伝統銘菓・チュロス・和洋アソート系 ---
  {
    itemName: "\u30C8\u30E9\u30C3\u30C9\u30AF\u30C3\u30AD\u30FC \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 1700,
    itemUrl: "https://item.rakuten.co.jp/magokorotabaki/12hz-k8221-609sk/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664eff9.f717e3d5.5664effa.2e7ffa2f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmagokorotabaki%2F12hz-k8221-609sk%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/magokorotabaki/cabinet/tukurikomi/tradcookie/tc-10-2.jpg?_ex=240x240",
    shopName: "\u307E\u3054\u3053\u308D\u7279\u9078\u4FBF",
    reviewAverage: 4,
    reviewCount: 65,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u4E2D\u4E95\u88FD\u83D3 \u8077\u4EBA\u624B\u713C\u304D\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/nakai-seika/c009/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664f024.467554cc.5664f025.4f439cfa/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnakai-seika%2Fc009%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nakai-seika/cabinet/goods_image/change/c009_1.jpg?_ex=240x240",
    shopName: "\u4E2D\u4E95\u88FD\u83D3",
    reviewAverage: 4,
    reviewCount: 42,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u660E\u6CBB\u8A18\u5FF5\u9928 \u5869\u30D0\u30BF\u30FC\u30D4\u30B9\u30BF\u30C1\u30AA\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 2976,
    itemUrl: "https://item.rakuten.co.jp/meijikinenkan/r04009/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664f111.38174094.5664f112.5ab71c6a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmeijikinenkan%2Fr04009%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/meijikinenkan/cabinet/compass1753944533.jpg?_ex=240x240",
    shopName: "\u660E\u6CBB\u8A18\u5FF5\u9928\u30AA\u30F3\u30E9\u30A4\u30F3\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["SHFW", "STFW"]
  },
  {
    itemName: "\u8DB3\u7ACB\u97F3\u885B\u9580 \u548C\u4E09\u76C6\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 1382,
    itemUrl: "https://item.rakuten.co.jp/otoemon/fytj-y0107/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664f1a7.e36fca44.5664f1a8.f9076daf/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fotoemon%2Ffytj-y0107%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/otoemon/cabinet/product-item/y/y0107-b101tl.jpg?_ex=240x240",
    shopName: "\u8DB3\u7ACB\u97F3\u885B\u9580",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["SHFW", "SHFJ"]
  },
  {
    itemName: "\u30B7\u30A7\u30EA\u30FC\u30D6\u30E9\u30F3 \u30D7\u30EC\u30DF\u30A2\u30E0\u30D0\u30BF\u30FC\u30B5\u30D6\u30EC",
    itemPrice: 1680,
    itemUrl: "https://item.rakuten.co.jp/cherie-brin/sabledorbox/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664f2c9.f9d75645.5664f2ca.ecd3a65e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcherie-brin%2Fsabledorbox%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cherie-brin/cabinet/osewa.jpg?_ex=240x240",
    shopName: "\u30B7\u30A7\u30EA\u30FC\u30D6\u30E9\u30F3",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u5E78\u3075\u304F\u56E3\u5B50 10\u7A2E\u985E\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2598,
    itemUrl: "https://item.rakuten.co.jp/ko-fuku/dango-8/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56610b61.ff9b0f48.56610b62.fc3ed4e9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fko-fuku%2Fdango-8%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ko-fuku/cabinet/biiino/item/main-image-2/20250913102200_1.jpg?_ex=240x240",
    shopName: "\u304A\u83D3\u5B50\u306E\u5E78\u3075\u304F",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u5341\u52DD\u767D\u7389\u305C\u3093\u3056\u3044\u30FB\u548C\u30B9\u30A4\u30FC\u30C4\u30BB\u30C3\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/tokachiseika/10010/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566502c2.8cb82821.566502c3.7e4fcd1d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftokachiseika%2F10010%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tokachiseika/cabinet/th/10010th.jpg?_ex=240x240",
    shopName: "\u5341\u52DD\u88FD\u83D3",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u7FBD\u4E8C\u91CD\u3060\u3093\u3054 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/r-food/rf-f-00248/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/493977da.65022cd1.493977db.2d1ab3b3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-food%2Frf-f-00248%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/r-food/cabinet/habutae/item_habutae_img01.jpg?_ex=240x240",
    shopName: "\u7FBD\u4E8C\u91CD\u9905\u672C\u8217",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u7C9F\u6D25\u5C4B \u3078\u305D\u3060\u3093\u3054",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/awaduya/005/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566504bb.70ad70a9.566504bc.d048e3f9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fawaduya%2F005%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/awaduya/cabinet/hesodango9top.jpg?_ex=240x240",
    shopName: "\u7C9F\u6D25\u5C4B",
    reviewAverage: 4,
    reviewCount: 60,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u307F\u305F\u3089\u3057\u56E3\u5B50\u30FB\u3042\u3093\u3053\u56E3\u5B50\u30BB\u30C3\u30C8",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/etaiyou/taiyo-dng-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665058e.374d3c65.5665058f.eae4c9da/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fetaiyou%2Ftaiyo-dng-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/etaiyou/cabinet/11794279/top/taiyo-dng-1.jpg?_ex=240x240",
    shopName: "\u592A\u967D\u672C\u8217",
    reviewAverage: 4,
    reviewCount: 75,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u53E4\u5C4B\u7523\u696D \u540D\u7269 \u4E94\u5E73\u9905",
    itemPrice: 2100,
    itemUrl: "https://item.rakuten.co.jp/3284rice/furuya-goheimochi/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566505fa.fe84f8e2.566505fb.31ec533f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F3284rice%2Ffuruya-goheimochi%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/3284rice/cabinet/12433684/imgrc0113465237.jpg?_ex=240x240",
    shopName: "\u53E4\u5C4B\u7523\u696D",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YTFJ", "YHFJ"]
  },
  {
    itemName: "\u99FF\u6CB3\u5C4B \u30D7\u30EC\u30DF\u30A2\u30E0\u30D5\u30EB\u30FC\u30C4\u5927\u798F",
    itemPrice: 3850,
    itemUrl: "https://item.rakuten.co.jp/surugayaki/dai00600/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56650714.ee08b7e5.56650715.5b4f9a65/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurugayaki%2Fdai00600%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/surugayaki/cabinet/daihuku/imgrc0149971244.jpg?_ex=240x240",
    shopName: "\u99FF\u6CB3\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u4EAC\u90FD \u4ED9\u83D3 \u30D7\u30EC\u30DF\u30A2\u30E0\u5927\u798F\u30BB\u30C3\u30C8",
    itemPrice: 2670,
    itemUrl: "https://item.rakuten.co.jp/kuroneko-cake/senga06/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566507ce.84efffb9.566507cf.d8fe9f6f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkuroneko-cake%2Fsenga06%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kuroneko-cake/cabinet/kyoto_senga/daifuku_6.jpg?_ex=240x240",
    shopName: "\u4EAC\u90FD\u4ED9\u83D3",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u82B1\u3048\u3061\u305C\u3093 \u3068\u308D\u3051\u308B\u751F\u30AF\u30EA\u30FC\u30E0\u5927\u798F",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/hanaechizen/namacream001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56650909.f27237ab.5665090a.9c8e2a5c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhanaechizen%2Fnamacream001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hanaechizen/cabinet/medama/cg/nd8_me26cg4b.jpg?_ex=240x240",
    shopName: "\u82B1\u3048\u3061\u305C\u3093",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u62B9\u8336\u30D0\u30B9\u30AF\u30C1\u30FC\u30BA\u30B1\u30FC\u30AD",
    itemPrice: 3584,
    itemUrl: "https://item.rakuten.co.jp/ksfg-online/0-v001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56650ac1.23f6aa3a.56650ac2.10085d91/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksfg-online%2F0-v001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ksfg-online/cabinet/08840972/gemini_newkago0.jpg?_ex=240x240",
    shopName: "\u30B3\u30F3\u30EC\u30AB\u30EB\uFF08KSFG\uFF09",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STFJ", "STFW", "STCW"]
  },
  {
    itemName: "\u9234\u6728\u5712 \u6FC3\u539A\u62B9\u8336\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8",
    itemPrice: 4980,
    itemUrl: "https://item.rakuten.co.jp/suzukien/682588/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56650b42.605c2be8.56650b43.e382b7ce/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuzukien%2F682588%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/suzukien/cabinet/03720016/dai-231229-top.jpg?_ex=240x240",
    shopName: "\u9234\u6728\u5712",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFJ", "STFW", "STCW"]
  },
  {
    itemName: "\u696D\u52D9\u7528 \u3082\u3061\u3082\u3061\u30DF\u30EB\u30AF\u30AF\u30EC\u30FC\u30D7",
    itemPrice: 2680,
    itemUrl: "https://item.rakuten.co.jp/sucarfood/0004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643861.73e10b6d.56643862.0d588b5b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsucarfood%2F0004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sucarfood/cabinet/07421657/imgrc0104677972.jpg?_ex=240x240",
    shopName: "sucarfood",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u5C71\u9670\u3068\u308C\u305F\u3066\u672C\u8217 \u30DF\u30CB\u56DB\u5B63\u306E\u4E0A\u751F\u83D3\u5B50",
    itemPrice: 3480,
    itemUrl: "https://item.rakuten.co.jp/sanintoretatehonpo/mtys-mini-jonama-set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566510dc.a424452e.566510dd.748e68f0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanintoretatehonpo%2Fmtys-mini-jonama-set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sanintoretatehonpo/cabinet/sw/fd/js12-sum-sam.jpg?_ex=240x240",
    shopName: "\u5C71\u9670\u3068\u308C\u305F\u3066\u672C\u8217",
    reviewAverage: 4.5,
    reviewCount: 175,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u672C\u591A\u5C4B \u5C71\u53E3\u3046\u3044\u308D\u3046\u30FB\u9298\u83D3\u8A70\u5408\u305B",
    itemPrice: 3210,
    itemUrl: "https://item.rakuten.co.jp/hondaya/set_ui3tsutomika/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566511b7.e2376c43.566511b8.82954478/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhondaya%2Fset_ui3tsutomika%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hondaya/cabinet/mikasayaki/syohin01/12225422/imgrc0127464748.jpg?_ex=240x240",
    shopName: "\u672C\u591A\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 90,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u4EAC\u90FD \u9F13\u6708 \u590F\u306E\u4EAC\u9298\u83D3 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3780,
    itemUrl: "https://item.rakuten.co.jp/kogetsu/1000389/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56651348.612c02d2.56651349.4c0dfdfa/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkogetsu%2F1000389%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIxMDB4MTAwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbSI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsJiJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kogetsu/cabinet/1000389.jpg?_ex=240x240",
    shopName: "\u4EAC\u90FD \u9F13\u6708",
    reviewAverage: 4.5,
    reviewCount: 230,
    targetTypes: ["STFJ", "SHFJ"]
  },
  {
    itemName: "\u4EAC\u90FD \u9DB4\u5C4B\u5149\u4FE1 \u3072\u3068\u304F\u3061\u7F8A\u7FB9\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/turuya-mitunobu/10000052/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566513de.f5520787.566513df.ed7339c5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fturuya-mitunobu%2F10000052%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/turuya-mitunobu/cabinet/01809797/10000052s_01.jpg?_ex=240x240",
    shopName: "\u4EAC\u90FD \u9DB4\u5C4B\u5149\u4FE1",
    reviewAverage: 4.5,
    reviewCount: 150,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u91D1\u6CA2\u5C0F\u753A \u548C\u83D3\u5B50\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2300,
    itemUrl: "https://item.rakuten.co.jp/tabemore/t-32-003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d04f.8811fad6.5664d050.585e3c77/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftabemore%2Ft-32-003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tabemore/cabinet/11718347/12523561/sss/t-32-003-01_emb.jpg?_ex=240x240",
    shopName: "Tabemore",
    reviewAverage: 4.5,
    reviewCount: 82,
    targetTypes: ["STFJ", "SHFJ"]
  },
  {
    itemName: "\u6E4A\u5C4B \u7279\u9078\u3064\u3076\u3042\u3093\u548C\u83D3\u5B50\u30BB\u30C3\u30C8",
    itemPrice: 3480,
    itemUrl: "https://item.rakuten.co.jp/minatoya/790751/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566516a3.0263b64b.566516a4.df5ebbcc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fminatoya%2F790751%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/minatoya/cabinet/06800135/imgrc0090664330.jpg?_ex=240x240",
    shopName: "\u6E4A\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u5869\u702C\u7DCF\u672C\u5BB6 \u5FD7\u307B\u305B\u9945\u982D 9\u500B\u5165",
    itemPrice: 2596,
    itemUrl: "https://item.rakuten.co.jp/shiose1349/shiosemanju9/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665179a.697ebaea.5665179b.1d414cc0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshiose1349%2Fshiosemanju9%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/shiose1349/cabinet/10451522/imgrc0105088676.jpg?_ex=240x240",
    shopName: "\u5869\u702C\u7DCF\u672C\u5BB6",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u9298\u83D3 \u7FBD\u4E8C\u91CD\u9905 \u8A70\u5408\u305B",
    itemPrice: 1300,
    itemUrl: "https://item.rakuten.co.jp/habutemochi/10000004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566519da.ac238641.566519db.a37577d8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhabutemochi%2F10000004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/habutemochi/cabinet/item/02/10000004.jpg?_ex=240x240",
    shopName: "\u7FBD\u4E8C\u91CD\u9905\u672C\u8217",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u30D9\u30EB\u30F4\u30A3 \u548C\u751F\u83D3\u5B50\u30FB\u3072\u3068\u304F\u3061\u7F8A\u7FB9\u30BB\u30C3\u30C8",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/bellevie-harima/food-01226/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644df1.c9459e58.56644df2.7fb6a9b5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Ffood-01226%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bellevie-harima/cabinet/0804/sg_s1/food-01226_s1.jpg?_ex=240x240",
    shopName: "\u30D9\u30EB\u30F4\u30A3",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u5FB3\u5CF6\u9298\u83D3 \u6817\u5C3E\u5546\u5E97 \u3068\u3089\u5DFB",
    itemPrice: 255,
    itemUrl: "https://item.rakuten.co.jp/awayatokushima/tora1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56651bc5.877a4f2c.56651bc6.febab7df/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fawayatokushima%2Ftora1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/awayatokushima/cabinet/07040913/imgrc0075045035.jpg?_ex=240x240",
    shopName: "\u3042\u308F\u3084",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u4FE1\u5DDE\u3064\u3050\u3084 \u304A\u8A66\u3057\u3069\u3089\u713C\u304D\u30BB\u30C3\u30C8",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/373shinsyu-tsuguya/227/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56651dbf.2aa96b51.56651dc0.e6a61962/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F373shinsyu-tsuguya%2F227%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/373shinsyu-tsuguya/cabinet/10050958/imgrc0133613065.jpg?_ex=240x240",
    shopName: "\u4FE1\u5DDE\u3064\u3050\u3084",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u831C\u4E38 \u3069\u3089\u713C\u304D 10\u500B\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2600,
    itemUrl: "https://item.rakuten.co.jp/akanemaru/d37-821-g10/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56651e66.cbcf173e.56651e67.4a6d0906/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fakanemaru%2Fd37-821-g10%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/akanemaru/cabinet/set01/d37-821-g10.jpg?_ex=240x240",
    shopName: "\u831C\u4E38\u672C\u8217",
    reviewAverage: 4.5,
    reviewCount: 320,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7 \u3075\u3093\u308F\u308A\u30DF\u30CB\u30D1\u30F3\u30B1\u30FC\u30AD",
    itemPrice: 781,
    itemUrl: "https://item.rakuten.co.jp/syokusai-shop/19583/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e976.6ab3e990.5663e977.69fe0f48/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsyokusai-shop%2F19583%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/syokusai-shop/cabinet/item/10479019/19583.jpg?_ex=240x240",
    shopName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 52,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u65E5\u672C\u6A4B\u9326\u8C4A\u7433 \u304B\u308A\u3093\u3068\u3046 6\u500B\u8A70\u5408\u305B",
    itemPrice: 3286,
    itemUrl: "https://item.rakuten.co.jp/nishikihorin-shop/4904109000003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56651fc2.7eca0f8b.56651fc3.406dd102/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnishikihorin-shop%2F4904109000003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nishikihorin-shop/cabinet/item/summer/summer_6_ry.jpg?_ex=240x240",
    shopName: "\u65E5\u672C\u6A4B\u9326\u8C4A\u7433",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["SHFJ", "SHFW"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u9ED2\u7CD6\u304B\u308A\u3093\u3068\u3046",
    itemPrice: 980,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4573186216924/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4573186216924%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/4573186216924-00-s.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["SHFJ", "SHFW"]
  },
  {
    itemName: "\u65ED\u88FD\u83D3 \u7279\u9078\u304B\u308A\u3093\u3068\u3046\u30AE\u30D5\u30C8",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/karintou/tokusen4/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56652109.477c1f2e.5665210a.2f149669/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkarintou%2Ftokusen4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/karintou/cabinet/tu/hg/2025toku4-001.jpg?_ex=240x240",
    shopName: "\u65ED\u88FD\u83D3",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["SHFJ", "SHFW"]
  },
  {
    itemName: "\u304B\u307E\u30B7\u30E7 \u30B5\u30AF\u30B5\u30AF\u30C1\u30E5\u30ED\u30B9",
    itemPrice: 3990,
    itemUrl: "https://item.rakuten.co.jp/kamasho/10003442/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663f2ad.fcf5031b.5663f2ae.ea00e830/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamasho%2F10003442%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamasho/cabinet/syo1/250604-02.jpg?_ex=240x240",
    shopName: "\u304B\u307E\u30B7\u30E7",
    reviewAverage: 4,
    reviewCount: 55,
    targetTypes: ["SHFW", "STFW"]
  },
  {
    itemName: "\u51B7\u51CD\u30C1\u30E5\u30ED\u30B9 \u30B9\u30C6\u30A3\u30C3\u30AF\u30BB\u30C3\u30C8",
    itemPrice: 3180,
    itemUrl: "https://item.rakuten.co.jp/kenkouya-webshop/077226/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566533da.ff4c765d.566533db.911c5643/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkenkouya-webshop%2F077226%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kenkouya-webshop/cabinet/lp/12878485/churros_thumb.jpg?_ex=240x240",
    shopName: "\u5065\u5EB7\u3084\u30A6\u30A7\u30D6\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["SHFW", "STFW"]
  },
  // --- 最中・和洋アイス・リンツチョコ・辻利抹茶系 ---
  {
    itemName: "\u64AD\u78E8\u9298\u83D3 \u516D\u4E07\u77F3\u6700\u4E2D",
    itemPrice: 1480,
    itemUrl: "https://item.rakuten.co.jp/rokumangoku/rokumangokumonaka4/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654410.7ca0c375.56654411.a417d73d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frokumangoku%2Frokumangokumonaka4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rokumangoku/cabinet/06814873/main-monaka-4.jpg?_ex=240x240",
    shopName: "\u516D\u4E07\u77F3",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFJ", "SHFJ"]
  },
  {
    itemName: "\u516D\u82B1\u4EAD \u3072\u3068\u3064\u934B \u6700\u4E2D",
    itemPrice: 1100,
    itemUrl: "https://item.rakuten.co.jp/hokkaido-omiyage/rokka035/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654794.aca79ffa.56654795.171cbac4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaido-omiyage%2Frokka035%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hokkaido-omiyage/cabinet/rokka/hitotsunabe_01.jpg?_ex=240x240",
    shopName: "\u5317\u6D77\u9053\u304A\u571F\u7523\u63A2\u691C\u968A",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["STFJ", "SHFJ"]
  },
  {
    itemName: "\u6A2A\u6FF1\u99AC\u8ECA\u9053 \u30A2\u30A4\u30B9\u3082\u306A\u304B\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/onakaegg/6790/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566108a9.2cc4600e.566108aa.3a028b5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fonakaegg%2F6790%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/onakaegg/cabinet/09463831/basyamichi/tbm25_coupon20.jpg?_ex=240x240",
    shopName: "\u6839\u91E7\u751F\u4E73100%\u5C0F\u6797\u7267\u5834",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["SHCJ"]
  },
  {
    itemName: "\u6A2A\u6FF1\u99AC\u8ECA\u9053 \u30D7\u30EC\u30DF\u30A2\u30E0\u6700\u4E2D\u30A2\u30A4\u30B9",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/onakaegg/7837-tbw29/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566108a9.2cc4600e.566108aa.3a028b5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fonakaegg%2F7837-tbw29%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/onakaegg/cabinet/gift/bicegift/tbw29_kagosummer.jpg?_ex=240x240",
    shopName: "\u6839\u91E7\u751F\u4E73100%\u5C0F\u6797\u7267\u5834",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["SHCJ", "STCj"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u3082\u306A\u304B\u30A2\u30A4\u30B9\u8A70\u5408\u305B",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/morematsuya/wakeari-aisu-06/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654a43.3bb28499.56654a44.43d3611c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmorematsuya%2Fwakeari-aisu-06%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/morematsuya/cabinet/9c2b95f6-f84.jpg?_ex=240x240",
    shopName: "\u30E2\u30A2\u677E\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 72,
    targetTypes: ["SHCJ"]
  },
  {
    itemName: "\u30E2\u30A2\u677E\u5C4B \u713C\u304D\u3082\u306A\u304B\u30A2\u30A4\u30B9",
    itemPrice: 3800,
    itemUrl: "https://item.rakuten.co.jp/morematsuya/m-bset-02/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654a43.3bb28499.56654a44.43d3611c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmorematsuya%2Fm-bset-02%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/morematsuya/cabinet/445521444.jpg?_ex=240x240",
    shopName: "\u30E2\u30A2\u677E\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 50,
    targetTypes: ["SHCJ"]
  },
  {
    itemName: "\u304B\u307E\u30C1\u30E5\u30A6 1000\u5186\u30DD\u30C3\u30AD\u30EA \u5272\u308C\u30C1\u30E7\u30B3",
    itemPrice: 2e3,
    itemUrl: "https://item.rakuten.co.jp/kamachu/eraberu1000en/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647b98.c80721b4.56647b99.1efa21f2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamachu%2Feraberu1000en%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamachu/cabinet/06488113/1000pokinatsu1.jpg?_ex=240x240",
    shopName: "\u304B\u307E\u30C1\u30E5\u30A6",
    reviewAverage: 4,
    reviewCount: 160,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "BUZZ STORE \u5927\u5BB9\u91CF \u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3290,
    itemUrl: "https://item.rakuten.co.jp/buzzstore/s10001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654e6d.53d6e9aa.56654e6e.251f2ac9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbuzzstore%2Fs10001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/buzzstore/cabinet/chocolate/40_thum-2.jpg?_ex=240x240",
    shopName: "BUZZ STORE",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u30EA\u30F3\u30C4 Lindt \u30EA\u30F3\u30C9\u30FC\u30EB \u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/lindt-chocolate/9800606/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654ecb.594514a3.56654ecc.b278392f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flindt-chocolate%2F9800606%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/lindt-chocolate/cabinet/9702144_02r.jpg?_ex=240x240",
    shopName: "\u30EA\u30F3\u30C4 \u30C1\u30E7\u30B3\u30EC\u30FC\u30C8",
    reviewAverage: 4.5,
    reviewCount: 980,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u307C\u304F\u306E\u7389\u624B\u7BB1\u5C4B \u672C\u683C\u5272\u308C\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8",
    itemPrice: 2660,
    itemUrl: "https://item.rakuten.co.jp/bokunotamatebakoyafish/honki-mode455/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664a5f3.e6f894ed.5664a5f4.c974f62e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbokunotamatebakoyafish%2Fhonki-mode455%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bokunotamatebakoyafish/cabinet/wchoco/cho25/summer-choco1p.jpg?_ex=240x240",
    shopName: "\u307C\u304F\u306E\u7389\u624B\u7BB1\u5C4B",
    reviewAverage: 4,
    reviewCount: 230,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "Cake Link \u6FC3\u539A\u30B7\u30E7\u30B3\u30E9\u30A2\u30A4\u30B9\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 5435,
    itemUrl: "https://item.rakuten.co.jp/cakelink/h5240614000001z/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56655294.ec2d886b.56655295.5a12eaca/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcakelink%2Fh5240614000001z%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cakelink/cabinet/09449001/10682401/thumbnail-.jpg?_ex=240x240",
    shopName: "Cake Link",
    reviewAverage: 4.5,
    reviewCount: 45,
    targetTypes: ["STCW", "SHCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u5C71\u68A8\u770C\u7532\u5E9C\u5E02 \u30B7\u30E3\u30C8\u30EC\u30FC\u30BC \u30C1\u30E7\u30B3\u30D0\u30C3\u30AD\u30FC\u8A70\u5408\u305B",
    itemPrice: 9500,
    itemUrl: "https://item.rakuten.co.jp/f192015-kofu/k066-018/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56655736.071a9f79.56655737.ba3a7478/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff192015-kofu%2Fk066-018%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f192015-kofu/cabinet/07625981/k283-029-030-s-r.jpg?_ex=240x240",
    shopName: "\u5C71\u68A8\u770C\u7532\u5E9C\u5E02",
    reviewAverage: 4,
    reviewCount: 520,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "dadaca \u3053\u306D\u3053\u306E\u30AF\u30C3\u30AD\u30FC\u30B5\u30F3\u30C9\u30A2\u30A4\u30B9",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/dadaca-onlinestore/koneko-251/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566558b7.0c2c8576.566558b8.f21fe91a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdadaca-onlinestore%2Fkoneko-251%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/dadaca-onlinestore/cabinet/13266683/12.jpg?_ex=240x240",
    shopName: "dadaca\u30AA\u30F3\u30E9\u30A4\u30F3\u30B9\u30C8\u30A2",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u68EE\u6C38\u88FD\u83D3 \u677F\u30C1\u30E7\u30B3\u30A2\u30A4\u30B9",
    itemPrice: 2182,
    itemUrl: "https://item.rakuten.co.jp/smilespoon/6704515-0006/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566559fa.4f33a56b.566559fb.a7d3544f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsmilespoon%2F6704515-0006%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/smilespoon/cabinet/15/6704515-0006_1.jpg?_ex=240x240",
    shopName: "Smile Spoon",
    reviewAverage: 4,
    reviewCount: 160,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u30D3\u30D0\u30FC\u30C1\u30A7 \u6FC3\u539A\u30AF\u30C3\u30AD\u30FC\u30B5\u30F3\u30C9\u30A2\u30A4\u30B9",
    itemPrice: 2440,
    itemUrl: "https://item.rakuten.co.jp/vivace-gelato/10000012/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56655b68.b0440aee.56655b69.459af5a6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvivace-gelato%2F10000012%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/vivace-gelato/cabinet/compass1593592443.jpg?_ex=240x240",
    shopName: "\u30D3\u30D0\u30FC\u30C1\u30A7",
    reviewAverage: 5,
    reviewCount: 42,
    targetTypes: ["STCW", "SHCW"]
  },
  {
    itemName: "\u3080\u3059\u3073\u30AB\u30D5\u30A7 \u304F\u308B\u307F\u306E\u30B6\u30AF\u30B6\u30AF\u30BF\u30EB\u30C8",
    itemPrice: 3450,
    itemUrl: "https://item.rakuten.co.jp/musubi-cafe/10000001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56655d0f.c882dfbb.56655d10.50529e35/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmusubi-cafe%2F10000001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/musubi-cafe/cabinet/compass1614509608.jpg?_ex=240x240",
    shopName: "musubi-cafe",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["SHFW", "STFW"]
  },
  {
    itemName: "\u7947\u5712\u8FBB\u5229 \u5B87\u6CBB\u62B9\u8336\u30ED\u30FC\u30EB\u30B1\u30FC\u30AD",
    itemPrice: 3900,
    itemUrl: "https://item.rakuten.co.jp/giontsujiri/15104/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56655de4.0b65d718.56655de5.055874a2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgiontsujiri%2F15104%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/giontsujiri/cabinet/newlogo_thumb/15104_point5.jpg?_ex=240x240",
    shopName: "\u7947\u5712\u8FBB\u5229",
    reviewAverage: 4.5,
    reviewCount: 230,
    targetTypes: ["STFJ", "STFW", "STCW"]
  },
  {
    itemName: "\u30B7\u30D5\u30A9\u30F3\u30B1\u30FC\u30AD \u9078\u3079\u308B\u30AB\u30C3\u30C8\u30B7\u30D5\u30A9\u30F3\u8A70\u5408\u305B\u30BB\u30C3\u30C8 8\u500B\u5165",
    itemPrice: 3760,
    itemUrl: "https://item.rakuten.co.jp/tokachi-chiffon/4589679480482/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56616182.e75e8916.56616183.aa83a000/",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tokachi-chiffon/cabinet/1bn62.jpg?_ex=240x240",
    shopName: "\u5341\u52DD\u30B7\u30D5\u30A9\u30F3",
    reviewAverage: 4.8,
    reviewCount: 50,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u3057\u3063\u3068\u308A\u30FB\u3075\u308F\u3075\u308F\u30B7\u30D5\u30A9\u30F3\u30B1\u30FC\u30AD\u3010\u9078\u3079\u308B2\u30DB\u30FC\u30EB\u30BB\u30C3\u30C8\u3011",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/tobo-rice/0007/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56615efb.c6ec1df0.56615efc.004d2432/",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tobo-rice/cabinet/event/11732487/13412389/chiffon2set-natu.jpg?_ex=240x240",
    shopName: "\u3068\u307C\u3068\u307C\u30E9\u30A4\u30B9",
    reviewAverage: 4.5,
    reviewCount: 30,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u306E\u3053\u304E\u308A\u5C71\u30D0\u30A6\u30E0\u30AF\u30FC\u30D8\u30F3",
    itemPrice: 2212,
    itemUrl: "https://item.rakuten.co.jp/minamitei/b3_p/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566161cd.abf6141a.566161ce.b51746ac/",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/minamitei/cabinet/03248698/03516164/04069114/nokogiriyama-main2.jpg?_ex=240x240",
    shopName: "\u898B\u6CE2\u4EAD",
    reviewAverage: 4.6,
    reviewCount: 150,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u9759\u5CA1\u62B9\u8336\u30D1\u30A6\u30F3\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 2200,
    itemUrl: "https://item.rakuten.co.jp/oyaizu/10000223/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5661638b.2897ad29.5661638c.1a6f0102/",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/oyaizu/cabinet/kisetu/chugen/10000223_sg.jpg?_ex=240x240",
    shopName: "\u304A\u3084\u3044\u305A\u88FD\u8336",
    reviewAverage: 4.7,
    reviewCount: 200,
    targetTypes: ["STFW", "SHFW", "STFJ"]
  },
  {
    itemName: "\u30AB\u30CA\u30EB\u30C1\u30A7 5\u7A2E \u30B1\u30FC\u30AD \u30AE\u30D5\u30C8 \u6D0B\u83D3\u5B50 \u30B9\u30A4\u30FC\u30C4 \u713C\u83D3\u5B50 \u30D1\u30A6\u30F3\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/anythingshop-roi/1011-0617/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56616574.fe7aea78.56616575.3de9dc1b/",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/anythingshop-roi/cabinet/kihon/1011-0617-111.jpg?_ex=240x240",
    shopName: "anythingshop-roi",
    reviewAverage: 4.4,
    reviewCount: 45,
    targetTypes: ["STFW", "SHFW"]
  },
  // --- お煎餅・おかき・珍味・カルパス・チーズおつまみ（Salty/Y）系 ---
  {
    itemName: "\u8D8A\u5F8C\u88FD\u83D3 \u714E\u9905\u8A70\u5408\u305B",
    itemPrice: 2278,
    itemUrl: "https://item.rakuten.co.jp/bellevie-harima/kjra-006-b/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644df1.c9459e58.56644df2.7fb6a9b5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Fkjra-006-b%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bellevie-harima/cabinet/food/sweets/ricef10_s1a.jpg?_ex=240x240",
    shopName: "\u30D9\u30EB\u30F4\u30A3",
    reviewAverage: 4,
    reviewCount: 140,
    targetTypes: ["YHFJ", "YHCJ"]
  },
  {
    itemName: "\u3082\u3061\u5409 \u304A\u5473\u898B\u30BB\u30C3\u30C8 \u3081\u3093\u3079\u3044\uFF06\u304A\u714E\u9905\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1296,
    itemUrl: "https://item.rakuten.co.jp/mochikichi/01214/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660d30f.cc42bf3e.5660d310.698db4e1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmochikichi%2F01214%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mochikichi/cabinet/shohin_gazo/oajimimdk1810_1200.jpg?_ex=240x240",
    shopName: "\u3082\u3061\u5409",
    reviewAverage: 4.5,
    reviewCount: 1500,
    targetTypes: ["YHFJ", "YTCJ"]
  },
  {
    itemName: "\u79C0\u6708 \u8352\u78EF\u714E\u9905 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/syugetsu/arashi30/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665639c.ce0ee76a.5665639d.948f00f4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsyugetsu%2Farashi30%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/syugetsu/cabinet/sag/imgrc0176369632.jpg?_ex=240x240",
    shopName: "\u79C0\u6708",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u61A9\u3044\u51E6 \u7279\u9078\u624B\u713C\u304D\u304A\u714E\u9905",
    itemPrice: 1350,
    itemUrl: "https://item.rakuten.co.jp/ikoidokoro/10000000/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665644f.645c9890.56656450.390648c2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fikoidokoro%2F10000000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ikoidokoro/cabinet/compass1760680954.jpg?_ex=240x240",
    shopName: "\u61A9\u3044\u51E6",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u3082\u3061\u5409 \u8C4A\u751F \u7F36\u30BB\u30C3\u30C8",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/mochikichi/01213/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660d30f.cc42bf3e.5660d310.698db4e1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmochikichi%2F01213%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mochikichi/cabinet/shohin_gazo/hojo25_logo.jpg?_ex=240x240",
    shopName: "\u3082\u3061\u5409",
    reviewAverage: 4.5,
    reviewCount: 420,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u623F\u306E\u99C5 \u5343\u8449\u843D\u82B1\u751F\u305B\u3093\u3079\u3044",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/fusanoeki/1701493/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665666c.71536937.5665666d.0ad99488/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffusanoeki%2F1701493%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/fusanoeki/cabinet/05015691/10652541/17post-senbei.jpg?_ex=240x240",
    shopName: "\u623F\u306E\u99C5",
    reviewAverage: 3.5,
    reviewCount: 45,
    targetTypes: ["YHFJ", "YTCJ"]
  },
  {
    itemName: "\u52A0\u85E4\u88FD\u83D3 \u65B0\u6F5F\u7C73\u304A\u304B\u304D\u30BB\u30C3\u30C8",
    itemPrice: 1782,
    itemUrl: "https://item.rakuten.co.jp/katoseika/645014/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56656773.30c6693a.56656774.1c2249fe/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkatoseika%2F645014%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/katoseika/cabinet/01066815/imgrc0147951403.jpg?_ex=240x240",
    shopName: "\u52A0\u85E4\u88FD\u83D3",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["YHFJ", "YTFJ"]
  },
  {
    itemName: "\u3053\u3060\u308F\u308A\u8077\u4EBA\u306E\u304A\u304B\u304D\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2780,
    itemUrl: "https://item.rakuten.co.jp/only-one-store/2894-001005/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665687d.32e98a04.5665687e.aab3935b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fonly-one-store%2F2894-001005%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/only-one-store/cabinet/imgrc0117339267.jpg?_ex=240x240",
    shopName: "ONLY ONE STORE",
    reviewAverage: 4,
    reviewCount: 92,
    targetTypes: ["YHFJ", "YTFJ"]
  },
  {
    itemName: "\u30D6\u30C3\u30C4 \u30D7\u30EC\u30DF\u30A2\u30E0\u304A\u3064\u307E\u307F\u30BB\u30C3\u30C8",
    itemPrice: 3280,
    itemUrl: "https://item.rakuten.co.jp/butz/bos-19/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566569e0.91e4f3bd.566569e1.0664c0c6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbutz%2Fbos-19%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/butz/cabinet/design/thum/bos-19_normal.jpg?_ex=240x240",
    shopName: "\u30D6\u30C3\u30C4\u30FB\u30C7\u30EA\u30AB\u30C6\u30C3\u30BB\u30F3",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YHFW", "YHCW", "YTFW"]
  },
  {
    itemName: "\u3046\u3061\u306E\u30A2\u30C6 \u6975\u4E0A\u304A\u3064\u307E\u307F\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1780,
    itemUrl: "https://item.rakuten.co.jp/uchinoate/23129999502/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56656a8e.09f4eda8.56656a8f.529c6aa2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fuchinoate%2F23129999502%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_gold/uchinoate/img/top_ms_2608f/23129999502.jpg?_ex=240x240",
    shopName: "\u3046\u3061\u306E\u30A2\u30C6",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YHFW", "YTCW"]
  },
  {
    itemName: "\u3042\u3079\u3063\u5B50 \u304A\u3064\u307E\u307F\u30DF\u30C3\u30AF\u30B9",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/anythingshop-roi/0030-abeko/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56616574.fe7aea78.56616575.3de9dc1b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fanythingshop-roi%2F0030-abeko%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/anythingshop-roi/cabinet/kihon/13184380/1008-0030-001.jpg?_ex=240x240",
    shopName: "anythingshop-roi",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["YHFW", "YTCW"]
  },
  {
    itemName: "\u3046\u3061\u306E\u30A2\u30C6 \u304A\u3064\u307E\u307F\u73CD\u5473\u30D1\u30C3\u30AF",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/uchinoate/23040117016/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56656a8e.09f4eda8.56656a8f.529c6aa2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fuchinoate%2F23040117016%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_gold/uchinoate/img/top_ms_2608f/23040117016.jpg?_ex=240x240",
    shopName: "\u3046\u3061\u306E\u30A2\u30C6",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["YHFW", "YTCW"]
  },
  {
    itemName: "\u5317\u6D77\u9053 \u5C0F\u6A3D\u6D77\u9BAE\u304A\u3064\u307E\u307F5\u7A2E\u30BB\u30C3\u30C8",
    itemPrice: 1650,
    itemUrl: "https://item.rakuten.co.jp/kaisenotaru/5shu1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56656ce3.c418a6e7.56656ce4.68ac9df7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaisenotaru%2F5shu1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kaisenotaru/cabinet/06425261/5shu1.jpg?_ex=240x240",
    shopName: "\u5C0F\u6A3D\u6D77\u9BAE",
    reviewAverage: 4,
    reviewCount: 130,
    targetTypes: ["YHFW", "YTCJ"]
  },
  {
    itemName: "\u3082\u3093\u307F\u3084 \u6803\u6728\u540D\u7269\u304A\u3064\u307E\u307F\u30AE\u30D5\u30C8",
    itemPrice: 3600,
    itemUrl: "https://item.rakuten.co.jp/monmiya/70005363/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56657dbc.79d812e0.56657dbd.3e462079/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmonmiya%2F70005363%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/monmiya/cabinet/m2/70005363b.jpg?_ex=240x240",
    shopName: "\u3082\u3093\u307F\u3084\u901A\u8CA9",
    reviewAverage: 4,
    reviewCount: 55,
    targetTypes: ["YHFW", "YTCJ"]
  },
  {
    itemName: "\u73CD\u5473 \u304A\u3064\u307E\u307F\u30DF\u30C3\u30AF\u30B9",
    itemPrice: 1098,
    itemUrl: "https://item.rakuten.co.jp/uosou/23504/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56656d4d.61f51d83.56656d4e.c9ebdab9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fuosou%2F23504%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/uosou/cabinet/23504_thm-en.jpg?_ex=240x240",
    shopName: "\u9B5A\u305D\u3046",
    reviewAverage: 4,
    reviewCount: 42,
    targetTypes: ["YHFW", "YTCJ"]
  },
  {
    itemName: "NUTS LINK \u8D05\u6CA2\u30CA\u30C3\u30C4\uFF06\u30C9\u30E9\u30A4\u30D5\u30EB\u30FC\u30C4",
    itemPrice: 2385,
    itemUrl: "https://item.rakuten.co.jp/monoproduction/kwnu000208/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56656e0c.28bc389a.56656e0d.2ba57551/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmonoproduction%2Fkwnu000208%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/monoproduction/cabinet/items/nutslink/otsumami/nlot8_thumb_25_rf.jpg?_ex=240x240",
    shopName: "mono production",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YHCW", "YHFW"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u30DD\u30FC\u30AF\u30B8\u30E3\u30FC\u30AD\u30FC",
    itemPrice: 1599,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4573186216726/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4573186216726%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/4573186216726-00-s.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["YHFW", "YHCW"]
  },
  {
    itemName: "\u304A\u5FB3\u7528 \u30D3\u30FC\u30D5\u30B8\u30E3\u30FC\u30AD\u30FC",
    itemPrice: 1200,
    itemUrl: "https://item.rakuten.co.jp/aloestore/10004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665706e.3336b10b.5665706f.d6cc2669/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Faloestore%2F10004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/aloestore/cabinet/11037483/sm00010468_04.jpg?_ex=240x240",
    shopName: "\u30A2\u30ED\u30A8\u30B9\u30C8\u30A2",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YHFW", "YHCW"]
  },
  {
    itemName: "\u30B5\u30AB\u30CE\u30D6\u30ED\u30B9 \u30C1\u30AD\u30F3\u30B8\u30E3\u30FC\u30AD\u30FC",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/sakanobros/fod_tnsk_cknj_115g_1s/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665719b.89c30f16.5665719c.1fb5f8a8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsakanobros%2Ffod_tnsk_cknj_115g_1s%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sakanobros/cabinet/11798396/11798398/11853197/imgrc0095919983.jpg?_ex=240x240",
    shopName: "\u30B5\u30AB\u30CE\u30D6\u30ED\u30B9",
    reviewAverage: 5,
    reviewCount: 88,
    targetTypes: ["YHFW", "YHCW"]
  },
  {
    itemName: "\u5317\u6D77\u9053\u7523 \u65E8\u8F9B \u9BAD\u3068\u3070",
    itemPrice: 1100,
    itemUrl: "https://item.rakuten.co.jp/hokkaimaru/01-025/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665729b.3af20052.5665729c.083f9f4d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaimaru%2F01-025%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hokkaimaru/cabinet/item-img/amakara130.jpg?_ex=240x240",
    shopName: "\u5317\u6D77\u4E38",
    reviewAverage: 4,
    reviewCount: 120,
    targetTypes: ["YHFW", "YHCJ"]
  },
  {
    itemName: "\u5317\u6D77\u9053\u7523 \u3059\u308B\u3081\u30B8\u30E3\u30FC\u30AD\u30FC 500g",
    itemPrice: 2990,
    itemUrl: "https://item.rakuten.co.jp/esan-konbu/suruja-500g/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665738d.56bc0b05.5665738e.2dc0c1af/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fesan-konbu%2Fsuruja-500g%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/esan-konbu/cabinet/natumiso/otumami2/suruja-n1xx.jpg?_ex=240x240",
    shopName: "\u6075\u5C71\u6606\u5E03",
    reviewAverage: 4.5,
    reviewCount: 290,
    targetTypes: ["YHFW", "YHCJ"]
  },
  {
    itemName: "\u3084\u307F\u3064\u304D \u30D3\u30FC\u30D5\u30B8\u30E3\u30FC\u30AD\u30FC",
    itemPrice: 2690,
    itemUrl: "https://item.rakuten.co.jp/esan-konbu/b-j-175/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665738d.56bc0b05.5665738e.2dc0c1af/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fesan-konbu%2Fb-j-175%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/esan-konbu/cabinet/natumiso/tinmi8/beef-j-2p12.jpg?_ex=240x240",
    shopName: "\u6075\u5C71\u6606\u5E03",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YHFW", "YHCW"]
  },
  {
    itemName: "\u30E4\u30AC\u30A4 \u304A\u3084\u3064\u30AB\u30EB\u30D1\u30B9 \u5927\u5BB9\u91CF\u30DC\u30C3\u30AF\u30B9",
    itemPrice: 2220,
    itemUrl: "https://item.rakuten.co.jp/exicoast02/b00qughbr8/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56657558.e591d9fe.5665755a.ace21c0b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fexicoast02%2Fb00qughbr8%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/exicoast02/cabinet/13678668/imgrc0115708208.jpg?_ex=240x240",
    shopName: "\u30A8\u30AD\u30B7\u30B3\u30FC\u30B9\u30C8",
    reviewAverage: 4.5,
    reviewCount: 380,
    targetTypes: ["YTFW", "YHFW"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u30B8\u30E5\u30FC\u30B7\u30FC\u30AB\u30EB\u30D1\u30B9",
    itemPrice: 1480,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4573186213503/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4573186213503%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/4573186213503-00-s-2.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["YTFW", "YHFW"]
  },
  {
    itemName: "\u3064\u307E\u307F\u8535 \u6FC3\u539A\u30C1\u30FC\u30BA\u30B9\u30C6\u30A3\u30C3\u30AF",
    itemPrice: 1480,
    itemUrl: "https://item.rakuten.co.jp/tsumamikura/4974124088052/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665772a.39496463.5665772b.bd723047/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftsumamikura%2F4974124088052%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tsumamikura/cabinet/12869297/imgrc0120900797.jpg?_ex=240x240",
    shopName: "\u3064\u307E\u307F\u8535",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "\u306A\u3068\u308A \u4E00\u5EA6\u306F\u304A\u8A66\u3057\u3044\u305F\u3060\u304D\u305F\u3044 \u30C1\u30FC\u30BF\u30E9",
    itemPrice: 1312,
    itemUrl: "https://item.rakuten.co.jp/emon-otodoke/10000122mbu12/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566578e6.2440537f.566578e7.639e56cc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Femon-otodoke%2F10000122mbu12%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/emon-otodoke/cabinet/00751243/10553710/imgrc0106368124.jpg?_ex=240x240",
    shopName: "\u3048\u3082\u3093\u304A\u5C4A\u3051\u4FBF",
    reviewAverage: 4.5,
    reviewCount: 340,
    targetTypes: ["YTCW", "YTFW"]
  },
  {
    itemName: "\u6FC3\u539A\u30C1\u30FC\u30BA\u304A\u3064\u307E\u307F 3\u7A2E\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1280,
    itemUrl: "https://item.rakuten.co.jp/mituwa/cheese-3items/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56657a02.435dab74.56657a03.85d627aa/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmituwa%2Fcheese-3items%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mituwa/cabinet/rakulogo/rakurogo3/r693_00364.jpg?_ex=240x240",
    shopName: "\u30DF\u30C4\u30EF",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["YTCW", "YTFW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u4F50\u8CC0\u770C\u5B09\u91CE\u5E02 \u30CA\u30AB\u30B7\u30DE\u30D5\u30A1\u30FC\u30E0 \u30C1\u30FC\u30BA\u30BB\u30C3\u30C8",
    itemPrice: 12e3,
    itemUrl: "https://item.rakuten.co.jp/f412091-ureshino/naj004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56657adc.520ae2e5.56657add.341c1ee7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff412091-ureshino%2Fnaj004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f412091-ureshino/cabinet/longpage/naj/naj.jpg?_ex=240x240",
    shopName: "\u4F50\u8CC0\u770C\u5B09\u91CE\u5E02",
    reviewAverage: 4.5,
    reviewCount: 60,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "\u795E\u934B\u9AD8\u539F \u71FB\u88FD\u30C1\u30FC\u30BA\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3480,
    itemUrl: "https://item.rakuten.co.jp/enjin-kannabe/ej-cheeseset-sb/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56657bcb.85d00197.56657bcc.b39271c7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fenjin-kannabe%2Fej-cheeseset-sb%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/enjin-kannabe/cabinet/shohin_page/cheeseset/imgrc0092440339.jpg?_ex=240x240",
    shopName: "\u7159\u795E\uFF08\u795E\u934B\u9AD8\u539F\uFF09",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "\u30BF\u30DE\u30C1\u30E3\u30F3\u30B7\u30E7\u30C3\u30D7 OH!\u30AA\u30B5\u30AB\u30FC\u30CA \u30C1\u30FC\u30BA\uFF06\u30C1\u30FC\u30BA",
    itemPrice: 880,
    itemUrl: "https://item.rakuten.co.jp/kyunan/cheese-cheese/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660cdf8.13409f57.5660cdf9.5aaa61b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkyunan%2Fcheese-cheese%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kyunan/cabinet/snack/cheese/cheese-tm25-01.jpg?_ex=240x240",
    shopName: "\u30BF\u30DE\u30C1\u30E3\u30F3\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 520,
    targetTypes: ["YHCW", "YHFW"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u713C\u304D\u30C1\u30FC\u30BA\u73CD\u5473",
    itemPrice: 1699,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/sm00010726/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2Fsm00010726%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/sm00010726-00-s.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4,
    reviewCount: 82,
    targetTypes: ["YHCW", "YHFW", "YTCW"]
  },
  // --- スナック菓子・ポテトチップス・駄菓子・胡麻豆腐系 ---
  {
    itemName: "\u89D2\u6D5C\u3054\u307E\u3068\u3046\u3075\u672C\u8217 \u9AD8\u91CE\u5C71\u540D\u7269 \u80E1\u9EBB\u8C46\u8150",
    itemPrice: 1540,
    itemUrl: "https://item.rakuten.co.jp/kadohama/12/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f33c.1829617d.5666f33d.75d877af/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkadohama%2F12%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kadohama/cabinet/item_img/12c.gif?_ex=240x240",
    shopName: "\u89D2\u6D5C\u3054\u307E\u3068\u3046\u3075\u5E97",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u4EAC\u9AD8\u5C71 \u6C38\u5E73\u5BFA\u5FA1\u7528\u9054 \u80E1\u9EBB\u8C46\u8150\u8A70\u5408\u305B",
    itemPrice: 2388,
    itemUrl: "https://item.rakuten.co.jp/sento-coop/kyogozan001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f3c0.ffd35317.5666f3c1.947df289/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsento-coop%2Fkyogozan001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sento-coop/cabinet/goods/kyogozan/1.jpg?_ex=240x240",
    shopName: "\u4EAC\u9AD8\u5C71",
    reviewAverage: 4,
    reviewCount: 60,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u4F0A\u8C46\u6885\u6708\u5712 \u685C\u3082\u3061",
    itemPrice: 2120,
    itemUrl: "https://item.rakuten.co.jp/izubaigetsuen/10000000/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f831.5a9c4c2e.5666f832.5ee39f12/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fizubaigetsuen%2F10000000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/izubaigetsuen/cabinet/04879243/08182521/imgrc0100628890.jpg?_ex=240x240",
    shopName: "\u4F0A\u8C46\u6885\u6708\u5712",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u30AB\u30EB\u30D3\u30FC \u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9 \u307E\u3068\u3081\u8CB7\u3044\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2580,
    itemUrl: "https://item.rakuten.co.jp/tigtig/2990-000206/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F2990-000206%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/2990-000206_w-2.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u30AB\u30EB\u30D3\u30FC \u5805\u3042\u3052\u30DD\u30C6\u30C8 \u307E\u3068\u3081\u8CB7\u3044\u30BB\u30C3\u30C8",
    itemPrice: 2780,
    itemUrl: "https://item.rakuten.co.jp/tigtig/2990-000235/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F2990-000235%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/2990-000235_w-1.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u30AB\u30EB\u30D3\u30FC \u30B9\u30CA\u30C3\u30AF\u83D3\u5B50 \u5927\u5BB9\u91CF\u307E\u3068\u3081\u8CB7\u3044BOX",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/e-convini/10042270/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666fc16.17da4c66.5666fc17.f7fdb688/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-convini%2F10042270%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/e-convini/cabinet/syokuhin03/0420011000293-2511.jpg?_ex=240x240",
    shopName: "e-\u30B3\u30F3\u30D3\u30CB",
    reviewAverage: 4.5,
    reviewCount: 320,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u3054\u5F53\u5730 \u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9 \u98DF\u3079\u6BD4\u3079\u30BB\u30C3\u30C8",
    itemPrice: 2920,
    itemUrl: "https://item.rakuten.co.jp/tigtig/2990-000297/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F2990-000297%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/2990-000297_w-6.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u30D7\u30EA\u30F3\u30B0\u30EB\u30BA \u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9 \u307E\u3068\u3081\u8CB7\u3044",
    itemPrice: 3803,
    itemUrl: "https://item.rakuten.co.jp/rakuten24/4974062004404/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566700d1.6377312c.566700d2.6013e57a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakuten24%2F4974062004404%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/404/4974062004404.jpg?_ex=240x240",
    shopName: "\u697D\u592924",
    reviewAverage: 4.5,
    reviewCount: 250,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u304A\u3084\u3064\u30AB\u30F3\u30D1\u30CB\u30FC \u30D9\u30D3\u30FC\u30B9\u30BF\u30FC\u30E9\u30FC\u30E1\u30F3 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/tigtig/2990-002235/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F2990-002235%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/2990-002235_w-1.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 4.5,
    reviewCount: 190,
    targetTypes: ["YHFW", "YHFJ"]
  },
  {
    itemName: "\u30CE\u30FC\u30B9\u30AB\u30E9\u30FC\u30BA \u7121\u6DFB\u52A0\u7C73\u6CB9\u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9\u30BB\u30C3\u30C8",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/northcolorsshop/set001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56670318.ccb4b79c.56670319.fe1d946d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnorthcolorsshop%2Fset001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/northcolorsshop/cabinet/product/set001_01.jpg?_ex=240x240",
    shopName: "\u30CE\u30FC\u30B9\u30AB\u30E9\u30FC\u30BA",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u6614\u61D0\u304B\u3057\u3044 \u30B9\u30CA\u30C3\u30AF\u99C4\u83D3\u5B50 60\u70B9\u30BB\u30C3\u30C8",
    itemPrice: 3030,
    itemUrl: "https://item.rakuten.co.jp/kamenosuke/sunak60/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660da23.935b6c0d.5660da24.622696af/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamenosuke%2Fsunak60%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamenosuke/cabinet/kame-ry/image-j030/sunak60.jpg?_ex=240x240",
    shopName: "\u304B\u3081\u306E\u3059\u3051",
    reviewAverage: 4,
    reviewCount: 220,
    targetTypes: ["YHFW", "YTFW"]
  },
  {
    itemName: "\u4EBA\u6C17\u30B9\u30CA\u30C3\u30AF \u304A\u8CB7\u3044\u5F97\u30A2\u30BD\u30FC\u30C8\u30D1\u30C3\u30AF",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/tigtig/2990-000399/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F2990-000399%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/2990-000399_w-1.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u304A\u3064\u307E\u307F\u6FC3\u539A\u30C1\u30FC\u30BA\u30B9\u30CA\u30C3\u30AF",
    itemPrice: 1510,
    itemUrl: "https://item.rakuten.co.jp/rakuten24/4974062086806/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566700d1.6377312c.566700d2.6013e57a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakuten24%2F4974062086806%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/806/4974062086806.jpg?_ex=240x240",
    shopName: "\u697D\u592924",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["YHFW", "YHCW"]
  },
  {
    itemName: "\u30E1\u30AC\u76DB\u308A\u99C4\u83D3\u5B50\uFF06\u30B9\u30CA\u30C3\u30AF\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3680,
    itemUrl: "https://item.rakuten.co.jp/kame/201705sunak/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56670ab4.c91b188c.56670ab5.52a068a0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkame%2F201705sunak%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kame/cabinet/kame-ry/image-j030/201705sunak.jpg?_ex=240x240",
    shopName: "\u304B\u3081\u306E\u3059\u3051",
    reviewAverage: 4,
    reviewCount: 175,
    targetTypes: ["YHFW", "YTFW"]
  },
  {
    itemName: "\u30DE\u30A4\u30AF\u30DD\u30C3\u30D7\u30B3\u30FC\u30F3 \u9078\u3079\u308B\u8A70\u5408\u305B",
    itemPrice: 1080,
    itemUrl: "https://item.rakuten.co.jp/tigtig/25011605/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F25011605%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/25011605.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YHFW", "YTFW"]
  },
  {
    itemName: "\u30DD\u30C3\u30D7\u30B3\u30FC\u30F3\u30D1\u30D1 \u9078\u3079\u308B\u4EBA\u6C17\u30D5\u30EC\u30FC\u30D0\u30FC\u30BB\u30C3\u30C8",
    itemPrice: 2400,
    itemUrl: "https://item.rakuten.co.jp/popcornpapa/selectableset/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566710ea.f188fe47.566710eb.1729c346/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpopcornpapa%2Fselectableset%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/popcornpapa/cabinet/r_product_img/imgrc0071485722.jpg?_ex=240x240",
    shopName: "\u30DD\u30C3\u30D7\u30B3\u30FC\u30F3\u30D1\u30D1",
    reviewAverage: 4.5,
    reviewCount: 280,
    targetTypes: ["YHFW", "STFW"]
  },
  {
    itemName: "\u30D5\u30EA\u30C8\u30EC\u30FC \u30DD\u30C3\u30D7\u30B3\u30FC\u30F3 \u5927\u5BB9\u91CF\u307E\u3068\u3081\u8CB7\u3044",
    itemPrice: 2530,
    itemUrl: "https://item.rakuten.co.jp/okasirenjya/4902443554101/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5667127c.0ecee645.5667127d.018d06a9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokasirenjya%2F4902443554101%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okasirenjya/cabinet/03340730/11043111/49024435541013.jpg?_ex=240x240",
    shopName: "\u304A\u83D3\u5B50\u30EC\u30F3\u30B8\u30E3\u30FC",
    reviewAverage: 5,
    reviewCount: 60,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u3048\u3060\u307E\u3081\u30B5\u30AF\u30B5\u30AF\u30B9\u30CA\u30C3\u30AF",
    itemPrice: 1300,
    itemUrl: "https://item.rakuten.co.jp/style-depot/1121767301/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5667152d.12251acb.5667152e.85f04a5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fstyle-depot%2F1121767301%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/style-depot/cabinet/greenbase/edasora/1121767301.jpg?_ex=240x240",
    shopName: "\u30B9\u30BF\u30A4\u30EB\u30C7\u30DD",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u6771\u30CF\u30C8 \u30AB\u30EA\u30C3\u3068\u679D\u8C46 6\u888B\u30BB\u30C3\u30C8",
    itemPrice: 2750,
    itemUrl: "https://item.rakuten.co.jp/takaoka/4901588107265-6/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56671679.68297d73.5667167a.c65f0682/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftakaoka%2F4901588107265-6%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/takaoka/cabinet/03820086/shohin11/4901588107388-6r.jpg?_ex=240x240",
    shopName: "\u9AD8\u5CA1\u88FD\u83D3",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u30E1\u30AC\u76DB\u308A \u61D0\u304B\u3057\u306E\u99C4\u83D3\u5B50 55\u70B9\u30BB\u30C3\u30C8",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/anythingshop-roi/10000583/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56616574.fe7aea78.56616575.3de9dc1b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fanythingshop-roi%2F10000583%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/anythingshop-roi/cabinet/kihon/13184380/dagasi55-01.jpg?_ex=240x240",
    shopName: "anythingshop-roi",
    reviewAverage: 4.5,
    reviewCount: 340,
    targetTypes: ["YHFW", "YTFW", "YHFJ"]
  },
  {
    itemName: "\u30C8\u30AF\u30B9\u30EB \u4EBA\u6C17\u304A\u83D3\u5B50\u5927\u5BB9\u91CFBOX",
    itemPrice: 3380,
    itemUrl: "https://item.rakuten.co.jp/tokusuru-88/10000023/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566719ea.111afd0d.566719eb.8e3f00f0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftokusuru-88%2F10000023%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tokusuru-88/cabinet/goods/ctse01.jpg?_ex=240x240",
    shopName: "\u30C8\u30AF\u30B9\u30EB",
    reviewAverage: 4.5,
    reviewCount: 150,
    targetTypes: ["YHFW", "STFW"]
  },
  {
    itemName: "\u304A\u3084\u3064\u30AB\u30F3\u30D1\u30CB\u30FC \u30D6\u30BF\u30E1\u30F3 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 1580,
    itemUrl: "https://item.rakuten.co.jp/oyatsucompany/r07017/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56671bf1.cba20c7b.56671bf2.6f1f731a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Foyatsucompany%2Fr07017%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/oyatsucompany/cabinet/page/product/r07017/img_1.jpg?_ex=240x240",
    shopName: "\u304A\u3084\u3064\u30AB\u30F3\u30D1\u30CB\u30FC\u516C\u5F0F",
    reviewAverage: 5,
    reviewCount: 280,
    targetTypes: ["YHFW", "YHFJ"]
  },
  {
    itemName: "\u30D6\u30BF\u30E1\u30F3 \u307E\u3068\u3081\u8CB7\u3044\u30AB\u30FC\u30C8\u30F3\u30B1\u30FC\u30B9",
    itemPrice: 5980,
    itemUrl: "https://item.rakuten.co.jp/dagasi/10005091/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56671da2.1cbcc8da.56671da3.88954413/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdagasi%2F10005091%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/dagasi/cabinet/06425981/imgrc0092634605.jpg?_ex=240x240",
    shopName: "\u99C4\u83D3\u5B50\u554F\u5C4B",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["YHFW", "YHFJ"]
  },
  {
    itemName: "\u56FD\u7523 \u30B5\u30AF\u30B5\u30AF\u91CE\u83DC\u30C1\u30C3\u30D7\u30B9",
    itemPrice: 1380,
    itemUrl: "https://item.rakuten.co.jp/segawahonten/04773006/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56671e7b.cb0eec75.56671e7c.0a735f06/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsegawahonten%2F04773006%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/segawahonten/cabinet/04773006-01.jpg?_ex=240x240",
    shopName: "\u702C\u5DDD\u672C\u5E97",
    reviewAverage: 4,
    reviewCount: 110,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u5927\u5730\u306E\u751F\u83D3 15\u7A2E\u985E\u306E\u91CE\u83DC\u30C1\u30C3\u30D7\u30B9",
    itemPrice: 1799,
    itemUrl: "https://item.rakuten.co.jp/daichinoseika/daichinoseika230g/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56671fb3.b6b93636.56671fb4.90a02399/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdaichinoseika%2Fdaichinoseika230g%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/daichinoseika/cabinet/15yasai/15vegi230_3.jpg?_ex=240x240",
    shopName: "\u5927\u5730\u306E\u751F\u83D3",
    reviewAverage: 4,
    reviewCount: 240,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u4E38\u3054\u3068\u30B5\u30AF\u30B5\u30AF \u3057\u3044\u305F\u3051\u30B9\u30CA\u30C3\u30AF",
    itemPrice: 1380,
    itemUrl: "https://item.rakuten.co.jp/nuthyougo/item543/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56672193.5ba35424.56672195.6758b2d8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnuthyougo%2Fitem543%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nuthyougo/cabinet/item543.jpg?_ex=240x240",
    shopName: "\u5175\u5EAB\u30CA\u30C3\u30C4",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YHFJ"]
  },
  // --- 沖縄珍味・ヘルシー惣菜・カヌレ・プレッツェル・スコーン系 ---
  {
    itemName: "\u6614\u61D0\u304B\u3057\u3044 \u9ED2\u7CD6\u3075\u83D3\u5B50 \u5FB3\u7528\u30D1\u30C3\u30AF",
    itemPrice: 2850,
    itemUrl: "https://item.rakuten.co.jp/okagesama-market/10001177/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643b57.32438b19.56643b58.7e7ce188/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokagesama-market%2F10001177%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okagesama-market/cabinet/06206077/06277551/imgrc0065777527.jpg?_ex=240x240",
    shopName: "\u304A\u304B\u3052\u3055\u307E\u30DE\u30FC\u30B1\u30C3\u30C8",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFJ", "SHFJ"]
  },
  {
    itemName: "\u4F2F\u65B9\u306E\u5869\u4F7F\u7528 \u5869\u3082\u306A\u304B",
    itemPrice: 2949,
    itemUrl: "https://item.rakuten.co.jp/mesk-r/456011811016-2/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669ae31.fa3050c7.5669ae32.f3eb01c7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmesk-r%2F456011811016-2%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/mesk-r/cabinet/09104183/231-2.jpg?_ex=240x240",
    shopName: "MESK-R",
    reviewAverage: 5,
    reviewCount: 45,
    targetTypes: ["YTFJ", "YHCJ"]
  },
  {
    itemName: "\u30AB\u30EB\u30D3\u30FC miino\uFF08\u30DF\u30FC\u30CE\uFF09\u305D\u3089\u8C46\u3057\u304A\u5473",
    itemPrice: 2113,
    itemUrl: "https://item.rakuten.co.jp/rakuten24/94184/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566700d1.6377312c.566700d2.6013e57a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakuten24%2F94184%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/184/94184.jpg?_ex=240x240",
    shopName: "\u697D\u592924",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["YHFW", "YHCJ"]
  },
  {
    itemName: "\u5317\u6D77\u9053\u7523 \u719F\u6210\u30AB\u30C3\u30C8\u9BAD\u3068\u3070",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/buono-buono/10000800/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d1ed.e767d058.5664d1ef.6dc295c8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbuono-buono%2F10000800%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/buono-buono/cabinet/samune/notfree/10000800_s.jpg?_ex=240x240",
    shopName: "\u30DC\u30FC\u30CE\u30FB\u30DC\u30FC\u30CE",
    reviewAverage: 4,
    reviewCount: 120,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u6599\u4EAD\u98A8 \u6599\u4EAD\u8336\u7897\u84B8\u3057\u30BB\u30C3\u30C8",
    itemPrice: 3200,
    itemUrl: "https://item.rakuten.co.jp/gourmetadventure/sr-301/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669b14a.369ff407.5669b14b.517caceb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgourmetadventure%2Fsr-301%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/gourmetadventure/cabinet/chawanmadai1.jpg?_ex=240x240",
    shopName: "\u30B0\u30EB\u30E1\u30A2\u30C9\u30D9\u30F3\u30C1\u30E3\u30FC",
    reviewAverage: 4,
    reviewCount: 65,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u30AA\u30AD\u30CF\u30E0 \u30DF\u30DF\u30AC\u30FC\u30B8\u30E3\u30FC\u30AD\u30FC",
    itemPrice: 1399,
    itemUrl: "https://item.rakuten.co.jp/gajumaru/10001491/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669b398.68e41353.5669b399.834f6fc8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgajumaru%2F10001491%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/gajumaru/cabinet/okihamjerky/jk7_06.gif?_ex=240x240",
    shopName: "\u304C\u3058\u3085\u307E\u308B\u306E\u6A39",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YHFW", "YHCW"]
  },
  {
    itemName: "\u56FD\u7523 \u5473\u4ED8\u3051\u73CD\u5473\u30DF\u30DF\u30AC\u30FC",
    itemPrice: 1080,
    itemUrl: "https://item.rakuten.co.jp/sumiyoshi/707173/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669b49e.56b48e4e.5669b49f.2baf57d1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsumiyoshi%2F707173%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sumiyoshi/cabinet/kokusanmimiga-.jpg?_ex=240x240",
    shopName: "\u4F4F\u5409",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["YHCW", "YHCJ"]
  },
  {
    itemName: "\u6C96\u7E04\u7279\u7523 \u7099\u308A\u30DF\u30DF\u30AC\u30FC",
    itemPrice: 1680,
    itemUrl: "https://item.rakuten.co.jp/okinawa-awamori/mimigajyaki-5/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669b5b5.c104d6dc.5669b5b6.6793be9d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokinawa-awamori%2Fmimigajyaki-5%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okinawa-awamori/cabinet/04367433/06460956/mimiga23-5.jpg?_ex=240x240",
    shopName: "\u6C96\u7E04\u6CE1\u76DB",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YHCW", "YHCJ"]
  },
  {
    itemName: "\u6C96\u7E04\u540D\u7269 \u5473\u4ED8\u3051\u30C1\u30E9\u30AC\u30FC\uFF08\u8C5A\u9854\u76AE\u8089\uFF09",
    itemPrice: 2548,
    itemUrl: "https://item.rakuten.co.jp/oki-nanaya/ohm028/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669b765.ba91d7b8.5669b766.b4113ea2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Foki-nanaya%2Fohm028%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/oki-nanaya/cabinet/cm1/oh-chiraga900g-s1.jpg?_ex=240x240",
    shopName: "\u6C96\u7E04\u306A\u306A\u3084",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["YHCW", "YHCJ"]
  },
  {
    itemName: "\u6C96\u7E04\u7279\u7523 \u91A4\u6CB9\u5473\u30C1\u30E9\u30AC\u30FC 2\u500B\u30BB\u30C3\u30C8",
    itemPrice: 3520,
    itemUrl: "https://item.rakuten.co.jp/okinawa-awamori/jyouontiragasyouyu-2ko/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669b5b5.c104d6dc.5669b5b6.6793be9d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokinawa-awamori%2Fjyouontiragasyouyu-2ko%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okinawa-awamori/cabinet/04367433/06582199/imgrc0070478899.jpg?_ex=240x240",
    shopName: "\u6C96\u7E04\u6CE1\u76DB",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["YHCW", "YHCJ"]
  },
  {
    itemName: "\u6C96\u7E04\u3042\u3055\u3072\u3084 \u30B8\u30FC\u30DE\u30DF\u30FC\u8C46\u8150 10\u500B\u30BB\u30C3\u30C8",
    itemPrice: 2e3,
    itemUrl: "https://item.rakuten.co.jp/asahiya-okinawa/ji-ma-mi_10/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669d472.0004fa84.5669d473.beb95f95/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fasahiya-okinawa%2Fji-ma-mi_10%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/asahiya-okinawa/cabinet/08480460/11117261/imgrc0117491826.jpg?_ex=240x240",
    shopName: "\u3042\u3055\u3072\u3084\u6C96\u7E04",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u6C96\u7E04\u3042\u3055\u3072\u3084 \u624B\u4F5C\u308A\u30B8\u30FC\u30DE\u30DF\u30FC\u8C46\u8150\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3800,
    itemUrl: "https://item.rakuten.co.jp/asahiya-okinawa/ji-ma-mi_01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669d472.0004fa84.5669d473.beb95f95/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fasahiya-okinawa%2Fji-ma-mi_01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/asahiya-okinawa/cabinet/08480460/imgrc0077353502.jpg?_ex=240x240",
    shopName: "\u3042\u3055\u3072\u3084\u6C96\u7E04",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u8001\u8217\u6F2C\u7269\u5E97 \u65EC\u306E\u4EAC\u6F2C\u7269 \u8A70\u5408\u305B",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/yama-jou/3778/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669d8bd.cb98e2d2.5669d8be.c2856c8c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyama-jou%2F3778%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/yama-jou/cabinet/12307931/imgrc0114201961.jpg?_ex=240x240",
    shopName: "\u5C71\u57CE\u5C4B",
    reviewAverage: 5,
    reviewCount: 95,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u4E2D\u5712\u4E45\u592A\u90CE\u5546\u5E97 \u540D\u7269\u304A\u6F2C\u7269\u304A\u8A66\u3057\u30BB\u30C3\u30C8",
    itemPrice: 1100,
    itemUrl: "https://item.rakuten.co.jp/nakazono-kyutaro/compass1645660248/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669d9dc.5737622b.5669d9dd.15517d1b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnakazono-kyutaro%2Fcompass1645660248%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nakazono-kyutaro/cabinet/13464079/compass1783912949.jpg?_ex=240x240",
    shopName: "\u4E2D\u5712\u4E45\u592A\u90CE\u5546\u5E97",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u5C71\u5F62\u770C\u7523 \u8336\u8C46\u4ED5\u7ACB\u3066 \u51B7\u51CD\u679D\u8C46",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/gochi-shop/go-ymc-002/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669db41.5a70e1ff.5669db42.c3c4de06/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgochi-shop%2Fgo-ymc-002%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/gochi-shop/cabinet/go-ymc/go-ymc-002.jpg?_ex=240x240",
    shopName: "\u3054\u3061\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u30B9\u30B3\u30FC\u30F3\u30AF\u30E9\u30D6 1000\u5186\u30DD\u30C3\u30AD\u30EA \u713C\u304D\u7ACB\u3066\u30B9\u30B3\u30FC\u30F3",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/scone-club/10000017/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669de0a.a48f9c83.5669de0b.d709f9f1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fscone-club%2F10000017%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/scone-club/cabinet/compass1785813354.jpg?_ex=240x240",
    shopName: "\u30B9\u30B3\u30FC\u30F3\u30AF\u30E9\u30D6",
    reviewAverage: 4,
    reviewCount: 150,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u30DC\u30FC\u30CE\u30FB\u30DC\u30FC\u30CE \u624B\u4F5C\u308A\u30B9\u30B3\u30FC\u30F3\uFF06\u7D05\u8336\u30AE\u30D5\u30C8BOX",
    itemPrice: 5980,
    itemUrl: "https://item.rakuten.co.jp/buono-buono/10009700/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d1ed.e767d058.5664d1ef.6dc295c8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbuono-buono%2F10009700%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/buono-buono/cabinet/samune/10009700_s.jpg?_ex=240x240",
    shopName: "\u30DC\u30FC\u30CE\u30FB\u30DC\u30FC\u30CE",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u305D\u3088\u98A8\u30D1\u30F3 \u304A\u697D\u3057\u307F\u30B9\u30B3\u30FC\u30F3\u30AC\u30C1\u30E3\u30BB\u30C3\u30C8",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/soyokazepan/10000297/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669dfff.6f1388f9.5669e000.c8f8d99f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsoyokazepan%2F10000297%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/soyokazepan/cabinet/empo/lp/scorn-gacha/scone_thumb.jpg?_ex=240x240",
    shopName: "\u305D\u3088\u98A8\u30D1\u30F3",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u30D0\u30A4\u30AD\u30F3\u30B0\u30D9\u30FC\u30AB\u30EA\u30FC \u713C\u304D\u305F\u3066\u30E2\u30C1\u30E2\u30C1\u30D9\u30FC\u30B0\u30EB12\u500B",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/vikingbakery/bagel_12/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e229.087611e2.5669e22a.3f4d1eab/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvikingbakery%2Fbagel_12%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/vikingbakery/cabinet/items/bagel12/lb_bgl001_16.jpg?_ex=240x240",
    shopName: "VIKING BAKERY",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u73C8\u7432\u5C02\u9580\u5E97\u306E\u713C\u304D\u83D3\u5B50 \u30B3\u30FC\u30D2\u30FC\u30AF\u30B0\u30ED\u30D5",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/okodepa/1-2-0-0101/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e2ee.e64e7fa8.5669e2ef.d04a5476/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokodepa%2F1-2-0-0101%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okodepa/cabinet/kglf/1000-1_kg_c_set2508.jpg?_ex=240x240",
    shopName: "\u304A\u3053\u3067\u3071",
    reviewAverage: 5,
    reviewCount: 60,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u795E\u6238\u30AB\u30CC\u30EC \u5C02\u9580\u5E97\u3053\u3060\u308F\u308A\u30AB\u30CC\u30EC\u30BB\u30C3\u30C8",
    itemPrice: 1999,
    itemUrl: "https://item.rakuten.co.jp/penheur-kobe/p08/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e3b5.b622e127.5669e3b6.cbdbb959/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpenheur-kobe%2Fp08%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/penheur-kobe/cabinet/13674618/imgrc0117979116.jpg?_ex=240x240",
    shopName: "Penheur \u795E\u6238\u30AB\u30CC\u30EC",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["SHFW", "STFW"]
  },
  {
    itemName: "\u30D2\u30C8\u30C4\u30D6\u30AB\u30F3\u30ED \u30B0\u30DF\u30C3\u30C4\u30A7\u30EB\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1778,
    itemUrl: "https://item.rakuten.co.jp/cochume1234/herovnswfevweew/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e51e.e189f0c9.5669e51f.ad1e9b8f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcochume1234%2Fherovnswfevweew%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cochume1234/cabinet/09442446/imgrc0105163001.jpg?_ex=240x240",
    shopName: "\u30D2\u30C8\u30C4\u30D6\u30AB\u30F3\u30ED",
    reviewAverage: 4,
    reviewCount: 280,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30C9\u30A4\u30C4\u76F4\u8F38\u5165 \u672C\u683C\u713C\u304D\u30D7\u30EC\u30C3\u30C4\u30A7\u30EB",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/zealhouse-shop/024rp-8/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e6bb.4f9e22ee.5669e6bc.7a4724e6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fzealhouse-shop%2F024rp-8%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/zealhouse-shop/cabinet/12097850/imgrc0126829007.jpg?_ex=240x240",
    shopName: "\u30B8\u30FC\u30EB\u30CF\u30A6\u30B9",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u30D5\u30E9\u30A4\u30F3\u30B0\u30BF\u30A4\u30AC\u30FC \u5869\u5473\u30D7\u30EC\u30C3\u30C4\u30A7\u30EB\u30B9\u30CA\u30C3\u30AF",
    itemPrice: 324,
    itemUrl: "https://item.rakuten.co.jp/flyingtigercopenhagen/3041431/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e7b9.df2179de.5669e7ba.c8f90c54/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fflyingtigercopenhagen%2F3041431%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/flyingtigercopenhagen/cabinet/old2025_5/imgrc0104022868.jpg?_ex=240x240",
    shopName: "\u30D5\u30E9\u30A4\u30F3\u30B0\u30BF\u30A4\u30AC\u30FC\u30B3\u30DA\u30F3\u30CF\u30FC\u30B2\u30F3",
    reviewAverage: 5,
    reviewCount: 75,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u624B\u4F5C\u308A\u30D6\u30EC\u30C3\u30C4\u30A7\u30EB \u5927\u5BB9\u91CF\u30AE\u30D5\u30C8BOX",
    itemPrice: 5400,
    itemUrl: "https://item.rakuten.co.jp/gingermama/y-pretzels/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e83c.af78fd87.5669e83d.d2b7963c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgingermama%2Fy-pretzels%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/gingermama/cabinet/yakitatte/main2.jpg?_ex=240x240",
    shopName: "\u30B8\u30F3\u30B8\u30E3\u30FC\u30DE\u30DE",
    reviewAverage: 5,
    reviewCount: 40,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u30A2\u30DE\u30BF\u30B1 \u30D7\u30EC\u30DF\u30A2\u30E0\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 4930,
    itemUrl: "https://item.rakuten.co.jp/amatake/set2402_01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669e986.6d8dfae8.5669e987.811b93bf/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Famatake%2Fset2402_01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/amatake/cabinet/11732243/imgrc0117707411.jpg?_ex=240x240",
    shopName: "\u30A2\u30DE\u30BF\u30B1\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u4E38\u5584 PROFIT \u3055\u3055\u307F\uFF06\u30B5\u30E9\u30C0\u30C1\u30AD\u30F3\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1580,
    itemUrl: "https://item.rakuten.co.jp/tsutsu-uraura/maruzen-4set00/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669ea9e.004ecfcc.5669eaa0.4eb28772/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftsutsu-uraura%2Fmaruzen-4set00%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tsutsu-uraura/cabinet/marason-ss/badge/b-maruzen-4set00.jpg?_ex=240x240",
    shopName: "\u306B\u3063\u307D\u3093\u6D25\u3005\u6D66\u3005",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["YHCW"]
  },
  // --- ピザ・たこ焼き・あずきアイス・ロイズチョコクランチ・クラッカー系 ---
  {
    itemName: "\u30DC\u30FC\u30CE\u30FB\u30DC\u30FC\u30CE \u5317\u6D77\u9053\u3042\u3093\u30D0\u30BF\u30FC\u30D1\u30A4",
    itemPrice: 888,
    itemUrl: "https://item.rakuten.co.jp/buono-buono/10006500/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d1ed.e767d058.5664d1ef.6dc295c8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbuono-buono%2F10006500%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/buono-buono/cabinet/samune/10006500_s888.jpg?_ex=240x240",
    shopName: "\u30DC\u30FC\u30CE\u30FB\u30DC\u30FC\u30CE",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["SHFW", "SHFJ"]
  },
  {
    itemName: "\u30B5\u30AF\u30B5\u30AF \u30C1\u30E7\u30B3\u30EA\u30FC\u30D5\u30D1\u30A4",
    itemPrice: 864,
    itemUrl: "https://item.rakuten.co.jp/tango-polaris/coro-an-gyou-02/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a286b.361fac6d.566a286c.3ecea234/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftango-polaris%2Fcoro-an-gyou-02%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tango-polaris/cabinet/01554630/omikashi/koto_sio_pai10.jpg?_ex=240x240",
    shopName: "\u4E39\u5F8C\u30DD\u30E9\u30EA\u30B9",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30B3\u30E2\u306E\u30D1\u30F3 \u30D7\u30EC\u30DF\u30A2\u30E0\u30ED\u30F3\u30B0\u30E9\u30A4\u30D5\u30D1\u30F3\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 5600,
    itemUrl: "https://item.rakuten.co.jp/koubo-panettone/eraberupremium/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a2954.644f8001.566a2955.8289e5a7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkoubo-panettone%2Feraberupremium%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/koubo-panettone/cabinet/10345009/imgrc0130190904.jpg?_ex=240x240",
    shopName: "\u30B3\u30E2\u306E\u30D1\u30F3",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30B3\u30E2\u306E\u30D1\u30F3 \u713C\u304D\u305F\u3066\u30A2\u30C3\u30D7\u30EB\u30D1\u30A4",
    itemPrice: 2150,
    itemUrl: "https://item.rakuten.co.jp/koubo-panettone/applepie/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a2954.644f8001.566a2955.8289e5a7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkoubo-panettone%2Fapplepie%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/koubo-panettone/cabinet/10357208/imgrc0122542117.jpg?_ex=240x240",
    shopName: "\u30B3\u30E2\u306E\u30D1\u30F3",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u4FE1\u5DDE\u308A\u3093\u3054\u306E\u81EA\u5BB6\u88FD\u30A2\u30C3\u30D7\u30EB\u30D1\u30A4",
    itemPrice: 2966,
    itemUrl: "https://item.rakuten.co.jp/373shinsyu-tsuguya/1052/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56651dbf.2aa96b51.56651dc0.e6a61962/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F373shinsyu-tsuguya%2F1052%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/373shinsyu-tsuguya/cabinet/09838759/1052-summer-ver/imgrc0134462559.jpg?_ex=240x240",
    shopName: "\u4FE1\u5DDE\u3064\u3050\u3084",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u30D5\u30A9\u30F3\u30BF\u30FC\u30CA \u30CA\u30DD\u30EA\u30D4\u30C3\u30C4\u30A1 6\u679A\u30BB\u30C3\u30C8",
    itemPrice: 5072,
    itemUrl: "https://item.rakuten.co.jp/pizza-fontana/h-tr004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a3d8c.67444bea.566a3d8d.9e082525/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpizza-fontana%2Fh-tr004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/pizza-fontana/cabinet/sum/2023_h-tr004_20off.jpg?_ex=240x240",
    shopName: "\u30D5\u30A9\u30F3\u30BF\u30FC\u30CA",
    reviewAverage: 4.5,
    reviewCount: 380,
    targetTypes: ["YTFW", "YTCW"]
  },
  {
    itemName: "\u30D4\u30A8\u30C8\u30ED \u30D7\u30EC\u30DF\u30A2\u30E0\u51B7\u51CD\u30D4\u30B6\u30BB\u30C3\u30C8",
    itemPrice: 4805,
    itemUrl: "https://item.rakuten.co.jp/pietro-onlineshop/rke004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a4712.f30630f0.566a4713.8e6d0438/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpietro-onlineshop%2Frke004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/pietro-onlineshop/cabinet/09709908/10459460/pz_top.jpg?_ex=240x240",
    shopName: "\u30D4\u30A8\u30C8\u30ED\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["YTFW", "YTCW"]
  },
  {
    itemName: "\u30D4\u30B6\u30FB\u30A2\u30B0\u30EA\u30AA \u672C\u683C\u30D4\u30C3\u30C4\u30A1\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3590,
    itemUrl: "https://item.rakuten.co.jp/pizza-aglio/s-008/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a47c6.ed716c54.566a47c7.d6390087/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpizza-aglio%2Fs-008%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/pizza-aglio/cabinet/ikou_20100208/imgrc0068248571.jpg?_ex=240x240",
    shopName: "\u30D4\u30B6\u30FB\u30A2\u30B0\u30EA\u30AA",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YTFW", "YTCW"]
  },
  {
    itemName: "\u516B\u3061\u3083\u3093\u5802 \u5927\u5BB9\u91CF\u51B7\u51CD\u305F\u3053\u713C\u304D\u30BB\u30C3\u30C8",
    itemPrice: 3300,
    itemUrl: "https://item.rakuten.co.jp/hatchando/hatchan50x3set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a488f.29f5c80a.566a4890.10bdd270/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhatchando%2Fhatchan50x3set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hatchando/cabinet/00582996/hatchan50/0144-fi-sku.jpg?_ex=240x240",
    shopName: "\u516B\u3061\u3083\u3093\u5802",
    reviewAverage: 4,
    reviewCount: 290,
    targetTypes: ["YTFJ", "YTCJ"]
  },
  {
    itemName: "\u5317\u6D77\u9053\u7523 \u51B7\u51CD\u30D5\u30E9\u30A4\u30C9\u30DD\u30C6\u30C8",
    itemPrice: 1800,
    itemUrl: "https://item.rakuten.co.jp/kaisendonya-motoya/10000002/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a8208.e13dbfc3.566a8209.8650e7f7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaisendonya-motoya%2F10000002%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kaisendonya-motoya/cabinet/imgrc0142378836.jpg?_ex=240x240",
    shopName: "\u6D77\u9BAE\u554F\u5C4B\u672C\u8C37",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YHFW", "YTFW"]
  },
  {
    itemName: "\u4E95\u6751\u5C4B \u3042\u305A\u304D\u30D0\u30FC BOX\u30BB\u30C3\u30C8",
    itemPrice: 3912,
    itemUrl: "https://item.rakuten.co.jp/beisia/4901006220101/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a8e5d.fc32b973.566a8e5f.8ab6b3be/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbeisia%2F4901006220101%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/beisia/cabinet/09516818/4901006220101.jpg?_ex=240x240",
    shopName: "\u30D9\u30A4\u30B7\u30A2",
    reviewAverage: 4.5,
    reviewCount: 420,
    targetTypes: ["SHCJ"]
  },
  {
    itemName: "\u30E2\u30A2\u677E\u5C4B \u5C0F\u8C46\u30A2\u30A4\u30B9\u3082\u306A\u304B",
    itemPrice: 3050,
    itemUrl: "https://item.rakuten.co.jp/morematsuya/m-kh-01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654a43.3bb28499.56654a44.43d3611c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmorematsuya%2Fm-kh-01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/morematsuya/cabinet/a8381f0b-9c9c-408.jpg?_ex=240x240",
    shopName: "\u30E2\u30A2\u677E\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["SHCJ"]
  },
  {
    itemName: "\u65B0\u6F5F\u540D\u7269 \u7C92\u3042\u305A\u304D\u30A2\u30A4\u30B9\u30AD\u30E3\u30F3\u30C7\u30A3\u30FC",
    itemPrice: 2800,
    itemUrl: "https://item.rakuten.co.jp/niigata-shop/0066-002-a/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ab639.bd5a9433.566ab63a.bd0de560/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fniigata-shop%2F0066-002-a%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/niigata-shop/cabinet/item/0066/0066-002-a.jpg?_ex=240x240",
    shopName: "\u65B0\u6F5F\u76F4\u9001\u8A08\u753B",
    reviewAverage: 5,
    reviewCount: 60,
    targetTypes: ["SHCJ"]
  },
  {
    itemName: "PLAZA \u30BF\u30B3\u30B9\u30CA\u30C1\u30E7\u30B9\u30C1\u30C3\u30D7\u30B9",
    itemPrice: 518,
    itemUrl: "https://item.rakuten.co.jp/plazastyle/p06sna0235/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ab89d.25285d49.566ab89e.5ae0e420/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplazastyle%2Fp06sna0235%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plazastyle/cabinet/p06sna0/p06sna0235.jpg?_ex=240x240",
    shopName: "PLAZA \u30AA\u30F3\u30E9\u30A4\u30F3\u30B9\u30C8\u30A2",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u30E1\u30AD\u30B7\u30AB\u30F3 \u30CA\u30C1\u30E7\u30B9\u30B3\u30FC\u30F3\u30C1\u30C3\u30D7\u30B9",
    itemPrice: 1509,
    itemUrl: "https://item.rakuten.co.jp/worldtrading/0060-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566abb24.57c5c4a9.566abb25.05d3de37/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fworldtrading%2F0060-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/worldtrading/cabinet/corn4.jpg?_ex=240x240",
    shopName: "\u30EF\u30FC\u30EB\u30C9\u30C8\u30EC\u30FC\u30C7\u30A3\u30F3\u30B0",
    reviewAverage: 5,
    reviewCount: 40,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u30BB\u30BE\u30F3\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC \u6FC3\u539A\u30C1\u30FC\u30BA\u30C7\u30A3\u30C3\u30D7",
    itemPrice: 702,
    itemUrl: "https://item.rakuten.co.jp/saison-f/10001352/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ab979.1c485c35.566ab97a.6ec4113b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsaison-f%2F10001352%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_gold/saison-f/images_product/dressing/cheesedip_m2.jpg?_ex=240x240",
    shopName: "\u30BB\u30BE\u30F3\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["YTCW", "YTFW"]
  },
  {
    itemName: "\u672C\u683C\u3068\u308D\u301C\u308A \u30C1\u30FC\u30BA\u30D5\u30A9\u30F3\u30C7\u30E5\u30BB\u30C3\u30C8",
    itemPrice: 2809,
    itemUrl: "https://item.rakuten.co.jp/smilespoon/6824662-0003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566559fa.4f33a56b.566559fb.a7d3544f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsmilespoon%2F6824662-0003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/smilespoon/cabinet/62/6824662-0003_1.jpg?_ex=240x240",
    shopName: "Smile Spoon",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["YTCW"]
  },
  {
    itemName: "\u5FB3\u7528 \u30C1\u30E7\u30B3\u30AF\u30E9\u30F3\u30C1\u5927\u5BB9\u91CF\u30D1\u30C3\u30AF",
    itemPrice: 5904,
    itemUrl: "https://item.rakuten.co.jp/miyage-chaya/tokuyou-chococrunch3/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566abc81.5c2ca106.566abc82.1336710c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmiyage-chaya%2Ftokuyou-chococrunch3%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/miyage-chaya/cabinet/shohin/point_3/crunchihuyu.jpg?_ex=240x240",
    shopName: "\u307F\u3084\u3052\u8336\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u30ED\u30A4\u30BA ROYCE' \u30C1\u30E7\u30B3\u30AF\u30E9\u30F3\u30C1",
    itemPrice: 1188,
    itemUrl: "https://item.rakuten.co.jp/royce/513/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566abcf8.4841c018.566abcf9.c32ab978/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Froyce%2F513%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/royce/cabinet/513_1.jpg?_ex=240x240",
    shopName: "\u30ED\u30A4\u30BA\u516C\u5F0F \u697D\u5929\u5E02\u5834\u5E97",
    reviewAverage: 4.5,
    reviewCount: 450,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u30AB\u30AB\u30AA70% \u6FC3\u539A\u30C1\u30E7\u30B3\u30AF\u30E9\u30F3\u30C1",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/chocodone/cacao70_crunchx2/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566abdad.7076e7b3.566abdae.e8dc2d33/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fchocodone%2Fcacao70_crunchx2%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/chocodone/cabinet/cr/cart/cacao70_crunch2_2409.jpg?_ex=240x240",
    shopName: "\u30C1\u30E7\u30B3\u30C9\u30FC\u30F3",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u30AA\u30CF\u30E8\u30FC \u3072\u3068\u304F\u3061\u30D7\u30C1\u30A2\u30A4\u30B9\u30DC\u30FC\u30EB\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3490,
    itemUrl: "https://item.rakuten.co.jp/ohayo-reuteri/petiticeball/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566abf3f.d10841b0.566abf40.9b8b43c1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fohayo-reuteri%2Fpetiticeball%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ohayo-reuteri/cabinet/x20/13021482/imgrc0143823737.jpg?_ex=240x240",
    shopName: "\u30AA\u30CF\u30E8\u30FC\u30D0\u30A4\u30AA\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u30BA",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30B6\u30AF\u30B6\u30AF\u30C1\u30E7\u30B3\u30AF\u30E9\u30F3\u30C1 \u30A2\u30A4\u30B9\u30D0\u30FCBOX",
    itemPrice: 4609,
    itemUrl: "https://item.rakuten.co.jp/smilespoon/6873396-0024/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566559fa.4f33a56b.566559fb.a7d3544f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsmilespoon%2F6873396-0024%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/smilespoon/cabinet/96/6873396-0024_1.jpg?_ex=240x240",
    shopName: "Smile Spoon",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "ZENB \u30BC\u30F3\u30D6\u30C1\u30C3\u30D7\u30B9\uFF06\u30AF\u30E9\u30C3\u30AB\u30FC",
    itemPrice: 2680,
    itemUrl: "https://item.rakuten.co.jp/zenbofficial/cpsrk055-s006sg0s/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ac282.b83aa046.566ac283.e426e569/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fzenbofficial%2Fcpsrk055-s006sg0s%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/zenbofficial/cabinet/thumb/15offcp/chips06_251006.jpg?_ex=240x240",
    shopName: "ZENB \u697D\u5929\u5E02\u5834\u5E97",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u524D\u7530\u88FD\u83D3 \u524D\u7530\u306E\u30AF\u30E9\u30C3\u30AB\u30FC 10\u888B\u30BB\u30C3\u30C8",
    itemPrice: 1698,
    itemUrl: "https://item.rakuten.co.jp/takaoka/4902732000074/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56671679.68297d73.5667167a.c65f0682/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftakaoka%2F4902732000074%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/takaoka/cabinet/03820086/10018611/4902732000074-10r.jpg?_ex=240x240",
    shopName: "\u9AD8\u5CA1\u88FD\u83D3",
    reviewAverage: 4.5,
    reviewCount: 190,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u56FD\u7523\u7C73\u7C89100% \u3082\u3061\u3082\u3061\u7C73\u7C89\u30D1\u30F3\u8A70\u5408\u305B",
    itemPrice: 4880,
    itemUrl: "https://item.rakuten.co.jp/komekopan/pp-event6/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ac740.b6d4e7c3.566ac741.94684894/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkomekopan%2Fpp-event6%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/komekopan/cabinet/product/hana.jpg?_ex=240x240",
    shopName: "\u7C73\u7C89\u30D1\u30F3\u5C02\u9580\u5E97",
    reviewAverage: 4.5,
    reviewCount: 150,
    targetTypes: ["YTFW"]
  },
  // --- いちごスイーツ・軽食フード（ハットグ・キンパ・キッシュ）・柿の種系 ---
  {
    itemName: "\u304A\u3058\u304B\u3084 \u6775\u3064\u304D\u5207\u308A\u9905\u30BB\u30C3\u30C8",
    itemPrice: 2850,
    itemUrl: "https://item.rakuten.co.jp/ojikaya/10000877/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566acd38.a5610835.566acd39.2b750f99/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fojikaya%2F10000877%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ojikaya/cabinet/02491385/08590895/10314761/s1.jpg?_ex=240x240",
    shopName: "\u304A\u3058\u304B\u3084",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u98DB\u9A28\u540D\u7269 \u307F\u305F\u3089\u3057\u56E3\u5B50",
    itemPrice: 1180,
    itemUrl: "https://item.rakuten.co.jp/keyroom-hida/key6014/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ad2bb.df069709.566ad2bc.f2b4d299/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkeyroom-hida%2Fkey6014%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/keyroom-hida/cabinet/2025-08/keyroom251278_1.jpg?_ex=240x240",
    shopName: "keyroom \u98DB\u9A28",
    reviewAverage: 5,
    reviewCount: 42,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u3082\u3068\u305B \u624B\u4F5C\u308A\u30C1\u30FC\u30BA\u8C46\u8150",
    itemPrice: 504,
    itemUrl: "https://item.rakuten.co.jp/jshop-web/motose01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ad47e.a03f138f.566ad47f.38aff75e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjshop-web%2Fmotose01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/jshop-web/cabinet/syouhin/touhu/motose01-n201.jpg?_ex=240x240",
    shopName: "JSHOP",
    reviewAverage: 4.5,
    reviewCount: 38,
    targetTypes: ["YTCW", "YTCJ"]
  },
  {
    itemName: "\u535A\u591A\u98A8\u7F8E\u5EB5 \u3042\u307E\u304A\u3046\u82FA\u30B9\u30A4\u30FC\u30C4\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/fuubian/f-7605/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ad531.d8d480ba.566ad532.bc678340/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffuubian%2Ff-7605%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/fuubian/cabinet/fuubian/gift/f-7605/f-7605_tham1_001_oc.jpg?_ex=240x240",
    shopName: "\u535A\u591A\u98A8\u7F8E\u5EB5",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "\u30BB\u30EB\u30B8\u30E5\u6E90's \u7D5E\u308A\u305F\u3066\u3044\u3061\u3054\u30E2\u30F3\u30D6\u30E9\u30F3",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/serge-gens-ec/ichigo-senbon-01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ad5df.621b968d.566ad5e0.6f32d16e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fserge-gens-ec%2Fichigo-senbon-01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/serge-gens-ec/cabinet/10430971/imgrc0150255867.jpg?_ex=240x240",
    shopName: "\u30BB\u30EB\u30B8\u30E5\u6E90's",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "RUNNY CHEESE \u3044\u3061\u3054\u30D0\u30BF\u30FC\u30C1\u30FC\u30BA\u30B5\u30F3\u30C9",
    itemPrice: 3800,
    itemUrl: "https://item.rakuten.co.jp/runnycheese/10000031/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56610463.4aaa6b01.56610464.7ac5a73c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frunnycheese%2F10000031%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/runnycheese/cabinet/10603013/10603015/imgrc0088176925.jpg?_ex=240x240",
    shopName: "RUNNY CHEESE",
    reviewAverage: 4,
    reviewCount: 150,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u83EF\u98A8 \u3068\u308D\u3051\u308B\u751F\u30AF\u30EA\u30FC\u30E0\u3044\u3061\u3054\u5927\u798F",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/kitanokashi-kafuu/10000001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/47f67b9e.0633201a.47f67b9f.2331b651/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkitanokashi-kafuu%2F10000001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kitanokashi-kafuu/cabinet/10166440/2512_ichigo10.jpg?_ex=240x240",
    shopName: "\u5317\u306E\u304A\u83D3\u5B50 \u83EF\u98A8",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STCJ"]
  },
  {
    itemName: "\u5317\u6D77\u9053 \u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u30B5\u30F3\u30C9\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 1134,
    itemUrl: "https://item.rakuten.co.jp/hokkaidogb/26984/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ad8db.92082011.566ad8dc.a6a8d04e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaidogb%2F26984%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hokkaidogb/cabinet/item_img0004/g26984a.jpg?_ex=240x240",
    shopName: "\u5317\u6D77\u9053\u9298\u83D3\u9928",
    reviewAverage: 5,
    reviewCount: 88,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u307E\u308B\u3054\u3068\u82FA\u30A2\u30A4\u30B9 \u8D05\u6CA2\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3470,
    itemUrl: "https://item.rakuten.co.jp/auc-fb-create/ytd00013/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d298.73c907e8.5664d299.179cf34c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-fb-create%2Fytd00013%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-fb-create/cabinet/ytd/ytd00013.jpg?_ex=240x240",
    shopName: "\u30A8\u30D5\u30D3\u30FC\u30FB\u30AF\u30EA\u30A8\u30A4\u30C8",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u535A\u591A\u82B1\u798F\u5802 \u3042\u307E\u304A\u3046\u82FA\u30DF\u30EB\u30D5\u30A3\u30FC\u30E6",
    itemPrice: 1024,
    itemUrl: "https://item.rakuten.co.jp/hanafukudo/05/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ada5e.fa6c3d3c.566ada5f.f41be084/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhanafukudo%2F05%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hanafukudo/cabinet/08439747/08468843/thum6.jpg?_ex=240x240",
    shopName: "\u82B1\u798F\u5802",
    reviewAverage: 5,
    reviewCount: 65,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u3044\u3068\u304A\u304B\u3057\u304D \u8D05\u6CA2\u3042\u307E\u304A\u3046\u82FA\u30BF\u30EB\u30C8",
    itemPrice: 4200,
    itemUrl: "https://item.rakuten.co.jp/itookashiki/frs008/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566adb41.ead82ecc.566adb42.db20e06c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fitookashiki%2Ffrs008%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/itookashiki/cabinet/09799723/mini-ichigo/1.jpg?_ex=240x240",
    shopName: "\u3044\u3068\u304A\u304B\u3057\u304D",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u52A0\u85E4\u88FD\u83D3 1000\u5186\u30DD\u30C3\u30AD\u30EA \u65B0\u6F5F\u7C73\u304A\u304B\u304D",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/katoseika/10000471/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56656773.30c6693a.56656774.1c2249fe/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkatoseika%2F10000471%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/katoseika/cabinet/00408752/11957258/imgrc0139105919.jpg?_ex=240x240",
    shopName: "\u52A0\u85E4\u88FD\u83D3",
    reviewAverage: 4.5,
    reviewCount: 380,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u3068\u3088\u3059 \u67FF\u306E\u7A2E \u8D05\u6CA2\u30D5\u30EC\u30FC\u30D0\u30FC\u30BB\u30C3\u30C8",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/r-food/rf-d-00176/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/493977da.65022cd1.493977db.2d1ab3b3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fr-food%2Frf-d-00176%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/r-food/cabinet/toyosu/item_25_ka12_img01.jpg?_ex=240x240",
    shopName: "\u3068\u3088\u3059\uFF08R-food\uFF09",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u3064\u307E\u307F\u8535 \u5927\u5BB9\u91CF \u67FF\u306E\u7A2E\u30D4\u30FC\u30CA\u30C3\u30C4",
    itemPrice: 2930,
    itemUrl: "https://item.rakuten.co.jp/tsumamikura/4974124107067/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5665772a.39496463.5665772b.bd723047/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftsumamikura%2F4974124107067%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tsumamikura/cabinet/12692538/imgrc0119931778.jpg?_ex=240x240",
    shopName: "\u3064\u307E\u307F\u8535",
    reviewAverage: 4,
    reviewCount: 110,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u30A2\u30BD\u30FC\u30C8 \u67FF\u306E\u7A2E \u30D7\u30EC\u30DF\u30A2\u30E0\u30D1\u30C3\u30AF",
    itemPrice: 2470,
    itemUrl: "https://item.rakuten.co.jp/frikstore/cstk268/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ae254.8085eab1.566ae255.9f21b482/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffrikstore%2Fcstk268%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/frikstore/cabinet/10058737/imgrc0161163625.jpg?_ex=240x240",
    shopName: "\u30D5\u30EA\u30C3\u30AF\u30B9\u30B9\u30C8\u30A2",
    reviewAverage: 4.5,
    reviewCount: 85,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u5341\u6587\u5B57\u5C4B \u624B\u713C\u304D\u3042\u3089\u308C\u8A70\u5408\u305B",
    itemPrice: 1380,
    itemUrl: "https://item.rakuten.co.jp/jyuumonjiya/5c-arare-01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ae2ee.9916913d.566ae2ef.eb466a99/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjyuumonjiya%2F5c-arare-01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/jyuumonjiya/cabinet/04491877/ndb/thum/thum_5c-arare.jpg?_ex=240x240",
    shopName: "\u5341\u6587\u5B57\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u30B5\u30AF\u30C3\u3068\u30D5\u30EF\u30D5\u30EF \u30BD\u30D5\u30C8\u305B\u3093\u3079\u3044",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/tigtig/10001075/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F10001075%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/10001075_w-2.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 3.5,
    reviewCount: 50,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u30BD\u30D5\u30C8\u305B\u3093\u3079\u3044 \u5927\u5BB9\u91CF\u30B1\u30FC\u30B9\u8CB7\u3044",
    itemPrice: 4980,
    itemUrl: "https://item.rakuten.co.jp/okasirenjya/49033142001721/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5667127c.0ecee645.5667127d.018d06a9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokasirenjya%2F49033142001721%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okasirenjya/cabinet/03340730/11043111/490331420017217.jpg?_ex=240x240",
    shopName: "\u304A\u83D3\u5B50\u30EC\u30F3\u30B8\u30E3\u30FC",
    reviewAverage: 4.5,
    reviewCount: 68,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u4EAC\u90FD \u4E09\u5143\u8C5A\u306E\u539A\u5207\u308A\u30AB\u30C4\u30B5\u30F3\u30C9",
    itemPrice: 616,
    itemUrl: "https://item.rakuten.co.jp/green-kyoto/s-003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566aec54.fd748634.566aec55.e8ea305d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgreen-kyoto%2Fs-003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/green-kyoto/cabinet/shohin/katusando.jpg?_ex=240x240",
    shopName: "\u30B0\u30EA\u30FC\u30F3\u4EAC\u90FD",
    reviewAverage: 4,
    reviewCount: 75,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u30D3\u30B9\u30C8\u30ED\u30E4\u30DE \u81EA\u5BB6\u88FD\u30B5\u30AF\u30B5\u30AF\u30AD\u30C3\u30B7\u30E53\u7A2E\u30BB\u30C3\u30C8",
    itemPrice: 3888,
    itemUrl: "https://item.rakuten.co.jp/bistroyama/kish_3set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566aee78.8d70dc39.566aee79.fec6e4be/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbistroyama%2Fkish_3set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bistroyama/cabinet/shohin/kish/quiche3sam.jpg?_ex=240x240",
    shopName: "\u30D3\u30B9\u30C8\u30ED\u30E4\u30DE",
    reviewAverage: 4,
    reviewCount: 92,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7 \u307B\u3046\u308C\u3093\u8349\u3068\u30D9\u30FC\u30B3\u30F3\u306E\u30AD\u30C3\u30B7\u30E5",
    itemPrice: 1589,
    itemUrl: "https://item.rakuten.co.jp/syokusai-shop/10951/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5663e976.6ab3e990.5663e977.69fe0f48/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsyokusai-shop%2F10951%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/syokusai-shop/cabinet/item/10479019/10951.jpg?_ex=240x240",
    shopName: "\u98DF\u5F69\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 54,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u624B\u4F5C\u308A\u8D05\u6CA2\u30AD\u30C3\u30B7\u30E5 8\u30D4\u30FC\u30B9BOX",
    itemPrice: 5940,
    itemUrl: "https://item.rakuten.co.jp/wanochie/quiche-8p-mama/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566af016.0d5c0bae.566af017.614875dc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fwanochie%2Fquiche-8p-mama%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/wanochie/cabinet/product/quiche/quiche-8p-top2-af2.jpg?_ex=240x240",
    shopName: "\u548C\u306E\u77E5\u6075",
    reviewAverage: 5,
    reviewCount: 35,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u30D7\u30EC\u30F4\u30CA\u30F3 \u30DF\u30CB\u30AD\u30C3\u30B7\u30E5\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3700,
    itemUrl: "https://item.rakuten.co.jp/prevenant/miniquiche01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566af0c2.bd5c3590.566af0c3.6f5b28e4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fprevenant%2Fminiquiche01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/prevenant/cabinet/miniquiche/imgrc0114430940.jpg?_ex=240x240",
    shopName: "\u30D7\u30EC\u30F4\u30CA\u30F3",
    reviewAverage: 4.5,
    reviewCount: 62,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u30B8\u30E5\u30FC\u30B7\u30FC \u30DD\u30FC\u30AF\u30D5\u30E9\u30F3\u30AF \u30DB\u30C3\u30C8\u30C9\u30C3\u30B0",
    itemPrice: 3600,
    itemUrl: "https://item.rakuten.co.jp/okazuippin/kj-hotdog/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566af1c1.658d0fe2.566af1c2.52fb7410/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokazuippin%2Fkj-hotdog%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okazuippin/cabinet/kj/kj-hotdog-01.jpg?_ex=240x240",
    shopName: "\u304A\u304B\u305A\u4E00\u54C1\u5802",
    reviewAverage: 5,
    reviewCount: 45,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u30B9\u30BF\u30FC\u30BC\u30F3 \u3075\u3093\u308F\u308A\u30A2\u30E1\u30EA\u30AB\u30F3\u30C9\u30C3\u30B0",
    itemPrice: 428,
    itemUrl: "https://item.rakuten.co.jp/starzen-k/128/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566af796.e30202b6.566af797.281022da/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fstarzen-k%2F128%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/starzen-k/cabinet/sku/delica/128_top.jpg?_ex=240x240",
    shopName: "\u30B9\u30BF\u30FC\u30BC\u30F3",
    reviewAverage: 4.5,
    reviewCount: 280,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u672C\u5834\u97D3\u56FD \u3082\u3061\u3082\u3061\u7518\u8F9B\u30C8\u30C3\u30DD\u30AE",
    itemPrice: 1080,
    itemUrl: "https://item.rakuten.co.jp/rabbit/618909/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566af9c2.e5222453.566af9c3.f76cfab1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frabbit%2F618909%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rabbit/cabinet/sfon/2019toppogi.jpg?_ex=240x240",
    shopName: "\u30E9\u30D3\u30C3\u30C8",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u30AA\u30C7\u30C1\u30E7 \u5373\u5E2D\u30C8\u30C3\u30DD\u30AE\u30BB\u30C3\u30C8",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/odecho/odecho0163-4/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566afaca.69542158.566afacb.7a6dd838/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fodecho%2Fodecho0163-4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/odecho/cabinet/12090218/imgrc0119307545.jpg?_ex=240x240",
    shopName: "\u30AA\u30C7\u30C1\u30E7",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "bibigo \u51B7\u51CD\u672C\u683C\u97D3\u56FD\u30AD\u30F3\u30D1",
    itemPrice: 594,
    itemUrl: "https://item.rakuten.co.jp/cjjapan/fr-115/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566afbc4.2f502551.566afbc5.a742f3bd/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcjjapan%2Ffr-115%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cjjapan/cabinet/fr-115_kago.jpg?_ex=240x240",
    shopName: "CJ JAPAN\u516C\u5F0F",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["YTFJ", "YTCJ"]
  },
  {
    itemName: "\u65B0\u5927\u4E45\u4FDD \u9418\u8DEF\u30E2\u30C3\u30C4\u30A1\u30EC\u30E9\u30C1\u30FC\u30BA\u30CF\u30C3\u30C8\u30B0",
    itemPrice: 3250,
    itemUrl: "https://item.rakuten.co.jp/jongno-cheesehatogu/10004-1-iv-ivent2/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566afce0.663a6e1d.566afce1.68928258/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjongno-cheesehatogu%2F10004-1-iv-ivent2%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/jongno-cheesehatogu/cabinet/09621373/09621609/imgrc0098313167.jpg?_ex=240x240",
    shopName: "\u9418\u8DEF\u30C1\u30FC\u30BA\u30CF\u30C3\u30C8\u30B0",
    reviewAverage: 4.5,
    reviewCount: 190,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u3068\u308D\u301C\u308A\u4F38\u3073\u308B \u30C1\u30FC\u30BA\u30CF\u30C3\u30C8\u30B0 5\u672C\u30BB\u30C3\u30C8",
    itemPrice: 2986,
    itemUrl: "https://item.rakuten.co.jp/kshouhin/hotdog-5/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566afd6e.6f8823ce.566afd6f.ef222cc6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkshouhin%2Fhotdog-5%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kshouhin/cabinet/05721218/06489062/imgrc0097198462.jpg?_ex=240x240",
    shopName: "K\u5546\u54C1",
    reviewAverage: 4,
    reviewCount: 120,
    targetTypes: ["YTFW"]
  },
  {
    itemName: "\u307C\u304F\u306E\u7389\u624B\u7BB1\u5C4B \u8D05\u6CA2\u30DF\u30C3\u30AF\u30B9\u30CA\u30C3\u30C4\u30BF\u30EB\u30C8",
    itemPrice: 3796,
    itemUrl: "https://item.rakuten.co.jp/bokunotamatebakoyafish/r-tarut-hole/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664a5f3.e6f894ed.5664a5f4.c974f62e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbokunotamatebakoyafish%2Fr-tarut-hole%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bokunotamatebakoyafish/cabinet/event/0804/r-tarut-hole.jpg?_ex=240x240",
    shopName: "\u307C\u304F\u306E\u7389\u624B\u7BB1\u5C4B",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30C6\u30A3\u30E9\u30DF\u30B9\u30B9\u30BF\u30FC \u30DE\u30DE\u30D2\u30FC\u30ED\u30FC \u30C6\u30A3\u30E9\u30DF\u30B9\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3680,
    itemUrl: "https://item.rakuten.co.jp/thetiramisustar/mommahero-flavor-4/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b0838.fbf1df2b.566b0839.dae2927e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fthetiramisustar%2Fmommahero-flavor-4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/thetiramisustar/cabinet/13421915/4set.jpg?_ex=240x240",
    shopName: "\u30C6\u30A3\u30E9\u30DF\u30B9\u30B9\u30BF\u30FC",
    reviewAverage: 4.5,
    reviewCount: 340,
    targetTypes: ["STCW"]
  },
  // --- 焼き芋・梅スイーツ・激辛おつまみ・ヘルシーお惣菜＆こんにゃく珍味系 ---
  {
    itemName: "\u9CF4\u9580\u91D1\u6642\u4F7F\u7528 \u6FC3\u539A\u30B9\u30A4\u30FC\u30C8\u30DD\u30C6\u30C8",
    itemPrice: 2160,
    itemUrl: "https://item.rakuten.co.jp/marry-gift/sm_so_0431-084/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648c2f.66b33991.56648c32.1c0d2fc6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmarry-gift%2Fsm_so_0431-084%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/marry-gift/cabinet/event_catalog_15/ndp-kgb-15.jpg?_ex=240x240",
    shopName: "\u30DE\u30EA\u30FC\u30AE\u30D5\u30C8",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u9CF4\u9580\u91D1\u6642 \u30DB\u30AF\u30DB\u30AF\u5927\u5B66\u828B",
    itemPrice: 1750,
    itemUrl: "https://item.rakuten.co.jp/awafoods/narutokintoki_imobou/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b74ce.4144a4d2.566b74cf.4f491841/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fawafoods%2Fnarutokintoki_imobou%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/awafoods/cabinet/10884256/12673449/imgrc0138674241.jpg?_ex=240x240",
    shopName: "\u963F\u6CE2\u30D5\u30FC\u30BA",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u8CA1\u5B9D \u7D05\u306F\u308B\u304B \u51B7\u51CD\u306D\u3063\u3068\u308A\u713C\u304D\u828B",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/zaiho/3199-c1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648072.8a1a1e56.56648073.79f81264/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fzaiho%2F3199-c1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/zaiho/cabinet/item/sweets/3199-c1_m.jpg?_ex=240x240",
    shopName: "\u8CA1\u5B9D\u516C\u5F0F\u901A\u8CA9",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u719F\u6210 \u7D05\u306F\u308B\u304B \u871C\u713C\u304D\u828B\u30D1\u30C3\u30AF",
    itemPrice: 1950,
    itemUrl: "https://item.rakuten.co.jp/kouta/r2502/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b75d1.3886784a.566b75d2.046bb510/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkouta%2Fr2502%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kouta/cabinet/09877205/11791481/imgrc0185663398.jpg?_ex=240x240",
    shopName: "\u5E78\u592A",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u5C71\u5F62\u540D\u7269 \u4F1D\u7D71\u306E\u5473 \u306E\u3057\u6885",
    itemPrice: 1100,
    itemUrl: "https://item.rakuten.co.jp/choeido/r-g-01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b76d0.5201bc20.566b76d1.c26b9bfc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fchoeido%2Fr-g-01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/choeido/cabinet/noshiume/imgrc0083648630.jpg?_ex=240x240",
    shopName: "\u7389\u5B9D\u5802",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["YTFJ", "YHFJ"]
  },
  {
    itemName: "\u3059\u3063\u3071\u65E8\u3044 \u3046\u3081\u7389\u73CD\u5473",
    itemPrice: 990,
    itemUrl: "https://item.rakuten.co.jp/otumamidonya/4977117432634-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b77b5.6992bcc2.566b77b6.2c222108/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fotumamidonya%2F4977117432634-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/otumamidonya/cabinet/sku_image/sku056/11354335/imgrc0126228359.jpg?_ex=240x240",
    shopName: "\u304A\u3064\u307E\u307F\u554F\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["YHFJ", "YTFJ"]
  },
  {
    itemName: "\u565B\u3080\u307B\u3069\u3059\u3063\u3071\u3044 \u307A\u305F\u3093\u3053\u6885\u30B7\u30FC\u30C8",
    itemPrice: 1450,
    itemUrl: "https://item.rakuten.co.jp/lifucoco-shop/0764-007681/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b78c8.859fc56d.566b78c9.c24a9026/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flifucoco-shop%2F0764-007681%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/lifucoco-shop/cabinet/09999519/compass1721787867.jpg?_ex=240x240",
    shopName: "\u30EA\u30D5\u30B3\u30B3\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YHFJ", "YHFW"]
  },
  {
    itemName: "\u3088\u3063\u3061\u3083\u3093\u98DF\u54C1 \u30AB\u30C3\u30C8\u3088\u3063\u3061\u3083\u3093 \u99C4\u83D3\u5B50BOX",
    itemPrice: 2360,
    itemUrl: "https://item.rakuten.co.jp/dagasi/sm-4903041307342/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56671da2.1cbcc8da.56671da3.88954413/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdagasi%2Fsm-4903041307342%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/dagasi/cabinet/09212374/12334395/imgrc0143972031.jpg?_ex=240x240",
    shopName: "\u99C4\u83D3\u5B50\u554F\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u672C\u5834\u30B9\u30D1\u30A4\u30B9 \u30D4\u30EA\u8F9B\u4E2D\u83EF\u304A\u3064\u307E\u307F",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/odecho/odecho0170/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566afaca.69542158.566afacb.7a6dd838/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fodecho%2Fodecho0170%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/odecho/cabinet/11576653/imgrc0104134877.jpg?_ex=240x240",
    shopName: "\u30AA\u30C7\u30C1\u30E7",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u3084\u307F\u3064\u304D\u706B\u3092\u5674\u304F \u6FC0\u8F9B\u30AB\u30EB\u30D1\u30B9",
    itemPrice: 1399,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4573186216351/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4573186216351%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/10192795/4573186216351-00.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["YHFW", "YTFW"]
  },
  {
    itemName: "\u8D8A\u5F8C\u88FD\u83D3 \u3068\u3046\u304C\u3089\u3057\u306E\u7A2E \u6FC0\u8F9B\u7C73\u83D3",
    itemPrice: 3130,
    itemUrl: "https://item.rakuten.co.jp/okasirenjya/4901075017527/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5667127c.0ecee645.5667127d.018d06a9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fokasirenjya%2F4901075017527%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/okasirenjya/cabinet/03340730/11043111/49010750175271.jpg?_ex=240x240",
    shopName: "\u304A\u83D3\u5B50\u30EC\u30F3\u30B8\u30E3\u30FC",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YHFJ", "YHFW"]
  },
  {
    itemName: "\u6FC0\u8F9B\u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30B9 \u307E\u3068\u3081\u8CB7\u3044BOX",
    itemPrice: 4e3,
    itemUrl: "https://item.rakuten.co.jp/tokyo-shusui/3485129020/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b7e1f.11718755.566b7e20.79c0746a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftokyo-shusui%2F3485129020%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tokyo-shusui/cabinet/07978345/snack/20251010_san02.jpg?_ex=240x240",
    shopName: "\u6771\u4EAC\u9152\u7C8B",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u30C4\u30FC\u30F3\u3068\u8F9B\u3044 \u308F\u3055\u3073\u306E\u7A2E",
    itemPrice: 1296,
    itemUrl: "https://item.rakuten.co.jp/lifucoco-shop/0764-010672/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b78c8.859fc56d.566b78c9.c24a9026/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flifucoco-shop%2F0764-010672%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/lifucoco-shop/cabinet/compass1719211349.jpg?_ex=240x240",
    shopName: "\u30EA\u30D5\u30B3\u30B3\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YHFJ", "YHFW"]
  },
  {
    itemName: "\u30AB\u30CD\u5409\u306E\u60E3\u83DC\u30FB\u5C0F\u9262\u30B5\u30E9\u30C0\u30BB\u30C3\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/kanekichionline/10000049/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b80b7.9aabb594.566b80ba.0a3194e1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkanekichionline%2F10000049%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kanekichionline/cabinet/mem_item/imgrc0109977933.jpg?_ex=240x240",
    shopName: "\u30AB\u30CD\u5409\u30AA\u30F3\u30E9\u30A4\u30F3",
    reviewAverage: 4.5,
    reviewCount: 380,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u6FC3\u539A\u65E8\u5473 \u5473\u4ED8\u3051\u3046\u305A\u3089\u305F\u307E\u3054",
    itemPrice: 1699,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4573186216450/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4573186216450%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/4573186216450-00-s.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u3058\u3063\u304F\u308A\u67D3\u307F\u8FBC\u3093\u3060 \u716E\u5375\u30D1\u30C3\u30AF",
    itemPrice: 486,
    itemUrl: "https://item.rakuten.co.jp/auc-tamagonoe/10000020/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b8252.6d0d272e.566b8253.888cd795/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-tamagonoe%2F10000020%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-tamagonoe/cabinet/02354323/imgrc0137549249.jpg?_ex=240x240",
    shopName: "\u305F\u307E\u3054\u306E\u7D75",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u535A\u591A\u3082\u3064\u934B\u304A\u304A\u3084\u307E \u540D\u7269\u7279\u88FD\u9162\u3082\u3064",
    itemPrice: 1296,
    itemUrl: "https://item.rakuten.co.jp/e-shop-motu-ooyama/12000004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b8394.28780800.566b8395.661d51a1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-shop-motu-ooyama%2F12000004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/e-shop-motu-ooyama/cabinet/top/c006.jpg?_ex=240x240",
    shopName: "\u535A\u591A\u3082\u3064\u934B \u304A\u304A\u3084\u307E",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u3055\u3063\u3071\u308A\u30B3\u30EA\u30B3\u30EA \u7279\u88FD\u9162\u3082\u3064",
    itemPrice: 470,
    itemUrl: "https://item.rakuten.co.jp/kuriyama-nosan/smtu-10/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b84b0.314f5dbb.566b84b1.b67d32b0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkuriyama-nosan%2Fsmtu-10%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kuriyama-nosan/cabinet/sumotsu/common_smt.gif?_ex=240x240",
    shopName: "\u6817\u5C71\u8FB2\u7523",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u30C9\u30A5\u30FB\u30E1\u30FC\u30EB \u7BC9\u5730\u76F4\u9001 \u6D77\u9BAE\u304A\u3064\u307E\u307F\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/auc-de-mer/100200701/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b6fc9.7e841c4f.566b6fca.cc0c41e4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-de-mer%2F100200701%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-de-mer/cabinet/th1/gyokaikun_th1.jpg?_ex=240x240",
    shopName: "\u30C9\u30A5\u30FB\u30E1\u30FC\u30EB",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YTCJ", "YHCJ", "YHCW"]
  },
  {
    itemName: "\u7FA4\u99AC\u770C\u7523 \u30D8\u30EB\u30B7\u30FC\u3053\u3093\u306B\u3083\u304F\u304A\u3064\u307E\u307F",
    itemPrice: 1370,
    itemUrl: "https://item.rakuten.co.jp/konnyaku-ya/11000003-4-2/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b8a1a.283fed80.566b8a1b.af960777/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonnyaku-ya%2F11000003-4-2%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/konnyaku-ya/cabinet/13452633/2607otsu4_thm-p20.jpg?_ex=240x240",
    shopName: "\u7FA4\u99AC\u3053\u3093\u306B\u3083\u304F\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u3053\u3093\u306B\u3083\u304F\u73CD\u5473 \u5927\u5BB9\u91CF\u798F\u888B",
    itemPrice: 3168,
    itemUrl: "https://item.rakuten.co.jp/konnyaku-ya/fukubukuro-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b8a1a.283fed80.566b8a1b.af960777/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonnyaku-ya%2Ffukubukuro-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/konnyaku-ya/cabinet/06961558/12559265/12560240/2510fukubukuro_thm.jpg?_ex=240x240",
    shopName: "\u7FA4\u99AC\u3053\u3093\u306B\u3083\u304F\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u98DB\u9A28\u540D\u7269 \u5473\u4ED8\u3051\u591C\u713C\u304D\u3053\u3093\u306B\u3083\u304F",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/hidakara/yaokon01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b8dcb.3559e5e6.566b8dcc.2fe3d0be/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhidakara%2Fyaokon01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hidakara/cabinet/yaokon/yaokon01-001.jpg?_ex=240x240",
    shopName: "\u30D2\u30C0\u30AB\u30E9",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u3053\u3093\u306B\u3083\u304F\u30D1\u30FC\u30AF \u4F4E\u7CD6\u8CEA\u3053\u3093\u306B\u3083\u304F\u9EBA\u30FB\u73CD\u5473",
    itemPrice: 1134,
    itemUrl: "https://item.rakuten.co.jp/konnyakupark/ydf00016/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b8cb8.eaee3733.566b8cb9.8de91a3b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkonnyakupark%2Fydf00016%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/konnyakupark/cabinet/kensaku/ydf00016.jpg?_ex=240x240",
    shopName: "\u3053\u3093\u306B\u3083\u304F\u30D1\u30FC\u30AF",
    reviewAverage: 4.5,
    reviewCount: 290,
    targetTypes: ["YTCJ"]
  },
  // --- 角煮まん・いかしゅうまい・生キャラメル・和風塩辛珍味系 ---
  {
    itemName: "\u524D\u7530\u5C4B\u672C\u8217 \u9178\u3063\u3071\u65E8\u3044 \u4E2D\u91CE\u306E\u90FD\u3053\u3093\u3076\u98A8 \u9162\u6606\u5E03",
    itemPrice: 900,
    itemUrl: "https://item.rakuten.co.jp/maedayahonpo/sukonbu-500/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b9eb9.9590956f.566b9eba.7aa96f58/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmaedayahonpo%2Fsukonbu-500%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/maedayahonpo/cabinet/shohin01/syokuhin/syokuhin13/sukonbu-sku.jpg?_ex=240x240",
    shopName: "\u524D\u7530\u5C4B\u672C\u8217",
    reviewAverage: 4,
    reviewCount: 65,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u5929\u6606\u5E03 1000\u5186\u30DD\u30C3\u30AD\u30EA \u9162\u6606\u5E03",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/tenkonbu/1428490/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b9f9d.f6263894.566b9f9e.7cc84ae5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftenkonbu%2F1428490%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenkonbu/cabinet/09641586/11234348/imgrc0117959357.jpg?_ex=240x240",
    shopName: "\u5929\u6606\u5E03",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u6A3D\u306E\u5473 \u7121\u6DFB\u52A0 \u65E8\u5473\u5869\u6606\u5E03",
    itemPrice: 2160,
    itemUrl: "https://item.rakuten.co.jp/tarunoaji/shio-konbu_03a/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bba89.451b96b3.566bba8a.5dc7410b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftarunoaji%2Fshio-konbu_03a%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tarunoaji/cabinet/09865524/09865537/50konbusoy.jpg?_ex=240x240",
    shopName: "\u6A3D\u306E\u5473",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u4E38\u5929 \u672C\u683C\u30B8\u30E5\u30FC\u30B7\u30FC\u624B\u5305\u307F\u8C5A\u307E\u3093",
    itemPrice: 4200,
    itemUrl: "https://item.rakuten.co.jp/marutengroup/ut-1-10/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ba174.eaa4d0d4.566ba175.a6f9f8fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmarutengroup%2Fut-1-10%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/marutengroup/cabinet/butaman/ut110re29top2608.jpg?_ex=240x240",
    shopName: "\u4E38\u5929\u7269\u7523",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YTFJ", "YTCJ"]
  },
  {
    itemName: "\u9577\u5D0E\u540D\u7269 \u5CA9\u5D0E\u672C\u8217 \u9577\u5D0E\u89D2\u716E\u307E\u3093\u3058\u3085\u3046",
    itemPrice: 2e3,
    itemUrl: "https://item.rakuten.co.jp/iwasakihonpo/or2-3sk_ss/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ba203.c94bbf3f.566ba204.6c18c6c6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fiwasakihonpo%2For2-3sk_ss%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/iwasakihonpo/cabinet/kaku/imgrc0094104847.jpg?_ex=240x240",
    shopName: "\u5CA9\u5D0E\u672C\u8217",
    reviewAverage: 4.5,
    reviewCount: 520,
    targetTypes: ["YTFJ", "YTCJ"]
  },
  {
    itemName: "\u672C\u683C\u4E2D\u83EF \u3068\u308D\u3051\u308B\u674F\u4EC1\u8C46\u8150\u30D1\u30C3\u30AF",
    itemPrice: 1300,
    itemUrl: "https://item.rakuten.co.jp/asuraito/asuraito1290/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bbc4a.f66842f6.566bbc4b.d925ffc7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fasuraito%2Fasuraito1290%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/asuraito/cabinet/10096594/12225362/imgrc0337244774.jpg?_ex=240x240",
    shopName: "\u30A2\u30B9\u30E9\u30A4\u30C8",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["STCJ"]
  },
  {
    itemName: "\u9280\u5EA7\u5343\u758B\u5C4B \u30D7\u30EC\u30DF\u30A2\u30E0\u30D5\u30EB\u30FC\u30C4\u674F\u4EC1\u8C46\u8150",
    itemPrice: 4536,
    itemUrl: "https://item.rakuten.co.jp/1894ginza-sembikiya/pgs-435/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664916a.6bd8cc7c.5664916b.1102c979/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1894ginza-sembikiya%2Fpgs-435%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/1894ginza-sembikiya/cabinet/11868251/ann0666.jpg?_ex=240x240",
    shopName: "\u9280\u5EA7\u5343\u758B\u5C4B",
    reviewAverage: 4,
    reviewCount: 210,
    targetTypes: ["STCJ"]
  },
  {
    itemName: "\u8F38\u5165 \u6FC3\u539A\u751F\u30AD\u30E3\u30E9\u30E1\u30EB\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/cerestshop/41765-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bc07c.d96c41f1.566bc07d.415e9581/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcerestshop%2F41765-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cerestshop/cabinet/sweets/sweets2/43245-1a.jpg?_ex=240x240",
    shopName: "\u30BB\u30EC\u30B9\u30C8\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4,
    reviewCount: 60,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u5317\u6D77\u9053 \u82B1\u7551\u7267\u5834 \u751F\u30AD\u30E3\u30E9\u30E1\u30EB\u5927\u5BB9\u91CF",
    itemPrice: 4980,
    itemUrl: "https://item.rakuten.co.jp/hanabatake/140503/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bc193.d8bfbb16.566bc194.2f12f089/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhanabatake%2F140503%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hanabatake/cabinet/caramel/140503/ca140503n.jpg?_ex=240x240",
    shopName: "\u82B1\u7551\u7267\u5834",
    reviewAverage: 4,
    reviewCount: 480,
    targetTypes: ["STFW", "STCW"]
  },
  {
    itemName: "\u30D0\u30E9\u30F3\u30BF\u30A4\u30F3 \u9CF4\u9580\u91D1\u6642\u304A\u3055\u3064\u30B1\u30FC\u30AD",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/ballantaine1983/10000000/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bc504.1490c168.566bc505.0e78bb1b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fballantaine1983%2F10000000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ballantaine1983/cabinet/02838713/imgrc0117915715.jpg?_ex=240x240",
    shopName: "\u30D0\u30E9\u30F3\u30BF\u30A4\u30F3",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u304A\u3044\u3082\u3084 \u307E\u3093\u307E\u308B\u304A\u828B\u30C8\u30EA\u30E5\u30D5 \u30DE\u30F3\u30DE\u30EB\u30CE",
    itemPrice: 1780,
    itemUrl: "https://item.rakuten.co.jp/oimoya/51056_2/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bc580.5fe5ea89.566bc581.aadfda2d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Foimoya%2F51056_2%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/oimoya/cabinet/kago/manmaruno_kago01b.jpg?_ex=240x240",
    shopName: "\u304A\u3044\u3082\u3084",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u7523\u5730\u76F4\u9001 \u63A1\u308C\u305F\u3066\u6025\u901F\u51B7\u51CD\u679D\u8C46",
    itemPrice: 3580,
    itemUrl: "https://item.rakuten.co.jp/dekoboko/mss002-3-b/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bc76d.1da4c3c0.566bc76e.b9f4a81a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdekoboko%2Fmss002-3-b%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/dekoboko/cabinet/yasai/mss002-3-b-sin.jpg?_ex=240x240",
    shopName: "\u3067\u3053\u307C\u3053\u8FB2\u5712",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u77F3\u5DDD\u9298\u83D3 \u540D\u4EBA\u624B\u4F5C\u308A\u8C46\u8150\u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3456,
    itemUrl: "https://item.rakuten.co.jp/hyakuyoko/19393d002/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bc91f.c3e37bc2.566bc920.90d9fc75/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhyakuyoko%2F19393d002%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hyakuyoko/cabinet/ishikawagurume/imgrc0125620765.jpg?_ex=240x240",
    shopName: "\u767E\u9078\u6A2A\u4E01",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u7D00\u5DDE\u548C\u6B4C\u5C71 \u8C46\u8150\uFF06\u5409\u91CE\u845B\u3042\u305D\u3073",
    itemPrice: 4500,
    itemUrl: "https://item.rakuten.co.jp/umeasobi/10000018/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bc9d0.b89232f4.566bc9d1.ea43b04a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fumeasobi%2F10000018%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/umeasobi/cabinet/12424942/10000018_01.jpg?_ex=240x240",
    shopName: "\u6885\u3042\u305D\u3073",
    reviewAverage: 4.5,
    reviewCount: 72,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u4F50\u8CC0\u547C\u5B50\u540D\u7269 \u842C\u574A \u3044\u304B\u3057\u3085\u3046\u307E\u3044",
    itemPrice: 3e3,
    itemUrl: "https://item.rakuten.co.jp/yobuko-manbou/gs-3/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bcaac.84236b56.566bcaad.b3007ecb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyobuko-manbou%2Fgs-3%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/yobuko-manbou/cabinet/sumaho/gs-3-3.jpg?_ex=240x240",
    shopName: "\u547C\u5B50\u842C\u574A",
    reviewAverage: 4.5,
    reviewCount: 340,
    targetTypes: ["YTFJ", "YTCJ"]
  },
  {
    itemName: "\u4E38\u65B0\u672C\u5BB6 \u91D1\u5C71\u5BFA\u5473\u564C \u91A4\u6CB9\u3082\u308D\u307F",
    itemPrice: 664,
    itemUrl: "https://item.rakuten.co.jp/auc-marushin/14027/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bd2a7.9f7a4f10.566bd2a8.5a79a702/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-marushin%2F14027%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-marushin/cabinet/shouhin/02582993/n-syouyumoromi-270.jpg?_ex=240x240",
    shopName: "\u4E38\u65B0\u672C\u5BB6",
    reviewAverage: 4,
    reviewCount: 150,
    targetTypes: ["YHCJ", "YTCJ"]
  },
  {
    itemName: "\u623F\u7DCF\u9D28\u5DDD\u9928 \u4F1D\u7D71\u624B\u4ED5\u8FBC\u307F \u30A4\u30AB\u306E\u5869\u8F9B",
    itemPrice: 4266,
    itemUrl: "https://item.rakuten.co.jp/kamogawakan-r/003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566bd47b.66d24691.566bd47c.0986327e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamogawakan-r%2F003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamogawakan-r/cabinet/06502796/ika/06_ika0.jpg?_ex=240x240",
    shopName: "\u9D28\u5DDD\u9928",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u8D8A\u524D\u304B\u306B\u8077\u4EBA\u7532\u7F85\u7D44 \u5C45\u9152\u5C4B\u5473 \u305F\u3053\u308F\u3055\u3073",
    itemPrice: 952,
    itemUrl: "https://item.rakuten.co.jp/kouragumi/200137/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644d7c.a0a4d64c.56644d7d.14d762e3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkouragumi%2F200137%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kouragumi/cabinet/item_image/imgrc0106520837.jpg?_ex=240x240",
    shopName: "\u8D8A\u524D\u304B\u306B\u8077\u4EBA\u7532\u7F85\u7D44",
    reviewAverage: 4,
    reviewCount: 280,
    targetTypes: ["YTCJ"]
  },
  // --- 高級生ハム・ローストチキン・うにゼリー寄せ・水わらび餅系 ---
  {
    itemName: "\u30B5\u30FC\u30AB\u30FC\u30BA \u7279\u88FD\u30B8\u30E5\u30FC\u30B7\u30FC\u30ED\u30FC\u30B9\u30C8\u30C1\u30AD\u30F3",
    itemPrice: 2300,
    itemUrl: "https://item.rakuten.co.jp/sircars/10000023/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c6ffa.82d9847d.566c6ffb.f4da4e07/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsircars%2F10000023%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sircars/cabinet/chicken/ckn_1040x1040.jpg?_ex=240x240",
    shopName: "\u30B5\u30FC\u30AB\u30FC\u30BA",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u65E8\u5473\u3058\u3063\u304F\u308A \u5408\u9D28\u30D1\u30B9\u30C8\u30E9\u30DF\u30B9\u30E2\u30FC\u30AF",
    itemPrice: 1499,
    itemUrl: "https://item.rakuten.co.jp/kaisendonya-motoya/10000022/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566a8208.e13dbfc3.566a8209.8650e7f7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaisendonya-motoya%2F10000022%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kaisendonya-motoya/cabinet/compass1767495099.jpg?_ex=240x240",
    shopName: "\u6D77\u9BAE\u554F\u5C4B\u672C\u8C37",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u81EA\u5BB6\u88FD \u6FC3\u539A\u8C5A\u30EC\u30D0\u30FC\u30DA\u30FC\u30B9\u30C8",
    itemPrice: 895,
    itemUrl: "https://item.rakuten.co.jp/premium-deli/10000067/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c7159.0160cf2c.566c715a.7e5bb01c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpremium-deli%2F10000067%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/premium-deli/cabinet/syouhin/06065167/imgrc0080734661.jpg?_ex=240x240",
    shopName: "\u30D7\u30EC\u30DF\u30A2\u30E0\u30C7\u30EA",
    reviewAverage: 4,
    reviewCount: 60,
    targetTypes: ["YTCW"]
  },
  {
    itemName: "\u3044\u3082\u8C5A \u30D6\u30E9\u30F3\u30C9\u8C5A\u8D05\u6CA2\u304A\u3064\u307E\u307F\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2790,
    itemUrl: "https://item.rakuten.co.jp/imobuta/0111/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c727d.a9f6369e.566c727e.6e378778/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fimobuta%2F0111%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/imobuta/cabinet/11788530/2026/cgf_0111_t2.jpg?_ex=240x240",
    shopName: "\u3044\u3082\u8C5A",
    reviewAverage: 4,
    reviewCount: 75,
    targetTypes: ["YHCW", "YTCW"]
  },
  {
    itemName: "\u4E2D\u83EF\u8001\u8217 \u672C\u683C\u30AA\u30FC\u30C9\u30D6\u30EB\u30FB\u4E2D\u83EF\u304A\u3064\u307E\u307F",
    itemPrice: 5400,
    itemUrl: "https://item.rakuten.co.jp/chinagrand/dg-001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c7315.c5c7969f.566c7316.38c36d7c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fchinagrand%2Fdg-001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/chinagrand/cabinet/rk-dg-001-sg.jpg?_ex=240x240",
    shopName: "\u30C1\u30E3\u30A4\u30CA\u30B0\u30E9\u30F3\u30C9",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["YHCW", "YTCW"]
  },
  {
    itemName: "\u6C34\u90F7\u306E\u3068\u308A\u3084\u3055\u3093 \u8D05\u6CA2\u6669\u914C\u304A\u3064\u307E\u307F\u30BB\u30C3\u30C8",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/suigodori/fath02/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c73bc.1bad4f69.566c73bd.76b1a6d0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuigodori%2Ffath02%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/suigodori/cabinet/item01/fuku/bansyakukago5.jpg?_ex=240x240",
    shopName: "\u6C34\u90F7\u306E\u3068\u308A\u3084\u3055\u3093",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["YHCW", "YTCW"]
  },
  {
    itemName: "\u30A4\u30D9\u30EA\u30B3\u5C4B \u6700\u9AD8\u7D1A\u30A4\u30D9\u30EA\u30B3\u8C5A\u751F\u30CF\u30E0 \u98DF\u3079\u6BD4\u3079",
    itemPrice: 6480,
    itemUrl: "https://item.rakuten.co.jp/iberico-ya/5hammini/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c74a2.e9c426db.566c74a3.136d3730/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fiberico-ya%2F5hammini%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/iberico-ya/cabinet/img_product/raw_ham/5hammini_bt1.jpg?_ex=240x240",
    shopName: "\u30A4\u30D9\u30EA\u30B3\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 420,
    targetTypes: ["YHCW", "YTCW"]
  },
  {
    itemName: "\u5317\u6D77\u9053\u7523 \u6FC3\u539A\u30AB\u30DE\u30F3\u30D9\u30FC\u30EB\u30C1\u30FC\u30BA",
    itemPrice: 2860,
    itemUrl: "https://item.rakuten.co.jp/happydelica/12212/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56649f08.5ea9d0b9.56649f09.ef10756d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhappydelica%2F12212%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/happydelica/cabinet/biiino/item/main-image/20221209175850_1.jpg?_ex=240x240",
    shopName: "\u30CF\u30C3\u30D4\u30FC\u30C7\u30EA\u30AB",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "\u5BAE\u57CE\u540D\u7269 \u624B\u713C\u304D\u7B39\u304B\u307E\u307C\u3053 \u8A70\u5408\u305B",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/kamabokoya/sasakama5/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c768f.14d39ecd.566c7690.6ec1ead9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamabokoya%2Fsasakama5%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamabokoya/cabinet/12532906/20offi49_sasakama5.jpg?_ex=240x240",
    shopName: "\u7B39\u304B\u307E\u307C\u3053\u76F4\u58F2\u6240",
    reviewAverage: 5,
    reviewCount: 180,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u6A2A\u5C71\u5546\u5E97 \u672C\u683C\u624B\u4ED5\u8FBC\u307F\u7D76\u54C1\u30AD\u30E0\u30C1",
    itemPrice: 3500,
    itemUrl: "https://item.rakuten.co.jp/yokoyamasyoten/kimuchi-102/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c7c2d.c510cfe0.566c7c2e.6db8f9cb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyokoyamasyoten%2Fkimuchi-102%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/yokoyamasyoten/cabinet/11289377/compass1770771017.jpg?_ex=240x240",
    shopName: "\u6A2A\u5C71\u5546\u5E97",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u3055\u3063\u3071\u308A\u723D\u3084\u304B \u81EA\u5BB6\u88FD\u30D4\u30AF\u30EB\u30B9\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1985,
    itemUrl: "https://item.rakuten.co.jp/smilespoon/6436549-0003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566559fa.4f33a56b.566559fb.a7d3544f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsmilespoon%2F6436549-0003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/smilespoon/cabinet/49/6436549-0003_1.jpg?_ex=240x240",
    shopName: "Smile Spoon",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u4EAC\u90FD \u672C\u683C\u30D7\u30EB\u30D7\u30EB\u6C34\u308F\u3089\u3073\u9905",
    itemPrice: 2160,
    itemUrl: "https://item.rakuten.co.jp/kamekamo/mizu-warabi-mochi6/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c90f5.e0d1123d.566c90f6.c65ee1be/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkamekamo%2Fmizu-warabi-mochi6%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kamekamo/cabinet/imgrc0096976002.jpg?_ex=240x240",
    shopName: "\u4E80\u304B\u3082",
    reviewAverage: 4.5,
    reviewCount: 190,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u5FB3\u5CF6\u3042\u308F\u3084 \u540D\u7269\u3042\u3093\u3053\u308D\u9905\u8A70\u5408\u305B",
    itemPrice: 5130,
    itemUrl: "https://item.rakuten.co.jp/awayatokushima/100013/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56651bc5.877a4f2c.56651bc6.febab7df/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fawayatokushima%2F100013%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/awayatokushima/cabinet/03163929/imgrc0075635353.jpg?_ex=240x240",
    shopName: "\u3042\u308F\u3084",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u516D\u82B1\u4EAD \u6C34\u3054\u3088\u307F \u6C34\u7F8A\u7FB9",
    itemPrice: 1120,
    itemUrl: "https://item.rakuten.co.jp/hokkaido-omiyage/rokka031/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56654794.aca79ffa.56654795.171cbac4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhokkaido-omiyage%2Frokka031%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hokkaido-omiyage/cabinet/rokka/rokka031-1.jpg?_ex=240x240",
    shopName: "\u5317\u6D77\u9053\u304A\u571F\u7523\u63A2\u691C\u968A",
    reviewAverage: 4.5,
    reviewCount: 230,
    targetTypes: ["STCJ"]
  },
  {
    itemName: "\u5B63\u7BC0\u6599\u7406 \u5F69\u308A\u590F\u91CE\u83DC\u306E\u30BC\u30EA\u30FC\u5BC4\u305B",
    itemPrice: 3800,
    itemUrl: "https://item.rakuten.co.jp/koma-shop/vz-3420-9/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c9864.5d7a59c4.566c9865.d636c636/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkoma-shop%2Fvz-3420-9%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/koma-shop/cabinet/yasai/vz-3420-018.jpg?_ex=240x240",
    shopName: "\u30B3\u30DE\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4,
    reviewCount: 50,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u8001\u8217\u548C\u98DF\u5E97 \u7279\u9078\u6D77\u9BAE\u30BC\u30EA\u30FC\u5BC4\u305B\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 5640,
    itemUrl: "https://item.rakuten.co.jp/kisetsuryori-mon1/01-8505/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c98c9.f1821fc1.566c98ca.1773d6be/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkisetsuryori-mon1%2F01-8505%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kisetsuryori-mon1/cabinet/08987755/zery2026.jpg?_ex=240x240",
    shopName: "\u5B63\u7BC0\u6599\u7406 \u9580",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u4F50\u85E4\u6C34\u7523 \u8D05\u6CA2\u3046\u306B\u30BC\u30EA\u30FC\u5BC4\u305B",
    itemPrice: 480,
    itemUrl: "https://item.rakuten.co.jp/sato-suisan-shop/000-054/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c9a9d.033a33b8.566c9a9e.dadab4a7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsato-suisan-shop%2F000-054%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sato-suisan-shop/cabinet/01706942/gurumet/imgrc0115448360.jpg?_ex=240x240",
    shopName: "\u4F50\u85E4\u6C34\u7523",
    reviewAverage: 4,
    reviewCount: 110,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u672C\u683C\u4E2D\u83EF \u9D28\u820C\u71FB\u88FD\uFF08\u30A2\u30A4\u30B7\u30E3\u30F3\u30E4\u30FC\uFF09",
    itemPrice: 1318,
    itemUrl: "https://item.rakuten.co.jp/tenchobishoku/d118/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c9f49.f01592ae.566c9f4a.f79e6791/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftenchobishoku%2Fd118%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenchobishoku/cabinet/1003566.jpg?_ex=240x240",
    shopName: "\u5E97\u9577\u7F8E\u98DF",
    reviewAverage: 4.5,
    reviewCount: 42,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u7BC9\u5730\u9B5A\u7FA4 \u4E00\u591C\u5E72\u3057\u3059\u308B\u3081\u3044\u304B",
    itemPrice: 3204,
    itemUrl: "https://item.rakuten.co.jp/gyogun/1885/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ca18e.172c9636.566ca18f.7c19572b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgyogun%2F1885%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/gyogun/cabinet/item/m_1500-1999/m_1885.jpg?_ex=240x240",
    shopName: "\u7BC9\u5730\u9B5A\u7FA4",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["YHCJ", "YTCJ"]
  },
  // --- スープ・おやき・和菓子缶・ロイズポテチチョコ・オートミールバー系 ---
  {
    itemName: "\u5317\u6D77\u9053\u7523 \u6FC3\u539A\u51B7\u88FD\u30B9\u30FC\u30D7\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2100,
    itemUrl: "https://item.rakuten.co.jp/h2o-e/hokkaido_soup_set/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4436.ade2e796.566c4437.2fbfe29d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fh2o-e%2Fhokkaido_soup_set%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/h2o-e/cabinet/hokkaido/hokkaido_set_top.jpg?_ex=240x240",
    shopName: "H2O",
    reviewAverage: 5,
    reviewCount: 45,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u5C71\u68A8\u540D\u7269 \u4FE1\u7384\u9905 10\u500B\u30D1\u30C3\u30AF",
    itemPrice: 2930,
    itemUrl: "https://item.rakuten.co.jp/kaneyama/singenmoti_10/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566caed9.48cb7281.566caeda.fd613bf5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaneyama%2Fsingenmoti_10%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kaneyama/cabinet/top/shingenmochi10.jpg?_ex=240x240",
    shopName: "\u91D1\u5C71\u7269\u7523",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["STFJ", "STCJ"]
  },
  {
    itemName: "\u9577\u91CE\u540D\u7269 \u3044\u308D\u306F\u5802 \u7089\u3070\u305F\u304A\u3084\u304D\u30BB\u30C3\u30C8",
    itemPrice: 3400,
    itemUrl: "https://item.rakuten.co.jp/oyaki-irohado/10000041/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c44d4.62d413da.566c44d5.b511904b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Foyaki-irohado%2F10000041%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/oyaki-irohado/cabinet/11004651/imgrc0107074396.jpg?_ex=240x240",
    shopName: "\u3044\u308D\u306F\u5802",
    reviewAverage: 4.5,
    reviewCount: 280,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u4FE1\u5DDE\u624B\u4F5C\u308A\u304A\u3084\u304D 9\u7A2E\u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 4240,
    itemUrl: "https://item.rakuten.co.jp/shinjushoku/z01-18-c2000saless/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4708.e66d2a25.566c4709.a372267b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshinjushoku%2Fz01-18-c2000saless%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/shinjushoku/cabinet/06748749/9shu.jpg?_ex=240x240",
    shopName: "\u4FE1\u5DDE\u98DF\u7814",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u4FE1\u5DDE\u7279\u7523 \u3075\u3063\u304F\u3089\u624B\u4F5C\u308A\u304A\u3084\u304D",
    itemPrice: 2870,
    itemUrl: "https://item.rakuten.co.jp/donguri-n/10003813/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4815.12fc245c.566c4816.ecf41a8b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdonguri-n%2F10003813%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/donguri-n/cabinet/tokusan/oyaki5shijikik.jpg?_ex=240x240",
    shopName: "\u3069\u3093\u3050\u308A",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u30AB\u30EA\u30C3\u3068\u6975\u7D30 \u9EC4\u91D1\u828B\u3051\u3093\u3074",
    itemPrice: 1e3,
    itemUrl: "https://item.rakuten.co.jp/kame/4560211396096-3/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56670ab4.c91b188c.56670ab5.52a068a0/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkame%2F4560211396096-3%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kame/cabinet/kame-ry/image-j024/4560211396096-3.jpg?_ex=240x240",
    shopName: "\u304B\u3081\u306E\u3059\u3051",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["SHFJ"]
  },
  {
    itemName: "\u660E\u6CBB\u5C4B \u8102\u80AA\u30AB\u30C3\u30C8\u30B3\u30F3\u30D3\u30FC\u30D5",
    itemPrice: 1197,
    itemUrl: "https://item.rakuten.co.jp/rakuten24/4902161610530/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566700d1.6377312c.566700d2.6013e57a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakuten24%2F4902161610530%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/530/4902161610530.jpg?_ex=240x240",
    shopName: "\u697D\u592924",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "\u56FD\u5206 K&K \u7F36\u3064\u307E \u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30BD\u30FC\u30C8\u30BB\u30C3\u30C8",
    itemPrice: 9980,
    itemUrl: "https://item.rakuten.co.jp/e-mon-p/kb-18/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4ba0.413d682f.566c4ba1.a0aa9b09/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-mon-p%2Fkb-18%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/e-mon-p/cabinet/cp/kb-18_pc.jpg?_ex=240x240",
    shopName: "\u3048\u3048\u3082\u3093\u5E83\u5834",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "\u5929\u72D7\u7F36\u8A70 \u79CB\u8449\u539F\u540D\u7269 \u3053\u3066\u3093\u3050 \u304A\u3067\u3093\u7F36",
    itemPrice: 430,
    itemUrl: "https://item.rakuten.co.jp/tengu/4500282050702/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4c3c.b3cb4994.566c4c3f.ac5db2cb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftengu%2F4500282050702%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tengu/cabinet/2025lp/oden/imgrc0108816589.jpg?_ex=240x240",
    shopName: "\u5929\u72D7\u7F36\u8A70",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u5E83\u5CF6\u5C4B \u304A\u3064\u307E\u307F\u7F36\u8A70\u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2580,
    itemUrl: "https://item.rakuten.co.jp/auc-hiroshimaya/9920180907-1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4d50.df3a1a2b.566c4d51.fa91484a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fauc-hiroshimaya%2F9920180907-1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-hiroshimaya/cabinet/01908867/11258317/re-9920180907-1-1-az.gif?_ex=240x240",
    shopName: "\u5E83\u5CF6\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YTCW", "YHCW"]
  },
  {
    itemName: "\u5C0F\u7C92\u5B9D\u77F3 \u30D5\u30EB\u30FC\u30C4\u30AD\u30E3\u30F3\u30C7\u30A3\u30FC\u5927\u5BB9\u91CF1kg",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/em-market/kotubu-houseki-1kg/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4df9.a260d34c.566c4dfa.1f2950cb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fem-market%2Fkotubu-houseki-1kg%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/em-market/cabinet/emblem/kotubu-houseki-1kg.jpg?_ex=240x240",
    shopName: "EM\u30DE\u30FC\u30B1\u30C3\u30C8",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u69AE\u592A\u6A13\u7E3D\u672C\u92EA \u6885\u307C\u5FD7\u98F4\u30FB\u9ED2\u98F4\u7F36",
    itemPrice: 1200,
    itemUrl: "https://item.rakuten.co.jp/eitaro-souhonpo/e1-01-06/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4e6b.7ac96812.566c4e6c.be359943/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Feitaro-souhonpo%2Fe1-01-06%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/eitaro-souhonpo/cabinet/08527017/e1-01-06-mob-a.jpg?_ex=240x240",
    shopName: "\u69AE\u592A\u6A13\u7E3D\u672C\u92EA",
    reviewAverage: 4.5,
    reviewCount: 240,
    targetTypes: ["SHFJ"]
  },
  {
    itemName: "\u3069\u3046\u3076\u3064\u7D44\u307F\u98F4 \u74F6\u5165\u308A\u624B\u4F5C\u308A\u30AD\u30E3\u30F3\u30C7\u30A3\u30FC",
    itemPrice: 1080,
    itemUrl: "https://item.rakuten.co.jp/engrave/96800204/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5669dd76.3a34fdc5.5669dd77.1c4b9969/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fengrave%2F96800204%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/engrave/cabinet/animalfruitcandy300g.jpg?_ex=240x240",
    shopName: "\u30A8\u30F3\u30B0\u30EC\u30A4\u30D6",
    reviewAverage: 4.5,
    reviewCount: 70,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u6614\u306A\u304C\u3089\u306E\u7D44\u307F\u98F4\u30FB\u30D0\u30E9\u30A8\u30C6\u30A3\u30D1\u30C3\u30AF",
    itemPrice: 1130,
    itemUrl: "https://item.rakuten.co.jp/festival-plus/oks-032363/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4f5c.ba60e8ab.566c4f5d.3ce2c1ef/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffestival-plus%2Foks-032363%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/festival-plus/cabinet/dagashi2/oks-032363.jpg?_ex=240x240",
    shopName: "\u30D5\u30A7\u30B9\u30C6\u30A3\u30D0\u30EB\u30D7\u30E9\u30B6",
    reviewAverage: 4,
    reviewCount: 50,
    targetTypes: ["SHFJ"]
  },
  {
    itemName: "\u4EAC\u306E\u304A\u3060\u3057 \u30B5\u30AF\u30B5\u30AF\u63DA\u3052\u306A\u3059\u30B9\u30CA\u30C3\u30AF",
    itemPrice: 2268,
    itemUrl: "https://item.rakuten.co.jp/kyono-odashi/41419/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c5455.c7633c3b.566c5456.ef0af3a1/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkyono-odashi%2F41419%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kyono-odashi/cabinet/nasu/nasutop01.jpg?_ex=240x240",
    shopName: "\u4EAC\u306E\u304A\u3060\u3057",
    reviewAverage: 4,
    reviewCount: 65,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u30ED\u30A4\u30BA ROYCE' \u30DD\u30C6\u30C8\u30C1\u30C3\u30D7\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8",
    itemPrice: 1118,
    itemUrl: "https://item.rakuten.co.jp/royce/920/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566abcf8.4841c018.566abcf9.c32ab978/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Froyce%2F920%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/royce/cabinet/920_5.jpg?_ex=240x240",
    shopName: "\u30ED\u30A4\u30BA\u516C\u5F0F \u697D\u5929\u5E02\u5834\u5E97",
    reviewAverage: 4.5,
    reviewCount: 1100,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u30AB\u30EB\u30D3\u30FC \u3058\u3083\u304C\u308A\u3053 \u98DF\u3079\u6BD4\u307912\u500B\u30BB\u30C3\u30C8",
    itemPrice: 2680,
    itemUrl: "https://item.rakuten.co.jp/tigtig/230926-51/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f9b6.e919330f.5666f9b7.b9ced82b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftigtig%2F230926-51%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tigtig/cabinet/products_202401/230926-51_w-2.jpg?_ex=240x240",
    shopName: "tigtig",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u6C96\u7E04\u304A\u3064\u307E\u307F \u8C5A\u76AE\u30B9\u30CA\u30C3\u30AF \u30C8\u30F3\u30D4\u30FC",
    itemPrice: 2400,
    itemUrl: "https://item.rakuten.co.jp/lokahi-oki/10000714/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c57d1.14c11453.566c57d2.afcf2b52/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Flokahi-oki%2F10000714%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/lokahi-oki/cabinet/product/food/tonpi3_000.jpg?_ex=240x240",
    shopName: "\u30ED\u30AB\u30D2\u6C96\u7E04",
    reviewAverage: 4,
    reviewCount: 65,
    targetTypes: ["YHFW", "YHFJ"]
  },
  {
    itemName: "\u81EA\u5BB6\u88FD \u7CD6\u8CEA\u30AA\u30D5\u30D5\u30EB\u30FC\u30C4\u30B0\u30E9\u30CE\u30FC\u30E9",
    itemPrice: 1780,
    itemUrl: "https://item.rakuten.co.jp/relaxsleep/c0001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c5967.a9a476ac.566c5968.fe521b7c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frelaxsleep%2Fc0001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/relaxsleep/cabinet/c0001/c0001_v2.jpg?_ex=240x240",
    shopName: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30B9\u30EA\u30FC\u30D7",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30D8\u30EB\u30B7\u30FC \u3056\u304F\u3056\u304F\u30AA\u30FC\u30C8\u30DF\u30FC\u30EB\u30AF\u30C3\u30AD\u30FC\u30D0\u30FC",
    itemPrice: 1940,
    itemUrl: "https://item.rakuten.co.jp/tennenlife/10855/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c59ee.50be7fdd.566c59ef.de013f18/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftennenlife%2F10855%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tennenlife/cabinet/04911579/sp-thumbnaill/10855_thum00.jpg?_ex=240x240",
    shopName: "\u5929\u7136\u751F\u6D3B",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30D5\u30A3\u30C3\u30C8\u30D0\u30FC \u30B3\u30B3\u30A2\u98A8\u5473\u30AA\u30FC\u30C8\u30DF\u30FC\u30EB\u30D0\u30FC",
    itemPrice: 1940,
    itemUrl: "https://item.rakuten.co.jp/niitaka-online/fitbar-cocoa/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c5a9b.d937863c.566c5a9c.f7c6a962/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fniitaka-online%2Ffitbar-cocoa%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/niitaka-online/cabinet/shohingazo/cocoa/cocoa-s.jpg?_ex=240x240",
    shopName: "\u65B0\u9AD8\u30AA\u30F3\u30E9\u30A4\u30F3",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u56FD\u7523\u304A\u304B\u3089100% \u8C46\u4E73\u304A\u304B\u3089\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 2780,
    itemUrl: "https://item.rakuten.co.jp/bake-de-nature/10000060/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c5bcf.a89b5a3b.566c5bd0.f9c8b481/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbake-de-nature%2F10000060%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bake-de-nature/cabinet/05745308/09718874/imgrc0111703722.jpg?_ex=240x240",
    shopName: "BAKE de NATURE",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["SHFJ"]
  },
  {
    itemName: "\u30C9\u30E9\u30A4\u5869\u30EC\u30E2\u30F3 \u723D\u3084\u304B\u5869\u7518\u73CD\u5473",
    itemPrice: 2e3,
    itemUrl: "https://item.rakuten.co.jp/sosuke/102047-2/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56648aa8.2a8aca4a.56648aa9.f0ac9656/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsosuke%2F102047-2%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sosuke/cabinet/06372009/imgrc0175586710.jpg?_ex=240x240",
    shopName: "\u5275\u3059\u3051",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u307F\u3059\u305A\u30B3\u30FC\u30DD\u30EC\u30FC\u30B7\u30E7\u30F3 \u304B\u308A\u3063\u3053\u3044\u308F\u3057",
    itemPrice: 1880,
    itemUrl: "https://item.rakuten.co.jp/bunza/420382/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c6439.8e2b41d4.566c643a.92b9d894/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbunza%2F420382%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bunza/cabinet/ikou_20100129/img1030792089.jpg?_ex=240x240",
    shopName: "\u6587\u5EA7",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["YHFJ"]
  },
  {
    itemName: "\u30B9\u30CA\u30C3\u30D5\u30EB\u30B9 \u30C1\u30FC\u30BA\u30AA\u30E0\u30EC\u30C3\u30C8 12\u500B\u5165",
    itemPrice: 1944,
    itemUrl: "https://item.rakuten.co.jp/snaffles/01001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646cdc.fe2fcd55.56646cdd.2f67b59b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsnaffles%2F01001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/snaffles/cabinet/item/01001_thum_2309_b.jpg?_ex=240x240",
    shopName: "\u51FD\u9928\u6D0B\u83D3\u5B50\u30B9\u30CA\u30C3\u30D5\u30EB\u30B9",
    reviewAverage: 4.5,
    reviewCount: 420,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u99FF\u6CB3\u5C4B \u3075\u308F\u3063\u3068\u53E3\u6EB6\u3051\u30C1\u30FC\u30BA\u30B9\u30D5\u30EC",
    itemPrice: 2850,
    itemUrl: "https://item.rakuten.co.jp/surugayaki/chi01000/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56650714.ee08b7e5.56650715.5b4f9a65/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurugayaki%2Fchi01000%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/surugayaki/cabinet/pakuto/b_10.jpg?_ex=240x240",
    shopName: "\u99FF\u6CB3\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u702C\u6238\u5185\u30C9\u30E9\u30A4\u30B7\u30C8\u30E9\u30B9 \u67D1\u6A58\u30D5\u30EB\u30FC\u30C4\u30C1\u30C3\u30D7\u30B9",
    itemPrice: 1820,
    itemUrl: "https://item.rakuten.co.jp/hiroshima-gourmet/eh-381210003/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c66f7.c018a575.566c66f8.7b267afe/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhiroshima-gourmet%2Feh-381210003%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hiroshima-gourmet/cabinet/13444418/imgrc0118045909.jpg?_ex=240x240",
    shopName: "\u5E83\u5CF6\u30B0\u30EB\u30E1\u672C\u8217",
    reviewAverage: 4.5,
    reviewCount: 65,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30B5\u30AF\u307B\u308D\u98DF\u611F \u30B9\u30CE\u30FC\u30DC\u30FC\u30EB\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 1799,
    itemUrl: "https://item.rakuten.co.jp/plus-quality/4573186216733/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56647e09.6ca14c93.56647e0a.f6be1a1a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fplus-quality%2F4573186216733%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/plus-quality/cabinet/11093316/4573186216733-00-s.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30B9\u30AF\u30AA\u30EA\u30C6\u30A3",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30D7\u30C1\u30AE\u30D5\u30C8 \u30B9\u30CE\u30FC\u30DC\u30FC\u30EB\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 945,
    itemUrl: "https://item.rakuten.co.jp/bonheur7/snow19/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d378.4fcd0d58.5664d379.2e83371a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbonheur7%2Fsnow19%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bonheur7/cabinet/10856238/imgrc0092102419.jpg?_ex=240x240",
    shopName: "\u30DC\u30CC\u30FC\u30EB",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30B8\u30E3\u30D1\u30F3\u30AE\u30D5\u30C8 \u3072\u3068\u304F\u3061\u713C\u304D\u83D3\u5B50\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1990,
    itemUrl: "https://item.rakuten.co.jp/japangift/ap-cg-02/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c6aa0.a205ff0b.566c6aa1.a0892277/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjapangift%2Fap-cg-02%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/japangift/cabinet/pointex/20260804mara/20250803ap-cg-02.jpg?_ex=240x240",
    shopName: "\u30B8\u30E3\u30D1\u30F3\u30AE\u30D5\u30C8",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STFW", "SHFW"]
  },
  {
    itemName: "Tabemore \u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 2500,
    itemUrl: "https://item.rakuten.co.jp/tabemore/t-11-017/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664d04f.8811fad6.5664d050.585e3c77/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftabemore%2Ft-11-017%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tabemore/cabinet/11718347/12523561/imgrc0339925420.jpg?_ex=240x240",
    shopName: "Tabemore",
    reviewAverage: 4,
    reviewCount: 70,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u9280\u5EA7\u5343\u758B\u5C4B \u9280\u5EA7\u30AF\u30FC\u30D8\u30F3 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 3240,
    itemUrl: "https://item.rakuten.co.jp/1894ginza-sembikiya/10001378/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664916a.6bd8cc7c.5664916b.1102c979/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2F1894ginza-sembikiya%2F10001378%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/1894ginza-sembikiya/cabinet/04020656/gs001.jpg?_ex=240x240",
    shopName: "\u9280\u5EA7\u5343\u758B\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 310,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8 \u30C6\u30EA\u30FC\u30CC\u30FB\u30C9\u30A5\u30FB\u30D5\u30EA\u30E5\u30A4",
    itemPrice: 4860,
    itemUrl: "https://item.rakuten.co.jp/henri-charpentier/772346/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660df20.8eb492fe.5660df21.146733d3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhenri-charpentier%2F772346%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/henri-charpentier/cabinet/2026/campaign2026/p-thumbnail-26/htf-45n2_p10_bk.jpg?_ex=240x240",
    shopName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8",
    reviewAverage: 4.5,
    reviewCount: 290,
    targetTypes: ["STCW", "STCJ"]
  },
  // --- ちんすこう・きゅうり一本漬け・いももち・東ハトポテコ系 ---
  {
    itemName: "\u6C96\u7E04\u9298\u83D3 \u4F1D\u7D71\u3061\u3093\u3059\u3053\u3046 \u8A70\u3081\u5408\u308F\u305B",
    itemPrice: 1399,
    itemUrl: "https://item.rakuten.co.jp/chura-okinawa/10000270/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b0cac.c9eb46bd.566b0cad.39702e51/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fchura-okinawa%2F10000270%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/chura-okinawa/cabinet/01_03.jpg?_ex=240x240",
    shopName: "\u7F8E\u3089\u6C96\u7E04",
    reviewAverage: 4.5,
    reviewCount: 120,
    targetTypes: ["SHFJ"]
  },
  {
    itemName: "\u611B\u5A9B\u7523\u76F4 \u9AD8\u7D1A\u30AB\u30CB\u30AB\u30DE\u30FB\u7DF4\u308A\u7269\u73CD\u5473",
    itemPrice: 2980,
    itemUrl: "https://item.rakuten.co.jp/ehime-sanchoku/fr-in001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b1057.e0193e7a.566b1058.2b5b9161/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fehime-sanchoku%2Ffr-in001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ehime-sanchoku/cabinet/10251506/fr-in001_1.jpg?_ex=240x240",
    shopName: "\u611B\u5A9B\u7523\u76F4",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["YTCJ"]
  },
  {
    itemName: "\u304D\u3085\u3046\u308A\u6D45\u6F2C\u3051\u30FB\u304A\u6F2C\u7269\u30D1\u30C3\u30AF",
    itemPrice: 798,
    itemUrl: "https://item.rakuten.co.jp/ootsuru/10005021/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b149b.2706a585.566b149c.052c2f1f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Footsuru%2F10005021%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ootsuru/cabinet/cr/page/10005021.jpg?_ex=240x240",
    shopName: "\u5927\u9DB4",
    reviewAverage: 4.5,
    reviewCount: 60,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u677E\u672C\u304A\u3064\u3051\u3082\u306E \u304D\u3085\u3046\u308A\u4E00\u672C\u6F2C\u3051",
    itemPrice: 198,
    itemUrl: "https://item.rakuten.co.jp/matsumoto-otsukemono/01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b114d.79988f88.566b114e.840266cb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmatsumoto-otsukemono%2F01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/matsumoto-otsukemono/cabinet/03850948/kyuri1pon.jpg?_ex=240x240",
    shopName: "\u677E\u672C\u304A\u3064\u3051\u3082\u306E",
    reviewAverage: 4,
    reviewCount: 45,
    targetTypes: ["YHCJ"]
  },
  {
    itemName: "\u6975\u672C\u8217 \u3058\u3063\u304F\u308A\u719F\u6210\u30B5\u30E9\u30DF\u30FB\u30AB\u30EB\u30D1\u30B9",
    itemPrice: 1650,
    itemUrl: "https://item.rakuten.co.jp/kiwami-honpo/sm00010736/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b1682.0737eec4.566b1683.a13e4f8a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkiwami-honpo%2Fsm00010736%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kiwami-honpo/cabinet/sm00010736/sm00010736_00.jpg?_ex=240x240",
    shopName: "\u6975\u672C\u8217",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["YHCW"]
  },
  {
    itemName: "\u5317\u6D77\u9053\u540D\u7269 \u5473\u306E\u3061\u306C\u3084 \u3082\u3061\u3082\u3061\u3044\u3082\u3082\u3061",
    itemPrice: 1155,
    itemUrl: "https://item.rakuten.co.jp/chinuya-shop/imomoti1/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b190d.00e593ea.566b190e.bf96a901/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fchinuya-shop%2Fimomoti1%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/chinuya-shop/cabinet//imomoti/crmr-img01.jpg?_ex=240x240",
    shopName: "\u5473\u306E\u3061\u306C\u3084",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["YTFJ"]
  },
  {
    itemName: "\u307B\u3093\u306E\u308A\u5869\u5473\u304C\u5F15\u304D\u7ACB\u3064 \u3068\u308D\u3051\u308B\u5869\u30D7\u30EA\u30F3",
    itemPrice: 2900,
    itemUrl: "https://item.rakuten.co.jp/micchel-food-shop/purin-6-2980shio/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566b1ad8.5bb3cc7c.566b1ad9.264e06f9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmicchel-food-shop%2Fpurin-6-2980shio%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/micchel-food-shop/cabinet/purin/3730.jpg?_ex=240x240",
    shopName: "\u30DF\u30C3\u30C1\u30A7\u30EB",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["STCW", "YTCW"]
  },
  {
    itemName: "\u6771\u30CF\u30C8 \u30BD\u30EB\u30C6\u30A3 \u30D0\u30BF\u30FC\u30AF\u30C3\u30AD\u30FC",
    itemPrice: 511,
    itemUrl: "https://item.rakuten.co.jp/onestep/sh9215/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566cdbb9.ac87cd8d.566cdbba.c1b4ee3e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fonestep%2Fsh9215%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/onestep/cabinet/syoku/syoku15/sh9215.jpg?_ex=240x240",
    shopName: "\u30EF\u30F3\u30B9\u30C6\u30C3\u30D7",
    reviewAverage: 4,
    reviewCount: 180,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u6771\u30CF\u30C8 \u30DD\u30C6\u30B3 \u3046\u307E\u3057\u304A\u5473 5\u888B\u30D1\u30C3\u30AF",
    itemPrice: 641,
    itemUrl: "https://item.rakuten.co.jp/onestep/sh9292/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566cdbb9.ac87cd8d.566cdbba.c1b4ee3e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fonestep%2Fsh9292%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/onestep/cabinet/syoku/syoku01/sh9292.jpg?_ex=240x240",
    shopName: "\u30EF\u30F3\u30B9\u30C6\u30C3\u30D7",
    reviewAverage: 5,
    reviewCount: 210,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u3084\u304A\u304D\u3093 \u3046\u307E\u3044\u8F2A \u30B5\u30AF\u30B5\u30AF\u30B9\u30CA\u30C3\u30AF\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 1990,
    itemUrl: "https://item.rakuten.co.jp/e-convini/0423091011234-ha001/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666fc16.17da4c66.5666fc17.f7fdb688/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-convini%2F0423091011234-ha001%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/e-convini/cabinet/syokuhin03/0423091011234-ha001.jpg?_ex=240x240",
    shopName: "e-\u30B3\u30F3\u30D3\u30CB",
    reviewAverage: 5,
    reviewCount: 140,
    targetTypes: ["YHFW"]
  },
  {
    itemName: "\u9280\u306E\u3076\u3069\u3046 \u8863\u3057\u3083 \u82FA\u306E\u30B5\u30F3\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 1458,
    itemUrl: "https://item.rakuten.co.jp/paqtomogsweetsshop/012150/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ce71e.fd530edc.566ce71f.122f17df/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpaqtomogsweetsshop%2F012150%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/paqtomogsweetsshop/cabinet/goods/banana/09567459/gzichigo_01_8p.jpg?_ex=240x240",
    shopName: "\u30D1\u30AF\u3068\u30E2\u30B0 \u30B9\u30A4\u30FC\u30C4\u30B7\u30E7\u30C3\u30D7",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u7121\u6DFB\u52A0 \u304A\u304B\u3089\u30AF\u30C3\u30AD\u30FC \u30D7\u30EC\u30FC\u30F3 1kg \u30D8\u30EB\u30B7\u30FC \u30C0\u30A4\u30A8\u30C3\u30C8 \u30B0\u30EB\u30C6\u30F3\u30D5\u30EA\u30FC",
    itemPrice: 2480,
    itemUrl: "https://item.rakuten.co.jp/cafellatte/10000002/",
    affiliateUrl: "",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cafellatte/cabinet/item_img/2021/08/10000002_1.jpg?_ex=240x240",
    shopName: "Cafellatte",
    reviewAverage: 4.6,
    reviewCount: 300,
    targetTypes: ["SHFW", "STFW", "SHFJ", "STFJ"]
  },
  {
    itemName: "\u56FD\u7523 \u7121\u6DFB\u52A0 \u30B0\u30E9\u30CE\u30FC\u30E9 \u30AA\u30FC\u30AC\u30CB\u30C3\u30AF \u30CA\u30C3\u30C4 \uFF06 \u30D5\u30EB\u30FC\u30C4 500g",
    itemPrice: 1980,
    itemUrl: "https://item.rakuten.co.jp/nature-select/granola-01/",
    affiliateUrl: "",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nature-select/cabinet/item/gr01_1.jpg?_ex=240x240",
    shopName: "Nature Select",
    reviewAverage: 4.7,
    reviewCount: 250,
    targetTypes: ["SHFW", "SHFJ"]
  },
  {
    itemName: "\u4F4E\u7CD6\u8CEA \u8C46\u4E73\u304A\u304B\u3089\u30AF\u30C3\u30AD\u30FC 800g \u8A70\u3081\u5408\u308F\u305B \u30B0\u30EB\u30C6\u30F3\u30D5\u30EA\u30FC",
    itemPrice: 3200,
    itemUrl: "https://item.rakuten.co.jp/soy-diet/sc-01/",
    affiliateUrl: "",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/soy-diet/cabinet/03/sc-01.jpg?_ex=240x240",
    shopName: "\u30BD\u30A4\u30C0\u30A4\u30A8\u30C3\u30C8",
    reviewAverage: 4.5,
    reviewCount: 150,
    targetTypes: ["SHFW", "STFW", "SHFJ", "STFJ"]
  },
  // --- はちみつスイーツ・バニラフロマージュ・新幹線アイス・カタラーナ系 ---
  {
    itemName: "\u30D7\u30E9\u30F3\u30BF\u30F3\u306C\u307E\u304F\u307E \u82B1\u6708\u5802 \u82FA\u306E\u30DF\u30CB\u30ED\u30FC\u30EB\u30B1\u30FC\u30AD",
    itemPrice: 1320,
    itemUrl: "https://item.rakuten.co.jp/kagetudo/st66/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671b399.be78bc01.5671b39a.f377f6b6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkagetudo%2Fst66%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kagetudo/cabinet/07713260/st45.jpg?_ex=240x240",
    shopName: "\u82B1\u6708\u5802",
    reviewAverage: 4.5,
    reviewCount: 95,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u5929\u4F7F\u306E\u304A\u304F\u308A\u3082\u306E \u6FC3\u539A\u30B7\u30EB\u30AD\u30FC\u30C6\u30A3\u30E9\u30DF\u30B9",
    itemPrice: 3999,
    itemUrl: "https://item.rakuten.co.jp/tenshi-okurimono/te088/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664848a.154ac8c8.5664848b.7a9cee31/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftenshi-okurimono%2Fte088%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenshi-okurimono/cabinet/te088var/sg/te088var_sn1sg26.jpg?_ex=240x240",
    shopName: "\u5929\u4F7F\u306E\u304A\u304F\u308A\u3082\u306E",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u5C71\u7530\u990A\u8702\u5834 \u306F\u3061\u307F\u3064\u30D0\u30A6\u30E0\u30AF\u30FC\u30D8\u30F3",
    itemPrice: 1404,
    itemUrl: "https://item.rakuten.co.jp/yamada3838/26880/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671c454.fed3fcde.5671c455.32b38f2a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyamada3838%2F26880%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/yamada3838/cabinet/item/sam/imgrc0103683577.jpg?_ex=240x240",
    shopName: "\u5C71\u7530\u990A\u8702\u5834",
    reviewAverage: 4,
    reviewCount: 110,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u30CF\u30CB\u30FC\u30DE\u30B6\u30FC \u30DE\u30CC\u30AB\u30CF\u30CB\u30FC \u30D1\u30A6\u30F3\u30C9\u30B1\u30FC\u30AD",
    itemPrice: 3230,
    itemUrl: "https://item.rakuten.co.jp/honeymother/honey-pound/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671c4cb.1f38bced.5671c4cc.7ac04ffb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhoneymother%2Fhoney-pound%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/honeymother/cabinet/landingpage/11690465/13566094/fv_v4.jpg?_ex=240x240",
    shopName: "\u30CF\u30CB\u30FC\u30DE\u30B6\u30FC",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u304A\u83D3\u5B50\u306E\u83CA\u5BB6 \u5730\u8702\u306E\u306F\u3061\u307F\u3064\u30D7\u30EA\u30F3",
    itemPrice: 3888,
    itemUrl: "https://item.rakuten.co.jp/kikuya-oita/798060/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671aa8d.e47c92ed.5671aa8e.4fe384ef/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkikuya-oita%2F798060%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_gold/kikuya-oita/images/img1/jihachi_img01.jpg?_ex=240x240",
    shopName: "\u304A\u83D3\u5B50\u306E\u83CA\u5BB6",
    reviewAverage: 5,
    reviewCount: 65,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u65B0\u7530\u88FD\u83D3 \u7D14\u7C8B\u306F\u3061\u307F\u3064\u30B1\u30FC\u30AD",
    itemPrice: 2592,
    itemUrl: "https://item.rakuten.co.jp/jshop-web/nitta01/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566ad47e.a03f138f.566ad47f.38aff75e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjshop-web%2Fnitta01%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/jshop-web/cabinet/syouhin/kasi/nitta01.jpg?_ex=240x240",
    shopName: "JSHOP",
    reviewAverage: 4,
    reviewCount: 42,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u677E\u6CBB\u90CE\u306E\u307D\u3066\u3068 \u306F\u3061\u307F\u3064\u5BC6\u5927\u5B66\u828B \u30CF\u30CB\u30DD\u30C6",
    itemPrice: 3996,
    itemUrl: "https://item.rakuten.co.jp/matsujiro/4580254041821/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671c6f5.215e8870.5671c6f6.5ef5abd4/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmatsujiro%2F4580254041821%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/matsujiro/cabinet/hanipote/imgrc0094536240.jpg?_ex=240x240",
    shopName: "\u677E\u6CBB\u90CE\u306E\u307D\u3066\u3068",
    reviewAverage: 4,
    reviewCount: 95,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u5C71\u68A8\u770C\u7532\u5E9C\u5E02 \u30B7\u30E3\u30C8\u30EC\u30FC\u30BC \u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9\u30BB\u30C3\u30C8",
    itemPrice: 6e3,
    itemUrl: "https://item.rakuten.co.jp/f192015-kofu/k066-004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56655736.071a9f79.56655737.ba3a7478/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff192015-kofu%2Fk066-004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f192015-kofu/cabinet/07625981/k283-031-033-s-r.jpg?_ex=240x240",
    shopName: "\u5C71\u68A8\u770C\u7532\u5E9C\u5E02",
    reviewAverage: 4.5,
    reviewCount: 380,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u3010\u3075\u308B\u3055\u3068\u7D0D\u7A0E\u3011\u9577\u5D0E\u770C\u5357\u5CF6\u539F\u5E02 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u5802 \u30AB\u30B9\u30C6\u30E9\u30A2\u30A4\u30B9",
    itemPrice: 12e3,
    itemUrl: "https://item.rakuten.co.jp/f422011-nagasaki/lei005/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671cbbd.f6051774.5671cbbe.ace209b9/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ff422011-nagasaki%2Flei005%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/f422011-nagasaki/cabinet/422011-d261eb30/lei005x1_00r.jpg?_ex=240x240",
    shopName: "\u9577\u5D0E\u770C\u5357\u5CF6\u539F\u5E02",
    reviewAverage: 4.5,
    reviewCount: 220,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30EF\u30A4\u30EF\u30A4\u30D7\u30E9\u30B6 \u82B3\u9187\u30D0\u30CB\u30E9\u30B4\u30FC\u30D5\u30EC\u30C3\u30C8",
    itemPrice: 2850,
    itemUrl: "https://item.rakuten.co.jp/waiwaiplaza/10013258/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671cc59.4ae87796.5671cc5a.87d8276e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fwaiwaiplaza%2F10013258%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/waiwaiplaza/cabinet/01637101/05916893/imgrc0085504841.jpg?_ex=240x240",
    shopName: "\u30EF\u30A4\u30EF\u30A4\u30D7\u30E9\u30B6",
    reviewAverage: 3.5,
    reviewCount: 45,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30B3\u30F3\u30C7\u30A3\u30C8\u30E9\u30A4\u795E\u6238 \u30D7\u30EC\u30DF\u30A2\u30E0\u30D0\u30CB\u30E9\u30D5\u30ED\u30DE\u30FC\u30B8\u30E5",
    itemPrice: 3800,
    itemUrl: "https://item.rakuten.co.jp/nipponselect/t10610004/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671cd23.4f107752.5671cd24.a3cda42e/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnipponselect%2Ft10610004%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nipponselect/cabinet/item/t10/t10610004.jpg?_ex=240x240",
    shopName: "\u30CB\u30C3\u30DD\u30F3\u30BB\u30EC\u30AF\u30C8",
    reviewAverage: 4.5,
    reviewCount: 175,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30A2\u30DE\u30EA\u30A2 \u30D9\u30EA\u30FC\u30AB\u30BF\u30E9\u30FC\u30CA\uFF08\u51CD\u3089\u305B\u3066\u98DF\u3079\u308B\u30D7\u30EA\u30F3\uFF09",
    itemPrice: 1512,
    itemUrl: "https://item.rakuten.co.jp/amaria/10000363/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671cdca.b4c38105.5671cdcb.8c5dd6e2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Famaria%2F10000363%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/amaria/cabinet/12781458/12814286/be_s1.jpg?_ex=240x240",
    shopName: "\u30A2\u30DE\u30EA\u30A2",
    reviewAverage: 4.5,
    reviewCount: 130,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u6614\u306A\u304C\u3089\u306E\u30B3\u30AF\u3046\u307E\u30D0\u30CB\u30E9\u30D0\u30FC",
    itemPrice: 270,
    itemUrl: "https://item.rakuten.co.jp/ice-ouan/10000506/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671cef6.ea5c2034.5671cef7.8a4b3a7f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fice-ouan%2F10000506%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ice-ouan/cabinet/rimg/10000506_r.jpg?_ex=240x240",
    shopName: "\u30A2\u30A4\u30B9\u738B\u56FD",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30F4\u30A1\u30C3\u30E9\u30FC\u30BF \u81EA\u5BB6\u88FD\u30AD\u30E3\u30E9\u30E1\u30EB\u30D1\u30F3\u30CA\u30B3\u30C3\u30BF",
    itemPrice: 3110,
    itemUrl: "https://item.rakuten.co.jp/vallata/d007/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671cfcf.593be071.5671cfd0.9bd429fb/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvallata%2Fd007%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/vallata/cabinet/itempage/remon/pannnakotta6_th.jpg?_ex=240x240",
    shopName: "\u30F4\u30A1\u30C3\u30E9\u30FC\u30BF",
    reviewAverage: 4,
    reviewCount: 52,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF \u30D0\u30CB\u30E9\u30D3\u30FC\u30F3\u30BA\u30D7\u30EA\u30F3",
    itemPrice: 870,
    itemUrl: "https://item.rakuten.co.jp/eeco/10000668/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671d055.b2758f95.5671d056.ee5c7efe/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Feeco%2F10000668%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/eeco/cabinet/04774359/04784692/compass1734412201.jpg?_ex=240x240",
    shopName: "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u5C02\u9580\u5E97eeco",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30B7\u30F3\u30AB\u30F3\u30BB\u30F3\u30B9\u30B4\u30A4\u30AB\u30BF\u30A4\u30A2\u30A4\u30B9 \u30D7\u30EC\u30DF\u30A2\u30E0\u30D0\u30CB\u30E9",
    itemPrice: 5230,
    itemUrl: "https://item.rakuten.co.jp/shinkansenice/950019/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671d199.28c79d8f.5671d19a.00849e13/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fshinkansenice%2F950019%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/shinkansenice/cabinet/13193568/vanilla11.jpg?_ex=240x240",
    shopName: "\u65B0\u5E79\u7DDA\u30A2\u30A4\u30B9\u516C\u5F0F",
    reviewAverage: 4.5,
    reviewCount: 480,
    targetTypes: ["SHCW"]
  },
  {
    itemName: "\u69AE\u592A\u6A13\u7E3D\u672C\u92EA \u6FC3\u539A\u30D0\u30CB\u30E9\u30DF\u30EB\u30AF\u98F4",
    itemPrice: 345,
    itemUrl: "https://item.rakuten.co.jp/eitaro-souhonpo/0469778/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/566c4e6b.7ac96812.566c4e6c.be359943/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Feitaro-souhonpo%2F0469778%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/eitaro-souhonpo/cabinet/ame/banira2_m.jpg?_ex=240x240",
    shopName: "\u69AE\u592A\u6A13\u7E3D\u672C\u92EA",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["SHFJ", "SHFW"]
  },
  {
    itemName: "\u65B0\u5BBF\u9AD8\u91CE \u30DF\u30EB\u30AD\u30FC\u30D0\u30FC\u30AC\u30FC\u30A2\u30A4\u30B9\u30BB\u30C3\u30C8",
    itemPrice: 2538,
    itemUrl: "https://item.rakuten.co.jp/takano-eshop/24959108030777/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671d327.b6d1746a.5671d328.0ec99167/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftakano-eshop%2F24959108030777%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/takano-eshop/cabinet/item2024/24959108030777.jpg?_ex=240x240",
    shopName: "\u65B0\u5BBF\u9AD8\u91CE",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30B5\u30F3\u30C6\u30AB\u30D5\u30A7\u30DE\u30EB \u4F4E\u7CD6\u8CEA\u30D0\u30CB\u30E9\u30B9\u30D5\u30EC\u30B1\u30FC\u30AD",
    itemPrice: 6458,
    itemUrl: "https://item.rakuten.co.jp/santecafemaru/low05-18/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671d3f6.cb86c067.5671d3f7.eb2c284d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsantecafemaru%2Flow05-18%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/santecafemaru/cabinet/06337607/compass1677196468.jpg?_ex=240x240",
    shopName: "\u30B5\u30F3\u30C6\u30AB\u30D5\u30A7\u30DE\u30EB",
    reviewAverage: 5,
    reviewCount: 52,
    targetTypes: ["STFW"]
  },
  // --- 苺スイーツ・ダロワイヨ・プリンどら・福砂屋カステラ系 ---
  {
    itemName: "\u30D1\u30EA\u30FB\u30C9\u30FC\u30C8\u30F3\u30CC \u8D05\u6CA2\u82FA\u30ED\u30FC\u30EB\u30B1\u30FC\u30AD",
    itemPrice: 3600,
    itemUrl: "https://item.rakuten.co.jp/paris-dautomne/03/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56646462.081ca088.56646463.ca6976a5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fparis-dautomne%2F03%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/paris-dautomne/cabinet/imgrc0091479928.jpg?_ex=240x240",
    shopName: "\u30D1\u30EA\u30FB\u30C9\u30FC\u30C8\u30F3\u30CC",
    reviewAverage: 4,
    reviewCount: 65,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u696D\u52D9\u7528 \u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u30E0\u30FC\u30B9\u30B1\u30FC\u30AD",
    itemPrice: 1330,
    itemUrl: "https://item.rakuten.co.jp/sucarfood/6342/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56643861.73e10b6d.56643862.0d588b5b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsucarfood%2F6342%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sucarfood/cabinet/07324079/imgrc0105290955.jpg?_ex=240x240",
    shopName: "sucarfood",
    reviewAverage: 4.5,
    reviewCount: 45,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u9053\u306E\u99C5\u3080\u306A\u304B\u305F \u3042\u307E\u304A\u3046\u82FA\u30D7\u30EC\u30DF\u30A2\u30E0\u30D7\u30EA\u30F3",
    itemPrice: 4860,
    itemUrl: "https://item.rakuten.co.jp/michinoekimunakata/10000589/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671a7f8.b6b09dc5.5671a7f9.3066b3ec/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmichinoekimunakata%2F10000589%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/michinoekimunakata/cabinet/10453305/10000589-1.jpg?_ex=240x240",
    shopName: "\u9053\u306E\u99C5\u3080\u306A\u304B\u305F",
    reviewAverage: 4.5,
    reviewCount: 92,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8 \u82FA\u306E\u30D5\u30A3\u30CA\u30F3\u30B7\u30A7",
    itemPrice: 1296,
    itemUrl: "https://item.rakuten.co.jp/henri-charpentier/772921/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5660df20.8eb492fe.5660df21.146733d3/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhenri-charpentier%2F772921%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/henri-charpentier/cabinet/thumnail/regularimg/hnf-11_img.jpg?_ex=240x240",
    shopName: "\u30A2\u30F3\u30EA\u30FB\u30B7\u30E3\u30EB\u30D1\u30F3\u30C6\u30A3\u30A8",
    reviewAverage: 4.5,
    reviewCount: 180,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u548C\u98A8\u30B7\u30E5\u30FC\u30AF\u30EA\u30FC\u30E0 \u548C\u3089\u304E",
    itemPrice: 1812,
    itemUrl: "https://item.rakuten.co.jp/k-asada/801876-4/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671aa0b.52d34cd3.5671aa0c.e5a8612f/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fk-asada%2F801876-4%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/k-asada/cabinet/item02/waragi.jpg?_ex=240x240",
    shopName: "\u6D45\u7530\u672C\u8217",
    reviewAverage: 4.5,
    reviewCount: 75,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u83CA\u5BB6 \u3086\u3075\u3044\u3093\u5275\u4F5C\u83D3\u5B50 \u3042\u307E\u304A\u3046\u82FA\u30D7\u30EA\u30F3\u3069\u3089",
    itemPrice: 1036,
    itemUrl: "https://item.rakuten.co.jp/kikuya-oita/season-117/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671aa8d.e47c92ed.5671aa8e.4fe384ef/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkikuya-oita%2Fseason-117%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_gold/kikuya-oita/images/img1/p-dora02amao.jpg?_ex=240x240",
    shopName: "\u304A\u83D3\u5B50\u306E\u83CA\u5BB6",
    reviewAverage: 4.5,
    reviewCount: 320,
    targetTypes: ["STFJ"]
  },
  {
    itemName: "\u30B0\u30E9\u30F3\u679C\u6A39 \u3068\u308D\u3051\u308B\u82FA\u306E\u751F\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8",
    itemPrice: 2580,
    itemUrl: "https://item.rakuten.co.jp/gran-kaju/chocolat-b/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671ab86.39d5c934.5671ab87.c3b56a0d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fgran-kaju%2Fchocolat-b%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/gran-kaju/cabinet/10985777/12626319/13427134/2.jpg?_ex=240x240",
    shopName: "\u30B0\u30E9\u30F3\u679C\u6A39",
    reviewAverage: 4,
    reviewCount: 88,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u6A39\u6797\u30D0\u30FC\u30E0 \u7A42\u4E43\u9999 \u82FA\u30D0\u30A6\u30E0\u30AF\u30FC\u30D8\u30F3",
    itemPrice: 3e3,
    itemUrl: "https://item.rakuten.co.jp/jurinbaum/10000009/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671ac56.71642e00.5671ac57.9cceb76d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjurinbaum%2F10000009%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/jurinbaum/cabinet/03290387/honoka/10000009_.jpg?_ex=240x240",
    shopName: "\u6A39\u6797\u30D0\u30FC\u30E0",
    reviewAverage: 4.5,
    reviewCount: 110,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u82B1\u3048\u3061\u305C\u3093 \u3057\u3063\u3068\u308A\u82FA\u30D0\u30A6\u30E0\u30AF\u30FC\u30D8\u30F3",
    itemPrice: 3580,
    itemUrl: "https://item.rakuten.co.jp/hanaechizen/baumu105/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56650909.f27237ab.5665090a.9c8e2a5c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fhanaechizen%2Fbaumu105%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/hanaechizen/cabinet/medama/free/baumu105_me25.jpg?_ex=240x240",
    shopName: "\u82B1\u3048\u3061\u305C\u3093",
    reviewAverage: 4.5,
    reviewCount: 140,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u304B\u3081\u3042\u3057\u5546\u5E97 \u82FA\u306E\u30DE\u30C9\u30EC\u30FC\u30CC",
    itemPrice: 1200,
    itemUrl: "https://item.rakuten.co.jp/cameashi/10005757/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671af56.2d9a29b9.5671af57.a4cbaa26/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fcameashi%2F10005757%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://image.rakuten.co.jp/cameashi/cabinet/00600761/mdrnitg_3.jpg?_ex=240x240",
    shopName: "\u304B\u3081\u3042\u3057\u5546\u5E97",
    reviewAverage: 5,
    reviewCount: 55,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u30B5\u30ED\u30F3\u30FB\u30C9\u30FB\u30ED\u30EF\u30A4\u30E4\u30EB \u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u30D4\u30FC\u30AB\u30F3\u30CA\u30C3\u30C4\u30C1\u30E7\u30B3",
    itemPrice: 1480,
    itemUrl: "https://item.rakuten.co.jp/s-royal/112/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671b0e3.0437fdc2.5671b0e4.51a11378/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fs-royal%2F112%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/s-royal/cabinet/itemthumb/imgrc0095583097.jpg?_ex=240x240",
    shopName: "\u30B5\u30ED\u30F3\u30FB\u30C9\u30FB\u30ED\u30EF\u30A4\u30E4\u30EB",
    reviewAverage: 4,
    reviewCount: 190,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u30C0\u30ED\u30EF\u30A4\u30E8 \u3042\u307E\u304A\u3046\u82FA\u30DE\u30AB\u30ED\u30F3\u8A70\u5408\u305B",
    itemPrice: 1728,
    itemUrl: "https://item.rakuten.co.jp/dalloyau/10000240/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671b1f5.61533279.5671b1f6.4ca2b16b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdalloyau%2F10000240%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/dalloyau/cabinet/amaou/5_000000000186.jpg?_ex=240x240",
    shopName: "\u30C0\u30ED\u30EF\u30A4\u30E8",
    reviewAverage: 4.5,
    reviewCount: 260,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u535A\u591A\u3042\u307E\u304A\u3046 \u30D7\u30EC\u30DF\u30A2\u30E0\u30A2\u30A4\u30B9\u30BB\u30C3\u30C8",
    itemPrice: 4104,
    itemUrl: "https://item.rakuten.co.jp/bellevie-harima/marutaka_237/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56644df1.c9459e58.56644df2.7fb6a9b5/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbellevie-harima%2Fmarutaka_237%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/bellevie-harima/cabinet/0804/gift2/amaouice_s1a.jpg?_ex=240x240",
    shopName: "\u30D9\u30EB\u30F4\u30A3",
    reviewAverage: 4,
    reviewCount: 150,
    targetTypes: ["STCW"]
  },
  {
    itemName: "\u30D7\u30E9\u30F3\u30BF\u30F3\u306C\u307E\u304F\u307E \u82B1\u6708\u5802 \u30D5\u30E9\u30F3\u30DC\u30EF\u30FC\u30BA\u30ED\u30FC\u30EB",
    itemPrice: 3980,
    itemUrl: "https://item.rakuten.co.jp/kagetudo/849090/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671b399.be78bc01.5671b39a.f377f6b6/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkagetudo%2F849090%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/kagetudo/cabinet/06376742/imgrc0075874228.jpg?_ex=240x240",
    shopName: "\u30D7\u30E9\u30F3\u30BF\u30F3\u306C\u307E\u304F\u307E \u82B1\u6708\u5802",
    reviewAverage: 4,
    reviewCount: 110,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u30DE\u30B7\u30E5\u30DE\u30ED\u9928 \u3046\u3055\u304E\u306E\u3075\u308F\u3075\u308F\u30DE\u30B7\u30E5\u30DE\u30ED",
    itemPrice: 1172,
    itemUrl: "https://item.rakuten.co.jp/marshmallow-k/1182820/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671b434.0cdf03c9.5671b435.c4f4772d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmarshmallow-k%2F1182820%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/marshmallow-k/cabinet/usagi/nk_usa.jpg?_ex=240x240",
    shopName: "\u30DE\u30B7\u30E5\u30DE\u30ED\u9928",
    reviewAverage: 4.5,
    reviewCount: 88,
    targetTypes: ["STFW"]
  },
  {
    itemName: "\u9577\u5D0E\u5FC3\u6CC9\u5802 \u5E78\u305B\u306E\u3044\u3061\u3054\u30AB\u30B9\u30C6\u30E9",
    itemPrice: 1458,
    itemUrl: "https://item.rakuten.co.jp/nagasaki-kasutera/1394859/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671b4d2.c3c72d20.5671b4d3.6cc72e7c/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnagasaki-kasutera%2F1394859%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/nagasaki-kasutera/cabinet/thumbnail1/06strb_cart.jpg?_ex=240x240",
    shopName: "\u9577\u5D0E\u5FC3\u6CC9\u5802",
    reviewAverage: 4.5,
    reviewCount: 210,
    targetTypes: ["STFJ", "STFW"]
  },
  {
    itemName: "\u3068\u3061\u304A\u3068\u3081\u4F7F\u7528 \u3044\u3061\u3054\u30DF\u30EB\u30AF\u30D1\u30A4",
    itemPrice: 972,
    itemUrl: "https://item.rakuten.co.jp/monmiya/70002366/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56657dbc.79d812e0.56657dbd.3e462079/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmonmiya%2F70002366%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/monmiya/cabinet/m/70002366_01.jpg?_ex=240x240",
    shopName: "\u3082\u3093\u307F\u3084\u901A\u8CA9",
    reviewAverage: 3,
    reviewCount: 40,
    targetTypes: ["SHFW"]
  },
  {
    itemName: "\u5929\u4F7F\u306E\u304A\u304F\u308A\u3082\u306E \u30D8\u30EB\u30B7\u30FC\u30B8\u30A7\u30E9\u30FC\u30C8\u30A2\u30BD\u30FC\u30C8",
    itemPrice: 3999,
    itemUrl: "https://item.rakuten.co.jp/tenshi-okurimono/c22_health_gelato8/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5664848a.154ac8c8.5664848b.7a9cee31/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftenshi-okurimono%2Fc22_health_gelato8%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenshi-okurimono/cabinet/te068v3var/sg/te068v3var_sn1sg26.jpg?_ex=240x240",
    shopName: "\u5929\u4F7F\u306E\u304A\u304F\u308A\u3082\u306E",
    reviewAverage: 4.5,
    reviewCount: 160,
    targetTypes: ["STCW", "SHCW"]
  },
  {
    itemName: "\u30B0\u30E9\u30E2\u30A6\u30C7\u30A3\u30FC\u30BA \u4EAC\u90FD\u5B87\u6CBB\u62B9\u8336\u30E9\u30F3\u30B0\u30C9\u30B7\u30E3",
    itemPrice: 2288,
    itemUrl: "https://item.rakuten.co.jp/ksfg-online/0-v003-18/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/56650ac1.23f6aa3a.56650ac2.10085d91/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fksfg-online%2F0-v003-18%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/ksfg-online/cabinet/08840972/gra_091827kagokomi.jpg?_ex=240x240",
    shopName: "\u30B0\u30E9\u30E2\u30A6\u30C7\u30A3\u30FC\u30BA\uFF08KSFG\uFF09",
    reviewAverage: 4.5,
    reviewCount: 190,
    targetTypes: ["SHFW", "SHFJ"]
  },
  {
    itemName: "\u9577\u5D0E\u8001\u8217 \u798F\u7802\u5C4B \u30AB\u30B9\u30C6\u30E9\u5C0F\u5207\u308C",
    itemPrice: 1998,
    itemUrl: "https://item.rakuten.co.jp/fukusaya-castella/fukusaya06/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5671b97e.9a348443.5671b97f.05de1b65/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffukusaya-castella%2Ffukusaya06%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/fukusaya-castella/cabinet/product/sao/imgrc0092404679.jpg?_ex=240x240",
    shopName: "\u798F\u7802\u5C4B",
    reviewAverage: 4.5,
    reviewCount: 480,
    targetTypes: ["STFJ", "STFW"]
  },
  {
    itemName: "\u8A33\u3042\u308A \u5FB3\u7528\u30AB\u30B9\u30C6\u30E9\u5207\u308A\u843D\u3068\u3057",
    itemPrice: 1080,
    itemUrl: "https://item.rakuten.co.jp/sento-coop/sento301n-2/",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/ichiba/5666f3c0.ffd35317.5666f3c1.947df289/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsento-coop%2Fsento301n-2%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/sento-coop/cabinet/goods/kiriotoshi/220412_p01.jpg?_ex=240x240",
    shopName: "\u5343\u982D",
    reviewAverage: 4,
    reviewCount: 130,
    targetTypes: ["STFJ", "STFW"]
  }
];
var KEYWORD_MAP = {
  "\u3044\u3061\u3054": ["\u3044\u3061\u3054", "\u82FA", "\u30B9\u30C8\u30ED\u30D9\u30EA\u30FC", "strawberry", "\u30A4\u30C1\u30B4"],
  "\u30C1\u30E7\u30B3": ["\u30C1\u30E7\u30B3", "\u30AB\u30AB\u30AA", "\u30B7\u30E7\u30B3\u30E9", "cocoa", "chocolate"],
  "\u62B9\u8336": ["\u62B9\u8336", "\u5B87\u6CBB", "\u30B0\u30EA\u30FC\u30F3\u30C6\u30A3\u30FC", "matcha"],
  "\u30C1\u30FC\u30BA": ["\u30C1\u30FC\u30BA", "cheese", "\u30D5\u30ED\u30DE\u30FC\u30B8\u30E5"],
  "\u30EC\u30E2\u30F3": ["\u30EC\u30E2\u30F3", "\u6AB8\u6AAC", "lemon", "\u30B7\u30C8\u30E9\u30B9"],
  "\u3075\u308F\u3075\u308F": ["\u3075\u308F\u3075\u308F", "\u30D5\u30EF\u30D5\u30EF", "\u30B7\u30D5\u30A9\u30F3", "\u30B9\u30D5\u30EC", "\u30B1\u30FC\u30AD", "\u30B9\u30DD\u30F3\u30B8", "\u30D0\u30A6\u30E0", "\u30D0\u30FC\u30E0"],
  "\u3082\u3063\u3061\u308A": ["\u3082\u3063\u3061\u308A", "\u30E2\u30C1\u30E2\u30C1", "\u3082\u3061", "\u5927\u798F", "\u6C42\u80A5", "\u308F\u3089\u3073", "\u56E3\u5B50"],
  "\u3068\u308D\u3068\u308D": ["\u3068\u308D\u3068\u308D", "\u30C8\u30ED\u30C8\u30ED", "\u30D7\u30EA\u30F3", "\u30EC\u30A2\u30C1\u30FC\u30BA", "\u751F", "\u30BC\u30EA\u30FC", "\u30B8\u30E5\u30EC"],
  "\u307B\u308D\u307B\u308D": ["\u307B\u308D\u307B\u308D", "\u30DB\u30ED\u30DB\u30ED", "\u30AF\u30C3\u30AD\u30FC", "\u30B5\u30D6\u30EC", "\u30DC\u30FC\u30ED", "\u30B9\u30CE\u30FC\u30DC\u30FC\u30EB"],
  "\u5065\u5EB7\u5FD7\u5411": ["\u5065\u5EB7", "\u30D8\u30EB\u30B7\u30FC", "\u304A\u304B\u3089", "\u30B0\u30EB\u30C6\u30F3\u30D5\u30EA\u30FC", "\u30D7\u30ED\u30C6\u30A4\u30F3", "\u30B0\u30E9\u30CE\u30FC\u30E9", "\u4F4E\u7CD6\u8CEA", "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF", "\u7121\u6DFB\u52A0"],
  "\u30D8\u30EB\u30B7\u30FC": ["\u5065\u5EB7", "\u30D8\u30EB\u30B7\u30FC", "\u304A\u304B\u3089", "\u30B0\u30EB\u30C6\u30F3\u30D5\u30EA\u30FC", "\u30D7\u30ED\u30C6\u30A4\u30F3", "\u30B0\u30E9\u30CE\u30FC\u30E9", "\u4F4E\u7CD6\u8CEA", "\u30AA\u30FC\u30AC\u30CB\u30C3\u30AF", "\u7121\u6DFB\u52A0"],
  "\u30B5\u30AF\u30B5\u30AF": ["\u30B5\u30AF\u30B5\u30AF", "\u30B5\u30AF\u30C3", "\u30D1\u30A4", "\u30BF\u30EB\u30C8", "\u30D3\u30B9\u30B1\u30C3\u30C8", "\u30E9\u30B9\u30AF"],
  "\u30B6\u30AF\u30B6\u30AF": ["\u30B6\u30AF\u30B6\u30AF", "\u30B6\u30AF\u30C3", "\u30CA\u30C3\u30C4", "\u30B0\u30E9\u30CE\u30FC\u30E9", "\u30AF\u30E9\u30F3\u30C1", "\u30A2\u30FC\u30E2\u30F3\u30C9"],
  "\u30AB\u30EA\u30AB\u30EA": ["\u30AB\u30EA\u30AB\u30EA", "\u30AB\u30EA\u30C3", "\u304B\u308A\u3093\u3068\u3046", "\u828B\u3051\u3093\u3074", "\u30C3\u30C4\u30A7\u30EB"],
  "\u30D1\u30EA\u30D1\u30EA": ["\u30D1\u30EA\u30D1\u30EA", "\u30D1\u30EA\u30C3", "\u30E2\u30CA\u30AB", "\u6700\u4E2D", "\u30C1\u30C3\u30D7\u30B9", "\u305B\u3093\u3079\u3044", "\u714E\u9905"]
};
var expandKeywords = (words) => {
  const expanded = [];
  words.forEach((w) => {
    expanded.push(w);
    Object.keys(KEYWORD_MAP).forEach((key) => {
      if (w.includes(key) || key.includes(w)) {
        expanded.push(...KEYWORD_MAP[key]);
      }
    });
  });
  return [...new Set(expanded)];
};
var shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
var getFallbackItems = (typeCode, minPrice, maxPrice, flavors = [], dislikes = []) => {
  const isSweet = typeCode.startsWith("S");
  const isJapanese = typeCode.endsWith("J");
  const isWestern = typeCode.endsWith("W");
  const expandedFlavors = expandKeywords(flavors);
  let availableItems = FALLBACK_ITEMS;
  if (dislikes.length > 0) {
    availableItems = availableItems.filter((item) => {
      const text = item.itemName.toLowerCase();
      return !dislikes.some((dis) => text.includes(dis.toLowerCase().trim()));
    });
  }
  if (minPrice !== void 0) {
    availableItems = availableItems.filter((item) => item.itemPrice >= minPrice);
  }
  if (maxPrice !== void 0) {
    availableItems = availableItems.filter((item) => item.itemPrice <= maxPrice);
  }
  availableItems = shuffleArray(availableItems);
  let matched = availableItems.filter((item) => item.targetTypes.includes(typeCode));
  if (matched.length < 6) {
    const sameCategory = availableItems.filter((item) => {
      const itemIsSweet = item.targetTypes.some((t) => t.startsWith("S"));
      const itemIsJapanese = item.targetTypes.some((t) => t.endsWith("J"));
      const itemIsWestern = item.targetTypes.some((t) => t.endsWith("W"));
      const sweetMatch = itemIsSweet === isSweet;
      const styleMatch = isJapanese && itemIsJapanese || isWestern && itemIsWestern;
      const notIncluded = !matched.some((m) => m.itemName === item.itemName);
      let flavorScore = 0;
      expandedFlavors.forEach((f) => {
        if (item.itemName.includes(f)) flavorScore += 15;
      });
      item._matchScore = (sweetMatch ? 10 : 0) + (styleMatch ? 100 : -100) + flavorScore + Math.random() * 5;
      return sweetMatch && notIncluded;
    });
    sameCategory.sort((a, b) => b._matchScore - a._matchScore);
    matched = [...matched, ...sameCategory];
  }
  matched.forEach((item) => {
    let score = 0;
    expandedFlavors.forEach((f) => {
      if (item.itemName.includes(f)) score += 20;
    });
    if (typeCode === "STFW" && (item.itemName.includes("\u30B7\u30D5\u30A9\u30F3") || item.itemName.includes("\u30D0\u30A6\u30E0") || item.itemName.includes("\u30D0\u30FC\u30E0"))) {
      score += 30;
    }
    if (item.targetTypes.includes(typeCode)) {
      score += 1e3;
      if (item.targetTypes.length === 1) score += 200;
      if (item.targetTypes.length === 2) score += 100;
    } else {
      const isJapanese2 = typeCode.endsWith("J");
      const isWestern2 = typeCode.endsWith("W");
      const itemIsJapanese = item.targetTypes.some((t) => t.endsWith("J"));
      const itemIsWestern = item.targetTypes.some((t) => t.endsWith("W"));
      if (isJapanese2 && itemIsJapanese || isWestern2 && itemIsWestern) {
        score += 500;
      } else {
        score -= 500;
      }
    }
    item._finalScore = score + Math.random() * 15;
  });
  if (minPrice && minPrice > 0 || maxPrice && maxPrice > 0) {
    const minP = minPrice || 0;
    const maxP = maxPrice || 999999;
    matched.sort((a, b) => {
      const aScore = a._finalScore || 0;
      const bScore = b._finalScore || 0;
      const aInPrice = a.itemPrice >= minP && a.itemPrice <= maxP;
      const bInPrice = b.itemPrice >= minP && b.itemPrice <= maxP;
      if (aInPrice && !bInPrice) return -1;
      if (!aInPrice && bInPrice) return 1;
      return bScore - aScore;
    });
  } else {
    matched.sort((a, b) => (b._finalScore || 0) - (a._finalScore || 0));
  }
  return matched.slice(0, 6).map(({ targetTypes, ...item }) => {
    const { _matchScore, _finalScore, ...cleanItem } = item;
    return cleanItem;
  });
};

// generate_ogp.ts
var publicDir = import_path.default.join(process.cwd(), "public");
if (!import_fs.default.existsSync(publicDir)) {
  import_fs.default.mkdirSync(publicDir, { recursive: true });
}
Object.values(SNACK_TYPES).forEach((typeInfo) => {
  const fallbacks = getFallbackItems(typeInfo.id, 0, 99999, [], []);
  const recommendedItem = fallbacks.length > 0 ? fallbacks[Math.floor(Math.random() * fallbacks.length)] : null;
  const isS = typeInfo.id.startsWith("S");
  const isT = typeInfo.id.charAt(1) === "T";
  const isF = typeInfo.id.charAt(2) === "F";
  const isJ = typeInfo.id.charAt(3) === "J";
  const sweetness = isS ? 80 : 20;
  const tenderness = isT ? 80 : 20;
  const freshness = isF ? 20 : 80;
  const japaneseness = isJ ? 80 : 20;
  const getBestPairName = (bestId) => {
    return SNACK_TYPES[bestId]?.characterName || "\u4E0D\u660E";
  };
  let recommendedHtml = "";
  if (recommendedItem) {
    recommendedHtml = `
      <div class="bg-stone-800 text-white rounded-3xl p-5 mb-8 shadow-md relative overflow-hidden">
        <div class="absolute -right-4 -top-4 text-6xl opacity-10">\u{1F381}</div>
        <h2 class="text-sm font-black mb-3 flex items-center gap-2 relative z-10 text-yellow-300">
          <span>\u2728</span> \u30EA\u30A2\u30EB\u795E\u304A\u3084\u3064\u53EC\u559A
        </h2>
        <p class="text-[10px] font-bold text-stone-300 mb-4 leading-relaxed relative z-10">
          \u3061\u306A\u307F\u306B\u3053\u306E\u30BF\u30A4\u30D7\u306B\u306F\u3001\u3053\u3046\u3044\u3046\u300E\u30EA\u30A2\u30EB\u795E\u304A\u3084\u3064\u300F\u304C\u53EC\u559A\u3055\u308C\u308B\u3088\uFF01
        </p>
        
        <a href="${recommendedItem.itemUrl}" target="_blank" rel="noopener noreferrer" class="block bg-white text-stone-800 rounded-2xl p-3 hover:scale-[1.02] transition-transform relative z-10">
          <div class="flex gap-3 items-center">
            <img src="${recommendedItem.imageUrl}" alt="\u304A\u3059\u3059\u3081\u304A\u3084\u3064" class="w-14 h-14 object-cover rounded-xl shadow-sm border border-stone-100 flex-shrink-0" onerror="this.src='https://placehold.co/100x100/f5f5f4/a8a29e?text=No+Image'" />
            <div class="flex-1 min-w-0">
              <p class="text-[11px] font-bold truncate leading-tight">${recommendedItem.itemName}</p>
              <p class="text-[9px] text-stone-500 mt-1 truncate">${recommendedItem.shopName}</p>
              <p class="text-xs font-black text-rose-600 mt-1">\xA5${recommendedItem.itemPrice.toLocaleString()}</p>
            </div>
          </div>
        </a>
      </div>
    `;
  }
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u304A\u3084\u306416\u30BF\u30A4\u30D7\u8A3A\u65AD\u7D50\u679C: ${typeInfo.characterName}</title>
  
  <meta property="og:title" content="\u304A\u3084\u306416\u30BF\u30A4\u30D7\u8A3A\u65AD\u7D50\u679C: ${typeInfo.characterName}" />
  <meta property="og:description" content="\u79C1\u306E\u8A3A\u65AD\u7D50\u679C\u306F\u300C${typeInfo.title}\u300D\u3067\u3057\u305F\uFF01\u3042\u306A\u305F\u306B\u3074\u3063\u305F\u308A\u306E\u304A\u3084\u3064\u3092\u898B\u3064\u3051\u3088\u3046\uFF01" />
  <meta property="og:image" content="https://oyatsu-matching.vercel.app/ogp/${typeInfo.id}.png" />
  <meta property="og:url" content="https://oyatsu-matching.vercel.app/${typeInfo.id}.html" />
  <meta name="twitter:card" content="summary_large_image" />

  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Zen Maru Gothic', sans-serif; }
  </style>
</head>
<body class="bg-[#faf9f7] min-h-screen text-stone-800 pb-24">
  <div class="max-w-md mx-auto bg-white min-h-screen shadow-xl relative pb-12 border-x border-stone-100">
    <!-- \u56FA\u5B9A\u30D8\u30C3\u30C0\u30FC -->
    <div class="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-pink-100 shadow-sm transition-all">
      <div class="px-4 py-3 flex flex-col items-center justify-between gap-3">
        <!-- \u30ED\u30B4 -->
        <a href="/" class="flex items-center gap-2 cursor-pointer group select-none hover:opacity-80 transition-opacity w-full">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 flex items-center justify-center text-white shadow-md shadow-pink-200 transform group-hover:scale-105 transition-transform shrink-0">
            <span class="text-xl">\u{1F36A}</span>
          </div>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-lg bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                \u304A\u3084\u3064\u30DE\u30C3\u30C1\u30F3\u30B0
              </span>
              <span class="bg-pink-100 text-pink-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-pink-200">
                16\u30BF\u30A4\u30D7\u8A3A\u65AD
              </span>
            </div>
            <p class="text-[10px] text-stone-500 font-medium mt-0.5 leading-tight">
              \u3042\u306A\u305F\u306B\u3074\u3063\u305F\u308A\u306E\u304A\u3084\u3064\u3092\u53EC\u559A\u30FB\u304A\u8FCE\u3048\u3067\u304D\u308B\u30B9\u30A4\u30FC\u30C4\u8A3A\u65AD
            </p>
          </div>
        </a>
      </div>
    </div>

    <!-- \u30D1\u30F3\u304F\u305A\u30EA\u30B9\u30C8 -->
    <nav class="px-5 pt-4 pb-2" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-2 text-[10px] text-stone-500 font-bold">
        <li><a href="/" class="hover:text-rose-500 transition-colors">\u30DB\u30FC\u30E0</a></li>
        <li><span class="text-stone-300">/</span></li>
        <li><a href="/" class="hover:text-rose-500 transition-colors">16\u30BF\u30A4\u30D7\u304A\u3084\u3064\u8A3A\u65AD</a></li>
        <li><span class="text-stone-300">/</span></li>
        <li class="text-stone-800" aria-current="page">${typeInfo.characterName}</li>
      </ol>
    </nav>

    <!-- \u30C8\u30C3\u30D7\u306E\u8A3A\u65AD\u30DC\u30BF\u30F3 -->
    <div class="px-5 mb-6 mt-2">
      <a href="/" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-extrabold px-6 py-4 rounded-2xl shadow-md hover:scale-[1.02] active:scale-95 transition-all gap-2 text-sm">
        <span>\u81EA\u5206\u306E\u304A\u3084\u3064\u30BF\u30A4\u30D7\u3092\u8A3A\u65AD\u3059\u308B\uFF01</span>
        <span>\u2728</span>
      </a>
      <p class="text-center text-[10px] font-bold text-stone-500 mt-3">
        \u203B\u3053\u308C\u306F\u304A\u53CB\u9054\u306E\u8A3A\u65AD\u7D50\u679C\u3067\u3059
      </p>
    </div>

    <div class="px-5">
      <div class="text-center mb-6 mt-4">
        <h1 class="text-2xl font-black text-stone-800 mb-3">${typeInfo.characterName}</h1>
        <p class="text-xs font-extrabold text-rose-600 px-4 py-1.5 bg-rose-50 rounded-full inline-block border border-rose-200 shadow-sm">
          ${typeInfo.title}
        </p>
      </div>

      <!-- OGP\u753B\u50CF\u30A8\u30EA\u30A2 (\u6BD4\u7387 1200:630) -->
      <div class="mb-8 rounded-3xl overflow-hidden shadow-md border-[4px] border-stone-50 bg-stone-100 aspect-[1200/630] flex items-center justify-center relative group">
        <img src="/ogp/${typeInfo.id}.png" alt="${typeInfo.characterName}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://placehold.co/1200x630/f5f5f4/a8a29e?text=No+Image'" />
      </div>

      <!-- \u30D7\u30ED\u30D5\u30A3\u30FC\u30EB -->
      <div class="bg-stone-50 rounded-3xl p-5 mb-6 border border-stone-100 shadow-sm relative overflow-hidden">
        <div class="absolute -right-4 -top-4 text-6xl opacity-10">\u{1F4D6}</div>
        <h2 class="text-sm font-black text-stone-700 mb-3 flex items-center gap-2 relative z-10">
          <span class="text-rose-500">\u25C6</span> \u3069\u3093\u306A\u30BF\u30A4\u30D7\uFF1F
        </h2>
        <p class="text-xs leading-loose text-stone-600 font-bold relative z-10">${typeInfo.description}</p>
        
        <div class="mt-4 pt-4 border-t border-stone-200">
          <p class="text-[10px] font-black text-stone-500 mb-2">\u7279\u5FB4</p>
          <div class="flex flex-wrap gap-1.5">
            ${typeInfo.personalityTraits.map((t) => `<span class="bg-white border border-stone-200 text-stone-700 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm">${t}</span>`).join("")}
          </div>
        </div>
      </div>
      
      <!-- \u304A\u3084\u3064\u30D1\u30E9\u30E1\u30FC\u30BF -->
      <div class="bg-stone-50 rounded-3xl p-5 mb-6 border border-stone-100 shadow-sm relative overflow-hidden">
        <div class="absolute -right-4 -top-4 text-6xl opacity-10">\u{1F4CA}</div>
        <h2 class="text-sm font-black text-stone-700 mb-4 flex items-center gap-2 relative z-10">
          <span class="text-amber-500">\u25C6</span> \u304A\u3084\u3064\u30D1\u30E9\u30E1\u30FC\u30BF
        </h2>
        <div class="space-y-4 relative z-10">
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>\u3057\u3087\u3063\u3071\u3044\u6D3E</span>
              <span>\u7518\u3044\u6D3E</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-pink-400 rounded-full" style="width: ${sweetness}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>\u304B\u305F\u3081\u6D3E</span>
              <span>\u3084\u308F\u3089\u304B\u6D3E</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-amber-400 rounded-full" style="width: ${tenderness}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>\u5E38\u6E29\u30DB\u30C3\u3068\u3059\u308B\u6D3E</span>
              <span>\u51B7\u305F\u3044\u6D3E</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-blue-400 rounded-full" style="width: ${freshness}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>\u6D0B\u98A8\u6D3E</span>
              <span>\u548C\u98A8\u6D3E</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-400 rounded-full" style="width: ${japaneseness}%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- \u30D9\u30B9\u30C8\u76F8\u6027 -->
      <div class="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-4 mb-6 border border-rose-100 shadow-sm flex items-center justify-between">
        <div>
          <p class="text-[10px] font-black text-rose-500 mb-0.5 flex items-center gap-1"><span>\u2764\uFE0F</span> \u30D9\u30B9\u30C8\u76F8\u6027</p>
          <p class="text-[13px] font-black text-stone-800">${getBestPairName(typeInfo.bestPairingTypeId)}</p>
        </div>
        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner border border-rose-100 overflow-hidden">
          <img src="/ogp/${typeInfo.bestPairingTypeId}.png" alt="" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f5f5f4/a8a29e?text=?'" />
        </div>
      </div>

      <!-- \u30EA\u30A2\u30EB\u795E\u304A\u3084\u3064\u53EC\u559A -->
      ${recommendedHtml}

      <div class="text-center mt-8">
        <a href="/" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-extrabold px-6 py-4 rounded-2xl shadow-md hover:scale-[1.02] active:scale-95 transition-all gap-2 text-sm">
          <span>\u81EA\u5206\u306E\u304A\u3084\u3064\u30BF\u30A4\u30D7\u3092\u8A3A\u65AD\u3059\u308B\uFF01</span>
          <span>\u2728</span>
        </a>
      </div>
    </div>
  </div>
</body>
</html>`;
  import_fs.default.writeFileSync(import_path.default.join(publicDir, `${typeInfo.id}.html`), html);
  console.log(`Generated ${typeInfo.id}.html`);
});
