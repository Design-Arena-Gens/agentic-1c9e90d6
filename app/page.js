'use client';

import { useEffect, useState } from 'react';

export default function DoorCamera() {
  const [currentTime, setCurrentTime] = useState('');
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Start recording animation
    const recordInterval = setInterval(() => {
      setRecording(prev => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(recordInterval);
    };
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Camera overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
        pointerEvents: 'none',
        zIndex: 10
      }} />

      {/* Top bar - Camera info */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '15px 20px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
        color: 'white',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: recording ? '#ff0000' : '#666',
            transition: 'background-color 0.3s'
          }} />
          <span style={{ fontSize: '14px', fontWeight: '500' }}>FRONT DOOR CAMERA</span>
        </div>
        <span style={{ fontSize: '14px', fontFamily: 'monospace' }}>{currentTime}</span>
      </div>

      {/* Main content area */}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative'
      }}>
        {/* Outdoor scene */}
        <div style={{
          position: 'relative',
          width: '90%',
          maxWidth: '800px',
          height: '70%',
          background: 'linear-gradient(to bottom, #87CEEB 0%, #98D8C8 50%, #90EE90 100%)',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 0 50px rgba(0,0,0,0.5)'
        }}>
          {/* Door */}
          <div style={{
            position: 'absolute',
            right: '10%',
            bottom: 0,
            width: '120px',
            height: '250px',
            backgroundColor: '#8B4513',
            border: '3px solid #654321',
            borderRadius: '4px 4px 0 0'
          }}>
            {/* Door knob */}
            <div style={{
              position: 'absolute',
              right: '15px',
              top: '45%',
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              backgroundColor: '#FFD700',
              border: '2px solid #DAA520'
            }} />
          </div>

          {/* Ground */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            backgroundColor: '#90EE90',
            borderTop: '2px solid #7CCD7C'
          }} />

          {/* Dog */}
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '30%',
            transform: 'translateX(-50%)'
          }}>
            {/* Dog body */}
            <div style={{
              width: '140px',
              height: '80px',
              backgroundColor: '#D2691E',
              borderRadius: '40px',
              position: 'relative'
            }}>
              {/* Dog head */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                left: '80px',
                width: '70px',
                height: '60px',
                backgroundColor: '#D2691E',
                borderRadius: '30px',
                transform: 'rotate(-10deg)'
              }}>
                {/* Ear */}
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '10px',
                  width: '25px',
                  height: '35px',
                  backgroundColor: '#CD853F',
                  borderRadius: '15px',
                  transform: 'rotate(-20deg)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '5px',
                  width: '25px',
                  height: '35px',
                  backgroundColor: '#CD853F',
                  borderRadius: '15px',
                  transform: 'rotate(20deg)'
                }} />

                {/* Eyes */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '15px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#000',
                  borderRadius: '50%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '15px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#000',
                  borderRadius: '50%'
                }} />

                {/* Nose */}
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '10px',
                  width: '12px',
                  height: '10px',
                  backgroundColor: '#000',
                  borderRadius: '50%'
                }} />
              </div>

              {/* Legs */}
              <div style={{
                position: 'absolute',
                bottom: '-35px',
                left: '20px',
                width: '18px',
                height: '40px',
                backgroundColor: '#CD853F',
                borderRadius: '9px'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-35px',
                left: '50px',
                width: '18px',
                height: '40px',
                backgroundColor: '#CD853F',
                borderRadius: '9px'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-35px',
                right: '40px',
                width: '18px',
                height: '40px',
                backgroundColor: '#CD853F',
                borderRadius: '9px'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-35px',
                right: '15px',
                width: '18px',
                height: '40px',
                backgroundColor: '#CD853F',
                borderRadius: '9px'
              }} />

              {/* Tail */}
              <div style={{
                position: 'absolute',
                left: '-20px',
                top: '10px',
                width: '30px',
                height: '15px',
                backgroundColor: '#D2691E',
                borderRadius: '15px',
                transform: 'rotate(30deg)'
              }} />
            </div>

            {/* Burger in front of dog */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-30px',
              transform: 'rotate(-5deg)'
            }}>
              {/* Top bun */}
              <div style={{
                width: '60px',
                height: '25px',
                backgroundColor: '#DEB887',
                borderRadius: '30px 30px 5px 5px',
                border: '2px solid #D2A679',
                position: 'relative'
              }}>
                {/* Sesame seeds */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  left: '15px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#F5DEB3',
                  borderRadius: '50%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '30px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#F5DEB3',
                  borderRadius: '50%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#F5DEB3',
                  borderRadius: '50%'
                }} />
              </div>
              {/* Lettuce */}
              <div style={{
                width: '60px',
                height: '8px',
                backgroundColor: '#90EE90',
                marginTop: '-2px'
              }} />
              {/* Patty */}
              <div style={{
                width: '60px',
                height: '15px',
                backgroundColor: '#8B4513',
                border: '1px solid #654321'
              }} />
              {/* Cheese */}
              <div style={{
                width: '60px',
                height: '8px',
                backgroundColor: '#FFD700'
              }} />
              {/* Bottom bun */}
              <div style={{
                width: '60px',
                height: '12px',
                backgroundColor: '#DEB887',
                borderRadius: '5px 5px 5px 5px',
                border: '2px solid #D2A679'
              }} />
            </div>
          </div>

          {/* Motion detection indicator */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            padding: '8px 15px',
            backgroundColor: 'rgba(255, 0, 0, 0.8)',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
            borderRadius: '4px',
            border: '2px solid #ff0000'
          }}>
            ⚠️ MOTION DETECTED
          </div>
        </div>
      </div>

      {/* Bottom bar - Camera controls */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '15px 20px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        color: 'white',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '12px'
      }}>
        <span>🔴 RECORDING</span>
        <span>📹 1080p HD</span>
        <span>🔊 AUDIO ON</span>
      </div>

      {/* Scan lines effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        pointerEvents: 'none',
        zIndex: 15
      }} />
    </div>
  );
}
