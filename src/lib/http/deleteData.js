
export async function deleteData(URL, data) {
  await fetch(URL, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}