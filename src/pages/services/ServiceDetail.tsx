import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Car, Snowflake, Battery, Gauge, Paintbrush, Sparkles, ShowerHead, Search, Lightbulb, Layers, Wrench, Shield } from 'lucide-react';

const toTitle = (slug?: string) => {
  if (!slug) return 'Service';
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const ServiceDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  const gallery = useMemo(() => {
    const u = (path: string) => `${path}?w=1200&q=80&auto=format&fit=crop`;
    const maps: Record<string, string[]> = {
      'tyre-service': [
        u('https://images.unsplash.com/photo-1560472354-b33ff0c44a43'),
        u('https://images.unsplash.com/photo-1503376780353-7e6692767b70'),
        u('https://images.unsplash.com/photo-1542362567-b07e54358753'),
      ],
      'ac-service-and-repair': [
        u('https://images.unsplash.com/photo-1486006920555-c77dcf18193c'),
        u('https://images.unsplash.com/photo-1606229365485-93a05c445a1f'),
        u('https://images.unsplash.com/photo-1581092160607-ee22621dd758'),
      ],
      'batteries': [
        u('https://images.unsplash.com/photo-1593941707882-a5bac6861d75'),
        u('https://images.unsplash.com/photo-1603072387173-4017b0fb4d58'),
        u('https://images.unsplash.com/photo-1617302223919-9a47c97a0d8d'),
      ],
      'denting-and-painting': [
        u('https://images.unsplash.com/photo-1607860108855-64acf2078ed9'),
        u('https://images.unsplash.com/photo-1520975922284-9c5ed2f5a84f'),
        u('https://images.unsplash.com/photo-1541444455710-1fef2758bded'),
      ],
      'car-services': [
        u('https://images.unsplash.com/photo-1542362567-b07e54358753'),
        u('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8'),
        u('https://images.unsplash.com/photo-1517048676732-d65bc937f952'),
      ],
      'detailing-services': [
        u('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3'),
        u('https://images.unsplash.com/photo-1563729784474-d77dbb933a9a'),
        u('https://images.unsplash.com/photo-1593942804520-37d7df70a3db'),
      ],
      'car-spa-and-cleaning': [
        u('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2'),
        u('https://images.unsplash.com/photo-1558222218-b7b54eede3da'),
        u('https://images.unsplash.com/photo-1483104879057-379b6c2fe57f'),
      ],
      'car-inspections': [
        u('https://images.unsplash.com/photo-1517048676732-d65bc937f952'),
        u('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023'),
        u('https://images.unsplash.com/photo-1532635241-17e820acc59f'),
      ],
      'windshields-and-lights': [
        u('https://images.unsplash.com/photo-1544636331-e26879cd4d9b'),
        u('https://images.unsplash.com/photo-1483721310020-03333e577078'),
        u('https://images.unsplash.com/photo-1493238792000-8113da705763'),
      ],
      'suspension-and-fitments': [
        u('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13'),
        u('https://images.unsplash.com/photo-1558618666-fcd25c85cd64'),
        u('https://images.unsplash.com/photo-1617975608220-4e6f1d88f7e7'),
      ],
      'engines-and-carburetor': [
        u('https://images.unsplash.com/photo-1487754180451-c456f719a1fc'),
        u('https://images.unsplash.com/photo-1587731556938-38755bff5ab7'),
        u('https://images.unsplash.com/photo-1605557617923-4f21f2f9c454'),
      ],
      'service-and-repair': [
        u('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8'),
        u('https://images.unsplash.com/photo-1581093588401-2fe82b7f1cfd'),
        u('https://images.unsplash.com/photo-1551836022-4c4c79ecde51'),
      ],
      'transmission': [
        u('https://images.unsplash.com/photo-1517048676732-d65bc937f952'),
        u('https://images.unsplash.com/photo-1518779578993-ec3579fee39f'),
        u('https://images.unsplash.com/photo-1532635333047-43f943a11b02'),
      ],
      'fitments': [
        u('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023'),
        u('https://images.unsplash.com/photo-1503376780353-7e6692767b70'),
        u('https://images.unsplash.com/photo-1517048676732-d65bc937f952'),
      ],
      'body-parts': [
        u('https://images.unsplash.com/photo-1607860108855-64acf2078ed9'),
        u('https://images.unsplash.com/photo-1520975922284-9c5ed2f5a84f'),
        u('https://images.unsplash.com/photo-1541444455710-1fef2758bded'),
      ],
      'clutch-and-body-parts': [
        u('https://images.unsplash.com/photo-1607860108855-64acf2078ed9'),
        u('https://images.unsplash.com/photo-1519750783826-e2420f4d687f'),
        u('https://images.unsplash.com/photo-1541444455710-1fef2758bded'),
      ],
      'electricals-services': [
        u('https://images.unsplash.com/photo-1581092160607-ee22621dd758'),
        u('https://images.unsplash.com/photo-1567443024551-f3e3cc0b3f4e'),
        u('https://images.unsplash.com/photo-1541417904950-b855846fe074'),
      ],
      'tyres-and-wheel-care': [
        u('https://images.unsplash.com/photo-1560472354-b33ff0c44a43'),
        u('https://images.unsplash.com/photo-1503376780353-7e6692767b70'),
        u('https://images.unsplash.com/photo-1542362567-b07e54358753'),
      ],
      'insurance-claims': [
        u('https://images.unsplash.com/photo-1571068316344-75bc76f77890'),
        u('https://images.unsplash.com/photo-1560759226-14da22a643a1'),
        u('https://images.unsplash.com/photo-1543164904-8b427e6a0f0c'),
      ],
    };
    return maps[slug || ''] || [
      u('https://images.unsplash.com/photo-1542362567-b07e54358753'),
      u('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8'),
      u('https://images.unsplash.com/photo-1517048676732-d65bc937f952'),
    ];
  }, [slug]);

  const descriptionMap: Record<string, string> = {
    'car-services': 'General service and periodic maintenance packages that keep your car reliable and efficient.',
    'ac-service-and-repair': 'AC diagnostics, gas refill, evaporator and condenser cleaning, and complete cooling system repair.',
    'batteries': 'Battery health test, charging system check, terminal cleaning, and quick replacement with warranty.',
    'tyres-and-wheel-care': 'Tyre change, balancing, alignment, puncture repair and rotation for improved safety and mileage.',
    'denting-and-painting': 'Panel repair, paint matching, scratch removal and finishing in a controlled paint booth.',
    'detailing-services': 'Interior and exterior detailing including polishing, protection and deep cleaning.',
    'car-spa-and-cleaning': 'Premium wash, foam cleaning, interior vacuum and dashboard treatment for a fresh cabin.',
    'car-inspections': 'Comprehensive multipoint inspection with a digital health report before service or purchase.',
    'windshields-and-lights': 'Windshield crack repair/replacement and headlight restoration or bulb replacement.',
    'suspension-and-fitments': 'Shock absorbers, lower arms, link rods and accessories fitments calibrated to OEM spec.',
    'clutch-and-body-parts': 'Clutch plate, pressure plate and release bearing replacement with related body part repairs.',
    'insurance-claims': 'End-to-end cashless claim assistance, documentation and liaison with insurance providers.',
  };

  const iconMap: Record<string, React.ElementType> = {
    'car-services': Car,
    'ac-service-and-repair': Snowflake,
    'batteries': Battery,
    'tyres-and-wheel-care': Gauge,
    'denting-and-painting': Paintbrush,
    'detailing-services': Sparkles,
    'car-spa-and-cleaning': ShowerHead,
    'car-inspections': Search,
    'windshields-and-lights': Lightbulb,
    'suspension-and-fitments': Layers,
    'clutch-and-body-parts': Wrench,
    'insurance-claims': Shield,
  };

  const pricingMap: Record<string, { label: string; price: string }[]> = {
    'car-services': [
      { label: 'Basic', price: 'From ₹1,499' },
      { label: 'Standard', price: 'From ₹2,999' },
      { label: 'Comprehensive', price: 'From ₹4,999' },
    ],
    'ac-service-and-repair': [
      { label: 'Gas Refill', price: 'From ₹1,299' },
      { label: 'Full Service', price: 'From ₹2,499' },
      { label: 'Component Repair', price: 'From ₹3,999' },
    ],
    'batteries': [
      { label: 'Testing', price: 'From ₹299' },
      { label: 'Replacement (OEM)', price: 'From ₹3,499' },
      { label: 'Replacement (Premium)', price: 'From ₹4,999' },
    ],
    'tyres-and-wheel-care': [
      { label: 'Balancing', price: 'From ₹499' },
      { label: 'Alignment', price: 'From ₹699' },
      { label: 'Rotation', price: 'From ₹399' },
    ],
    'denting-and-painting': [
      { label: 'Scratch Removal', price: 'From ₹1,499' },
      { label: 'Panel Dent & Paint', price: 'From ₹4,999' },
      { label: 'Full Body Paint', price: 'From ₹24,999' },
    ],
    'detailing-services': [
      { label: 'Interior Detailing', price: 'From ₹2,499' },
      { label: 'Exterior Polish', price: 'From ₹1,999' },
      { label: 'Ceramic Coating', price: 'From ₹14,999' },
    ],
    'car-spa-and-cleaning': [
      { label: 'Basic Wash', price: 'From ₹399' },
      { label: 'Foam Wash', price: 'From ₹699' },
      { label: 'Deep Cleaning', price: 'From ₹1,999' },
    ],
    'car-inspections': [
      { label: 'Basic Inspection', price: 'From ₹499' },
      { label: 'Comprehensive', price: 'From ₹1,499' },
      { label: 'Pre-purchase', price: 'From ₹2,499' },
    ],
    'windshields-and-lights': [
      { label: 'Chip Repair', price: 'From ₹1,199' },
      { label: 'Windshield Replace', price: 'From ₹6,999' },
      { label: 'Headlight Restore', price: 'From ₹1,499' },
    ],
    'suspension-and-fitments': [
      { label: 'Inspection', price: 'From ₹699' },
      { label: 'Shock Absorbers', price: 'From ₹4,499' },
      { label: 'Accessories Fitment', price: 'From ₹999' },
    ],
    'clutch-and-body-parts': [
      { label: 'Clutch Overhaul', price: 'From ₹5,999' },
      { label: 'Body Part Replace', price: 'From ₹2,999' },
      { label: 'OEM Fitment', price: 'From ₹1,499' },
    ],
    'insurance-claims': [
      { label: 'Survey Assist', price: '₹0' },
      { label: 'Paperwork', price: '₹0' },
      { label: 'Cashless Process', price: '₹0' },
    ],
  };

  const faqsMap: Record<string, { q: string; a: string }[]> = {
    'car-services': [
      { q: 'How often should I service my car?', a: 'Every 10,000 km or 12 months, whichever comes first.' },
      { q: 'Do you use OEM parts?', a: 'Yes, OEM/OES parts with service warranty.' },
    ],
    'ac-service-and-repair': [
      { q: 'How long does AC service take?', a: 'Typically 2–3 hours depending on the job.' },
      { q: 'Do you check for gas leaks?', a: 'Yes, we pressure-test and inspect for leaks.' },
    ],
    'batteries': [
      { q: 'Is pickup and drop available?', a: 'Yes, complimentary within the service radius.' },
      { q: 'What warranty is included?', a: 'Varies by brand/model (12–48 months).' },
    ],
    'tyres-and-wheel-care': [
      { q: 'Do you provide wheel alignment and balancing?', a: 'Yes, computerized alignment and dynamic balancing are available.' },
      { q: 'How often should I rotate tyres?', a: 'Every 8,000–10,000 km for even wear.' },
    ],
    'denting-and-painting': [
      { q: 'Is color matching guaranteed?', a: 'We use paint code matching and clear coat blending to ensure a factory-like finish.' },
      { q: 'How long does panel paint take?', a: 'Usually 24–48 hours including curing time.' },
    ],
    'detailing-services': [
      { q: 'How long does ceramic coating last?', a: 'Typically 1–3 years depending on product and maintenance.' },
      { q: 'Do you offer interior sanitization?', a: 'Yes, anti-bacterial treatment is available as an add-on.' },
    ],
    'car-spa-and-cleaning': [
      { q: 'What is included in deep cleaning?', a: 'Full exterior wash, interior vacuum, upholstery shampoo, and dashboard treatment.' },
      { q: 'Is engine bay cleaning safe?', a: 'We use controlled, low-pressure methods and cover sensitive components.' },
    ],
    'car-inspections': [
      { q: 'Do you provide pre-purchase inspection?', a: 'Yes, with a digital health report and estimate for repairs if any.' },
      { q: 'How long does a comprehensive inspection take?', a: 'About 60–90 minutes.' },
    ],
    'windshields-and-lights': [
      { q: 'Can you repair small chips?', a: 'Yes, minor chips and cracks can often be repaired without replacement.' },
      { q: 'Do you restore yellowed headlights?', a: 'Yes, headlight restoration brings back clarity and output.' },
    ],
    'suspension-and-fitments': [
      { q: 'What are signs of bad suspension?', a: 'Uneven tyre wear, knocking sounds, excessive bounce or pulling.' },
      { q: 'Do you install accessories?', a: 'Yes, we fit OEM-compatible accessories with clean wiring and mounts.' },
    ],
    'clutch-and-body-parts': [
      { q: 'When should I replace the clutch?', a: 'Slipping, hard gear shifts, or high pedal bite point are common signs.' },
      { q: 'Are body parts painted to match?', a: 'Yes, replacements are painted and blended to match the vehicle color.' },
    ],
    'insurance-claims': [
      { q: 'Is cashless claim support available?', a: 'Yes, we coordinate with insurers for cashless repairs.' },
      { q: 'What documents are required?', a: 'RC, DL, policy copy, and claim form; we guide you through the process.' },
    ],
  };

  return (
    <>
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-10">
        <div>
          <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
            {(() => {
              const Icon = iconMap[slug || ''] as any;
              return Icon ? <Icon className="h-8 w-8 text-orange-600" /> : null;
            })()}
            {toTitle(slug)}
          </h1>
          <p className="text-gray-600 max-w-3xl">
            {descriptionMap[slug || 'car-services'] ||
              `Keep your vehicle in peak condition with our comprehensive ${toTitle(slug)} package.`}
          </p>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md">
              <img src={src} alt={`${toTitle(slug)} ${i + 1}`} className="w-full h-64 object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">What’s included</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Multi-point inspection and diagnostic scan</li>
              <li>Genuine parts and fluids with manufacturer specification</li>
              <li>Road-test, quality checks, and detailed service report</li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Transparent Pricing</h3>
            <div className="space-y-3">
              {(pricingMap[slug || 'car-services'] || []).map((tier) => (
                <div key={tier.label} className="flex items-center justify-between">
                  <span className="text-gray-700">{tier.label}</span>
                  <span className="font-bold">{tier.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">Prices vary by vehicle model and brand.</p>
            <a href="/booking" className="inline-block mt-5 px-5 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              Book Now
            </a>
          </div>
        </div>

        {/* FAQs */}
        {faqsMap[slug || ''] && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">FAQs</h3>
            <div className="space-y-3">
              {faqsMap[slug || ''].map((f, idx) => (
                <div key={idx} className="bg-white rounded-lg border p-4">
                  <p className="font-medium">{f.q}</p>
                  <p className="text-gray-600 text-sm mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetail;


