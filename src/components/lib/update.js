const updateItem = async (url, item, load) => {
    // console.log(item)
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    // console.log(data);
    load()
    return data
  }

  export default updateItem
