var data = require("sdk/self").data;

var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("get-text.js")
});

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "show-modal",
  label: "FireComment",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  text_entry.show();
}

text_entry.on("show", function() {
  text_entry.port.emit("show");
});

text_entry.port.on("text-entered", function (text) {
  console.log(text);
  text_entry.hide();
});
