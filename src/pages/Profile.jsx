import React from 'react';
import useUser from '@/hooks/useUser'
function Profile(
    
) {

  const { users, loading, error } = useUser();

  return (
    <div className="profileContainer"> 
        <div className="account-details">
            <span>Name: {users.name} </span>
            <span>Email: {users.email}</span> 
            <input type="submit" value="New Character" />
        </div>
        <div className="char-cards-container">
            <div className="char-card">
                <div className="char-info">
                    <div className="left">
                        <span>Name:</span>
                        <span>Race:</span>
                    </div>
                    <div className="right">
                        <span>Class:</span>
                        <span>Level:</span>
                    </div>
                </div>
                <div className="stats">
                    <ul>
                        <li>STR: 20</li>
                        <li>DEX: 20</li>
                        <li>CON: 20</li>
                        <li>INT: 20</li>
                        <li>WIS: 20</li>
                        <li>CHA: 20</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
