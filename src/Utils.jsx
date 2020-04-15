export const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export const isMoreThanOne = value => {
  if(isNaN(value)) {
    return value
  }
  return (value > 1);
}