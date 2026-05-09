const card = document.getElementById("card");

const openBtn = document.getElementById("openBtn");

const backBtn = document.getElementById("backBtn");

const typingText = document.getElementById("typingText");

const message =
`Mãe,

obrigado por tudo que você faz todos os dias.

Obrigado pelo carinho, pela força,
pela paciência e por nunca desistir de mim.

Você é meu porto seguro,
minha inspiração
e uma das pessoas mais importantes da minha vida.

Eu te amo infinitamente. ❤️`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        typingText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 35);
    }
}

openBtn.addEventListener("click", () => {

    card.classList.add("flip");

    typingText.innerHTML = "";

    i = 0;

    setTimeout(typeWriter, 700);
});

backBtn.addEventListener("click", () => {

    card.classList.remove("flip");
});