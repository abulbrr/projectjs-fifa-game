SelectedMatchManager = {};

SelectedMatchManager.rootElement = null;
SelectedMatchManager.match = null;
SelectedMatchManager.init = (root, selectedMatch) => {
  console.log("initing");
  root.innerHTML = "";
  //   let element = createElement("div", { class: "row" });
  //   root.appendChild(element);
  SelectedMatchManager.rootElement = root;
  SelectedMatchManager.match = selectedMatch;
  SelectedMatchManager.render();
};

SelectedMatchManager.render = () => {
  console.log(SelectedMatchManager.match);
  let match = SelectedMatchManager.match;
  let home = match.home_team;
  let away = match.away_team;
  root.innerHTML = ` ${home.country} - ${home.goals} | ${away.country} - ${
    away.goals
  } 
   <br>Attended: ${match.attendance}
   <br>Venue: ${match.venue}`;
};

SelectedMatchManager.onMatchClicked = fifaId => {
  let selectedMatch = SelectedMatchManager.matches.filter(
    m => m.fifa_id == fifaId
  );
  console.log(selectedMatch);
};
