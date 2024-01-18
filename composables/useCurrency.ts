export const useCurrency = (amount: any) => {
    const currency = computed (() => {
        const options =  { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }
        return new Intl.NumberFormat('pt-BR', options).format(isRef(amount) ? amount.value : amount)
    })

    return {
        currency
    }
}
