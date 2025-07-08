"use client";

export const navItems = [
  { prop: "Author", href: "/about-author" },
  { prop: "About Book", href: "/about-book" },
  { prop: "Shop", href: "/shop" },
  { prop: "Blogs", href: "/blogs" },
  { prop: "Contact", href: "/contact" },
  { prop: "blog-posts", href: "/blog-posts" },
];

export const briefblogPosts = [
  {
    id: 1,
    title: "The Art of Character Development",
    slug: "art-of-character",
    excerpt:
      "Discover the secrets behind creating memorable characters that readers will connect with on a deep emotional level.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Writing Tips",
  },
  {
    id: 2,
    title: "Finding Inspiration in Everyday Moments",
    slug: "inspiration-in-everyday",
    excerpt:
      "Learn how to transform ordinary experiences into extraordinary stories that captivate your audience.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Inspiration",
  },
  {
    id: 3,
    title: "The Publishing Journey: What to Expect",
    slug:"publishing-journey",
    excerpt:
      "Navigate the complex world of publishing with insights from my personal experience as a debut author.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Publishing",
  },
];

export const FullblogPosts = [
  {
    id: 1,
    title: "The Art of Character Development",
    slug: "art-of-character",
    content: `
      <p>Creating memorable characters is one of the most crucial aspects of storytelling. Characters are the heart and soul of any narrative, and they're what readers connect with on the deepest level.</p>
      
      <h2>Understanding Your Characters</h2>
      <p>Before you write a single word of dialogue, you need to know your characters inside and out. This means understanding their motivations, fears, dreams, and the experiences that shaped them.</p>
      
      <h2>Building Authentic Dialogue</h2>
      <p>Great characters speak in unique voices. Each character should have their own way of expressing themselves, influenced by their background, education, and personality.</p>
      
      <h2>Character Arcs and Growth</h2>
      <p>The best characters are those who change throughout the story. They face challenges that force them to grow, adapt, and evolve as people.</p>
      
      <p>Remember, your readers should be able to close their eyes and hear your character's voice clearly in their minds. That's when you know you've created someone truly memorable.</p>
    `,
    excerpt:
      "Discover the secrets behind creating memorable characters that readers will connect with on a deep emotional level.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Writing Tips",
    author: "Margaret Thorne",
  },
  {
    id: 2,
    title: "Finding Inspiration in Everyday Moments",
    slug: "inspiration-in-everyday",
    content: `
      <p>Inspiration is everywhere around us, waiting to be discovered in the most ordinary moments of our daily lives. The key is learning how to see the extraordinary in the mundane.</p>
      
      <h2>The Power of Observation</h2>
      <p>Great writers are keen observers of human nature. They notice the small gestures, the fleeting expressions, and the subtle interactions that others might overlook.</p>
      
      <h2>Keeping a Writer's Journal</h2>
      <p>I always carry a small notebook with me. You never know when a snippet of overheard conversation or an interesting character observation will spark your next story idea.</p>
      
      <h2>Drawing from Personal Experience</h2>
      <p>Your own experiences, emotions, and relationships are goldmines of material. Don't be afraid to dig deep into your own past for inspiration.</p>
      
      <p>Remember, the goal isn't to document reality exactly as it happens, but to find the universal truths that resonate with readers.</p>
    `,
    excerpt:
      "Learn how to transform ordinary experiences into extraordinary stories that captivate your audience.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Inspiration",
    author: "Margaret Thorne",
  },
  {
    id: 3,
    title: "The Publishing Journey: What to Expect",
    slug:"publishing-journey",
    content: `
      <p>The path to publication can be both exciting and daunting. Having recently navigated this journey myself, I want to share some insights that might help aspiring authors.</p>
      
      <h2>Preparing Your Manuscript</h2>
      <p>Before you even think about querying agents or publishers, make sure your manuscript is the best it can be. This means multiple rounds of self-editing, beta readers, and possibly professional editing.</p>
      
      <h2>Finding the Right Agent</h2>
      <p>A good literary agent can be your greatest ally in the publishing world. Research agents who represent your genre and follow their submission guidelines to the letter.</p>
      
      <h2>The Waiting Game</h2>
      <p>Publishing involves a lot of waiting. Rejections are part of the process, and they don't reflect the quality of your work. Persistence is key.</p>
      
      <h2>Building Your Platform</h2>
      <p>Start building your author platform early. Social media, a website, and connecting with other writers can all help when it comes time to promote your book.</p>
      
      <p>Remember, every published author was once where you are now. Keep writing, keep improving, and don't give up on your dreams.</p>
    `,
    excerpt:
      "Navigate the complex world of publishing with insights from my personal experience as a debut author.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    date: "March 5, 2024",
    readTime: "12 min read",
    category: "Publishing",
    author: "Margaret Thorne",
  },
];

export const footer1 = [
  { icon: "fa-solid fa-phone px-2", No: "+1 (512) 889-7071" },
  {
    icon: "fa-brands fa-whatsapp px-2 text-[#52da7f]",
    No: "+1 (512) 889-7071",
  },
];

export const footer2 = [
  {
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/company/softechgoal",
    target: "_blank",
  },
  {
    icon: "fa-brands fa-instagram px-5",
    href: "https://www.instagram.com/softechgoal?igsh=MWZqZ3Rxb2MxN2g5ZA==",
    target: "_blank",
  },
  {
    icon: "fa-brands fa-facebook-f",
    href: "https://www.facebook.com/profile.php?id=61565552590000",
    target: "_blank",
  },
];
