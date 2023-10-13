import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import { Repo } from './repo/Repo';
import './main.less';

export const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    return (
        <div>
            {
                repos.map((repo, i) =>
                    <Repo
                        key={i}
                        repo={repo}
                    />
                )
            }
        </div>
    );
}
