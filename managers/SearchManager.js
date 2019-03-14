SearchManager = {};
SearchManager.loader = `<div class="progress">
<div class="indeterminate"></div>
</div>`;

SearchManager.searchHtml = `
<form class="col s6">
<div class="row">
<div class="input-field col s12">
<input  id="country" type="text">
<label for="country">Country</label>
</div>
<div class="input-field col s6">
<input id="last_name" type="text" class="validate">
<label for="last_name">Last Name</label>
</div>
<div class="input-field col s6">
<input id="last_name" type="text" class="validate">
<label for="last_name">Last Name</label>
</div>
</div>
<button class="btn" onclick="SearchManager.search()" >Search</button>
</form>
`;

SearchManager.isLoading = false;

SearchManager.matches = null;
SearchManager.rootElement = null;

SearchManager.init = root => {
  SearchManager.rootElement = root;
  SearchManager.render();
};

SearchManager.render = () => {
  var html;
  if (SearchManager.isLoading) html = SearchManager.loader;
  else html = SearchManager.searchHtml;

  SearchManager.rootElement.innerHTML = html;
};

SearchManager.search = () => {
  var country = $("#country");
  //   if (!country.value) return;
  console.log(this);

  Ajax.get(URLS.COUNTRY + country, response => {
    console.log(response);
    SearchManager.isLoading = false;
    SearchManager.render();
  });
  SearchManager.isLoading = true;
  SearchManager.render();
};
