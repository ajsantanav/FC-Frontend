import React, { useState } from 'react';
import useUser from '@/hooks/useUser';

function CharacterForm() {
  const { user, loading: userLoading, error: userError } = useUser();
  const [formData, setFormData] = useState({
    name: '', // Change from characterName to name
    level: 1,
    class: '',
    race: '',
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  });

  const backendURL = 'https://fc-backend-65yq.onrender.com/api/users/67a3c90b40aeb669d29ffe15/characters'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!backendURL) {
      console.error('User ID not found. Cannot submit character.');
      alert('User ID is missing. Please log in again.');
      return;
    }

   
    const requestData = {
      name: formData.name,  
      level: parseInt(formData.level), 
      class: formData.class,
      race: formData.race,
      stats: {
        strength: parseInt(formData.strength),
        dexterity: parseInt(formData.dexterity),
        constitution: parseInt(formData.constitution),
        intelligence: parseInt(formData.intelligence),
        wisdom: parseInt(formData.wisdom),
        charisma: parseInt(formData.charisma),
      }
    };

    try {
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)  // Send transformed data
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create character: ${errorText}`);
      }

      const data = await response.json();
      console.log('Character created:', data);
      alert('Character created successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create character.');
    }
  };

  if (userLoading) return <p>Loading user...</p>;
  if (userError) return <p>Error loading user: {userError}</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <div className="charSheet-container">
      <form onSubmit={handleSubmit}>
        <h2>Character Sheet</h2>

        <label>Character Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Level:</label>
        <input type="number" name="level" min={1} value={formData.level} onChange={handleChange} required />

        <label>Class:</label>
        <input type="text" name="class" value={formData.class} onChange={handleChange} required />

        <label>Race:</label>
        <input type="text" name="race" value={formData.race} onChange={handleChange} required />

        <label>Stats:</label>
        <div className="stats-grid">
          <div>
            <label>STR:</label>
            <input type="number" name="strength" min={8} max={20} value={formData.strength} onChange={handleChange} required />
            <label>DEX:</label>
            <input type="number" name="dexterity" min={8} max={20} value={formData.dexterity} onChange={handleChange} required />
            <label>CON:</label>
            <input type="number" name="constitution" min={8} max={20} value={formData.constitution} onChange={handleChange} required />
          </div>
          <div>
            <label>INT:</label>
            <input type="number" name="intelligence" min={8} max={20} value={formData.intelligence} onChange={handleChange} required />
            <label>WIS:</label>
            <input type="number" name="wisdom" min={8} max={20} value={formData.wisdom} onChange={handleChange} required />
            <label>CHA:</label>
            <input type="number" name="charisma" min={8} max={20} value={formData.charisma} onChange={handleChange} required />
          </div>
        </div>

        <input type="submit" className="btn" value="Create Character" />
      </form>
    </div>
  );
}
export default CharacterForm;