import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/mainNavbar';

import { checkTokenValidity } from '../utils/checkToken';
import { updateUser } from '../utils/graphql/queries';
import { doGraphQLFetch } from '../utils/graphql/fetch';

import Cookies from 'js-cookie';

const Settings: React.FC = () => {
    const apiURL = import.meta.env.VITE_API_URL;

    const [newEmail, setNewEmail] = useState('');
    const [retypeNewEmail, setRetypeNewEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [retypeNewPassword, setRetypeNewPassword] = useState('');
    const [currentUser, setCurrentUser] = useState({email : '', id: '', username: '', password: ''});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await checkTokenValidity();
                console.log('Token:', token.user);
                setCurrentUser(token.user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChangePassword = () => {
        console.log('New password:', newPassword);
        if (newPassword === retypeNewPassword) {
            const newUser = currentUser;
            newUser.password = newPassword;
            setCurrentUser(newUser);
            console.log(doGraphQLFetch(apiURL, updateUser, {user:{password:newPassword} }, Cookies.get('token'))
            );

            // Logic to handle changing password
        }

    };
    

    const handleChangeEmail = async () => {
        console.log('New email:', newEmail);
        if (newEmail === retypeNewEmail) {
            const newUser = currentUser;
            newUser.email = newEmail;
            setCurrentUser(newUser);
            console.log(await doGraphQLFetch(apiURL, updateUser, {user:{email:newEmail} }, Cookies.get('token'))
        )}
    };

 

    const foreground: React.CSSProperties = {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '94%',
        height: '100%',
        background: '#A2AEBB',
        border: '1px solid #000000',
        marginTop: '0px',
        marginLeft: '50px',
        marginRight: '50px',
        overflow: 'hidden',
    };

    return (
        <div>
            <MainNavbar />
            <div style={foreground}>
                <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, height: '1000px', width: '1800px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ color: 'black', marginTop: '0px', marginLeft: '20px' }}>Settings</h1>
                    <h1 style={{ color: 'black', marginTop: '50px', marginLeft: '20px'  }}>Change Email: </h1>
                    <h1 style={{ color: 'black', marginTop: '0px', marginLeft: '80px', fontSize: '20px'}}>current email:  {currentUser.email}</h1>
                    <input
                        type="text"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="New Email"
                        style={{ marginTop: '-35px', padding: '5px', fontSize: '16px', width: '10%', marginLeft: '390px'}}
                    />
                    <input
                        type="text"
                        value={retypeNewEmail}
                        onChange={(e) => setRetypeNewEmail(e.target.value)}
                        placeholder="Retype New Email"
                        style={{ marginTop: '-31px', padding: '5px', fontSize: '16px', width: '10%', marginBottom: '0px', marginLeft: '620px'}}
                    />
                    <button onClick={handleChangeEmail} style={{ backgroundColor: '#3F88C5', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '10px', width: '10%', marginLeft: '20px'  }}>
                        Change Email
                    </button>
                    <h1 style={{ color: 'black', marginTop: '50px' }}>Change Password</h1>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Current Password"
                        style={{ marginTop: '10px', padding: '5px', fontSize: '16px', width: '10%', marginLeft: '20px'}}
                    />
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        style={{ marginTop: '-31px', padding: '5px', fontSize: '16px', width: '10%', marginLeft: '220px'}}
                    />
                    <input
                        type="password"
                        value={retypeNewPassword}
                        onChange={(e) => setRetypeNewPassword(e.target.value)}
                        placeholder="Retype New Password"
                        style={{ marginTop: '-31px', padding: '5px', fontSize: '16px', width: '10%', marginLeft: '420px'}}
                    />
                    <button onClick={handleChangePassword} style={{ backgroundColor: '#3F88C5', marginLeft: '19px', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '10px', width: '10%' }}>
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
