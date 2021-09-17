export async function getData(URL) {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Erro ao buscar carros')
  }
}