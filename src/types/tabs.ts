import {ReactNode} from "react";

export interface TabsProps {
  tabsTitles: string[];
  contentForFirstTab: ReactNode;
  contentForSecondTab: ReactNode;
}
