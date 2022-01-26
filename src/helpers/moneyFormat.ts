export const moneyFormat = (money: number): string => {
    return new Intl.NumberFormat('de-DE').format(money)
}