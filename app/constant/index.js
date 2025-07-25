
export const navItems = [
  { prop: "About The Author", href: "/about-author" },
  { prop: "About The Book", href: "/about-book" },
  // { prop: "Shop", href: "/shop" },
  { prop: "Blogs & Articles", href: "/blogs" },
  { prop: "Contact", href: "/contact" },
  // { prop: "blog-posts", href: "/blog-posts" },
];

export const authorInfo = {
  name: "Joel Smith",
  bio: {
    intro:
      "Margaret Thorne spent fifteen years as a librarian in small New England towns before turning to writing full-time. Her love for old houses, family histories, and the stories that bind us together inspired her debut novel.",
    personal:
      "When she's not writing, Margaret enjoys restoring antique furniture, tending to her garden, and exploring local historical societies. She currently lives in Vermont with her two cats and an ever-growing collection of vintage books.",
    current:
      "Whispers in the Attic is her first novel, but she's already at work on her second book, another tale of family secrets set in the mountains of Vermont.",
  },
  awards: [
    "• Finalist, New England Book Award 2024",
    "• Winner, Vermont Literary Prize 2023",
    '• Featured in "Best Debuts of the Year" - BookRiot',
  ],
  image:
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
  alt: "Margaret Thorne, Author",
};

export const featuredBook = {
  title: "Whispers in the Attic",
  author: "Margaret Thorne",
  description: {
    intro:
      "Some Observations and Opinions is not your average collection of essays or memoir. It is an exploration of the human condition by an 83-year-old man who has seen decades of change, progress, regression, beauty, absurdity, and occasional grace.",
    setting:
      "With his feet planted firmly on the deck of his self-built home in the rural Florida woods, Joel Aaron Smith reflects on everything from the nature of God to the state of modern America, from abstract painting to the personalities of cats and dogs.",
  },
  review: {
    quote:
      "A masterfully crafted debut that will stay with you long after the final page. Thorne has given us a story that's both intimate and universal.",
    source: "Publishers Weekly",
  },
  purchaseLinks: [
    { name: "Buy on Amazon", primary: true },
    { name: "Barnes & Noble", primary: false },
    { name: "Local Bookstore", primary: false },
  ],
};

export const briefblogPosts = [
  {
    id: 1,
    title: "Why I Wrote a Book at 83 (And Why You Should Read It)",
    slug: "art-of-character",
    excerpt:
      "I didn’t write this book to become famous. I wrote it because I still had something to say.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Writing Tips",
    href: "/post-page1",
  },
  {
    id: 2,
    title: "The Kind of Books I Write",
    slug: "inspiration-in-everyday",
    excerpt:
      "You won't find my books under “bestsellers” at the airport. They don’t have a three-step plan to improve your life. They aren’t thrillers. And I’m not trying to “build a brand”.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Inspiration",
    href: "/post-page2",
  },
  // {
  //   id: 3,
  //   title: "The Publishing Journey: What to Expect",
  //   slug: "publishing-journey",
  //   excerpt:
  //     "Navigate the complex world of publishing with insights from my personal experience as a debut author.",
  //   image:
  //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
  //   date: "March 5, 2024",
  //   readTime: "10 min read",
  //   category: "Publishing",
  //   href: "/post-page3",
  // },
];

export const FullblogPosts = [
  {
    id: 1,
    title: "Why I Wrote a Book at 83 (And Why You Should Read It)",
    slug: "why-i-wrote-a-book",
    href: "post-page1",
    content: `
      <p>At 83, people expect you to slow down, stay quiet, or stick to bingo. But I believe aging isn't the end of expression, it's the peak of perspective. After decades of living, teaching, painting, raising eyebrows, and asking too many questions, I found myself on my back porch in rural Florida, surrounded by trees, birds, and the kind of stillness that makes you wonder: what if I tried to write it all down?</p>
      
      <h2 class="py-2">So I did.</h2>
      <p>Some Observations and Opinions is the result. It’s not a manifesto. It’s not a self-help manual. It’s a meandering, thoughtful, sometimes funny, sometimes dead-serious collection of essays and reflections on everything from politics and God to abstract painting and the quiet genius of Taoism. It's what happens when a guy who's lived long enough finally stops worrying about what others think, and just writes.</p>
      
      <h2 class="py-2">Why should you read it?</h2>
      <p>Because maybe, just maybe, you'll see your own thoughts, half-formed and unexplored, finally written down by someone who’s walked a few more miles. Or maybe you’ll just enjoy reading the kind of book that doesn’t try to sell you answers, just a bit of honest company.</p>
      
      <h2 class="pt-2">So pull up a chair. Let’s talk.</h2>
    `,
    excerpt:
      "I didn’t write this book to become famous. I wrote it because I still had something to say.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Writing Tips",
    author: "Joel Smith",
  },
  {
    id: 2,
    title: "The Kind of Books I Write",
    slug: "the-kind-of-books-i-write",
    href: "post-page2",
    content: `
      <p>You won't find my books under “bestsellers” at the airport. They don’t have a three-step plan to improve your life. They aren’t thrillers. And I’m not trying to “build a brand.”</p>
      
      <p>What I write are books for thinkers, wanderers, and anyone willing to slow down and listen to a stranger’s point of view, one formed over 80+ years of living, doubting, learning, and sitting quietly.</p>
      <p>My books drift between memoir, philosophy, theology, social commentary, and the kind of humor that sneaks up on you like a raccoon at midnight. I write about Zen and Judaism in the same breath. I question God, praise Him, and roll my eyes at organized religion, sometimes all in the same paragraph.</p>
      
      <p>You could say my writing is unfiltered. You could also say it’s deeply personal. Both are true.</p>
      
      <p>If you're tired of polished platitudes and just want a voice that feels real, a little cranky, a little curious, and always looking for the truth behind the noise, then I invite you to read my work.</p>
      <p>You don’t have to agree with me. You just have to listen.</p>
    `,
    excerpt:
      "Learn how to transform ordinary experiences into extraordinary stories that captivate your audience.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Inspiration",
    author: "Joel Smith",
  },
];

