let qrText = document.getElementById("qr-text");
let sizes =  document.getElementById("sizes");
let qrContainer = document.querySelector(".qr-body");
let Generate = document.getElementById("Generate");
let Download = document.getElementById("Download");
let size = sizes.value;

let isInputEmpty = ()=>{
    if(qrText.value.length>0)
         generateQrcode();
    else{
        alert("Please Enter Text or URL to generate QR code");
    }
}

Generate.addEventListener('click',(e)=>{
    e.preventDefault();
    isInputEmpty();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isInputEmpty();
});

Download.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        Download.setAttribute("href", imgAtrr);
    }
    else{
        Download.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function generateQrcode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height:size,
        width:size,
        colorLight: "#fff",
        colorDark: "#000"
    });
}
