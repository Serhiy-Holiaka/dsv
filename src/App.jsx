import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/layout';
import Home from '@/pages/Home';
import WhyDsv from '@/pages/WhyDsv';
import OurSolutions from '@/pages/OurSolutions';

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
                ],
            },
        ],
        { basename: basePath }
    );

    return <RouterProvider router={router} />;
};

export default App;
