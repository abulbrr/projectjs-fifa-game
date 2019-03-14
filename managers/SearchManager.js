SearchManager = {};

SearchManager.initRequests = 0;
SearchManager.countries = null;
SearchManager.matches = null;
SearchManager.groups = null;

SearchManager.searchHtml = `
<div id="loader" class="progress">
<div class="indeterminate"></div>
</div>



<div id="search" >
<form class="col s6">
<div class="row">

<select id="groupSelect" class="browser-default">
<label "" disabled selected>Groups</label>
</select>
<br><br>

<select id="countriesSelect" class="browser-default">
<label "" disabled selected>Country</label>
</select>
<br><br>

<select id="locationSelect" class="browser-default">
<label "" disabled selected>Loaction</label>
</select>

<br><br>
</div>
<button class="btn" onclick="SearchManager.search()" >Search</button>
</form>
<div id="data"></div>
</div>
`;

SearchManager.isLoading = true;

SearchManager.matches = null;
SearchManager.rootElement = null;

SearchManager.init = root => {
  SearchManager.rootElement = root;
  SearchManager.render();
  SearchManager.createSelects();
};

SearchManager.render = () => {
  SearchManager.rootElement.innerHTML = SearchManager.searchHtml;
};

SearchManager.search = () => {
  var country = $("#countriesSelect").value;
  var location = $("#locationSelect").value;
  var group = $("#groupSelect").value;
  var html = "";

  var data = $("#data");

  var selectedCountry = SearchManager.countries.find(
    m => m.fifa_code == country
  );

  var selectedLocation = SearchManager.matches.find(
    m => m.location == location
  );
  Ajax.get(URLS.COUNTRY + country, response => {
    console.log(response);
    html += selectedCountry.country + " Games: ";
    for (match of response) {
      html += `<br>
      ${match.away_team.country} ${match.away_team.goals} ${
        match.home_team.country
      }
       ${match.home_team.goals}
       
      `;
    }
    data.innerHTML = html;
  });
  var selectedGroup = SearchManager.groups.find(m => m.letter == group);

  console.log(html);
  console.log(selectedCountry.country);
};

SearchManager.createSelects = () => {
  SearchManager.setLoadingScreen(true);
  Ajax.get(
    URLS.TEAMS,
    response => {
      SearchManager.countries = response;
      SearchManager.fillTeamsSelect(response);
      SearchManager.showIfReady();
    },
    err => {
      SearchManager.showIfReady();
    }
  );

  Ajax.get(
    URLS.MATCHES,
    response => {
      SearchManager.matches = response;
      SearchManager.fillLocationSelect(response);
      SearchManager.showIfReady();
    },
    err => {
      SearchManager.showIfReady();
    }
  );

  Ajax.get(
    URLS.GROUPS,
    response => {
      SearchManager.groups = response;
      SearchManager.fillGroupsSelect(response);
      SearchManager.showIfReady();
    },
    err => {
      SearchManager.showIfReady();
    }
  );
};

SearchManager.setLoadingScreen = visible => {
  let loader = $("#loader");
  let search = $("#search");
  if (visible) {
    loader.style.visibility = "visible";
    search.style.visibility = "hidden";
  } else {
    search.style.visibility = "visible";
    loader.style.visibility = "hidden";
  }
};

SearchManager.showIfReady = () => {
  let count = ++SearchManager.initRequests;
  console.log(count);

  if (count == 3) {
    SearchManager.initRequests = 0;
    SearchManager.setLoadingScreen(false);
  }
};

SearchManager.fillTeamsSelect = response => {
  var teamsSelect = $("#teamSelect");
  for (match of response) {
    countriesSelect.innerHTML += `<option value="${match.fifa_code}">${
      match.country
    }</option>`;
  }
};

SearchManager.fillLocationSelect = response => {
  var locationSelect = $("#locationSelect");
  locationSelect.innerHTML = "";
  for (match of response) {
    locationSelect.innerHTML += `<option value="${match.location}">${
      match.location
    }</option>`;
  }
};

SearchManager.fillGroupsSelect = response => {
  var groupSelect = $("#groupSelect");
  groupSelect.innerHTML = "";
  for (group of response) {
    console.log(group.letter);
    groupSelect.innerHTML += `<option value="${group.letter}">${
      group.letter
    }</option>`;
  }
};
