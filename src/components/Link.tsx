import Arrow from "./../../public/assets/images/icons/arrow.svg?react";

interface LinkProps {
    text: string;
    href: string;
}

const Link = ({ text, href }: LinkProps) => {
    return (
        <a href={href} className="link-wrapper">
            <span>{text}</span>
            <Arrow className="arrow"/>
        </a>
    );
};

export default Link;