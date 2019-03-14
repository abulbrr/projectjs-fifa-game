MatchesManager = {};

MatchesManager.matches = null;
MatchesManager.rootElement = null;

MatchesManager.init = root => {
  MatchesManager.rootElement = root;

  Ajax.get(URLS.MATCHES, response => {
    MatchesManager.matches = response;
    MatchesManager.render();
  });
};

MatchesManager.render = () => {
  MatchesManager.rootElement.innerHTML = "";
  for (match of MatchesManager.matches) {
    let element = createElement(
      "button",
      {
        class: "btn-large col s12",
        id: match.fifa_id,
        onclick: "MatchesManager.onMatchClicked(this.id)"
      },
      {},
      `${match.home_team.country} VS ${match.away_team.country}`
    );
    MatchesManager.rootElement.appendChild(element);
  }
};

MatchesManager.onMatchClicked = fifaId => {
  let selectedMatch = MatchesManager.matches.find(m => m.fifa_id == fifaId);
  selectedMatchesManagerMode(selectedMatch);
};
