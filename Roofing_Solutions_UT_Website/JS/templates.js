class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    '<header id="header">
    <div id="header_logo">
      <img src="images/16052376-skyscraper-icon.jpg" alt="Logo" id="logo">
    </div>
    <div id="header_company">
      <h1 class="header_company_name headings">Roofing Solutions UT</h1>
    </div>
    <div id="header_menu">
        <nav id="navbar" class="hn_menu_menu">
          <div id="navbar-menu">
            <input type="checkbox" id="check">
            <label for="check" class="checkBtn">
              <i class="fa-solid fa-bars"></i>
            </label>
            <ul id="navbar-list">
              <li><a class="buttons" href="index.html">Home</a></li>
              <li class="has-dropdown"><a class="buttons" href="#">Cities</a>
                <ul class="dropdown">
                  <li class="dropdown-item"><a class="buttons" href="salt_lake.html">Salt Lake City</a></li>
                  <li class="dropdown-item"><a class="buttons" href="heber.html">Heber City</a></li>
                  <li class="dropdown-item"><a class="buttons" href="moab.html">Moab City</a></li>
                </ul>
              </li>
              <li><a class="buttons" href="jobs.html">Jobs</a></li>
              <li><a class="buttons" href="contacts.html">Contact</a></li>
            </ul>
          </div>
        </nav>
    </div>
  </header>'
  }
}

customElements.define('my-header', MyHeader)