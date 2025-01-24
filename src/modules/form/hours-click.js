export function hoursClick() {
  const hours = document.querySelectorAll(`.hour-available`);

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      hours.forEach((hour) => {
        //remove a classe hour selected de todas as li não selecionadas
        hour.classList.remove("hour-selected")
      })

      //adiciona a classe na li clicada
      selected.target.classList.add("hour-selected")
    })
  })
}