export default {
  Alumnos: [
    { alumno: "Pablo Rojas", puntaje: 9, resultado: "Bueno" },
  ],
  data: `
    <h1>Registro de Alumnos</h1>
    Alumno
    <br>
    <input id="txt1" type="text" />
    <br><br>
    Puntaje
    <br>
    <select id="txt2">
        <option value="">Seleccione </option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    Resultado
    <br>
    <br>  
    <input id="txt3" type="text" />
    <br><br>
    <br>
    <br>  
    <button onclick='registrar()'>registrar</button>
    <br>
    <br> 
    <div id="result"></div>
  `,

  registrar: function () {
    var result = document.getElementById("result");
    var tabla = `
            <table border='1'>
                <tr>
                    <th>Alumno</th>
                    <th>Puntaje</th>
                    <th>Resultado</th>
                </tr>
      `;

    this.Alumnos.forEach((item) => {
      tabla += `
            <tr>
              <td>${item.alumno}</td>
              <td>${item.puntaje}</td>
              <td>${item.resultado}</td>
            </tr>
          `;
    });

    tabla += "</table>";

    result.innerHTML = tabla;
  },
  agregar: function () {
    var alumno = document.getElementById("txt1");
    var puntaje = document.getElementById("txt2");
    var resultado = document.getElementById("txt3");

    if (alumno.value != "" && puntaje.value != "" && resultado.value != "") {
      var obj = {
        alumno: alumno.value,
        puntaje: puntaje.value,
        resultado: resultado.value,
      };
      this.Alumnos.push(obj);
      this.cargar();
      alumno.value = "";
      puntaje.value = "";
      resultado.value = "";
    } else {
      alert("complete los campos");
    }
  },
};
