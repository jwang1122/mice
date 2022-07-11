const addItem = async (url, item, load) => {
    console.log(item)
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    load()
  }

  export default addItem
