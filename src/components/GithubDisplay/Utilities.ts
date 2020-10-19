import Axios from "axios"
import { GithubRepo } from "./types";
require('dotenv').config()

export const FetchRepos = async () =>{
    
        return await Axios.get('https://api.github.com/users/pmorgan3/repos', {headers: {
            
            'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }})
        .then(repos => {
            
            
            console.warn(repos.data)
            return repos.data as GithubRepo[]
            
        }).catch(err => {
            console.error(`AHHHHHH: ${err}`)
            console.log(`when you caught this error your token was: ${process.env.REACT_APP_GITHUB_TOKEN}`)
            console.log(`current variables: ${JSON.stringify(process.env)}`)
            return [] as GithubRepo[]
            })
        .catch(err =>{ throw err});
    
}