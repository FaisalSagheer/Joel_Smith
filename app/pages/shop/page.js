'use client'
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { useBook } from "@/app/contexts/BookContext";
import { useToast } from "@/app/hooks/use-toast";
import { Search, ShoppingCart, Star } from "lucide-react";
import Navbar from "@/app/components/Navbar";

const books = [
  {
    id: '1',
    title: 'Whispers in the Attic',
    author: 'Margaret Thorne',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop',
    price: 24.99,
    rating: 4.8,
    reviews: 127,
    genre: 'Mystery',
    description: 'A haunting tale of family secrets and inherited mysteries.'
  },
  {
    id: '2',
    title: 'The Silent Garden',
    author: 'Elena Rodriguez',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    price: 19.99,
    rating: 4.5,
    reviews: 89,
    genre: 'Romance',
    description: 'A beautiful story of love blooming in unexpected places.'
  },
  {
    id: '3',
    title: 'Chronicles of Tomorrow',
    author: 'James Mitchell',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop',
    price: 27.99,
    rating: 4.7,
    reviews: 203,
    genre: 'Sci-Fi',
    description: 'An epic journey through time and space.'
  },
  {
    id: '4',
    title: 'Midnight Confessions',
    author: 'Sarah Williams',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
    price: 22.99,
    rating: 4.6,
    reviews: 156,
    genre: 'Thriller',
    description: 'Dark secrets unfold in this gripping thriller.'
  },
  {
    id: '5',
    title: 'The Artisan\'s Heart',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop',
    price: 21.99,
    rating: 4.4,
    reviews: 78,
    genre: 'Literary',
    description: 'A masterful exploration of creativity and passion.'
  },
  {
    id: '6',
    title: 'Ocean\'s Edge',
    author: 'Lisa Thompson',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop',
    price: 26.99,
    rating: 4.9,
    reviews: 234,
    genre: 'Adventure',
    description: 'A thrilling adventure across dangerous waters.'
  }
];

const genres = ['All', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Literary', 'Adventure'];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('title');
  const { addToCart } = useBook();
  const { toast } = useToast();

  const filteredBooks = books
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => selectedGenre === 'All' || book.genre === selectedGenre)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const handleAddToCart = (book) => {
    addToCart(book);
    toast({
      title: "Added to Cart",
      description: `${book.title} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-30 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Book Shop
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover your next favorite read from our curated collection of books.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search books or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Genre Filter */}
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="title">Sort by Title</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-slate-600">
              Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-600 text-white">
                    {book.genre}
                  </Badge>
                </div>
                
                <CardHeader className="pb-2 flex-1">
                  <CardTitle className="text-lg font-serif line-clamp-2">
                    {book.title}
                  </CardTitle>
                  <p className="text-slate-600">by {book.author}</p>
                  
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium ml-1">{book.rating}</span>
                    </div>
                    <span className="text-sm text-slate-500">({book.reviews} reviews)</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {book.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      ${book.price}
                    </span>
                    <Button 
                      onClick={() => handleAddToCart(book)}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600 mb-4">No books found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedGenre('All');
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;