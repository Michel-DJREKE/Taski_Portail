
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-taski-light px-4">
      <div className="w-full max-w-md">
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default Login;
