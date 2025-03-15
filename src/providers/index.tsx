import { FC, StrictMode } from "react";
import { ClickHandlerProvider } from "../contexts/ClickHandlerContext";

type ProvidersProps = {
  children: React.ReactNode;
}

export const Providers: FC<ProvidersProps> = ({children}) => {
  return (
    <StrictMode>
      <ClickHandlerProvider>
        {children}
      </ClickHandlerProvider>
    </StrictMode>
  )
}