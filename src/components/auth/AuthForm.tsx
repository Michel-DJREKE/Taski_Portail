
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

type AuthFormProps = {
  type: 'login' | 'register' | 'forgot-password';
};

const AuthForm = ({ type }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log({ email, password, name });
  };
  
  const getTitle = () => {
    switch (type) {
      case 'login':
        return 'Connectez-vous à votre compte';
      case 'register':
        return 'Créez votre compte';
      case 'forgot-password':
        return 'Récupérez votre mot de passe';
    }
  };
  
  const getDescription = () => {
    switch (type) {
      case 'login':
        return 'Entrez vos identifiants pour accéder à votre espace TASKI';
      case 'register':
        return 'Commencez gratuitement et découvrez la puissance de TASKI';
      case 'forgot-password':
        return 'Nous vous enverrons un lien pour réinitialiser votre mot de passe';
    }
  };
  
  return (
    <div className="auth-card animate-scale-in">
      <div className="flex flex-col items-center mb-8">
        <Link to="/" className="flex items-center space-x-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-taski-primary flex items-center justify-center text-white font-bold text-xl">T</div>
          <span className="font-semibold text-xl">TASKI</span>
        </Link>
        <h1 className="text-2xl font-bold mb-2 text-center">{getTitle()}</h1>
        <p className="text-foreground/70 text-center">{getDescription()}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'register' && (
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Nom complet
            </label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                placeholder="Entrez votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input pl-10"
                required
              />
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Adresse email
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input pl-10"
              required
            />
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
          </div>
        </div>
        
        {type !== 'forgot-password' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium">
                Mot de passe
              </label>
              {type === 'login' && (
                <Link to="/forgot-password" className="text-xs text-taski-primary hover:text-taski-primary/80 transition-colors">
                  Mot de passe oublié ?
                </Link>
              )}
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={type === 'login' ? 'Entrez votre mot de passe' : 'Créez un mot de passe'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input pl-10 pr-10"
                required
              />
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/60 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        )}
        
        {type === 'register' && (
          <div className="flex items-start space-x-2 mt-4">
            <div className="bg-muted rounded flex items-center justify-center h-5 w-5 mt-0.5 border-2 border-taski-primary/20">
              <CheckCircle size={14} className="text-taski-primary" />
            </div>
            <p className="text-xs text-foreground/70">
              En créant un compte, vous acceptez nos{' '}
              <a href="#" className="text-taski-primary hover:text-taski-primary/80 transition-colors">
                Conditions d'utilisation
              </a>{' '}
              et notre{' '}
              <a href="#" className="text-taski-primary hover:text-taski-primary/80 transition-colors">
                Politique de confidentialité
              </a>
              .
            </p>
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-taski-primary hover:bg-taski-primary/90 text-white button-effect mt-6"
        >
          {type === 'login' 
            ? 'Se connecter' 
            : type === 'register' 
              ? "S'inscrire" 
              : 'Envoyer le lien de récupération'}
        </Button>
        
        {type !== 'forgot-password' && (
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-foreground/60">ou</span>
            </div>
          </div>
        )}
        
        {type !== 'forgot-password' && (
          <Button 
            type="button" 
            variant="outline" 
            className="w-full button-effect"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continuer avec Google
          </Button>
        )}
        
        <div className="text-center mt-6">
          {type === 'login' ? (
            <p className="text-sm text-foreground/70">
              Vous n'avez pas de compte ?{' '}
              <Link to="/register" className="text-taski-primary hover:text-taski-primary/80 transition-colors font-medium">
                Créer un compte
              </Link>
            </p>
          ) : type === 'register' ? (
            <p className="text-sm text-foreground/70">
              Vous avez déjà un compte ?{' '}
              <Link to="/login" className="text-taski-primary hover:text-taski-primary/80 transition-colors font-medium">
                Se connecter
              </Link>
            </p>
          ) : (
            <p className="text-sm text-foreground/70">
              <Link to="/login" className="text-taski-primary hover:text-taski-primary/80 transition-colors font-medium">
                Retour à la connexion
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