export const ArticlesContent = [
  {
    id: 1,
    title: "Growing Old Without Apology – Reflections on Aging",
    slug: "growing-old-without-apology–reflections-on-aging",
    content: `
      <p>
       It isn’t in the books, the lectures, or the health columns. It arrives with creaking joints, distant memories, and a quiet moment on the back deck, where you suddenly realize you’ve been watching the same tree grow for thirty years. That’s the kind of moment Joel Smith leans into in his reflections on aging.
      <p/>
     
      <p>In a culture obsessed with youth, Some Observations and Opinions offers a rare voice of unapologetic maturity. Smith isn’t here to give advice or chase longevity hacks. Instead, he writes honestly about being in his eighties, about being grateful, irreverent, observant, and yes, occasionally stoned. Aging, for Smith, is not just a medical process or a slow fade. It’s a vantage point.<p/>
      
      <p>He looks back with no grand nostalgia, but with a kind of seasoned realism: he’s survived trends, presidents, heartbreaks, and hurricanes. Now, surrounded by nature, birdsong, and an occasional raccoon, he invites the reader to slow down and listen.
      <p/>
      <p>If you’ve ever wondered what it really feels like to grow old, not the tragedy, not the comedy, just the truth, you’ll find something rare here: a perspective that doesn't apologize for the years.<p/>
    `,
    excerpt:
      "There’s something unspoken about aging that only time can teach you.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Writing Tips",
    author: "Joel Smith",
    href: "/article-1",
  },
  {
    id: 2,
    title: "Abstract Art and the Act of Letting Go",
    slug: "abstract-art-and-the-act-of-letting-go",
    content: `
      <p>
      
      That’s one of the quieter revelations tucked inside Joel Smith’s book Some Observations and Opinions. Known more for his philosophical tangents and political musings, Smith also writes as a lifelong painter who found solace in abstract art, not for prestige, but for something far more personal: freedom.
       
       <p/>
     
      <p>
      Abstract painting, he suggests, isn’t about technique or control. It’s about release. It’s about losing the need to represent something literal and instead letting shapes, colors, and textures carry a truth that words can’t touch. Smith doesn’t teach you how to paint, he shows you how painting teaches him.
       <p/>
      
      <p> 
      The creative process, for him, is a dance with uncertainty. The brush moves, and something moves in the mind with it. There are no outlines, no plans. And that, perhaps, is the point: to unlearn, to undo, to discover.
      <p/>
      <p> 
      If you're an artist, a writer, or simply someone trying to make sense of life’s messier moments, Smith’s reflections on abstract art will speak to the part of you that craves expression over explanation.
      <p/>
      <p>
      This isn’t art theory. This is art as a mirror, and Smith invites you to look.
      </p>
    `,
    excerpt: "You don’t just paint an abstract. You let it paint you.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Inspiration",
    author: "Joel Smith",
    href: "/article-2",
  },
  {
    id: 3,
    title: "Writing Without a Blueprint, The Joy of Unstructured Thought",
    slug: "writing-without-a-blueprint-the-joy-of-unstructured-thought",
    content: `
      <p>
      
      Joel Aaron Smith doesn’t outline chapters like a textbook or arrange his essays like a TED talk. He writes the way most people think, in meandering paths, circling the truth, sometimes bumping into it sideways. And that’s exactly what makes Some Observations and Opinions so engaging.
       <p/>
     
      <p>
      
      We live in a world obsessed with structure. Outlines, templates, and formulas dominate not only our writing habits but our lives. But what happens when we let that go? When we allow an idea to wander into a room, pull up a chair, and sit down without an agenda?
      <p/>
      <h2 class="py-1">That’s what this book models.</h2>
      <p> 
      
     This style doesn’t just reflect how Joel Smith writes; it reflects how he thinks. And it’s an invitation to all of us to abandon the need for perfect conclusions and instead embrace the imperfect process of wondering out loud.
      <p/>
      <h2 class="py-1">So if you're a reader looking for answers, this book might surprise you.</h2>
   
      <p> 
      
      But if you're a reader who enjoys the dance of thought, the hum of a curious mind, and the rare chance to feel like someone is thinking alongside you instead of preaching at you, this is your kind of book.
      <p/>
    `,
    excerpt:
      "There’s something liberating about writing without knowing exactly where you're going.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Publishing",
    author: "Joel Smith",
    href: "/article-3",
  },
  {
    id: 4,
    title: "Politics, Faith, and the Quiet Space In Between",
    slug: "politics-faith-and-the-quiet-space-in-between",
    content: `
      <p>
      
      In an age where everything feels loud, from headlines to hashtags, Joel Aaron Smith's approach in Some Observations and Opinions is refreshingly quiet. 
      <p/>
     
      <p>
      
      He doesn’t offer sweeping manifestos or ideological purity. He doesn’t scream on social media. He writes essays. Softly. Carefully. Thoughtfully.
      <p/>
      <h2 class="py-1">And somehow, in that quiet space, his thoughts on politics and religion hit harder than any viral tweet.</h2>
      <p> 
      
     Smith reflects on being both Jewish and interested in Zen. On loving America while questioning its leadership. On critiquing war without losing compassion for those caught in it. His take on the Israeli–Palestinian conflict, for example, isn’t packaged for soundbites; it’s a vulnerable attempt to hold multiple truths at once.
     <p/>

      <h2 class="py-1">It’s the kind of writing that resists binaries.</h2>
   
      <p> 
      
      He writes like someone who’s spent a lifetime asking questions rather than collecting answers, and that humility is something readers feel immediately.
      <p/>
      <p>
      In a world of extremes, Some Observations and Opinions offers a middle path: not neutrality, but nuance. It’s a rare kind of political and spiritual honesty, where the goal isn’t to win the argument, but to stay open to the human behind it.
      </p>
      <p>
      So if you’re tired of all-or-nothing takes and crave the texture of complexity, Smith offers you a space to breathe.
      </p>
    `,
    excerpt:
      "In an age where everything feels loud, from headlines to hashtags, Joel Aaron Smith's approach in Some Observations and Opinions is refreshingly quiet.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Publishing",
    author: "Joel Smith",
    href: "/article-4",
  },
  {
    id: 5,
    title: "The Spirituality of Everyday Things",
    slug: "the-spirituality-of-everyday-things",
    excerpt:
      "You don’t need a temple to have a spiritual experience. Sometimes you just need a bird feeder.",
    content: `
      <p>
      You don’t need a temple to have a spiritual experience. Sometimes you just need a bird feeder. 
      <p/>
     
      <p>
      
      One of the most understated themes in Some Observations and Opinions is the sacredness of the ordinary. Joel Aaron Smith doesn’t just write about God or Zen or religious texts; he writes about listening to owls, watching moss grow, or lighting a joint while thinking about the universe.
      <p/>
      <h2 class="py-1">It’s not irreverent. It’s real.</h2>
      <p> 
      
     Spirituality, in Smith’s hands, becomes something deeply personal, not bound by rituals or institutions, but discovered in the slow quiet of daily life. He might reference a Taoist principle, then immediately undercut it with humor. Or quote from the Torah, then wander into a story about his cat. 
     <p/>
      <h2 class="py-1">The result? A kind of lived theology, honest, messy, grounded.</h2>

      <p> 
      
What makes these essays so moving is that they don’t aim to convert or correct. They simply reveal a man trying to stay awake to life. Whether through painting, aging, prayer, or a walk through the woods, Smith’s reflections remind us that holiness might be hiding in plain sight.
      <p/>
      <p>
Readers who’ve ever found themselves feeling more spiritually alive on a rainy Tuesday than inside a church pew will recognize this sensibility right away.
      </p>
   <p>
   Some Observations and Opinions isn’t a book about religion. It’s a book about wonder, and all the small, strange, beautiful places it shows up.
   </p>   
    `,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Publishing",
    author: "Joel Smith",
    href: "/article-5",
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
