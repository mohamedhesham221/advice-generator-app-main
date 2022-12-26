let btn = document.getElementById("btn"),
    adviceId = document.getElementById("advice-id"),
    advice = document.getElementById("advice");

    // async function to fetch data from api ("https://api.adviceslip.com/advice")
const getAdvice = async function () {
    const res = await fetch("https://api.adviceslip.com/advice");
    try {
        const data = await res.json();
        adviceId.innerText = data.slip.id;
        advice.innerText = data.slip.advice;
        return console.log(data);
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", getAdvice);