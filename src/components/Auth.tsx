import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';

import { User } from 'firebase/auth';
import { signIn, signOut, register } from '../features/auth/authSlice';

function Auth() {
    const dispatch = useDispatch<AppDispatch>();
    const user: User | null = useSelector((state: RootState) => state.auth.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSignIn = () => {
        dispatch(signIn({ email, password }));
    };

    const handleRegister = () => {
        if (password === confirmPassword) {
            dispatch(register({ email, password }));
        } else {
            // Handle password mismatch error
            console.log("Passwords do not match");
        }
    };

    const handleSignOut = () => {
        dispatch(signOut());
    };

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    if (user) {
        return (
            <div>
                Signed in as {user?.email}
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        );
    }

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
            {isRegistering && (
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    type="password"
                />
            )}
            <button onClick={isRegistering ? handleRegister : handleSignIn}>
                {isRegistering ? 'Register' : 'Sign in'}
            </button>
            <button onClick={toggleForm}>{isRegistering ? 'Sign in instead' : 'Register instead'}</button>
        </div>
    );
}

export default Auth;