"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserDetailsProps {
    children: React.ReactNode;
};

const UserProvider: React.FC<UserDetailsProps> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
};

export default UserProvider;