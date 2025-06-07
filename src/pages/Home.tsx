
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6214a8] to-[#4c0e7a] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-md">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/ba7f1f54-2df2-4f44-8af1-522b7ccc0810.png" 
                alt="Uplaud Logo" 
                className="h-16 w-auto"
              />
            </div>
            <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Uplaud
            </CardTitle>
            <CardDescription className="text-xl text-[#5EEAD4] max-w-2xl mx-auto">
              The modern platform for collecting authentic user reviews. 
              Build trust, grow your business, and connect with your community.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button 
                asChild 
                className="bg-[#5EEAD4] hover:bg-[#5EEAD4]/90 text-[#111827] font-semibold py-3"
              >
                <Link to="/register">Get Started</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-[#5EEAD4] text-[#5EEAD4] hover:bg-[#5EEAD4]/10 py-3"
              >
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#5EEAD4]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#5EEAD4] text-xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Fast Setup</h3>
                <p className="text-white/80 text-sm">Get started in minutes with our streamlined onboarding process</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#5EEAD4]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#5EEAD4] text-xl">🔒</span>
                </div>
                <h3 className="font-semibold mb-2">Secure</h3>
                <p className="text-white/80 text-sm">Enterprise-grade security with Firebase authentication</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#5EEAD4]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#5EEAD4] text-xl">📱</span>
                </div>
                <h3 className="font-semibold mb-2">Mobile Ready</h3>
                <p className="text-white/80 text-sm">Responsive design that works perfectly on all devices</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
