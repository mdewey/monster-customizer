// A mock function to mimic making an async request for data

const API_URL = process.env.NODE_ENV === 'production' ? 
  'https://monster-builder-data-v1.herokuapp.com' : 
  `https://localhost:5001` 


const getSearchResults = async (needle:string) =>{
  return await fetch(`${API_URL}/api/Search?needle=${needle}`);
}

export {
  getSearchResults
}


