import React from 'react';

const projects = [
  {
    title: 'House Price Prediction',
    description: 'Predicts house prices using regression models.',
    link: 'https://github.com/Rajkumar05-coder/task1'
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Predicts customer attrition with classification.',
    link: 'https://github.com/Rajkumar05-coder/task1'
  },
  {
    title: 'Heart Disease Detection',
    description: 'Predicts heart risk using patient data.',
    link: 'https://github.com/Rajkumar05-coder/task1'
  },
  {
    title: 'Breast Cancer Detection',
    description: 'Classifies cancer risk with supervised ML.',
    link: 'https://github.com/Rajkumar05-coder/task1'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded shadow text-left">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{proj.description}</p>
              <a href={proj.link} target="_blank" className="text-blue-600 dark:text-blue-400 underline">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
