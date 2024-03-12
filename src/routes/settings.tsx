import React, { useState } from 'react';
import MainNavbar from '../components/mainNavbar';

const Settings: React.FC = () => {
    const [eventsChecked, setEventsChecked] = useState(false);
    const [newsChecked, setNewsChecked] = useState(false);
    const [forumChecked, setForumChecked] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [retypeNewEmail, setRetypeNewEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [retypeNewPassword, setRetypeNewPassword] = useState('');

    const handleChangeEmail = () => {
        // Logic to handle changing email
    };

    const handleChangePassword = () => {
        // Logic to handle changing password
    };

    return (
        <div>
            <MainNavbar />
            <div style={{ backgroundColor: '#1C3144', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, height: '1000px', width: '1800px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 style={{ color: 'black', marginTop: '-90px', marginLeft: '20px' }}>Settings</h1>
                    <h1 style={{ color: 'black', marginTop: '0px', marginLeft: '20px'  }}>Newsletter:</h1>
                    <h1 style={{ color: 'black', marginTop: '0px', marginLeft: '80px'}}>Get e-mailed about</h1>
                   
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        
                        <h1 style={{ color: 'black', marginLeft: '220px', fontSize: '28px', marginBottom: '0', marginTop: '0' }}>Events</h1>
                        <input
                            type="checkbox"
                            id="events"
                            checked={eventsChecked}
                            onChange={() => setEventsChecked(!eventsChecked)}
                            style={{ marginTop: '30px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px', width: '20px', height: '20px', cursor: 'pointer', borderRadius: '50%', backgroundColor: 'white', border: 'none', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'}}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                       
                        <h1 style={{ color: 'black', marginLeft: '220px', fontSize: '28px', marginBottom: '0', marginTop: '0' }}>News</h1>
                        <input
                            type="checkbox"
                            id="news"
                            checked={newsChecked}
                            onChange={() => setNewsChecked(!newsChecked)}
                            style={{ marginTop: '30px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px', width: '20px', height: '20px', cursor: 'pointer', borderRadius: '50%', backgroundColor: 'white', border: 'none', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'}}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                       
                        <h1 style={{ color: 'black', marginLeft: '220px', fontSize: '28px', marginBottom: '0', marginTop: '0' }}>Forum post replied</h1>
                        <input
                            type="checkbox"
                            id="forum"
                            checked={forumChecked}
                            onChange={() => setForumChecked(!forumChecked)}
                            style={{ marginTop: '30px', marginBottom: '20px', marginLeft: '20px', marginRight: '20px', width: '20px', height: '20px', cursor: 'pointer', borderRadius: '50%', backgroundColor: 'white', border: 'none', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', WebkitBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)', MozBoxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)'}}
                        />
                    </div>
                    <h1 style={{ color: 'black', marginTop: '50px', marginLeft: '20px'  }}>Change Email:</h1>
                    <h1 style={{ color: 'black', marginTop: '0px', marginLeft: '80px', fontSize: '20px'}}>CurrentEmail@hotmail.com</h1>
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
