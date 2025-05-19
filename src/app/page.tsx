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
      <div className="w-full max-w-2xl mt-12">
        <p className="text-center text-lg mb-8">
          We are running a closed test for our app on Google Play. We are grateful for your interest and would love to have you join us as an early tester. Your feedback will help us make the app better for everyone!
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
              <h2 className="text-2xl font-bold mb-4">Enter your email to join the closed test</h2>
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
    </div>
  );
}
