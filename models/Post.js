import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the post'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for the post'],
  },
  // This is the One-to-Many relationship definition (One Author can have Many Posts)
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: [true, 'Post must have an author'],
  }
}, {
  timestamps: true
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
