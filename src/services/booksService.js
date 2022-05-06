const getBooks = (q) => {
    return fetch(`https://fakerapi.it/api/v1/books?_quantity=${q || 10}`)
        .then(async res => {
            const tRes = await res.json();
            return tRes.data;
        });
}

export default getBooks;