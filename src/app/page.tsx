"use client"
import Navbar from "../components/Navbar";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LinkIcon from '@mui/icons-material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';
import type { StepIconProps as MuiStepIconProps } from '@mui/material/StepIcon';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Users, Heart, HousePlug, Clock, Star, Theater, Play, Network, BookOpen } from 'lucide-react';
import WhyJoinReasons from '../components/WhyJoinReasons';
import FAQAccordion from '../components/FAQAccordion';

const steps = [
  'Enter your email',
  'Wait for response',
  'Accept invitation',
  'Download the app',
];

const StepIcons = [
  EmailIcon,
  HourglassEmptyIcon,
  LinkIcon,
  DownloadIcon,
];

// Custom gradient connector using MUI's StepConnector for proper alignment
const GradientConnector = styled(StepConnector)({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    background: 'linear-gradient(90deg, #ff5e62 0%, #ff9966 100%)',
    borderRadius: 1.5,
  },
});

function CustomStepIcon(props: MuiStepIconProps) {
  const { active = false, completed = false, icon } = props;
  const iconIndex = typeof icon === 'number' ? icon - 1 : 0;
  const IconComponent = StepIcons[iconIndex];
  return (
    <div
      style={{
        background: completed || active
          ? 'linear-gradient(135deg, #ff5e62 0%, #ff9966 100%)'
          : '#e0e0e0',
        color: completed || active ? '#fff' : '#757575',
        borderRadius: '50%',
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        margin: '0 auto',
        boxShadow: 'none',
      }}
    >
      <IconComponent fontSize="inherit" />
    </div>
  );
}

const features = [
  {
    icon: <Users className="w-8 h-8 text-gray-700" />,
    title: "Family Tree",
    subtitle: "App"
  },
  {
    icon: <Heart className="w-8 h-8 text-gray-700" />,
    title: "Preserve Family",
    subtitle: "History"
  },
  {
    icon: <HousePlug className="w-8 h-8 text-gray-700" />,
    title: "Online Family",
    subtitle: "Networking"
  },
  {
    icon: <Clock className="w-8 h-8 text-gray-700" />,
    title: "Time Capsule",
    subtitle: "Creations"
  },
  {
    icon: <Star className="w-8 h-8 text-gray-700" />,
    title: "Family Event",
    subtitle: "Organizer"
  },
  {
    icon: <Theater className="w-8 h-8 text-gray-700" />,
    title: "Cultural Heritage",
    subtitle: "Preservation"
  },
  {
    icon: <Users className="w-8 h-8 text-gray-700" />,
    title: "Digital Family",
    subtitle: "Legacy"
  },
  {
    icon: <Play className="w-8 h-8 text-gray-700" />,
    title: "Family storytelling",
    subtitle: "tools"
  },
  {
    icon: <Network className="w-8 h-8 text-gray-700" />,
    title: "Ancestral Origin",
    subtitle: "Mapping"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-gray-700" />,
    title: "Collaborative",
    subtitle: "Family Chronicles"
  }
];

