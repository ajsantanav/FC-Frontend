import React from 'react';
import useUser from '@/hooks/useUser'
import useCharacter from '@/hooks/useCharacters';

function Profile() {
    const { user, loading: userLoading, error: userError } = useUser();
    const { characters, loading: charLoading, error: charError, deleteCharacter } = useCharacter();

    if (userLoading || charLoading) return <p>Loading...</p>;
    if (userError || charError) return <p>Error: {userError || charError}</p>;

    return (
        <div className="profileContainer"> 
            <div className="account-details">
                <span>Name: {user?.name} </span>
                <span>Email: {user?.email}</span> 
            </div>
            <div className="char-cards-container">
                {characters.length > 0 ? (
                    characters.map(char => (
                        <div className="char-card" key={char._id}>
                            <div className="char-info">
                                <div className="left">
                                    <span>Name: {char.name}</span>
                                    <span>Race: {char.race}</span>
                                </div>
                                <div className="right">
                                    <span>Class: {char.class}</span>
                                    <span>Level: {char.level}</span>
                                </div>
                            </div>
                            <div className="stats">
                                <ul>
                                    <li>STR: {char.stats.strength}</li>
                                    <li>DEX: {char.stats.dexterity}</li>
                                    <li>CON: {char.stats.constitution}</li>
                                    <li>INT: {char.stats.intelligence}</li>
                                    <li>WIS: {char.stats.wisdom}</li>
                                    <li>CHA: {char.stats.charisma}</li>
                                </ul>
                            </div>
                            <button onClick={()=> handleDelete(char._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No characters found</p>
                )}
            </div>
        </div>
    );
}

export default Profile;