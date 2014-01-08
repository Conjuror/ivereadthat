var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var data = require('sdk/self').data;

pageListener = pageMod.PageMod({
    include: "https://www.facebook.com/*",
    contentScriptWhen: "end",
    contentScriptFile: [data.url("jquery.min.js"), data.url("read.js")]
});
