// JavaScript source code

function saveTextAsFile() {
    var nombre = document.getElementById("nombre").value;
    var materia1 = document.getElementById("mat1").value;
    var materia2 = document.getElementById("mat2").value;
    var materia3 = document.getElementById("mat3").value;
    var materia4 = document.getElementById("mat4").value;
    var Calificacion1 = document.getElementById("cal1").value;
    var Calificacion2 = document.getElementById("cal2").value;
    var Calificacion3 = document.getElementById("cal3").value;
    var Calificacion4 = document.getElementById("cal4").value;
    var Calificacion5 = document.getElementById("cal5").value;
    var Calificacion6 = document.getElementById("cal6").value;
    var Calificacion7 = document.getElementById("cal7").value;
    var Calificacion8 = document.getElementById("cal8").value;
    var Calificacion9 = document.getElementById("cal9").value;
    var Calificacion10 = document.getElementById("cal10").value;
    var Calificacion11 = document.getElementById("cal11").value;
    var Calificacion12 = document.getElementById("cal12").value;


    var textToSave = nombre + "\n" + materia1 + "\n" + materia2 + "\n" + materia3 + "\n" + materia4
        + "\n" + Calificacion1 + "\n" + Calificacion2 + "\n" + Calificacion3
        + "\n" + Calificacion4 + "\n" + Calificacion5 + "\n" + Calificacion6
        + "\n" + Calificacion7 + "\n" + Calificacion8 + "\n" + Calificacion9
        + "\n" + Calificacion10 + "\n" + Calificacion11 + "\n" + Calificacion12;
    var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("guardar").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function loadFileAsText() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}