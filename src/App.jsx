import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout';
import Home from '@/pages/Home';
import WhyDsv from '@/pages/WhyDsv';
import OurSolutions from '@/pages/OurSolutions';
import Insights from '@/pages/Insights';
import Sustainability from '@/pages/Sustainability';
import Careers from '@/pages/Careers';
import About from '@/pages/About';
import Support from '@/pages/Support';

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
                        element: <Home />,
                    },
                    {
                        path: 'why-dsv',
                        element: <WhyDsv />,
                    },
                    {
                        path: 'solutions',
                        element: <OurSolutions />,
                    },
                    {
                        path: 'insights',
                        element: <Insights />,
                    },
                    {
                        path: 'sustainabillity',
                        element: <Sustainability />,
                    },
                    {
                        path: 'careers',
                        element: <Careers />,
                    },
                    {
                        path: 'about',
                        element: <About />,
                    },
                    {
                        path: 'support',
                        element: <Support />,
                    },
                ],
            },
        ],
        { basename: basePath }
    );

    return <RouterProvider router={router} />;
};

export default App;
