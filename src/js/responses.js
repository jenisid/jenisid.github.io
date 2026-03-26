const responses = {
  start: {
    message: `
      <p class="mb-2">
        Hi Welcome! I'm Floris, your AI assistant created by Mr. JENIS.
      </p>

      <p class="text-slate-600">
        I can help you explore this portfolio, learn more about Mr. JENIS,
        and guide you to the information you're looking for.
      </p>

      <p class="mt-3 font-semibold">Select an option to begin:</p>
    `,
    options: [
      { text: "About Mr. JENIS", next: "about" },
      { text: "Portfolio", next: "portfolio" },
      { text: "Blog & Learning", next: "blog" },
      { text: "Collaboration", next: "collab" },
      { text: "Contact", next: "contact" },
    ],
  },

  about: {
    message: `
      <p class="font-semibold mb-2">About Mr. JENIS</p>

      <p class="mb-2 text-slate-600">
        Mr. JENIS is a Natural Science student with a strong interest in 
        mathematics, analytical thinking, and structured problem solving.
      </p>

      <p class="text-slate-600">
        His focus is building solid fundamentals while continuously 
        improving logical reasoning and technical capabilities.
      </p>

      <p class="font-semibold mt-2">Core Interests</p>

      <ul class="list-disc pl-5 mt-1 space-y-1 marker:text-primary">
        <li>Mathematics</li>
        <li>Analytical Thinking</li>
        <li>Problem Solving</li>
        <li>Continuous Learning</li>
      </ul>

      <a href="#about" class="inline-block mt-3 text-primary underline">
      View full About section
      </a>
    `,
    options: [
      { text: "Mindset & Skills", next: "skills" },
      { text: "Social Links", next: "social" },
      { text: "Back", next: "start" },
    ],
  },

  skills: {
    message: `
      <p class="font-semibold mb-2">Mindset & Skills</p>

      <p class="text-slate-600">
        Mr. JENIS is focused on developing strong analytical thinking 
        and long-term learning foundations.
      </p>

      <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
        <li>Logical reasoning</li>
        <li>Structured problem solving</li>
        <li>Analytical thinking</li>
        <li>Deep understanding approach</li>
        <li>Long-term learning mindset</li>
      </ul>

      <p class="mt-3 text-slate-500 text-sm">
        Continuous growth through disciplined learning.
      </p>
    `,
    options: [
      { text: "Back to About", next: "about" },
      { text: "Main Menu", next: "start" },
    ],
  },

  social: {
    message: `
      <p class="font-semibold mb-2">Social Links</p>

      <p class="text-slate-600">
        Connect and follow Mr. JENIS through these platforms:
      </p>

      <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
        <li><a href="https://linkedin.com/in/jenisid" target="_blank" class="text-primary underline">LinkedIn</a></li>
        <li><a href="https://github.com/jenisid" target="_blank" class="text-primary underline">GitHub</a></li>
        <li><a href="https://instagram.com/jenis_id" target="_blank" class="text-primary underline">Instagram</a></li>
        <li><a href="https://tiktok.com/@jenis_id" target="_blank" class="text-primary underline">TikTok</a></li>
      </ul>

      <p class="mt-3 text-sm text-slate-500">
        Open for connections and collaboration.
      </p>
    `,
    options: [
      { text: "Back", next: "about" },
      { text: "Main Menu", next: "start" },
    ],
  },

  portfolio: {
    message: `
      <p class="font-semibold mb-2">Portfolio</p>

      <p class="text-slate-600">
        Projects are currently being developed as part of the learning journey.
      </p>

      <p class="mt-2 font-semibold">Current Focus</p>

      <ul class="list-disc pl-5 mt-1 space-y-1 marker:text-primary">
        <li>Practice projects</li>
        <li>Real-world problem solving</li>
        <li>Skill development</li>
      </ul>

      <a href="#portfolio" class="inline-block mt-3 text-primary underline">
        View Portfolio section
      </a>

      <p class="mt-2 text-sm text-slate-500">
        New projects will be added progressively.
      </p>
    `,
    options: [
      { text: "Future Plans", next: "future" },
      { text: "Back", next: "start" },
    ],
  },

  future: {
    message: `
      <p class="font-semibold mb-2">Future Plans</p>

      <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
        <li>Build real-world projects</li>
        <li>Share learning journey</li>
        <li>Improve analytical skills</li>
        <li>Expand technical knowledge</li>
      </ul>

      <p class="mt-3 text-slate-500 text-sm">
        This portfolio will continue evolving over time.
      </p>
    `,
    options: [
      { text: "Back to Portfolio", next: "portfolio" },
      { text: "Main Menu", next: "start" },
    ],
  },

  blog: {
    message: `
      <p class="font-semibold mb-2">Blog & Learning</p>

      <p class="text-slate-600">
        This section will include insights and learning materials:
      </p>

      <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
        <li>Learning notes</li>
        <li>Technical insights</li>
        <li>Science topics</li>
        <li>Personal development</li>
      </ul>

      <a href="#blog" class="inline-block mt-3 text-primary underline">
        Go to Blog section
      </a>

      <p class="mt-2 text-sm text-slate-500">
        Articles will be published soon.
      </p>
    `,
    options: [
      { text: "Learning Philosophy", next: "learning" },
      { text: "Back", next: "start" },
    ],
  },

  learning: {
    message: `
      <p class="font-semibold mb-2">Learning Philosophy</p>

      <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
        <li>Long-term learning mindset</li>
        <li>Consistency over intensity</li>
        <li>Understanding over memorization</li>
        <li>Learning through building</li>
      </ul>

      <p class="mt-3 text-slate-500 text-sm">
        Growth through continuous improvement.
      </p>
    `,
    options: [
      { text: "Back to Blog", next: "blog" },
      { text: "Main Menu", next: "start" },
    ],
  },

  collab: {
    message: `
      <p class="font-semibold mb-2">Collaboration</p>

      <p class="text-slate-600">
        Open to collaboration opportunities:
      </p>

      <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
        <li>Learning collaboration</li>
        <li>Small projects</li>
        <li>Knowledge sharing</li>
      </ul>

      <p class="mt-2 font-semibold">Focus Areas</p>

      <ul class="list-disc pl-5 mt-1 space-y-1 marker:text-primary">
        <li>Science</li>
        <li>Technology</li>
        <li>Education</li>
      </ul>

      <p class="mt-3 text-sm text-slate-500">
        Collaboration drives better learning.
      </p>
    `,
    options: [
      { text: "Contact", next: "contact" },
      { text: "Back", next: "start" },
    ],
  },

  contact: {
    message: `
      <p class="font-semibold mb-2">Contact</p>

      <p class="text-slate-600">
        You can reach Mr. JENIS through:
      </p>

      <ul class="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
        <li><b>Email:</b> contact.jenis@gmail.com</li>
        <li>Website contact form</li>
      </ul>

      <a href="#contact" class="inline-block mt-3 text-primary underline">
        Go to Contact section
      </a>

      <p class="mt-2 text-sm text-slate-500">
        Messages are always welcome.
      </p>
    `,
    options: [
      { text: "Social Links", next: "social" },
      { text: "Back", next: "start" },
    ],
  },

  fallback: {
    message: `
      <p>I didn't understand that request.</p>
      <p class="text-slate-600 mt-1">
      Please choose one of the available options.
      </p>
    `,
    options: [{ text: "Main Menu", next: "start" }],
  },
};
