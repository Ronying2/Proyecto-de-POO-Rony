function crearFormulario(){
    document.getElementById("formulario-contactos").innerHTML=`<div class="col-md-6 order-md-last d-flex">
    <form action="#" class="bg-white p-5 contact-form">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Nombre">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Correo">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Asunto">
      </div>
      <div class="form-group">
        <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Escribir Mensaje"></textarea>
      </div>
      <div class="form-group">
        <input type="submit" value="Enviar Mensaje" class="btn btn-primary py-3 px-5">
      </div>
    </form>

  </div>
`;
}
crearFormulario();