// console.log("JS LOADED");

// const  button = document.getElementById("btn")
// const result = document.getElementById("result")
// const input = document.getElementById("input")

// button.addEventListener("click", callApi);

// async function callApi()
// {
//     console.log("Button clicked");

//     const text = input.value.trim()

//     if(text==="")
//     {
//         result.innerText = "Enter the text you want to see in QR code "
//         return;
//     }

//     result.innerHTML = "Loading..."

//     try
//     {
//     const res = await fetch(
//         "https://api.api-ninjas.com/v1/qrcode?data=Manikanta+erripuku&format=png",
//         {
//             method : "GET",
//             headers : {"X-Api-Key" : "q1uPVSG3DWpSxsFG7Ao1FByQlN8nEx0Nj6pBXBDa"}
//         });

//         console.log(res.status);

//         if(!res.ok)
//             throw new Error("API NOT WORKING");

//         const data = await res.blob();
//         const imageURL = URL.createObjectURL(data)
//         generateQR(imageURL)
// }
// catch(error)
// {
//     result.innerText = "Generation Interrupted!"
//     console.error(error)
// }
// }


// function generateQR(qr)
// {
//     result.innerText = ""

//     const img = document.createElement("img")
//     img.src = qr
//     img.style.width = "200px";
//     result.append(img)

// }


const button = document.getElementById("btn");
const result = document.getElementById("result");
const input = document.getElementById("input");

button.addEventListener("click", generateQR);

function generateQR() {

    const text = input.value.trim();

    if (text === "") {
        result.innerText = "Enter the text you want in the QR code";
        result.style.color ="red"
        return;
    }

    const qrUrl =
        `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

    result.innerHTML = `<img src="${qrUrl}" alt="QR Code" />`;
}
