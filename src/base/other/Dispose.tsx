import { useEffect } from "react";

export function DisposeHOC(EL: React.FC) {
    return (props) => {
        const { instance } = props;
        useEffect(() => {
            return () => {
                instance.dispose();
            }
        }, []);
        return <EL {...props}/>;
    }
}