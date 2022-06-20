import "./src/styles/styles.scss"


const $cards = document.querySelectorAll(".cat-food__card")

$cards.forEach(card => {
  card.addEventListener("mouseout", onHoverNoSelect)
  card.addEventListener("mouseout", onHoverSelect)
  card.addEventListener("click", event => {
    const $text = card.querySelector(".card__bait")
    const oldValue = `Чего сидишь? Порадуй котэ, <a href="#" data-type="click">купи.</a>`

    if (!card.classList.contains("selected") && event.target.dataset.type === "click") {
      card.classList.remove("hover")
      card.removeEventListener("mouseout", onHoverNoSelect)
      card.classList.add("selected")
      console.log(event.target.dataset.id);
      if (event.target.dataset.id === "0") {
        return $text.innerHTML = `
          <p style="margin: 0 0 0 -9px">Печень утки разварная с артишоками.</p>
        `
      } else if (event.target.dataset.id === "1") {
        return $text.innerHTML = `
          <p style="margin: 0 0 0 -46px">Головы щучьи с чесноком да свежайшая сёмгушка.</p>
        `
      } else {
        return $text.innerHTML = `
          <p style="margin: 0 0 0 -12px">Филе из цыплят с трюфелями в бульоне.</p>
        `
      }
    } else {
      card.classList.remove("selected")
      $text.innerHTML = oldValue
    }

  })

})

$cards.forEach(card => {
  if (card.classList.contains("disabled")) {
    const $text = card.querySelector(".card__bait")
    $text.innerHTML = `
        <p style="color: #FFFF66; padding: 0 0 0 12px">
          Печалька, 
          ${card.querySelector(".card__flavor").innerHTML} 
          закончился
        </p>
      `
  }
})

function onHoverNoSelect(event) {
  card.classList.add("hover")
  setTimeout(() => {
    card.classList.remove("hover")
  }, 1000)
}
function onHoverSelect(event) {
  if (card.classList.contains("selected")) {
    card.classList.add("hoverSelect")
    const $text = card.querySelector(".card__description")
    $text.innerHTML = `<p style="font-size: 16px; line-height: 19px; color: #E62E7A">Котэ не одобряет?</p>`
    setTimeout(() => {
      card.classList.remove("hoverSelect")
      $text.innerHTML = `Сказочное заморское яство`
    }, 1500)
  }
}