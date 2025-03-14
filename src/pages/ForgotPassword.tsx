
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-taski-light dark:bg-taski-dark px-4">
      {/* Background bubbles */}
      <div className="taski-bubble w-96 h-96 -left-48 top-10 animate-morph"></div>
      <div className="taski-bubble w-80 h-80 right-0 bottom-0 animate-morph animation-delay-1000"></div>
      <div className="taski-bubble w-64 h-64 left-1/4 bottom-20 animate-morph animation-delay-2000"></div>
      
      <div className="w-full max-w-md relative z-10">
        <AuthForm type="forgot-password" />
      </div>
    </div>
  );
};

export default ForgotPassword;
