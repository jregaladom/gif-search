import axios from "axios";

const giphy = axios.create({
    baseURL: "https://api.giphy.com/",
    timeout: 1000,
});

const giphyService = {

};

giphyService.search = function ({ query, offset }) {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    return giphy.get(`v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`).then((response) => {
        return response.data;
    });
};

giphyService.random = function () {
    const query = random.getText();
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    return giphy.get(`v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`).then((response) => {
        return response.data;
    });
};



export default giphyService;