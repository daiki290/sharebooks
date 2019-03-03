import axios from 'axios'

class BookApi {
    constructor() {
        this.apiBase = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
    }

    searchFromISBN(isbn) {
        return axios.get(`${this.apiBase}`+isbn)
            .then(json => {
                return json.data.kind;
            })
            .catch(e => ({ error: e }));
    }
}
