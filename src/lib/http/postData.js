
export async function postData(URL, data) {
  try {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    throw new Error('Error no envio do formulário')
  }
}