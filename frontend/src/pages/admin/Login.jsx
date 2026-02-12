import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { Lock, Mail } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - Default credentials
    const ADMIN_EMAIL = 'admin@skandrix.com';
    const ADMIN_PASSWORD = 'Admin@123';

    setTimeout(() => {
      if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
        // Store auth token in localStorage (mock)
        localStorage.setItem('skandrix_admin_token', 'mock-admin-token-12345');
        localStorage.setItem('skandrix_admin_email', credentials.email);
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 500);
      } else {
        toast.error('Invalid credentials. Try admin@skandrix.com / Admin@123');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <Toaster position="top-center" />
      
      <Card className="w-full max-w-md border-none shadow-2xl">
        <CardHeader className="space-y-4 pb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Skandrix Admin</h1>
            <p className="text-gray-600">Sign in to manage your website</p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail size={16} />
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@skandrix.com"
                value={credentials.email}
                onChange={handleChange}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                <Lock size={16} />
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleChange}
                className="h-12"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-base"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-2 font-semibold">Default Credentials:</p>
              <p className="text-xs text-gray-600">Email: admin@skandrix.com</p>
              <p className="text-xs text-gray-600">Password: Admin@123</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
