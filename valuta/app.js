const USD = document.getElementById('USD')
const EUR = document.getElementById('EUR')
const GBP = document.getElementById('GBP')
const currencyDate = document.getElementById('currency-container__date') 
const date = new Date()

const currencyRates = async () => {
    const API_URL = 'https://api.exchangerate.host/latest'
    const response = await fetch(API_URL)
    const data = await response.json() 

    currencyDate.textContent = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    USD.textContent = data.rates.USD
    EUR.textContent = data.rates.EUR
    GBP.textContent = data.rates.GBP 
}

currencyRates()


// https://api.exchangerate.host/latest