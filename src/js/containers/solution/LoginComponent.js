import React from 'react';

export default ({username, password, onFieldChange, onSubmit}) => (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
    }}>
        <label>
            <div>Username</div>
            <input
                name={'username'}
                placeholder={'ex:johndoe2014'}
                onChange={(e) => onFieldChange({username: e.target.value})}
                value={username}
            />
        </label>
        <label>
            <div>Password</div>
            <input
                name={'password'}
                type={'password'}
                placeholder={'your password'}
                onChange={(e) => onFieldChange({password: e.target.value})}
                value={password}
            />
        </label>
        <div>
            <button>Login</button>
        </div>
    </form>
)