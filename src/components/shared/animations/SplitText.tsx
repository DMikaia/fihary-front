import { FC, Fragment } from "react";

const SplitText: FC<{ text: string; classn: string }> = ({ text, classn }) => {
    const word_arr = text.split(" ");
    return (
        <Fragment>
            {word_arr.map((word, i) => (
                <span key={i} className="inline-block mr-2">
                    {word.split("").map((char, j) => (
                        <span key={j} className={`inline-block ${classn}`} dangerouslySetInnerHTML={{ __html: char }} />
                    ))}
                </span>
            ))}
        </Fragment>
    );
};

export default SplitText;