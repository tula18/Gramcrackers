class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id 
        if @post.save 
            render :show ## ideally, it'll put the post on the feed. 
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def show 
        @post = Post.find(params[:id]) 
        render :show
    end
    
    def update 
        @post = current_user.posts.find(params[:id]) 
        if @post && @post.update(post_params) ## is it update?
            render :show 
        else
            render json: @post.errors.full_messages, status: 401
        end

    end


    def destroy
        @post = current_user.posts.find(params[:id]) 
        @post.destroy 
        ## render what here?
    end


end
