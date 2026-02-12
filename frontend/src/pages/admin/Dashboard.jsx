import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { toast } from 'sonner';
import { Toaster } from '../../components/ui/sonner';
import { 
  LogOut, 
  Home, 
  FileText, 
  Rocket, 
  Mail, 
  Save,
  Upload,
  Image as ImageIcon
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('core');

  // Mock content state (in real app, this would come from backend)
  const [content, setContent] = useState({
    core: {
      heroTitle: 'Business comes first. Technology follows.',
      heroSubtitle: "We're not just another IT firm. We are your growth partner — connecting strategy, network, and technology to build systems that last.",
      heroImage: 'https://images.unsplash.com/photo-1631727498532-b27e7f9796ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MDUzNzY4MHww&ixlib=rb-4.1.0&q=85'
    },
    technology: {
      title: 'Technology That Drives Business Forward',
      subtitle: 'From concept to scale, we build technology solutions that align with your business objectives and growth trajectory.'
    },
    startups: {
      title: 'Every great empire starts with an idea. Let\'s build yours, together.',
      subtitle: 'From pre-seed validation to Series A scaling and beyond — we partner with founders at every stage of the journey.'
    },
    connect: {
      title: 'Let\'s Build Something Extraordinary, Together.',
      subtitle: 'Whether you have a clear vision or just a spark of an idea, we\'re here to listen, guide, and partner with you.'
    },
    pageNames: {
      core: 'Core',
      technology: 'Technology',
      startups: 'Startups',
      connect: 'Connect'
    }
  });

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('skandrix_admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('skandrix_admin_token');
    localStorage.removeItem('skandrix_admin_email');
    toast.success('Logged out successfully');
    setTimeout(() => {
      navigate('/admin/login');
    }, 500);
  };

  const handleContentChange = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handlePageNameChange = (page, value) => {
    setContent(prev => ({
      ...prev,
      pageNames: {
        ...prev.pageNames,
        [page]: value
      }
    }));
  };

  const handleSave = () => {
    // Mock save - in real app, this would call backend API
    toast.success('Changes saved successfully!');
    console.log('Saved content:', content);
  };

  const handleImageUpload = (section, field) => {
    // Mock image upload
    toast.info('Image upload feature - backend integration pending');
  };

  const adminEmail = localStorage.getItem('skandrix_admin_email');

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />

      {/* Admin Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Skandrix Admin Panel</h1>
              <p className="text-sm text-gray-600">Logged in as: {adminEmail}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => navigate('/')}>
                <Home size={16} className="mr-2" />
                View Site
              </Button>
              <Button variant="destructive" size="sm" onClick={handleLogout}>
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Content Management</h2>
          <p className="text-gray-600">Edit page names, content, and images for your website</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-3xl">
            <TabsTrigger value="core">Core</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="startups">Startups</TabsTrigger>
            <TabsTrigger value="connect">Connect</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Core Page Content */}
          <TabsContent value="core">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Core Page Content</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hero Title</label>
                  <Input
                    value={content.core.heroTitle}
                    onChange={(e) => handleContentChange('core', 'heroTitle', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Hero Subtitle</label>
                  <Textarea
                    value={content.core.heroSubtitle}
                    onChange={(e) => handleContentChange('core', 'heroSubtitle', e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <ImageIcon size={16} />
                    Hero Image
                  </label>
                  <div className="flex gap-4 items-start">
                    <Input
                      value={content.core.heroImage}
                      onChange={(e) => handleContentChange('core', 'heroImage', e.target.value)}
                      placeholder="Image URL"
                      className="flex-1"
                    />
                    <Button variant="outline" onClick={() => handleImageUpload('core', 'heroImage')}>
                      <Upload size={16} className="mr-2" />
                      Upload
                    </Button>
                  </div>
                  {content.core.heroImage && (
                    <img 
                      src={content.core.heroImage} 
                      alt="Preview" 
                      className="w-full h-48 object-cover rounded-lg mt-2"
                    />
                  )}
                </div>

                <Button onClick={handleSave} size="lg" className="w-full">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technology Page Content */}
          <TabsContent value="technology">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Technology Page Content</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Page Title</label>
                  <Input
                    value={content.technology.title}
                    onChange={(e) => handleContentChange('technology', 'title', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Page Subtitle</label>
                  <Textarea
                    value={content.technology.subtitle}
                    onChange={(e) => handleContentChange('technology', 'subtitle', e.target.value)}
                    rows={3}
                  />
                </div>

                <Button onClick={handleSave} size="lg" className="w-full">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Startups Page Content */}
          <TabsContent value="startups">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Startups Page Content</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Page Title</label>
                  <Input
                    value={content.startups.title}
                    onChange={(e) => handleContentChange('startups', 'title', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Page Subtitle</label>
                  <Textarea
                    value={content.startups.subtitle}
                    onChange={(e) => handleContentChange('startups', 'subtitle', e.target.value)}
                    rows={3}
                  />
                </div>

                <Button onClick={handleSave} size="lg" className="w-full">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Connect Page Content */}
          <TabsContent value="connect">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Connect Page Content</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Page Title</label>
                  <Input
                    value={content.connect.title}
                    onChange={(e) => handleContentChange('connect', 'title', e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Page Subtitle</label>
                  <Textarea
                    value={content.connect.subtitle}
                    onChange={(e) => handleContentChange('connect', 'subtitle', e.target.value)}
                    rows={3}
                  />
                </div>

                <Button onClick={handleSave} size="lg" className="w-full">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings - Page Names */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Page Names & Settings</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Navigation Page Names</h4>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Core Page Name</label>
                    <Input
                      value={content.pageNames.core}
                      onChange={(e) => handlePageNameChange('core', e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Technology Page Name</label>
                    <Input
                      value={content.pageNames.technology}
                      onChange={(e) => handlePageNameChange('technology', e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Startups Page Name</label>
                    <Input
                      value={content.pageNames.startups}
                      onChange={(e) => handlePageNameChange('startups', e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Connect Page Name</label>
                    <Input
                      value={content.pageNames.connect}
                      onChange={(e) => handlePageNameChange('connect', e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <Button onClick={handleSave} size="lg" className="w-full">
                  <Save size={16} className="mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
