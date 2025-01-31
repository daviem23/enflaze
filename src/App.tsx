import React, { useState } from 'react';
import { Search, BookOpen, Award, TrendingUp, Facebook, Twitter, Linkedin, Youtube, Star, Clock, Users, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <BookOpen className="text-[#008080] w-8 h-8 mr-2" />
                <span className="text-[#008080] text-2xl font-bold">Enflaze</span>
              </div>
              <div className="hidden lg:flex items-center space-x-8 ml-10">
                <a href="#" className="text-[#000050] hover:text-[#50C878] font-medium">Home</a>
                <a href="#" className="text-[#000050] hover:text-[#50C878] font-medium">Explore</a>
                <a href="#" className="text-[#000050] hover:text-[#50C878] font-medium">About</a>
                <a href="#" className="text-[#000050] hover:text-[#50C878] font-medium">Contact</a>
                <a href="#" className="text-[#000050] hover:text-[#50C878] font-medium">Blog</a>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-[#000050] hover:text-[#50C878] font-medium">Sign In</button>
              <button className="bg-[#50C878] text-white px-6 py-2 rounded-full hover:bg-[#008080] transition-colors font-medium">
                Get Started
              </button>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#000050]">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-[#000050] hover:text-[#50C878] font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-[#000050] hover:text-[#50C878] font-medium">Explore</a>
              <a href="#" className="block px-3 py-2 text-[#000050] hover:text-[#50C878] font-medium">About</a>
              <a href="#" className="block px-3 py-2 text-[#000050] hover:text-[#50C878] font-medium">Contact</a>
              <a href="#" className="block px-3 py-2 text-[#000050] hover:text-[#50C878] font-medium">Blog</a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="w-full text-center py-2 text-[#000050] hover:text-[#50C878] font-medium">Sign In</button>
                <button className="w-full mt-2 bg-[#50C878] text-white px-6 py-2 rounded-full hover:bg-[#008080] transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#008080] to-[#50C878] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#008080]/90 to-[#50C878]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Future with <br />Expert-Led Online Learning
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join millions of learners worldwide and access curated courses that enhance your professional capabilities and accelerate your career growth.
            </p>
            <div className="flex justify-center mb-8">
              <div className="relative max-w-2xl w-full">
                <input
                  type="text"
                  placeholder="Search courses, skills, or topics..."
                  className="w-full px-6 py-4 rounded-full text-[#000050] focus:outline-none focus:ring-2 focus:ring-[#50C878] shadow-lg"
                />
                <button className="absolute right-2 top-2 bg-[#50C878] text-white p-2 rounded-full hover:bg-[#008080] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>50K+ Active Learners</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>1000+ Curated Courses</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>4.8/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Enflaze?</h2>
            <p className="text-[#000050] max-w-2xl mx-auto">Our platform offers a comprehensive learning experience with expert-curated content and industry-recognized certifications.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-[#F5F5F5] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <BookOpen className="text-[#008080] w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Curated Courses</h3>
              <p className="text-[#000050] leading-relaxed">Expert-vetted courses from top platforms ensuring the highest quality learning experience</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#F5F5F5] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <Award className="text-[#008080] w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Certifications</h3>
              <p className="text-[#000050] leading-relaxed">Industry-recognized certificates to validate your skills and boost your credentials</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#F5F5F5] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <TrendingUp className="text-[#008080] w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-[#000050] leading-relaxed">Personalized learning paths designed to accelerate your professional development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-[#F5F5F5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
              <p className="text-[#000050]">Start your learning journey with our most popular courses</p>
            </div>
            <button className="hidden md:flex items-center text-[#008080] hover:text-[#50C878] font-medium">
              View All Courses <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Science Fundamentals",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                duration: "8 weeks",
                students: "2.5k+",
                rating: 4.8
              },
              {
                title: "UX Design Masterclass",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                duration: "6 weeks",
                students: "1.8k+",
                rating: 4.9
              },
              {
                title: "Business Analytics",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                duration: "10 weeks",
                students: "3.2k+",
                rating: 4.7
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#008080]">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-[#008080] transition-colors">{course.title}</h3>
                  <div className="flex items-center text-sm text-[#000050] mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{course.duration}</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span className="mr-4">{course.students}</span>
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <button className="w-full bg-[#50C878] text-white px-6 py-3 rounded-lg hover:bg-[#008080] transition-colors font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="md:hidden w-full mt-8 text-center text-[#008080] hover:text-[#50C878] font-medium flex items-center justify-center">
            View All Courses <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Learners" },
              { number: "1000+", label: "Courses Available" },
              { number: "200+", label: "Expert Instructors" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-[#F5F5F5] p-8 rounded-xl">
                <div className="text-3xl font-bold text-[#008080] mb-2">{stat.number}</div>
                <div className="text-[#000050]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#008080] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 mr-2" />
                <span className="text-2xl font-bold">Enflaze</span>
              </div>
              <p className="text-white/80 mb-6">
                Empowering careers through expert-led online learning and professional development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#50C878] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#50C878] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#50C878] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#50C878] transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Explore</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Courses</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Platforms</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Certifications</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Affiliate Disclosure</a></li>
                <li><a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-white/80 mb-4">Stay updated with the latest in online learning and career development.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-[#000050] focus:outline-none focus:ring-2 focus:ring-[#50C878]"
                />
                <button className="w-full bg-[#50C878] text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#008080] transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/80">&copy; {new Date().getFullYear()} Enflaze. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Terms</a>
                <a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Privacy</a>
                <a href="#" className="text-white/80 hover:text-[#50C878] transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;