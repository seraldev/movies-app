import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const CardSection: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-1 flex-col justify-center first:justify-start last:justify-end">
            {children}
        </div>
    )
}
