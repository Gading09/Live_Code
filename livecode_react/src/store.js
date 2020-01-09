import createStore from "unistore";
import axios from "axios";

const initialState = {
    listNews : [],
    isloading : true,
    username : "",
    avatar : "",
    email : "",
    namaPengguna : "",
    kataKunci: "",
    is_login : false
};

const apiKey = "02d1c2c457c14f739ed709c4bca05f3c"
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl+"top-headlines?country=id&apikey="+apiKey;

export const store = createStore(initialState);
export const actions = store => ({
    RequestDataNews : (state) => {
        axios
            .get("https://api-todofancy.herokuapp.com/api/movies")
            .then(function(response){
                store.setState({ listNews: response.data.movies, isloading: false});
            })
            .catch(function(error){
                store.setState({ isloading:false})
            })
    },
    handleInputChangeSearch : async(state,event)  => {
        let value = event.target.value;
        await store.setState({ search: value });
      },

    searchNews : async(state, keyword)  => {
        if (keyword.length > 2) {
          try {
            const response = await axios.get(
              baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
            );
            store.setState({ listNews: response.data.articles });
          } catch (error) {
            console.error(error);
          }
        }
      },

      requestNews : async (state,paramCategory) => {
        
        console.warn(paramCategory)
        await axios
        .get(urlHeadline + "&category=" + paramCategory)
        .then(function (response) {
            store.setState({ listNews: response.data.articles, isLoading: false });
            // handle success
        })
        .catch(function (error) {
            store.setState({ isLoading: false });
            // handle error
            console.log(error);
        });
    }
  });