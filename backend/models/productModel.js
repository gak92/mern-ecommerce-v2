const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the product"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please enter the name of the description"]
  },
  price: {
    type: Number,
    required: [true, "Please enter the price of the product"],
    maxLength: [8, "Price cannot exceed 8 characters"]
  },
  rating: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  category: {
    type: String,
    required: [true, "Please enter the product category"]
  },
  stock: {
    type: Number,
    required: [true, "Please enter the stock"],
    maxLength: [4, "Stcok cannot exceed 4 character"],
    default: 1
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);
