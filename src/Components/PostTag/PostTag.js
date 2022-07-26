import './PostTag.css';


export default function PostTag(props) {
    let tagColor = 'flirt';
    if (props.children.toLowerCase() === 'tips') {
        tagColor = 'liberty';
    }

    return (
        <span className={`post--tag ${tagColor}`}>
           {props.children}
        </span>
    )
}
