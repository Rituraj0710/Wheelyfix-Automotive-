import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageBanner from "@/components/PageBanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Bike, Clock, Shield, Zap, Users } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"

const Services = () => {
  const services = [
    {
      category: "Car Services",
      icon: <Car className="h-8 w-8" />,
      items: [
        { name: "Car Services", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "General service and periodic maintenance packages.", popular: true },
        { name: "AC Service & Repair", image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "AC diagnostics, gas refill, and cooling system repair.", popular: false },
        { name: "Batteries", image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Battery testing, replacement, and terminal cleaning.", popular: false },
        { name: "Tyres & Wheel Care", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Tyre change, balancing, alignment, and rotation.", popular: false },
        { name: "Denting & Painting", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Body repair, paint jobs, and scratch removal.", popular: false },
        { name: "Detailing Services", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Interior and exterior detailing with protection.", popular: false },
        { name: "Car Spa & Cleaning", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Deep wash, interior vacuuming, and polishing.", popular: false },
        { name: "Car Inspections", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Comprehensive inspection with health report.", popular: false },
        { name: "Windshields & Lights", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Windshield replacement and lighting repair.", popular: false },
        { name: "Suspension & Fitments", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Suspension service and accessories fitments.", popular: false },
        { name: "Clutch & Body Parts", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "Clutch work and body parts replacement.", popular: false },
        { name: "Insurance Claims", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop&crop=center&q=80", price: "", duration: "", description: "End-to-end assistance for insurance claims.", popular: false }
      ]
    },
    {
      category: "Bike Services",
      icon: <Bike className="h-8 w-8" />,
      items: [
        { name: "Basic Service", image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=300&fit=crop&crop=center&q=80", price: "₹499", duration: "1 hour", description: "Engine oil change, chain lubrication, basic check", popular: false },
        { name: "Comprehensive Service", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop&crop=center&q=80", price: "₹1299", duration: "2 hours", description: "Complete bike inspection and maintenance", popular: true },
        { name: "Chain & Sprocket", image: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=400&h=300&fit=crop&crop=center&q=80", price: "₹899", duration: "2 hours", description: "Chain cleaning, sprocket inspection, replacement", popular: false },
        { name: "Brake Service", image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400&h=300&fit=crop&crop=center&q=80", price: "₹699", duration: "1.5 hours", description: "Brake pad replacement, cable adjustment", popular: false },
        { name: "Engine Tuning", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=300&fit=crop&crop=center&q=80", price: "₹1599", duration: "3 hours", description: "Carburetor cleaning, spark plug replacement", popular: false }
      ]
    }
  ]

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Genuine Parts",
      description: "100% authentic OEM and aftermarket parts"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Service",
      description: "Most services completed within 2-4 hours"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    }
  ]

  const navigate = useNavigate()
  const location = useLocation()
  const qs = new URLSearchParams(location.search)
  const selectedType = qs.get('type') // 'car' | 'bike'
  const { user } = useAuth()

  // Scroll to the requested section when coming with ?type=car|bike
  // and also when the query param changes via client-side navigation
  React.useEffect(() => {
    if (!selectedType) return
    const targetId = selectedType === 'car' ? 'car-services' : 'bike-services'
    const el = document.getElementById(targetId)
    if (el) {
      // small timeout ensures the section is in the DOM and laid out
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }
  }, [selectedType])

  const toSlug = (value: string) =>
    value
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')


  const handleBookNow = (serviceName: string) => {
    if (!user) {
      // Store intended path for post-login redirection
      localStorage.setItem('redirectAfterLoginPath', '/booking')
      navigate('/login', { state: { from: '/booking', serviceType: serviceName } })
      return
    }
    navigate('/booking', { state: { serviceType: serviceName } })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner
        title="Expert Vehicle Maintenance"
        subtitle="Comprehensive car and bike services with genuine parts and certified technicians"
        imageUrl="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1920&auto=format&fit=crop"
      >
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg">Book Service Now</Button>
        <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-lg">View All Services</Button>
      </PageBanner>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of automotive services designed to keep your vehicle in top condition
            </p>
          </div>

          <div className="space-y-16">
            {services.map((category) => (
              <div
                key={category.category}
                id={category.category.toLowerCase().includes('car') ? 'car-services' : 'bike-services'}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm mb-4">
                    <div className="text-accent">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service) => (
                    <Card key={service.name} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                      {service.image && (
                        <div className="mb-4 overflow-hidden rounded-md h-40">
                          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{service.name}</CardTitle>
                          {service.popular && (
                            <Badge className="bg-accent text-white">Most Popular</Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-3xl font-bold text-accent">{service.price}</div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <div className="space-y-3">
                          <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => handleBookNow(service.name)}>
                            Book Now
                          </Button>
                          <Link to={`/services/${toSlug(service.name)}`}>
                            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Need Custom Service?</h3>
            <p className="text-xl text-white/90 mb-8">
              Contact us for specialized vehicle maintenance needs. Our expert team is ready to help with any automotive challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 text-lg">
                  Contact Us
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent px-8 py-3 text-lg">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services