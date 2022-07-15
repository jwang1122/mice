const addItem = async (url, item) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data
};


export default addItem