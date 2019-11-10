import React from 'react';


class PostShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id).then(
            () => this.props.fetchOwner(this.props.posts.user_id)
        )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.fetchUserPosts(this.props.match.params.username);
        }
    }

    render () {
        let deleteButton = this.props.currentUser && this.props.currentUser.id 
            === this.props.posts.user_id ? 
                <button onClick={() => this.props.deletePhoto(this.props.posts.id)}>Delete</button> 
                : null

        if (!this.props.posts) return null;

        return (
            <div className="post-show-main">
                <div className="post-show-row">
                <img src={this.props.posts.photoUrl} height="400" width="400"/>
                    <div className="post-show-right">
                        <div>
                                <div className="post-show-user">
                                <img src="https://img.icons8.com/color/48/000000/cheburashka.png" />
                                <p>{this.props.owner.username} </p>
                                {deleteButton}
                                </div>
                                <div className="post-show-comments">
                                    <p>{this.props.posts.caption}</p>
                                    <p>comments go here</p>
                                </div>
                        </div>
                            <div className="post-show-interact">
                                <input type="text" placeholder="Add a comment..."/>
                            </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default PostShow;