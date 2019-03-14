Ajax.init();

var root = $("#app");
MatchesManager.init(root);

function matchesManagerMode() {
  MatchesManager.render();
}
function selectedMatchesManagerMode(selectedMatch) {
  SelectedMatchManager.init(root, selectedMatch);
}

function searchMode() {
  SearchManager.init(root);
}
