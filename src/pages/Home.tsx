
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Star, Shield, AlertTriangle } from 'lucide-react';
import { useFirebaseAuth } from '@/contexts/FirebaseAuthContext';

const Home = () => {
  const { isFirebaseConfigured } = useFirebaseAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6214a8] to-[#4c0e7a]">
      {/* Configuration Warning */}
      {!isFirebaseConfigured && (
        <div className="bg-yellow-500 text-black px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto">
            <AlertTriangle size={20} />
            <span className="font-medium">
              Firebase not configured. Please set up your Firebase credentials to enable authentication.
            </span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/ba7f1f54-2df2-4f44-8af1-522b7ccc0810.png" 
              alt="Uplaud Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-[#5EEAD4]">Uplaud</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            The modern platform for collecting authentic user reviews and building trust in your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#5EEAD4] text-[#6214a8] hover:bg-[#5EEAD4]/90 font-semibold px-8 py-4 text-lg"
              disabled={!isFirebaseConfigured}
            >
              <Link to="/register">Get Started</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
              disabled={!isFirebaseConfigured}
            >
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
          {!isFirebaseConfigured && (
            <p className="text-[#5EEAD4] mt-4 text-sm">
              Authentication disabled - Firebase configuration required
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-[#5EEAD4] mb-4" />
              <CardTitle>Authentic Reviews</CardTitle>
              <CardDescription className="text-white/80">
                Collect genuine feedback from real users with verified accounts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <Users className="h-12 w-12 text-[#5EEAD4] mb-4" />
              <CardTitle>Community Driven</CardTitle>
              <CardDescription className="text-white/80">
                Build a trusted community of reviewers and businesses
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <Star className="h-12 w-12 text-[#5EEAD4] mb-4" />
              <CardTitle>Easy to Use</CardTitle>
              <CardDescription className="text-white/80">
                Simple, intuitive interface for both reviewers and businesses
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center p-8">
          <CardHeader>
            <Shield className="h-16 w-16 text-[#5EEAD4] mx-auto mb-4" />
            <CardTitle className="text-white text-3xl mb-4">
              Ready to Build Trust?
            </CardTitle>
            <CardDescription className="text-white/90 text-lg mb-6">
              Join thousands of businesses and customers creating authentic review experiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              asChild 
              size="lg" 
              className="bg-[#5EEAD4] text-[#6214a8] hover:bg-[#5EEAD4]/90 font-semibold px-12 py-4 text-lg"
              disabled={!isFirebaseConfigured}
            >
              <Link to="/register">Start Your Journey</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
