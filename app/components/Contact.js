'use client'
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-serif text-slate-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-slate-600">
            Available for interviews, book clubs, and speaking engagements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-slate-800">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message..." rows={6} />
              <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Media Inquiries</h3>
                <p className="text-slate-600 mb-4">
                  For interviews, press materials, or media kits, please contact:
                </p>
                <p className="text-slate-800 font-medium">
                  media@margaretthorne.com
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Speaking Events</h3>
                <p className="text-slate-600 mb-4">
                  Book clubs, libraries, and literary events welcome. Available for virtual and in-person appearances.
                </p>
                <p className="text-slate-800 font-medium">
                  events@margaretthorne.com
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Follow Along</h3>
                <p className="text-slate-600 mb-4">
                  Stay updated on upcoming releases and writing journey:
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    Newsletter
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Goodreads
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
