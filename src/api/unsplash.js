import axios from 'axios';

export default axios.create({baseURL: "https://api.unsplash.com",
    headers: {
    Authorization:
      "Client-ID 0Q7kWvNVZw_kM_2jYL8zJy1fJ-UAOBoJxBvcd_rM0Vw",
  }})