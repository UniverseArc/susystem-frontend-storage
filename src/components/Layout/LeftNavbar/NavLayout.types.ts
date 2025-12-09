import type { Location, NavigateFunction } from "react-router";

export interface NavLayoutProps {
    navigate: NavigateFunction;
    location: Location<unknown>,
}