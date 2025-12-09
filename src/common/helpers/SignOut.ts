import type { NavigateFunction } from "react-router";

export const handleUserMenuSelect = (
    value: string,
    navigate: NavigateFunction
): void => {
    if (value === "logout") {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        navigate("/signin");
        return;
    }

    if (value === "profile") {
        navigate("/profile");
        return;
    }
};
