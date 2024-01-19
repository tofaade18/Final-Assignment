// let loginForm = document.getElementById("input-form");
// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let username = document.getElementById("name");
//     let rolee = document.getElementById("role");
//     // let namagua = document.getElementById("namagua")

// })
function profile() {
    const a = document.querySelector("#input-form")
    // const btn = document.getElementById("submitt")
    document.getElementById("namagua").innerHTML = document.getElementById("name").value
    document.getElementById("rolegua").innerHTML = document.getElementById("role").value
    document.getElementById("ft").innerHTML = document.getElementById("avail").value
    document.getElementById("ag").innerHTML = document.getElementById("Usia").value
    document.getElementById("xp").innerHTML = document.getElementById("thn").value
    document.getElementById("gm").innerHTML = document.getElementById("email").value
    const formm = document.querySelector("#containerfr")
    formm.remove();
    a.addEventListener("click", (e) => {
        e.preventDefault();
    })
}

// const nama = document.getElementById("namagua")
// const role = document.getElementById("rolegua")
// const ava = document.getElementById("ft")
// const age = document.getElementById("ag")
// const exp = document.getElementById("xp")
// const email = document.getElementById("gm")

// const inama = document.getElementById("name")
// const irole = document.getElementById("role")
// const iava = document.getElementById("avail")
// const iage = document.getElementById("Usia")
// const iexp = document.getElementById("thn")
// const iemail = document.getElementById("email")

// function clr() {
//     inama.value=""
//     irole.value=""
//     iava.value=""
//     iage.value=""
//     iexp.value=""
//     iemail.value=""
// }

// function change(a) {
//     nama.innerHTML = inama.value
//     role.innerText= irole.value
//     ava.innerText= iava.value
//     age.innerText= iage.value
//     exp.innerText= iexp.value
//     email.innerText= iemail.value
// }
// const btn = document.getElementById("submitt")
// btn.addEventListener("click", () => {
//     const a = {
//         namaa : inama.value,
//         rolee : irole.value,
//         availl : iava.value,
//         agee : iage.value,
//         expp : iexp.value,
//         emaill : iemail.value
//     }
//     change(a)
//     clr()
// })

// function profile() {
//     const a = document.querySelector("#input-form")
//     document.getElementById("namagua").innerHTML = document.getElementById("name").value
//     document.getElementById("rolegua").innerHTML = document.getElementById("role").value
//     document.getElementById("ft").innerHTML = document.getElementById("avail").value
//     document.getElementById("ag").innerHTML = document.getElementById("Usia").value
//     document.getElementById("xp").innerHTML = document.getElementById("thn").value
//     document.getElementById("gm").innerHTML = document.getElementById("email").value
//     const formm = document.querySelector("#containerfr")
//     formm.remove();
//     return false;
// }

// function ubah(profil) {
//     nama.innerHTML = a.nama
    // if (a.nama != "") {;
    // }
    // else {
    //     nama.innerText = a.nama
    // }

// let buttonme = document.getElementById("button-me")
// console.log(buttonme);
// buttonme.addEventListener("mouseover", function(){
//     console.log("Ya Klik Saya");
// })




