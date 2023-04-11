import { useEffect, useState } from "react";

type TypeWriterProps = {
    text: string
}

const TypeWriter = (props: TypeWriterProps) => {
    const { text } = props;
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const delay = 30;

    useEffect(() => {
        if (index < text.length) {
            setTimeout(() => {
                setCurrentText(currentText + text[index]);
                setIndex(index + 1);
            }, delay);
        }
    }, [index]);

    return (
        <div>
            {currentText && (
                <p>
                    {currentText}
                </p>
            )}
        </div>
    )

}

export default TypeWriter;