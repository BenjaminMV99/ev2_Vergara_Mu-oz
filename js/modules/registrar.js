export default {

    alumnos: [
        {alumno: "pablo rojas", puntaje: 9, resultado:"bueno"},
    ],
data:`
    
<h1>Auntor: Benjamin Muñoz</h1>

<h3>Alumno</h3>
<input type="text"  id="txt">
<br><br>

<h3>puntaje</h3>
<select name="" id="ptn">
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
<br>
<br>
<button onclick="agregar()">registrar</button>
<br>
<br>
<div id="resp"></div>

`,

registrar: function () {
    var res = document.getElementById("resp");
    var tabla =`
    <table border="1" width="300">
    <tr>
      <th>alumno</th>
      <th>puntaje</th>
      <th>resultado</th>
    </tr>
    `;
    this.alumnos.forEach(item =>{
        tabla += `
        <tr>
            <td>${item.alumno}</td>
            <td>${item.puntaje}</td>
            <td>${item.resultado}</td>
        </tr>
        
        `;
    }); 
        tabla += "</table>";


        res.innerHTML = tabla;
 
},
agregar: function() {

    var nombre = document.getElementById("txt").value;
    var puntaje = document.getElementById("ptn").value;
    


 if (nombre.value != "" || puntaje.value != ""){
    var obj ={
        nombre:nombre.value,
        puntaje:puntaje.value,
    };
    this.alumnos.push(obj);
    this.registrar();

    nombre.value="";
    puntaje.value="";
 }else{
    alert("debe ingrear el nombre y el puntaje");
 }
},
};