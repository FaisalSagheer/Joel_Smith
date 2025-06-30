
'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

export function NewsLetter() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-serif text-slate-800 mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join my newsletter to receive updates on new releases, behind-the-scenes writing insights, 
              and exclusive content for fellow book lovers.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white border-slate-200"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white border-slate-200"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white border-slate-200"
                />
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 text-lg"
                >
                  Subscribe to Newsletter
                </Button>
              </form>
              
              <div className="mt-6 flex items-center justify-center space-x-6">
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  No spam, ever
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Unsubscribe anytime
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-slate-800">500+</div>
              <div className="text-slate-600">Happy subscribers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-slate-800">Monthly</div>
              <div className="text-slate-600">Newsletter frequency</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-slate-800">Exclusive</div>
              <div className="text-slate-600">Behind-the-scenes content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}