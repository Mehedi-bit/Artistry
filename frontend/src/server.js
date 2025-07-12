
// local (it was already here)

// export const server = "http://localhost:8000/api/v2";

// export const backend_url = "http://localhost:8000/";




// for production (it was not here)
export const server = `${import.meta.env.REACT_APP_API_URL}/api/v2`;
export const backend_url = `${import.meta.env.REACT_APP_API_URL}/`;
