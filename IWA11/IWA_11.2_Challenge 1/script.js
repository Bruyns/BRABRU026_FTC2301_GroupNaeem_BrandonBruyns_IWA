const order1 = document.querySelector('[data-key="order1"]')
const order1biscuits = document.querySelector(`[data-key="order1"] .biscuits .count`)
const order1donuts = document.querySelector(`[data-key="order1"] .donuts .count`)
const order1pancakes = document.querySelector(`[data-key="order1"] .pancakes .count`)
const order1status = document.querySelector(`[data-key="order1"] .status `)

const order2 = document.querySelector(`[data-key="order2"]`)
const order2biscuits = document.querySelector(`[data-key="order2"] .biscuits .count`)
const order2donuts = document.querySelector(`[data-key="order2"] .donuts .count`)
const order2pancakes = document.querySelector(`[data-key="order2"] .pancakes .count`)
const order2status = document.querySelector(`[data-key="order2"] .status `)

const order3 = document.querySelector(`[data-key="order3"]`)
const order3biscuits = document.querySelector(`[data-key="order3"] .biscuits .count`)
const order3donuts = document.querySelector(`[data-key="order3"] .donuts .count`)
const order3pancakes = document.querySelector(`[data-key="order3"] .pancakes .count`)
const order3status = document.querySelector(`[data-key="order3"] .status `)


order1biscuits.innerHTML = order1.dataset.biscuits 
order1donuts.innerHTML = order1.dataset.donuts
order1pancakes.innerHTML = order1.dataset.pancakes
order1status.innerHTML = order1.dataset.delivered === "true" ? 'Delivered' : 'Pending'

order2biscuits.innerHTML = order2.dataset.biscuits 
order2donuts.innerHTML = order2.dataset.donuts
order2pancakes.innerHTML = order2.dataset.pancakes
order2status.innerHTML = order2.dataset.delivered === "true" ? 'Delivered' : 'Pending'

order3biscuits.innerHTML = order3.dataset.biscuits
order3donuts.innerHTML = order3.dataset.donuts
order3pancakes.innerHTML = order3.dataset.pancakes
order3status.innerHTML = order3.dataset.delivered === "true" ? 'Delivered' : 'Pending'
console.log(order2)
