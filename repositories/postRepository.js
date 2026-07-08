import dbConnect from '../lib/mongodb';
import Post from '../models/Post';
import Author from '../models/Author'; // Needed if we populate author

export class PostRepository {
  async getAllPosts() {
    await dbConnect();
    // Use .populate() to get the Author details instead of just the ID
    return await Post.find({}).populate('author');
  }

  async getPostById(id) {
    await dbConnect();
    return await Post.findById(id).populate('author');
  }

  async createPost(postData) {
    await dbConnect();
    const newPost = new Post(postData);
    return await newPost.save();
  }

  async updatePost(id, updateData) {
    await dbConnect();
    return await Post.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).populate('author');
  }

  async deletePost(id) {
    await dbConnect();
    return await Post.findByIdAndDelete(id);
  }
}
