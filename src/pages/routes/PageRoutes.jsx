import { useContext } from 'react';

import { PrivateRoute, ProtectedRoute } from '../../router';
import { AuthContext } from '../../auth';

import Navbar from '../../ui/components/Navbar'
import { AdminPage } from '../admin';
import { AssistantPage } from '../assistant';
import { UserPage } from '../user';
import { DriverPage } from '../driver';

const navigationAdmin = [
    { name: 'Admin 1', href: '/admin-home', current: false },
    { name: 'Admin 2', href: '/admin-2', current: false },
];

const navigationAssistant = [
    { name: 'Assistant 1', href: '/assistant-home', current: false },
    { name: 'Assistant 2', href: '/assistant-2', current: false },
];

const navigationUser = [
    { name: 'User 1', href: '/user-home', current: false },
    { name: 'User 2', href: '/user-2', current: false },
];

const navigationDriver = [
    { name: 'Driver 1', href: '/driver-home', current: false },
    { name: 'Driver 2', href: '/driver-2', current: false },
];

const DeterminateUser = () => {
    const { user } = useContext(AuthContext);

    if (user?.type === 1) {
        return {
            navigation: navigationAdmin
        }
    } else if (user?.type === 2) {
        return {
            navigation: navigationAssistant
        }
    } else if (user?.type === 3) {
        return {
            navigation: navigationUser
        }
    } else if (user?.type === 4) {
        return {
            navigation: navigationDriver
        }
    }
}

const PageRoutesComponent = () => {

    return (
        <PrivateRoute>
            <Navbar 
                {...DeterminateUser()}
            />
        </PrivateRoute>
    );
}

const routesAdmin = [
    {
        path: "admin-home",
        element: 
            <ProtectedRoute requiredRole={1}>
                <AdminPage />
            </ProtectedRoute>
    },
]

const routesAssistant = [
    {
        path: "assistant-home",
        element: 
            <ProtectedRoute requiredRole={2}>
                <AssistantPage />
            </ProtectedRoute>
    },
]

const routesUser = [
    {
        path: "user-home",
        element: 
            <ProtectedRoute requiredRole={3}>
                <UserPage />
            </ProtectedRoute>
    },
]

const routesDriver = [
    {
        path: "driver-home",
        element: 
            <ProtectedRoute requiredRole={3}>
                <DriverPage />
            </ProtectedRoute>
    },
]

export const PageRoutes = {
    element: <PageRoutesComponent />,
    children: [
        ...routesAdmin,
        ...routesAssistant,
        ...routesUser,
        ...routesDriver,
        {
            path: "/",
            element: <ProtectedRoute requiredRole={0}/>,
        },
    ]
}