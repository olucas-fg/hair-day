import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//define a data mínima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
  //previne o comportamento padrão de recarregar a página
  event.preventDefault()

  console.log("enviado")
}