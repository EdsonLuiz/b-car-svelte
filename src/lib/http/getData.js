export async function getData(URL) {
  const response = await fetch(URL)

  if(!response.ok) {
    throw new Error('Ocorreu um erro')
  }

  const data = await response.json()
  return data
}