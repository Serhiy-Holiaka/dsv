import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout';
import Loading from '@/components/loading';

const Home = lazy(() => import('@/pages/Home'));

const WhyDsv = lazy(() => import('@/pages/WhyDsv'));
const OurSolutions = lazy(() => import('@/pages/OurSolutions'));
const Insights = lazy(() => import('@/pages/Insights'));
const Sustainability = lazy(() => import('@/pages/Sustainability'));
const Careers = lazy(() => import('@/pages/Careers'));
const About = lazy(() => import('@/pages/About'));
const Support = lazy(() => import('@/pages/Support'));

const App = () => {
    const basePath = import.meta.env.PROD ? '/dsv/' : '/';
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <Home />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'why-dsv',
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <WhyDsv />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'solutions',
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <OurSolutions />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'insights',
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <Insights />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'sustainabillity',
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <Sustainability />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'careers',
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <Careers />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'about',
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <About />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'support',
                        element: (
                            <Suspense fallback={<Loading additionalClasses="my-auto" />}>
                                <Support />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
        { basename: basePath }
    );

    return <RouterProvider router={router} />;
};

export default App;
