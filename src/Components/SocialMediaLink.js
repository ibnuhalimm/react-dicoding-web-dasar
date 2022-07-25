export default function SocialMediaLink(props) {
    return (
        <a href={props.href} className="developer--social-media-link" target="_blank" rel="noreferrer">
            {props.children}
        </a>
    )
}
