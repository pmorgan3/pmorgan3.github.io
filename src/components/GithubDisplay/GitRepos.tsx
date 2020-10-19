import React, { useEffect, useState } from 'react'
import { ResumeCardContainer } from '../HomePage/ResumeCardContainer'
import { Project } from '../projects'
import { GithubRepo } from './types'
import { FetchRepos } from './Utilities'


export const RepoListItem: React.FC<{ repo: GithubRepo}> = ({repo}) => {
    return <>
        <Project url={repo.html_url} title={repo.full_name.slice(9)} body={repo.description} status={`Stars: ${repo.stargazers_count}`} />
    </>
}

export const GithubRepos: React.FC = () => {
    const [repos, setRepos] = useState([] as GithubRepo[])
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>  {
        FetchRepos().then(r => setRepos(r))
        setLoading(false)
        console.log(`repos fetched: ${JSON.stringify(repos)}`)
    }, [])
    if(isLoading || repos.length === 0)
        return <>Loading....</>
    else
        return <><ResumeCardContainer boxes={repos.filter(r=> r.description !== "").sort((a,b) => b.stargazers_count - a.stargazers_count).map(r =>{ return <RepoListItem repo={r}/>})}/></>
}