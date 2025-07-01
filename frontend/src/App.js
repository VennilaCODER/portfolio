import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      text: "Absolutely stunning photos! The attention to detail and creative vision exceeded all our expectations. Our wedding day was captured beautifully.",
      author: "Sarah & Michael Johnson",
      type: "Wedding Photography"
    },
    {
      text: "Professional, creative, and so easy to work with. The family portraits are now our most treasured memories. Highly recommend!",
      author: "The Williams Family",
      type: "Family Photography"
    },
    {
      text: "Outstanding headshots that perfectly captured my professional image. The process was smooth and the results were incredible.",
      author: "David Chen",
      type: "Corporate Headshots"
    }
  ];

  // Portfolio items
  const portfolioItems = [
    {
      image: "https://images.pexels.com/photos/32737657/pexels-photo-32737657.jpeg",
      title: "Elegant Wedding",
      category: "Wedding"
    },
    {
      image: "https://images.unsplash.com/photo-1700157679224-56c9f3d15118",
      title: "Romantic Moments",
      category: "Wedding"
    },
    {
      image: "https://images.pexels.com/photos/949224/pexels-photo-949224.jpeg",
      title: "Scenic Wedding",
      category: "Wedding"
    },
    {
      image: "https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg",
      title: "Creative Portrait",
      category: "Portrait"
    },
    {
      image: "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9",
      title: "Professional Portrait",
      category: "Portrait"
    },
    {
      image: "https://images.unsplash.com/photo-1588979355313-6711a095465f",
      title: "Family Joy",
      category: "Family"
    },
    {
      image: "https://images.pexels.com/photos/3730990/pexels-photo-3730990.jpeg",
      title: "Warm Family",
      category: "Family"
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      title: "Executive Headshot",
      category: "Corporate"
    }
  ];

  // Services data
  const services = [
    {
      title: "Wedding Photography",
      description: "Capturing your special day with artistic vision and attention to every precious moment",
      price: "Starting at $2,500",
      features: ["8-10 hours coverage", "Engagement session", "Online gallery", "High-resolution images"]
    },
    {
      title: "Portrait Sessions",
      description: "Professional portraits that showcase your personality and style",
      price: "Starting at $350",
      features: ["1-2 hour session", "Multiple outfit changes", "Retouched images", "Print release"]
    },
    {
      title: "Family Photography",
      description: "Treasured family moments captured with warmth and creativity",
      price: "Starting at $450",
      features: ["1 hour session", "Multiple locations", "All family members", "Digital gallery"]
    },
    {
      title: "Corporate Headshots",
      description: "Professional headshots that enhance your business image",
      price: "Starting at $200",
      features: ["Studio or location", "Multiple looks", "Quick turnaround", "LinkedIn optimization"]
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
                Studio Vision
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-stone-700 hover:text-stone-900 transition-colors">Home</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-stone-700 hover:text-stone-900 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('services')} className="text-stone-700 hover:text-stone-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-stone-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-stone-900 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-stone-700 hover:text-stone-900 transition-colors">Home</button>
              <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-stone-700 hover:text-stone-900 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-stone-700 hover:text-stone-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-stone-700 hover:text-stone-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-stone-700 hover:text-stone-900 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Capturing
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Moments
            </span>
            That Matter
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Professional photography that tells your story with artistry, emotion, and timeless elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-stone-900 transform hover:scale-105 transition-all duration-300"
            >
              Book Session
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-6">Our Portfolio</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              A collection of our finest work, showcasing the beauty and emotion in every frame
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-stone-300">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-6">Our Services</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Professional photography services tailored to capture your most important moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-stone-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-amber-600 mb-6">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-stone-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-stone-900 mb-8">About Studio Vision</h2>
              <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                <p>
                  With over 8 years of experience in professional photography, Studio Vision has been dedicated to capturing life's most precious moments with artistic vision and technical excellence.
                </p>
                <p>
                  Our approach combines modern techniques with timeless artistry, ensuring every image tells a story that resonates for generations. We believe that photography is not just about taking pictures – it's about preserving emotions, celebrating love, and creating visual narratives that stand the test of time.
                </p>
                <p>
                  From intimate portraits to grand celebrations, we bring passion, creativity, and professionalism to every shoot. Our goal is to make you feel comfortable and confident, allowing your authentic self to shine through in every photograph.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-stone-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">8+</div>
                  <div className="text-stone-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-stone-600">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1641236210747-48bc43e4517f"
                  alt="Professional photographer at work"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">📸</div>
                  <div className="text-sm font-semibold">Studio Vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-16">What Our Clients Say</h2>
          
          <div className="relative">
            <div className="testimonial-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <p className="text-xl mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-semibold">{testimonials[currentTestimonial].author}</h4>
                <p className="text-stone-300">{testimonials[currentTestimonial].type}</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-amber-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-6">Let's Create Something Beautiful</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Ready to capture your special moments? Get in touch and let's discuss how we can bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Studio Location</h4>
                    <p className="text-stone-600">123 Photography Lane, Creative District, City 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Phone</h4>
                    <p className="text-stone-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Email</h4>
                    <p className="text-stone-600">hello@studiovision.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-stone-900 mb-4">Follow Our Work</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform">
                    IG
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform">
                    FB
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform">
                    TW
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Book Your Session</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300">
                    <option>Wedding Photography</option>
                    <option>Portrait Session</option>
                    <option>Family Photography</option>
                    <option>Corporate Headshots</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    placeholder="Tell us about your vision and any specific requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Studio Vision</h3>
              <p className="text-stone-400 mb-6 leading-relaxed">
                Professional photography studio dedicated to capturing life's most precious moments with artistic vision and technical excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Terms</a>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">FAQ</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Wedding Photography</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Portrait Sessions</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Family Photography</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate Headshots</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-stone-400">
                <li>123 Photography Lane</li>
                <li>Creative District, City 12345</li>
                <li>(555) 123-4567</li>
                <li>hello@studiovision.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; 2024 Studio Vision. All rights reserved. Crafted with ❤️ for capturing beautiful moments.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;