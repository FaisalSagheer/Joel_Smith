
'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Calendar, Gift, Mail, Sparkles, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function NewsLetter() {
   const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect() || { left: 0, top: 0, width: 1, height: 1 };
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const section = document.querySelector('.newsletter-section');
    section?.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      section?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
     <section className="newsletter-section relative py-20 bg-gradient-to-br from-amber-50 via-slate-50 to-amber-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-20 animate-bounce delay-200">
          <Mail className="w-8 h-8 text-amber-400/30" />
        </div>
        <div className="absolute bottom-20 left-16 animate-bounce delay-400">
          <Sparkles className="w-6 h-6 text-slate-400/40" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-bounce delay-600">
          <Gift className="w-5 h-5 text-amber-500/30" />
        </div>
        
        {/* Interactive gradient orbs */}
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-amber-300/15 to-orange-400/15 blur-3xl transition-transform duration-1500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '5%'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-l from-slate-400/10 to-slate-600/10 blur-3xl transition-transform duration-2000 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.01}px)`,
            bottom: '15%',
            right: '10%'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-amber-800 text-sm font-medium">Join Our Community</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 animate-fade-in delay-200">
              Stay Connected
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in delay-400">
              Join my newsletter to receive updates on new releases, behind-the-scenes writing insights, 
              and exclusive content for fellow book lovers.
            </p>
          </div>

          <Card className={`max-w-2xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm transition-all duration-1200 delay-600 hover:shadow-3xl hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-8 relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white border-slate-200 hover:border-amber-400 focus:border-amber-400 transition-colors duration-300"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white border-slate-200 hover:border-amber-400 focus:border-amber-400 transition-colors duration-300"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white border-slate-200 hover:border-amber-400 focus:border-amber-400 transition-colors duration-300"
                />
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>Subscribe to Newsletter</span>
                  <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
                </Button>
              </form>
              
              <div className="mt-6 flex items-center justify-center space-x-6">
                <div className="flex items-center text-sm text-slate-500 hover:text-slate-700 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  No spam, ever
                </div>
                <div className="flex items-center text-sm text-slate-500 hover:text-slate-700 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Unsubscribe anytime
                </div>
              </div>
            </CardContent>
          </Card>

          <div className={`mt-12 grid md:grid-cols-3 gap-8 text-center transition-all duration-1400 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <Users className="w-8 h-8 mx-auto mb-2 text-amber-600 group-hover:animate-bounce" />
                <div className="text-2xl font-bold text-slate-800">500+</div>
              </div>
              <div className="text-slate-600">Happy subscribers</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-amber-600 group-hover:animate-bounce" />
                <div className="text-2xl font-bold text-slate-800">Monthly</div>
              </div>
              <div className="text-slate-600">Newsletter frequency</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <Gift className="w-8 h-8 mx-auto mb-2 text-amber-600 group-hover:animate-bounce" />
                <div className="text-2xl font-bold text-slate-800">Exclusive</div>
              </div>
              <div className="text-slate-600">Behind-the-scenes content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}