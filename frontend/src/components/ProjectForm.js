import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm({ onProjectAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveLink, setLiveLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProject = {
        title,
        description,
        technologies: technologies.split(',').map(tech => tech.trim()),
        githubLink,
        liveLink
      };
      await axios.post('http://localhost:5000/api/projects/add', newProject);
      setTitle('');
      setDescription('');
      setTechnologies('');
      setGithubLink('');
      setLiveLink('');
      onProjectAdded(); // callback to refresh project list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required /><br/>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required /><br/>
        <input type="text" placeholder="Technologies (comma separated)" value={technologies} onChange={e => setTechnologies(e.target.value)} required /><br/>
        <input type="text" placeholder="GitHub Link" value={githubLink} onChange={e => setGithubLink(e.target.value)} /><br/>
        <input type="text" placeholder="Live Link" value={liveLink} onChange={e => setLiveLink(e.target.value)} /><br/>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
