
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("semestres-container");
  const progreso = JSON.parse(localStorage.getItem("progreso")) || {};

  for (const [semestre, cursosSemestre] of Object.entries(cursos)) {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    cursosSemestre.forEach(curso => {
      const divCurso = document.createElement("div");
      divCurso.className = "curso";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = curso.id;
      checkbox.checked = !!progreso[curso.id];
      checkbox.disabled = !curso.requisitos.every(r => progreso[r]);

      checkbox.addEventListener("change", () => {
        progreso[curso.id] = checkbox.checked;
        localStorage.setItem("progreso", JSON.stringify(progreso));
        location.reload();
      });

      const label = document.createElement("label");
      label.htmlFor = curso.id;
      label.innerText = curso.nombre;

      divCurso.appendChild(checkbox);
      divCurso.appendChild(label);
      div.appendChild(divCurso);
    });

    container.appendChild(div);
  }
});

function resetProgreso() {
  localStorage.removeItem("progreso");
  location.reload();
}
