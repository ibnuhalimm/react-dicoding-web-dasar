import './PostItem.css';
import PostTag from '../PostTag/PostTag';
import image_1280_640 from '../../Img/image_1280_640.jpeg';
import PostDate from '../PostDate/PostDate';


export default function PostItem(props) {
    const { url, tag, title  } = props;

    return (
        <div className="post">
            <div className="post--image">
                <a href={url}>
                    <img src={image_1280_640}
                        alt={title} />
                </a>
            </div>
            <div className="post--content">
                <div className="post--metadata">
                    <PostTag>
                        {tag}
                    </PostTag>
                    <PostDate>
                        17 Juni 2022
                    </PostDate>
                </div>
                <a href={url} className="post--link">
                    <div className="post--header">
                        <h3>
                            {title}
                        </h3>
                    </div>
                </a>
            </div>
        </div>
    )
}
