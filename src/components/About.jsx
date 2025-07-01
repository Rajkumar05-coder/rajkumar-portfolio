import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I'm <strong>Rajkumar Esram</strong>, a passionate developer skilled in Python, Data Analysis, and Web Development.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Skills:</strong> Python, Java, R, HTML, CSS, JS, React<br/>
          <strong>Tools:</strong> Jupyter, VS Code, RStudio, GitHub<br/>
          <strong>Tech:</strong> Pandas, Scikit-learn, MySQL
        </p>
      </div>
    </section>
  );
}
