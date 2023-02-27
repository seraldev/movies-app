import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

export interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const MovieDetailPage = lazy(() => import('../pages/Detail/Detail'));
const MyKListPage = lazy(() => import('../pages/MyList/MyList'));

export const routes: IRoute[] = [
    {
        to: '/movie-detail',
        path: 'movie-detail',
        Component: MovieDetailPage,
        name: 'Movie detail',
    },
    {
        to: '/mylist',
        path: 'mylist',
        Component: MyKListPage,
        name: 'My list',
    }
];