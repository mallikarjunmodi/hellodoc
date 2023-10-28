import dynamic from 'next/dynamic';

const JitsiMeeting = dynamic(() => import('@jitsi/react-sdk').then((mod) => mod.JitsiMeeting), {
  ssr: false,
});

const JitsiComponent = () => {
  return (
    <JitsiMeeting
      roomName="MyConsultationRoom"
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
      }}
      userInfo={{
        displayName: 'Patient Name',
        email: 'email',
      }}
      onApiReady={(externalApi) => {
        // Custom event listeners or commands can be added here
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = '400px';
      }}
    />
  );
};

export default JitsiComponent;
