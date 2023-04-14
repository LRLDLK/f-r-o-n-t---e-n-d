function mostrar(idMuestra, idOculta) {
  document.getElementById(idMuestra).style.display = 'block';
  document.getElementById(idOculta).style.display = 'none';
}

function reserva(nombre, asistentes, correo) {
  return alert(
    'Muchas gracias ' +
      nombre +
      ' hemos recibido la orden de reserva para ' +
      asistentes +
      ' persona(s).  Enviaremos el codigo de reserva al correo ' +
      correo
  );
}

function contacta(nombre, motivo, correo) {
  return alert(
    'Muchas gracias ' +
      nombre +
      ' hemos recibido su ' +
      motivo +
      '. Enviaremos una pronta respuesta al correo ' +
      correo
  );
}

const btnEnviarReserva = document.getElementById('submitReserva');

const validate = (event) => {
  event.preventDefault();
  const nombre = document.getElementById('name2');
  const correo = document.getElementById('exampleInputEmail12');
  const telefono = document.getElementById('phone2');
  const fecha = document.getElementById('date');
  const hora = document.getElementById('time');
  const asistentes = document.getElementById('asistentes');

  if (
    nombre.value == null ||
    nombre.value.length == 0 ||
    /^\s*$/.test(nombre.value)
  ) {
    alert('Por favor, escriba su nombre.');
    nombre.focus();
    return false;
  }

  if (correo.value === '' || /^\s*$/.test(correo.value)) {
    alert('Por favor, escriba su correo electrónico');
    correo.focus();
    return false;
  }

  if (!emailValido(correo.value)) {
    alert('Por favor, escriba un correo electrónico válido');
    correo.focus();
    return false;
  }

  if (
    telefono.value == null ||
    telefono.value.length == 0 ||
    /^\s*$/.test(telefono.value)
  ) {
    alert('Por favor, escriba su teléfono');
    telefono.focus();
    return false;
  }

  if (!telValido(telefono.value)) {
    alert('Por favor, escriba un teléfono válido');
    telefono.focus();
    return false;
  }

  if (fecha.value == '') {
    alert('Por favor, elija una fecha');
    fecha.focus();
    return false;
  }

  if (hora.value == '') {
    alert('Por favor, elija una hora');
    hora.focus();
    return false;
  }

  if (
    asistentes.value == null ||
    asistentes.value < 1 ||
    /^\s*$/.test(asistentes.value)
  ) {
    alert('Por favor, escriba cantidad de asistentes');
    asistentes.focus();
    return false;
  }

  reserva(nombre.value, asistentes.value, correo.value);
  return true; //Se pueden enviar los datos del formulario
};

const emailValido = (correo) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
};

const telValido = (telefono) => {
  return /^\d{9}$/.test(telefono);
};

btnEnviarReserva.addEventListener('click', validate);

const btnEnviarComunica = document.getElementById('submitComunica');

const validates = (event) => {
  event.preventDefault();
  const nombre = document.getElementById('name');
  const correo = document.getElementById('exampleInputEmail1');
  const telefono = document.getElementById('phone');
  const comentario = document.getElementById('floatingTextarea2');
  const motivo = document.getElementById('selects');

  if (
    nombre.value == null ||
    nombre.value.length == 0 ||
    /^\s*$/.test(nombre.value)
  ) {
    alert('Por favor, escriba su nombre.');
    nombre.focus();
    return false;
  }

  if (correo.value === '' || /^\s*$/.test(correo.value)) {
    alert('Por favor, escriba su correo electrónico');
    correo.focus();
    return false;
  }

  if (!emailValido(correo.value)) {
    alert('Por favor, escriba un correo electrónico válido');
    correo.focus();
    return false;
  }

  if (
    telefono.value == null ||
    telefono.value.length == 0 ||
    /^\s*$/.test(telefono.value)
  ) {
    alert('Por favor, escriba su teléfono');
    telefono.focus();
    return false;
  }

  if (!telValido(telefono.value)) {
    alert('Por favor, escriba un teléfono válido');
    telefono.focus();
    return false;
  }

  if (
    comentario.value == null ||
    comentario.value.length == 0 ||
    /^\s*$/.test(comentario.value)
  ) {
    alert('Por favor, escriba un comentario');
    comentario.focus();
    return false;
  }

  if (
    motivo.value == 'Elegir Motivo' ||
    motivo.selectedIndex.length == 0 ||
    /^\s*$/.test(motivo.value)
  ) {
    alert('Por favor, elija un motivo');
    motivo.focus();
    return false;
  }

  contacta(nombre.value, motivo.value, correo.value);
  return true; //Se pueden enviar los datos del formulario
};

btnEnviarComunica.addEventListener('click', validates);

$(document).ready(function () {
  $('#tarj1').click(function () {
    $('#exampleModal').modal('show');
  });
});

$(document).ready(function () {
  $('#tarj2').click(function () {
    $('#exampleModal2').modal('show');
  });
});

$(document).ready(function () {
  $('#tarj3').click(function () {
    $('#exampleModal3').modal('show');
  });
});

$(document).ready(function () {
  $('#nosotros').click(function () {
    $('#exampleModal4').modal('show');
  });
});
