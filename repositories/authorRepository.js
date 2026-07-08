import dbConnect from '../lib/mongodb';
import Author from '../models/Author';

export class AuthorRepository {
  async getAllAuthors() {
    await dbConnect();
    return await Author.find({});
  }

  async getAuthorById(id) {
    await dbConnect();
    return await Author.findById(id);
  }

  async createAuthor(authorData) {
    await dbConnect();
    const newAuthor = new Author(authorData);
    return await newAuthor.save();
  }

  async updateAuthor(id, updateData) {
    await dbConnect();
    return await Author.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }

  async deleteAuthor(id) {
    await dbConnect();
    return await Author.findByIdAndDelete(id);
  }
}
