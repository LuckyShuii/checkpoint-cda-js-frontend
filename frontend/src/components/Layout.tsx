import { ReactNode } from "react";
import Header from "./Header";
import { createContext } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;