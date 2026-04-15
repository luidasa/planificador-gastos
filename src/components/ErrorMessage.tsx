import type { ReactNode } from "react";

type ErrorMessageProps = {
    children: ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <div className="bg-red-400 border border-red-400 text-white p-2 rounded relative font-bold text-sm text-center" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{children}</span>
        </div>
    );
}