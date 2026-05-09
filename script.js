const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");
const typingText = document.getElementById("typingText");

const message = `Mãe,
obrigado por tudo que você faz todos os dias.

Obrigado pelo carinho, pela força,
pela paciência e por nunca desistir de nós.

Você é meu porto seguro,
minha inspiração
e a pessoa mais guerreira que eu conheço.

Eu te amo infinitamente. ❤️`;

let index = 0;
let typingInterval;

function typeWriter(){
    clearInterval(typingInterval);
    typingText.innerHTML = "";
    index = 0;
    typingInterval = setInterval(() => {
        if(index < message.length){
            typingText.innerHTML += message.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 30);
}

openBtn.addEventListener("click", () => {
    card.classList.add("flip");
    setTimeout(() => {
        typeWriter();
    }, 500);
});

backBtn.addEventListener("click", () => {
    card.classList.remove("flip");
    clearInterval(typingInterval);
});