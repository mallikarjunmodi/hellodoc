// In your layout.tsx or any other component
import { JitsiMeeting } from '@jitsi/react-sdk';

const MyAppLayout = () => {
  return (
    <div>
      <h1>My Video Consultation</h1>
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
    </div>
  );
};

export default MyAppLayout;
