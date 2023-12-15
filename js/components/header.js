class Header extends HTMLElement {
  constructor() {
    super();
    this.attributesComponents = [
      this.name = 'Ingresa tu titulo',
      this.classname = 'navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark'
    ];
  }
  static get observedAttributes(){ return ['name', 'classname']; }
  attributeChangedCallback(attribute, _, newAttr){
    this.attributesComponents = [...this.attributesComponents, attribute]
    this[attribute] = newAttr;
  }

    connectedCallback() {
      this.innerHTML = `
      <nav class="${this.classname}">
          <div class="container-fluid">
            <a class="navbar-brand" id="url" href="/index.html">
              <img src="assets/movida-logo-light.png" alt="${this.name}" width="32" height="32">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                
                <li class="nav-item">
                  <a id="url" class="nav-link" aria-current="page" href="/index.html">Incio</a>
                </li>
                
                <li class="nav-item">
                  <a id="url" class="nav-link" href="/category.html">Categorias</a>
                </li>
                
                <li class="nav-item">
                  <a id="url" class="nav-link" href="/ubication.html">Ubicaciones</a>
                </li>
                
                <li class="nav-item">
                  <a id="url" class="nav-link" href="/commission.html">Comisiones</a>
                </li>
                
                <li class="nav-item">
                  <a id="url" class="nav-link" href="/country.html">Paises</a>
                </li>

                <li class="nav-item">
                  <a id="url" class="nav-link" href="/missionary.html">Misioneros</a>
                </li>           
               
                <li class="nav-item">
                  <a id="url" class="nav-link" href="/users.html">Usuarios</a>
                </li>           
                
              </ul>
            </div>
            
            
            
            <div class="d-flex">
                <ul class="navbar-nav me-auto mb-2  mb-lg-0">
                  <li class="nav-item dropdown">
                    <a id="url" class="nav-link dropdown-toggle" name="url-login" href="/login.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown link
                    </a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item disabled" href="#">Editar</a></li>
                    <li><a class="dropdown-item" onclick="closeSession()">Cerrar Sesion</a></li>
                    </ul>
                  </li>
              
                  </ul>
                </div>
          </div>
        </nav>
      `;
    }
}

customElements.define('header-component', Header);