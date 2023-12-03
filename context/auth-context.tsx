import { createContext, useContext } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = () => {
	return <div>create something cool</div>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
