import React from 'react';

function CharacterForm() {
  return (
    <div className="charSheet-container">
      <form>
        <h2>Character Sheet</h2>

        <label>Character Name:</label>
        <input type="text" name="characterName" />

        <label>Level:</label>
        <input type="number" name="level" min={1} />

        <label>Class:</label>
        <input type="text" name="class" />

        <label>Race:</label>
        <input type="text" name="race" />

        <label>Stats:</label>
        <div className="stats-grid">
          <div>
            <label>STR:</label> <input type="number" name="strength" min={8} max={20} defaultValue={10} />
            <label>DEX:</label> <input type="number" name="dexterity" min={8} max={20} defaultValue={10} />
            <label>CON:</label> <input type="number" name="constitution" min={8} max={20} defaultValue={10} />
          </div>
          <div>
            <label>INT:</label> <input type="number" name="intelligence" min={8} max={20} defaultValue={10} />
            <label>WIS:</label> <input type="number" name="wisdom" min={8} max={20} defaultValue={10} />
            <label>CHA:</label> <input type="number" name="charisma" min={8} max={20} defaultValue={10} />
          </div>
        </div>
        <input type="submit" className='btn' />
      </form>
    </div>
  );
}

export default CharacterForm;