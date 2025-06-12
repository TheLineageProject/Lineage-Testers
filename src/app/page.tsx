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
import { 
  Users, 
  Heart, 
  HousePlug, 
  Clock, 
  Star, 
  Theater, 
  Play, 
  Network, 
  MapPin,
  BookOpen
} from 'lucide-react';

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

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      <div className="w-full bg-white py-20 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12 md:py-20">
        
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
            JOIN WAITLIST
          </button>
        </div>
        {/* Right: Image/Video Placeholder */}
        <div className="flex-1 flex justify-center items-center">
          <div className="overflow-hidden rounded-[40px_40px_120px_40px] border-4 border-purple-100 shadow-lg max-w-md w-full aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            
            <img src="/thumbnail.png" alt="Family playing" className="object-cover w-full h-full" />
            {/* For video, you could use: <video src="/yourvideo.mp4" controls className="object-cover w-full h-full" /> */}
          </div>
        </div>
      </div>

      <section className="w-full bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4">
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

      {/* Why Join Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WHY JOIN</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Deepen Family Bonds",
              "Preserve Intangible Heritage",
              "Bridge Geographical Distances",
              "Celebrate Every Life",
              "Preserve Unique Memories & Moments",
              "Chronicle Every Voice"
            ].map((reason, index) => (
              <div key={index} className="text-center p-6">
                <p className="text-lg font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">Contact: hello@mylineage.co</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="/privacy-policy" className="hover:text-pink-400">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-pink-400">Terms of Service</a>
          </div>
          <p>&copy; {new Date().getFullYear()} MyLineage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
