json.set! @post.id do 
    json.extract! @post, :id, :user_id, :caption
    json.user_ids @post.find_user_likes
    json.photoUrl url_for(@post.photo)
    json.comments @post.comments.each do |comment|
                json.extract! comment, :id, :user_id, :body 
                json.username comment.user.username
        end
end
