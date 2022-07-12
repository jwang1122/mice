const updateItem = async (url, item, load) => {
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    load()
};


export default updateItem