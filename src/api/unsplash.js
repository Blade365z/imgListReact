import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -hTeJJkGaVxMPFjHKJiXLVuchp5In-tZS5lcxG0EbMY'
    }
});