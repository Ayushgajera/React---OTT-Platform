import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTIwYmVlM2E4Y2RjNGI5OGRmOWVmOWZiYmIxOWU2NyIsIm5iZiI6MTczMjAyMTkyNy4wNjQxNjQ0LCJzdWIiOiI2NWFmYmI5NzNlMmVjODAxMGIwNWQwZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NBt7Z2KADFACu2d9MZGj1V3BIA2uxT7o0ipd0UXRT7A'
      }
})
export default instance