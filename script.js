// When the user clicks on an option, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function pageload() {
      var version = "No Version Selected";
      var edition = "Select a Client Below";
      document.getElementById("version").innerHTML = version;
      document.getElementById("edition").innerHTML = edition;
      document.getElementById("launchButton").href = "#"; // Disable launch button initially
    }

    function onetwelvejs() {
      updateUI("Launch 1.12.2", "Eaglercraft - JS", "clients/1.12.2/");
    }

    function onetwelvewasm() {
      updateUI("Launch 1.12.2", "Eaglercraft - WASM", "clients/1.12.2-wasm/");
    }

    function oneeightjs() {
      updateUI("Launch 1.8.8", "Eaglercraft - JS", "clients/1.8.8/");
    }

    function oneeightwasm() {
      updateUI("Launch 1.8.8", "Eaglercraft - WASM", "clients/1.8.8-wasm/");
    }

    function onefive() {
      updateUI("Launch 1.5.2", "Eaglercraft - Default", "clients/1.5.2/");
    }

    function oneseventhree() {
      updateUI("Launch Beta 1.7.3", "Eaglercraft - Default", "clients/beta-1.7.3/web/");
    }

    function updateUI(versionText, editionText, linkHref) {
      document.getElementById("version").innerHTML = versionText;
      document.getElementById("edition").innerHTML = editionText;
      document.getElementById("launchButton").href = linkHref;
    }

