'use client'

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { useToast } from "@/app/hooks/use-toast";
// import { usePathname, useRouter } from "next/link";
import Navbar from "@/app/components/Navbar";
import { useBook } from "@/app/contexts/BookContext";
import { useState } from "react";
import Link from "next/link";

const Checkout = () => {
  const { state } = useBook();
//   const navigate = usePathname();
//   const { toast } = useToast();
  
//   const [formData, setFormData] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//     nameOnCard: ""
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const getTotalPrice = () => {
//     return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic form validation
//     const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'state', 'zipCode'];
//     const missingFields = requiredFields.filter(field => !formData[field]);
    
//     if (missingFields.length > 0) {
//       toast({
//         title: "Missing Information",
//         description: "Please fill in all required fields.",
//         variant: "destructive"
//       });
//       return;
//     }

//     // Simulate order processing
//     toast({
//       title: "Order Placed Successfully!",
//       description: "Thank you for your purchase. You will receive a confirmation email shortly.",
//     });
    
//     // Navigate to success page after a short delay
//     setTimeout(() => {
//       navigate('/');
//     }, 2000);
//   };

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-serif font-bold text-slate-800 mb-4">
              Your cart is empty
            </h1>
            <p className="text-slate-600 mb-8">Add some items to your cart before checking out.</p>
            <Button 
            //   onClick={() => navigate('/')}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
                <Link href="/">
              Continue Shopping
                </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-30 pb-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-slate-800 mb-8">
              Checkout
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email address"
                    //   value={formData.email}
                    //   onChange={handleInputChange}
                      required
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="firstName"
                        placeholder="First name"
                        // value={formData.firstName}
                        // onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="lastName"
                        placeholder="Last name"
                        // value={formData.lastName}
                        // onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Input
                      name="address"
                      placeholder="Address"
                    //   value={formData.address}
                    //   onChange={handleInputChange}
                      required
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <Input
                        name="city"
                        placeholder="City"
                        // value={formData.city}
                        // onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="state"
                        placeholder="State"
                        // value={formData.state}
                        // onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="zipCode"
                        placeholder="ZIP code"
                        // value={formData.zipCode}
                        // onChange={handleInputChange}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      name="nameOnCard"
                      placeholder="Name on card"
                    //   value={formData.nameOnCard}
                    //   onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="cardNumber"
                      placeholder="Card number"
                    //   value={formData.cardNumber}
                    //   onChange={handleInputChange}
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="expiryDate"
                        placeholder="MM/YY"
                        // value={formData.expiryDate}
                        // onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="cvv"
                        placeholder="CVV"
                        // value={formData.cvv}
                        // onChange={handleInputChange}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {state.cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-16 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800">{item.title}</h4>
                          <p className="text-sm text-slate-600">Qty: 
                            {item.quantity}
                            </p>
                        </div>
                        <p className="font-semibold text-amber-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span>Subtotal:</span>
                        {/* <span>${getTotalPrice()}</span> */}
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Shipping:</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        {/* <span className="text-amber-600">${getTotalPrice()}</span> */}
                      </div>
                    </div>
                    
                    <Button 
                    //   onClick={handleSubmit}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                    >
                      Place Order
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
