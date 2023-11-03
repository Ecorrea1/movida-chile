class ModalOptions extends HTMLElement {
    constructor() {
        super();
        this.attributesComponents = [
          this.name = 'Ingresa tu titulo',
          this.classname = 'modal-dialog',
          this.titleModal = 'Datos de Registro'
        ];
    }

    static get observedAttributes(){ return ['name', 'classname', 'titleModal']; }

  attributeChangedCallback(attribute, _, newAttr){
    this.attributesComponents = [...this.attributesComponents, attribute]
    this[attribute] = newAttr;
  }

    connectedCallback() {
        this.innerHTML = `
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="${this.classname}">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${this.titleModal}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

                <form class="row g-2 container" id="createRegister">
                  <div class="col-md-12">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control text-uppercase" id="name" name="name" placeholder="Ingrese nombre" required>
                    <div id="divErrorName"></div> 
                  </div>
                  <div class="col-md-12">
                      <label for="description" class="form-label">Descripcion</label>
                      <textarea class="form-control" placeholder="Ingresa la descripcion de este material" id="description"></textarea>
                      <label for="floatingTextarea2">Ingresa la descripcion</label>
                      <div id="divErrorDescription"></div>                  
                    </div>
                  <div class="col-md-12">
                    <label for="enabled" class="form-label">Activo</label>
                    <input type="number" min="0" max="1" class="form-control" id="enabled" name="enabled" value="1" required>
                    <div id="divErrorEnabled"></div>
                  </div>

                  <input type="text" class="d-none" id="uid" name="uid">

                  <div class="col-sm-12 d-grid gap-2">
                    <button class="btn btn-primary btn-lg" type="submit" id="save_register">Crear Registro</button>
                    <button class="btn btn-primary btn-lg d-none" type="button" id="edit_register">Editar Registro</button>
                    <!-- <input class="btn btn-secondary btn-lg" type="reset" id="btnReset"> -->
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
        `;
    }
}

customElements.define('modal-options-component', ModalOptions);