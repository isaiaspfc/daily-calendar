const participants = ["Isaìas", "Marcos", "Arthur", "Gabriel Oliveira", "Julio", "Madu", "Nátallya", "Pedro Paulo", "Caliel", "Rodrigo Marden", "Sérgio", "Gabriel Messias", "Tahis", "Waltenne"]; // Lista original
const participantsReversed = ["Waltenne", "Tahis", "Gabriel Messias", "Sérgio", "Rodrigo Marden", "Caliel", "Pedro Paulo", "Nátallya", "Madu", "Julio", "Gabriel Oliveira", "Arthur", "Marcos", "Isaìas"]; // Lista invertida

const feriados = ["2024-12-25", "2024-01-01"]; // Adicione feriados aqui
const today = new Date();

// Função para checar se a data é final de semana
function isWeekend(date) {
    const day = date.getDay();
    return day === 6 || day === 0; // Sábado ou domingo
}

// Função para checar se a data é feriado
function isHoliday(date) {
    const dateStr = date.toISOString().split('T')[0];
    return feriados.includes(dateStr);
}

// Função para obter o próximo dia útil
function getNextWorkday(date) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);

    while (isWeekend(newDate) || isHoliday(newDate)) {
        newDate.setDate(newDate.getDate() + 1);
    }

    return newDate;
}

// Função para obter o dia anterior
function getPreviousWorkday(date) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);

    while (isWeekend(newDate) || isHoliday(newDate)) {
        newDate.setDate(newDate.getDate() - 1);
    }

    return newDate;
}

// Função para encontrar o apresentador de acordo com a data
function getPresenter(date) {
    const daysSinceStart = Math.floor((date - new Date('2024-01-01')) / (1000 * 60 * 60 * 24));
    const presenterIndex = daysSinceStart % participants.length;
    console.log("hoje", participants[presenterIndex])
    return participants[presenterIndex];
}

function getPresenterReserve(date) {
    const daysSinceStart = Math.floor((date - new Date('2024-01-01')) / (1000 * 60 * 60 * 24));
    const presenterIndex = daysSinceStart % participantsReversed.length;
    console.log("hoje", participantsReversed[presenterIndex])
    return participantsReversed[presenterIndex];
}

const presenterToday = getPresenter(today);
const presenterTodayReserve = getPresenterReserve(today);
const presenterTomorrow = getPresenter(getNextWorkday(today));
const presenterTomorrowReserve = getPresenterReserve(getNextWorkday(today));
const presenterYesterday = getPresenter(getPreviousWorkday(today));
const presenterYesterdayReserve = getPresenterReserve(getPreviousWorkday(today));


// Exibe os dados na interface
document.getElementById('yesterday-presenter').innerText = "1. " + presenterYesterday || 'N/A';
document.getElementById('today-presenter').innerText = "1. " + presenterToday;
document.getElementById('tomorrow-presenter').innerText = "1. " + presenterTomorrow;

document.getElementById('yesterday-presenter-reserve').innerText = "2. " + presenterYesterdayReserve || 'N/A';
document.getElementById('today-presenter-reserve').innerText = "2. " + presenterTodayReserve;
document.getElementById('tomorrow-presenter-reserve').innerText = "2. " + presenterTomorrowReserve;


// Função para atualizar as abas e o fundo
const container = document.body;
const tabOne = document.querySelector(".link1");
const tabTwo = document.querySelector(".link2");
const tabThree = document.querySelector(".link3");

tabOne.classList.add("tabone");

tabOne.addEventListener("click", () => {
    container.style.backgroundColor = "#6c00be";
    tabOne.classList.add("tabone");
    tabThree.classList.remove("tabone");
    tabTwo.classList.remove("tabone");
});

tabTwo.addEventListener("click", () => {
    container.style.backgroundColor = "#3dcf7b";
    tabTwo.classList.add("tabone");
    tabThree.classList.remove("tabone");
    tabOne.classList.remove("tabone");
});

tabThree.addEventListener("click", () => {
    container.style.backgroundColor = "#1b0264";
    tabThree.classList.add("tabone");
    tabOne.classList.remove("tabone");
    tabTwo.classList.remove("tabone");
});
