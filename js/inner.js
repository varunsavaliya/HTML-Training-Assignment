let actualBtn = document.getElementById("getFile");
let fileName = document.getElementById("fileName");
console.log(fileName.innerText)
actualBtn.addEventListener("change", function () {
    fileName.innerText = this.files[0].name;
})