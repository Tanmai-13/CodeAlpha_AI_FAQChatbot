export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  keywords: string[];
}

// Local FAQ dataset — College & Student Technology FAQs
// Covers: Python, React, Git/GitHub, HTML/CSS, JavaScript, AI/ML, internships, projects, resumes, programming basics
export const faqDataset: FAQItem[] = [
  // --- Python ---
  {
    id: 1,
    question: 'What is Python and why is it popular?',
    answer:
      'Python is a high-level, interpreted programming language known for its simple, readable syntax. It is popular because it is beginner-friendly, has a huge ecosystem of libraries (NumPy, Pandas, Flask, Django, TensorFlow), and is widely used in web development, data science, automation, and AI.',
    keywords: ['python', 'popular', 'language', 'beginner', 'syntax', 'interpreted'],
  },
  {
    id: 2,
    question: 'How do I install Python on my computer?',
    answer:
      'You can install Python by downloading the official installer from python.org and running it. On Windows, check the box "Add Python to PATH" during installation. On macOS and Linux, Python is often pre-installed, or you can use a package manager like Homebrew (brew install python) or apt (sudo apt install python3).',
    keywords: ['install', 'python', 'download', 'path', 'windows', 'macos', 'linux'],
  },
  {
    id: 3,
    question: 'What is a virtual environment in Python?',
    answer:
      'A virtual environment is an isolated Python workspace that keeps project dependencies separate from the system Python. You create one with "python -m venv myenv" and activate it. This prevents version conflicts between projects.',
    keywords: ['virtual', 'environment', 'venv', 'dependencies', 'isolate', 'isolation'],
  },

  // --- React ---
  {
    id: 4,
    question: 'What is React and what is it used for?',
    answer:
      'React is a JavaScript library developed by Meta for building user interfaces, especially single-page applications. It uses a component-based architecture and a virtual DOM to efficiently update and render UI elements when data changes.',
    keywords: ['react', 'javascript', 'library', 'ui', 'components', 'virtual', 'dom', 'spa'],
  },
  {
    id: 5,
    question: 'What are React hooks?',
    answer:
      'React hooks are functions like useState, useEffect, and useRef that let you use state and lifecycle features in functional components without writing classes. They were introduced in React 16.8 and are now the standard way to write React logic.',
    keywords: ['hooks', 'usestate', 'useeffect', 'userref', 'functional', 'components', 'state', 'lifecycle'],
  },
  {
    id: 6,
    question: 'What is the difference between props and state in React?',
    answer:
      'Props are read-only values passed from a parent component to a child, used to configure or pass data. State is internal data managed by a component that can change over time and trigger re-renders. Props are immutable within the receiving component; state is mutable.',
    keywords: ['props', 'state', 'difference', 'react', 'immutable', 'mutable', 'parent', 'child'],
  },

  // --- Git and GitHub ---
  {
    id: 7,
    question: 'What is Git and why should I use it?',
    answer:
      'Git is a distributed version control system that tracks changes to your code over time. It lets you revert to previous versions, branch off for experiments, and collaborate with others without overwriting each other\'s work. It is the industry standard for source code management.',
    keywords: ['git', 'version', 'control', 'vcs', 'track', 'changes', 'collaborate', 'commits'],
  },
  {
    id: 8,
    question: 'What is the difference between Git and GitHub?',
    answer:
      'Git is the version control tool that runs locally on your computer. GitHub is a cloud-based hosting service that lets you store Git repositories online, collaborate with others, manage issues, and run CI/CD. You can use Git without GitHub, but GitHub relies on Git.',
    keywords: ['git', 'github', 'difference', 'cloud', 'hosting', 'repository', 'remote'],
  },
  {
    id: 9,
    question: 'How do I push my code to GitHub?',
    answer:
      'First, create a repository on GitHub. Then in your local project, run "git remote add origin <url>", "git branch -M main", and "git push -u origin main". After the first push, you can simply run "git push" to upload new commits.',
    keywords: ['push', 'github', 'remote', 'origin', 'branch', 'main', 'commits', 'upload'],
  },
  {
    id: 10,
    question: 'What is a merge conflict and how do I resolve it?',
    answer:
      'A merge conflict occurs when Git cannot automatically reconcile changes made to the same lines of code in different branches. To resolve it, open the conflicting files, look for the conflict markers (<<<<<<<, =======, >>>>>>>), choose which changes to keep, save the file, then add and commit.',
    keywords: ['merge', 'conflict', 'resolve', 'branches', 'markers', 'reconcile', 'git'],
  },

  // --- HTML/CSS ---
  {
    id: 11,
    question: 'What is the difference between HTML and CSS?',
    answer:
      'HTML (HyperText Markup Language) defines the structure and content of a web page using elements like headings, paragraphs, and images. CSS (Cascading Style Sheets) controls the visual presentation — colors, fonts, spacing, and layout. HTML is the skeleton; CSS is the styling.',
    keywords: ['html', 'css', 'difference', 'structure', 'style', 'markup', 'presentation', 'layout'],
  },
  {
    id: 12,
    question: 'What is the CSS box model?',
    answer:
      'The CSS box model describes every element as a rectangular box made of four layers: content, padding, border, and margin. Content is the text/image area, padding is space inside the border, border is the edge, and margin is space outside the border separating elements.',
    keywords: ['css', 'box', 'model', 'content', 'padding', 'border', 'margin', 'spacing'],
  },
  {
    id: 13,
    question: 'How do I make a responsive website with CSS?',
    answer:
      'Use responsive techniques like media queries (@media), flexible layouts with Flexbox or CSS Grid, relative units (rem, %, vw), and a mobile-first approach. Also include the viewport meta tag in your HTML head: <meta name="viewport" content="width=device-width, initial-scale=1.0">.',
    keywords: ['responsive', 'css', 'media', 'queries', 'flexbox', 'grid', 'mobile', 'viewport'],
  },

  // --- JavaScript ---
  {
    id: 14,
    question: 'What is JavaScript and what is it used for?',
    answer:
      'JavaScript is a programming language that runs in the browser (and on servers via Node.js). It adds interactivity to web pages — handling clicks, form validation, animations, dynamic content updates, and API calls. Together with HTML and CSS, it forms the core of web development.',
    keywords: ['javascript', 'js', 'browser', 'interactivity', 'web', 'node', 'programming'],
  },
  {
    id: 15,
    question: 'What is the difference between let, const, and var in JavaScript?',
    answer:
      '"var" is the old way of declaring variables — it is function-scoped and can be redeclared. "let" is block-scoped and can be reassigned. "const" is block-scoped and cannot be reassigned after initialization. Modern JavaScript prefers "const" by default and "let" when reassignment is needed; avoid "var".',
    keywords: ['let', 'const', 'var', 'difference', 'scope', 'block', 'function', 'reassign', 'javascript'],
  },
  {
    id: 16,
    question: 'What is an arrow function in JavaScript?',
    answer:
      'An arrow function is a concise way to write function expressions introduced in ES6. Syntax: (params) => expression. Unlike regular functions, arrow functions do not have their own "this" binding — they inherit it from the surrounding scope, which makes them ideal for callbacks.',
    keywords: ['arrow', 'function', 'es6', 'this', 'concise', 'callback', 'javascript', 'lambda'],
  },

  // --- AI and Machine Learning ---
  {
    id: 17,
    question: 'What is machine learning?',
    answer:
      'Machine learning is a subset of AI where computers learn patterns from data instead of being explicitly programmed. Common types are supervised learning (labeled data), unsupervised learning (finding patterns), and reinforcement learning (learning through rewards). Examples include spam filters, recommendation systems, and image recognition.',
    keywords: ['machine', 'learning', 'ml', 'ai', 'data', 'supervised', 'unsupervised', 'reinforcement', 'models'],
  },
  {
    id: 18,
    question: 'What is the difference between AI and machine learning?',
    answer:
      'AI (Artificial Intelligence) is the broad field of making machines perform tasks that require human intelligence. Machine learning is a specific approach within AI where systems learn from data. In short: all machine learning is AI, but not all AI uses machine learning — some AI relies on rules or logic.',
    keywords: ['ai', 'artificial', 'intelligence', 'machine', 'learning', 'difference', 'broad', 'subset'],
  },
  {
    id: 19,
    question: 'What is deep learning?',
    answer:
      'Deep learning is a subset of machine learning that uses artificial neural networks with many layers ("deep") to learn complex patterns. It powers technologies like image recognition, natural language processing, and large language models. Frameworks include TensorFlow, PyTorch, and Keras.',
    keywords: ['deep', 'learning', 'neural', 'networks', 'layers', 'tensorflow', 'pytorch', 'keras', 'nlp'],
  },

  // --- Internships ---
  {
    id: 20,
    question: 'How do I find a good tech internship?',
    answer:
      'Search on platforms like LinkedIn, Internshala, AngelList, and company career pages. Attend hackathons and coding competitions, network with seniors and professors, and apply early. Build a portfolio of projects on GitHub to stand out. A strong resume and consistent practice on coding platforms also help.',
    keywords: ['internship', 'find', 'tech', 'linkedin', 'internshala', 'portfolio', 'github', 'apply', 'career'],
  },
  {
    id: 21,
    question: 'What skills do I need for an AI internship?',
    answer:
      'For an AI internship, you should know Python, basic statistics and linear algebra, machine learning concepts (supervised/unsupervised learning), and at least one framework like scikit-learn, TensorFlow, or PyTorch. Familiarity with data analysis (Pandas, NumPy) and a few ML projects on your resume will strengthen your application.',
    keywords: ['ai', 'internship', 'skills', 'python', 'statistics', 'ml', 'tensorflow', 'pytorch', 'scikit', 'pandas', 'numpy'],
  },

  // --- Projects ---
  {
    id: 22,
    question: 'How do I choose a good programming project?',
    answer:
      'Pick a project that solves a real problem you care about and aligns with your learning goals. Start small, then add features incrementally. Good beginner projects include a to-do app, weather dashboard, or portfolio website. For AI, try a sentiment analyzer or a chatbot. Document your project with a clear README on GitHub.',
    keywords: ['project', 'choose', 'programming', 'beginner', 'portfolio', 'todo', 'weather', 'chatbot', 'readme', 'github'],
  },
  {
    id: 23,
    question: 'How should I showcase my projects to employers?',
    answer:
      'Host your code on GitHub with a clean README explaining the problem, tech stack, and how to run it. Deploy live demos using Vercel, Netlify, or GitHub Pages. Add project links to your resume and LinkedIn. A short demo video or screenshots also help recruiters quickly understand your work.',
    keywords: ['showcase', 'projects', 'employers', 'github', 'readme', 'deploy', 'vercel', 'netlify', 'resume', 'linkedin', 'demo'],
  },

  // --- Resumes ---
  {
    id: 24,
    question: 'What should I include in a tech resume?',
    answer:
      'A strong tech resume should include: a concise summary, technical skills (languages, frameworks, tools), education, relevant projects with brief descriptions and links, any internships or work experience, and achievements. Keep it to one page, use clean formatting, and tailor it to the job description with relevant keywords.',
    keywords: ['resume', 'tech', 'skills', 'projects', 'education', 'experience', 'format', 'keywords', 'cv'],
  },
  {
    id: 25,
    question: 'How do I write a good resume summary?',
    answer:
      'A resume summary is 2-3 lines at the top highlighting your background and goals. Example: "Final-year CS student with hands-on experience in Python, React, and machine learning, seeking an AI internship to apply data-driven problem-solving skills." Keep it specific, concise, and aligned with the role you want.',
    keywords: ['resume', 'summary', 'objective', 'background', 'goals', 'student', 'internship', 'concise'],
  },

  // --- Programming Basics ---
  {
    id: 26,
    question: 'What is the difference between a compiled and an interpreted language?',
    answer:
      'A compiled language (like C++ or Java) translates the entire source code into machine code before execution, making it faster at runtime. An interpreted language (like Python or JavaScript) executes code line by line at runtime, which is slower but easier to debug and more flexible. Some languages (Java) use a hybrid approach.',
    keywords: ['compiled', 'interpreted', 'difference', 'language', 'machine', 'code', 'runtime', 'java', 'python', 'javascript', 'c++'],
  },
  {
    id: 27,
    question: 'What are data types in programming?',
    answer:
      'Data types define the kind of value a variable can hold. Common types include: integers (whole numbers), floats (decimals), strings (text), booleans (true/false), arrays (lists of values), and objects (key-value pairs). Choosing the right data type ensures efficient memory use and correct operations.',
    keywords: ['data', 'types', 'programming', 'integer', 'float', 'string', 'boolean', 'array', 'object', 'variable'],
  },
  {
    id: 28,
    question: 'What is a loop and what types of loops are there?',
    answer:
      'A loop repeats a block of code multiple times. Common types: a "for" loop runs a set number of times, a "while" loop runs as long as a condition is true, and a "do-while" loop runs at least once then checks the condition. Loops help automate repetitive tasks like iterating over arrays.',
    keywords: ['loop', 'for', 'while', 'do', 'while', 'repeat', 'iterate', 'array', 'condition', 'programming'],
  },
];

export const UNKNOWN_ANSWER =
  "Sorry, I couldn't find a suitable answer. Please try asking another question.";