const features2 = [
  {
    title: 'Family Tree',
    subtitle: 'Easily create and customize your family tree with our intuitive interface. Add family members, link relationships, and update details as your family grows.',
    img: '/tree-thumbnail.png',
  },
  {
    title: 'Private Family Networking',
    subtitle: "Securely connect with your family members through private messaging and shared spaces.Plan reunions, celebrate milestones, and stay updated with family affairs, all in one place.",
    img: '/Frame-1977-1.png',
  },
  {
    title: 'Secure and private Sharing',
    subtitle: 'Share your family stories in a secure environment, with control over who can view and contribute to your narrative.',
    img: '/chatimg.png',
  },
  {
    title: 'Rich Storytelling Tools',
    subtitle: "Capture and preserve your family's milestones through photos, videos, and stories. Our multimedia tools let you narrate your family's history in the most engaging way.",
    img: '/story-telling-features.png',
  },
  {
    title: 'Digital Time Capsules',
    subtitle: 'Lock away precious memories and messages in digital time capsules to be discovered by future generations, ensuring your legacy lasts forever.',
    img: '/digital-tiem.png',
  },
  {
    title: 'Family Locator',
    subtitle: 'See where your family members are and organize meetups easily. Privacy-first location sharing for peace of mind.',
    img: '/mapfinder.png',
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  async function handleEmailSubmit() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: 'Thank you for joining the closed test!'
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setActiveStep(1);
    } catch (err) {
      console.error(err);
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center font-sans" style={{ fontFamily: 'Montserrat, var(--font-geist-sans), Arial, Helvetica, sans-serif' }}>
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="w-full bg-white py-20 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12 md:py-20">

        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl md:text-5xl mb-6" style={{
            background: 'linear-gradient(90deg, #a259ff 0%, #ff5e62 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            CONNECT GENERATIONS FROM <br />MEMORIES TO LEGACY.
          </h1>
          <p className="text-lg md:text-lg mb-8 text-black">Transform Family Moments Into a Legacy & Creating Strong Bonds Between Past and Future</p>
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 font-bold text-lg text-white"
            style={{
              background: 'linear-gradient(90deg, #ff9966 0%, #a259ff 100%)',
              boxShadow: '0 2px 8px rgba(162,89,255,0.15)'
            }}
          >
            GET EARLY ACCESS 
          </button>
        </div>
        {/* Right: Image/Video Placeholder */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="overflow-hidden flex items-center justify-center relative">
            <img src="/thumbnail.png" alt="Family playing" className="object-cover w-full h-full" />
            {/* Play Button Overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center focus:outline-none"
              style={{ background: 'rgba(0,0,0,0.25)' }}
              onClick={() => setShowVideo(true)}
              aria-label="Play video"
            >
              <span className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="#fff" fillOpacity="0.8"/>
                  <polygon points="20,16 34,24 20,32" fill="#a259ff" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* Video Overlay */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute top-6 right-8 z-50 text-white text-4xl font-bold hover:text-pink-300 focus:outline-none"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
              >
                &times;
              </button>
              <video
                src="/video.mp4"
                controls
                autoPlay
                className="rounded-2xl shadow-2xl max-w-3xl w-full h-auto bg-black"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          </div>
        )}
      </section>

      <section id="about" className="w-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden py-16 relative">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <img src="/blob-scatter-haikei.svg" alt="background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                DISCOVER MY<br />
                LINEAGE APP
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 font-light">
                Your Ultimate Tool To Build, Preserve,<br />
                And Share Your Family Heritage.
              </p>
            </div>

            {/* Right Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    {feature.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Timeline Style) */}
      <section id="features" className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16"
            style={{
              background: 'linear-gradient(90deg, #a259ff 0%, #ff5e62 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', color: 'transparent'
            }}>FEATURES</h2>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Timeline vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-purple-700 z-0" style={{ transform: 'translateX(-50%)' }}></div>
            {/* Left column */}
            <div className="flex flex-col gap-24 relative z-10">
              {features2.slice(0, 3).map((feature, i) => (
                <div key={i} className="flex flex-col items-center gap-8 relative md:flex-col">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-lg text-gray-700">{feature.subtitle}</p>
                  </div>
                  <img src={feature.img} alt={feature.title} className="w-92 h-92 object-cover max-w-xs md:max-w-full" />
                </div>
              ))}
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-24 relative z-10">
              {features2.slice(3, 6).map((feature, i) => (
                <div key={i} className="flex flex-col items-center gap-8 relative md:flex-col">
                  {/* Dot on timeline */}
                  <div className="hidden md:block absolute left-[-45px] top-1/2 transform -translate-y-1/2">
                    <span className="block w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 border-4 border-white shadow-lg"></span>
                  </div>
                  <img src={feature.img} alt={feature.title} className="w-98 h-92 object-cover  max-w-xs md:max-w-full" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-lg text-gray-700">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Connections Section */}
      <section className="w-full py-16 bg-[#f8f2fc] flex justify-center items-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-8 rounded-xl" style={{ background: 'rgba(248,242,252,0.7)' }}>
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center items-start gap-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ background: 'linear-gradient(90deg, #ff5e62 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>DEEP CONNECTIONS</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-black">Transform the way you connect—</h3>
            <p className="text-base md:text-lg text-gray-700 mb-4">Offering a private, secure space to share, collaborate, and celebrate every family milestone, from the extraordinary to the everyday.</p>
            <button
              className="px-8 py-3 font-bold text-lg mt-2"
              style={{ background: 'linear-gradient(90deg, #ff9966 0%, #a259ff 100%)', color: 'white', boxShadow: '0 2px 8px rgba(162,89,255,0.15)' }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET EARLY ACCESS 
            </button>
          </div>
          {/* Right Images Grid */}
          <div className="flex-1 ">
            <img src="/fam.png" alt="Family 1" className=" object-cover w-full h-full" />

          </div>
        </div>
      </section>

      {/* WHY JOIN Section */}
      <section className="w-full py-24 bg-white flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold text-center mb-4" style={{ background: 'linear-gradient(90deg, #a259ff 0%, #ff5e62 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>WHY JOIN</h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-black">Preserve Your Family&apos;s Past, Enrich Its Present, <br className='hidden md:block' />Secure Its Future</h3>
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
          {/* Left Side: Reasons */}
          <div className="flex-1 flex flex-col items-center">
            <WhyJoinReasons />
          </div>
          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src="/tree.png" alt="Family Tree" className=" w-72 md:w-80 lg:w-96 h-auto mx-auto" />
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{background: 'linear-gradient(90deg, #1db954 0%, #a259ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent'}}>LISTEN TO OUR PODCAST</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-8">Discover more about the MyLineage App, its features, and the vision behind it. Listen to our podcast episodes and get inspired to preserve your family legacy!</p>
        <a href="https://spotifycreators-web.app.link/e/AZVrggKpaUb" target="_blank" rel="noopener noreferrer" className="inline-block mb-10 px-8 py-3 font-bold text-lg rounded shadow-md" style={{background: 'linear-gradient(90deg, #1db954 0%, #a259ff 100%)', color: 'white'}}>Visit our Spotify Podcast</a>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center">
          {/* Podcast Episode 1 */}
          <a href="https://open.spotify.com/episode/1b7ORU35K0Lui83vpGs1lx?si=-u5bBKNoTsi6gC5tafc9-g" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-50 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100">
              <svg width="32" height="32" fill="currentColor" className="text-green-500" viewBox="0 0 20 20"><path d="M6.5 5.5v9l7-4.5-7-4.5z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Intro Podcast</h3>
            <p className="text-gray-600 text-center text-base mb-2">Learn how MyLineage helps families preserve and share memories across generations.</p>
            <span className="text-green-600 font-semibold">Listen on Spotify</span>
          </a>
          {/* Podcast Episode 2 */}
          <a href="https://open.spotify.com/episode/5OQ2q2kBd4F7xXyCNn6Rvg?si=EQqoCej-Sqml6Qsdx7bJKA" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-50 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100">
              <svg width="32" height="32" fill="currentColor" className="text-green-500" viewBox="0 0 20 20"><path d="M6.5 5.5v9l7-4.5-7-4.5z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">The Family Tree Feature</h3>
            <p className="text-gray-600 text-center text-base mb-2">Explore how the Family Tree feature connects generations and keeps memories alive.</p>
            <span className="text-green-600 font-semibold">Listen on Spotify</span>
          </a>
        </div>
      </section>

      {/* Waitlist Section */}
      <div id="waitlist" className="w-full max-w-2xl mt-12 mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">RESERVE YOUR SPOT</h2>
        <p className="text-center text-lg mb-8">
          Sign up today to gain early access and start building a legacy that spans generations.
        </p>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<GradientConnector />}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={CustomStepIcon}
                onClick={() => setActiveStep(index)}
                style={{ cursor: 'pointer', color: activeStep === index ? '#ff5e62' : undefined }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="mt-12 p-8 bg-white rounded-lg text-center" style={{ boxShadow: 'none' }}>
          {activeStep === 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Enter your email to join the waitlist</h2>
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 rounded px-4 py-2 w-full max-w-md mb-4"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
              />
              <button
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded font-semibold ml-2"
                onClick={handleEmailSubmit}
                disabled={loading || !email}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </>
          )}
          {activeStep === 1 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Wait for a response</h2>
              <p className="mb-4">We are reviewing your request. You will receive an email if you are accepted.</p>
            </>
          )}
          {activeStep === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Accept the invitation</h2>
              <p className="mb-4">If you received an acceptance email, click the link below to accept the invitation:</p>
              <a href="https://play.google.com/apps/testing/com.lineageproject.mobile" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-4 block">Accept Invitation Link</a>
            </>
          )}
          {activeStep === 3 && (
            <>
              <h2 className="text-2xl font-bold mb-4">Download the app</h2>
              <p className="mb-4">You can now download and test the app from the Play Store:</p>
              <a href="https://play.google.com/store/apps/details?id=com.lineageproject.mobile" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-4 block">Go to Play Store</a>
            </>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-white flex flex-col items-center" id="faq">
        <h2 className="text-5xl font-bold text-center mb-4">FAQs</h2>
        <p className="text-lg text-gray-700 text-center mb-12">Dive Into The Details About Connecting Family Members Across Generations.</p>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
          <FAQAccordion />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-pink-400 via-purple-500 to-orange-300 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Contact */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img src="/footer-logo.png" alt="MyLineage Logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold">info@lineageproject.co</span>
          </div>
          {/* Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://lineageapp-f5488.web.app/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">Privacy Policy</a>
            <a href="https://lineagedata-d9c63.web.app/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">Terms of Service</a>
          </div>
          {/* Copyright */}
          <div className="text-center md:text-right text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} MyLineage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

