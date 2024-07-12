<h1>Woovi Challenge</h1>

<p>This repository contains my solution for the Woovi Challenge.</p>

<h2>Overview</h2>

<p>The Woovi Challenge project is a React application developed as part of the Woovi hiring process. It demonstrates my skills in building a responsive web application using React.</p>

<h2>Live Demo</h2>

<p>Check out the live demo of this project hosted on Vercel: <a href="https://woovi-challenge-rouge.vercel.app/">Woovi Challenge Demo</a></p>

<h2>Installation</h2>

<p>To run this project locally, follow these steps:</p>

<ol>
  <li><strong>Clone the Repository</strong></li>
  <pre><code>git clone https://github.com/pabllot/woovi.git
cd woovi
  </code></pre>

  <li><strong>Install Dependencies</strong></li>
  <pre><code>npm install
  </code></pre>

  <li><strong>Start the Development Server</strong></li>
  <pre><code>npm run dev
  </code></pre>

  <li><strong>View the Application</strong></li>
  <p>Open your web browser and navigate to <a href="http://localhost:5173">http://localhost:5173</a> to view the application.</p>
</ol>

<h2>Technologies Used</h2>

<ul>
  <li>React</li>
  <li>Material-UI (MUI)</li>
  <li>Vercel (for deployment)</li>
  <li>Zustand</li>
</ul>

<h2>State Management with Zustand</h2>

<p>In this project, I chose to use Zustand for state management, especially to handle the chosen installment on the first page, allowing me to work with this data seamlessly throughout the application.</p>

<h3>Why Zustand?</h3>

<ul>
  <li><strong>Simplicity:</strong> Zustand has a minimal API and is easy to set up and use.</li>
  <li><strong>Performance:</strong> Zustand avoids unnecessary re-renders and offers better performance. (comparing to useContext)</li>
  <li><strong>Scalability:</strong> Zustand is suitable for larger applications with more complex state management needs.</li>
</ul>

<h3>Data Persistence with Local Storage</h3>

<p>To ensure that state data is not lost across page refreshes and browser sessions, I integrated Zustand with local storage. This approach saves the application state in the browser's local storage, providing a persistent state across sessions.</p>

<a href="https://www.linkedin.com/in/pabloteixeira1/">Linkedin</a>
